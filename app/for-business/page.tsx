import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'İşletmeler İçin – Randevu.',
  description:
    'Salon ve spa işletmeleri için Türkiye\'nin 1 numaralı rezervasyon yazılımı. Ücretsiz başlayın, müşterilerinizi büyütün.',
};

const globalStats = [
  { value: '130.000+', label: 'İş Ortağı İşletme' },
  { value: '450.000+', label: 'Profesyonel' },
  { value: '1 Milyar+', label: 'Alınan Randevu' },
  { value: '120+', label: 'Ülke' },
];

const businessTypes = [
  { icon: '✂️', name: 'Kuaför' },
  { icon: '💈', name: 'Berber' },
  { icon: '💅', name: 'Tırnak' },
  { icon: '🧖', name: 'Spa & Sauna' },
  { icon: '💉', name: 'Medikal Estetik' },
  { icon: '🤲', name: 'Masaj' },
  { icon: '🏋️', name: 'Fitness & Toparlanma' },
  { icon: '🦴', name: 'Fizyoterapi' },
  { icon: '🏥', name: 'Sağlık Kliniği' },
  { icon: '🖋️', name: 'Dövme & Piercing' },
  { icon: '🐾', name: 'Evcil Hayvan Bakımı' },
  { icon: '🌞', name: 'Bronzlaşma Stüdyosu' },
];

const featurePillars = [
  {
    tag: 'Yönet',
    title: 'Her şeyi tek yerden yönetin',
    desc: 'Rezervasyonları, satışları, müşterileri, şubeleri ve ekip üyelerini yönetin. Gelişmiş raporlama ve analizlerle işletmenizi her açıdan görün.',
    bullets: [
      'Sınırsız rezervasyon ile güçlü takvim',
      'Her müşteri için 360° detaylı profil',
      'Personel takibi ve vardiya planlama',
      'Stok yönetimi ve satış noktası (POS)',
    ],
  },
  {
    tag: 'Büyü',
    title: 'Yeni müşteriler kazanın, geri getirin',
    desc: 'Dünyanın en büyük güzellik ve wellness pazaryerinde işletmenizi öne çıkarın. Akıllı pazarlama araçlarıyla müşteri sadakatini artırın.',
    bullets: [
      'Randevu. pazaryerinde ücretsiz listeleme',
      'Otomatik SMS & e-posta hatırlatmaları',
      'Kampanya ve indirim yönetimi',
      'Müşteri yorumları ve değerlendirmeler',
    ],
  },
  {
    tag: 'Öde Al',
    title: 'Ödemelerinizi hızlı ve güvenli alın',
    desc: 'Sorunsuz ödeme altyapısıyla işlemlerinizi hızlandırın. Ön ödemelerle gelmeme oranını azaltın ve kasayı kolayca yönetin.',
    bullets: [
      'Kredi kartı, nakit ve dijital cüzdan desteği',
      'Online rezervasyonda ön ödeme / depozito',
      'Otomatik fatura ve makbuz oluşturma',
      'İpucu toplama ve kasa kapanış raporu',
    ],
  },
];

const testimonials = [
  {
    name: 'Ayşe Kaya',
    role: 'Salon Sahibi, İstanbul',
    text: 'Randevu. ile müşterilerimin online randevu alması çok kolaylaştı. SMS hatırlatmaları sayesinde gelmeme oranı neredeyse sıfıra indi. Kesinlikle tavsiye ediyorum!',
  },
  {
    name: 'Mert Doğan',
    role: 'Berber, Ankara',
    text: 'Takvim yönetimi inanılmaz derecede basit. Personelimin tüm randevularını tek ekranda görüyorum. Önceki yazılımımdan çok daha iyi.',
  },
  {
    name: 'Zeynep Arslan',
    role: 'Spa Müdürü, Antalya',
    text: 'Pazaryerinde yayına girdikten sonra yeni müşteri sayımız %31 arttı. Randevu. gerçekten işimizi büyüttü.',
  },
  {
    name: 'Emre Şahin',
    role: 'Fitness Merkezi Sahibi',
    text: 'Sınırsız randevu, analitik raporlar ve ön ödeme özelliği bizim için oyun değiştirici oldu. Destek ekibi her zaman hızlı ve çözüm odaklı.',
  },
  {
    name: 'Fatma Yıldız',
    role: 'Tırnak Salonu, İzmir',
    text: 'Kurulumu çok hızlıydı. Müşterilerim telefondan kolayca randevu alıyor ve bana SMS bildirimi geliyor. Hayatımı kolaylaştırdı!',
  },
  {
    name: 'Can Öztürk',
    role: 'Medikal Estetik Kliniği',
    text: 'Müşteri profillerindeki detaylı geçmiş ve tercih bilgileri sayesinde hizmet kalitemiz gözle görülür biçimde yükseldi.',
  },
];

