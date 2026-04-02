'use client';

import { useState } from 'react';
import type { SSSItem } from '@/lib/yardim-data';
import styles from '@/app/help/help.module.css';

export default function SSSAkordeon({ items }: { items: SSSItem[] }) {
  const [acik, setAcik] = useState<number | null>(null);

  return (
    <ul className={styles.faqList}>
      {items.map((item, i) => (
        <li key={i} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => setAcik(acik === i ? null : i)}
            aria-expanded={acik === i}
          >
            {item.soru}
            <span className={`${styles.faqChevron} ${acik === i ? styles.faqChevronOpen : ''}`}>▼</span>
          </button>
          {acik === i && (
            <div className={styles.faqAnswer}>{item.cevap}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
