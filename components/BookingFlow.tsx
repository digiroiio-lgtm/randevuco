'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Venue } from '@/lib/data';
import styles from './BookingFlow.module.css';

export type BookingServiceItem = {
  id: string;
  name: string;
  duration: string;
  durationMin: number;
  price: string;
  priceNum: number;
};

export type BookingStaffMember = {
  name: string;
  title: string;
  img?: string;
};

type Props = {
  venue: Venue;
  serviceList?: BookingServiceItem[];
  staffList?: BookingStaffMember[];
  busySlots?: string[]; /* time strings that are fully booked on today's date */
};

const DEFAULT_SERVICES: BookingServiceItem[] = [
  { id: 's1', name: 'Saç Kesimi',     duration: '45 dk', durationMin: 45, price: '₺250', priceNum: 250 },
  { id: 's2', name: 'Saç Boyama',     duration: '90 dk', durationMin: 90, price: '₺600', priceNum: 600 },
  { id: 's3', name: 'Manikür',        duration: '30 dk', durationMin: 30, price: '₺150', priceNum: 150 },
  { id: 's4', name: 'Masaj (60 dk)',  duration: '60 dk', durationMin: 60, price: '₺400', priceNum: 400 },
  { id: 's5', name: 'Cilt Bakımı',    duration: '60 dk', durationMin: 60, price: '₺350', priceNum: 350 },
];

const DEFAULT_STAFF: BookingStaffMember[] = [
  { name: 'Ayşe K.',   title: 'Kıdemli Stilist' },
  { name: 'Mehmet D.', title: 'Uzman Kuaför' },
  { name: 'Selin Y.',  title: 'Güzellik Uzmanı' },
];

const BASE_TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
                    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

