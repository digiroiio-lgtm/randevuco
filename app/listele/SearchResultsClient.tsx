'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import SearchVenueCard from '@/components/SearchVenueCard';
import type { Venue, VenueDetail } from '@/lib/data';
import styles from './page.module.css';

const VenueMap = dynamic(() => import('@/components/VenueMap'), { ssr: false });

type Tab = 'venues' | 'professionals';

type Props = {
  venues: Venue[];
  details: Record<string, VenueDetail>;
};

export default function SearchResultsClient({ venues, details }: Props) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [mapVisible, setMapVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('venues');

  return (
    <div className={styles.searchRoot}>
      {/* ── Top toolbar ── */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <div className={styles.toggleGroup} role="group" aria-label="Görünüm seçimi">
            <button
              type="button"
              className={`${styles.toggleBtn} ${activeTab === 'venues' ? styles.toggleActive : ''}`}
              onClick={() => setActiveTab('venues')}
            >
              İşletmeler
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${activeTab === 'professionals' ? styles.toggleActive : ''}`}
              onClick={() => setActiveTab('professionals')}
            >
              Uzmanlar
            </button>
          </div>
          <span className={styles.venueCount}>{venues.length} işletme listelendi</span>
        </div>
        <div className={styles.toolbarRight}>
          <button type="button" className={styles.filterBtn} aria-label="Filtrele">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.filterIcon} aria-hidden="true">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            Filtrele
          </button>
          <button
            type="button"
            className={styles.mapToggleBtn}
            onClick={() => setMapVisible((v) => !v)}
            aria-pressed={mapVisible}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.filterIcon} aria-hidden="true">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            {mapVisible ? 'Haritayı Gizle' : 'Haritayı Göster'}
          </button>
        </div>
      </div>

      {/* ── Split panel ── */}
      <div className={`${styles.splitPanel} ${!mapVisible ? styles.noMap : ''}`}>
        {/* Left: venue list */}
        <div className={styles.listCol}>
          {venues.map((v) => (
            <SearchVenueCard
              key={v.slug}
              venue={v}
              detail={details[v.slug]}
              onMouseEnter={setHoveredSlug}
              onMouseLeave={() => setHoveredSlug(null)}
            />
          ))}
        </div>

        {/* Right: map */}
        {mapVisible && (
          <div className={styles.mapCol}>
            <VenueMap venues={venues} hoveredSlug={hoveredSlug} />
          </div>
        )}
      </div>
    </div>
  );
}
