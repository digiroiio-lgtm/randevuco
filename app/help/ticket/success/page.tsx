'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';

function SuccessContent() {
  const params = useSearchParams();
  const id = params.get('id') ?? 'RND-00000';

  return (
    <div className={styles.containerNarrow}>
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✅</div>
        <h1 className={styles.successTitle}>Support Request Received</h1>
        <p className={styles.successBody}>
          Your support ticket has been submitted. Our team will review it and respond
          within <strong>24 hours</strong>.
        </p>
        <Link href={`/help/ticket/${id}`} className={styles.ticketId}>
          Ticket ID: {id}
        </Link>
        <br />
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '24px' }}>
          Save your Ticket ID to check the status of your request at any time.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`/help/ticket/${id}`} className={styles.ctaBtn}>
            Track My Ticket
          </Link>
          <Link href="/help" className={styles.backLink} style={{ alignSelf: 'center' }}>
            ← Back to Help Center
          </Link>
        </div>
      </div>
      <LegalFooter />
    </div>
  );
}

export default function TicketSuccessPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <Suspense fallback={<div style={{ padding: '80px 24px', textAlign: 'center' }}>Loading…</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
