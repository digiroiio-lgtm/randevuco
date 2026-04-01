'use client';

import { useState, Fragment } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import styles from './page.module.css';

/* ─────────────────────────────────────────────────────────────
   MOCK DATA  (replace with real API calls)
───────────────────────────────────────────────────────────── */

const BUSINESS = {
  name: 'Serdar Zorlu Saç Tasarım Stüdyosu',
  type: 'Kuaför',
  owner: 'Serdar Zorlu',
  email: 's.zorlu12@gmail.com',
  phone: '0532 123 45 67',
  city: 'İstanbul',
  district: 'Beşiktaş',
  address: 'Sinanpaşa Mah. Çırağan Cd. No:12',
  about:
    'İstanbul Beşiktaş\'ta 15 yıldır hizmet veren saç tasarım stüdyomuzda deneyimli ekibimizle saç kesimi, renklendirme ve bakım hizmetleri sunuyoruz.',
  website: '',
  instagram: '@serdar_sac',
};

type Appointment = {
  id: number;
  customer: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  status: 'bekliyor' | 'onaylı' | 'tamamlandı' | 'iptal' | 'noshow';
  phone?: string;
};

const APPOINTMENTS_DATA: Appointment[] = [
  { id: 1, customer: 'Ahmet Yılmaz',   service: 'Saç Kesimi',         staff: 'Serdar Zorlu',  date: '2026-04-01', time: '09:00', duration: '45 dk', price: '₺350', status: 'onaylı' },
  { id: 2, customer: 'Merve Kaya',     service: 'Renklendirme',       staff: 'Serdar Zorlu',  date: '2026-04-01', time: '10:30', duration: '90 dk', price: '₺800', status: 'onaylı' },
  { id: 3, customer: 'Canan Şahin',    service: 'Keratin Bakımı',     staff: 'Selin Çelik',   date: '2026-04-01', time: '13:00', duration: '120 dk', price: '₺1200', status: 'bekliyor' },
  { id: 4, customer: 'Tolga Demir',    service: 'Saç Kesimi',         staff: 'Selin Çelik',   date: '2026-04-01', time: '15:00', duration: '45 dk', price: '₺350', status: 'bekliyor' },
  { id: 5, customer: 'Elif Arslan',    service: 'Balyaj',             staff: 'Serdar Zorlu',  date: '2026-04-02', time: '11:00', duration: '150 dk', price: '₺1500', status: 'onaylı' },
  { id: 6, customer: 'Kemal Öztürk',  service: 'Saç + Sakal Kesimi', staff: 'Selin Çelik',   date: '2026-04-02', time: '14:00', duration: '60 dk', price: '₺450', status: 'onaylı' },
  { id: 7, customer: 'Büşra Yıldız',  service: 'Renklendirme',       staff: 'Serdar Zorlu',  date: '2026-03-31', time: '10:00', duration: '90 dk', price: '₺800', status: 'tamamlandı' },
  { id: 8, customer: 'Okan Güneş',    service: 'Saç Kesimi',         staff: 'Selin Çelik',   date: '2026-03-31', time: '12:00', duration: '45 dk', price: '₺350', status: 'tamamlandı' },
  { id: 9, customer: 'Derya Polat',   service: 'Keratin Bakımı',     staff: 'Serdar Zorlu',  date: '2026-03-30', time: '09:30', duration: '120 dk', price: '₺1200', status: 'iptal' },
];

type Service = {
  id: number;
  category: string;
  name: string;
  duration: string;
  price: string;
  active: boolean;
};

const INITIAL_SERVICES: Service[] = [
  { id: 1, category: 'Saç Kesimi',   name: 'Saç Kesimi (Kadın)',       duration: '45 dk',  price: '₺350',  active: true },
  { id: 2, category: 'Saç Kesimi',   name: 'Saç Kesimi (Erkek)',       duration: '30 dk',  price: '₺250',  active: true },
  { id: 3, category: 'Saç Kesimi',   name: 'Saç + Sakal Kesimi',       duration: '60 dk',  price: '₺450',  active: true },
  { id: 4, category: 'Renklendirme', name: 'Tek Renk Boyama',          duration: '90 dk',  price: '₺800',  active: true },
  { id: 5, category: 'Renklendirme', name: 'Balyaj',                   duration: '150 dk', price: '₺1500', active: true },
  { id: 6, category: 'Renklendirme', name: 'Röfle',                    duration: '120 dk', price: '₺1200', active: true },
  { id: 7, category: 'Bakım',        name: 'Keratin Bakımı',           duration: '120 dk', price: '₺1200', active: true },
  { id: 8, category: 'Bakım',        name: 'Saç Botoksu',              duration: '90 dk',  price: '₺1000', active: false },
  { id: 9, category: 'Bakım',        name: 'Derin Nemlendirme Maskesi', duration: '30 dk', price: '₺300',  active: true },
];

/* ── Staff types & data ── */
type StaffMember = {
  id: number;
  name: string;
  role: string;
  phone: string;
  services: string[];
  workDays: string[];
  workStart: string;
  workEnd: string;
  slotInterval: '15' | '30';
  active: boolean;
  perf: {
    appointments: number;
    revenue: number;
    avgTransaction: number;
    utilization: number;
  };
  topServices: { name: string; count: number }[];
};

const ALL_STAFF_SERVICES = ['Saç Kesimi', 'Renklendirme', 'Keratin', 'Balyaj', 'Saç Botoksu'];
const ALL_DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
const ROLES = ['Stylist', 'Senior Stylist', 'Colorist', 'Barber'];
const SLOT_OPTIONS: ('15' | '30')[] = ['15', '30'];

const INITIAL_STAFF: StaffMember[] = [
  {
    id: 1,
    name: 'Serdar Zorlu',
    role: 'Senior Stylist',
    phone: '0532 111 22 33',
    services: ['Saç Kesimi', 'Balyaj', 'Renklendirme'],
    workDays: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    workStart: '09:00',
    workEnd: '20:00',
    slotInterval: '30',
    active: true,
    perf: { appointments: 22, revenue: 11500, avgTransaction: 523, utilization: 82 },
    topServices: [
      { name: 'Saç Kesimi', count: 10 },
      { name: 'Balyaj', count: 8 },
      { name: 'Renklendirme', count: 4 },
    ],
  },
  {
    id: 2,
    name: 'Selin Çelik',
    role: 'Stylist',
    phone: '0533 444 55 66',
    services: ['Saç Kesimi', 'Keratin'],
    workDays: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'],
    workStart: '09:00',
    workEnd: '18:00',
    slotInterval: '30',
    active: true,
    perf: { appointments: 18, revenue: 8100, avgTransaction: 450, utilization: 67 },
    topServices: [
      { name: 'Saç Kesimi', count: 12 },
      { name: 'Keratin', count: 4 },
      { name: 'Renklendirme', count: 2 },
    ],
  },
];

/* Calendar mock: for each hour slot & staff, optionally a customer name */
const CALENDAR_SLOTS = [
  { hour: '09:00', serdar: 'Ahmet Y.',   selin: 'Okan G.' },
  { hour: '10:00', serdar: null,          selin: 'Merve K.' },
  { hour: '11:00', serdar: 'Elif A.',     selin: null },
  { hour: '12:00', serdar: null,          selin: null },
  { hour: '13:00', serdar: null,          selin: 'Canan Ş.' },
  { hour: '14:00', serdar: null,          selin: null },
  { hour: '15:00', serdar: null,          selin: 'Tolga D.' },
  { hour: '16:00', serdar: null,          selin: null },
  { hour: '17:00', serdar: null,          selin: null },
];

type NewStaffForm = {
  name: string;
  role: string;
  phone: string;
  services: string[];
  workDays: string[];
  workStart: string;
  workEnd: string;
  slotInterval: '15' | '30';
};

const INITIAL_NEW_STAFF: NewStaffForm = {
  name: '',
  role: 'Stylist',
  phone: '',
  services: [],
  workDays: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'],
  workStart: '09:00',
  workEnd: '18:00',
  slotInterval: '30',
};

/* ── Customer types & data ── */
type Customer = {
  id: number;
  name: string;
  phone: string;
  visitCount: number;
  totalSpend: number;
  trustScore: number;
  lastVisit: string;
  notes: string;
};

