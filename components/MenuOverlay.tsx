'use client';

import Link from 'next/link';
import styles from './MenuOverlay.module.css';

type Props = {
  open: boolean;
  onClose: () => void;
};

const menuLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/listele', label: 'Tüm İşletmeler' },
  { href: '/for-business', label: 'İşletmeler İçin' },
];

export default function MenuOverlay({ open, onClose }: Props) {
  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.visible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`${styles.panel} ${open ? styles.open : ''}`} aria-label="Gezinme menüsü">
        <button className={styles.close} onClick={onClose} aria-label="Menüyü kapat">
          ✕
        </button>
        <nav className={styles.menu}>
          {menuLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.menuLink} onClick={onClose}>
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
