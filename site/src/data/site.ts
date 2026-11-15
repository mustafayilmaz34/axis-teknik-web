// Tüm içerik: docs/kaynak/mevcut-site-icerik-envanteri.md ve docs/gereksinimler/03 kaynaklıdır.
// Yeni bilgi eklemeden önce müşteriden teyit alın (docs/acik-sorular.md).

export const company = {
  name: 'Axis Teknik',
  tagline: 'Elektrik–Mekanik Taahhüt ve Yangın Sistemleri',
  // Logodaki alt yazı; header'da okunur metin olarak gösterilir (logo-mark.png bu satır olmadan kırpıldı)
  // Misyon/vizyon: eski site metninden hizmet odaklı uyarlandı, müşteri onayı bekliyor (acik-sorular B1)
  mission: 'Elektrik, mekanik ve yangın güvenliği alanlarında can ve mal güvenliğini koruyan sistemler tasarlamak, kurmak ve bakımını yapmak.',
  vision: "Türkiye, Avrupa ve Orta Doğu'da, sunduğu teknoloji ve hizmetle tercih edilen bir kuruluş olmak.",
  logoTagline: ['Elektrik Elektronik Yangın Algılama ve', 'Mekanik Yangın Söndürme Sistemleri'],
  founded: 2010,
  address: 'Velibaba Mah. Mimar Sinan Cad. San. Sit. B1 No:15/5-8 Pendik / İstanbul',
  phone: { label: '0216 307 18 62', href: 'tel:+902163071862' },
  phone2: { label: '0216 307 18 49', href: 'tel:+902163071849' },
  mobile: { label: '0507 201 24 25', href: 'tel:+905072012425' },
  whatsapp: {
    label: '0507 201 24 25',
    href: 'https://wa.me/905072012425?text=' + encodeURIComponent('Merhaba, Axis Teknik web sitesinden yazıyorum.'),
  },
  email: 'info@axisteknik.com',
  // Form servisi (ör. Formspree) adresi girilirse form oraya gönderilir; boşsa e-posta istemcisi açılır.
  formEndpoint: '',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Velibaba+Mah.+Mimar+Sinan+Cad.+Pendik+%C4%B0stanbul',
};

export const nav = [
  { label: 'Hizmetler', href: '/hizmetler/' },
  { label: 'Referanslar', href: '/referanslar/' },
  { label: 'Hakkımızda', href: '/hakkimizda/' },
  { label: 'İletişim', href: '/iletisim/' },
];

export type ServiceGroup = {
  id: string;
  title: string;
  icon: 'electrical' | 'mechanical' | 'fire' | 'design';
  /** public/images/services/ altındaki görsel (kayıt: docs/gorsel-kayit.md) */
  image: { src: string; alt: string };
  summary: string;
  sections: { title: string; items: string[] }[];
};

