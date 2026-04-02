// ─── SEO-Optimised Data for Randevu.co ───────────────────────────────────────
// All slugs are lowercase, hyphen-separated, English.

export const SITE_URL = 'https://randevu.co';

// ─── Service Categories ───────────────────────────────────────────────────────
export type SeoCategory = {
  slug: string;
  name: string;
  description: string;
};

export const seoCategories: SeoCategory[] = [
  { slug: 'hair-salons',         name: 'Hair Salons',            description: 'Find and book the best hair salons near you.' },
  { slug: 'barbers',             name: 'Barbers',                description: 'Discover top-rated barbers in your area.' },
  { slug: 'nail-salons',         name: 'Nail Salons',            description: 'Book nail art, manicures, and pedicures.' },
  { slug: 'spa',                 name: 'Spa',                    description: 'Relax and unwind at a spa near you.' },
  { slug: 'massage',             name: 'Massage',                description: 'Book professional massage therapy.' },
  { slug: 'medical-aesthetics',  name: 'Medical Aesthetics',     description: 'Botox, fillers, and aesthetic treatments.' },
  { slug: 'physiotherapy',       name: 'Physiotherapy',          description: 'Physiotherapy and rehabilitation specialists.' },
  { slug: 'fitness',             name: 'Fitness & Recovery',     description: 'Personal training and recovery studios.' },
  { slug: 'tattoo',              name: 'Tattoo & Piercing',      description: 'Find tattoo artists and piercing studios.' },
  { slug: 'pet-grooming',        name: 'Pet Grooming',           description: 'Professional grooming for your pets.' },
];

export const seoCategorySlugs = seoCategories.map((c) => c.slug);

// ─── Cities ───────────────────────────────────────────────────────────────────
export type SeoCity = {
  slug: string;
  name: string;
  country: string;
  districts: SeoDistrict[];
};

export type SeoDistrict = {
  slug: string;
  name: string;
};

export const seoCities: SeoCity[] = [
  {
    slug: 'antalya',
    name: 'Antalya',
    country: 'Turkey',
    districts: [
      { slug: 'konyaalti',   name: 'Konyaaltı' },
      { slug: 'muratpasa',   name: 'Muratpaşa' },
      { slug: 'lara',        name: 'Lara' },
      { slug: 'kepez',       name: 'Kepez' },
      { slug: 'kemer',       name: 'Kemer' },
      { slug: 'alanya',      name: 'Alanya' },
    ],
  },
  {
    slug: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    districts: [
      { slug: 'besiktas',    name: 'Beşiktaş' },
      { slug: 'kadikoy',     name: 'Kadıköy' },
      { slug: 'sisli',       name: 'Şişli' },
      { slug: 'beyoglu',     name: 'Beyoğlu' },
      { slug: 'uskudar',     name: 'Üsküdar' },
      { slug: 'bakirkoy',    name: 'Bakırköy' },
    ],
  },
  {
    slug: 'ankara',
    name: 'Ankara',
    country: 'Turkey',
    districts: [
      { slug: 'cankaya',     name: 'Çankaya' },
      { slug: 'kecioren',    name: 'Keçiören' },
      { slug: 'etimesgut',   name: 'Etimesgut' },
    ],
  },
  {
    slug: 'izmir',
    name: 'İzmir',
    country: 'Turkey',
    districts: [
      { slug: 'konak',       name: 'Konak' },
      { slug: 'karsiyaka',   name: 'Karşıyaka' },
      { slug: 'bornova',     name: 'Bornova' },
    ],
  },
  {
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    districts: [
      { slug: 'shoreditch',  name: 'Shoreditch' },
      { slug: 'chelsea',     name: 'Chelsea' },
      { slug: 'camden',      name: 'Camden' },
      { slug: 'brixton',     name: 'Brixton' },
      { slug: 'canary-wharf', name: 'Canary Wharf' },
    ],
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    country: 'United Kingdom',
    districts: [
      { slug: 'northern-quarter', name: 'Northern Quarter' },
      { slug: 'didsbury',         name: 'Didsbury' },
      { slug: 'salford',          name: 'Salford' },
    ],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    districts: [
      { slug: 'marina',      name: 'Dubai Marina' },
      { slug: 'downtown',    name: 'Downtown Dubai' },
      { slug: 'jumeirah',    name: 'Jumeirah' },
    ],
  },
];

export const seoCitySlugs = seoCities.map((c) => c.slug);

// ─── Business Slugs (for sitemap; full data lives in lib/data.ts) ─────────────
export const seoBusinessSlugs = [
  'medloft-beauty',
  'wow-beauty-lab',
  'luxe-spa',
  'zengate-masaj',
  'my-thai-masaj',
  'glow-beauty',
  'the-barber-room',
  'nail-art-atelier',
  'stil-sac',
];

// ─── Services ─────────────────────────────────────────────────────────────────
export type SeoService = {
  slug: string;
  name: string;
  category: string;
  description: string;
};

