import type { Service, GalleryItem, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'Terme Yazıcı Nakliyat',
  fullName: 'Terme Yazıcı Profesyonel Evden Eve Nakliyat ve Asansör Kiralama Merkezi',
  slogan: 'Terme, Çarşamba ve Samsun Evden Eve Güvenli Taşımacılık & Asansör Kiralama',
  phonePrimary: '0544 674 33 55',
  phonePrimaryRaw: '05446743355',
  whatsappNumber: '905446743355',
  whatsappDisplay: '0544 674 33 55',
  address: 'Fenk Mah. Çarşamba Cad. No: 18, Terme / Samsun',
  email: 'info@termeyazicinakliyat.com',
  workingHours: 'Pazartesi - Pazar: 07:00 - 22:00',
  regions: ['Terme', 'Çarşamba', 'Salıpazarı', 'Ünye', 'Samsun (İlkadım, Atakum, Canik)', 'Tekkeköy', 'Ayvacık', 'Tüm Türkiye Şehirlerarası'],
  siteUrl: 'https://www.termeyazicinakliyat.com.tr'
};

export const SERVICES: Service[] = [
  {
    id: 'evden-eve',
    title: 'Evden Eve Nakliyat',
    description: 'Terme, Çarşamba ve çevre ilçelerde evinizi anahtar teslim, ambalajlı ve marangozlu ekiplerimizle sıfır stresle yeni adresinize taşıyoruz.',
    iconName: 'Home',
    image: '/images/foto.jpeg',
    features: ['Deneyimli marangoz ustası', 'Özel balonlu koruyucu muhafaza', 'Tam kapsamlı nakliyat sözleşmesi', 'Oda oda düzenli yerleştirme'],
    popular: true
  },
  {
    id: 'asansorlu-tasima',
    title: 'Mobil Asansörlü Taşımacılık',
    description: 'Yüksek katlı binalarda eşyaların çizilmesini ve bina sakinlerinin rahatsız olmasını önleyen hidrolik dikey yük asansörü hizmetimiz.',
    iconName: 'Layers',
    image: '/images/asansor2.jpeg',
    features: ['25. kata kadar dikey erişim', 'Merdiven hasarlarını tamamen önler', 'Zaman tasarrufu ve emniyet', 'Site yönetimi dostu sessiz operasyon'],
    popular: true
  },
  {
    id: 'asansor-kiralama',
    title: 'Kiralık Eşya Asansörü',
    description: 'Terme ve Çarşamba genelinde inşaat ustaları, mobilyacılar ve bireysel ihtiyaçlar için operatörlü mobil eşya asansörü kiralama.',
    iconName: 'Building2',
    image: '/images/asansor.jpeg',
    features: ['Saatlik, günlük esnek kiralama', 'Uzman sertifikalı operatör desteği', 'Dar sokaklara uygun mobil araç', 'Yüksek taşıma kapasitesi'],
    popular: true
  },
  {
    id: 'sehirlerarasi',
    title: 'Şehirlerarası Nakliyat',
    description: 'Terme merkezli olarak Samsun ve Karadeniz’den Türkiye’nin tüm vilayetlerine kapalı çelik kasa araçlarla güvenli sevkıyat.',
    iconName: 'Truck',
    image: '/images/kamyon.jpeg',
    features: ['Araç takip sistemiyle yol izleme', 'Gününde ve saatinde teslim güvencesi', 'Kaskolu şehirlerarası taşımacılık', 'Parça veya komple ev seçeneği'],
    popular: false
  },
  {
    id: 'ambalajlama',
    title: 'Profesyonel Ambalajlama',
    description: 'Kırılacak mutfak eşyalarından beyaz eşyalara kadar kalın patpat naylon ve kraft kolileme ile hasarsız koruma.',
    iconName: 'Package',
    image: '/images/paketleme2.jpeg',
    features: ['Birinci sınıf ambalaj sarf malzemesi', 'Cam ve porselen için özel separatörler', 'Askılı giysi taşıma dolapları', 'Detaylı etiketleme ve numaralandırma'],
    popular: false
  },
  {
    id: 'ofis-tasima',
    title: 'Ofis ve İşyeri Taşıma',
    description: 'Kurumsal büro mobilyaları, arşiv klasörleri ve hassas ofis elektroniğini iş kaybı yaşatmadan hafta sonu veya gece taşıyoruz.',
    iconName: 'Building2',
    image: '/images/yazicinakliyat2.jpeg',
    features: ['Sistemli arşiv numaralandırma', 'Bilgisayar ve sunuculara özel koruma', 'Mesai dışı taşınma kolaylığı', 'Kurumsal faturalı ve sözleşmeli'],
    popular: false
  },
  {
    id: 'parca-esyasi',
    title: 'Parça Eşya Taşımacılığı',
    description: 'Birkaç parça mobilya, çeyiz veya tekil beyaz eşyalarınız için ekonomik paylaşımlı nakliyat imkanı.',
    iconName: 'Box',
    image: '/images/paketleme3.jpeg',
    features: ['Ekonomik paylaşımlı araç fiyatı', 'Terme - Çarşamba - Samsun düzenli hat', 'Hızlı ve güvenli teslimat', 'Kapıdan alıp adrese çıkarma'],
    popular: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Yazıcı Nakliyat Asansörlü Araç',
    category: 'asansor',
    image: '/images/asansor2.jpeg',
    description: '25. katta bina dışından yüksek tonajlı asansörlü nakliyat operasyonumuz.'
  },
  {
    id: '2',
    title: 'Özel Balonlu Ambalajlama',
    category: 'ambalaj',
    image: '/images/foto2.jpeg',
    description: 'Koltuk takımı ve beyaz eşyaların patpat ile sıfır hasar paketlemesi.'
  },
  {
    id: '3',
    title: 'Kapalı Kasa Nakliye Kamyonumuz',
    category: 'araclar',
    image: '/images/kamyon2.jpeg',
    description: 'Hijyenik ahşap kaplamalı, çelik kasa evden eve taşıma aracımız.'
  },
  {
    id: '4',
    title: 'Terme Evden Eve Taşıma',
    category: 'tasima',
    image: '/images/foto.jpeg',
    description: 'Terme Fenk bölgesinde site içi asansörlü nakliyat çalışması.'
  },
  {
    id: '5',
    title: 'Çarşamba Asansör Kurulumu',
    category: 'asansor',
    image: '/images/asansoryukardancekim.jpeg',
    description: 'Çarşamba dar sokaklarda dikey dış cephe nakliye asansörü.'
  },
  {
    id: '6',
    title: 'Araç İçi İstifleme',
    category: 'araclar',
    image: '/images/kamyonici.jpeg',
    description: 'Eşyalarınızın sarsıntısız taşınması için özel dizayn edilmiş araç içi istifleme.'
  }
];