export const services: ServiceGroup[] = [
  {
    id: 'elektrik-taahhut',
    image: { src: '/images/services/elektrik.webp', alt: 'Elektrik kumanda ve izleme panolarının bulunduğu kontrol odası' },
    title: 'Elektrik Taahhüt',
    icon: 'electrical',
    summary:
      'Orta gerilim, alçak gerilim, zayıf akım, otomasyon ve enstrümantasyon sistemlerinin kurulumu, testi ve devreye alınması.',
    sections: [
      {
        title: 'Orta Gerilim Sistemleri',
        items: [
          'Havai ve yeraltı orta gerilim dağıtım kablolaması',
          'Orta gerilim trafoları',
          'Orta gerilim hücreleri',
          'Orta gerilim jeneratörleri',
          'Test ve devreye alma hizmetleri',
          'Enerji müsaade belgesi temini ve elektrik idaresi kabul işleri',
        ],
      },
      {
        title: 'Alçak Gerilim Sistemleri',
        items: [
          'Busbar sistemleri',
          'Enerji dağıtım kablolaması',
          'Alçak gerilim dağıtım, MCC ve aydınlatma panoları',
          'Kompanzasyon sistemleri',
          'Kablo tavaları',
          'İç ve dış mekân aydınlatması',
          'Cephe aydınlatması',
          'Acil durum aydınlatması',
          'UPS sistemleri',
          'Alçak gerilim jeneratörleri',
          'Yıldırımdan korunma ve topraklama',
        ],
      },
      {
        title: 'Zayıf Akım Sistemleri',
        items: [
          'Yangın algılama ve alarm sistemleri',
          'Acil anons sistemleri',
          'Karbonmonoksit algılama sistemleri',
          'CCTV sistemleri',
          'SMATV ve IPTV sistemleri',
          'Data ve ses sistemleri',
          'Otopark kontrol sistemleri',
          'Merkezi saat sistemleri',
          'Hemşire çağrı sistemleri',
          'Kapı ve interkom sistemleri',
          'Profesyonel ses ve görüntü sistemleri',
        ],
      },
      {
        title: 'Otomasyon ve Enstrümantasyon',
        items: [
          'SCADA ve enerji izleme sistemleri',
          'Enerji ve endüstriyel enstrümantasyon',
          'Bina otomasyon ve yönetim sistemleri',
          'Aydınlatma otomasyon sistemleri',
          'Elektrik kullanım izleme ve faturalandırma sistemleri',
          'Isı izleme sistemi montajı',
        ],
      },
    ],
  },
  {
    id: 'mekanik-taahhut',
    image: { src: '/images/services/mekanik.webp', alt: 'Yalıtımlı mekanik tesisat boruları ve manometre' },
    title: 'Mekanik Taahhüt',
    icon: 'mechanical',
    summary: 'Isıtma, soğutma, havalandırma (HVAC) ve sıhhi tesisat sistemlerinin kurulumu.',
    sections: [
      {
        title: 'HVAC Sistemleri',
        items: [
          'Isıtma ve soğutma sistemleri',
          'Havalandırma sistemleri',
          'Hava kanalı imalatı ve montajı',
          'Pompa istasyonları',
          'Soğuk odalar',
          'Hijyenik odalar',
          'Değişken debili klima (VRF) sistemleri',
        ],
      },
      {
        title: 'Sıhhi Tesisat Sistemleri',
        items: [
          'Sıhhi tesisat ekipmanları',
          'Kullanma suyu basınçlandırma ve dağıtım sistemleri',
          'Sıcak su basınçlandırma ve dağıtım sistemleri',
          'Pis su tesisatı',
          'Yağmur suyu tesisatı',
          'Arıtma ve yumuşatma sistemleri',
          'Bahçe sulama sistemleri',
        ],
      },
    ],
  },
  {
    id: 'yangin-sistemleri',
    image: { src: '/images/services/yangin.webp', alt: 'Yangın tesisatında kırmızı kollu vanalar' },
    title: 'Yangın Sistemleri',
    icon: 'fire',
    summary:
      'Yangın algılama ve alarm; gazlı, sulu ve köpüklü söndürme sistemlerinde tasarım, montaj, devreye alma ve bakım.',
    sections: [
      {
        title: 'Algılama ve Koruma',
        items: [
          'Yangın algılama ve alarm sistemleri',
          'Gazlı söndürme sistemleri (FM200, CO2, inert gaz)',
          'Sulu söndürme sistemleri (sprinkler, yangın dolabı, hidrant)',
          'Köpüklü söndürme sistemleri',
          'Yangın tesisatı pompa istasyonları',
          'Duman tahliye sistemleri',
          'Periyodik bakım, kontrol ve testler',
        ],
      },
    ],
  },
  {
    id: 'tasarim-ve-projelendirme',
    image: { src: '/images/services/tasarim.webp', alt: 'Mühendisler tesisat planını birlikte inceliyor' },
    title: 'Tasarım ve Projelendirme',
    icon: 'design',
    summary:
      'Alçak gerilim, orta gerilim, zayıf akım, otomasyon, HVAC, sıhhi tesisat ve yangın sistemleri için tasarım.',
    sections: [
      {
        title: 'Tasarım Hizmetleri',
        items: [
          'Alçak gerilim sistem tasarımı',
          'Orta gerilim sistem tasarımı',
          'Zayıf akım ve otomasyon sistem tasarımı',
          'HVAC, sıhhi tesisat ve yangın sistemleri tasarımı',
        ],
      },
    ],
  },
];

// Yangın söndürme sistemleri açıklamaları (eski "Ürünler" sayfalarından, düzeltilmiş).
export const fireSystems = [
  {
    id: 'gazli-sondurme',
    title: 'Gazlı Söndürme Sistemleri',
    text: [
      'Söndürme sonrasında iz bırakmaması ve korunan hacmin hemen yeniden kullanılabilmesi nedeniyle gazlı söndürme sistemleri sıkça tercih edilir. En yaygın kullanılanlar FM200, CO2 ve inert (argon) gazlı sistemlerdir.',
      'Her sistemin uygulama yerine göre avantajları ve sınırları vardır; mahallin özelliklerine ve şartnameye göre en uygun çözümü belirliyoruz. Montaj, devreye alma ve bakım işlemlerini NFPA kurallarına veya uluslararası standartlara göre yapıyoruz.',
    ],
  },
  {
    id: 'sulu-sondurme',
    title: 'Sulu Söndürme Sistemleri',
    text: [
      'Sprinkler, yangın dolabı, hidrant ve diğer sulu söndürme sistemlerini mühendislik birimimiz tasarlar; montaj, bakım ve süpervizörlüğünü üstleniriz. Hidrolik hesap ve projelendirmede VdS (Almanya) onaylı hesap programları kullanılır.',
      'Tasarımlarda öncelikle Binaların Yangından Korunması Hakkında Yönetmelik esas alınır; yönetmeliğin yetersiz kaldığı durumlarda NFPA ve EN standartları uygulanır. Montaj, periyodik kontrol ve testler kendi personelimizce yapılır.',
    ],
  },
  {
    id: 'kopuklu-sondurme',
    title: 'Köpüklü Söndürme Sistemleri',
    text: [
      'Sentetik, protein bazlı, film oluşturucu ve alkole dayanıklı çeşitleri bulunan köpüklü sistemler, özellikle yakıt ve yanıcı sıvı yangınlarında kullanılır. Manuel veya otomatik olarak devreye alınabilir; sprinkler, yangın dolabı, köpük monitörü ve köpük jeneratörü sistemlerinde uygulanır.',
      'Başlıca kullanım alanları: akaryakıt, kimya, ilaç ve gıda tesisleri; uçak ve helikopter hangarları; akaryakıt dolum istasyonları; rafineriler; tersane ve marinalar.',
    ],
  },
];