function getFutureDates(count: number) {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('tr-TR', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatDuration(mins: number) {
  if (mins < 60) return `${mins} dk`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h} sa ${m} dk` : `${h} sa`;
}

const STEP_LABELS = ['Hizmetler', 'Personel', 'Tarih & Saat', 'Onayla'];

/* Demo busy slots — in production these would come from real availability API */
const DEMO_BUSY = ['09:30', '10:30', '14:00'];

export default function BookingFlow({ venue, serviceList, staffList, busySlots }: Props) {
  const router = useRouter();
  const services = serviceList ?? DEFAULT_SERVICES;
  const staff    = staffList    ?? DEFAULT_STAFF;
  const busy     = busySlots    ?? DEMO_BUSY;

  const [step, setStep]                   = useState(1);
  const [selectedIds, setSelectedIds]     = useState<string[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<string>('any');
  const [selectedDate, setSelectedDate]   = useState(getTodayStr());
  const [selectedTime, setSelectedTime]   = useState('');
  const [name, setName]                   = useState('');
  const [phone, setPhone]                 = useState('');
  const [note, setNote]                   = useState('');
  const [confirmed, setConfirmed]         = useState(false);
  const [waitlistMode, setWaitlistMode]   = useState(false);   /* true when user chose a busy slot */
  const [waitlistDone, setWaitlistDone]   = useState(false);

  const dates = getFutureDates(14);
  const chosenServices  = services.filter((s) => selectedIds.includes(s.id));
  const totalPrice      = chosenServices.reduce((sum, s) => sum + s.priceNum, 0);
  const totalDurationMin = chosenServices.reduce((sum, s) => sum + s.durationMin, 0);

  function toggleService(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    setConfirmed(true);
  }

  /* ── Waitlist done screen ── */
  if (waitlistDone) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon} style={{ background: '#f59e0b' }}>⏳</div>
        <h2 className={styles.successTitle}>Bekleme Listesine Eklendiniz!</h2>
        <div className={styles.successSummary}>
          <p><strong>İşletme:</strong> {venue.name}</p>
          <p><strong>Hizmetler:</strong> {chosenServices.map((s) => s.name).join(', ')}</p>
          <p><strong>Tercih edilen saat:</strong> {selectedTime}</p>
        </div>
        <p className={styles.successNote}>Slot müsait olduğunda SMS ile bilgilendirileceksiniz.</p>
        <button className={styles.btn} onClick={() => router.push('/')}>
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  /* ── Success screen ── */
  if (confirmed) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successTitle}>Randevunuz Alındı!</h2>
        <div className={styles.successSummary}>
          <p><strong>İşletme:</strong> {venue.name}</p>
          <p><strong>Hizmetler:</strong> {chosenServices.map((s) => s.name).join(', ')}</p>
          <p><strong>Personel:</strong> {selectedStaff === 'any' ? 'Fark etmez' : selectedStaff}</p>
          <p><strong>Tarih:</strong> {formatDate(selectedDate)}</p>
          <p><strong>Saat:</strong> {selectedTime}</p>
          <p><strong>Toplam:</strong> ₺{totalPrice.toLocaleString('tr-TR')}</p>
        </div>
        <p className={styles.successNote}>SMS ve e-posta ile hatırlatma yapılacaktır.</p>
        <button className={styles.btn} onClick={() => router.push('/')}>
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  /* ── Step indicator ── */
  const stepBar = (
    <div className={styles.stepBar}>
      {STEP_LABELS.map((label, idx) => {
        const n = idx + 1;
        const active  = step === n;
        const done    = step > n;
        return (
          <div key={n} className={styles.stepBarItem}>
            <div className={`${styles.stepDot} ${done ? styles.done : active ? styles.active : ''}`}>
              {done ? '✓' : n}
            </div>
            <span className={`${styles.stepLabel} ${active ? styles.stepLabelActive : ''}`}>{label}</span>
            {idx < STEP_LABELS.length - 1 && <div className={`${styles.stepLine} ${done ? styles.stepLineDone : ''}`} />}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles.flow}>
      {stepBar}

      {/* ── Step 1: Service multi-select ── */}
      {step === 1 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Hizmet Seçin</h2>
          <p className={styles.sectionSub}>Birden fazla hizmet seçebilirsiniz</p>
          <div className={styles.serviceList}>
            {services.map((s) => {
              const checked = selectedIds.includes(s.id);
              return (
                <button
                  key={s.id}
                  className={`${styles.serviceItem} ${checked ? styles.selected : ''}`}
                  onClick={() => toggleService(s.id)}
                  aria-pressed={checked}
                >
                  <div className={styles.serviceLeft}>
                    <div className={`${styles.checkbox} ${checked ? styles.checkboxChecked : ''}`}>
                      {checked && <span>✓</span>}
                    </div>
                    <span className={styles.serviceName}>{s.name}</span>
                  </div>
                  <span className={styles.serviceMeta}>{s.duration} · {s.price}</span>
                </button>
              );
            })}
          </div>

          {selectedIds.length > 0 && (
            <div className={styles.basket}>
              <span className={styles.basketInfo}>
                {selectedIds.length} hizmet · {formatDuration(totalDurationMin)}
              </span>
              <span className={styles.basketTotal}>₺{totalPrice.toLocaleString('tr-TR')}</span>
            </div>
          )}

          <button
            className={styles.btn}
            disabled={selectedIds.length === 0}
            onClick={() => setStep(2)}
          >
            Devam Et
          </button>
        </div>
      )}

      {/* ── Step 2: Staff selection ── */}
      {step === 2 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Personel Seçin</h2>
          <p className={styles.sectionSub}>Tercih ettiğiniz personeli seçin</p>

          <div className={styles.staffGrid}>
            {/* Any staff card */}
            <button
              className={`${styles.staffCard} ${selectedStaff === 'any' ? styles.selected : ''}`}
              onClick={() => setSelectedStaff('any')}
            >
              <div className={styles.staffAvatar}>🎲</div>
              <span className={styles.staffName}>Fark etmez</span>
              <span className={styles.staffTitle}>İlk müsait personel</span>
            </button>

            {staff.map((sm) => (
              <button
                key={sm.name}
                className={`${styles.staffCard} ${selectedStaff === sm.name ? styles.selected : ''}`}
                onClick={() => setSelectedStaff(sm.name)}
              >
                <div className={styles.staffAvatar}>
                  {sm.img
                    ? <img src={sm.img} alt={sm.name} className={styles.staffAvatarImg} />
                    : sm.name.charAt(0)}
                </div>
                <span className={styles.staffName}>{sm.name}</span>
                <span className={styles.staffTitle}>{sm.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.navRow}>
            <button className={styles.btnOutline} onClick={() => setStep(1)}>Geri</button>
            <button className={styles.btn} onClick={() => setStep(3)}>Devam Et</button>
          </div>
        </div>
      )}

      {/* ── Step 3: Date & time ── */}
      {step === 3 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tarih &amp; Saat Seçin</h2>
          <div className={styles.dateList}>
            {dates.map((d) => (
              <button
                key={d}
                className={`${styles.dateBtn} ${selectedDate === d ? styles.selected : ''}`}
                onClick={() => { setSelectedDate(d); setSelectedTime(''); }}
              >
                {formatDate(d)}
              </button>
            ))}
          </div>
          <p className={styles.sectionSub} style={{ marginTop: 4 }}>
            Toplam süre: {formatDuration(totalDurationMin)}
          </p>
          <div className={styles.timeGrid}>
            {BASE_TIMES.map((t) => {
              const isBusy = busy.includes(t);
              return (
                <button
                  key={t}
                  className={`${styles.timeBtn} ${selectedTime === t ? styles.selected : ''} ${isBusy ? styles.timeBtnBusy : ''}`}
                  onClick={() => {
                    if (isBusy) {
                      setSelectedTime(t);
                      setWaitlistMode(true);
                    } else {
                      setSelectedTime(t);
                      setWaitlistMode(false);
                    }
                  }}
                >
                  {isBusy ? `${t} 🔴` : t}
                </button>
              );
            })}
          </div>

          {/* Waitlist CTA when a busy slot is selected */}
          {waitlistMode && selectedTime && (
            <div className={styles.waitlistBox}>
              <p className={styles.waitlistTitle}>⏳ Bu saat dolu</p>
              <p className={styles.waitlistDesc}>
                <strong>{selectedTime}</strong> saati için bekleme listesine eklenebilirsiniz.
                Slot açıldığında SMS ile bildirim alırsınız.
              </p>
              <button className={styles.btnWaitlist} onClick={() => setWaitlistDone(true)}>
                Bekleme Listesine Ekle
              </button>
            </div>
          )}
          <div className={styles.navRow}>
            <button className={styles.btnOutline} onClick={() => setStep(2)}>Geri</button>
            <button
              className={styles.btn}
              disabled={!selectedTime || waitlistMode}
              onClick={() => setStep(4)}
            >
              Devam Et
            </button>
          </div>
        </div>
      )}

      {/* ── Step 4: Contact + confirm ── */}
      {step === 4 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>İletişim &amp; Onayla</h2>
          <form onSubmit={handleConfirm} className={styles.form}>
            <label className={styles.label}>
              Ad Soyad
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Adınızı girin"
              />
            </label>
            <label className={styles.label}>
              Telefon
              <input
                className={styles.input}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+90 5XX XXX XX XX"
              />
            </label>
            <label className={styles.label}>
              Not (opsiyonel)
              <textarea
                className={styles.input}
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Varsa özel isteğinizi belirtin"
              />
            </label>

            <div className={styles.summary}>
              <p className={styles.summaryTitle}>Randevu Özeti</p>
              <div className={styles.summaryServices}>
                {chosenServices.map((s) => (
                  <div key={s.id} className={styles.summaryRow}>
                    <span>{s.name}</span>
                    <span>{s.price}</span>
                  </div>
                ))}
              </div>
              <div className={styles.summaryDivider} />
              <div className={styles.summaryRow}>
                <span>Personel</span>
                <span>{selectedStaff === 'any' ? 'Fark etmez' : selectedStaff}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Tarih &amp; Saat</span>
                <span>{formatDate(selectedDate)} – {selectedTime}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Toplam Süre</span>
                <span>{formatDuration(totalDurationMin)}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Toplam Tutar</span>
                <span>₺{totalPrice.toLocaleString('tr-TR')}</span>
              </div>
            </div>

            <div className={styles.navRow}>
              <button type="button" className={styles.btnOutline} onClick={() => setStep(3)}>Geri</button>
              <button type="submit" className={styles.btn}>Randevu Al</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
