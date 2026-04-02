import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';
import { seoServices, seoCategories, SITE_URL } from '@/lib/seo-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seoServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = seoServices.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} – Book Online | Randevu.co`,
    description: service.description,
    alternates: { canonical: `${SITE_URL}/service/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = seoServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const cat = seoCategories.find((c) => c.slug === service.category);
  const relatedServices = seoServices.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  );

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          {cat && (
            <>
              {' / '}
              <Link href={`/${cat.slug}`}>{cat.name}</Link>
            </>
          )}
          {' / '}{service.name}
        </p>
        <h1 className={styles.title}>{service.name}</h1>
        <p className={styles.intro}>{service.description}</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Book {service.name} Online</h2>
          <p>
            Use Randevu.co to find and book {service.name.toLowerCase()} at top-rated providers near
            you. Browse verified reviews, check real-time availability, and confirm your appointment
            in seconds.
          </p>
          <p>
            <Link href="/">Search providers →</Link>
          </p>
        </div>

        {relatedServices.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Related Services</h2>
            <ul>
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/service/${s.slug}`}>{s.name}</Link>
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
