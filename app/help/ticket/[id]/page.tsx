import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Ticket ${id} – Randevu.co Support`,
    description: `Track the status of your support ticket ${id} on Randevu.co.`,
  };
}

// Simulate a mock ticket. In production this would come from a database.
function getMockTicket(id: string) {
  return {
    id,
    subject: 'Booking cancellation refund not received',
    status: 'in-review' as 'open' | 'in-review' | 'resolved',
    category: 'Refund Request',
    userType: 'Customer',
    priority: 'Normal',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toLocaleString('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    lastUpdated: new Date(Date.now() - 1000 * 60 * 30).toLocaleString('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    description:
      'I cancelled my appointment 48 hours in advance but haven\'t received the refund yet. Order reference #ANT-9921.',
  };
}

const statusLabel: Record<string, string> = {
  open:      'Open',
  'in-review': 'In Review',
  resolved:  'Resolved',
};

const statusClass: Record<string, string> = {
  open:        styles.statusOpen,
  'in-review': styles.statusInReview,
  resolved:    styles.statusResolved,
};

const statusDot: Record<string, string> = {
  open:        '🔵',
  'in-review': '🟡',
  resolved:    '🟢',
};

export default async function TicketDetailPage({ params }: Props) {
  const { id } = await params;
  const ticket = getMockTicket(id);

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link> /{' '}
          <Link href="/help">Help Center</Link> /{' '}
          Ticket {id}
        </p>

        <h1 className={styles.formTitle}>Support Ticket</h1>
        <p className={styles.formSub}>Track the status and details of your support request.</p>

        <div className={styles.ticketCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>
                {ticket.subject}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Ticket ID: <strong>{id}</strong></p>
            </div>
            <span className={`${styles.statusBadge} ${statusClass[ticket.status]}`}>
              {statusDot[ticket.status]} {statusLabel[ticket.status]}
            </span>
          </div>

          <div className={styles.ticketMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>{ticket.category}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>User Type</span>
              <span className={styles.metaValue}>{ticket.userType}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Priority</span>
              <span className={styles.metaValue}>{ticket.priority}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Submitted</span>
              <span className={styles.metaValue}>{ticket.createdAt}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Last Updated</span>
              <span className={styles.metaValue}>{ticket.lastUpdated}</span>
            </div>
          </div>
        </div>

        <div className={styles.ticketCard}>
          <h2 className={styles.sectionTitleLeft}>Your Message</h2>
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.75' }}>{ticket.description}</p>
        </div>

        <div className={styles.ticketCard}>
          <h2 className={styles.sectionTitleLeft}>Timeline</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#555' }}>
              <span>🎫</span>
              <span>Ticket submitted — <em style={{ color: 'var(--muted)' }}>{ticket.createdAt}</em></span>
            </li>
            {ticket.status !== 'open' && (
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#555' }}>
                <span>👀</span>
                <span>Under review by support team — <em style={{ color: 'var(--muted)' }}>{ticket.lastUpdated}</em></span>
              </li>
            )}
            {ticket.status === 'resolved' && (
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#555' }}>
                <span>✅</span>
                <span>Ticket resolved — <em style={{ color: 'var(--muted)' }}>{ticket.lastUpdated}</em></span>
              </li>
            )}
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '16px' }}>
          <Link href="/help" className={styles.backLink}>← Back to Help Center</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
