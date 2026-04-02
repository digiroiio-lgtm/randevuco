'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';

function BasariliIcerik() {
  const params = useSearchParams();
  const id = params.get('id') ?? 'RND-00000';

  return (
    <div className={styles.containerNarrow}>
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✅</div>
        <h1 className={styles.successTitle}>Destek Talebiniz Alındı</h1>
        <p className={styles.successBody}>
          Destek talebiniz başarıyla iletildi. Ekibimiz inceleyerek{' '}
          <strong>24 saat</strong> içinde size yanıt verecektir.
        </p>
        <Link href={`/yardim/destek/${id}`} className={styles.ticketId}>
          Talep No: {id}
        </Link>
        <br />
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '24px' }}>
          Talebinizin durumunu takip etmek için Talep Numaranızı kaydedin.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`/yardim/destek/${id}`} className={styles.ctaBtn}>
            Talebi Takip Et
          </Link>
          <Link href="/yardim" className={styles.backLink} style={{ alignSelf: 'center' }}>
            ← Yardım Merkezine Dön
          </Link>
        </div>
      </div>
      <LegalFooter />
    </div>
  );
}

export default function DestekBasariliPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <Suspense fallback={<div style={{ padding: '80px 24px', textAlign: 'center' }}>Yükleniyor…</div>}>
        <BasariliIcerik />
      </Suspense>
    </div>
  );
}
