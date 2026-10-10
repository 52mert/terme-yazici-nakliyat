# 🚀 TERME YAZICI NAKLİYAT — %100 KUSURSUZ SEO, ALTYAPI VE İZOLASYON PLANI
> **Proje:** `site1-nakliyat`  
> **Marka:** Terme Yazıcı Profesyonel Evden Eve Nakliyat ve Asansör Kiralama Merkezi  
> **Kısa Marka / Logo:** Yazıcı Nakliyat (`Y`)  
> **Hedef Bölge:** Samsun - Terme & Çarşamba, Salıpazarı, Ünye, Samsun Merkez  
> **Telefon:** `0544 674 33 55` | **WhatsApp:** `+90 544 674 33 55`  
> **Geçici Domain:** `https://www.termeyazicinakliyat.com.tr`

---

## 🛡️ MÜHENDİSLİK MUTABAKATI: GOOGLE NE GÖRÜR, NEYE CEZA KESER?

Google'ın WRS (Web Rendering Service), SpamBrain ve Local Search algoritmalarının patentli çalışma prensibine göre filtreleri tetikleyen ve güvenli kılan kurallar netleştirilmiştir:

### 🔴 %100 ZORUNLU OLAN 10 KRİTİK MADDE (ASLA TAVİZ VERİLMEYECEK)
1. **Sıfır Çapraz Linkleme (Zero Cross-Linking):** İki site arasında hiçbir şekilde birbirine link verilmeyecek.
2. **GA4 / GTM / Takip ID Ayrımı:** Terme sitesinde kesinlikle eski sitenin `G-XXXX` veya `GTM-XXXX` kodu bulunmayacak. Tamamen yeni ve bağımsız hesaba ait ID kullanılacak (veya açılana kadar boş bırakılacak).
3. **Görsel İzolasyonu (Perceptual Hash):** Eski sitedeki kamyonların ve logolu fotoğrafların hiçbiri kullanılmayacak. Terme sitesi için yeni, farklı ve telifsiz nakliyat/asansör görselleri konulacak.
4. **Metin & Cümle Kalıbı Özgünlüğü (N-Gram Testi):** Sadece ilçe ismi değiştirmek yasak! Cümle kalıpları, paragraf uzunlukları, başlık hiyerarşisi sıfırdan ve Terme'ye özel semantik anahtar kelimelerle yazılacak.
5. **Schema.org Tam İzolasyonu:** `@id`, `name`, `url`, `telephone`, `address`, `geo` (enlem/boylam) ve `sameAs` linkleri tamamen Terme Yazıcı Nakliyat'a ait olacak. Fatsa harita veya Instagram linkleri kesinlikle yer almayacak.
6. **Canonical URL İzolasyonu:** Tüm sayfalarda ve dinamik route'larda canonical etiketleri sadece Terme domainine bakacak.
7. **Supabase Projesi & .env Ayrımı:** İki işletmenin teklifleri, telefonları ve yorumları birbirine karışmasın diye ayrı proje olacak.
8. **Vercel Proje Ayrımı:** Bağımsız Vercel projesi ve bağımsız domain olarak deploy edilecek.
9. **Google Search Console & Business Profile:** Google Haritalar (İşletme Profili) Terme adresiyle açılacak.
10. **Render Edilmiş DOM Farklılığı (WRS):** Sayfa bloklarının sıralaması ve kart yerleşimleri farklılaştırılacak (Terme'de "Asansör Kiralama" öne çıkarılacak).

### 🟡 UYGULANACAK ÖNERİLEN FARKLILIKLAR (KATMA DEĞER)
* **Farklı Renk Paleti:** Ağa Nakliyat'ın kırmızısı yerine, Terme Yazıcı Nakliyat için **Lacivert / Canlı Mavi & Altın Sarısı / Turuncu** kurumsal renkleri kullanılacak. (Hem görsel kimlik ayrışacak hem de render edilen CSS tokenları değişecek).
* **Farklı Buton & Rozet Yerleşimleri:** Hero ve Neden Biz alanlarında blok sıralamaları değiştirilecek.
* **Özel Hizmet Sayfası:** Doğrudan rekabet avantajı sağlayacak olan `/hizmet/asansor-kiralama` sayfası ana vitrinde sunulacak.

### ⚪ VAKİT KAYBEDİLMEYECEK GEREKSİZ DETAYLAR (Google'ın Göremediği Şeyler)
* Component dosya isimleri (`Hero.tsx`, `Sidebar.tsx`)
* Klasör yapısı (`src/components/` vs `src/blocks/`)
* `package.json` içindeki standart kütüphaneler (`react`, `lucide-react`, `tailwindcss`)
* Git commit geçmişi (Google'a git repo'su gitmez, dist bundle gider)

---

## 📋 FAZ 1: KİMLİK, TEKNİK SEO & YAPISAL İZOLASYON (5 MİKRO FAZ — TAMAMLANDI ✅)

* [x] **Mikro Faz 1.1: `index.html` Kimlik & Schema Temizliği (Tamamlandı ✅)**
  * Title: `Terme Evden Eve Nakliyat | Asansör Kiralama - Yazıcı Nakliyat`
  * Meta Description: `Terme, Çarşamba ve Samsun genelinde 25. kata kadar asansörlü, sigortalı evden eve nakliyat ve kiralık mobil asansör hizmeti. Hemen arayın: 0544 674 33 55`
  * Canonical: `https://www.termeyazicinakliyat.com.tr/`
  * OpenGraph & Twitter Card etiketlerinin Terme'ye uyarlanması.
  * MovingCompany Schema: Terme adı, `+905446743355`, Fenk Mah. adresi, Terme GPS koordinatları (41.2091, 37.0378).
  * ⚠️ Eski Fatsa Google Maps ve Instagram bağlantılarının kaldırılması.

* [x] **Mikro Faz 1.2: Merkezi Kimlik & İletişim Yapılandırması (`src/data/nakliyatData.ts`) (Tamamlandı ✅)**
  * `COMPANY_INFO` nesnesinin güncellenmesi (Firma adı: Terme Yazıcı Nakliyat, Slogan: Terme ve Samsun Asansörlü Taşımacılık, Telefon: 0544 674 33 55, Adres: Terme).
  * `SERVICES` ve `WHY_US_REASONS` açıklamalarının %100 özgün cümlelerle baştan yazılması.
  * `siteUrl` ve ilçe listelerinin (Terme, Çarşamba, Salıpazarı, Ünye, Samsun Merkez) merkezi olarak tanımlanması.

* [x] **Mikro Faz 1.3: `src/context/AppContext.tsx` Fallback & Hafıza İzolasyonu (Tamamlandı ✅)**
  * `DEFAULT_COMPANY` iletişim bilgilerinin `0544 674 33 55`, `info@termeyazicinakliyat.com` ve Terme adresi yapılması.
  * `DEFAULT_PRICING` rota maliyetlerinin Terme güzergahlarına çevrilmesi.
  * `services` state'inin Terme hizmetleriyle başlatılması.
  * `localStorage` tema anahtarının `aga_theme` yerine `yazici_theme` yapılması.

* [x] **Mikro Faz 1.4: `src/components/layout/MainApp.tsx` Dinamik Canonical & Schema İzolasyonu (Tamamlandı ✅)**
  * Alt sayfalardaki hardcoded `https://www.orduaganakliyat.com.tr/` canonical URL'inin kaldırılıp merkezi Terme domainine bağlanması.
  * Dinamik Schema içindeki `name: "Aga Nakliyat"` -> `"Terme Yazıcı Nakliyat"` yapılması.
  * `areaServed` şehir şemasının Terme / Çarşamba / Samsun olarak güncellenmesi.
  * Metin seçim renginin maviye çekilmesi.

* [x] **Mikro Faz 1.5: `public/robots.txt` & `public/sitemap.xml` İzolasyonu (Tamamlandı ✅)**
  * `robots.txt` sitemap satırının `https://www.termeyazicinakliyat.com.tr/sitemap.xml` yapılması.
  * `sitemap.xml` içindeki tüm linklerin Terme domainine ve rotalarına (`/bolge/terme`, `/bolge/carsamba`, `/hizmet/asansor-kiralama` vb.) güncellenmesi; eski Supabase image URL'lerinin temizlenmesi.

---

## 🎨 FAZ 2: ARAYÜZ, RENK PALETİ VE GİZLİ HARDCODED TEMİZLİĞİ

* [ ] **2.1. Kurumsal Renk Paleti Dönüşümü:**
  * Kırmızı tonları yerine **Canlı Güven Mavisi / Lacivert & Amber / Turuncu Vurgu** sistemine geçilecek.
  * Butonlar, gölgeler, rozetler ve seçim renkleri yeni renk kodlarına uyarlanacak.

* [ ] **2.2. Header / Navbar (`src/components/layout/Sidebar.tsx`):**
  * Logo ikonu: Kırmızı kutu içindeki `A` harfi -> `Y` harfine dönüştürülecek.
  * Marka Metni: `YAZICI NAKLİYAT`
  * Rozet: `Terme · Samsun`
  * Alt Açıklama: `Evden Eve Nakliyat & Asansör Kiralama`
  * Mobil Drawer Menü: Aynı şekilde `Y` logosu ve `YAZICI NAKLİYAT - Terme & Samsun` olarak güncellenecek.

* [ ] **2.3. Hero Bölümü (`src/components/layout/Hero.tsx`):**
  * Üst Rozet: `Terme · Çarşamba · Samsun`
  * **H1 Başlığı:** `Terme Evden Eve Nakliyat ve Asansör Kiralama Merkezi`
  * Alt Metin: `Yazıcı Nakliyat güvencesiyle Terme ve Samsun bölgesinde modern mobil asansörlü, profesyonel ambalajlı ve %100 sigortalı taşımacılık.`
  * WhatsApp Buton Mesajı: `Merhaba Yazıcı Nakliyat, Terme evden eve nakliyat ve asansör kiralama hakkında bilgi almak istiyorum.`
  * Hero görsel yolu güncellenecek.

* [ ] **2.4. Neden Biz (`src/components/sections/NedenBiz.tsx`):**
  * Başlık: `Neden Yazıcı Nakliyat'ı Tercih Etmelisiniz?`
  * Bölge Açıklaması: `Terme, Çarşamba, Salıpazarı ve tüm Samsun genelinde...`
  * Hizmet Bölgeleri Rozeti: `Terme, Çarşamba, Salıpazarı, Ünye, Ayvacık, Tekkeköy, Samsun Merkez (İlkadım, Atakum, Canik) ve Türkiye Geneli`

* [ ] **2.5. Hizmetler (`src/components/sections/Hizmetler.tsx`):**
  * Rozet: `Yazıcı Nakliyat Çözümleri`
  * H2 Başlığı: `Terme ve Samsun Profesyonel Nakliyat & Asansör Hizmetlerimiz`

* [ ] **2.6. Teklif Hesaplama Modalı ⭐ (`src/components/modals/TeklifModal.tsx`):**
  * Başlık Altı Metin: *"Terme, Çarşamba ve Samsun için Anında Tahmini Teklif"*
  * Güzergah Seçenekleri (Dropdown/Butonlar):
    * `terme-ici`: Terme Şehir İçi
    * `terme-carsamba`: Terme - Çarşamba Arası
    * `terme-samsun`: Terme - Samsun Merkez (Atakum/İlkadım)
    * `terme-unye`: Terme - Ünye Arası
    * `sehirlerarasi`: Şehirlerarası (İller Arası)
  * WhatsApp Mesaj Şablonu: *"Merhaba Yazıcı Nakliyat, web sitenizden teklif aldım..."*

* [ ] **2.7. İletişim Formu & Kartları (`src/components/sections/Iletisim.tsx`):**
  * İletişim kartı açıklaması: `Terme, Çarşamba ve Samsun geneli tüm nakliyat ve kiralık asansör talepleriniz için hemen arayın.`
  * Input Yer Tutucuları (Placeholders):
    * Nereden: `Örn: Terme Fenk Mah.`
    * Nereye: `Örn: Çarşamba veya Samsun Merkez`
  * Form WhatsApp bildirim mesajı: *"Merhaba Yazıcı Nakliyat, YENİ TEKLİF TALEBİ..."*

* [ ] **2.8. Yorum Ekleme Modalı (`src/components/modals/AddReviewModal.tsx`):**
  * Başlık: *"Yazıcı Nakliyat deneyiminizi paylaşın."*
  * Lokasyon placeholder: *"Örn: Terme, Samsun"*
  * Hizmet seçeneklerine *"Asansör Kiralama"* seçeneği eklenecek.

* [ ] **2.9. Footer (Alt Bölüm) (`src/components/layout/Footer.tsx`):**
  * Logo: `Y` harfi, `YAZICI NAKLİYAT`, `Terme - Samsun`.
  * Açıklama: *"Terme ve Samsun genelinde mobil asansörlü, asansör kiralama ve sigortalı evden eve nakliyat hizmeti veren lisanslı taşımacılık merkezi."*
  * Bölge Linkleri: `/bolge/terme`, `/bolge/carsamba`, `/bolge/unye`, `/bolge/samsun`.
  * İlçe Hap Rozetleri: `['Salıpazarı', 'Ayvacık', 'Tekkeköy', 'İlkadım', 'Atakum', 'Canik', 'Kozluk']`.
  * Copyright: `© 2026 Terme Yazıcı Nakliyat. Tüm hakları saklıdır.`
  * Lokasyon Rozeti: `Terme / Samsun`.

* [ ] **2.10. Kalan Modallar & Butonlar (`HizmetDetayModal.tsx`, `InstagramPopup.tsx`, `FloatingButtons.tsx`, `Galeri.tsx`, `Yorumlar.tsx`):**
  * WhatsApp açılış mesajlarındaki "Aga Nakliyat" -> "Yazıcı Nakliyat" olarak güncellenecek.
  * Galeri ve Yorumlar altındaki şehir ve firma referansları Terme'ye uyarlanacak.

---

## 📈 FAZ 3: TERMEYE ÖZEL ZENGİN SEO İÇERİK MİMARİSİ (`seoRoutes.ts`)

Google'da 1. sıraya çıkmayı sağlayacak ve %100 özgün SEO içerikleri:

### A. Bölge Sayfaları:
1. **`/bolge/terme` (Merkez Üs):**
   * *Title:* Terme Evden Eve Nakliyat | Asansör Kiralama & Güvenli Taşıma
   * *H1:* Terme Nakliyat ve Asansör Kiralama Hizmetleri
   * *Semantik Odak:* Fenk, Çay, Yeni Mahalle, Elmalık taşımacılığı, dar sokaklar için hidrolik asansör, marangozlu montaj.
2. **`/bolge/carsamba`:**
   * *Title:* Çarşamba Evden Eve Nakliyat | Asansörlü Taşımacılık - Yazıcı Nakliyat
   * *H1:* Çarşamba Nakliyat ve Şehirlerarası Taşımacılık
   * *Semantik Odak:* Çarşamba - Terme arası günlük servis, kat asansörü, güvenli paketleme.
3. **`/bolge/unye`:**
   * *Title:* Terme Ünye Arası Nakliyat | Komşu İlçeler Hızlı Taşıma
   * *H1:* Terme - Ünye Evden Eve Nakliyat
   * *Semantik Odak:* Samsun-Ordu sınır hattında parça eşya ve komple ev taşıma.
4. **`/bolge/samsun`:**
   * *Title:* Samsun Evden Eve Nakliyat & Şehirlerarası Taşımacılık
   * *H1:* Terme Çıkışlı Samsun ve Tüm Türkiye Nakliyat

### B. Hizmet Sayfaları:
1. **`/hizmet/asansor-kiralama` ⭐ (Özel Hizmet):**
   * *Title:* Terme Kiralık Asansör | Mobil Eşya Taşıma Asansörü Kiralama
   * *H1:* Terme ve Çarşamba Kiralık Mobil Asansör Hizmeti
   * *Açıklama:* Mobilyacılar, inşaat firmaları, cam balkoncular ve şahıslar için saatlik/günlük operatörlü mobil asansör kiralama.
2. **`/hizmet/evden-eve`:** Terme Evden Eve Sigortalı Nakliyat
3. **`/hizmet/asansorlu-nakliyat`:** 25. Kata Kadar Hidrolik Eşya Asansörü
4. **`/hizmet/sehirlerarasi`:** Terme'den 81 İle Güvenli Nakliye
5. **`/hizmet/ambalajlama`:** Çift Kat Patpat & Özel Mobilya Paketleme
6. **`/hizmet/ofis-tasima`:** Terme Kurumsal ve Ofis Taşımacılığı
7. **`/hizmet/parca-esya-tasima`:** Çeyiz, Beyaz Eşya ve Tek Parça Taşıma

---

## 🖼️ FAZ 4: GÖRSEL DÖNÜŞÜMÜ (PERCEPTUAL HASH TEMİZLİĞİ)

* [ ] `public/images/` dizinindeki eski "Aga Nakliyat" logolu veya yazılı görseller ayıklanacak.
* [ ] Terme sitesi için yeni, temiz, telifsiz veya gerçek nakliyat / asansör görselleri eklenecek (`terme-asansor.jpg`, `terme-nakliyat.jpg` vb.).

---

## 🗄️ FAZ 5: VERİTABANI & DAĞITIM (DEPLOY)

* [ ] Bağımsız Supabase projesi oluşturulup `.env` ayarlanacak.
* [ ] Vercel'de bağımsız bir proje olarak deploy edilecek.
* [ ] Yapılan tüm sayfalar ve linkler test edilecek (`npm run build`).

---

## 🔍 FAZ 6: DOĞRULAMA & ÇAPRAZ KONTROL (CHECKLIST RAPORU)

Deploy öncesi terminalde şu testler otomatik çalıştırılıp raporda 0 hata doğrulanacak:
```bash
# 1. Eski siteden kalan hiçbir kelime/link kalmamalı:
grep -ri "aga\|fatsa\|orduaganakliyat" ./src
grep -ri "share.google" ./index.html

# 2. Build hatası olmamalı:
npm run build
```

---

> **Plan Durumu:** Eksiksiz & Genişletilmiş Master Plan  
> **Dosya Konumu:** `site1-nakliyat/terme-seo-donusum-plani.md`
