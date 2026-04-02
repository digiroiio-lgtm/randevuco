import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';
import { yardimKategorileri } from '@/lib/yardim-data';
import { SITE_URL } from '@/lib/seo-data';

type Props = { params: Promise<{ kategori: string }> };

export async function generateStaticParams() {
  return yardimKategorileri.map((k) => ({ kategori: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const kat = yardimKategorileri.find((k) => k.slug === kategori);
  if (!kat) return {};
  return {
    title: `${kat.label} – Randevu.co Yardım Merkezi`,
    description: kat.aciklama,
    alternates: { canonical: `${SITE_URL}/yardim/${kategori}` },
  };
}

export default async function YardimKategoriPage({ params }: Props) {
  const { kategori } = await params;
  const kat = yardimKategorileri.find((k) => k.slug === kategori);
  if (!kat) notFound();

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Anasayfa</Link> / <Link href="/yardim">Yardım Merkezi</Link> / {kat.label}
        </p>

        <div style={{ fontSize: '40px', marginBottom: '12px' }}>{kat.icon}</div>
        <h1 className={styles.formTitle}>{kat.label}</h1>
        <p className={styles.formSub}>{kat.aciklama}</p>

        <ul className={styles.articleList}>
          {kat.makaleler.map((makale) => (
            <li key={makale.slug} className={styles.articleItem}>
              <a href={`/yardim/${kategori}/${makale.slug}`}>
                {makale.baslik}
                <span className={styles.articleArrow}>›</span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.ctaBox}>
          <h2>Hâlâ yardıma mı ihtiyacınız var?</h2>
          <p>Destek ekibimiz genellikle 24 saat içinde yanıt verir.</p>
          <Link href="/yardim/destek" className={styles.ctaBtn}>Destek Talebi Oluştur</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
