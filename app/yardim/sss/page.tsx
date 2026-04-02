import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import SSSAkordeon from '@/app/yardim/SSSAkordeon';
import styles from '@/app/help/help.module.css';
import { sssItems } from '@/lib/yardim-data';
import { SITE_URL } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular – Randevu.co Yardım Merkezi',
  description: 'Randevu.co hakkında sık sorulan sorular: randevu, ödeme, hesap ve daha fazlası.',
  alternates: { canonical: `${SITE_URL}/yardim/sss` },
};

export default function SSSPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Anasayfa</Link> / <Link href="/yardim">Yardım Merkezi</Link> / SSS
        </p>
        <h1 className={styles.formTitle}>Sık Sorulan Sorular</h1>
        <p className={styles.formSub}>
          Randevu.co hakkında en sık sorulan soruların kısa ve net yanıtları.
        </p>

        <SSSAkordeon items={sssItems} />

        <div className={styles.ctaBox}>
          <h2>Aradığınızı bulamadınız mı?</h2>
          <p>Destek talebi oluşturun, ekibimiz 24 saat içinde size dönsün.</p>
          <Link href="/yardim/destek" className={styles.ctaBtn}>Destek Talebi Oluştur</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
