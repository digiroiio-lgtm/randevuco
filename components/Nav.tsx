'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import MenuOverlay from './MenuOverlay';
import styles from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Logo size={24} />
          <div className={styles.links}>
            <Link href="/listele" className={styles.link}>Keşfet</Link>
            <Link href="/for-business" className={styles.link}>İşletmeler İçin</Link>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