const INITIAL_CUSTOMERS: Customer[] = [
  { id: 1, name: 'Ahmet Yılmaz',  phone: '0532 111 11 11', visitCount: 8,  totalSpend: 2800,  trustScore: 100, lastVisit: '2026-04-01', notes: '' },
  { id: 2, name: 'Merve Kaya',    phone: '0533 222 22 22', visitCount: 12, totalSpend: 9600,  trustScore: 90,  lastVisit: '2026-04-01', notes: '' },
  { id: 3, name: 'Canan Şahin',   phone: '0534 333 33 33', visitCount: 3,  totalSpend: 3600,  trustScore: 80,  lastVisit: '2026-04-01', notes: '' },
  { id: 4, name: 'Tolga Demir',   phone: '0535 444 44 44', visitCount: 5,  totalSpend: 1750,  trustScore: 70,  lastVisit: '2026-04-01', notes: '' },
  { id: 5, name: 'Elif Arslan',   phone: '0536 555 55 55', visitCount: 7,  totalSpend: 10500, trustScore: 100, lastVisit: '2026-04-02', notes: '' },
  { id: 6, name: 'Kemal Öztürk', phone: '0537 666 66 66', visitCount: 2,  totalSpend: 900,   trustScore: 90,  lastVisit: '2026-04-02', notes: '' },
];

type BookingSettings = {
  autoApproval: boolean;
  cancellationHours: number;
  whatsapp: boolean;
  smsReminder: boolean;
  emailReminder: boolean;
  reminderTiming: '24h' | '2h' | 'both';
};

