export type Venue = {
  slug: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  type: string;
  img: string;
};

export type ServiceItem = {
  name: string;
  duration: string;
  price: string;
};

export type ServiceCategory = {
  name: string;
  items: ServiceItem[];
};

export type VenueReview = {
  author: string;
  date: string;
  rating: number;
  text: string;
};

export type DayHours = {
  day: string;
  hours: string | null;
};

export type VenueDetail = {
  slug: string;
  address: string;
  about: string;
  openStatus: string;
  gallery: string[];
  serviceCategories: ServiceCategory[];
  venueReviews: VenueReview[];
  portfolio: string[];
  openingHours: DayHours[];
  nearbyVenueSlugs: string[];
};

export type Category = {
  name: string;
  img: string;
};

export const venues: Record<string, Venue[]> = {
  recommended: [
    { slug: 'medloft-beauty', name: 'Medloft Beauty Couture', rating: 5.0, reviews: 977, location: 'Germasogeia, Limassol', type: 'Kuaför Salonu', img: 'photo-1560066984-138dadb4c035' },
    { slug: 'wow-beauty-lab', name: 'Wow Beauty Lab', rating: 5.0, reviews: 1507, location: 'My Mall, Franklin R.', type: 'Güzellik Salonu', img: 'photo-1522337360788-8b13dee7a37e' },
    { slug: 'luxe-spa', name: 'Luxe Spa & Wellness', rating: 4.9, reviews: 342, location: 'Konyaaltı, Antalya', type: 'Spa', img: 'photo-1516975080664-ed2fc6a32937' },
  ],
  newVenues: [
    { slug: 'zengate-masaj', name: 'Zengate Medikal Masaj 2 – Derin İyileşme', rating: 5.0, reviews: 5, location: 'Gençlik, 1315. Sokak 5a, Antalya', type: 'Masaj', img: 'photo-1570172619644-dfd03ed5d881' },
    { slug: 'my-thai-masaj', name: 'My Thai Masaj', rating: 5.0, reviews: 26, location: 'Elmalı, 4. Sokak, Antalya', type: 'Masaj', img: 'photo-1544161515-4ab6ce6db874' },
    { slug: 'glow-beauty', name: 'Glow Beauty Studio', rating: 5.0, reviews: 3, location: 'Lara, Antalya', type: 'Güzellik Salonu', img: 'photo-1487412947147-5cebf100ffc2' },
  ],
  trending: [
    { slug: 'the-barber-room', name: 'The Barber Room', rating: 4.8, reviews: 214, location: 'Muratpaşa, Antalya', type: 'Berber', img: 'photo-1519415510236-718bdfcd89c8' },
    { slug: 'nail-art-atelier', name: 'Nail Art Atelier', rating: 4.9, reviews: 88, location: 'Lara, Antalya', type: 'Tırnak', img: 'photo-1604654894610-df63bc536371' },
    { slug: 'stil-sac', name: 'Stil Saç & Güzellik', rating: 4.7, reviews: 156, location: 'Kepez, Antalya', type: 'Kuaför', img: 'photo-1560066984-138dadb4c035' },
  ],
};

export const allVenues: Venue[] = [
  ...venues.recommended,
  ...venues.newVenues,
  ...venues.trending,
];

export const categories: Category[] = [
  { name: 'Kuaför',               img: 'photo-1522337360788-8b13dee7a37e' },
  { name: 'Berber',               img: 'photo-1503951914875-452162b0f3f1' },
  { name: 'Tırnak',               img: 'photo-1604654894610-df63bc536371' },
  { name: 'Spa & Sauna',          img: 'photo-1515377905703-c4788e51af15' },
  { name: 'Medikal Estetik',      img: 'photo-1570172619644-dfd03ed5d881' },
  { name: 'Masaj',                img: 'photo-1544161515-4ab6ce6db874' },
  { name: 'Fitness & Toparlanma', img: 'photo-1549060279-7e168fcee0c2' },
  { name: 'Fizyoterapi',          img: 'photo-1576091160550-2173dba999ef' },
  { name: 'Sağlık Kliniği',       img: 'photo-1612349317150-e413f6a5b16d' },
  { name: 'Dövme & Piercing',     img: 'photo-1598524374912-8ee50e0d35f3' },
  { name: 'Evcil Hayvan Bakımı',  img: 'photo-1587300003388-59208cc962cb' },
  { name: 'Bronzlaşma Stüdyosu',  img: 'photo-1571019613454-1cb2f99b2d8b' },
];

export const reviews = [
  { author: 'Ayşe K.', venue: 'Medloft Beauty Couture', rating: 5, text: 'Mükemmel bir deneyimdi. Personel çok ilgili ve profesyoneldi.', date: '2 gün önce' },
  { author: 'Mert D.', venue: 'The Barber Room', rating: 5, text: 'En iyi berber deneyimim. Kesinlikle tavsiye ederim!', date: '5 gün önce' },
  { author: 'Zeynep A.', venue: 'Luxe Spa & Wellness', rating: 5, text: 'Harika bir spa deneyimi. Rahatlamak için mükemmel bir yer.', date: '1 hafta önce' },
];

