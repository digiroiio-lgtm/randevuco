import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import { allVenues } from '@/lib/data';
import styles from './page.module.css';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allVenues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = allVenues.find((v) => v.slug === params.slug);
  if (!venue) return { title: 'İşletme Bulunamadı – Randevu.' };
  return {
    title: `${venue.name} – Randevu.`,
    description: `${venue.name} adresinde ${venue.type} hizmetleri için online randevu alın. ${venue.location}.`,
  };
}

const mockServices = [
  { name: 'Saç Kesimi', duration: '45 dk', price: '₺250' },
  { name: 'Saç Boyama', duration: '90 dk', price: '₺600' },
  { name: 'Fön & Şekillendirme', duration: '30 dk', price: '₺180' },
  { name: 'Saç Bakımı', duration: '60 dk', price: '₺350' },
];

export default function VenueDetailPage({ params }: Props) {
  const venue = allVenues.find((v) => v.slug === params.slug);
  if (!venue) notFound();

  return (
    <>
      <Nav />
      <main>
        <div className={styles.heroImg}>
          <Image
            src={`https://images.unsplash.com/${venue.img}?auto=format&fit=crop&w=1200&h=500&q=80`}
            alt={venue.name}
            fill
            priority
            sizes="100vw"
            className={styles.img}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.main}>
              <div className={styles.header}>
                <span className={styles.type}>{venue.type}</span>
                <h1 className={styles.name}>{venue.name}</h1>
                <p className={styles.location}>📍 {venue.location}</p>
                <div className={styles.rating}>
                  <span className={styles.star}>★</span>
                  <span className={styles.score}>{venue.rating.toFixed(1)}</span>
                  <span className={styles.count}>{venue.reviews} değerlendirme</span>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Hizmetler</h2>
                <div className={styles.serviceList}>
                  {mockServices.map((s) => (
                    <div key={s.name} className={styles.serviceRow}>
                      <div>
                        <p className={styles.serviceName}>{s.name}</p>
                        <p className={styles.serviceMeta}>{s.duration}</p>
                      </div>
                      <div className={styles.serviceRight}>
                        <span className={styles.servicePrice}>{s.price}</span>
                        <Link href={`/randevu-al/${venue.slug}`} className={styles.bookBtn}>
                          Rezerve Et
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Hakkında</h2>
                <p className={styles.about}>
                  {venue.name}, {venue.location} bölgesinde profesyonel {venue.type.toLowerCase()} hizmetleri sunmaktadır.
                  Deneyimli ekibimiz ve modern ekipmanlarımızla size en iyi hizmeti vermeyi hedefliyoruz.
                </p>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h2 className={styles.sideTitle}>Randevu Al</h2>
                <p className={styles.sideText}>
                  {venue.name} için hemen online randevu alın.
                </p>
                <Link href={`/randevu-al/${venue.slug}`} className={styles.ctaBtn}>
                  Randevu Al
                </Link>
                <div className={styles.info}>
                  <div className={styles.infoRow}>
                    <span>⏰</span>
                    <span>Pzt–Cmt: 09:00–19:00</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span>📍</span>
                    <span>{venue.location}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2024 Randevu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
