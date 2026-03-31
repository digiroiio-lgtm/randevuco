import type { Metadata, Viewport } from 'next';
import '@fontsource/playfair-display/900.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Randevu. – Yerel bakım hizmetlerini rezerve et',
  description: "Türkiye'nin güzellik ve wellness rezervasyon platformu.",
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
