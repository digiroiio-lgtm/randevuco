'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SearchBar.module.css';

/* ─── Treatment categories ─────────────────────────────────────────────── */
const TREATMENTS: { name: string; icon: React.ReactNode }[] = [
  {
    name: 'Saç & Bakım',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3C6 3 3 5 3 9c0 3 2 5 5 6l1 6h6l1-6c3-1 5-3 5-6 0-4-3-6-6-6" />
        <path d="M8 9h8" />
      </svg>
    ),
  },
  {
    name: 'Tırnaklar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="18" rx="3" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    name: 'Tüy Alma',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20L18 4" />
        <path d="M18 4c-2 0-4 1-5 3" />
        <path d="M6 20c0-4 3-7 7-9" />
      </svg>
    ),
  },
  {
    name: 'Kaş & Kirpik',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10c2-3 5-4 8-4s6 1 8 4" />
        <path d="M9 14c0 1.6 1.3 3 3 3s3-1.4 3-3" />
        <line x1="12" y1="14" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    name: 'Yüz Bakımı & Cilt',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="7" />
        <path d="M9 10a1 1 0 102 0 1 1 0 00-2 0M13 10a1 1 0 102 0 1 1 0 00-2 0" />
        <path d="M9.5 14c.7.8 1.6 1.3 2.5 1.3s1.8-.5 2.5-1.3" />
      </svg>
    ),
  },
  {
    name: 'Masaj',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14s0-4 4-4h8c3 0 4 2 4 4v2H4v-2z" />
        <circle cx="12" cy="6" r="3" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
  {
    name: 'Makyaj',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4l1 6H9L10 2z" />
        <rect x="8" y="8" width="8" height="12" rx="2" />
        <line x1="12" y1="8" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    name: 'Estetik',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2l4 4-9.5 9.5-4 .5.5-4L14 2z" />
        <line x1="16" y1="4" x2="20" y2="8" />
      </svg>
    ),
  },
  {
    name: 'Berber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3v6l3 3-3 3v6" />
        <path d="M19 3v6l-3 3 3 3v6" />
        <line x1="5" y1="9" x2="19" y2="9" />
        <line x1="5" y1="15" x2="19" y2="15" />
      </svg>
    ),
  },
  {
    name: 'Spa & Wellness',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-4 4-5 8-2 11s8 2 10-2c1-4-1-8-5-10" />
        <path d="M12 3c1 5-1 9-4 11" />
        <line x1="12" y1="21" x2="12" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Vücut & Cilt',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v7M9 10l3 1 3-1M9 21l3-7 3 7" />
      </svg>
    ),
  },
  {
    name: 'Dövme & Piercing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c-4.5-3-7-6-7-9a7 7 0 0114 0c0 3-2.5 6-7 9z" />
        <path d="M14 2l4 4" />
        <path d="M13 3l4 4" />
      </svg>
    ),
  },
  {
    name: 'Bütünsel Sağlık',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C9 5 6 8 6 11a6 6 0 0012 0c0-3-3-6-6-9z" />
        <path d="M8 14c1 3 3 5 4 7M16 14c-1 3-3 5-4 7" />
        <line x1="12" y1="2" x2="12" y2="8" />
      </svg>
    ),
  },
  {
    name: 'Diş',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3c-2 0-4 2-4 5 0 4 2 6 3 9 .5 2 1 4 2.5 4s1.5-2 3.5-2 2 2 3.5 2 2-2 2.5-4c1-3 3-5 3-9 0-3-2-5-4-5-1 0-2 1-3 1h-2C8 4 8 3 7 3z" />
      </svg>
    ),
  },
  {
    name: 'Tıbbi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Evcil Hayvan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="5" r="2" />
        <circle cx="17" cy="5" r="2" />
        <circle cx="4" cy="11" r="2" />
        <circle cx="20" cy="11" r="2" />
        <path d="M12 9c-3 0-7 2-7 6 0 3 2 4 7 4s7-1 7-4c0-4-4-6-7-6z" />
      </svg>
    ),
  },
  {
    name: 'Fitness',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h12M3 10h2M19 10h2M3 14h2M19 14h2" />
        <rect x="5" y="10" width="14" height="4" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Fizyoterapi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M9 9l3 2 3-2M7 17l5-6 5 6" />
      </svg>
    ),
  },
  {
    name: 'Psikoloji & Terapi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0112 0v2" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    name: 'Diğer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

const TABS = [
  { id: 'all', label: 'Tümü' },
  // counts are demo values — replace with real aggregated totals when API is available
  { id: 'treatments', label: 'Tedaviler', count: '20' },
  { id: 'venues', label: 'Mekanlar', count: '10b+' },
  { id: 'professionals', label: 'Profesyoneller', count: '10b+' },
] as const;

type TabId = (typeof TABS)[number]['id'];

// Demo recent-search items — replace with user search history from localStorage/API
const RECENTS = [
  { type: 'venue' as const, img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=80&h=80&fit=crop', name: 'Medloft Beauty Couture' },
  { type: 'venue' as const, img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=80&h=80&fit=crop', name: 'Zengate Medikal Masaj' },
  { type: 'venue' as const, img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=80&h=80&fit=crop', name: 'Wow Beauty Lab' },
  { type: 'search' as const, name: 'Tüm hizmetler', sub: 'Her zaman · İstanbul' },
  { type: 'search' as const, name: 'Saç Kesimi', sub: 'Her zaman · İstanbul' },
  { type: 'search' as const, name: 'Tüm hizmetler', sub: 'Her zaman · Antalya' },
];

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<TabId>('all');
  const [recents, setRecents] = useState(RECENTS);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const displayedTreatments =
    tab === 'treatments' || tab === 'all' ? TREATMENTS : [];
  const displayedRecents = tab === 'all' ? recents : [];

  return (
    <div className={styles.wrap} ref={ref}>
      {/* Search pill */}
      <div className={`${styles.bar} ${open ? styles.barOpen : ''}`}>
        <button
          type="button"
          className={`${styles.segment} ${open ? styles.segmentActive : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
          <span className={styles.label}>Tüm hizmetler</span>
        </button>

        <div className={styles.divider} aria-hidden="true" />

        <Link href="/listele" className={styles.segment} onClick={() => setOpen(false)}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span className={styles.label}>Mevcut konum</span>
        </Link>

        <div className={styles.divider} aria-hidden="true" />

        <Link href="/listele" className={styles.segment} onClick={() => setOpen(false)}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="16" y1="2" x2="16" y2="6" />
          </svg>
          <span className={styles.label}>Her zaman</span>
        </Link>

        <Link href="/listele" className={styles.searchBtn} aria-label="Ara" onClick={() => setOpen(false)}>
          Ara
        </Link>
      </div>

      {/* Dropdown */}
      {open && (
        <div className={styles.dropdown} role="listbox" aria-label="Hizmet ara">
          {/* Filter tabs */}
          <div className={styles.tabs}>
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`${styles.tab} ${tab === t.id ? styles.tabActive : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
                {'count' in t && <span className={styles.tabCount}>{t.count}</span>}
              </button>
            ))}
          </div>

          {/* Recent searches */}
          {displayedRecents.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Son Aramalar</span>
                <button
                  type="button"
                  className={styles.clearBtn}
                  onClick={() => setRecents([])}
                >
                  Temizle
                </button>
              </div>
              <ul className={styles.recentList}>
                {displayedRecents.map((item, i) => (
                  <li key={i}>
                    <Link href="/listele" className={styles.recentRow} onClick={() => setOpen(false)}>
                      {item.type === 'venue' ? (
                        <Image src={item.img} alt={item.name} width={44} height={44} className={styles.recentThumb} unoptimized />
                      ) : (
                        <span className={styles.recentIconWrap} aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.recentSearchIcon}>
                            <circle cx="11" cy="11" r="7" />
                            <line x1="16.5" y1="16.5" x2="22" y2="22" />
                          </svg>
                        </span>
                      )}
                      <span className={styles.recentText}>
                        <span className={styles.recentName}>{item.name}</span>
                        {item.type === 'search' && (
                          <span className={styles.recentSub}>{item.sub}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Treatment categories */}
          {displayedTreatments.length > 0 && (
            <ul className={styles.catList}>
              {displayedTreatments.map((t) => (
                <li key={t.name}>
                  <Link href="/listele" className={styles.catRow} onClick={() => setOpen(false)}>
                    <span className={styles.catIcon} aria-hidden="true">{t.icon}</span>
                    <span className={styles.catName}>{t.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Venues / Professionals placeholder */}
          {(tab === 'venues' || tab === 'professionals') && (
            <p className={styles.emptyMsg}>
              {tab === 'venues' ? 'Mekan araması için konum giriniz.' : 'Profesyonel araması için isim giriniz.'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
