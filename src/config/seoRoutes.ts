export interface SeoRoute {
  slug: string;
  title: string;
  description: string;
  h1Text: string;
  subText: string;
  seoContent: string;
  sectionId: string;
  schemaType: 'LocalBusiness' | 'Service';
  ogImage: string;
  keywords: string;
}

export const seoRoutes: Record<string, SeoRoute> = {
  'terme': {
    slug: 'terme',
    title: 'Terme Evden Eve Nakliyat | Asansör Kiralama & Sigortalı Taşıma',
    description: 'Terme Fenk, Çay ve Yenidoğan mahallelerinde 25. kata kadar mobil asansörlü, %100 sigortalı evden eve nakliyat. Yazıcı Nakliyat ile anında sabit fiyat teklifi!',
    h1Text: 'Terme Evden Eve Nakliyat ve Asansör Kiralama',
    subText: 'Yazıcı Nakliyat güvencesiyle Terme merkezli profesyonel evden eve nakliyat, mobil dış cephe asansör kiralama ve şehirlerarası taşımacılık hizmeti sunuyoruz.',
    seoContent: `<div>
  <h2>Terme Evden Eve Nakliyat Hizmeti</h2>
  <p>Fenk, Çay, Yenidoğan ve Kozluk mahalleleri başta olmak üzere Terme nakliyat sektöründe yılların kazandırdığı tecrübe ile evden eve taşımacılık, ofis nakliyesi ve mobil asansör kiralama hizmetleri sunuyoruz. Terme merkezli faaliyet gösteren Yazıcı Nakliyat, modern araç filosu ve uzman personeliyle eşyalarınızı hasarsız ve garantili olarak yeni adresinize ulaştırır. Taşınma sürecinde mobilyalarınız marangozlarımız tarafından demonte edilir, kalın havalı naylonlarla sarılır ve kaskolu olarak taşınır.</p>
  <p>Terme asansörlü nakliyat hizmetimiz sayesinde dar merdiven boşlukları veya yüksek katlar engel olmaktan çıkar. 25. kata kadar ulaşabilen teleskopik hidrolik asansör sistemimizle eşyalarınız doğrudan balkon veya pencereden aracımıza yüklenir. Terme'de aynı zamanda müteahhitler, mobilyacılar ve bireysel ihtiyaçlar için saatlik veya günlük mobil asansör kiralama hizmeti sağlamaktayız.</p>
  <h3>Neden Terme Yazıcı Nakliyat?</h3>
  <ul>
    <li>Terme yerelinde hızlı keşif ve anında net fiyat garantisi</li>
    <li>Kapsamlı nakliyat emtia sigortası ile sıfır risk</li>
    <li>25. kata ulaşan son teknoloji mobil dış cephe yük asansörleri</li>
    <li>Avrupa standartlarında çift kat patpat ambalajlama ve hijyenik kolileme</li>
    <li>Usta marangozlar eşliğinde demonte ve kusursuz montaj desteği</li>
    <li>Şeffaf sözleşme, sürpriz ek maliyetsiz dürüst hizmet prensibi</li>
  </ul>
  <p>Terme evden eve nakliyat ve asansör kiralama talepleriniz için firmamızla 7/24 iletişime geçebilir, ücretsiz ekspertiz talep edebilirsiniz. Terme'den Samsun, Çarşamba, Ünye ve Türkiye'nin 81 iline güvenle taşının.</p>
</div>`,
    sectionId: 'anasayfa',
    schemaType: 'LocalBusiness',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'terme nakliyat, terme evden eve nakliyat, terme asansör kiralama, terme asansörlü nakliyat, terme ev taşıma',
  },
  'carsamba': {
    slug: 'carsamba',
    title: 'Çarşamba Evden Eve Nakliyat | Mobil Asansörlü & Sigortalı Taşıma',
    description: 'Çarşamba ve Terme genelinde 25. kata kadar mobil asansörlü, sözleşmeli ve garantili evden eve nakliyat. Yazıcı Nakliyat güvencesiyle hemen ücretsiz teklif alın.',
    h1Text: 'Çarşamba Evden Eve Nakliyat ve Taşımacılık',
    subText: 'Çarşamba ve çevresinde Yazıcı Nakliyat kalitesiyle güvenli, hızlı, ambalajlı ve marangozlu ev ve ofis taşımacılığı.',
    seoContent: `<div>
  <h2>Çarşamba Evden Eve Nakliyat Hizmeti</h2>
  <p>Çarşamba nakliyat pazarında kurumsal güvence ve modern teknoloji arayan müşterilerimize Yazıcı Nakliyat olarak kusursuz hizmet sunuyoruz. Çarşamba merkez, Kirazlıkçay, Orta Mahalle ve tüm kırsal mahallelerde evden eve taşımacılık, ofis nakliyesi ve asansör kiralama çözümleri üretiyoruz.</p>
  <p>Çarşamba asansörlü nakliyat çalışmalarımız ile yüksek katlı sitelerde taşınma işlemleri saatler içinde güvenle tamamlanmaktadır. Eşyalarınız bina içine sokulmadan, duvarlara ve kapılara değmeden dış cepheden indirilip yüklenir. Profesyonel paketleme ekibimiz beyaz eşyalardan antika mobilyalara kadar her parçayı özel koruyucu malzemelerle sarar.</p>
  <h3>Çarşamba Nakliyat Avantajlarımız</h3>
  <ul>
    <li>Çarşamba - Terme ve Samsun arası günlük hızlı seferler</li>
    <li>Yüksek katlı bloklar için mobil hidrolik asansör kurulumu</li>
    <li>Montaj ve demontajda uzman marangoz kadrosu</li>
    <li>Her taşıma öncesinde imzalanan sigortalı nakliye sözleşmesi</li>
    <li>Ekonomik fiyat tarifesi ve şeffaf ödeme koşulları</li>
  </ul>
  <p>Çarşamba evden eve taşımacılık ve asansör kiralama ihtiyaçlarınız için Yazıcı Nakliyat müşteri temsilcilerimize dilediğiniz zaman ulaşabilirsiniz.</p>
</div>`,
    sectionId: 'anasayfa',
    schemaType: 'LocalBusiness',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'çarşamba nakliyat, çarşamba evden eve nakliyat, çarşamba asansörlü nakliyat, çarşamba nakliye',
  },
  'unye': {
    slug: 'unye',
    title: 'Ünye Evden Eve Nakliyat | Terme - Ünye Arası Asansörlü Taşımacılık',
    description: 'Terme ile Ünye arasında eşyalarınız tek çizik almadan taşınsın. 25. kata mobil asansör, Avrupa standartlarında ambalajlama ve profesyonel ekip. Hemen arayın!',
    h1Text: 'Ünye Evden Eve Nakliyat ve Taşımacılık',
    subText: 'Terme ve Ünye aksında kesintisiz nakliyat seferleri, mobil asansör kiralama ve sigortalı ev taşımacılığı.',
    seoContent: `<div>
  <h2>Ünye Evden Eve Nakliyat Hizmeti</h2>
  <p>Ünye ve Terme bölgesi Karadeniz sahil şeridinde en yoğun taşınma trafiğine sahip güzergahlardan biridir. Yazıcı Nakliyat olarak Gölevi, Çamlık, Atatürk ve Kaledere mahalleleri başta olmak üzere tüm Ünye genelinde profesyonel nakliyat hizmeti vermekteyiz.</p>
  <p>Eşyalarınız avrupa standartlarında kalın havalı naylon patpat malzemelerle paketlenir, mobilyalarınız marangozlarımız tarafından demonte edilerek koruma altına alınır. Mobil dış cephe asansörlerimiz sayesinde dar sokaklarda ve yüksek katlarda dahi taşınma süreci zahmetsizce yönetilir.</p>
  <h3>Ünye Bölgesinde Sunduğumuz Hizmetler</h3>
  <ul>
    <li>Ünye evden eve asansörlü taşımacılık</li>
    <li>Ünye - Terme - Samsun arası parça eşya ve parsiyel yük transferi</li>
    <li>Ofis, büro ve işyeri nakliyatı</li>
    <li>İnşaat ve mobilya sektörüne yönelik mobil asansör kiralama</li>
  </ul>
</div>`,
    sectionId: 'anasayfa',
    schemaType: 'LocalBusiness',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'ünye nakliyat, ünye evden eve nakliyat, ünye asansörlü nakliyat, terme ünye nakliyat',
  },
  'samsun': {
    slug: 'samsun',
    title: 'Samsun Evden Eve Nakliyat | İlkadım, Atakum, Terme Geneli Taşımacılık',
    description: 'Samsun merkez ve tüm ilçelerine kaskolu, asansörlü evden eve nakliyat. Atakum, İlkadım ve Terme arası günlük araç filomuzla hizmetinizdeyiz.',
    h1Text: 'Samsun Evden Eve Nakliyat ve Taşımacılık',
    subText: 'Samsun genelinde Atakum, İlkadım, Canik, Tekkeköy, Çarşamba ve Terme ilçelerinde kurumsal taşımacılık çözümleri.',
    seoContent: `<div>
  <h2>Samsun Evden Eve Nakliyat Hizmeti</h2>
  <p>Samsun evden eve nakliyat sektöründe modern taşıma standartlarını teknolojiyle buluşturuyoruz. Atakum sahil şeridindeki rezidanslardan İlkadım'ın dik yokuşlu sokaklarına kadar her bölgenin yapısına uygun araç ve dış cephe asansör filomuz mevcuttur.</p>
  <p>Yazıcı Nakliyat, Terme merkezli lojistik gücüyle Samsun genelinde yüzlerce memnun aileye anahtar teslim ev taşıma deneyimi yaşatmıştır. Eşyalarınız sözleşmeli ve sigortalı olarak taşınır, yeni evinizde mobilyalarınız kurulup yerleştirilir.</p>
  <h3>Samsun Nakliyat Hizmet Ağı</h3>
  <ul>
    <li>Atakum, İlkadım, Canik ve Tekkeköy asansörlü nakliyat</li>
    <li>Terme, Çarşamba, Salıpazarı ve Ayvacık ilçe taşımacılığı</li>
    <li>Samsun'dan Türkiye'nin 81 iline sigortalı şehirlerarası nakliyat</li>
  </ul>
</div>`,
    sectionId: 'anasayfa',
    schemaType: 'LocalBusiness',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'samsun nakliyat, samsun evden eve nakliyat, samsun asansörlü nakliyat, terme samsun nakliyat',
  },
  'fatsa': {
    slug: 'fatsa',
    title: 'Fatsa Evden Eve Nakliyat | Yazıcı Nakliyat Bölge Hizmeti',
    description: 'Terme, Çarşamba ve Fatsa hattında teleskopik asansörlü, garantili ve marangozlu evden eve taşımacılık hizmeti.',
    h1Text: 'Fatsa Nakliyat ve Taşımacılık Hizmeti',
    subText: 'Yazıcı Nakliyat güvencesiyle bölge genelinde profesyonel evden eve nakliyat ve asansörlü nakliye çözümleri.',
    seoContent: `<div>
  <h2>Fatsa Evden Eve Nakliyat</h2>
  <p>Yazıcı Nakliyat olarak Terme merkezli güçlü filomuz ile Fatsa ve çevre ilçelerde de profesyonel evden eve taşımacılık hizmeti sunuyoruz. Eşyalarınız çift kat ambalajlı, marangozlu ve sigortalı olarak taşınır.</p>
</div>`,
    sectionId: 'anasayfa',
    schemaType: 'LocalBusiness',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'fatsa nakliyat, fatsa evden eve nakliyat, terme fatsa nakliyat',
  },
  'ordu': {
    slug: 'ordu',
    title: 'Ordu Evden Eve Nakliyat | Yazıcı Nakliyat Bölge Hizmeti',
    description: 'Samsun - Ordu sahil şeridinde kaskolu, mobil asansörlü ve marangozlu evden eve taşımacılık hizmeti.',
    h1Text: 'Ordu Nakliyat ve Taşımacılık Hizmeti',
    subText: 'Yazıcı Nakliyat ile Samsun ve Ordu genelinde güvenilir, sigortalı ve hasarsız taşımacılık.',
    seoContent: `<div>
  <h2>Ordu Evden Eve Nakliyat</h2>
  <p>Yazıcı Nakliyat güvencesiyle Samsun - Ordu aksında kaliteli, sözleşmeli ve profesyonel nakliyat hizmeti vermekteyiz.</p>
</div>`,
    sectionId: 'anasayfa',
    schemaType: 'LocalBusiness',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'ordu nakliyat, ordu evden eve nakliyat, terme ordu nakliyat',
  },
};

