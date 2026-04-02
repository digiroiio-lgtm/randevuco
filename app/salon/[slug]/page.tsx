import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';
import { allVenues } from '@/lib/data';
import { seoBusinessSlugs, SITE_URL } from '@/lib/seo-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seoBusinessSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venue = allVenues.find((v) => v.slug === slug);

  if (!venue) return {};

  return {
    title: `${venue.name} – Book Online | Randevu.co`,
    description: `Book an appointment at ${venue.name} in ${venue.location}. View services, prices, reviews, and availability.`,
    alternates: { canonical: `${SITE_URL}/salon/${slug}` },
  };
}

export default async function SalonPage({ params }: Props) {
  const { slug } = await params;
  const venue = allVenues.find((v) => v.slug === slug);

  if (!venue) notFound();

  // Canonical business URLs live at /randevu-al/[slug].
  // The /salon/[slug] path is the SEO-friendly English URL — redirect to the
  // booking page which contains the full venue experience.
  redirect(`/randevu-al/${slug}`);
}
