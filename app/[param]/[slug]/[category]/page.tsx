import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';
import { seoCategories, seoCities, SITE_URL } from '@/lib/seo-data';

type Props = { params: Promise<{ param: string; slug: string; category: string }> };

export async function generateStaticParams() {
  const paths: { param: string; slug: string; category: string }[] = [];

  for (const city of seoCities) {
    for (const district of city.districts) {
      for (const cat of seoCategories) {
        paths.push({ param: city.slug, slug: district.slug, category: cat.slug });
      }
    }
  }

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { param, slug, category } = await params;
  const city = seoCities.find((c) => c.slug === param);
  const cat = seoCategories.find((c) => c.slug === category);

  if (!city || !cat) return {};

  const district = city.districts.find((d) => d.slug === slug);
  if (!district) return {};

  return {
    title: `${cat.name} in ${district.name}, ${city.name} – Randevu.co`,
    description: `Find and book the best ${cat.name.toLowerCase()} in ${district.name}, ${city.name}. Verified reviews, instant booking.`,
    alternates: { canonical: `${SITE_URL}/${param}/${slug}/${category}` },
  };
}

export default async function LocalSeoPage({ params }: Props) {
  const { param, slug, category } = await params;
  const city = seoCities.find((c) => c.slug === param);
  const cat = seoCategories.find((c) => c.slug === category);

  if (!city || !cat) notFound();

  const district = city.districts.find((d) => d.slug === slug);
  if (!district) notFound();

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          {' / '}
          <Link href={`/${city.slug}`}>{city.name}</Link>
          {' / '}
          <Link href={`/${city.slug}/${district.slug}`}>{district.name}</Link>
          {' / '}
          {cat.name}
        </p>
        <h1 className={styles.title}>
          {cat.name} in {district.name}, {city.name}
        </h1>
        <p className={styles.intro}>
          Find and book the best {cat.name.toLowerCase()} in {district.name}, {city.name}.
          Browse verified reviews, check real-time availability, and book your appointment instantly.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Other Services in {district.name}</h2>
          <ul>
            {seoCategories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link href={`/${city.slug}/${district.slug}/${c.slug}`}>
                    {c.name} in {district.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{cat.name} in Other Areas of {city.name}</h2>
          <ul>
            {city.districts
              .filter((d) => d.slug !== district.slug)
              .map((d) => (
                <li key={d.slug}>
                  <Link href={`/${city.slug}/${d.slug}/${cat.slug}`}>
                    {cat.name} in {d.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <LegalFooter />
      </div>
    </div>
  );
}
