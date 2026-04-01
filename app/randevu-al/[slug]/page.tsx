import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import BookingFlow from '@/components/BookingFlow';
import type { BookingServiceItem, BookingStaffMember } from '@/components/BookingFlow';
import { allVenues, venueDetails } from '@/lib/data';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allVenues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venue = allVenues.find((v) => v.slug === slug);
  if (!venue) return { title: 'Randevu Al – Randevu.' };
  return {
    title: `Randevu Al – ${venue.name} | Randevu.`,
    description: `${venue.name} adresinde online randevu alın. Hizmet seçin, tarih ve saat belirleyin.`,
  };
}

export default async function BookingPage({ params }: Props) {
  const { slug } = await params;
  const venue = allVenues.find((v) => v.slug === slug);
  if (!venue) notFound();

  const detail = venueDetails[slug];

  /* Build typed service list from venue detail if available */
  const serviceList: BookingServiceItem[] | undefined = detail?.serviceCategories
    .flatMap((cat) =>
      cat.items.map((item, idx) => {
        const durationMin = parseInt(item.duration) || 30;
        const priceNum    = parseInt(item.price.replace(/\D/g, '')) || 0;
        return {
          id:          `${cat.name}-${idx}`,
          name:        item.name,
          duration:    item.duration,
          durationMin,
          price:       item.price,
          priceNum,
        };
      })
    );

  /* Build typed staff list from venue detail if available */
  const staffList: BookingStaffMember[] | undefined = detail?.staff?.map((sm) => ({
    name:  sm.name,
    title: sm.title,
    img:   sm.img,
  }));

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadLink}>Ana Sayfa</Link>
            <span className={styles.sep}>/</span>
            <Link href={`/isletme/${venue.slug}`} className={styles.breadLink}>{venue.name}</Link>
            <span className={styles.sep}>/</span>
            <span>Randevu Al</span>
          </div>

          <div className={styles.layout}>
            <div className={styles.left}>
              <div className={styles.venueInfo}>
                <span className={styles.type}>{venue.type}</span>
                <h1 className={styles.venueName}>{venue.name}</h1>
                <p className={styles.venueLocation}>📍 {venue.location}</p>
                <div className={styles.rating}>
                  <span className={styles.star}>★</span>
                  <span className={styles.score}>{venue.rating.toFixed(1)}</span>
                  <span className={styles.count}>({venue.reviews})</span>
                </div>
              </div>

              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>Randevu Politikası</h3>
                <ul className={styles.infoList}>
                  <li>Randevularınızı en az 2 saat önceden iptal edebilirsiniz.</li>
                  <li>SMS ve e-posta ile hatırlatma yapılacaktır.</li>
                  <li>Online ödeme ile %10 indirim kazanın.</li>
                </ul>
              </div>
            </div>

            <div className={styles.right}>
              <BookingFlow venue={venue} serviceList={serviceList} staffList={staffList} />
            </div>
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