const WORKING_HOURS = [
  { day: 'Pazartesi', open: '09:00', close: '20:00', closed: false },
  { day: 'Salı',      open: '09:00', close: '20:00', closed: false },
  { day: 'Çarşamba',  open: '09:00', close: '20:00', closed: false },
  { day: 'Perşembe',  open: '09:00', close: '20:00', closed: false },
  { day: 'Cuma',      open: '09:00', close: '21:00', closed: false },
  { day: 'Cumartesi', open: '10:00', close: '19:00', closed: false },
  { day: 'Pazar',     open: '10:00', close: '17:00', closed: true },
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */
const STATUS_LABEL: Record<Appointment['status'], string> = {
  bekliyor:   'Bekliyor',
  onaylı:     'Onaylı',
  tamamlandı: 'Tamamlandı',
  iptal:      'İptal',
  noshow:     'No-show',
};

function fmtDate(iso: string) {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', weekday: 'short' });
}

/* ── Calendar helpers ── */
function timeToMin(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}
function minToTime(mins: number): string {
  return `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
}
function parseDuration(d: string): number {
  return parseInt(d) || 30;
}

function getWeekDays(isoDate: string): string[] {
  const d = new Date(isoDate + 'T12:00:00');
  const dow = d.getDay();
  const mondayOffset = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(d);
  monday.setDate(d.getDate() + mondayOffset);
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    return day.toISOString().slice(0, 10);
  });
}

function getMonthCells(isoDate: string): (string | null)[] {
  const d = new Date(isoDate + 'T12:00:00');
  const year = d.getFullYear();
  const month = d.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDow = firstDay.getDay();
  const mondayStart = startDow === 0 ? 6 : startDow - 1;
  const cells: (string | null)[] = Array(mondayStart).fill(null);
  for (let day2 = 1; day2 <= lastDay.getDate(); day2++) {
    cells.push(`${year}-${String(month + 1).padStart(2, '0')}-${String(day2).padStart(2, '0')}`);
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const DAY_SLOTS: string[] = Array.from({ length: 24 }, (_, i) => minToTime(8 * 60 + i * 30));
const WEEK_HOURS: string[] = Array.from({ length: 12 }, (_, i) => `${String(8 + i).padStart(2, '0')}:00`);
const TR_DAYS_SHORT = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
type Tab = 'genel' | 'randevular' | 'hizmetler' | 'personel' | 'musteriler' | 'profil' | 'ayarlar';

export default function PanelPage() {
  const [activeTab, setActiveTab] = useState<Tab>('genel');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Services state
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [showAddService, setShowAddService] = useState(false);
  const [newSvc, setNewSvc] = useState({ category: '', name: '', duration: '', price: '' });

  // Profile state
  const [profile, setProfile] = useState({ ...BUSINESS });
  const [profileSaved, setProfileSaved] = useState(false);

  // Appointment filter
  const [apptFilter, setApptFilter] = useState<'tümü' | Appointment['status']>('tümü');

  // Working hours state
  const [hours, setHours] = useState(WORKING_HOURS);
  const [hoursSaved, setHoursSaved] = useState(false);

  // Notifications
  const [notif, setNotif] = useState({ sms: true, email: true, push: false, reminder24h: true, reminder2h: true });
  const [notifSaved, setNotifSaved] = useState(false);

  // Staff state
  const [staff, setStaff] = useState<StaffMember[]>(INITIAL_STAFF);
  const [staffSubTab, setStaffSubTab] = useState<'liste' | 'performans' | 'takvim'>('liste');
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [newStaff, setNewStaff] = useState<NewStaffForm>({ ...INITIAL_NEW_STAFF });
  const [selectedStaffId, setSelectedStaffId] = useState<number | null>(null);

  // Appointments state
  const [appointments, setAppointments] = useState<Appointment[]>(APPOINTMENTS_DATA);

  // Calendar / booking views
  const [randevuView, setRandevuView] = useState<'liste' | 'gun' | 'hafta' | 'ay'>('liste');
  const [calDate, setCalDate] = useState<string>(() => new Date().toISOString().slice(0, 10));
  const [calStaff, setCalStaff] = useState<string>('');
  const [dragApptId, setDragApptId] = useState<number | null>(null);

  // Customers CRM
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  // Booking settings
  const [bookingSettings, setBookingSettings] = useState<BookingSettings>({
    autoApproval: false,
    cancellationHours: 24,
    whatsapp: true,
    smsReminder: true,
    emailReminder: true,
    reminderTiming: 'both',
  });
  const [bookingSettingsSaved, setBookingSettingsSaved] = useState(false);

  /* ── derived ── */
  const today = new Date().toISOString().slice(0, 10);
  const todayAppts = appointments.filter((a) => a.date === today && a.status !== 'iptal');
  const pendingCount = appointments.filter((a) => a.status === 'bekliyor').length;
  const monthRevenue = appointments.filter((a) => a.status === 'tamamlandı')
    .reduce((sum, a) => sum + parseInt(a.price.replace(/[^\d]/g, '')), 0);
  const filteredAppts =
    apptFilter === 'tümü' ? appointments : appointments.filter((a) => a.status === apptFilter);

  // Calendar-derived
  const weekDays = getWeekDays(calDate);
  const monthCells = getMonthCells(calDate);
  const dayViewStaff = staff.filter((sm) => sm.active && (!calStaff || sm.name === calStaff));

  /* ── handlers ── */
  function toggleService(id: number) {
    setServices((prev) => prev.map((s) => s.id === id ? { ...s, active: !s.active } : s));
  }
  function deleteService(id: number) {
    setServices((prev) => prev.filter((s) => s.id !== id));
  }
  function addService() {
    if (!newSvc.name || !newSvc.price) return;
    setServices((prev) => [...prev, { id: Date.now(), ...newSvc, active: true }]);
    setNewSvc({ category: '', name: '', duration: '', price: '' });
    setShowAddService(false);
  }

  function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  }
  function saveHours(e: React.FormEvent) {
    e.preventDefault();
    setHoursSaved(true);
    setTimeout(() => setHoursSaved(false), 2500);
  }
  function saveNotif(e: React.FormEvent) {
    e.preventDefault();
    setNotifSaved(true);
    setTimeout(() => setNotifSaved(false), 2500);
  }

  /* ── Staff handlers ── */
  function toggleStaffCheckbox(
    field: 'services' | 'workDays',
    value: string,
  ) {
    setNewStaff((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  }
  function saveStaff() {
    if (!newStaff.name.trim()) return;
    const member: StaffMember = {
      id: Date.now(),
      ...newStaff,
      active: true,
      perf: { appointments: 0, revenue: 0, avgTransaction: 0, utilization: 0 },
      topServices: [],
    };
    setStaff((prev) => [...prev, member]);
    setNewStaff({ ...INITIAL_NEW_STAFF });
    setShowAddStaff(false);
  }
  function deleteStaff(id: number) {
    setStaff((prev) => prev.filter((s) => s.id !== id));
  }
  function toggleStaffActive(id: number) {
    setStaff((prev) => prev.map((s) => s.id === id ? { ...s, active: !s.active } : s));
  }

  /* ── Appointment handlers ── */
  function approveAppt(id: number) {
    setAppointments((prev) => prev.map((a) => a.id === id ? { ...a, status: 'onaylı' as const } : a));
  }
  function noshowAppt(id: number) {
    setAppointments((prev) => prev.map((a) => a.id === id ? { ...a, status: 'noshow' as const } : a));
    // Decrease trust score for the customer
    const appt = appointments.find((a) => a.id === id);
    if (appt) {
      setCustomers((prev) => prev.map((c) =>
        c.name === appt.customer ? { ...c, trustScore: Math.max(0, c.trustScore - 10) } : c,
      ));
    }
  }
  function handleDayDrop(staffName: string, slot: string) {
    if (dragApptId === null) return;
    setAppointments((prev) => prev.map((a) =>
      a.id === dragApptId ? { ...a, staff: staffName, time: slot, date: calDate } : a,
    ));
    setDragApptId(null);
  }

  /* ── Booking settings handler ── */
  function saveBookingSettings() {
    setBookingSettingsSaved(true);
    setTimeout(() => setBookingSettingsSaved(false), 2500);
  }

  /* ── nav items ── */
  const NAV: { id: Tab; label: string; icon: string }[] = [
    { id: 'genel',      label: 'Genel Bakış',  icon: '📊' },
    { id: 'randevular', label: 'Randevular',   icon: '📅' },
    { id: 'hizmetler',  label: 'Hizmetler',    icon: '✂️' },
    { id: 'personel',   label: 'Personel',     icon: '👥' },
    { id: 'musteriler', label: 'Müşteriler',   icon: '👤' },
    { id: 'profil',     label: 'Profil',       icon: '🏪' },
    { id: 'ayarlar',    label: 'Ayarlar',      icon: '⚙️' },
  ];

  function navigate(tab: Tab) {
    setActiveTab(tab);
    setSidebarOpen(false);
  }

  /* ─────────────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────────────── */
  return (
    <div className={styles.shell}>

      {/* ══ SIDEBAR ══ */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHead}>
          <Logo size={22} />
          <button
            className={styles.sidebarClose}
            onClick={() => setSidebarOpen(false)}
            aria-label="Menüyü kapat"
          >
            ✕
          </button>
        </div>

        <div className={styles.bizCard}>
          <div className={styles.bizAvatar}>
            {BUSINESS.name.charAt(0)}
          </div>
          <div className={styles.bizInfo}>
            <p className={styles.bizName}>{BUSINESS.name}</p>
            <p className={styles.bizType}>{BUSINESS.type} · {BUSINESS.district}</p>
          </div>
        </div>

        <nav className={styles.sideNav} aria-label="Panel navigasyonu">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`${styles.navItem} ${activeTab === n.id ? styles.navItemActive : ''}`}
              onClick={() => navigate(n.id)}
            >
              <span className={styles.navIcon}>{n.icon}</span>
              <span>{n.label}</span>
              {n.id === 'randevular' && pendingCount > 0 && (
                <span className={styles.badge}>{pendingCount}</span>
              )}
            </button>
          ))}
        </nav>

        <div className={styles.sideBottom}>
          <Link href="/" className={styles.sideLink}>
            <span>🌐</span> Siteye Dön
          </Link>
          <button className={styles.sideLink}>
            <span>🚪</span> Çıkış Yap
          </button>
        </div>
      </aside>

      {/* overlay for mobile */}
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ══ MAIN ══ */}
      <div className={styles.main}>

        {/* ── top bar ── */}
        <header className={styles.topbar}>
          <button
            className={styles.hamburger}
            onClick={() => setSidebarOpen(true)}
            aria-label="Menüyü aç"
          >
            <span /><span /><span />
          </button>
          <h1 className={styles.topbarTitle}>
            {NAV.find((n) => n.id === activeTab)?.label}
          </h1>
          <div className={styles.topbarRight}>
            <span className={styles.topbarUser}>{BUSINESS.owner}</span>
            <div className={styles.topbarAvatar}>{BUSINESS.owner.charAt(0)}</div>
          </div>
        </header>

        {/* ── content ── */}
        <div className={styles.content}>

          {/* ════════════════ GENEL BAKIŞ ════════════════ */}
          {activeTab === 'genel' && (
            <div className={styles.section}>
              <p className={styles.sectionSub}>
                Hoş geldiniz, <strong>{BUSINESS.owner}</strong> 👋 — {fmtDate(today)}
              </p>

              {/* stat cards */}
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>📅</span>
                  <div>
                    <p className={styles.statValue}>{todayAppts.length}</p>
                    <p className={styles.statLabel}>Bugünkü Randevu</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>⏳</span>
                  <div>
                    <p className={styles.statValue}>{pendingCount}</p>
                    <p className={styles.statLabel}>Onay Bekliyor</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>💰</span>
                  <div>
                    <p className={styles.statValue}>₺{monthRevenue.toLocaleString('tr-TR')}</p>
                    <p className={styles.statLabel}>Tamamlanan Ciro</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>⭐</span>
                  <div>
                    <p className={styles.statValue}>4.9</p>
                    <p className={styles.statLabel}>Ortalama Puan</p>
                  </div>
                </div>
              </div>

              {/* today's appointments */}
              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <h2 className={styles.blockTitle}>Bugünkü Randevular</h2>
                  <button
                    className={styles.blockLink}
                    onClick={() => navigate('randevular')}
                  >
                    Tümünü Gör →
                  </button>
                </div>
                {todayAppts.length === 0 ? (
                  <p className={styles.empty}>Bugün randevu bulunmuyor.</p>
                ) : (
                  <div className={styles.apptList}>
                    {todayAppts.map((a) => (
                      <div key={a.id} className={styles.apptRow}>
                        <div className={styles.apptTime}>{a.time}</div>
                        <div className={styles.apptAvatar}>{a.customer.charAt(0)}</div>
                        <div className={styles.apptMeta}>
                          <p className={styles.apptCustomer}>{a.customer}</p>
                          <p className={styles.apptService}>{a.service} · {a.duration}</p>
                        </div>
                        <div className={styles.apptRight}>
                          <span className={`${styles.statusBadge} ${(styles as Record<string,string>)[`status_${a.status}`]}`}>
                            {STATUS_LABEL[a.status]}
                          </span>
                          <span className={styles.apptPrice}>{a.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* quick actions */}
              <div className={styles.block}>
                <h2 className={styles.blockTitle}>Hızlı İşlemler</h2>
                <div className={styles.quickActions}>
                  <button
                    className={styles.qaBtn}
                    onClick={() => navigate('randevular')}
                  >
                    <span className={styles.qaIcon}>📅</span>
                    <span>Randevu Ekle</span>
                  </button>
                  <button
                    className={styles.qaBtn}
                    onClick={() => { navigate('hizmetler'); setShowAddService(true); }}
                  >
                    <span className={styles.qaIcon}>➕</span>
                    <span>Hizmet Ekle</span>
                  </button>
                  <button
                    className={styles.qaBtn}
                    onClick={() => navigate('profil')}
                  >
                    <span className={styles.qaIcon}>🏪</span>
                    <span>Profili Düzenle</span>
                  </button>
                  <button
                    className={styles.qaBtn}
                    onClick={() => navigate('ayarlar')}
                  >
                    <span className={styles.qaIcon}>⚙️</span>
                    <span>Ayarlar</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════ RANDEVULAR ════════════════ */}
          {activeTab === 'randevular' && (
            <div className={styles.section}>

              {/* View switcher */}
              <div className={styles.subTabBar} style={{ marginBottom: 20 }}>
                {(['liste', 'gun', 'hafta', 'ay'] as const).map((v) => (
                  <button
                    key={v}
                    className={`${styles.subTab} ${randevuView === v ? styles.subTabActive : ''}`}
                    onClick={() => setRandevuView(v)}
                  >
                    {v === 'liste' ? 'Liste' : v === 'gun' ? 'Gün' : v === 'hafta' ? 'Hafta' : 'Ay'}
                  </button>
                ))}
              </div>

              {/* ── LISTE VIEW ── */}
              {randevuView === 'liste' && (
                <>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                    <div className={styles.filterBar} style={{ margin: 0 }}>
                      {(['tümü', 'bekliyor', 'onaylı', 'tamamlandı', 'iptal', 'noshow'] as const).map((f) => (
                        <button
                          key={f}
                          className={`${styles.filterPill} ${apptFilter === f ? styles.filterPillActive : ''}`}
                          onClick={() => setApptFilter(f)}
                        >
                          {f === 'tümü' ? 'Tümü' : STATUS_LABEL[f as Appointment['status']]}
                          {f !== 'tümü' && (
                            <span className={styles.filterCount}>
                              {appointments.filter((a) => a.status === f).length}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    <select
                      className={styles.select}
                      style={{ width: 'auto', minWidth: 150 }}
                      value={calStaff}
                      onChange={(e) => setCalStaff(e.target.value)}
                    >
                      <option value="">Tüm Personel</option>
                      {staff.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                  </div>

                  <div className={styles.apptListFull}>
                    {filteredAppts.filter((a) => !calStaff || a.staff === calStaff).length === 0 ? (
                      <p className={styles.empty}>Bu filtreye uygun randevu yok.</p>
                    ) : (
                      filteredAppts.filter((a) => !calStaff || a.staff === calStaff).map((a) => (
                        <div key={a.id} className={styles.apptCard}>
                          <div className={styles.apptCardLeft}>
                            <div className={styles.apptCardDate}>
                              <span className={styles.apptCardDay}>
                                {new Date(a.date + 'T12:00:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
                              </span>
                              <span className={styles.apptCardHour}>{a.time}</span>
                            </div>
                            <div className={styles.apptCardAvatar}>{a.customer.charAt(0)}</div>
                            <div>
                              <p className={styles.apptCardName}>{a.customer}</p>
                              <p className={styles.apptCardSub}>{a.service} · {a.duration} · {a.staff}</p>
                            </div>
                          </div>
                          <div className={styles.apptCardRight}>
                            <span className={`${styles.statusBadge} ${(styles as Record<string,string>)[`status_${a.status}`]}`}>
                              {STATUS_LABEL[a.status]}
                            </span>
                            {a.status === 'bekliyor' && (
                              <button className={styles.btnApprove} onClick={() => approveAppt(a.id)}>Onayla</button>
                            )}
                            {a.status === 'onaylı' && (
                              <button className={styles.btnNoshow} onClick={() => noshowAppt(a.id)}>No-show</button>
                            )}
                            <span className={styles.apptCardPrice}>{a.price}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}

              {/* ── GÜN VIEW ── */}
              {randevuView === 'gun' && (
                <div className={styles.dayView}>
                  <div className={styles.calNavRow}>
                    <button className={styles.calNavBtn} onClick={() => {
                      const d = new Date(calDate + 'T12:00:00'); d.setDate(d.getDate() - 1);
                      setCalDate(d.toISOString().slice(0, 10));
                    }}>‹</button>
                    <span className={styles.calNavTitle}>{fmtDate(calDate)}</span>
                    <button className={styles.calNavBtn} onClick={() => {
                      const d = new Date(calDate + 'T12:00:00'); d.setDate(d.getDate() + 1);
                      setCalDate(d.toISOString().slice(0, 10));
                    }}>›</button>
                    <select
                      className={styles.select}
                      style={{ width: 'auto', minWidth: 150, marginLeft: 16 }}
                      value={calStaff}
                      onChange={(e) => setCalStaff(e.target.value)}
                    >
                      <option value="">Tüm Personel</option>
                      {staff.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                  </div>

                  <div style={{ overflowX: 'auto' }}>
                    {/* Column headers */}
                    <div style={{ display: 'flex', minWidth: 60 + dayViewStaff.length * 160 }}>
                      <div style={{ width: 60, flexShrink: 0 }} />
                      {dayViewStaff.map((sm) => (
                        <div key={sm.id} className={styles.dayStaffHeader}>{sm.name}</div>
                      ))}
                    </div>
                    {/* Body */}
                    <div style={{ display: 'flex', minWidth: 60 + dayViewStaff.length * 160 }}>
                      {/* Time labels */}
                      <div style={{ width: 60, flexShrink: 0 }}>
                        {DAY_SLOTS.map((slot, i) => (
                          <div key={slot} className={styles.dayTimeLabel} style={{ height: 30 }}>
                            {i % 2 === 0 ? slot : ''}
                          </div>
                        ))}
                      </div>
                      {/* Staff columns */}
                      {dayViewStaff.length === 0 ? (
                        <p className={styles.empty} style={{ padding: 20 }}>Gösterilecek personel yok.</p>
                      ) : dayViewStaff.map((sm) => {
                        const smAppts = appointments.filter(
                          (a) => a.date === calDate && a.staff === sm.name && a.status !== 'iptal',
                        );
                        return (
                          <div
                            key={sm.id}
                            style={{
                              flex: 1, minWidth: 160,
                              position: 'relative',
                              height: DAY_SLOTS.length * 30,
                              borderLeft: '1px solid var(--border)',
                            }}
                          >
                            {/* Drop-zone slots */}
                            {DAY_SLOTS.map((slot, i) => (
                              <div
                                key={slot}
                                className={styles.daySlot}
                                style={{ position: 'absolute', top: i * 30, left: 0, right: 0 }}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => handleDayDrop(sm.name, slot)}
                              />
                            ))}
                            {/* Appointment blocks */}
                            {smAppts.map((a) => {
                              const topPx = timeToMin(a.time) - timeToMin('08:00');
                              const heightPx = Math.max(parseDuration(a.duration), 28);
                              return (
                                <div
                                  key={a.id}
                                  className={[
                                    styles.apptBlock,
                                    a.status === 'bekliyor' ? styles.apptBlockPending : '',
                                    a.status === 'noshow' ? styles.apptBlockNoshow : '',
                                  ].join(' ')}
                                  style={{ position: 'absolute', top: topPx, height: heightPx, left: 4, right: 4 }}
                                  draggable
                                  onDragStart={() => setDragApptId(a.id)}
                                >
                                  <div style={{ fontWeight: 700, fontSize: 10, lineHeight: 1.3 }}>{a.customer}</div>
                                  <div style={{ fontSize: 10, opacity: 0.9 }}>{a.service}</div>
                                  <div style={{ fontSize: 10, opacity: 0.8 }}>{a.time}</div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ── HAFTA VIEW ── */}
              {randevuView === 'hafta' && (
                <div>
                  <div className={styles.calNavRow}>
                    <button className={styles.calNavBtn} onClick={() => {
                      const d = new Date(calDate + 'T12:00:00'); d.setDate(d.getDate() - 7);
                      setCalDate(d.toISOString().slice(0, 10));
                    }}>‹</button>
                    <span className={styles.calNavTitle}>
                      {weekDays[0] && new Date(weekDays[0] + 'T12:00:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}
                      {' – '}
                      {weekDays[6] && new Date(weekDays[6] + 'T12:00:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <button className={styles.calNavBtn} onClick={() => {
                      const d = new Date(calDate + 'T12:00:00'); d.setDate(d.getDate() + 7);
                      setCalDate(d.toISOString().slice(0, 10));
                    }}>›</button>
                    <select
                      className={styles.select}
                      style={{ width: 'auto', minWidth: 150, marginLeft: 16 }}
                      value={calStaff}
                      onChange={(e) => setCalStaff(e.target.value)}
                    >
                      <option value="">Tüm Personel</option>
                      {staff.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                  </div>

                  <div style={{ overflowX: 'auto' }}>
                    <div className={styles.weekGrid}>
                      {/* Header */}
                      <div className={styles.weekTimeHeader} />
                      {weekDays.map((d) => {
                        const dow = new Date(d + 'T12:00:00').getDay();
                        return (
                          <div key={d} className={styles.weekDayHeader}>
                            <span>{TR_DAYS_SHORT[dow === 0 ? 6 : dow - 1]}</span>
                            <span style={{ fontSize: 12 }}>{new Date(d + 'T12:00:00').getDate()}</span>
                          </div>
                        );
                      })}
                      {/* Hour rows */}
                      {WEEK_HOURS.map((hour) => (
                        <Fragment key={hour}>
                          <div className={styles.weekTimeCell}>{hour}</div>
                          {weekDays.map((d) => {
                            const cellAppts = appointments.filter((a) =>
                              a.date === d &&
                              a.time >= hour && a.time < (WEEK_HOURS[WEEK_HOURS.indexOf(hour) + 1] ?? '20:00') &&
                              (!calStaff || a.staff === calStaff) &&
                              a.status !== 'iptal',
                            );
                            return (
                              <div key={`${d}-${hour}`} className={styles.weekCell}>
                                {cellAppts.map((a) => (
                                  <div
                                    key={a.id}
                                    className={`${styles.weekChip} ${a.status === 'bekliyor' ? styles.weekChipPending : ''}`}
                                  >
                                    {a.customer.split(' ')[0]}
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── AY VIEW ── */}
              {randevuView === 'ay' && (
                <div>
                  <div className={styles.calNavRow}>
                    <button className={styles.calNavBtn} onClick={() => {
                      const d = new Date(calDate + 'T12:00:00'); d.setMonth(d.getMonth() - 1);
                      setCalDate(d.toISOString().slice(0, 10));
                    }}>‹</button>
                    <span className={styles.calNavTitle}>
                      {new Date(calDate + 'T12:00:00').toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}
                    </span>
                    <button className={styles.calNavBtn} onClick={() => {
                      const d = new Date(calDate + 'T12:00:00'); d.setMonth(d.getMonth() + 1);
                      setCalDate(d.toISOString().slice(0, 10));
                    }}>›</button>
                  </div>

                  <div className={styles.monthGrid}>
                    {TR_DAYS_SHORT.map((d) => (
                      <div key={d} className={styles.monthDayName}>{d}</div>
                    ))}
                    {monthCells.map((cell, i) => {
                      const count = cell ? appointments.filter((a) => a.date === cell && a.status !== 'iptal').length : 0;
                      return (
                        <div
                          key={i}
                          className={[
                            styles.monthCell,
                            cell === calDate ? styles.monthCellActive : '',
                            cell ? styles.monthCellClickable : styles.monthCellEmpty,
                          ].join(' ')}
                          onClick={() => { if (cell) { setCalDate(cell); setRandevuView('gun'); } }}
                        >
                          {cell && (
                            <>
                              <span className={styles.monthCellDay}>{new Date(cell + 'T12:00:00').getDate()}</span>
                              {count > 0 && (
                                <span className={styles.monthDot}>
                                  <span className={styles.monthDotCircle} />
                                  <span>{count}</span>
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ════════════════ HİZMETLER ════════════════ */}
          {activeTab === 'hizmetler' && (
            <div className={styles.section}>

              <div className={styles.blockHead} style={{ marginBottom: 20 }}>
                <p className={styles.sectionSub}>{services.filter((s) => s.active).length} aktif hizmet</p>
                <button
                  className={styles.btnPrimary}
                  onClick={() => setShowAddService(true)}
                >
                  + Hizmet Ekle
                </button>
              </div>

              {/* add service form */}
              {showAddService && (
                <div className={styles.addSvcBox}>
                  <h3 className={styles.addSvcTitle}>Yeni Hizmet</h3>
                  <div className={styles.addSvcFields}>
                    <div className={styles.addSvcField}>
                      <label className={styles.label}>Kategori</label>
                      <input
                        className={styles.input}
                        placeholder="örn. Saç Kesimi"
                        value={newSvc.category}
                        onChange={(e) => setNewSvc((p) => ({ ...p, category: e.target.value }))}
                      />
                    </div>
                    <div className={styles.addSvcField}>
                      <label className={styles.label}>Hizmet Adı <span className={styles.req}>*</span></label>
                      <input
                        className={styles.input}
                        placeholder="örn. Saç Kesimi (Kadın)"
                        value={newSvc.name}
                        onChange={(e) => setNewSvc((p) => ({ ...p, name: e.target.value }))}
                      />
                    </div>
                    <div className={styles.addSvcField}>
                      <label className={styles.label}>Süre</label>
                      <input
                        className={styles.input}
                        placeholder="örn. 45 dk"
                        value={newSvc.duration}
                        onChange={(e) => setNewSvc((p) => ({ ...p, duration: e.target.value }))}
                      />
                    </div>
                    <div className={styles.addSvcField}>
                      <label className={styles.label}>Fiyat <span className={styles.req}>*</span></label>
                      <input
                        className={styles.input}
                        placeholder="örn. ₺350"
                        value={newSvc.price}
                        onChange={(e) => setNewSvc((p) => ({ ...p, price: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className={styles.addSvcActions}>
                    <button className={styles.btnBack} onClick={() => setShowAddService(false)}>İptal</button>
                    <button className={styles.btnPrimary} onClick={addService} disabled={!newSvc.name || !newSvc.price}>Kaydet</button>
                  </div>
                </div>
              )}

              {/* grouped by category */}
              {Array.from(new Set(services.map((s) => s.category))).map((cat) => (
                <div key={cat} className={styles.svcGroup}>
                  <h3 className={styles.svcGroupTitle}>{cat || 'Diğer'}</h3>
                  <div className={styles.svcList}>
                    {services.filter((s) => s.category === cat).map((s) => (
                      <div key={s.id} className={`${styles.svcRow} ${!s.active ? styles.svcRowInactive : ''}`}>
                        <div className={styles.svcInfo}>
                          <p className={styles.svcName}>{s.name}</p>
                          <p className={styles.svcMeta}>{s.duration}{s.duration && s.price ? ' · ' : ''}{s.price}</p>
                        </div>
                        <div className={styles.svcActions}>
                          <button
                            className={`${styles.toggleBtn} ${s.active ? styles.toggleOn : ''}`}
                            onClick={() => toggleService(s.id)}
                            aria-label={s.active ? 'Pasife al' : 'Aktife al'}
                          >
                            <span className={styles.toggleKnob} />
                          </button>
                          <button
                            className={styles.deleteBtn}
                            onClick={() => deleteService(s.id)}
                            aria-label="Sil"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ════════════════ PERSONEL ════════════════ */}
          {activeTab === 'personel' && (
            <div className={styles.section}>

              {/* sub-tabs */}
              <div className={styles.subTabBar}>
                {(['liste', 'performans', 'takvim'] as const).map((st) => (
                  <button
                    key={st}
                    className={`${styles.subTab} ${staffSubTab === st ? styles.subTabActive : ''}`}
                    onClick={() => { setStaffSubTab(st); setSelectedStaffId(null); }}
                  >
                    {st === 'liste' ? 'Personel Listesi' : st === 'performans' ? 'Performans' : 'Takvim'}
                  </button>
                ))}
              </div>

              {/* ─── LİSTE ─── */}
              {staffSubTab === 'liste' && (
                <>
                  <div className={styles.blockHead} style={{ marginBottom: 16 }}>
                    <p className={styles.sectionSub}>{staff.filter((s) => s.active).length} aktif personel</p>
                    <button className={styles.btnPrimary} onClick={() => setShowAddStaff(true)}>
                      + Yeni Personel
                    </button>
                  </div>

                  {/* add staff form */}
                  {showAddStaff && (
                    <div className={styles.addSvcBox} style={{ marginBottom: 24 }}>
                      <h3 className={styles.addSvcTitle}>Yeni Personel Ekle</h3>
                      <div className={styles.staffFormGrid}>

                        <div className={styles.formField}>
                          <label className={styles.label}>Ad Soyad <span className={styles.req}>*</span></label>
                          <input
                            className={styles.input}
                            placeholder="örn. Selin Çelik"
                            value={newStaff.name}
                            onChange={(e) => setNewStaff((p) => ({ ...p, name: e.target.value }))}
                          />
                        </div>

                        <div className={styles.formField}>
                          <label className={styles.label}>Pozisyon</label>
                          <select
                            className={styles.select}
                            value={newStaff.role}
                            onChange={(e) => setNewStaff((p) => ({ ...p, role: e.target.value }))}
                          >
                            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                          </select>
                        </div>

                        <div className={styles.formField}>
                          <label className={styles.label}>Telefon</label>
                          <input
                            className={styles.input}
                            placeholder="05xx xxx xx xx"
                            value={newStaff.phone}
                            onChange={(e) => setNewStaff((p) => ({ ...p, phone: e.target.value }))}
                          />
                        </div>

                        <div className={styles.formField}>
                          <label className={styles.label}>Randevu Aralığı</label>
                          <div className={styles.slotOptions}>
                            {SLOT_OPTIONS.map((s) => (
                              <button
                                key={s}
                                type="button"
                                className={`${styles.slotBtn} ${newStaff.slotInterval === s ? styles.slotBtnActive : ''}`}
                                onClick={() => setNewStaff((p) => ({ ...p, slotInterval: s }))}
                              >
                                {s} dk
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className={styles.checkGroup}>
                          <p className={styles.label}>Uzmanlık Hizmetleri</p>
                          <div className={styles.checkList}>
                            {ALL_STAFF_SERVICES.map((sv) => (
                              <label key={sv} className={styles.checkItem}>
                                <input
                                  type="checkbox"
                                  checked={newStaff.services.includes(sv)}
                                  onChange={() => toggleStaffCheckbox('services', sv)}
                                />
                                {sv}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className={styles.checkGroup}>
                          <p className={styles.label}>Çalışma Günleri</p>
                          <div className={styles.checkList}>
                            {ALL_DAYS.map((d) => (
                              <label key={d} className={styles.checkItem}>
                                <input
                                  type="checkbox"
                                  checked={newStaff.workDays.includes(d)}
                                  onChange={() => toggleStaffCheckbox('workDays', d)}
                                />
                                {d}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className={styles.formField}>
                          <label className={styles.label}>Çalışma Saatleri</label>
                          <div className={styles.hoursInputs}>
                            <input
                              type="time"
                              className={styles.timeInput}
                              value={newStaff.workStart}
                              onChange={(e) => setNewStaff((p) => ({ ...p, workStart: e.target.value }))}
                            />
                            <span className={styles.hoursDash}>–</span>
                            <input
                              type="time"
                              className={styles.timeInput}
                              value={newStaff.workEnd}
                              onChange={(e) => setNewStaff((p) => ({ ...p, workEnd: e.target.value }))}
                            />
                          </div>
                        </div>

                      </div>
                      <div className={styles.addSvcActions}>
                        <button className={styles.btnBack} onClick={() => { setShowAddStaff(false); setNewStaff({ ...INITIAL_NEW_STAFF }); }}>
                          İptal
                        </button>
                        <button
                          className={styles.btnPrimary}
                          onClick={saveStaff}
                          disabled={!newStaff.name.trim()}
                        >
                          Personeli Kaydet
                        </button>
                      </div>
                    </div>
                  )}

                  {/* staff table */}
                  <div className={styles.staffTable}>
                    <div className={styles.staffTableHead}>
                      <span>Personel</span>
                      <span>Rol</span>
                      <span className={styles.hideOnMobile}>Hizmetler</span>
                      <span>Durum</span>
                      <span />
                    </div>
                    {staff.map((sm) => (
                      <div key={sm.id} className={styles.staffRow}>
                        <div className={styles.staffRowName}>
                          <div className={styles.staffAvatar}>{sm.name.charAt(0)}</div>
                          <div>
                            <p className={styles.staffName}>{sm.name}</p>
                            <p className={styles.staffPhone}>{sm.phone}</p>
                          </div>
                        </div>
                        <span className={styles.staffRole}>{sm.role}</span>
                        <span className={`${styles.staffServices} ${styles.hideOnMobile}`}>
                          {sm.services.join(', ') || '—'}
                        </span>
                        <span>
                          <span className={`${styles.statusBadge} ${sm.active ? styles.status_onaylı : styles.status_iptal}`}>
                            {sm.active ? 'Aktif' : 'Pasif'}
                          </span>
                        </span>
                        <div className={styles.staffRowActions}>
                          <button
                            className={`${styles.toggleBtn} ${sm.active ? styles.toggleOn : ''}`}
                            onClick={() => toggleStaffActive(sm.id)}
                            aria-label={sm.active ? 'Pasife al' : 'Aktife al'}
                          >
                            <span className={styles.toggleKnob} />
                          </button>
                          <button
                            className={styles.deleteBtn}
                            onClick={() => deleteStaff(sm.id)}
                            aria-label="Sil"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* ─── PERFORMANS ─── */}
              {staffSubTab === 'performans' && (
                <>
                  {selectedStaffId === null ? (
                    <>
                      <p className={styles.sectionSub}>Bu Ay — Genel Performans Tablosu</p>
                      <div className={styles.perfTable}>
                        <div className={styles.perfTableHead}>
                          <span>Personel</span>
                          <span>Randevu</span>
                          <span>Ciro</span>
                          <span className={styles.hideOnMobile}>Ort. İşlem</span>
                          <span>Doluluk</span>
                        </div>
                        {staff.map((sm) => (
                          <button
                            key={sm.id}
                            className={styles.perfRow}
                            onClick={() => setSelectedStaffId(sm.id)}
                          >
                            <div className={styles.perfRowName}>
                              <div className={styles.staffAvatar}>{sm.name.charAt(0)}</div>
                              <span>{sm.name}</span>
                            </div>
                            <span className={styles.perfVal}>{sm.perf.appointments}</span>
                            <span className={styles.perfVal}>₺{sm.perf.revenue.toLocaleString('tr-TR')}</span>
                            <span className={`${styles.perfVal} ${styles.hideOnMobile}`}>₺{sm.perf.avgTransaction}</span>
                            <span className={styles.perfVal}>
                              <span className={styles.utilizationBar}>
                                <span
                                  className={styles.utilizationFill}
                                  style={{ width: `${sm.perf.utilization}%` }}
                                />
                              </span>
                              %{sm.perf.utilization}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    (() => {
                      const sm = staff.find((s) => s.id === selectedStaffId);
                      if (!sm) return null;
                      const todaySchedule = appointments.filter(
                        (a) => a.date === today && a.staff === sm.name && a.status !== 'iptal',
                      );
                      return (
                        <div>
                          <button
                            className={styles.backBtn}
                            onClick={() => setSelectedStaffId(null)}
                          >
                            ← Geri
                          </button>

                          {/* header */}
                          <div className={styles.staffDetailHeader}>
                            <div className={styles.staffDetailAvatar}>{sm.name.charAt(0)}</div>
                            <div>
                              <p className={styles.staffDetailName}>{sm.name}</p>
                              <p className={styles.staffDetailRole}>{sm.role}</p>
                            </div>
                          </div>

                          {/* perf stats */}
                          <div className={styles.statsGrid} style={{ marginTop: 20 }}>
                            <div className={styles.statCard}>
                              <span className={styles.statIcon}>📅</span>
                              <div>
                                <p className={styles.statValue}>{sm.perf.appointments}</p>
                                <p className={styles.statLabel}>Randevu Sayısı</p>
                              </div>
                            </div>
                            <div className={styles.statCard}>
                              <span className={styles.statIcon}>💰</span>
                              <div>
                                <p className={styles.statValue}>₺{sm.perf.revenue.toLocaleString('tr-TR')}</p>
                                <p className={styles.statLabel}>Toplam Ciro</p>
                              </div>
                            </div>
                            <div className={styles.statCard}>
                              <span className={styles.statIcon}>📊</span>
                              <div>
                                <p className={styles.statValue}>₺{sm.perf.avgTransaction}</p>
                                <p className={styles.statLabel}>Ortalama İşlem</p>
                              </div>
                            </div>
                            <div className={styles.statCard}>
                              <span className={styles.statIcon}>⏱️</span>
                              <div>
                                <p className={styles.statValue}>%{sm.perf.utilization}</p>
                                <p className={styles.statLabel}>Doluluk Oranı</p>
                              </div>
                            </div>
                          </div>

                          {/* top services */}
                          <div className={styles.block} style={{ marginTop: 20 }}>
                            <h2 className={styles.blockTitle}>En Çok Yaptığı Hizmetler</h2>
                            <div className={styles.topSvcTable}>
                              <div className={styles.topSvcHead}>
                                <span>Hizmet</span><span>Adet</span>
                              </div>
                              {sm.topServices.map((ts) => (
                                <div key={ts.name} className={styles.topSvcRow}>
                                  <span>{ts.name}</span>
                                  <span className={styles.topSvcCount}>{ts.count}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* today's schedule */}
                          <div className={styles.block} style={{ marginTop: 16 }}>
                            <h2 className={styles.blockTitle}>Günlük Program — Bugün</h2>
                            {todaySchedule.length === 0 ? (
                              <p className={styles.empty}>Bugün randevu yok.</p>
                            ) : (
                              <div className={styles.dailyTable}>
                                <div className={styles.dailyHead}>
                                  <span>Saat</span><span>Müşteri</span><span>Hizmet</span>
                                </div>
                                {todaySchedule.map((a) => (
                                  <div key={a.id} className={styles.dailyRow}>
                                    <span className={styles.dailyTime}>{a.time}</span>
                                    <span>{a.customer}</span>
                                    <span className={styles.dailyService}>{a.service}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })()
                  )}
                </>
              )}

              {/* ─── TAKVİM ─── */}
              {staffSubTab === 'takvim' && (
                <>
                  <p className={styles.sectionSub}>Bugün — Tüm Personel Programı</p>
                  <div className={styles.calendarWrap}>
                    <div
                      className={styles.calendarGrid}
                      style={{ gridTemplateColumns: `60px repeat(${staff.length}, 1fr)` }}
                    >
                      {/* header row */}
                      <div className={styles.calCell} />
                      {staff.map((sm) => (
                        <div key={sm.id} className={`${styles.calCell} ${styles.calHeader}`}>
                          <div className={styles.staffAvatar} style={{ margin: '0 auto 4px' }}>{sm.name.charAt(0)}</div>
                          <span>{sm.name.split(' ')[0]}</span>
                        </div>
                      ))}
                      {/* slot rows */}
                      {CALENDAR_SLOTS.map((slot) => {
                        const cells: (string | null)[] = staff.map((sm) => {
                          const appt = appointments.find(
                            (a) => a.date === today && a.time === slot.hour && a.staff === sm.name && a.status !== 'iptal',
                          );
                          return appt ? appt.customer : null;
                        });
                        return (
                          <>
                            <div key={`h-${slot.hour}`} className={styles.calTimeCell}>{slot.hour}</div>
                            {cells.map((cell, ci) => (
                              <div
                                key={`c-${slot.hour}-${ci}`}
                                className={`${styles.calCell} ${cell ? styles.calCellBooked : styles.calCellFree}`}
                              >
                                {cell ?? <span className={styles.calFreeText}>Boş</span>}
                              </div>
                            ))}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

            </div>
          )}

          {/* ════════════════ MÜŞTERİLER ════════════════ */}
          {activeTab === 'musteriler' && (
            <div className={styles.section}>
              <p className={styles.sectionSub}>{customers.length} müşteri</p>

              <div className={styles.crmTableWrap}>
                <table className={styles.crmTable}>
                  <thead>
                    <tr>
                      <th>Müşteri</th>
                      <th>Ziyaret</th>
                      <th>Harcama</th>
                      <th>Güven</th>
                      <th>Son Ziyaret</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((c) => (
                      <Fragment key={c.id}>
                        <tr
                          className={styles.crmRow}
                          onClick={() => setSelectedCustomerId(selectedCustomerId === c.id ? null : c.id)}
                        >
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div className={styles.apptCardAvatar}>{c.name.charAt(0)}</div>
                              <div>
                                <p style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</p>
                                <p style={{ fontSize: 12, color: 'var(--muted)' }}>{c.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td style={{ fontSize: 14, fontWeight: 600 }}>{c.visitCount}</td>
                          <td style={{ fontSize: 14, fontWeight: 600 }}>₺{c.totalSpend.toLocaleString('tr-TR')}</td>
                          <td>
                            <span className={[
                              styles.trustBadge,
                              c.trustScore >= 90 ? styles.trustBadgeGood : c.trustScore >= 70 ? styles.trustBadgeMid : styles.trustBadgeLow,
                            ].join(' ')}>
                              {c.trustScore >= 90 ? 'Güvenilir' : c.trustScore >= 70 ? 'Orta' : 'Riskli'}
                            </span>
                          </td>
                          <td style={{ fontSize: 13, color: 'var(--muted)' }}>
                            {new Date(c.lastVisit + 'T12:00:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </td>
                        </tr>
                        {selectedCustomerId === c.id && (
                          <tr>
                            <td colSpan={5} className={styles.crmDetailCell}>
                              <div className={styles.crmDetail}>
                                {/* Mini stat cards */}
                                <div className={styles.crmDetailStats}>
                                  <div className={styles.crmStatCard}>
                                    <p className={styles.statValue}>{c.visitCount}</p>
                                    <p className={styles.statLabel}>Toplam Ziyaret</p>
                                  </div>
                                  <div className={styles.crmStatCard}>
                                    <p className={styles.statValue}>₺{c.totalSpend.toLocaleString('tr-TR')}</p>
                                    <p className={styles.statLabel}>Toplam Harcama</p>
                                  </div>
                                  <div className={styles.crmStatCard}>
                                    <p className={styles.statValue}>{c.trustScore}</p>
                                    <p className={styles.statLabel}>Güven Puanı</p>
                                  </div>
                                </div>

                                {/* Last 3 appointments */}
                                <h4 style={{ fontWeight: 700, marginBottom: 8, marginTop: 16, fontSize: 14 }}>Son Randevular</h4>
                                {appointments.filter((a) => a.customer === c.name).slice(-3).reverse().map((a) => (
                                  <div key={a.id} className={styles.apptRow}>
                                    <div className={styles.apptTime}>{a.time}</div>
                                    <div className={styles.apptMeta}>
                                      <p className={styles.apptCustomer}>{a.service}</p>
                                      <p className={styles.apptService}>{fmtDate(a.date)}</p>
                                    </div>
                                    <span className={`${styles.statusBadge} ${(styles as Record<string,string>)[`status_${a.status}`]}`}>
                                      {STATUS_LABEL[a.status]}
                                    </span>
                                  </div>
                                ))}
                                {appointments.filter((a) => a.customer === c.name).length === 0 && (
                                  <p className={styles.empty}>Randevu geçmişi yok.</p>
                                )}

                                {/* Notes */}
                                <h4 style={{ fontWeight: 700, marginBottom: 8, marginTop: 16, fontSize: 14 }}>Notlar</h4>
                                <textarea
                                  className={styles.textarea}
                                  rows={3}
                                  value={c.notes}
                                  onChange={(e) => setCustomers((prev) =>
                                    prev.map((cu) => cu.id === c.id ? { ...cu, notes: e.target.value } : cu),
                                  )}
                                />
                                <div style={{ marginTop: 8, textAlign: 'right' }}>
                                  <button className={styles.btnPrimary} style={{ fontSize: 13 }}>
                                    Not Kaydet
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════════════════ PROFİL ════════════════ */}
          {activeTab === 'profil' && (
            <div className={styles.section}>
              <form className={styles.profileForm} onSubmit={saveProfile} noValidate>

                <div className={styles.profileAvatarBlock}>
                  <div className={styles.profileAvatar}>{BUSINESS.name.charAt(0)}</div>
                  <div>
                    <p className={styles.profileAvatarName}>{profile.name}</p>
                    <p className={styles.profileAvatarType}>{profile.type}</p>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>İşletme Bilgileri</h3>
                  <div className={styles.formFields}>
                    <div className={styles.formField}>
                      <label className={styles.label}>İşletme Adı</label>
                      <input
                        className={styles.input}
                        value={profile.name}
                        onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label}>İşletme Türü</label>
                      <input
                        className={styles.input}
                        value={profile.type}
                        onChange={(e) => setProfile((p) => ({ ...p, type: e.target.value }))}
                      />
                    </div>
                    <div className={styles.formFieldFull}>
                      <label className={styles.label}>Hakkında</label>
                      <textarea
                        className={styles.textarea}
                        rows={4}
                        value={profile.about}
                        onChange={(e) => setProfile((p) => ({ ...p, about: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Konum</h3>
                  <div className={styles.formFields}>
                    <div className={styles.formField}>
                      <label className={styles.label}>Şehir</label>
                      <input
                        className={styles.input}
                        value={profile.city}
                        onChange={(e) => setProfile((p) => ({ ...p, city: e.target.value }))}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label}>İlçe</label>
                      <input
                        className={styles.input}
                        value={profile.district}
                        onChange={(e) => setProfile((p) => ({ ...p, district: e.target.value }))}
                      />
                    </div>
                    <div className={styles.formFieldFull}>
                      <label className={styles.label}>Açık Adres</label>
                      <input
                        className={styles.input}
                        value={profile.address}
                        onChange={(e) => setProfile((p) => ({ ...p, address: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>İletişim & Sosyal Medya</h3>
                  <div className={styles.formFields}>
                    <div className={styles.formField}>
                      <label className={styles.label}>Telefon</label>
                      <input
                        className={styles.input}
                        value={profile.phone}
                        onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label}>E-posta</label>
                      <input
                        className={styles.input}
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label}>Web Sitesi</label>
                      <input
                        className={styles.input}
                        placeholder="https://"
                        value={profile.website}
                        onChange={(e) => setProfile((p) => ({ ...p, website: e.target.value }))}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label}>Instagram</label>
                      <input
                        className={styles.input}
                        placeholder="@hesap_adi"
                        value={profile.instagram}
                        onChange={(e) => setProfile((p) => ({ ...p, instagram: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formActions}>
                  {profileSaved && <span className={styles.savedMsg}>✓ Değişiklikler kaydedildi</span>}
                  <button type="submit" className={styles.btnPrimary}>Kaydet</button>
                </div>
              </form>
            </div>
          )}

          {/* ════════════════ AYARLAR ════════════════ */}
          {activeTab === 'ayarlar' && (
            <div className={styles.section}>

              {/* Working hours */}
              <form className={styles.block} onSubmit={saveHours}>
                <h2 className={styles.blockTitle}>Çalışma Saatleri</h2>
                <div className={styles.hoursTable}>
                  {hours.map((h, i) => (
                    <div key={h.day} className={styles.hoursRow}>
                      <span className={styles.hoursDay}>{h.day}</span>
                      {h.closed ? (
                        <span className={styles.hoursClosed}>Kapalı</span>
                      ) : (
                        <div className={styles.hoursInputs}>
                          <input
                            type="time"
                            className={styles.timeInput}
                            value={h.open}
                            onChange={(e) =>
                              setHours((prev) => prev.map((r, j) => j === i ? { ...r, open: e.target.value } : r))
                            }
                          />
                          <span className={styles.hoursDash}>–</span>
                          <input
                            type="time"
                            className={styles.timeInput}
                            value={h.close}
                            onChange={(e) =>
                              setHours((prev) => prev.map((r, j) => j === i ? { ...r, close: e.target.value } : r))
                            }
                          />
                        </div>
                      )}
                      <label className={styles.closedToggle}>
                        <input
                          type="checkbox"
                          checked={h.closed}
                          onChange={(e) =>
                            setHours((prev) => prev.map((r, j) => j === i ? { ...r, closed: e.target.checked } : r))
                          }
                        />
                        <span>Kapalı</span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className={styles.formActions}>
                  {hoursSaved && <span className={styles.savedMsg}>✓ Saatler kaydedildi</span>}
                  <button type="submit" className={styles.btnPrimary}>Saatleri Kaydet</button>
                </div>
              </form>

              {/* Notifications */}
              <form className={styles.block} onSubmit={saveNotif} style={{ marginTop: 24 }}>
                <h2 className={styles.blockTitle}>Bildirimler</h2>
                <div className={styles.notifList}>
                  {([
                    { key: 'sms',         label: 'SMS Bildirimleri',               desc: 'Yeni randevu veya iptal için SMS alın' },
                    { key: 'email',       label: 'E-posta Bildirimleri',           desc: 'Randevu özeti ve günlük rapor' },
                    { key: 'push',        label: 'Anlık Bildirimler (Push)',       desc: 'Tarayıcı üzerinden anlık bildirim' },
                    { key: 'reminder24h', label: '24 Saat Önce Hatırlatma',       desc: 'Randevudan 24 saat önce müşteriye hatırlatma gönder' },
                    { key: 'reminder2h',  label: '2 Saat Önce Hatırlatma',        desc: 'Randevudan 2 saat önce müşteriye hatırlatma gönder' },
                  ] as { key: keyof typeof notif; label: string; desc: string }[]).map((n) => (
                    <label key={n.key} className={styles.notifRow}>
                      <div>
                        <p className={styles.notifLabel}>{n.label}</p>
                        <p className={styles.notifDesc}>{n.desc}</p>
                      </div>
                      <div
                        className={`${styles.toggleBtn} ${notif[n.key] ? styles.toggleOn : ''}`}
                        onClick={() => setNotif((p) => ({ ...p, [n.key]: !p[n.key] }))}
                        role="switch"
                        aria-checked={notif[n.key]}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === ' ' && setNotif((p) => ({ ...p, [n.key]: !p[n.key] }))}
                      >
                        <span className={styles.toggleKnob} />
                      </div>
                    </label>
                  ))}
                </div>
                <div className={styles.formActions}>
                  {notifSaved && <span className={styles.savedMsg}>✓ Bildirimler kaydedildi</span>}
                  <button type="submit" className={styles.btnPrimary}>Bildirimleri Kaydet</button>
                </div>
              </form>

              {/* Randevu Yönetimi */}
              <div className={styles.formSection} style={{ marginTop: 24 }}>
                <h3 className={styles.formSectionTitle}>Randevu Yönetimi</h3>
                <div className={styles.notifList}>
                  <label className={styles.notifRow}>
                    <div>
                      <p className={styles.notifLabel}>Otomatik Onay</p>
                      <p className={styles.notifDesc}>Yeni randevular otomatik olarak onaylanır</p>
                    </div>
                    <div
                      className={`${styles.toggleBtn} ${bookingSettings.autoApproval ? styles.toggleOn : ''}`}
                      onClick={() => setBookingSettings((p) => ({ ...p, autoApproval: !p.autoApproval }))}
                      role="switch"
                      aria-checked={bookingSettings.autoApproval}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === ' ' && setBookingSettings((p) => ({ ...p, autoApproval: !p.autoApproval }))}
                    >
                      <span className={styles.toggleKnob} />
                    </div>
                  </label>
                  <div className={styles.notifRow}>
                    <div>
                      <p className={styles.notifLabel}>İptal Politikası</p>
                      <p className={styles.notifDesc}>İptal için son saat (saat olarak)</p>
                    </div>
                    <input
                      type="number"
                      className={styles.input}
                      style={{ width: 80 }}
                      min={1}
                      value={bookingSettings.cancellationHours}
                      onChange={(e) => setBookingSettings((p) => ({ ...p, cancellationHours: parseInt(e.target.value) || 1 }))}
                    />
                  </div>
                </div>
                <div className={styles.formActions}>
                  {bookingSettingsSaved && <span className={styles.savedMsg}>✓ Kaydedildi</span>}
                  <button className={styles.btnPrimary} onClick={saveBookingSettings}>Kaydet</button>
                </div>
              </div>

              {/* Otomatik Hatırlatma */}
              <div className={styles.formSection} style={{ marginTop: 16 }}>
                <h3 className={styles.formSectionTitle}>Otomatik Hatırlatma</h3>
                <div className={styles.notifList}>
                  {([
                    { key: 'whatsapp'    as const, label: 'WhatsApp Hatırlatma', desc: 'Randevu öncesi WhatsApp mesajı gönder' },
                    { key: 'smsReminder' as const, label: 'SMS Hatırlatma',      desc: 'Randevu öncesi SMS gönder' },
                    { key: 'emailReminder' as const, label: 'E-posta Hatırlatma', desc: 'Randevu öncesi e-posta gönder' },
                  ]).map((n) => (
                    <label key={n.key} className={styles.notifRow}>
                      <div>
                        <p className={styles.notifLabel}>{n.label}</p>
                        <p className={styles.notifDesc}>{n.desc}</p>
                      </div>
                      <div
                        className={`${styles.toggleBtn} ${bookingSettings[n.key] ? styles.toggleOn : ''}`}
                        onClick={() => setBookingSettings((p) => ({ ...p, [n.key]: !p[n.key] }))}
                        role="switch"
                        aria-checked={bookingSettings[n.key]}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === ' ' && setBookingSettings((p) => ({ ...p, [n.key]: !p[n.key] }))}
                      >
                        <span className={styles.toggleKnob} />
                      </div>
                    </label>
                  ))}
                  <div className={styles.notifRow}>
                    <div>
                      <p className={styles.notifLabel}>Hatırlatma Zamanı</p>
                    </div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      {(['24h', '2h', 'both'] as const).map((v) => (
                        <label key={v} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
                          <input
                            type="radio"
                            name="reminderTiming"
                            value={v}
                            checked={bookingSettings.reminderTiming === v}
                            onChange={() => setBookingSettings((p) => ({ ...p, reminderTiming: v }))}
                            style={{ accentColor: 'var(--accent)' }}
                          />
                          {v === '24h' ? '24 saat önce' : v === '2h' ? '2 saat önce' : 'Her ikisi'}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.formActions}>
                  {bookingSettingsSaved && <span className={styles.savedMsg}>✓ Kaydedildi</span>}
                  <button className={styles.btnPrimary} onClick={saveBookingSettings}>Kaydet</button>
                </div>
              </div>

              {/* Danger zone */}
              <div className={styles.dangerZone}>
                <h2 className={styles.dangerTitle}>Tehlikeli Bölge</h2>
                <p className={styles.dangerDesc}>
                  Hesabınızı silmek tüm randevularınızı, hizmetlerinizi ve profil bilgilerinizi kalıcı olarak siler.
                </p>
                <button className={styles.dangerBtn}>Hesabı Sil</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
