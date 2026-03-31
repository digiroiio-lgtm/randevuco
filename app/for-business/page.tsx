import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'İşletmeler İçin – Randevu.',
  description: 'Randevu. platformuna işletmenizi ekleyin, yeni müşterilere ulaşın ve rezervasyonları kolayca yönetin.',
};

const features = [
  {
    icon: '📅',
    title: 'Kolay Rezervasyon',
    desc: 'Müşterileriniz 7/24 online randevu alabilir. SMS ve e-posta bildirimleriyle hiçbir randevuyu kaçırmayın.',
  },
  {
    icon: '📊',
    title: 'Gelişmiş Analitik',
    desc: 'İşletme performansınızı takip edin. Doluluk oranları, gelir analizleri ve müşteri istatistiklerini görün.',
  },
  {
    icon: '⭐',
    title: 'Değerlendirmeler',
    desc: 'Müşteri yorumlarını yönetin. Olumlu değerlendirmeler işletmenizin güvenilirliğini artırır.',
  },
  {
    icon: '💳',
    title: 'Online Ödeme',
    desc: 'Kredi kartı, havale ve dijital cüzdan ile güvenli ödeme alın. Ön ödeme ile iptalleri azaltın.',
  },
  {
    icon: '👥',
    title: 'Personel Yönetimi',
    desc: 'Çalışan takvimlerini yönetin, vardiyaları düzenleyin ve personel bazlı raporlar alın.',
  },
  {
    icon: '🔔',
    title: 'Otomatik Hatırlatmalar',
    desc: 'Randevu öncesi otomatik SMS ve e-posta gönderin. Gelmeme oranını %60 azaltın.',
  },
];

export default function ForBusinessPage() {
  return (
    <>
      <Nav />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>İşletmeler İçin</span>
            <h1 className={styles.heroTitle}>
              İşletmenizi bir sonraki<br />seviyeye taşıyın
            </h1>
            <p className={styles.heroSub}>
              Türkiye&apos;nin en hızlı büyüyen güzellik ve wellness platformuna katılın.
              Binlerce potansiyel müşteriye ulaşın.
            </p>
            <div className={styles.heroCtas}>
              <Link href="#pricing" className={styles.btnPrimary}>
                Ücretsiz Başlayın
              </Link>
              <Link href="#features" className={styles.btnSecondary}>
                Daha Fazla Bilgi
              </Link>
            </div>
            <p className={styles.heroNote}>Kredi kartı gerekmez · 30 gün ücretsiz deneme</p>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {[
                { value: '12.000+', label: 'Aktif İşletme' },
                { value: '850.000+', label: 'Aylık Rezervasyon' },
                { value: '4.8★', label: 'Ortalama Puan' },
                { value: '%40', label: 'Gelir Artışı' },
              ].map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.featuresSection} id="features">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Neden Randevu.?</h2>
            <div className={styles.featuresGrid}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureCard}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pricingSection} id="pricing">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Fiyatlandırma</h2>
            <div className={styles.pricingGrid}>
              {[
                {
                  plan: 'Başlangıç',
                  price: 'Ücretsiz',
                  period: '',
                  features: ['5 randevu/ay', 'Temel profil', 'E-posta bildirimleri'],
                  cta: 'Başlayın',
                  highlight: false,
                },
                {
                  plan: 'Pro',
                  price: '₺599',
                  period: '/ay',
                  features: ['Sınırsız randevu', 'Gelişmiş analitik', 'SMS bildirimleri', 'Online ödeme', 'Personel yönetimi'],
                  cta: 'Pro Deneyin',
                  highlight: true,
                },
                {
                  plan: 'Kurumsal',
                  price: 'Özel',
                  period: '',
                  features: ['Her şey dahil', 'Çoklu şube', 'API erişimi', 'Öncelikli destek'],
                  cta: 'Bize Ulaşın',
                  highlight: false,
                },
              ].map((p) => (
                <div key={p.plan} className={`${styles.pricingCard} ${p.highlight ? styles.highlighted : ''}`}>
                  <h3 className={styles.planName}>{p.plan}</h3>
                  <div className={styles.planPrice}>
                    <span className={styles.priceNum}>{p.price}</span>
                    <span className={styles.pricePeriod}>{p.period}</span>
                  </div>
                  <ul className={styles.featureList}>
                    {p.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <span className={styles.check}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className={p.highlight ? styles.btnPrimary : styles.btnOutline}>
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2024 Randevu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