export const sectors = [
  'Sanayi',
  'Sağlık',
  'Otel',
  'Enerji ve Altyapı',
  'Telekom ve Bilişim',
  'Lojistik ve Havacılık',
  'Kamu ve Savunma',
] as const;
export type Sector = (typeof sectors)[number];

export type Reference = {
  title: string;
  scope: string;
  sector: Sector;
  location: string;
  featured?: boolean;
};

// 19 referans — tarihler müşteri teyidi gelene kadar gösterilmez (acik-sorular C1).
export const references: Reference[] = [
  { title: 'Eti Bakır Mazıdağı Fosfat Tesisi', scope: 'Elektrik taahhüt işleri', sector: 'Sanayi', location: 'Mardin', featured: true },
  { title: 'Türk Telekom Santralleri', scope: 'Yangın algılama ve FM200 söndürme sistemleri', sector: 'Telekom ve Bilişim', location: 'Türkiye geneli', featured: true },
  { title: 'Medical Park Hastaneleri', scope: 'Yangın sistemleri bakımı ve yeni kurulumlar', sector: 'Sağlık', location: 'Türkiye geneli', featured: true },
  { title: 'Konya Şeker Fabrikası', scope: 'Bakım-onarım ve yangın söndürme sistemleri', sector: 'Sanayi', location: 'Konya', featured: true },
  { title: 'Ergani Devlet Hastanesi', scope: 'Otomatik gazlı söndürme sistemleri', sector: 'Sağlık', location: 'Diyarbakır', featured: true },
  { title: 'Hilton Otel Sivas', scope: 'Otomatik gazlı söndürme sistemleri', sector: 'Otel', location: 'Sivas', featured: true },
  { title: 'Torku', scope: 'Pompa dairesi, sulu ve FM200 söndürme sistemleri', sector: 'Sanayi', location: 'Konya' },
  { title: 'Kartal Halı', scope: 'Yangın sistemleri kurulumu ve bakımı', sector: 'Sanayi', location: 'Gaziantep' },
  { title: 'Kaplan Kardeşler', scope: 'Yangın sistemleri kurulumu ve bakımı', sector: 'Sanayi', location: 'Gaziantep' },
  { title: 'Efa Bilişim', scope: 'Yangın söndürme sistemleri ve proje desteği', sector: 'Telekom ve Bilişim', location: 'Kahramanmaraş' },
  { title: 'Cihan Metal', scope: 'CO2 ve sulu söndürme sistemleri, altyapı çalışmaları', sector: 'Sanayi', location: 'İstanbul' },
  { title: 'İGDAŞ', scope: 'Yangın algılama ve otomatik gazlı söndürme sistemleri', sector: 'Enerji ve Altyapı', location: 'İstanbul' },
  { title: 'ABD Bağdat Hava Üssü', scope: 'Elektrik, altyapı ve gazlı söndürme sistemleri', sector: 'Kamu ve Savunma', location: 'Bağdat, Irak' },
  { title: 'Sheraton Otel Batum', scope: 'Otomatik gazlı söndürme sistemleri', sector: 'Otel', location: 'Batum, Gürcistan' },
  { title: 'THY Opet', scope: 'Otomatik köpüklü söndürme sistemleri', sector: 'Lojistik ve Havacılık', location: 'İstanbul' },
  { title: 'Üsküdar Devlet Hastanesi', scope: 'Yangın algılama ve gazlı söndürme sistemleri', sector: 'Sağlık', location: 'İstanbul' },
  { title: 'DHL', scope: 'Otomatik gazlı söndürme sistemleri', sector: 'Lojistik ve Havacılık', location: 'İstanbul' },
  { title: 'Ak Gıda', scope: 'Yangın algılama ve otomatik gazlı söndürme sistemleri', sector: 'Sanayi', location: 'Sakarya' },
  { title: 'Som Ambalaj', scope: 'Yangın algılama ve CO2 söndürme sistemi', sector: 'Sanayi', location: 'Karaman' },
];