export const serviceRoutes: Record<string, SeoRoute> = {
  'evden-eve': {
    slug: 'evden-eve',
    title: 'Terme Evden Eve Nakliyat | Anahtar Teslim Sigortalı Taşıma',
    description: 'Terme, Çarşamba ve Samsun genelinde anahtar teslim, ambalajlı ve marangozlu evden eve nakliyat. Eşyalarınız Yazıcı Nakliyat ile %100 güvende!',
    h1Text: 'Evden Eve Nakliyat Hizmeti',
    subText: 'Eşyalarınız özenle paketlenir, sigortalı olarak yeni adresinize teslim edilir. Marangozlu söküm ve montaj dahildir.',
    seoContent: `<div>
  <h2>Profesyonel Evden Eve Nakliyat Hizmeti</h2>
  <p>Evden eve nakliyat süreci doğru planlama ve profesyonel ekip gerektirir. Yazıcı Nakliyat olarak bu süreci sizin için konforlu bir deneyime dönüştürüyoruz. Terme, Çarşamba, Ünye ve Samsun başta olmak üzere tüm Karadeniz bölgesinde evden eve taşımacılık hizmeti sunuyoruz.</p>
  <p>Taşınma öncesinde eşyalarınızın tespiti yapılır ve net fiyat teklifi sunulur. Belirlenen gün ve saatte kapınıza gelen ekibimiz tüm mobilyalarınızı söker, özel ambalaj malzemeleriyle sarar ve dış cephe asansörümüzle aracımıza yükler. Yeni evinizde mobilyalarınız dilediğiniz odalara kurulur.</p>
  <h3>Evden Eve Nakliyat Aşamalarımız</h3>
  <ol>
    <li>Ekspertiz ve şeffaf fiyat teklifi</li>
    <li>Birinci sınıf malzemelerle ambalajlama ve paketleme</li>
    <li>Uzman marangoz ile mobilya demontajı</li>
    <li>Mobil dış cephe asansörü ile hasarsız yükleme</li>
    <li>Yeni adreste montaj, kurulum ve yerleşim</li>
    <li>Emtia nakliyat sigortası güvencesi</li>
  </ol>
</div>`,
    sectionId: 'hizmetler',
    schemaType: 'Service',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'evden eve nakliyat, terme evden eve, çarşamba evden eve, samsun evden eve nakliyat',
  },
  'asansorlu-nakliyat': {
    slug: 'asansorlu-nakliyat',
    title: 'Asansörlü Nakliyat | 25. Kata Mobil Dış Cephe Yük Asansörü',
    description: 'Bina içi merdiven hasarlarına son! Terme ve Samsun\'da 25. kata kadar çıkan hidrolik mobil asansörümüzle hızlı ve sıfır riskli nakliyat.',
    h1Text: 'Asansörlü Nakliyat Hizmeti',
    subText: 'Modern hidrolik teleskopik asansörlerimizle eşyalarınız merdiven görmeden, sıfır hasar riskiyle taşınır.',
    seoContent: `<div>
  <h2>Asansörlü Nakliyat Hizmeti</h2>
  <p>Yüksek katlı binalarda taşınmanın en güvenli yolu dış cephe yük asansörleridir. Yazıcı Nakliyat araç filomuzda yer alan 25. kata kadar erişimli mobil asansörlerimizle dar koridorlar ve merdiven dönemeçlerindeki çarpma ve çizilme riskini tamamen ortadan kaldırıyoruz.</p>
  <p>Terme, Çarşamba ve Samsun'da yüksek katlı apartman ve sitelerde saatler sürecek taşınma işlemleri asansör sistemimiz sayesinde dakikalar içinde güvenle tamamlanmaktadır.</p>
  <h3>Asansörlü Nakliyatın Avantajları</h3>
  <ul>
    <li>Mobilya ve beyaz eşyalarda sıfır çizilme ve hasar riski</li>
    <li>Bina içi asansör ve merdiven boşluklarının korunması</li>
    <li>Taşınma süresinin yarı yarıya kısalması</li>
    <li>Ağır hacimli eşyaların zahmetsizce transfer edilmesi</li>
  </ul>
</div>`,
    sectionId: 'hizmetler',
    schemaType: 'Service',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'asansörlü nakliyat, terme asansörlü nakliyat, samsun asansörlü taşıma, mobil yük asansörü',
  },
  'asansor-kiralama': {
    slug: 'asansor-kiralama',
    title: 'Terme Asansör Kiralama Merkezi | Saatlik & Günlük Mobil Asansör',
    description: 'Terme, Çarşamba, Salıpazarı ve Samsun genelinde inşaat, mobilya, cam balkon ve nakliyat işleri için operatörlü mobil asansör kiralama.',
    h1Text: 'Mobil Asansör Kiralama Merkezi',
    subText: '25. kata kadar uzanan teleskopik mobil yük asansörlerimiz deneyimli operatörlerimiz eşliğinde saatlik ve günlük kiralanır.',
    seoContent: `<div>
  <h2>Mobil Asansör Kiralama Hizmeti</h2>
  <p>Yazıcı Nakliyat olarak sadece ev taşımacılığı değil, bölgedeki inşaat firmaları, mobilya mağazaları, pencere ve cam balkon üreticileri, kiremit ve çatı ustaları için profesyonel mobil asansör kiralama hizmeti sunuyoruz.</p>
  <p>Terme, Çarşamba, Salıpazarı, Ayvacık, Ünye ve Samsun genelinde 25. kata kadar uzanabilen hidrolik teleskopik yük asansörlerimiz kendi uzman operatörümüzle birlikte adresinize gelir ve hızlıca kurulur.</p>
  <h3>Kimler İçin Uygundur?</h3>
  <ul>
    <li>Evini kendi imkanlarıyla taşımak isteyen vatandaşlar</li>
    <li>Yüksek katlara malzeme çıkaran inşaat ve tadilat ustaları</li>
    <li>Mobilya ve beyaz eşya teslimatı yapan mağazalar</li>
    <li>Güneş enerjisi, çatı ve izolasyon malzemesi taşıyan ekipler</li>
  </ul>
</div>`,
    sectionId: 'hizmetler',
    schemaType: 'Service',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'terme asansör kiralama, çarşamba mobil asansör kiralama, samsun yük asansörü kiralık, asansör kiralama merkezi',
  },
  'sehirlerarasi': {
    slug: 'sehirlerarasi',
    title: 'Şehirlerarası Nakliyat | Terme & Samsun\'dan 81 İle Güvenli Taşıma',
    description: 'Samsun ve Terme\'den İstanbul, Ankara, İzmir başta olmak üzere Türkiye\'nin 81 iline kapalı çelik kasalı araçlarla sigortalı şehirlerarası evden eve nakliyat.',
    h1Text: 'Şehirlerarası Nakliyat Hizmeti',
    subText: 'Kapalı çelik kasalı, süspansiyonlu araçlarımızla Türkiye genelinde sözleşmeli ve zamanında teslimat.',
    seoContent: `<div>
  <h2>Şehirlerarası Evden Eve Nakliyat</h2>
  <p>Şehirlerarası taşımacılık yüksek sorumluluk ve tecrübe gerektirir. Yazıcı Nakliyat olarak Samsun ve Terme bölgesinden Türkiye'nin her il ve ilçesine sigortalı ve garantili evden eve nakliyat hizmeti sağlamaktayız.</p>
  <p>Eşyalarınız uzun yol koşullarına uygun olarak çift kat sarılır, araç içinde özel sabitleme halatlarıyla sabitlenir. Sözleşmemizde belirtilen gün ve saatte teslimat yapılır.</p>
  <h3>Şehirlerarası Nakliyat Ayrıcalıkları</h3>
  <ul>
    <li>Kapsamlı yol ve nakliyat emtia sigortası</li>
    <li>Kapalı çelik kasalı, temiz ve bakımlı uzun yol araçları</li>
    <li>Varış adresinde asansörlü indirme ve marangozlu montaj desteği</li>
  </ul>
</div>`,
    sectionId: 'hizmetler',
    schemaType: 'Service',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'şehirlerarası nakliyat, terme şehirlerarası nakliye, samsun şehirlerarası evden eve nakliyat',
  },
  'ambalajlama': {
    slug: 'ambalajlama',
    title: 'Profesyonel Ambalajlama & Paketleme | Yazıcı Nakliyat',
    description: 'Kalın havalı naylon patpat, kraft kağıt ve özel koruma malzemeleriyle sıfır çizik garantili profesyonel eşya ambalajlama.',
    h1Text: 'Profesyonel Ambalajlama Hizmeti',
    subText: 'Koltuk takımları, beyaz eşyalar, TV ve kırılacak mutfak eşyalarınız hijyenik ambalajlarla sıfır hasar prensibiyle paketlenir.',
    seoContent: `<div>
  <h2>Profesyonel Ambalajlama ve Paketleme</h2>
  <p>Eşyalarınızın nakliye esnasında zarar görmemesinin bir numaralı kuralı doğru ambalajlamadır. Yazıcı Nakliyat olarak birinci sınıf balonlu naylon patpatlar, kraft kağıtlar, streç filmler ve dayanıklı koliler kullanıyoruz.</p>
  <p>Yatak ve koltuklar toz geçirmeyen özel kılıflarla sarılır, cam ve porselen eşyalar tek tek havalı ambalajlara sarılarak fıçılanır.</p>
</div>`,
    sectionId: 'hizmetler',
    schemaType: 'Service',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'ambalajlı nakliyat, terme eşya paketleme, profesyonel nakliyat ambalajı',
  },
  'ofis-tasima': {
    slug: 'ofis-tasima',
    title: 'Kurumsal Ofis ve İşyeri Taşımacılığı | Yazıcı Nakliyat',
    description: 'Terme ve Samsun genelinde şirket, büro, kamu kurumu ve işyeri nakliyatı. İş akışınız kesilmeden planlı ve gizlilik esaslı çalışma.',
    h1Text: 'Ofis ve İşyeri Taşıma Hizmeti',
    subText: 'Mesai saatlerinizi aksatmadan, hafta sonu veya akşam çalışma opsiyonlarıyla kurumsal nakliyat desteği.',
    seoContent: `<div>
  <h2>Kurumsal Ofis ve İşyeri Taşımacılığı</h2>
  <p>Ofis taşımacılığında hız, planlama ve evrak güvenliği esastır. Yazıcı Nakliyat olarak masa sistemleri, arşiv dolapları, elektronik cihazlar ve sunucuları barkodlayarak yeni adresinize eksiksiz taşıyoruz.</p>
</div>`,
    sectionId: 'hizmetler',
    schemaType: 'Service',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'ofis taşıma, terme işyeri nakliyat, kurumsal nakliyat samsun',
  },
  'parca-esya-tasima': {
    slug: 'parca-esya-tasima',
    title: 'Parça Eşya Taşımacılığı | Terme & Samsun Ekonomik Parsiyel Taşıma',
    description: 'Tek mobilya, beyaz eşya, öğrenci evi veya yazlık eşyaları için Terme - Samsun - Ünye hattında bütçe dostu parça nakliye.',
    h1Text: 'Parça Eşya Taşımacılığı',
    subText: 'Komple kamyon tutmanıza gerek kalmadan, aynı güzergahtaki parsiyel taşımalarla ekonomik ve hızlı nakliye.',
    seoContent: `<div>
  <h2>Ekonomik Parça Eşya Taşıma</h2>
  <p>Az miktardaki eşyalarınızı yüksek maliyetlere katlanmadan taşımak için parça eşya servisimizden yararlanabilirsiniz. Koltuk takımı, buzdolabı, çeyiz eşyası veya tek oda eşyalarınız özenle taşınır.</p>
</div>`,
    sectionId: 'hizmetler',
    schemaType: 'Service',
    ogImage: '/images/kamyon.jpeg',
    keywords: 'parça eşya taşıma, terme parça nakliye, samsun parça eşya',
  },
};
