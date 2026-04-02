// ─── Help Center static data ─────────────────────────────────────────────────

export type HelpCategory = {
  slug: string;
  label: string;
  icon: string;
  description: string;
  articles: HelpArticle[];
};

export type HelpArticle = {
  slug: string;
  title: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const helpCategories: HelpCategory[] = [
  {
    slug: 'booking',
    label: 'Booking Help',
    icon: '📅',
    description: 'Everything you need to know about making, changing, and cancelling appointments.',
    articles: [
      { slug: 'how-to-book',          title: 'How to book an appointment' },
      { slug: 'cancel-booking',       title: 'How to cancel a booking' },
      { slug: 'reschedule-booking',   title: 'How to reschedule an appointment' },
      { slug: 'booking-confirmation', title: 'I didn\'t receive a booking confirmation' },
      { slug: 'no-show',              title: 'What happens if I miss my appointment?' },
    ],
  },
  {
    slug: 'payments',
    label: 'Payments & Refunds',
    icon: '💳',
    description: 'Questions about payments, charges, refunds, and billing.',
    articles: [
      { slug: 'how-refunds-work',   title: 'How do refunds work?' },
      { slug: 'payment-methods',    title: 'Which payment methods are accepted?' },
      { slug: 'charged-twice',      title: 'I was charged twice' },
      { slug: 'refund-timeline',    title: 'How long does a refund take?' },
      { slug: 'invoice-receipt',    title: 'How do I get a receipt or invoice?' },
    ],
  },
  {
    slug: 'account',
    label: 'Account & Login',
    icon: '👤',
    description: 'Help with signing in, account settings, passwords, and profile.',
    articles: [
      { slug: 'reset-password',       title: 'How to reset your password' },
      { slug: 'change-email',         title: 'How to change your email address' },
      { slug: 'delete-account',       title: 'How to delete your account' },
      { slug: 'login-issues',         title: 'I can\'t log in to my account' },
      { slug: 'update-profile',       title: 'How to update your profile details' },
    ],
  },
  {
    slug: 'business',
    label: 'Business Listings',
    icon: '🏪',
    description: 'For salon and wellness business owners managing their Randevu.co listing.',
    articles: [
      { slug: 'list-your-business',   title: 'How to list your business on Randevu.co' },
      { slug: 'manage-availability',  title: 'How to manage your availability calendar' },
      { slug: 'update-services',      title: 'How to add or edit your services' },
      { slug: 'business-payout',      title: 'When and how do I receive my payouts?' },
      { slug: 'respond-to-reviews',   title: 'How to respond to customer reviews' },
    ],
  },
  {
    slug: 'technical',
    label: 'Technical Issues',
    icon: '🔧',
    description: 'App bugs, website errors, and technical troubleshooting.',
    articles: [
      { slug: 'app-not-loading',      title: 'The app or website won\'t load' },
      { slug: 'notification-issues',  title: 'I\'m not receiving notifications' },
      { slug: 'payment-error',        title: 'I\'m getting a payment error' },
      { slug: 'report-bug',           title: 'How to report a bug' },
      { slug: 'clear-cache',          title: 'How to clear your cache and cookies' },
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'How do I cancel a booking?',
    answer:
      'To cancel a booking, go to My Bookings in your account, find the appointment you want to cancel, and tap "Cancel Booking". Cancellation policies vary by business — check the listing for specific terms. Refunds (if applicable) are typically processed within 5–10 business days.',
  },
  {
    question: 'How do refunds work?',
    answer:
      'Refund eligibility depends on the business\'s cancellation policy. If you qualify for a refund, it will be returned to your original payment method within 5–10 business days. For disputes, contact our support team via the Help Centre.',
  },
  {
    question: 'How can I list my business?',
    answer:
      'To list your beauty or wellness business on Randevu.co, visit /for-business and complete the business registration form. Our team will review your submission and get back to you within 2 business days.',
  },
  {
    question: 'How do I change my account details?',
    answer:
      'Log in to your account and go to Profile Settings to update your name, email, phone number, or password. If you have trouble accessing your account, use the "Forgot Password" link on the login page.',
  },
  {
    question: 'How do I contact a salon directly?',
    answer:
      'You can find the salon\'s contact details on their business profile page. Many salons also accept messages through the Randevu.co platform. Navigate to the business page and look for the "Contact" or "Message" option.',
  },
  {
    question: 'Is my payment information secure?',
    answer:
      'Yes. All payments are processed through Stripe, a PCI DSS Level 1 certified provider. Randevu.co never stores your card details. All transactions use TLS encryption and 3D Secure authentication where required.',
  },
  {
    question: 'Can I book on behalf of someone else?',
    answer:
      'Yes. When completing the booking form, you can enter a different name for the appointment. Just ensure the contact details provided are reachable in case the business needs to get in touch.',
  },
  {
    question: 'What happens if a business cancels my appointment?',
    answer:
      'If a business cancels your appointment, you will be notified immediately by email and in-app notification. A full refund will be issued automatically to your original payment method within 5–10 business days.',
  },
];
