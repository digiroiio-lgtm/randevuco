// ─── Yardım Merkezi — Türkçe veri ────────────────────────────────────────────

export type YardimKategori = {
  slug: string;
  label: string;
  icon: string;
  aciklama: string;
  makaleler: { slug: string; baslik: string }[];
};

export type SSSItem = {
  soru: string;
  cevap: string;
};

export const yardimKategorileri: YardimKategori[] = [
  {
    slug: 'randevu',
    label: 'Randevu Yardımı',
    icon: '📅',
    aciklama: 'Randevu alma, değiştirme ve iptal etme hakkında bilmeniz gereken her şey.',
    makaleler: [
      { slug: 'nasil-randevu-alinir',      baslik: 'Randevu nasıl alınır?' },
      { slug: 'randevu-iptali',            baslik: 'Randevu nasıl iptal edilir?' },
      { slug: 'randevu-degistirme',        baslik: 'Randevu nasıl değiştirilir?' },
      { slug: 'onay-maili-gelmedi',        baslik: 'Onay e-postası gelmiyor' },
      { slug: 'randevuya-gelmeme',         baslik: 'Randevuma gelmesem ne olur?' },
    ],
  },
  {
    slug: 'odemeler',
    label: 'Ödemeler ve İadeler',
    icon: '💳',
    aciklama: 'Ödemeler, ücretler, iadeler ve faturalama hakkında sorular.',
    makaleler: [
      { slug: 'iade-nasil-yapilir',        baslik: 'İadeler nasıl çalışır?' },
      { slug: 'odeme-yontemleri',          baslik: 'Hangi ödeme yöntemleri kabul edilir?' },
      { slug: 'cift-odeme',                baslik: 'İki kez ücretlendirildim' },
      { slug: 'iade-suresi',               baslik: 'İade ne kadar sürer?' },
      { slug: 'fatura-makbuz',             baslik: 'Makbuz veya fatura nasıl alınır?' },
    ],
  },
  {
    slug: 'hesap',
    label: 'Hesap ve Giriş',
    icon: '👤',
    aciklama: 'Giriş yapma, hesap ayarları, şifre ve profil işlemleri.',
    makaleler: [
      { slug: 'sifre-sifirlama',           baslik: 'Şifre nasıl sıfırlanır?' },
      { slug: 'eposta-degistirme',         baslik: 'E-posta adresi nasıl değiştirilir?' },
      { slug: 'hesap-silme',               baslik: 'Hesabım nasıl silinir?' },
      { slug: 'giris-sorunu',              baslik: 'Hesabıma giriş yapamıyorum' },
      { slug: 'profil-guncelleme',         baslik: 'Profil bilgilerimi nasıl güncellerim?' },
    ],
  },
  {
    slug: 'isletme',
    label: 'İşletme Listeleme',
    icon: '🏪',
    aciklama: 'Randevu.co\'da salon ve güzellik işletmenizi yöneten işletme sahipleri için.',
    makaleler: [
      { slug: 'isletme-listeleme',         baslik: 'İşletmemi Randevu.co\'ya nasıl eklerim?' },
      { slug: 'musaitlik-yonetimi',        baslik: 'Uygunluk takviminizi nasıl yönetirsiniz?' },
      { slug: 'hizmet-ekleme',             baslik: 'Hizmetleri nasıl ekler veya düzenlerim?' },
      { slug: 'odeme-alma',                baslik: 'Ödemelerimi ne zaman ve nasıl alırım?' },
      { slug: 'yorumlara-yanit',           baslik: 'Müşteri yorumlarına nasıl yanıt veririm?' },
    ],
  },
  {
    slug: 'teknik',
    label: 'Teknik Sorunlar',
    icon: '🔧',
    aciklama: 'Uygulama hataları, web sitesi sorunları ve teknik destek.',
    makaleler: [
      { slug: 'uygulama-acilmiyor',        baslik: 'Uygulama veya web sitesi açılmıyor' },
      { slug: 'bildirim-sorunu',           baslik: 'Bildirim almıyorum' },
      { slug: 'odeme-hatasi',              baslik: 'Ödeme hatası alıyorum' },
      { slug: 'hata-bildirimi',            baslik: 'Hata nasıl bildirilir?' },
      { slug: 'onbellek-temizleme',        baslik: 'Önbellek ve çerezleri temizleme' },
    ],
  },
];

export const sssItems: SSSItem[] = [
  {
    soru: 'Randevumu nasıl iptal ederim?',
    cevap:
      'Randevunuzu iptal etmek için hesabınızda "Randevularım" bölümüne gidin, iptal etmek istediğiniz randevuyu bulun ve "Randevuyu İptal Et" düğmesine tıklayın. İptal politikaları işletmeye göre değişir; ayrıntılar için işletme sayfasını kontrol edin. İade (varsa) genellikle 5–10 iş günü içinde yapılır.',
  },
  {
    soru: 'İadeler nasıl çalışır?',
    cevap:
      'İade hakkı, işletmenin iptal politikasına bağlıdır. İadeye uygun olmanız durumunda tutar, orijinal ödeme yönteminize 5–10 iş günü içinde iade edilir. Anlaşmazlıklar için Yardım Merkezi üzerinden destek ekibimizle iletişime geçin.',
  },
  {
    soru: 'İşletmemi nasıl listeleyebilirim?',
    cevap:
      'Güzellik veya sağlık işletmenizi Randevu.co\'ya eklemek için /for-business sayfasını ziyaret edin ve işletme kayıt formunu doldurun. Ekibimiz başvurunuzu inceleyerek 2 iş günü içinde size dönüş yapacaktır.',
  },
  {
    soru: 'Hesap bilgilerimi nasıl değiştiririm?',
    cevap:
      'Hesabınıza giriş yaparak "Profil Ayarları" bölümünden adınızı, e-posta adresinizi, telefon numaranızı veya şifrenizi güncelleyebilirsiniz. Hesabınıza erişemiyorsanız giriş sayfasındaki "Şifremi Unuttum" bağlantısını kullanın.',
  },
  {
    soru: 'Salonla nasıl iletişime geçerim?',
    cevap:
      'Salonun iletişim bilgilerine işletme profil sayfasından ulaşabilirsiniz. Birçok salon Randevu.co platformu üzerinden mesaj almaktadır. İşletme sayfasına gidin ve "İletişim" ya da "Mesaj Gönder" seçeneğine tıklayın.',
  },
  {
    soru: 'Ödeme bilgilerim güvende mi?',
    cevap:
      'Evet. Tüm ödemeler, PCI DSS Seviye 1 sertifikalı sağlayıcı Stripe üzerinden işlenir. Randevu.co kart bilgilerinizi kaydetmez. Tüm işlemler TLS şifrelemesi ve gerektiğinde 3D Secure kimlik doğrulaması ile korunmaktadır.',
  },
  {
    soru: 'Başkası adına randevu alabilir miyim?',
    cevap:
      'Evet. Randevu formunu doldururken randevu için farklı bir isim girebilirsiniz. İşletmenin gerektiğinde ulaşabilmesi için sağlanan iletişim bilgilerinin erişilebilir olduğundan emin olun.',
  },
  {
    soru: 'İşletme randevumu iptal ederse ne olur?',
    cevap:
      'Bir işletme randevunuzu iptal ederse e-posta ve uygulama bildirimi aracılığıyla anında bilgilendirilirsiniz. Tam iade, orijinal ödeme yönteminize 5–10 iş günü içinde otomatik olarak yapılır.',
  },
];
