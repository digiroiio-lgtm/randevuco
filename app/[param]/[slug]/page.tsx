import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';
import {
  seoCategories,
  seoCities,
  SITE_URL,
} from '@/lib/seo-data';

type Props = { params: Promise<{ param: string; slug: string }> };

export async function generateStaticParams() {
  const paths: { param: string; slug: string }[] = [];

  for (const city of seoCities) {
    // city + category: /antalya/hair-salons
    for (const cat of seoCategories) {
      paths.push({ param: city.slug, slug: cat.slug });
    }
    // city + district: /antalya/konyaalti
    for (const district of city.districts) {
      paths.push({ param: city.slug, slug: district.slug });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { param, slug } = await params;
  const city = seoCities.find((c) => c.slug === param);
  const cat = seoCategories.find((c) => c.slug === slug);

  if (!city) return {};

  if (cat) {
    return {
      title: `${cat.name} in ${city.name} – Randevu.co`,
      description: `Book the best ${cat.name.toLowerCase()} in ${city.name}. Browse reviews, check availability, and book instantly.`,
      alternates: { canonical: `${SITE_URL}/${param}/${slug}` },
    };
  }

  const district = city.districts.find((d) => d.slug === slug);
  if (district) {
    return {
      title: `Beauty & Wellness in ${district.name}, ${city.name} – Randevu.co`,
      description: `Find beauty and wellness services in ${district.name}, ${city.name}.`,
      alternates: { canonical: `${SITE_URL}/${param}/${slug}` },
    };
  }

  return {};
}

export default async function CitySlugPage({ params }: Props) {
  const { param, slug } = await params;
  const city = seoCities.find((c) => c.slug === param);
  if (!city) notFound();

  const cat = seoCategories.find((c) => c.slug === slug);
  const district = city.districts.find((d) => d.slug === slug);

  if (!cat && !district) notFound();

  if (cat) {
    return (
      <div className={styles.page}>
        <Nav />
        <div className={styles.container}>
          <p className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <Link href={`/${city.slug}`}>{city.name}</Link> / {cat.name}
          </p>
          <h1 className={styles.title}>{cat.name} in {city.name}</h1>
          <p className={styles.intro}>
            Browse the best {cat.name.toLowerCase()} in {city.name}. Read reviews, check live
            availability, and book appointments instantly.
          </p>

          {city.districts.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Browse by District in {city.name}</h2>
              <ul>
                {city.districts.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/${city.slug}/${d.slug}/${cat.slug}`}>
                      {cat.name} in {d.name}
                    </Link>
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

  // district landing page
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href={`/${city.slug}`}>{city.name}</Link> / {district!.name}
        </p>
        <h1 className={styles.title}>Beauty &amp; Wellness in {district!.name}, {city.name}</h1>
        <p className={styles.intro}>
          Discover beauty and wellness services in {district!.name}. Book hair salons, barbers, spas,
          massage, and more.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Browse by Category</h2>
          <ul>
            {seoCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${city.slug}/${district!.slug}/${c.slug}`}>
                  {c.name} in {district!.name}
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
