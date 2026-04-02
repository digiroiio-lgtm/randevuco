'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';
import Link from 'next/link';

function generateTicketId() {
  return 'RND-' + Math.floor(10000 + Math.random() * 89999);
}

export default function TicketPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const id = generateTicketId();
    // Simulate async submission delay
    await new Promise((r) => setTimeout(r, 800));
    router.push(`/help/ticket/success?id=${id}`);
  }

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/help">Help Center</Link> / Open Support Ticket
        </p>

        <h1 className={styles.formTitle}>Open a Support Ticket</h1>
        <p className={styles.formSub}>
          Fill in the form below and our support team will respond within 24 hours.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Name + Email */}
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Name <span className={styles.required}>*</span>
              </label>
              <input id="name" name="name" type="text" className={styles.input} placeholder="Your full name" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email Address <span className={styles.required}>*</span>
              </label>
              <input id="email" name="email" type="email" className={styles.input} placeholder="you@example.com" required />
            </div>
          </div>

          {/* User Type + Category */}
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="userType">
                I am a <span className={styles.required}>*</span>
              </label>
              <select id="userType" name="userType" className={styles.select} required defaultValue="">
                <option value="" disabled>Select…</option>
                <option value="customer">Customer</option>
                <option value="business">Business Owner</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="category">
                Category <span className={styles.required}>*</span>
              </label>
              <select id="category" name="category" className={styles.select} required defaultValue="">
                <option value="" disabled>Select…</option>
                <option value="booking">Booking issue</option>
                <option value="payment">Payment issue</option>
                <option value="refund">Refund request</option>
                <option value="account">Account problem</option>
                <option value="technical">Technical problem</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Priority */}
          <div className={styles.field} style={{ maxWidth: '260px' }}>
            <label className={styles.label} htmlFor="priority">Priority</label>
            <select id="priority" name="priority" className={styles.select} defaultValue="normal">
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          {/* Subject */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">
              Subject <span className={styles.required}>*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className={styles.input}
              placeholder="Brief summary of your issue"
              required
            />
          </div>

          {/* Description */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="description">
              Description <span className={styles.required}>*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className={styles.textarea}
              placeholder="Please describe your issue in as much detail as possible…"
              required
            />
          </div>

          {/* File Upload */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="attachment">Attachment (optional)</label>
            <input id="attachment" name="attachment" type="file" className={styles.input} accept="image/*,.pdf" />
            <p className={styles.fileHint}>Upload screenshots if relevant. Max 10 MB. Accepted: JPG, PNG, PDF.</p>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={submitting}>
            {submitting ? 'Submitting…' : 'Submit Ticket'}
          </button>
        </form>

        <LegalFooter />
      </div>
    </div>
  );
}
