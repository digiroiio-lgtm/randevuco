import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';
import { SITE_URL } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Destek Ekibiyle İletişim – Randevu.co',
  description: 'Randevu.co destek ekibiyle iletişime geçin. Destek talebi oluşturun veya e-posta gönderin.',
  alternates: { canonical: `${SITE_URL}/yardim/iletisim` },
};

export default function YardimIletisimPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Anasayfa</Link> / <Link href="/yardim">Yardım Merkezi</Link> / İletişim
        </p>
        <h1 className={styles.formTitle}>Destek Ekibiyle İletişim</h1>
        <p className={styles.formSub}>
          Randevu.co ekibiyle iletişime geçmek için aşağıdaki seçeneklerden birini kullanın.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {/* Destek Talebi */}
          <div className={styles.ticketCard}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🎫</div>
            <h2 className={styles.sectionTitleLeft}>Destek Talebi Oluştur</h2>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px' }}>
              Talep oluşturun, ekibimiz 24 saat içinde size yanıt versin. Randevu sorunları,
              ödeme anlaşmazlıkları, iade talepleri ve hesap problemleri için idealdir.
            </p>
            <Link href="/yardim/destek" className={styles.ctaBtn}>Destek Talebi Oluştur</Link>
          </div>

          {/* E-posta */}
          <div className={styles.ticketCard}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>📧</div>
            <h2 className={styles.sectionTitleLeft}>E-posta ile İletişim</h2>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>Müşteri Desteği:</strong>{' '}
              <a href="mailto:support@randevu.co" style={{ color: 'var(--accent)' }}>support@randevu.co</a>
            </p>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>İşletme Sorguları:</strong>{' '}
              <a href="mailto:business@randevu.co" style={{ color: 'var(--accent)' }}>business@randevu.co</a>
            </p>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>Hukuki ve Gizlilik:</strong>{' '}
              <a href="mailto:legal@randevu.co" style={{ color: 'var(--accent)' }}>legal@randevu.co</a>
            </p>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>Güven ve Güvenlik:</strong>{' '}
              <a href="mailto:trust@randevu.co" style={{ color: 'var(--accent)' }}>trust@randevu.co</a>
            </p>
          </div>

          {/* Adres */}
          <div className={styles.ticketCard}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🏢</div>
            <h2 className={styles.sectionTitleLeft}>Posta Adresi</h2>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8' }}>
              Randevu.co Ltd<br />
              71-75 Shelton Street<br />
              Covent Garden<br />
              Londra, WC2H 9JQ<br />
              Birleşik Krallık
            </p>
          </div>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
