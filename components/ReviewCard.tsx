import styles from './ReviewCard.module.css';

type Review = {
  author: string;
  venue: string;
  rating: number;
  text: string;
  date: string;
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {'★'.repeat(review.rating)}
      </div>
      <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
      <div className={styles.footer}>
        <span className={styles.author}>{review.author}</span>
        <span className={styles.separator}>·</span>
        <span className={styles.venue}>{review.venue}</span>
        <span className={styles.separator}>·</span>
        <span className={styles.date}>{review.date}</span>
      </div>
    </div>
  );
}
