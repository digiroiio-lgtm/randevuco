'use client';

import { useState } from 'react';
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
  status: 'bekliyor' | 'onaylı' | 'tamamlandı' | 'iptal';
};

const APPOINTMENTS: Appointment[] = [
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
};

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', weekday: 'short' });
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
type Tab = 'genel' | 'randevular' | 'hizmetler' | 'profil' | 'ayarlar';

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

  /* ── derived ── */
  const today = new Date().toISOString().slice(0, 10);
  const todayAppts = APPOINTMENTS.filter((a) => a.date === today && a.status !== 'iptal');
  const pendingCount = APPOINTMENTS.filter((a) => a.status === 'bekliyor').length;
  const monthRevenue = APPOINTMENTS.filter((a) => a.status === 'tamamlandı')
    .reduce((sum, a) => sum + parseInt(a.price.replace(/[^\d]/g, '')), 0);
  const filteredAppts =
    apptFilter === 'tümü' ? APPOINTMENTS : APPOINTMENTS.filter((a) => a.status === apptFilter);

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

  /* ── nav items ── */
  const NAV: { id: Tab; label: string; icon: string }[] = [
    { id: 'genel',      label: 'Genel Bakış',  icon: '📊' },
    { id: 'randevular', label: 'Randevular',   icon: '📅' },
    { id: 'hizmetler',  label: 'Hizmetler',    icon: '✂️' },
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
                          <span className={`${styles.statusBadge} ${styles[`status_${a.status}`]}`}>
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

              {/* filter pills */}
              <div className={styles.filterBar}>
                {(['tümü', 'bekliyor', 'onaylı', 'tamamlandı', 'iptal'] as const).map((f) => (
                  <button
                    key={f}
                    className={`${styles.filterPill} ${apptFilter === f ? styles.filterPillActive : ''}`}
                    onClick={() => setApptFilter(f)}
                  >
                    {f === 'tümü' ? 'Tümü' : STATUS_LABEL[f as Appointment['status']]}
                    {f !== 'tümü' && (
                      <span className={styles.filterCount}>
                        {APPOINTMENTS.filter((a) => a.status === f).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* list */}
              <div className={styles.apptListFull}>
                {filteredAppts.length === 0 ? (
                  <p className={styles.empty}>Bu filtreye uygun randevu yok.</p>
                ) : (
                  filteredAppts.map((a) => (
                    <div key={a.id} className={styles.apptCard}>
                      <div className={styles.apptCardLeft}>
                        <div className={styles.apptCardDate}>
                          <span className={styles.apptCardDay}>
                            {new Date(a.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
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
                        <span className={`${styles.statusBadge} ${styles[`status_${a.status}`]}`}>
                          {STATUS_LABEL[a.status]}
                        </span>
                        <span className={styles.apptCardPrice}>{a.price}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
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
