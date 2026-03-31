import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import ServiceTabs from '@/components/ServiceTabs';
import { allVenues, venueDetails } from '@/lib/data';
import type { Venue, VenueDetail } from '@/lib/data';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allVenues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venue = allVenues.find((v) => v.slug === slug);
  if (!venue) return { title: 'İşletme Bulunamadı – Randevu.' };
  return {
    title: `${venue.name} – Randevu.`,
    description: `${venue.name} adresinde ${venue.type} hizmetleri için online randevu alın. ${venue.location}.`,
  };
}

const TAG_LABELS: Record<string, { icon: string; label: string }> = {
  'pet-friendly':           { icon: '🐾', label: 'Evcil Hayvan Dostu' },
  'adults-only':            { icon: '🔞', label: 'Sadece Yetişkinler' },
  'kid-friendly':           { icon: '👶', label: 'Çocuk Dostu' },
  'wheelchair-accessible':  { icon: '♿', label: 'Tekerlekli Sandalye Erişimi' },
  'parking-available':      { icon: '🅿️', label: 'Otopark Mevcut' },
  'near-public-transport':  { icon: '🚌', label: 'Toplu Taşıma Yakını' },
  'environmentally-friendly':{ icon: '🌿', label: 'Çevre Dostu' },
  'black-owned':            { icon: '✊', label: 'Siyahi Sahipli' },
  'asian-owned':            { icon: '🌏', label: 'Asyalı Sahipli' },
};

