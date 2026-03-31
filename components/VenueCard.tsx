import Image from 'next/image';
import Link from 'next/link';
import type { Venue } from '@/lib/data';
import styles from './VenueCard.module.css';

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link href={`/isletme/${venue.slug}`} className={styles.card}>
      <div className={styles.imgWrap}>
        <Image
          src={`https://images.unsplash.com/${venue.img}?auto=format&fit=crop&w=400&h=300&q=80`}
          alt={venue.name}
          fill
          sizes="(max-width: 600px) 80vw, 280px"
          className={styles.img}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.type}>{venue.type}</p>
        <h3 className={styles.name}>{venue.name}</h3>
        <p className={styles.location}>{venue.location}</p>
        <div className={styles.rating}>
          <span className={styles.star}>★</span>
          <span className={styles.score}>{venue.rating.toFixed(1)}</span>
          <span className={styles.count}>({venue.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
