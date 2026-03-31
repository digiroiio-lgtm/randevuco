export type Venue = {
  slug: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  type: string;
  img: string;
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