export default async function VenueDetailPage({ params }: Props) {
  const { slug } = await params;
  const venue = allVenues.find((v) => v.slug === slug);
  if (!venue) notFound();

  const detail: VenueDetail | undefined = venueDetails[slug];
  const gallery = detail?.gallery ?? [venue.img, venue.img, venue.img];

  const nearbyVenues = (detail?.nearbyVenueSlugs ?? [])
    .map((s) => allVenues.find((v) => v.slug === s))
    .filter((v): v is Venue => v !== undefined);

  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    detail?.address ?? venue.location
  )}`;

  const packages = detail?.packages ?? [];
  const staff = detail?.staff ?? [];
  const tags = detail?.tags ?? [];
  const hasPackages = packages.length > 0;
  const hasStaff = staff.length > 0;
  const hasTags = tags.length > 0;

  return (
    <>
      <Nav />
      <main>
        {/* Breadcrumb */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Gezinme yolu">
              <Link href="/">Ana Sayfa</Link>
              <span aria-hidden="true">›</span>
              <Link href="/listele">{venue.type}</Link>
              <span aria-hidden="true">›</span>
              <span>{venue.name}</span>
            </nav>
          </div>
        </div>

        {/* Photo Gallery */}
        <section id="photos" className={styles.gallery}>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryMain}>
              <Image
                src={`https://images.unsplash.com/${gallery[0]}?auto=format&fit=crop&w=900&h=600&q=80`}
                alt={venue.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 60vw"
                className={styles.galleryImg}
              />
            </div>
            <div className={styles.gallerySide}>
              <div className={styles.gallerySideImg}>
                <Image
                  src={`https://images.unsplash.com/${gallery[1]}?auto=format&fit=crop&w=600&h=300&q=80`}
                  alt={`${venue.name} – 2`}
                  fill
                  sizes="(max-width: 900px) 0vw, 40vw"
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.gallerySideImg}>
                <Image
                  src={`https://images.unsplash.com/${gallery[2]}?auto=format&fit=crop&w=600&h=300&q=80`}
                  alt={`${venue.name} – 3`}
                  fill
                  sizes="(max-width: 900px) 0vw, 40vw"
                  className={styles.galleryImg}
                />
              </div>
            </div>
          </div>
          <button type="button" className={styles.seeAllImgBtn}>
            Tüm fotoğrafları gör
          </button>
        </section>

        {/* Anchor Nav */}
        <nav className={styles.anchorNav} aria-label="Sayfa bölümleri">
          <div className={styles.container}>
            <div className={styles.anchorLinks}>
              <a href="#photos" className={styles.anchorLink}>Fotoğraflar</a>
              <a href="#services" className={styles.anchorLink}>Hizmetler</a>
              {hasPackages && (
                <a href="#packages" className={styles.anchorLink}>Paketler</a>
              )}
              {hasStaff && (
                <a href="#staff" className={styles.anchorLink}>Ekip</a>
              )}
              <a href="#reviews" className={styles.anchorLink}>Değerlendirmeler</a>
              <a href="#portfolio" className={styles.anchorLink}>Portfolyo</a>
              <a href="#about" className={styles.anchorLink}>Hakkında</a>
            </div>
          </div>
        </nav>

        {/* Main Layout */}
        <div className={styles.container}>
          <div className={styles.layout}>

            {/* ── Left / Main column ── */}
            <div className={styles.mainCol}>

              {/* Header */}
              <section id="header" className={styles.headerSection}>
                <h1 className={styles.venueName}>{venue.name}</h1>
                <div className={styles.ratingRow}>
                  <span className={styles.stars} aria-label={`${venue.rating} yıldız`}>
                    ★★★★★
                  </span>
                  <span className={styles.ratingScore}>{venue.rating.toFixed(1)}</span>
                  <span className={styles.ratingCount}>
                    ({venue.reviews.toLocaleString('tr-TR')})
                  </span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.openBadge}>
                    <span className={styles.openDot} aria-hidden="true">●</span>
                    {' '}{detail?.openStatus ?? 'Bugün açık'}
                  </span>
                  <span className={styles.metaSep} aria-hidden="true">•</span>
                  <span className={styles.metaAddress}>
                    {detail?.address ?? venue.location}
                  </span>
                </div>
                <div className={styles.actionRow}>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <span aria-hidden="true">📍</span> Yol Tarifi Al
                  </a>
                  <button type="button" className={styles.actionBtn}>
                    <span aria-hidden="true">↗</span> Paylaş
                  </button>
                </div>
              </section>

              {/* Services */}
              <section id="services" className={styles.section}>
                <h2 className={styles.sectionTitle}>Hizmetler</h2>
                {detail ? (
                  <ServiceTabs
                    categories={detail.serviceCategories}
                    venueSlug={slug}
                  />
                ) : (
                  <p className={styles.emptyMsg}>Hizmet bilgisi mevcut değil.</p>
                )}
              </section>

              {/* ── Package Services ── */}
              {hasPackages && (
                <section id="packages" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Paket Hizmetler</h2>
                  <div className={styles.packageGrid}>
                    {packages.map((pkg) => (
                      <div key={pkg.name} className={styles.packageCard}>
                        {pkg.discountPercent && (
                          <span className={styles.packageBadge}>
                            %{pkg.discountPercent} İndirim
                          </span>
                        )}
                        <div className={styles.packageTop}>
                          <p className={styles.packageName}>{pkg.name}</p>
                          <p className={styles.packageDuration}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.clockIcon} aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {pkg.duration}
                          </p>
                          <ul className={styles.packageServices}>
                            {pkg.services.map((s) => (
                              <li key={s} className={styles.packageServiceItem}>
                                <span aria-hidden="true">✓</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.packageBottom}>
                          <div className={styles.packagePriceWrap}>
                            <span className={styles.packagePrice}>{pkg.price}</span>
                            {pkg.originalPrice && (
                              <span className={styles.packageOriginalPrice}>{pkg.originalPrice}</span>
                            )}
                          </div>
                          <Link href={`/randevu-al/${slug}`} className={styles.packageBookBtn}>
                            Rezerve Et
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ── Staff ── */}
              {hasStaff && (
                <section id="staff" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Ekip</h2>
                  <div className={styles.staffGrid}>
                    {staff.map((member) => (
                      <div key={member.name} className={styles.staffCard}>
                        <div className={styles.staffAvatar} aria-hidden="true">
                          {member.name.charAt(0)}
                        </div>
                        <div className={styles.staffInfo}>
                          <p className={styles.staffName}>{member.name}</p>
                          <p className={styles.staffTitle}>{member.title}</p>
                          <div className={styles.staffRating} aria-label={`${member.rating} yıldız`}>
                            <span className={styles.staffStar} aria-hidden="true">★</span>
                            <span className={styles.staffScore}>{member.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Reviews */}
              <section id="reviews" className={styles.section}>
                <h2 className={styles.sectionTitle}>Değerlendirmeler</h2>
                <div className={styles.ratingBanner}>
                  <span className={styles.ratingBig}>{venue.rating.toFixed(1)}</span>
                  <div>
                    <div className={styles.starsLg} aria-label={`${venue.rating} yıldız`}>
                      ★★★★★
                    </div>
                    <span className={styles.ratingBigCount}>
                      {venue.reviews.toLocaleString('tr-TR')} değerlendirme
                    </span>
                  </div>
                </div>
                <div className={styles.reviewList}>
                  {(detail?.venueReviews ?? []).slice(0, 6).map((r, i) => (
                    <div key={i} className={styles.reviewCard}>
                      <div className={styles.reviewAvatar} aria-hidden="true">
                        {r.author.charAt(0)}
                      </div>
                      <div className={styles.reviewBody}>
                        <div className={styles.reviewMeta}>
                          <span className={styles.reviewAuthor}>{r.author}</span>
                          <span className={styles.reviewDate}>{r.date}</span>
                        </div>
                        <div
                          className={styles.reviewStars}
                          aria-label={`${r.rating} yıldız`}
                        >
                          {'★'.repeat(r.rating)}
                        </div>
                        <p className={styles.reviewText}>{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {(detail?.venueReviews?.length ?? 0) > 6 && (
                  <button type="button" className={styles.seeAllBtn}>
                    Tümünü Gör
                  </button>
                )}
              </section>

              {/* Portfolio */}
              {detail?.portfolio && detail.portfolio.length > 0 && (
                <section id="portfolio" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Portfolyo</h2>
                  <div className={styles.portfolioGrid}>
                    {detail.portfolio.map((imgId, i) => (
                      <div key={i} className={styles.portfolioItem}>
                        <Image
                          src={`https://images.unsplash.com/${imgId}?auto=format&fit=crop&w=400&h=400&q=80`}
                          alt={`${venue.name} portfolyo ${i + 1}`}
                          fill
                          sizes="(max-width: 600px) 45vw, 180px"
                          className={styles.portfolioImg}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* About */}
              <section id="about" className={styles.section}>
                <h2 className={styles.sectionTitle}>Hakkında</h2>
                <p className={styles.aboutText}>
                  {detail?.about ??
                    `${venue.name}, ${venue.location} bölgesinde profesyonel ${venue.type.toLowerCase()} hizmetleri sunmaktadır. Deneyimli ekibimiz ve modern ekipmanlarımızla size en iyi hizmeti vermeyi hedefliyoruz.`}
                </p>

                {hasTags && (
                  <div className={styles.tagsBlock}>
                    <h3 className={styles.subTitle}>İşletme Özellikleri</h3>
                    <div className={styles.tagsList}>
                      {tags.map((tag) => {
                        const t = TAG_LABELS[tag];
                        return t ? (
                          <span key={tag} className={styles.tagChip}>
                            <span aria-hidden="true">{t.icon}</span> {t.label}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {detail?.openingHours && (
                  <div className={styles.hoursBlock}>
                    <h3 className={styles.subTitle}>Çalışma Saatleri</h3>
                    <dl className={styles.hoursList}>
                      {detail.openingHours.map((h) => (
                        <div key={h.day} className={styles.hoursRow}>
                          <dt className={styles.hoursDay}>{h.day}</dt>
                          <dd className={styles.hoursTime}>
                            {h.hours ?? (
                              <span className={styles.closed}>Kapalı</span>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                <div className={styles.additionalInfo}>
                  <h3 className={styles.subTitle}>Ek Bilgiler</h3>
                  <div className={styles.infoChips}>
                    <span className={styles.infoChip}>✓ Anında Onay</span>
                  </div>
                  <address className={styles.infoAddress}>
                    📍 {detail?.address ?? venue.location}
                  </address>
                </div>
              </section>
            </div>

            {/* ── Sidebar ── */}
            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h2 className={styles.sideVenueName}>{venue.name}</h2>
                <div className={styles.sideRating}>
                  <span className={styles.sideStar} aria-hidden="true">★</span>
                  <span className={styles.sideScore}>{venue.rating.toFixed(1)}</span>
                  <span className={styles.sideCount}>
                    ({venue.reviews.toLocaleString('tr-TR')})
                  </span>
                </div>
                <div className={styles.sideActions}>
                  <button type="button" className={styles.dealsBtn}>Fırsatlar</button>
                  <Link href={`/randevu-al/${slug}`} className={styles.bookNowBtn}>
                    Rezerve Et
                  </Link>
                </div>
                <div className={styles.sideInfo}>
                  <p className={styles.sideOpenStatus}>
                    <span className={styles.openDotGreen} aria-hidden="true">●</span>
                    {' '}{detail?.openStatus ?? 'Bugün açık'}
                  </p>
                  <p className={styles.sideAddress}>
                    📍 {detail?.address ?? venue.location}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.directionsLink}
                  >
                    Yol tarifi al
                  </a>
                </div>
              </div>

              {/* Loyalty Program */}
              <div className={styles.loyaltyCard}>
                <div className={styles.loyaltyHeader}>
                  <span className={styles.loyaltyIcon} aria-hidden="true">🎁</span>
                  <h3 className={styles.loyaltyTitle}>Sadakat Programı</h3>
                </div>
                <p className={styles.loyaltyDesc}>
                  Her randevuda puan kazan, ödüllere ulaş!
                </p>
                <div className={styles.loyaltyTiers}>
                  <div className={`${styles.tier} ${styles.tierBronze}`}>
                    <span className={styles.tierIcon} aria-hidden="true">🥉</span>
                    <span className={styles.tierName}>Bronz</span>
                    <span className={styles.tierPoints}>0–499 puan</span>
                  </div>
                  <div className={`${styles.tier} ${styles.tierSilver}`}>
                    <span className={styles.tierIcon} aria-hidden="true">🥈</span>
                    <span className={styles.tierName}>Gümüş</span>
                    <span className={styles.tierPoints}>500–999 puan</span>
                  </div>
                  <div className={`${styles.tier} ${styles.tierGold}`}>
                    <span className={styles.tierIcon} aria-hidden="true">🥇</span>
                    <span className={styles.tierName}>Altın</span>
                    <span className={styles.tierPoints}>1000+ puan</span>
                  </div>
                </div>
                <button type="button" className={styles.referBtn}>
                  👥 Arkadaşını Davet Et
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Nearby Venues */}
        {nearbyVenues.length > 0 && (
          <section className={styles.nearbySection}>
            <div className={styles.container}>
              <h2 className={styles.nearbySectionTitle}>Yakınındaki İşletmeler</h2>
              <div className={styles.nearbyRow}>
                {nearbyVenues.map((nv) => (
                  <Link
                    key={nv.slug}
                    href={`/isletme/${nv.slug}`}
                    className={styles.nearbyCard}
                  >
                    <div className={styles.nearbyImgWrap}>
                      <Image
                        src={`https://images.unsplash.com/${nv.img}?auto=format&fit=crop&w=300&h=200&q=80`}
                        alt={nv.name}
                        fill
                        sizes="200px"
                        className={styles.nearbyImg}
                      />
                    </div>
                    <div className={styles.nearbyInfo}>
                      <p className={styles.nearbyName}>{nv.name}</p>
                      <div className={styles.nearbyRatingRow}>
                        <span className={styles.nearbyStar} aria-hidden="true">★</span>
                        <span>{nv.rating.toFixed(1)}</span>
                        <span className={styles.nearbyCount}>({nv.reviews})</span>
                      </div>
                      <p className={styles.nearbyLoc}>{nv.location}</p>
                      <p className={styles.nearbyType}>{nv.type}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2024 Randevu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