const roiStats = [
  { value: '%26', label: 'Daha Fazla Müşteri', desc: 'Dünyanın en büyük güzellik pazaryerinde yeni müşteriler kazanın. Her gün tam dolu bir takvimle uyanın.' },
  { value: '%89', label: 'Daha Az Gelmeme', desc: 'Ön ödeme veya depozito alarak gelmeme ve iptalleri minimize edin.' },
  { value: '%20', label: 'Daha Fazla Satış', desc: 'Müşteriler online rezervasyon yaparken ek hizmetleri kolayca seçsin.' },
  { value: '%290', label: 'Daha Fazla Bahşiş', desc: 'Online rezervasyon yapan müşterilerden çok daha fazla bahşiş toplayın.' },
  { value: '%12', label: 'Yüksek Bağlılık', desc: 'Randevu. kullanan işletmeler daha yüksek müşteri bağlılığı yaşıyor.' },
  { value: '%392', label: 'Yatırım Getirisi', desc: 'İş ortaklarımızın büyük çoğunluğu Randevu. ile büyümesini sürdürüyor.' },
  { value: '%41', label: 'Mesai Dışı Rezervasyon', desc: 'Pazaryerimiz mesai saatleri dışında randevu almak isteyen müşterileri yakalar.' },
];

const supportItems = [
  { icon: '🎯', title: 'Başarı Yöneticisi', desc: 'Randevu.\'daki potansiyelinizi en üst düzeye çıkarmak için size özel destek.' },
  { icon: '🌐', title: 'Ağımıza Erişin', desc: 'İşletmenizi hayata geçirmek için uzman hesap yöneticimizden yararlanın.' },
  { icon: '🕐', title: '7/24 Öncelikli Destek', desc: 'Müşteri hizmetleri ekibimizle istediğiniz zaman iletişime geçin.' },
  { icon: '🔄', title: 'Veri Göçü Desteği', desc: 'Ekibimiz verilerinizi diğer platformlardan aktarmanıza yardımcı olur.' },
  { icon: '⚙️', title: 'Kişiselleştirilmiş Çözümler', desc: 'Aklınızda bir şey mi var? Bize sorun, birlikte çözelim.' },
  { icon: '👨‍💼', title: 'Uzman Danışmanlık', desc: 'Ürün uzmanlarımızdan doğrudan rehberlik alın.' },
];

const faqs = [
  {
    q: 'Randevu. neden güzellik ve wellness sektörünün lider platformu?',
    a: 'Randevu., sektöre özel geliştirilmiş takvim yönetimi, POS, pazarlama araçları ve analitik raporlama sunan kapsamlı bir platformdur. 130.000\'den fazla iş ortağı ve 1 milyarı aşkın alınan randevuyla Türkiye\'nin en büyük güzellik pazaryeri konumundadır.',
  },
  {
    q: 'Randevu. işletmemi nasıl büyütür?',
    a: 'Pazaryerinde ücretsiz listeleme sayesinde milyonlarca potansiyel müşteriye ulaşırsınız. Otomatik hatırlatmalar, kampanya araçları ve müşteri sadakat programlarıyla hem yeni müşteri kazanır hem de mevcut müşterilerinizi geri getirirsiniz.',
  },
  {
    q: 'Gizli ücretler var mı?',
    a: 'Hayır. Randevu. şeffaf fiyatlandırma modeli sunar; kullandığınız kadar ödersiniz. Başlangıç planı tamamen ücretsizdir, gelişmiş özellikler için aylık sabit ücretli planlarımızı inceleyebilirsiniz.',
  },
  {
    q: 'Minimum taahhüt veya sözleşme var mı?',
    a: 'Hayır, sözleşme zorunluluğu yoktur. İstediğiniz zaman planınızı değiştirebilir ya da iptal edebilirsiniz.',
  },
  {
    q: 'Randevu. her ölçekteki işletmeye uygun mu?',
    a: 'Evet. Tek kişilik bir serbest çalışandan çok şubeli büyük işletmelere kadar her ölçekte kullanıma uygundur. Büyüdükçe planınızı kolayca yükseltebilirsiniz.',
  },
  {
    q: 'Hangi işletme türleri Randevu.\'yu kullanabilir?',
    a: 'Kuaför, berber, tırnak salonu, spa, masaj merkezi, medikal estetik klinik, fitness merkezi, fizyoterapi, sağlık kliniği, dövme & piercing stüdyosu, evcil hayvan bakım salonu ve bronzlaşma stüdyoları başta olmak üzere tüm güzellik ve wellness işletmeleri platforma katılabilir.',
  },
  {
    q: 'Randevu. gelmeme oranını nasıl azaltır?',
    a: 'Otomatik SMS ve e-posta hatırlatmaları, online rezervasyonda depozito veya tam ön ödeme alma seçeneği sayesinde iş ortaklarımız gelmeme oranını ortalama %89 oranında düşürüyor.',
  },
  {
    q: 'Verilerimi başka bir sistemden taşıyabilir miyim?',
    a: 'Evet. Veri göçü destek ekibimiz müşteri bilgilerinizi, randevu geçmişinizi ve diğer verilerinizi mevcut yazılımınızdan güvenli şekilde aktarmanıza yardımcı olur.',
  },
];

