'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ServiceCategory } from '@/lib/data';
import styles from './ServiceTabs.module.css';

type Props = {
  categories: ServiceCategory[];
  venueSlug: string;
};

const MAX_VISIBLE = 7;

export default function ServiceTabs({ categories, venueSlug }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const active = categories[activeIdx];
  const displayItems = showAll ? active.items : active.items.slice(0, MAX_VISIBLE);
  const hasMore = !showAll && active.items.length > MAX_VISIBLE;

  return (
    <div>
      {/* Category chips */}
      <div className={styles.chips} role="tablist" aria-label="Hizmet kategorileri">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            role="tab"
            type="button"
            aria-selected={i === activeIdx}
            className={`${styles.chip} ${i === activeIdx ? styles.active : ''}`}
            onClick={() => {
              setActiveIdx(i);
              setShowAll(false);
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Service rows */}
      <div role="tabpanel">
        {displayItems.map((item) => (
          <div key={item.name} className={styles.serviceRow}>
            <div className={styles.serviceInfo}>
              <p className={styles.serviceName}>{item.name}</p>
              <p className={styles.serviceMeta}>{item.duration}</p>
            </div>
            <div className={styles.serviceRight}>
              <span className={styles.price}>{item.price}</span>
              <Link href={`/randevu-al/${venueSlug}`} className={styles.bookBtn}>
                Randevu Al
              </Link>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          className={styles.seeAll}
          onClick={() => setShowAll(true)}
        >
          Tümünü Gör ({active.items.length} hizmet)
        </button>
      )}
    </div>
  );
}
