'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import styles from './page.module.css';

/* ── Business types ── */
const businessTypes = [
  { icon: '✂️', name: 'Kuaför' },
  { icon: '💈', name: 'Berber' },
  { icon: '💅', name: 'Tırnak Salonu' },
  { icon: '🧖', name: 'Spa & Sauna' },
  { icon: '💉', name: 'Medikal Estetik' },
  { icon: '🤲', name: 'Masaj' },
  { icon: '🏋️', name: 'Fitness' },
  { icon: '🦴', name: 'Fizyoterapi' },
  { icon: '🏥', name: 'Sağlık Kliniği' },
  { icon: '🖋️', name: 'Dövme & Piercing' },
  { icon: '🐾', name: 'Evcil Hayvan Bakımı' },
  { icon: '🌞', name: 'Bronzlaşma Stüdyosu' },
];

const cities = [
  'İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa',
  'Adana', 'Konya', 'Gaziantep', 'Mersin', 'Kayseri',
  'Eskişehir', 'Diyarbakır', 'Trabzon', 'Bodrum', 'Diğer',
];

type FormData = {
  businessType: string;
  businessName: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  fullName: string;
  email: string;
  password: string;
};

const TOTAL_STEPS = 3;

export default function BusinessRegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    businessType: '',
    businessName: '',
    city: '',
    district: '',
    address: '',
    phone: '',
    fullName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set(key: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const step1Valid = form.businessType !== '';
  const step2Valid = form.businessName.trim() !== '' && form.city !== '' && form.phone.trim() !== '';
  const step3Valid = form.fullName.trim() !== '' && form.email.includes('@') && form.password.length >= 6;

  if (submitted) {
    return (
      <>
        <Nav />
        <main className={styles.main}>
          <div className={styles.successBox}>
            <div className={styles.successIcon}>🎉</div>
            <h1 className={styles.successTitle}>Başvurunuz Alındı!</h1>
            <p className={styles.successDesc}>
              <strong>{form.businessName}</strong> için kaydınız başarıyla oluşturuldu.
              Hesabınızı onaylamak için <strong>{form.email}</strong> adresine bir e-posta
              gönderdik. Birkaç dakika içinde kontrol edin.
            </p>
            <div className={styles.successActions}>
              <Link href="/panel" className={styles.btnPrimary}>
                Panele Git →
              </Link>
              <Link href="/" className={styles.btnOutline}>
                Ana Sayfaya Git
              </Link>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>© 2024 Randevu. Tüm hakları saklıdır.</p>
        </footer>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>

          {/* ── Header ── */}
          <div className={styles.header}>
            <Link href="/for-business" className={styles.backLink}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="10" x2="2" y2="10" />
                <polyline points="9 3 2 10 9 17" />
              </svg>
              Geri
            </Link>
            <div className={styles.headerText}>
              <h1 className={styles.pageTitle}>İşletmenizi Listeleyin</h1>
              <p className={styles.pageSub}>Milyonlarca müşteriye ulaşmak için kayıt oluşturun</p>
            </div>
          </div>

          {/* ── Progress bar ── */}
          <div className={styles.progress} role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`${styles.progressStep} ${i + 1 < step ? styles.progressDone : ''} ${i + 1 === step ? styles.progressActive : ''}`}
              >
                <div className={styles.progressDot}>
                  {i + 1 < step ? (
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="2 8 6 12 14 4" />
                    </svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <span className={styles.progressLabel}>
                  {i === 0 ? 'İşletme Türü' : i === 1 ? 'İşletme Bilgileri' : 'Hesap Oluştur'}
                </span>
                {i < TOTAL_STEPS - 1 && <div className={`${styles.progressLine} ${i + 1 < step ? styles.progressLineDone : ''}`} />}
              </div>
            ))}
          </div>

          {/* ── Form card ── */}
          <div className={styles.card}>

            {/* Step 1 – Business type */}
            {step === 1 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>İşletme Türünüzü Seçin</h2>
                <p className={styles.stepDesc}>Size en uygun kategoriyi seçin. Daha sonra değiştirebilirsiniz.</p>
                <div className={styles.typeGrid}>
                  {businessTypes.map((t) => (
                    <button
                      key={t.name}
                      type="button"
                      className={`${styles.typeCard} ${form.businessType === t.name ? styles.typeCardSelected : ''}`}
                      onClick={() => set('businessType', t.name)}
                    >
                      <span className={styles.typeIcon}>{t.icon}</span>
                      <span className={styles.typeName}>{t.name}</span>
                    </button>
                  ))}
                </div>
                <div className={styles.stepActions}>
                  <button
                    type="button"
                    className={styles.btnPrimary}
                    disabled={!step1Valid}
                    onClick={next}
                  >
                    Devam Et
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 – Business details */}
            {step === 2 && (
              <form
                className={styles.stepContent}
                onSubmit={(e) => { e.preventDefault(); if (step2Valid) next(); }}
                noValidate
              >
                <h2 className={styles.stepTitle}>İşletme Bilgileri</h2>
                <p className={styles.stepDesc}>İşletmenizin profilini oluşturmak için aşağıdaki bilgileri girin.</p>

                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="businessName">
                      İşletme Adı <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      className={styles.input}
                      placeholder="örn. Luxe Spa & Wellness"
                      value={form.businessName}
                      onChange={(e) => set('businessName', e.target.value)}
                      autoComplete="organization"
                      required
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="city">
                        Şehir <span className={styles.required}>*</span>
                      </label>
                      <select
                        id="city"
                        className={styles.select}
                        value={form.city}
                        onChange={(e) => set('city', e.target.value)}
                        required
                      >
                        <option value="">Şehir seçin</option>
                        {cities.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="district">İlçe</label>
                      <input
                        id="district"
                        type="text"
                        className={styles.input}
                        placeholder="örn. Konyaaltı"
                        value={form.district}
                        onChange={(e) => set('district', e.target.value)}
                        autoComplete="address-level2"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="address">Açık Adres</label>
                    <input
                      id="address"
                      type="text"
                      className={styles.input}
                      placeholder="Sokak, cadde, bina no"
                      value={form.address}
                      onChange={(e) => set('address', e.target.value)}
                      autoComplete="street-address"
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">
                      Telefon Numarası <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.phoneWrap}>
                      <span className={styles.phonePrefix}>🇹🇷 +90</span>
                      <input
                        id="phone"
                        type="tel"
                        className={`${styles.input} ${styles.inputPhone}`}
                        placeholder="532 123 45 67"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.stepActions}>
                  <button type="button" className={styles.btnBack} onClick={back}>Geri</button>
                  <button type="submit" className={styles.btnPrimary} disabled={!step2Valid}>
                    Devam Et
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 – Account creation */}
            {step === 3 && (
              <form className={styles.stepContent} onSubmit={handleSubmit} noValidate>
                <h2 className={styles.stepTitle}>Hesap Oluşturun</h2>
                <p className={styles.stepDesc}>Randevu. paneline erişmek için bir hesap oluşturun.</p>

                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="fullName">
                      Ad Soyad <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className={styles.input}
                      placeholder="Ad Soyad"
                      value={form.fullName}
                      onChange={(e) => set('fullName', e.target.value)}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                      E-posta Adresi <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={styles.input}
                      placeholder="ornek@isletme.com"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="password">
                      Şifre <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.passwordWrap}>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        className={`${styles.input} ${styles.inputPassword}`}
                        placeholder="En az 6 karakter"
                        value={form.password}
                        onChange={(e) => set('password', e.target.value)}
                        autoComplete="new-password"
                        required
                        minLength={6}
                      />
                      <button
                        type="button"
                        className={styles.eyeBtn}
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                      >
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                    {form.password.length > 0 && form.password.length < 6 && (
                      <p className={styles.fieldError}>Şifre en az 6 karakter olmalıdır.</p>
                    )}
                  </div>
                </div>

                {/* Summary card */}
                <div className={styles.summaryCard}>
                  <p className={styles.summaryTitle}>Özet</p>
                  <div className={styles.summaryRows}>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryKey}>İşletme Türü</span>
                      <span className={styles.summaryVal}>{form.businessType}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryKey}>İşletme Adı</span>
                      <span className={styles.summaryVal}>{form.businessName}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryKey}>Konum</span>
                      <span className={styles.summaryVal}>
                        {[form.district, form.city].filter(Boolean).join(', ') || '—'}
                      </span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryKey}>Telefon</span>
                      <span className={styles.summaryVal}>+90 {form.phone}</span>
                    </div>
                  </div>
                </div>

                <p className={styles.terms}>
                  Kaydolarak{' '}
                  <Link href="/kullanim-kosullari" className={styles.termsLink}>Kullanım Koşulları</Link>
                  {' '}ve{' '}
                  <Link href="/gizlilik" className={styles.termsLink}>Gizlilik Politikası</Link>
                  &apos;nı kabul etmiş olursunuz.
                </p>

                <div className={styles.stepActions}>
                  <button type="button" className={styles.btnBack} onClick={back}>Geri</button>
                  <button type="submit" className={styles.btnPrimary} disabled={!step3Valid}>
                    Hesabı Oluştur
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Already have account */}
          <p className={styles.loginHint}>
            Zaten hesabınız var mı?{' '}
            <Link href="/giris" className={styles.loginLink}>Giriş Yapın</Link>
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Randevu. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}
