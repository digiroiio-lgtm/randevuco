import Image from 'next/image';
import Link from 'next/link';
import type { Venue, VenueDetail } from '@/lib/data';
import styles from './SearchVenueCard.module.css';

type Props = {
  venue: Venue;
  detail?: VenueDetail;
  onMouseEnter?: (slug: string) => void;
  onMouseLeave?: () => void;
};

export default function SearchVenueCard({ venue, detail, onMouseEnter, onMouseLeave }: Props) {
  // Collect all service items across categories, show first 3
  const allItems =
    detail?.serviceCategories.flatMap((cat) =>
      cat.items.map((item) => ({ ...item, catName: cat.name }))
    ) ?? [];
  const previewItems = allItems.slice(0, 3);
  const totalServices = allItems.length;

  return (
    <div
      className={styles.card}
      onMouseEnter={() => onMouseEnter?.(venue.slug)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {/* Photo */}
      <Link href={`/isletme/${venue.slug}`} className={styles.imgLink}>
        <div className={styles.imgWrap}>
          <Image
            src={`https://images.unsplash.com/${venue.img}?auto=format&fit=crop&w=600&h=340&q=80`}
            alt={venue.name}
            fill
            sizes="(max-width: 900px) 100vw, 580px"
            className={styles.img}
          />
          {venue.featured && (
            <span className={styles.featuredBadge}>Öne Çıkan</span>
          )}
        </div>
      </Link>

      {/* Body */}
      <div className={styles.body}>
        {/* Name + rating row */}
        <div className={styles.nameRow}>
          <Link href={`/isletme/${venue.slug}`} className={styles.name}>
            {venue.name}
          </Link>
          <div className={styles.ratingWrap}>
            <span className={styles.star} aria-hidden="true">★</span>
            <span className={styles.score}>{venue.rating.toFixed(1)}</span>
            <span className={styles.count}>({venue.reviews.toLocaleString('tr-TR')})</span>
          </div>
        </div>

        {/* Location */}
        <p className={styles.location}>{venue.type} · {venue.location}</p>

        {/* Service previews */}
        {previewItems.length > 0 && (
          <div className={styles.serviceList}>
            {previewItems.map((item) => (
              <div key={item.name} className={styles.serviceRow}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceName}>{item.name}</span>
                  <span className={styles.serviceDuration}>{item.duration}</span>
                </div>
                <span className={styles.servicePrice}>{item.price}</span>
              </div>
            ))}
          </div>
        )}

        {/* See all */}
        {totalServices > 3 && (
          <Link href={`/isletme/${venue.slug}#services`} className={styles.seeAll}>
            Tüm {totalServices} hizmeti gör
          </Link>
        )}
      </div>
    </div>
  );
}
