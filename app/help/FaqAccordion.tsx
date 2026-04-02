'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/help-data';
import styles from './help.module.css';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className={styles.faqList}>
      {items.map((item, i) => (
        <li key={i} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.question}
            <span className={`${styles.faqChevron} ${open === i ? styles.faqChevronOpen : ''}`}>▼</span>
          </button>
          {open === i && (
            <div className={styles.faqAnswer}>{item.answer}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
