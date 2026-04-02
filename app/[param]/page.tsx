import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';
import {
  seoCategories,
  seoCities,
  seoCategorySlugs,
  seoCitySlugs,
  SITE_URL,
} from '@/lib/seo-data';

type Props = { params: Promise<{ param: string }> };

export async function generateStaticParams() {
  return [
    ...seoCategorySlugs.map((slug) => ({ param: slug })),
    ...seoCitySlugs.map((slug) => ({ param: slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { param } = await params;
  const cat = seoCategories.find((c) => c.slug === param);
  const city = seoCities.find((c) => c.slug === param);

  if (cat) {
    return {
      title: `${cat.name} – Randevu.co`,
      description: cat.description,
      alternates: { canonical: `${SITE_URL}/${param}` },
    };
  }
  if (city) {
    return {
      title: `Book Beauty & Wellness in ${city.name} – Randevu.co`,
      description: `Discover and book the best beauty and wellness services in ${city.name}.`,
      alternates: { canonical: `${SITE_URL}/${param}` },
    };
  }
  return {};
}

export default async function ParamPage({ params }: Props) {
  const { param } = await params;
  const cat = seoCategories.find((c) => c.slug === param);
  const city = seoCities.find((c) => c.slug === param);

  if (!cat && !city) notFound();

  if (cat) {
    return (
      <div className={styles.page}>
        <Nav />
        <div className={styles.container}>
          <p className={styles.breadcrumb}><Link href="/">Home</Link> / {cat.name}</p>
          <h1 className={styles.title}>{cat.name}</h1>
          <p className={styles.intro}>{cat.description}</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Browse by City</h2>
            <ul>
              {seoCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}/${cat.slug}`}>{cat.name} in {c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <LegalFooter />
        </div>
      </div>
    );
  }

  // city page
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / {city!.name}</p>
        <h1 className={styles.title}>Book Beauty &amp; Wellness in {city!.name}</h1>
        <p className={styles.intro}>
          Find and book the best beauty and wellness services in {city!.name}. Hair salons, barbers,
          spas, massage, medical aesthetics, and more.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Browse by Category</h2>
          <ul>
            {seoCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${city!.slug}/${c.slug}`}>{c.name} in {city!.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {city!.districts.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Browse by District</h2>
            <ul>
              {city!.districts.map((d) => (
                <li key={d.slug}>
                  <Link href={`/${city!.slug}/${d.slug}`}>{d.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <LegalFooter />
      </div>
    </div>
  );
}
