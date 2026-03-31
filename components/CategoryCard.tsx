import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/lib/data';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category }: { category: Category }) {
  const slug = encodeURIComponent(category.name.toLowerCase());
  return (
    <Link href={`/listele?kategori=${slug}`} className={styles.card}>
      <div className={styles.imgWrap}>
        <Image
          src={`https://images.unsplash.com/${category.img}?auto=format&fit=crop&w=200&h=200&q=70`}
          alt={category.name}
          fill
          sizes="(max-width: 600px) 45vw, 140px"
          className={styles.img}
        />
      </div>
      <span className={styles.name}>{category.name}</span>
    </Link>
  );
}