export const seoServices: SeoService[] = [
  { slug: 'haircut',                name: 'Haircut',                    category: 'hair-salons',        description: 'Professional haircuts for men and women.' },
  { slug: 'hair-colouring',         name: 'Hair Colouring',             category: 'hair-salons',        description: 'Full colour, highlights, balayage, and more.' },
  { slug: 'blowdry',                name: 'Blow Dry & Styling',         category: 'hair-salons',        description: 'Blowdry and hair styling services.' },
  { slug: 'hair-extensions',        name: 'Hair Extensions',            category: 'hair-salons',        description: 'Professional hair extension fitting and care.' },
  { slug: 'beard-trim',             name: 'Beard Trim',                 category: 'barbers',            description: 'Beard shaping, trimming, and grooming.' },
  { slug: 'hot-shave',              name: 'Hot Towel Shave',            category: 'barbers',            description: 'Traditional hot towel wet shave.' },
  { slug: 'nail-manicure',          name: 'Manicure',                   category: 'nail-salons',        description: 'Classic and gel manicure services.' },
  { slug: 'nail-pedicure',          name: 'Pedicure',                   category: 'nail-salons',        description: 'Pedicure and nail care for feet.' },
  { slug: 'nail-extensions',        name: 'Nail Extensions',            category: 'nail-salons',        description: 'Acrylic, gel, and SNS nail extensions.' },
  { slug: 'swedish-massage',        name: 'Swedish Massage',            category: 'massage',            description: 'Relaxing full-body Swedish massage.' },
  { slug: 'deep-tissue-massage',    name: 'Deep Tissue Massage',        category: 'massage',            description: 'Therapeutic deep tissue massage.' },
  { slug: 'thai-massage',           name: 'Thai Massage',               category: 'massage',            description: 'Traditional Thai massage and stretching.' },
  { slug: 'couples-massage',        name: 'Couples Massage',            category: 'massage',            description: 'Side-by-side massage for two.' },
  { slug: 'spa-day',                name: 'Spa Day Package',            category: 'spa',                description: 'Full spa day with multiple treatments.' },
  { slug: 'facial',                 name: 'Facial Treatment',           category: 'spa',                description: 'Cleansing and rejuvenating facial.' },
  { slug: 'botox',                  name: 'Botox',                      category: 'medical-aesthetics', description: 'Anti-wrinkle botulinum toxin injections.' },
  { slug: 'dermal-fillers',         name: 'Dermal Fillers',             category: 'medical-aesthetics', description: 'Lip and face enhancement with dermal fillers.' },
  { slug: 'laser-hair-removal',     name: 'Laser Hair Removal',         category: 'medical-aesthetics', description: 'Permanent laser hair removal treatment.' },
  { slug: 'physiotherapy-session',  name: 'Physiotherapy Session',      category: 'physiotherapy',      description: 'Assessment and treatment by a physiotherapist.' },
  { slug: 'sports-massage',         name: 'Sports Massage',             category: 'physiotherapy',      description: 'Sports injury and muscle recovery massage.' },
  { slug: 'personal-training',      name: 'Personal Training',          category: 'fitness',            description: 'One-to-one personal training session.' },
  { slug: 'tattoo-session',         name: 'Tattoo Session',             category: 'tattoo',             description: 'Custom tattoo design and application.' },
  { slug: 'piercing',               name: 'Piercing',                   category: 'tattoo',             description: 'Safe and professional body piercing.' },
  { slug: 'dog-grooming',           name: 'Dog Grooming',               category: 'pet-grooming',       description: 'Full groom for dogs of all breeds.' },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export type SeoBlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
};

export const seoBlogPosts: SeoBlogPost[] = [
  { slug: 'best-hair-salons-in-antalya',       title: 'Best Hair Salons in Antalya 2025',             description: 'Discover the top-rated hair salons in Antalya.',            publishedAt: '2025-01-10' },
  { slug: 'best-hair-salons-in-istanbul',      title: 'Best Hair Salons in Istanbul 2025',            description: 'Top hair salons in Istanbul for every budget.',             publishedAt: '2025-01-15' },
  { slug: 'best-barbers-in-london',            title: 'Best Barbers in London 2025',                  description: 'Find the best barbers across London neighbourhoods.',       publishedAt: '2025-01-20' },
  { slug: 'how-to-choose-a-barber',            title: 'How to Choose a Barber',                       description: 'Tips for finding the right barber for your style.',         publishedAt: '2025-02-01' },
  { slug: 'what-is-medical-aesthetics',        title: 'What Is Medical Aesthetics?',                  description: 'A guide to medical aesthetic treatments.',                  publishedAt: '2025-02-10' },
  { slug: 'benefits-of-massage-therapy',       title: 'Benefits of Massage Therapy',                  description: 'Why regular massage is good for mind and body.',            publishedAt: '2025-02-20' },
  { slug: 'nail-trends-2025',                  title: 'Nail Trends 2025',                             description: 'The hottest nail art and colour trends this year.',         publishedAt: '2025-03-01' },
  { slug: 'best-spas-in-dubai',               title: 'Best Spas in Dubai 2025',                      description: 'Luxury spa experiences in Dubai.',                         publishedAt: '2025-03-10' },
  { slug: 'laser-hair-removal-guide',          title: 'Laser Hair Removal: Complete Guide',           description: 'Everything you need to know before your first session.',   publishedAt: '2025-03-15' },
  { slug: 'how-to-find-a-physiotherapist',     title: 'How to Find a Good Physiotherapist',          description: 'What to look for when booking physiotherapy.',             publishedAt: '2025-03-20' },
  { slug: 'best-nail-salons-in-antalya',       title: 'Best Nail Salons in Antalya',                  description: 'Top nail studios in Antalya for manicures and pedicures.', publishedAt: '2025-04-01' },
  { slug: 'tattoo-aftercare-guide',            title: 'Tattoo Aftercare: Everything You Need to Know', description: 'How to look after your tattoo properly.',                  publishedAt: '2025-04-05' },
  { slug: 'cheap-massage-near-me',             title: 'How to Find Affordable Massage Near You',      description: 'Find quality massage at the best price.',                  publishedAt: '2025-04-10' },
  { slug: 'top-rated-barbers-near-me',         title: 'How to Find Top Rated Barbers Near You',       description: 'Use Randevu.co to find and book the best barbers.',        publishedAt: '2025-04-12' },
];