export const WHY_US_REASONS = [
  {
    title: 'Yerel Saha Hakimiyeti (Terme & Çarşamba)',
    desc: 'Terme’nin cadde yapısını, sahil kesimini ve çok katlı sitelerini adım adım biliyor, operasyonu dakikalar içinde planlıyoruz.',
    icon: 'MapPin'
  },
  {
    title: 'Kiralık ve Mobil Dış Cephe Asansörü',
    desc: 'Bina merdivenlerini ve site asansörlerini meşgul etmeden, 25. kata kadar güvenli hidrolik raylı sistemle transfer.',
    icon: 'Zap'
  },
  {
    title: '%100 Resmi Kasko ve Hasarsızlık Teminatı',
    desc: 'Eşyalarınız araçlarımıza yüklendiği andan montaj bitimine kadar tam poliçe güvencesiyle taşınır.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Profesyonel Mobilya ve Montaj Ekibi',
    desc: 'Yatak odası, dolap ve modüler mobilyalarınız usta marangozlarımız tarafından sökülüp yeni evinizde eksiksiz kurulur.',
    icon: 'Wrench'
  },
  {
    title: 'Avrupa Standartlarında Koruyucu Ambalaj',
    desc: 'Hassas cam eşyalardan beyaz eşyaya kadar havalı naylon, kraft kağıt ve streç koruma ile çizilmeye son.',
    icon: 'PackageCheck'
  },
  {
    title: 'Net Fiyat Sözü (Sürpriz Masrafsız)',
    desc: 'Taşınma öncesi netleştirilen keşif fiyatı haricinde işlem günü asla sürpriz ek ücret talep edilmez.',
    icon: 'BadgePercent'
  }
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mustafa K.',
    location: 'Terme, Samsun',
    rating: 5,
    comment: 'Terme Fenk Mahallesindeki 4. kat dairemizi Atakum\'a taşıdılar. Asansör kurulumu çok hızlıydı, mobilyalarda tek bir çizik bile olmadı. Teşekkürler Yazıcı Nakliyat.',
    date: '15 Mart 2026',
    serviceType: 'Asansörlü Evden Eve',
    status: 'approved'
  },
  {
    id: '2',
    name: 'Emre Y.',
    location: 'Çarşamba, Samsun',
    rating: 5,
    comment: 'İnşaatımızın 6. katına malzeme çekmek için saatlik mobil asansör kiraladık. Operatör arkadaş son derece dikkatli ve profesyoneldi. Kesinlikle tavsiye ederim.',
    date: '28 Şubat 2026',
    serviceType: 'Mobil Asansör Kiralama',
    status: 'approved'
  },
  {
    id: '3',
    name: 'Ayşe B.',
    location: 'Terme / Çay Mah.',
    rating: 5,
    comment: 'Ev eşyalarımızın paketlenmesi ve marangozluk işlemleri harikaydı. Taşınma günü tam saatinde geldiler, hiçbir sürpriz masraf çıkarmadılar.',
    date: '12 Ocak 2026',
    serviceType: 'Ambalajlı & Marangozlu',
    status: 'approved'
  },
  {
    id: '4',
    name: 'Hakan D.',
    location: 'Ünye - Terme',
    rating: 5,
    comment: 'Ünye\'den Terme\'ye evimizi taşıdık. 25. kata çıkabilen asansörleri sayesinde hem bina içi kimse rahatsız olmadı hem de çok kısa sürede bitti.',
    date: '4 Ocak 2026',
    serviceType: 'Evden Eve Nakliyat',
    status: 'approved'
  }
];