const marqueeItems = [
  'Kuaför Salonu', 'Berber', 'Tırnak Salonu', 'Wax Salonu', 'Medikal Estetik',
  'Kaş Bar', 'Masaj Salonu', 'Spa', 'Fitness', 'Kişisel Antrenör',
  'Salon', 'Terapi Merkezi', 'Dövme & Piercing', 'Bronzlaşma Stüdyosu',
];

export default function ForBusinessPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Salon ve Spalar için<br />Türkiye&apos;nin 1 Numaralı Yazılımı
            </h1>
            <p className={styles.heroSub}>
              İşletmeniz için basit, esnek ve güçlü rezervasyon yazılımı.
            </p>
            <div className={styles.heroCtas}>
              <Link href="#pricing" className={styles.btnPrimary}>
                Hemen Başlayın
              </Link>
              <Link href="#features" className={styles.btnSecondary}>
                Genel Bakış
              </Link>
            </div>
            <p className={styles.heroNote}>Kredi kartı gerekmez · Ücretsiz başlayın</p>
          </div>
        </section>

        {/* ── GLOBAL STATS ── */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {globalStats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUSINESS TYPES ── */}
        <section className={styles.typesSection} id="features">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Tek Platform, Sonsuz Olanaklar</h2>
            <p className={styles.sectionSub}>
              Büyümek ve gelişmek için ihtiyacınız olan her şey. Randevu., satışları artırmak,
              takviminizi yönetmek ve müşterilerinizi elde tutmak için araçlarla donatılmıştır.
            </p>
            <div className={styles.typesGrid}>
              {businessTypes.map((t) => (
                <Link href="/listele" key={t.name} className={styles.typeCard}>
                  <span className={styles.typeIcon}>{t.icon}</span>
                  <span className={styles.typeName}>{t.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURE PILLARS ── */}
        <section className={styles.pillarsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>İşletmenizi yönetmek için her şey</h2>
            <p className={styles.sectionSub}>
              Randevu., salonlar, spalar ve diğer güzellik & wellness işletmeleri için en çok tercih edilen
              ve en yüksek puanlı rezervasyon yazılımıdır.
            </p>
            <div className={styles.pillarsGrid}>
              {featurePillars.map((p) => (
                <div key={p.tag} className={styles.pillarCard}>
                  <span className={styles.pillarTag}>{p.tag}</span>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                  <ul className={styles.pillarList}>
                    {p.bullets.map((b) => (
                      <li key={b} className={styles.pillarItem}>
                        <span className={styles.checkGreen}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARKETPLACE ── */}
        <section className={styles.marketplaceSection}>
          <div className={styles.container}>
            <div className={styles.marketplaceLayout}>
              <div className={styles.marketplaceText}>
                <span className={styles.pillarTag}>Pazaryeri</span>
                <h2 className={styles.marketplaceTitle}>
                  İşletmenizi büyütmek için en popüler pazaryeri
                </h2>
                <p className={styles.marketplaceDesc}>
                  İşletmenizi tanıtın ve Türkiye&apos;nin en büyük güzellik & wellness pazaryerinde
                  yeni müşterilere ulaşın.
                </p>
                <ul className={styles.marketplaceList}>
                  {[
                    'İşletmenizi Randevu. pazaryerinde listeleyerek online görünürlüğünüzü artırın',
                    'Randevu almak isteyen milyonlarca müşteriye bugün ulaşın',
                    'Müşterilerinizin 7/24 kendi kendine rezervasyon yapmasını sağlayın',
                  ].map((item) => (
                    <li key={item} className={styles.pillarItem}>
                      <span className={styles.checkGreen}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#pricing" className={styles.btnPrimary}>
                  Hemen Başlayın
                </Link>
              </div>
              <div className={styles.marketplaceVisual}>
                <div className={styles.visualCard}>
                  <div className={styles.visualRow}>
                    <span className={styles.visualDot} />
                    <div>
                      <p className={styles.visualName}>Ayşe Kaya</p>
                      <p className={styles.visualSvc}>Saç Kesimi &amp; Boyama</p>
                    </div>
                    <span className={styles.visualTime}>10:15</span>
                  </div>
                  <div className={styles.visualRow}>
                    <span className={`${styles.visualDot} ${styles.dotPurple}`} />
                    <div>
                      <p className={styles.visualName}>Mert Doğan</p>
                      <p className={styles.visualSvc}>Saç Kesimi</p>
                    </div>
                    <span className={styles.visualTime}>11:00</span>
                  </div>
                  <div className={styles.visualRow}>
                    <span className={`${styles.visualDot} ${styles.dotPink}`} />
                    <div>
                      <p className={styles.visualName}>Zeynep Arslan</p>
                      <p className={styles.visualSvc}>Manikür &amp; Pedikür</p>
                    </div>
                    <span className={styles.visualTime}>13:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Sektörün tercihi</h2>
            <p className={styles.sectionSub}>
              Dünyanın en çok tercih edilen platformu olmak tesadüf değil. Sektörden sesler:
            </p>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((t) => (
                <div key={t.name} className={styles.testimonialCard}>
                  <div className={styles.stars}>★★★★★</div>
                  <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className={styles.authorName}>{t.name}</p>
                      <p className={styles.authorRole}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI STATS ── */}
        <section className={styles.roiSection}>
          <div className={styles.container}>
            <h2 className={styles.roiTitle}>İşletmenize hakim olun</h2>
            <p className={styles.roiSub}>
              Randevu. olarak işletmenizi büyütmenize, yeni müşteriler çekmenize ve satışları artırmanıza
              yardımcı olmak istiyoruz.
            </p>
            <div className={styles.roiGrid}>
              {roiStats.map((r) => (
                <div key={r.label} className={styles.roiCard}>
                  <span className={styles.roiValue}>{r.value}</span>
                  <h3 className={styles.roiLabel}>{r.label}</h3>
                  <p className={styles.roiDesc}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUPPORT ── */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Başarınıza adanmış</h2>
            <p className={styles.sectionSub}>
              Her işletmenin kendine özgü ihtiyaçları vardır ve biz size özel profesyonel hizmetlerle yanınızdayız.
            </p>
            <div className={styles.supportGrid}>
              {supportItems.map((s) => (
                <div key={s.title} className={styles.supportCard}>
                  <span className={styles.supportIcon}>{s.icon}</span>
                  <h3 className={styles.supportTitle}>{s.title}</h3>
                  <p className={styles.supportDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.supportCtas}>
              <Link href="#" className={styles.supportCtaBtn}>
                Yardım Merkezi
              </Link>
              <Link href="#" className={styles.btnOutline}>
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.faqSection} id="faq">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Sık Sorulan Sorular</h2>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <section className={styles.marqueeSection}>
          <div className={styles.marqueeTrack} aria-hidden="true">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>{item}</span>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Sizi ne bekliyor?</h2>
              <p className={styles.ctaText}>
                Randevu. ile iş ortaklığı yapın ve işletmenizi bugün büyütmeye başlayın.
              </p>
              <Link href="#pricing" className={styles.btnPrimaryLg}>
                Hemen Başlayın
              </Link>
              <p className={styles.heroNote} style={{ marginTop: '12px' }}>
                Kredi kartı gerekmez · Sözleşme yok · İstediğin zaman iptal et
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>Randevu<span className={styles.footerDot}>.</span></span>
              <p className={styles.footerTagline}>Türkiye&apos;nin güzellik &amp; wellness rezervasyon platformu.</p>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>İşletmeler İçin</p>
              <Link href="#features" className={styles.footerLink}>Özellikler</Link>
              <Link href="#pricing" className={styles.footerLink}>Fiyatlandırma</Link>
              <Link href="#" className={styles.footerLink}>Pazaryeri</Link>
              <Link href="#" className={styles.footerLink}>Zamanlama</Link>
              <Link href="#" className={styles.footerLink}>Satış Noktası</Link>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>Destek</p>
              <Link href="#" className={styles.footerLink}>Yardım Merkezi</Link>
              <Link href="#" className={styles.footerLink}>Bize Ulaşın</Link>
              <Link href="#" className={styles.footerLink}>Blog</Link>
              <Link href="#" className={styles.footerLink}>Durum</Link>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>Yasal</p>
              <Link href="#" className={styles.footerLink}>Gizlilik Politikası</Link>
              <Link href="#" className={styles.footerLink}>Hizmet Koşulları</Link>
              <Link href="#" className={styles.footerLink}>Kullanım Koşulları</Link>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 Randevu.co Ltd</p>
            <p>Türkiye</p>
          </div>
        </div>
      </footer>
    </>
  );
}