// ─── Rich per-venue detail mock data ─────────────────────────────────────────

export const venueDetails: Record<string, VenueDetail> = {
  'medloft-beauty': {
    slug: 'medloft-beauty',
    address: 'Germasogeia Tourist Area 22, 4048 Limassol',
    about:
      'Medloft Beauty Couture, Limassol\'un kalbinde ultra modern tasarım anlayışıyla hizmet veren bir güzellik ve bakım stüdyosudur. Avrupa standartlarında ürünler ve uzman stilistlerimizle sizi farklı kılmak için buradayız. Her ziyaretinizde kendinizi özel hissedeceğiniz bir deneyim sunuyoruz.',
    openStatus: '20:00\'e kadar açık',
    gallery: [
      'photo-1560066984-138dadb4c035',
      'photo-1522337360788-8b13dee7a37e',
      'photo-1487412947147-5cebf100ffc2',
    ],
    serviceCategories: [
      {
        name: 'Saç Kesimi',
        items: [
          { name: 'Kadın Saç Kesimi', duration: '45 dk', price: '₺400' },
          { name: 'Erkek Saç Kesimi', duration: '30 dk', price: '₺200' },
          { name: 'Çocuk Saç Kesimi', duration: '20 dk', price: '₺150' },
          { name: 'Fön & Şekillendirme', duration: '30 dk', price: '₺250' },
        ],
      },
      {
        name: 'Renklendirme',
        items: [
          { name: 'Tek Renk Boyama', duration: '90 dk', price: '₺700' },
          { name: 'Balayage', duration: '2 sa 30 dk', price: '₺1.400' },
          { name: 'Ombre', duration: '2 sa', price: '₺1.200' },
          { name: 'Highlights', duration: '2 sa', price: '₺1.000' },
        ],
      },
      {
        name: 'Saç Bakımı',
        items: [
          { name: 'Saç Bakımı & Maske', duration: '60 dk', price: '₺350' },
          { name: 'Keratin Bakımı', duration: '2 sa 30 dk', price: '₺1.500' },
          { name: 'Botoks Saç Bakımı', duration: '2 sa', price: '₺1.200' },
        ],
      },
      {
        name: 'Makyaj',
        items: [
          { name: 'Gündüz Makyajı', duration: '45 dk', price: '₺500' },
          { name: 'Gece Makyajı', duration: '60 dk', price: '₺700' },
          { name: 'Gelin Makyajı', duration: '90 dk', price: '₺1.200' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Ayşe K.', date: 'Pzt, 30 Mar 2026', rating: 5, text: 'Muhteşem bir deneyim! Stylist çok dikkatli ve profesyoneldi. Saçlarım hiç bu kadar güzel olmamıştı. Kesinlikle tavsiye ederim.' },
      { author: 'Mehmet D.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Çok memnun kaldım. Hem hızlı hem de kaliteli hizmet. Fiyatlar da çok uygun.' },
      { author: 'Zeynep A.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Balayage için geldim, tam istediğim gibi oldu. Teşekkürler!' },
      { author: 'Fatma Y.', date: 'Pzt, 23 Mar 2026', rating: 5, text: 'Yıllardır gidiyorum, her seferinde aynı mükemmel kalite.' },
      { author: 'Deniz B.', date: 'Cum, 20 Mar 2026', rating: 5, text: 'Keratin bakımı yaptırdım, saçlarım inanılmaz yumuşadı. Harika!' },
      { author: 'Selin O.', date: 'Per, 19 Mar 2026', rating: 4, text: 'Genel olarak çok iyi, küçük bir bekleme süresi oldu ama sonuç güzeldi.' },
    ],
    portfolio: [
      'photo-1560066984-138dadb4c035',
      'photo-1522337360788-8b13dee7a37e',
      'photo-1487412947147-5cebf100ffc2',
      'photo-1604654894610-df63bc536371',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '09:00 – 20:00' },
      { day: 'Salı', hours: '09:00 – 20:00' },
      { day: 'Çarşamba', hours: '09:00 – 20:00' },
      { day: 'Perşembe', hours: '09:00 – 20:00' },
      { day: 'Cuma', hours: '09:00 – 20:00' },
      { day: 'Cumartesi', hours: '09:00 – 20:00' },
      { day: 'Pazar', hours: null },
    ],
    nearbyVenueSlugs: ['wow-beauty-lab', 'glow-beauty', 'nail-art-atelier'],
  },

  'wow-beauty-lab': {
    slug: 'wow-beauty-lab',
    address: 'My Mall, Franklin Roosevelt Caddesi, Limassol',
    about:
      'Wow Beauty Lab, Limassol\'un en popüler alışveriş merkezindeki modern güzellik laboratuvarıdır. Son teknoloji cilt bakımı ve güzellik hizmetleriyle sizi en iyi halinize kavuşturuyoruz. Deneyimli uzman ekibimiz, her müşteriye özel bir bakım planı sunmaktadır.',
    openStatus: '21:00\'e kadar açık',
    gallery: [
      'photo-1522337360788-8b13dee7a37e',
      'photo-1487412947147-5cebf100ffc2',
      'photo-1560066984-138dadb4c035',
    ],
    serviceCategories: [
      {
        name: 'Cilt Bakımı',
        items: [
          { name: 'Klasik Yüz Bakımı', duration: '60 dk', price: '₺600' },
          { name: 'Derin Temizleme', duration: '1 sa 15 dk', price: '₺750' },
          { name: 'Anti-Aging Bakım', duration: '90 dk', price: '₺1.100' },
          { name: 'Nem Bombası Bakımı', duration: '60 dk', price: '₺700' },
        ],
      },
      {
        name: 'Lazer & Teknoloji',
        items: [
          { name: 'Lazer Epilasyon (Bacak)', duration: '45 dk', price: '₺800' },
          { name: 'Lazer Epilasyon (Koltukaltı)', duration: '20 dk', price: '₺350' },
          { name: 'RF Lift', duration: '60 dk', price: '₺1.200' },
          { name: 'Mikrodermabrazyon', duration: '60 dk', price: '₺900' },
        ],
      },
      {
        name: 'Kaş & Kirpik',
        items: [
          { name: 'Kaş Şekillendirme', duration: '20 dk', price: '₺200' },
          { name: 'Kirpik Lifting', duration: '60 dk', price: '₺600' },
          { name: 'Kirpik Uzatma', duration: '90 dk', price: '₺900' },
        ],
      },
      {
        name: 'Makyaj',
        items: [
          { name: 'Günlük Makyaj', duration: '45 dk', price: '₺550' },
          { name: 'Gece Makyajı', duration: '60 dk', price: '₺750' },
          { name: 'Airbrush Makyaj', duration: '1 sa 15 dk', price: '₺950' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Marina S.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Lazer epilasyon için geldim, çok profesyonel ve hijyenik bir ortam. Sonuçtan çok memnunum!' },
      { author: 'Nicoleta P.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Anti-aging bakım muhteşemdi. Derim 10 yaş genç göründü!' },
      { author: 'Elena M.', date: 'Pzt, 23 Mar 2026', rating: 5, text: 'Kirpik uzatma için geldim. Tam doğal gibi görünüyor, bayıldım.' },
      { author: 'Sophie K.', date: 'Cum, 20 Mar 2026', rating: 5, text: 'My Mall\'daki en iyi güzellik salonu! Her zaman kaliteli hizmet.' },
      { author: 'Rania H.', date: 'Per, 19 Mar 2026', rating: 5, text: 'RF Lift sonuçları inanılmaz. Yüzümde gözle görülür fark var.' },
      { author: 'Diana T.', date: 'Çar, 18 Mar 2026', rating: 4, text: 'Çok iyi hizmet, salonun tasarımı da çok şık. Fiyatlar biraz yüksek ama değer.' },
    ],
    portfolio: [
      'photo-1522337360788-8b13dee7a37e',
      'photo-1560066984-138dadb4c035',
      'photo-1487412947147-5cebf100ffc2',
      'photo-1570172619644-dfd03ed5d881',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '10:00 – 21:00' },
      { day: 'Salı', hours: '10:00 – 21:00' },
      { day: 'Çarşamba', hours: '10:00 – 21:00' },
      { day: 'Perşembe', hours: '10:00 – 21:00' },
      { day: 'Cuma', hours: '10:00 – 22:00' },
      { day: 'Cumartesi', hours: '10:00 – 22:00' },
      { day: 'Pazar', hours: '11:00 – 20:00' },
    ],
    nearbyVenueSlugs: ['medloft-beauty', 'glow-beauty', 'nail-art-atelier'],
  },

  'luxe-spa': {
    slug: 'luxe-spa',
    address: 'Konyaaltı Caddesi No:45, Konyaaltı, Antalya',
    about:
      'Luxe Spa & Wellness, Antalya\'nın Konyaaltı bölgesinde deniz manzaralı, lüks bir spa ve wellness merkezidir. Hamam, sauna, jakuzi ve profesyonel masaj hizmetlerimizle kendinizi tamamen yenilemeniz için tasarlandık. Uzman terapistlerimiz, vücudunuzun ve ruhunuzun ihtiyaç duyduğu derin dinginliği sunmak için burada.',
    openStatus: '22:00\'ye kadar açık',
    gallery: [
      'photo-1516975080664-ed2fc6a32937',
      'photo-1540555700478-4be289fbecef',
      'photo-1507003211169-0a1dd7228f2d',
    ],
    serviceCategories: [
      {
        name: 'Masaj',
        items: [
          { name: 'İsveç Masajı', duration: '60 dk', price: '₺800' },
          { name: 'Derin Doku Masajı', duration: '60 dk', price: '₺900' },
          { name: 'Aromaterapik Masaj', duration: '1 sa 15 dk', price: '₺950' },
          { name: 'Sıcak Taş Masajı', duration: '90 dk', price: '₺1.200' },
          { name: 'Çift Masaj Paketi', duration: '90 dk', price: '₺1.800' },
        ],
      },
      {
        name: 'Yüz Bakımı',
        items: [
          { name: 'Klasik Yüz Bakımı', duration: '60 dk', price: '₺700' },
          { name: 'Anti-Aging Spa Bakımı', duration: '90 dk', price: '₺1.100' },
          { name: 'Detox Yüz Bakımı', duration: '1 sa 15 dk', price: '₺850' },
        ],
      },
      {
        name: 'Vücut',
        items: [
          { name: 'Kese & Sabun (Hamam)', duration: '45 dk', price: '₺500' },
          { name: 'Vücut Peeling', duration: '60 dk', price: '₺700' },
          { name: 'Çamur Sarmalama', duration: '1 sa 15 dk', price: '₺900' },
          { name: 'Detox Paket', duration: '2 sa', price: '₺1.400' },
        ],
      },
      {
        name: 'Spa Paketleri',
        items: [
          { name: 'Günlük Spa Paketi', duration: '3 sa', price: '₺2.200' },
          { name: 'Çift Spa Günü', duration: '3 sa', price: '₺3.800' },
          { name: 'Luxe Wellness Paketi', duration: '4 sa', price: '₺3.200' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Zeynep A.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Harika bir spa deneyimi! Sıcak taş masajı muhteşemdi. Personel çok ilgili ve profesyonel. Kesinlikle tekrar geleceğim.' },
      { author: 'Hüseyin K.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Eşimle birlikte çift masaj paketi aldık. İnanılmaz bir deneyimdi, tam anlamıyla rahatlayıp dinlendik.' },
      { author: 'Pınar M.', date: 'Pzt, 23 Mar 2026', rating: 5, text: 'Hamam ve kese deneyimi mükemmeldi. Uzun zaman sonra bu kadar iyi hissettim.' },
      { author: 'Ali R.', date: 'Cum, 20 Mar 2026', rating: 5, text: 'Deniz manzarası eşliğinde masaj almak ayrı bir his. Kesinlikle tavsiye edilir!' },
      { author: 'Sibel T.', date: 'Per, 19 Mar 2026', rating: 5, text: 'Anti-aging bakım cildime inanılmaz yaramış. Herkes fark etti!' },
      { author: 'Berk Y.', date: 'Çar, 18 Mar 2026', rating: 5, text: 'Luxe Wellness Paketi aldım. 4 saatlik deneyim hem ruhumu hem bedenim tazeledi. Yüzde yüz değer.' },
    ],
    portfolio: [
      'photo-1516975080664-ed2fc6a32937',
      'photo-1540555700478-4be289fbecef',
      'photo-1507003211169-0a1dd7228f2d',
      'photo-1544161515-4ab6ce6db874',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '09:00 – 22:00' },
      { day: 'Salı', hours: '09:00 – 22:00' },
      { day: 'Çarşamba', hours: '09:00 – 22:00' },
      { day: 'Perşembe', hours: '09:00 – 22:00' },
      { day: 'Cuma', hours: '09:00 – 22:00' },
      { day: 'Cumartesi', hours: '09:00 – 22:00' },
      { day: 'Pazar', hours: '10:00 – 20:00' },
    ],
    nearbyVenueSlugs: ['zengate-masaj', 'my-thai-masaj', 'the-barber-room'],
  },

  'zengate-masaj': {
    slug: 'zengate-masaj',
    address: 'Gençlik Mahallesi, 1315. Sokak No:5a, Muratpaşa, Antalya',
    about:
      'Zengate Medikal Masaj, spor yaralanmaları ve kronik ağrıların tedavisinde uzmanlaşmış profesyonel bir masaj merkezidir. Fizyoterapist ve masaj terapistlerinden oluşan ekibimiz, derin doku masajı ve rehabilitasyon teknikleriyle kalıcı çözümler sunmaktadır.',
    openStatus: '20:00\'e kadar açık',
    gallery: [
      'photo-1570172619644-dfd03ed5d881',
      'photo-1544161515-4ab6ce6db874',
      'photo-1516975080664-ed2fc6a32937',
    ],
    serviceCategories: [
      {
        name: 'Terapötik',
        items: [
          { name: 'Derin Doku Masajı', duration: '60 dk', price: '₺700' },
          { name: 'Spor Masajı', duration: '60 dk', price: '₺750' },
          { name: 'Boyun & Omuz Masajı', duration: '30 dk', price: '₺400' },
          { name: 'Bel & Sırt Masajı', duration: '45 dk', price: '₺550' },
        ],
      },
      {
        name: 'Medikal',
        items: [
          { name: 'Lenfatik Drenaj', duration: '60 dk', price: '₺800' },
          { name: 'Refleksoloji', duration: '45 dk', price: '₺500' },
          { name: 'Cupping (Hacamat)', duration: '45 dk', price: '₺600' },
        ],
      },
      {
        name: 'Rahatlama',
        items: [
          { name: 'İsveç Masajı', duration: '60 dk', price: '₺650' },
          { name: 'Baş Masajı', duration: '30 dk', price: '₺300' },
          { name: 'Aromaterapik Masaj', duration: '1 sa 15 dk', price: '₺850' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Kemal A.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Kronik bel ağrım için geldim. 5 seans sonra neredeyse tamamen geçti. Gerçekten profesyoneller!' },
      { author: 'Reyhan S.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Spor masajı için geldim, kaslarım tamamen gevşedi. Sonraki koşu için hazırım!' },
      { author: 'Turgut M.', date: 'Pzt, 23 Mar 2026', rating: 5, text: 'Boyun fıtığı için uygulama yaptırdım, çok faydalı oldu. Teşekkürler.' },
      { author: 'Gülşen Y.', date: 'Cum, 20 Mar 2026', rating: 5, text: 'Lenfatik drenaj masajı için 3. kez geliyorum. Her seferinde çok rahatladım.' },
      { author: 'Ozan B.', date: 'Per, 19 Mar 2026', rating: 5, text: 'Cupping uygulaması çok faydalı oldu. Hem güvenilir hem de profesyonel.' },
    ],
    portfolio: [
      'photo-1570172619644-dfd03ed5d881',
      'photo-1544161515-4ab6ce6db874',
      'photo-1576091160550-2173dba999ef',
      'photo-1516975080664-ed2fc6a32937',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '09:00 – 20:00' },
      { day: 'Salı', hours: '09:00 – 20:00' },
      { day: 'Çarşamba', hours: '09:00 – 20:00' },
      { day: 'Perşembe', hours: '09:00 – 20:00' },
      { day: 'Cuma', hours: '09:00 – 20:00' },
      { day: 'Cumartesi', hours: '10:00 – 18:00' },
      { day: 'Pazar', hours: null },
    ],
    nearbyVenueSlugs: ['my-thai-masaj', 'luxe-spa', 'the-barber-room'],
  },

  'my-thai-masaj': {
    slug: 'my-thai-masaj',
    address: 'Elmalı Mahallesi, 4. Sokak No:12, Muratpaşa, Antalya',
    about:
      'My Thai Masaj, geleneksel Tayland masaj teknikleriyle hizmet veren özgün bir masaj merkezidir. Tayland\'da eğitim almış terapistlerimiz, klasik Tai masajı, sıcak taş ve aromaterapi uygulamalarıyla sizi dinlendiriyor. Doğal uçucu yağlar ve otantik tekniklerle beden ve ruhunuzu arındırıyoruz.',
    openStatus: '21:00\'e kadar açık',
    gallery: [
      'photo-1544161515-4ab6ce6db874',
      'photo-1570172619644-dfd03ed5d881',
      'photo-1516975080664-ed2fc6a32937',
    ],
    serviceCategories: [
      {
        name: 'Tai Masajı',
        items: [
          { name: 'Klasik Tai Masajı', duration: '60 dk', price: '₺600' },
          { name: 'Tai Masajı Premium', duration: '90 dk', price: '₺850' },
          { name: 'Ayak & Bacak Masajı', duration: '45 dk', price: '₺400' },
          { name: 'Sırt & Omuz Masajı', duration: '30 dk', price: '₺350' },
        ],
      },
      {
        name: 'Aromaterapi',
        items: [
          { name: 'Aromaterapi Masajı', duration: '60 dk', price: '₺700' },
          { name: 'Sıcak Taş & Aroma', duration: '90 dk', price: '₺1.000' },
          { name: 'Lavanta Masajı', duration: '60 dk', price: '₺650' },
        ],
      },
      {
        name: 'Özel Paketler',
        items: [
          { name: 'Çift Tai Masaj Paketi', duration: '90 dk', price: '₺1.500' },
          { name: 'Full Body Ritual', duration: '2 sa', price: '₺1.800' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Elif K.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Gerçek Tai masajı deneyimi! Terapist çok yetenekli ve geleneksel tekniklere hakim. Antalya\'daki en iyi masaj yeri.' },
      { author: 'Can D.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Aromaterapi masajı için eşimle geldik. Muhteşem bir deneyimdi. Çok rahatladık.' },
      { author: 'Neslihan O.', date: 'Per, 19 Mar 2026', rating: 5, text: 'Ayak masajı için düzenli olarak geliyorum. Her zaman mükemmel.' },
      { author: 'Burak T.', date: 'Çar, 18 Mar 2026', rating: 5, text: 'Full Body Ritual paketini denedim. 2 saat sonunda kendimi yeni doğmuş gibi hissettim!' },
      { author: 'Yıldız B.', date: 'Sal, 17 Mar 2026', rating: 4, text: 'Çok güzel bir ortam ve kaliteli hizmet. Biraz daha uzun olsaydı daha iyi olurdu.' },
    ],
    portfolio: [
      'photo-1544161515-4ab6ce6db874',
      'photo-1570172619644-dfd03ed5d881',
      'photo-1516975080664-ed2fc6a32937',
      'photo-1507003211169-0a1dd7228f2d',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '10:00 – 21:00' },
      { day: 'Salı', hours: '10:00 – 21:00' },
      { day: 'Çarşamba', hours: '10:00 – 21:00' },
      { day: 'Perşembe', hours: '10:00 – 21:00' },
      { day: 'Cuma', hours: '10:00 – 21:00' },
      { day: 'Cumartesi', hours: '10:00 – 21:00' },
      { day: 'Pazar', hours: '11:00 – 19:00' },
    ],
    nearbyVenueSlugs: ['zengate-masaj', 'luxe-spa', 'glow-beauty'],
  },

  'glow-beauty': {
    slug: 'glow-beauty',
    address: 'Lara Caddesi No:88, Lara, Antalya',
    about:
      'Glow Beauty Studio, Antalya Lara\'da hizmet veren butik bir güzellik stüdyosudur. Cilt bakımı, makyaj ve güzellik ritüellerinde uzman ekibimizle her gün kendinizi en iyi hissettirmeyi amaçlıyoruz. Doğal ve organik ürünlere olan bağlılığımız, hem etkili hem de cildinize dost bakımlar sunmamızı sağlıyor.',
    openStatus: '20:00\'e kadar açık',
    gallery: [
      'photo-1487412947147-5cebf100ffc2',
      'photo-1522337360788-8b13dee7a37e',
      'photo-1560066984-138dadb4c035',
    ],
    serviceCategories: [
      {
        name: 'Yüz Bakımı',
        items: [
          { name: 'Glow Yüz Bakımı', duration: '60 dk', price: '₺650' },
          { name: 'Nem & Işıltı Bakımı', duration: '1 sa 15 dk', price: '₺800' },
          { name: 'Akne Temizleme Bakımı', duration: '1 sa 15 dk', price: '₺750' },
          { name: 'Vitamin C Aydınlatma', duration: '60 dk', price: '₺700' },
        ],
      },
      {
        name: 'Makyaj',
        items: [
          { name: 'Doğal Makyaj', duration: '45 dk', price: '₺500' },
          { name: 'Smoky Eye Makyaj', duration: '60 dk', price: '₺650' },
          { name: 'Gelin Makyajı', duration: '90 dk', price: '₺1.200' },
          { name: 'Fotoğraf Makyajı', duration: '1 sa 15 dk', price: '₺900' },
        ],
      },
      {
        name: 'Kalıcı Makyaj',
        items: [
          { name: 'Microblading Kaş', duration: '2 sa', price: '₺2.500' },
          { name: 'Kalıcı Dudak Kontürü', duration: '90 dk', price: '₺1.800' },
          { name: 'Kalıcı Eyeliner', duration: '90 dk', price: '₺1.600' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Aslı M.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Glow bakımı yaptırdım, yüzüm inanılmaz parlak ve canlı görünüyor. Herkes fark etti!' },
      { author: 'Duygu K.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Microblading için geldim. Sonuç harika, çok doğal görünüyor. Teşekkürler!' },
      { author: 'Sera B.', date: 'Pzt, 23 Mar 2026', rating: 5, text: 'Makyaj için düzenli geliyorum. Her zaman istediğim gibi çıkıyor.' },
      { author: 'Tuba A.', date: 'Cum, 20 Mar 2026', rating: 5, text: 'Gelin makyajı için geldim, tam hayalimdekileri yaptılar. Çok memnunum!' },
      { author: 'İrem C.', date: 'Per, 19 Mar 2026', rating: 4, text: 'Çok güzel bir ortam, ürünler çok kaliteli. Biraz fiyatlı ama kesinlikle değer.' },
    ],
    portfolio: [
      'photo-1487412947147-5cebf100ffc2',
      'photo-1522337360788-8b13dee7a37e',
      'photo-1560066984-138dadb4c035',
      'photo-1604654894610-df63bc536371',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '09:30 – 20:00' },
      { day: 'Salı', hours: '09:30 – 20:00' },
      { day: 'Çarşamba', hours: '09:30 – 20:00' },
      { day: 'Perşembe', hours: '09:30 – 20:00' },
      { day: 'Cuma', hours: '09:30 – 20:00' },
      { day: 'Cumartesi', hours: '10:00 – 18:00' },
      { day: 'Pazar', hours: null },
    ],
    nearbyVenueSlugs: ['nail-art-atelier', 'wow-beauty-lab', 'medloft-beauty'],
  },

  'the-barber-room': {
    slug: 'the-barber-room',
    address: 'Atatürk Bulvarı No:72, Muratpaşa, Antalya',
    about:
      'The Barber Room, klasik berberlik sanatını modern tekniklerle buluşturan premium bir erkek bakım merkezidir. Deneyimli berberlerimiz, saç kesimi, sakal şekillendirme ve geleneksel ustura tıraşı konularında uzmanlaşmıştır. Her müşteriye özel, kişiselleştirilmiş bir deneyim sunuyoruz.',
    openStatus: '20:00\'e kadar açık',
    gallery: [
      'photo-1519415510236-718bdfcd89c8',
      'photo-1503951914875-452162b0f3f1',
      'photo-1560066984-138dadb4c035',
    ],
    serviceCategories: [
      {
        name: 'Saç',
        items: [
          { name: 'Saç Kesimi', duration: '30 dk', price: '₺250' },
          { name: 'Fade Kesim', duration: '45 dk', price: '₺350' },
          { name: 'Saç & Sakal Kombo', duration: '60 dk', price: '₺450' },
          { name: 'Çocuk Saç Kesimi', duration: '20 dk', price: '₺180' },
        ],
      },
      {
        name: 'Sakal',
        items: [
          { name: 'Sakal Düzeltme', duration: '20 dk', price: '₺200' },
          { name: 'Sakal Şekillendirme', duration: '30 dk', price: '₺280' },
          { name: 'Klasik Ustura Tıraşı', duration: '45 dk', price: '₺350' },
          { name: 'Sıcak Havlu Tıraş', duration: '45 dk', price: '₺380' },
        ],
      },
      {
        name: 'Bakım',
        items: [
          { name: 'Saç & Saç Derisi Bakımı', duration: '45 dk', price: '₺400' },
          { name: 'Kepek Tedavisi', duration: '45 dk', price: '₺450' },
          { name: 'Saç Boyama', duration: '60 dk', price: '₺500' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Mert D.', date: 'Pzt, 30 Mar 2026', rating: 5, text: 'En iyi berber deneyimim kesinlikle! Fade kesim mükemmel oldu. Personel hem profesyonel hem de çok samimi.' },
      { author: 'Emre K.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Klasik ustura tıraşı için geldim, tam film sahnesi gibiydi. Harika bir deneyim!' },
      { author: 'Serkan A.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Her hafta geliyorum. Saç & sakal kombo paketi çok değerli.' },
      { author: 'Mustafa Y.', date: 'Pzt, 23 Mar 2026', rating: 5, text: 'Sıcak havlu tıraşı denedim, ilk kez bu kadar rahatlamıştım. Harikasınız!' },
      { author: 'Burak O.', date: 'Cum, 20 Mar 2026', rating: 4, text: 'Çok kaliteli hizmet, ortam da çok şık. Sabahları biraz kalabalık oluyor.' },
      { author: 'Hakan T.', date: 'Per, 19 Mar 2026', rating: 5, text: 'Oğlumu da getirdim, ikimiz de çok memnun kaldık. Aile dostu bir berber.' },
    ],
    portfolio: [
      'photo-1519415510236-718bdfcd89c8',
      'photo-1503951914875-452162b0f3f1',
      'photo-1560066984-138dadb4c035',
      'photo-1487412947147-5cebf100ffc2',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '09:00 – 20:00' },
      { day: 'Salı', hours: '09:00 – 20:00' },
      { day: 'Çarşamba', hours: '09:00 – 20:00' },
      { day: 'Perşembe', hours: '09:00 – 20:00' },
      { day: 'Cuma', hours: '09:00 – 20:00' },
      { day: 'Cumartesi', hours: '09:00 – 20:00' },
      { day: 'Pazar', hours: null },
    ],
    nearbyVenueSlugs: ['nail-art-atelier', 'stil-sac', 'zengate-masaj'],
  },

  'nail-art-atelier': {
    slug: 'nail-art-atelier',
    address: 'Güneş Sokak No:14, Lara, Antalya',
    about:
      'Nail Art Atelier, tırnak sanatını en üst seviyede sunan bir nail stüdyosudur. Jel tırnak, protez tırnak ve tırnak sanatı konularında uzman nail artistlerimiz, her müşterinin yaratıcı vizyonunu gerçeğe dönüştürüyor. Premium ürünler ve hijyenik ortamda sunduğumuz hizmetlerle tırnaklarınızı birer sanat eserine dönüştürüyoruz.',
    openStatus: '20:00\'e kadar açık',
    gallery: [
      'photo-1604654894610-df63bc536371',
      'photo-1487412947147-5cebf100ffc2',
      'photo-1522337360788-8b13dee7a37e',
    ],
    serviceCategories: [
      {
        name: 'Manikür',
        items: [
          { name: 'Klasik Manikür', duration: '45 dk', price: '₺300' },
          { name: 'Jel Manikür', duration: '60 dk', price: '₺450' },
          { name: 'Kalıcı Oje', duration: '45 dk', price: '₺350' },
          { name: 'Fransız Manikür', duration: '60 dk', price: '₺500' },
        ],
      },
      {
        name: 'Pedikür',
        items: [
          { name: 'Klasik Pedikür', duration: '50 dk', price: '₺350' },
          { name: 'Spa Pedikür', duration: '1 sa 15 dk', price: '₺550' },
          { name: 'Jel Pedikür', duration: '60 dk', price: '₺500' },
        ],
      },
      {
        name: 'Tırnak Sanatı',
        items: [
          { name: 'Nail Art (Tek Tırnak)', duration: '15 dk', price: '₺80' },
          { name: 'Nail Art (Tam Set)', duration: '90 dk', price: '₺800' },
          { name: 'Tırnak Uzatma (Akrilik)', duration: '90 dk', price: '₺700' },
          { name: 'Tırnak Uzatma (Jel)', duration: '90 dk', price: '₺750' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Gamze S.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Nail art için geldim, tam hayal ettiğim gibi oldu. Çok detaylı ve özenli çalışıyorlar!' },
      { author: 'Büşra A.', date: 'Sal, 24 Mar 2026', rating: 5, text: 'Jel manikür çok uzun sürdü ama mükemmel bir iş çıktı. Değdi!' },
      { author: 'Melis K.', date: 'Pzt, 23 Mar 2026', rating: 5, text: 'Spa pedikür harika! Ayaklarım ipek gibi oldu.' },
      { author: 'Cansu Y.', date: 'Cum, 20 Mar 2026', rating: 5, text: 'Fransız manikür için en iyi yer. Her zaman mükemmel sonuç.' },
      { author: 'Dila T.', date: 'Per, 19 Mar 2026', rating: 5, text: 'Akrilik tırnak uzatma yaptırdım. İnanılmaz doğal görünüyor, kimse sahte olduğunu anlamıyor!' },
    ],
    portfolio: [
      'photo-1604654894610-df63bc536371',
      'photo-1487412947147-5cebf100ffc2',
      'photo-1522337360788-8b13dee7a37e',
      'photo-1560066984-138dadb4c035',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '10:00 – 20:00' },
      { day: 'Salı', hours: '10:00 – 20:00' },
      { day: 'Çarşamba', hours: '10:00 – 20:00' },
      { day: 'Perşembe', hours: '10:00 – 20:00' },
      { day: 'Cuma', hours: '10:00 – 20:00' },
      { day: 'Cumartesi', hours: '10:00 – 18:00' },
      { day: 'Pazar', hours: null },
    ],
    nearbyVenueSlugs: ['glow-beauty', 'the-barber-room', 'stil-sac'],
  },

  'stil-sac': {
    slug: 'stil-sac',
    address: 'Dumlupınar Bulvarı No:156, Kepez, Antalya',
    about:
      'Stil Saç & Güzellik, Kepez\'in köklü güzellik salonlarından biridir. 10 yılı aşkın deneyimimizle saç kesimi, renklendirme, bakım ve güzellik hizmetleri sunuyoruz. Uygun fiyatlarla yüksek kaliteli hizmet anlayışımız, müşterilerimizin güvenini kazanmamızı sağlamıştır.',
    openStatus: '19:30\'a kadar açık',
    gallery: [
      'photo-1560066984-138dadb4c035',
      'photo-1487412947147-5cebf100ffc2',
      'photo-1522337360788-8b13dee7a37e',
    ],
    serviceCategories: [
      {
        name: 'Saç',
        items: [
          { name: 'Kadın Saç Kesimi', duration: '45 dk', price: '₺300' },
          { name: 'Erkek Saç Kesimi', duration: '30 dk', price: '₺150' },
          { name: 'Fön & Şekillendirme', duration: '30 dk', price: '₺200' },
          { name: 'Saç Boyama', duration: '90 dk', price: '₺600' },
          { name: 'Balayage / Ombre', duration: '2 sa 30 dk', price: '₺1.100' },
        ],
      },
      {
        name: 'Saç Bakımı',
        items: [
          { name: 'Saç Bakımı & Maske', duration: '45 dk', price: '₺300' },
          { name: 'Keratin Bakımı', duration: '2 sa', price: '₺1.100' },
          { name: 'Maske & Bakım Ritueli', duration: '60 dk', price: '₺400' },
        ],
      },
      {
        name: 'Güzellik',
        items: [
          { name: 'Kaş Şekillendirme', duration: '15 dk', price: '₺120' },
          { name: 'Üst Dudak Ağda', duration: '10 dk', price: '₺80' },
          { name: 'Tam Yüz Ağda', duration: '30 dk', price: '₺200' },
        ],
      },
    ],
    venueReviews: [
      { author: 'Hatice D.', date: 'Pzt, 30 Mar 2026', rating: 5, text: 'Yıllardır gidiyorum ve her seferinde memnun çıkıyorum. Uygun fiyat kaliteli hizmet demek burada.' },
      { author: 'Şule A.', date: 'Per, 26 Mar 2026', rating: 5, text: 'Balayage için geldim, renk çok güzel tuttu. Kesinlikle tavsiye ederim.' },
      { author: 'Nurcan K.', date: 'Sal, 24 Mar 2026', rating: 4, text: 'Saç kesimi ve bakımdan çok memnunum. Ağda için de geliyorum artık.' },
      { author: 'Feyza M.', date: 'Per, 19 Mar 2026', rating: 5, text: 'Keratin bakımı muhteşemdi. Saçlarım çok güzel düzeldi.' },
      { author: 'Güler T.', date: 'Çar, 18 Mar 2026', rating: 5, text: 'Çok güler yüzlü personel. Her gittiğimde çok iyi hissediyorum.' },
    ],
    portfolio: [
      'photo-1560066984-138dadb4c035',
      'photo-1522337360788-8b13dee7a37e',
      'photo-1487412947147-5cebf100ffc2',
      'photo-1570172619644-dfd03ed5d881',
    ],
    openingHours: [
      { day: 'Pazartesi', hours: '09:00 – 19:30' },
      { day: 'Salı', hours: '09:00 – 19:30' },
      { day: 'Çarşamba', hours: '09:00 – 19:30' },
      { day: 'Perşembe', hours: '09:00 – 19:30' },
      { day: 'Cuma', hours: '09:00 – 19:30' },
      { day: 'Cumartesi', hours: '09:00 – 18:00' },
      { day: 'Pazar', hours: null },
    ],
    nearbyVenueSlugs: ['the-barber-room', 'nail-art-atelier', 'glow-beauty'],
  },
};
