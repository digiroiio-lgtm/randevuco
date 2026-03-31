'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Venue } from '@/lib/data';
import styles from './BookingFlow.module.css';

type Props = {
  venue: Venue;
};

const services = [
  { id: 's1', name: 'Saç Kesimi', duration: '45 dk', price: '₺250' },
  { id: 's2', name: 'Saç Boyama', duration: '90 dk', price: '₺600' },
  { id: 's3', name: 'Manikür', duration: '30 dk', price: '₺150' },
  { id: 's4', name: 'Masaj (60 dk)', duration: '60 dk', price: '₺400' },
];

const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00'];

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
  return new Date(dateStr).toLocaleDateString('tr-TR', { weekday: 'short', day: 'numeric', month: 'short' });
}

export default function BookingFlow({ venue }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(getTodayStr());
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const dates = getFutureDates(7);
  const chosenService = services.find((s) => s.id === selectedService);

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    setConfirmed(true);
    setStep(4);
  }

  if (confirmed) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successTitle}>Randevunuz Onaylandı!</h2>
        <p className={styles.successText}>
          <strong>{chosenService?.name}</strong> için {formatDate(selectedDate)} tarihinde saat{' '}
          <strong>{selectedTime}</strong>&apos;de {venue.name} adresinde görüşeceğiz.
        </p>
        <button className={styles.btn} onClick={() => router.push('/')}>
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  return (
    <div className={styles.flow}>
      <div className={styles.steps}>
        {[1, 2, 3].map((n) => (
          <div key={n} className={`${styles.stepDot} ${step >= n ? styles.active : ''}`}>
            {n}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Hizmet Seçin</h2>
          <div className={styles.serviceList}>
            {services.map((s) => (
              <button
                key={s.id}
                className={`${styles.serviceItem} ${selectedService === s.id ? styles.selected : ''}`}
                onClick={() => setSelectedService(s.id)}
              >
                <span className={styles.serviceName}>{s.name}</span>
                <span className={styles.serviceMeta}>{s.duration} · {s.price}</span>
              </button>
            ))}
          </div>
          <button
            className={styles.btn}
            disabled={!selectedService}
            onClick={() => setStep(2)}
          >
            Devam Et
          </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tarih &amp; Saat Seçin</h2>
          <div className={styles.dateList}>
            {dates.map((d) => (
              <button
                key={d}
                className={`${styles.dateBtn} ${selectedDate === d ? styles.selected : ''}`}
                onClick={() => setSelectedDate(d)}
              >
                {formatDate(d)}
              </button>
            ))}
          </div>
          <div className={styles.timeGrid}>
            {times.map((t) => (
              <button
                key={t}
                className={`${styles.timeBtn} ${selectedTime === t ? styles.selected : ''}`}
                onClick={() => setSelectedTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className={styles.navRow}>
            <button className={styles.btnOutline} onClick={() => setStep(1)}>Geri</button>
            <button
              className={styles.btn}
              disabled={!selectedTime}
              onClick={() => setStep(3)}
            >
              Devam Et
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>İletişim Bilgileri</h2>
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
            <div className={styles.summary}>
              <p><strong>Hizmet:</strong> {chosenService?.name}</p>
              <p><strong>Tarih:</strong> {formatDate(selectedDate)}</p>
              <p><strong>Saat:</strong> {selectedTime}</p>
              <p><strong>Ücret:</strong> {chosenService?.price}</p>
            </div>
            <div className={styles.navRow}>
              <button type="button" className={styles.btnOutline} onClick={() => setStep(2)}>Geri</button>
              <button type="submit" className={styles.btn}>Randevu Al</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
