'use client';

import { useState, useEffect } from 'react';
import styles from './BookingCounter.module.css';

/** Approximate daily bookings on the platform. */
const DAILY_TARGET = 52_166;

/** How many milliseconds elapse between each new booking (on average). */
const MS_PER_BOOKING = Math.round(86_400_000 / DAILY_TARGET); // ≈ 1 658 ms

/** Calculate how many bookings would have been made so far today. */
function getCountForNow(): number {
  const now = new Date();
  const msToday =
    now.getHours() * 3_600_000 +
    now.getMinutes() * 60_000 +
    now.getSeconds() * 1_000 +
    now.getMilliseconds();
  return Math.floor((msToday / 86_400_000) * DAILY_TARGET);
}

/** A single digit slot that plays a roll-up animation whenever its value changes. */
function DigitSlot({ digit, animate }: { digit: string; animate: boolean }) {
  // Non-digit characters (thousand-separator) are rendered as plain text.
  if (!animate || !/\d/.test(digit)) {
    return <span className={styles.sep}>{digit}</span>;
  }
  return (
    <span className={styles.slot}>
      {/* Changing `key` causes React to remount the inner span, re-triggering the animation. */}
      <span key={digit} className={styles.roll}>
        {digit}
      </span>
    </span>
  );
}

export default function BookingCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Initialise after mount to avoid SSR/hydration mismatch.
    const start = getCountForNow();
    setCount(start);
    const id = setInterval(() => setCount((c) => (c ?? start) + 1), MS_PER_BOOKING);
    return () => clearInterval(id);
  }, []);

  if (count === null) return null;

  // Format with Turkish locale → uses "." as thousands separator, e.g. "32.815"
  const formatted = count.toLocaleString('tr-TR');
  const chars = formatted.split('');
  const len = chars.length;

  return (
    <p
      className={styles.line}
      aria-label={`Bugün ${formatted} randevu alındı`}
    >
      <strong className={styles.number}>
        {chars.map((ch, i) => (
          // Animate only the last 3 character positions (the digits that change most frequently).
          // Higher-order digits change rarely; animating them would look jarring.
          <DigitSlot key={i} digit={ch} animate={len - i <= 3} />
        ))}
      </strong>
      <span className={styles.label}>&nbsp;bugün alınan randevu</span>
    </p>
  );
}
