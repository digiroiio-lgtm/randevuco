'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Logo size={24} />

        <div className={styles.right}>
          <Link href="/giris" className={styles.loginLink}>Giriş Yap</Link>
          <Link href="/for-business" className={styles.listBtn}>
            İşletmenizi Listeleyin
          </Link>

          {/* Menu pill + popover */}
          <div className={styles.menuWrap} ref={menuRef}>
            <button
              className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="true"
              aria-label="Menüyü aç"
            >
              <span className={styles.menuLabel}>Menü</span>
              <svg className={styles.menuIcon} viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="0" y1="1" x2="20" y2="1" />
                <line x1="0" y1="7" x2="20" y2="7" />
                <line x1="0" y1="13" x2="20" y2="13" />
              </svg>
            </button>

            {open && (
              <div className={styles.dropdown} role="dialog" aria-label="Navigasyon menüsü">
                {/* For customers */}
                <p className={styles.dropSection}>Müşteriler İçin</p>
                <Link href="/giris" className={`${styles.dropLink} ${styles.dropLinkAccent}`} onClick={() => setOpen(false)}>
                  Giriş yap veya kayıt ol
                </Link>
                <Link href="/uygulama" className={styles.dropLink} onClick={() => setOpen(false)}>
                  Uygulamayı indir
                </Link>
                <Link href="/yardim" className={styles.dropLink} onClick={() => setOpen(false)}>
                  Yardım ve destek
                </Link>
                <Link href="/dil" className={styles.dropLink} onClick={() => setOpen(false)}>
                  <svg className={styles.globeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" />
                    <line x1="2" y1="9" x2="22" y2="9" />
                    <line x1="2" y1="15" x2="22" y2="15" />
                  </svg>
                  Türkçe
                </Link>

                <div className={styles.dropDivider} />

                {/* For businesses */}
                <Link href="/for-business" className={`${styles.dropLink} ${styles.dropLinkBiz}`} onClick={() => setOpen(false)}>
                  <span>İşletmeler İçin</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon} aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
