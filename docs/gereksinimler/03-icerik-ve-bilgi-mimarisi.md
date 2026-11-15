# 03 — İçerik ve Bilgi Mimarisi

**Sahibi:** İçerik ve SEO Uzmanı · **Durum:** Taslak v1 (müşteri onayı bekliyor) · **Tarih:** 14 Kasım 2026

Bağlayıcı üst belge: `01-proje-ozeti-ve-kapsam.md`. Tek olgu kaynağı: `docs/kaynak/mevcut-site-icerik-envanteri.md` (aşağıda "envanter"). Başlık, meta açıklama, yapısal veri ve yönlendirmeler: `07-seo-gereksinimleri.md`.

Bu belgedeki işaretler:

| İşaret | Anlamı |
|---|---|
| **[ONAY]** | Envanterdeki metnin anlamına dokunan düzeltme; müşteri onayı olmadan yayımlanmaz. |
| **[TEYİT]** | Envanterde var ama doğruluğu/güncelliği şüpheli; müşteri teyit edecek. |
| **[MÜŞTERİ]** | Envanterde yok; müşteriden gelecek. Gelene kadar alan sayfada gösterilmez. |
| **[HUKUK]** | Hukuki onay gerekir. |
| AS-n | Bu belgenin §6'sındaki açık soru numarası. |

---

## 1. İçerik ilkeleri ve ses tonu

### 1.1 Ses tonu

- **Kurumsal, sade, somut.** Okur bir satın alma sorumlusu, teknik müdür veya ana yüklenicidir; ne yapıldığını, hangi standarda göre yapıldığını ve kime ulaşacağını arar.
- **"Biz" dili.** "Kuruyoruz, tasarlıyoruz, bakımını yapıyoruz." Edilgen ve dolaylı kalıplar ("yapılmaktadır", "sağlanmaktadır") kullanılmaz.
- **Okura "siz" diye hitap edilir.** Emir kipi yalnızca düğmelerde: "Teklif Al", "Bizi Arayın".
- **Kısa cümle.** Bir cümlede bir düşünce; hedef en çok 20–25 kelime. Paragraf en çok 4 cümle.
- **Doğrulanamayan üstünlük iddiası yazılmaz.** Yasak sözcük ve kalıplar: "sektörün lideri", "öncü", "en iyi", "en kaliteli", "en yüksek kalitede", "kusursuz", "benzersiz", "dünya standartlarında", "%100", "garantili", "7/24" (müşteri taahhüt etmedikçe).
- **İddia yerine olgu.** "Kaliteliyiz" yerine: hangi standart (NFPA, EN, VdS), hangi iş, hangi şehir.
- **Olgu yalnızca envanterden veya müşteriden.** Envanterde olmayan sayı, belge, yıl, marka, ekip bilgisi yazılmaz.
- **Jargon ölçülü.** Teknik terim okurun aradığı terimse kullanılır (FM200, sprinkler, MCC, SCADA); ilk geçtiği yerde kısaca açılır.

### 1.2 Firma adı

- Tek biçim: **Axis Teknik** (iki sözcük, baş harfler büyük). Çalışma adıdır; resmî unvan müşteriden gelince yalnızca alt bilgide, İletişim'de ve hukuki metinlerde tam unvan kullanılır (AS-1).
- Kullanılmayacak biçimler: "Axisteknik", "AXİS TEKNİK" (logo dışında), "Axis Mekanik", "Axis Teknik ve Mekanik", "Axis".
- Ek alırken kesme işareti: "Axis Teknik'in", "Axis Teknik'e".
- Metin içinde ikinci ve sonraki geçişlerde "biz" tercih edilir; ad her cümlede tekrarlanmaz.

### 1.3 Yazım kuralları

| Konu | Kural | Örnek |
|---|---|---|
| Başlıklar (H1–H3), menü, düğme | Her sözcüğün baş harfi büyük; "ve, ile, için" küçük | "Tasarım ve Projelendirme" |
| Madde listeleri | Yalnızca ilk sözcük ve özel adlar/kısaltmalar büyük; sonda nokta yok | "Orta gerilim hücreleri" |
| Kısaltmalar | Standart biçimiyle; ilk geçişte açılım | OG (orta gerilim), AG (alçak gerilim), HVAC, UPS, MCC, SCADA, CCTV, SMATV, IPTV, NFPA, EN, **VdS** |
| Gaz adları | Düz metinde "FM200", "CO₂" (alt simge); URL, title ve alt metinde "CO2" | "FM200 ve CO₂ sistemleri" |
| Kurum adları | Kurumun kendi yazımı | "Eti Bakır", "İGDAŞ", "Türk Telekom", "DHL", "THY Opet" |
| Sayılar | Binlik ayırıcı nokta, ondalık virgül | "2.500 m²", "2,5 sn" |
| Telefon | Görünen: `0216 307 18 62`; bağlantı: `tel:+902163071862` | — |
| Tarih | "14 Kasım 2026"; aralık için kısa çizgi | "2016–2019" |
| Tire | Aralık ve ikili kavramda kısa çizgi (–): "elektrik–mekanik". Cümle içinde uzun tire kullanılmaz | — |
| Yabancı sözcük | Türkçesi yerleşikse Türkçesi | "dizayn" → "tasarım", "done" → "veri", "mahal" → "alan/mekân" |
| "Hizmetler" | Her yerde "Hizmetler". "Servislerimiz", "Çözümlerimiz", "Ürünler" kullanılmaz (01 §6) | — |
| Düzeltilmesi zorunlu yazımlar | "Eti Bakır", "Bakım Onarım", "Sistemleri", "hidrolik", "VdS", "CO₂", "mahallin", "inert" | — |

### 1.4 İçerik yapısı kuralları

- Her sayfada tek H1; H1 sayfanın ne olduğunu söyler, slogan değildir (ana sayfa dahil).
- Her hizmet sayfası aynı iskeleti izler: giriş → kapsam listeleri → çalışma biçimi/standartlar (varsa) → ilgili referanslar → ilgili hizmetler → iletişim çağrısı.
- Her sayfa bir iletişim çağrısıyla biter (01 §8).
- Doğrulanmamış alan sayfada **gösterilmez** (01 §12). Boş alan yerine "yakında" yazılmaz.
- Görsel alt metinleri içerikle birlikte yazılır (kural: 07 §4.6).

---

## 2. Bilgi mimarisi

### 2.1 Site haritası (01 §6 ile birebir)

| Düzey | Sayfa | URL |
|---|---|---|
| 0 | Ana Sayfa | `/` |
| 1 | Hakkımızda | `/hakkimizda/` |
| 1 | Hizmetler | `/hizmetler/` |
| 2 | Elektrik Taahhüt | `/hizmetler/elektrik-taahhut/` |
| 2 | Mekanik Taahhüt | `/hizmetler/mekanik-taahhut/` |
| 2 | Yangın Sistemleri | `/hizmetler/yangin-sistemleri/` |
| 3 | Gazlı Söndürme | `/hizmetler/yangin-sistemleri/gazli-sondurme/` |
| 3 | Sulu Söndürme | `/hizmetler/yangin-sistemleri/sulu-sondurme/` |
| 3 | Köpüklü Söndürme | `/hizmetler/yangin-sistemleri/kopuklu-sondurme/` |
| 2 | Tasarım ve Projelendirme | `/hizmetler/tasarim-ve-projelendirme/` |
| 1 | Referanslar | `/referanslar/` |
| 2 | Referans detayı (19) | `/referanslar/[slug]/` |
| 1 | İletişim | `/iletisim/` |
| 1 | KVKK Aydınlatma Metni | `/kvkk-aydinlatma-metni/` |
| 1 | Çerez Politikası | `/cerez-politikasi/` |
| — | 404 | `/404` |

### 2.2 Ana menü

Sıra (01 §6): **Hizmetler ▾ · Referanslar · Hakkımızda · İletişim** + sağda telefon ve **"Teklif Al"** düğmesi.

| Öğe | Etiket | Hedef |
|---|---|---|
| Logo | (alt metin: "Axis Teknik ana sayfa") | `/` |
| Menü 1 | Hizmetler ▾ | `/hizmetler/` (etiket tıklanınca genel sayfa; ok/üzerine gelme alt menüyü açar) |
| ↳ | Elektrik Taahhüt | `/hizmetler/elektrik-taahhut/` |
| ↳ | Mekanik Taahhüt | `/hizmetler/mekanik-taahhut/` |
| ↳ | Yangın Sistemleri | `/hizmetler/yangin-sistemleri/` |
| ↳↳ | Gazlı Söndürme | `/hizmetler/yangin-sistemleri/gazli-sondurme/` |
| ↳↳ | Sulu Söndürme | `/hizmetler/yangin-sistemleri/sulu-sondurme/` |
| ↳↳ | Köpüklü Söndürme | `/hizmetler/yangin-sistemleri/kopuklu-sondurme/` |
| ↳ | Tasarım ve Projelendirme | `/hizmetler/tasarim-ve-projelendirme/` |
| ↳ | Tüm Hizmetler | `/hizmetler/` |
| Menü 2 | Referanslar | `/referanslar/` |
| Menü 3 | Hakkımızda | `/hakkimizda/` |
| Menü 4 | İletişim | `/iletisim/` |
| Telefon | 0216 307 18 62 | `tel:+902163071862` |
| Düğme | Teklif Al | `/iletisim/#teklif-formu` |

Alt menünün görsel biçimi (açılır liste / geniş panel) ve mobil davranışı 04'te tanımlanır; etiketler ve sıra bu tablodaki gibidir.

### 2.3 Alt bilgi (footer)

| Sütun | İçerik |
|---|---|
| Kurumsal | Logo · tek cümle tanım: "Elektrik–mekanik taahhüt ve yangın algılama/söndürme sistemleri." · "2010'dan beri." |
| Hizmetler | Elektrik Taahhüt · Mekanik Taahhüt · Yangın Sistemleri · Gazlı Söndürme · Sulu Söndürme · Köpüklü Söndürme · Tasarım ve Projelendirme |
| Kurumsal bağlantılar | Hakkımızda · Referanslar · İletişim |
| İletişim | Adres · Telefon · E-posta · "Yol Tarifi Al" (harita bağlantısı) · WhatsApp (AS-6) |
| Alt satır | © {yıl} Axis Teknik [resmî unvan — AS-1]. Tüm hakları saklıdır. · KVKK Aydınlatma Metni · Çerez Politikası · Çerez Tercihleri (bandı yeniden açar) |

Yıl derleme sırasında otomatik üretilir (eski sitedeki "Copyright 2020" hatası tekrarlanmaz). Sosyal medya simgeleri yalnızca müşteri hesap verirse eklenir (AS-7).

### 2.4 Ekmek kırıntısı

Ana sayfa dışındaki tüm sayfalarda. Örnek: `Ana Sayfa › Hizmetler › Yangın Sistemleri › Gazlı Söndürme`. Referans detayında: `Ana Sayfa › Referanslar › {Kısa ad}`.

### 2.5 İç bağlantı planı

| Kaynak sayfa | Zorunlu bağlantılar |
|---|---|
| Ana Sayfa | 4 hizmet grubu · 3 yangın alt sayfası (yangın kartının içinde) · Referanslar + öne çıkan 6 referans detayı · Hakkımızda · İletişim |
| Hakkımızda | Hizmetler · Referanslar · İletişim |
| Hizmetler (genel) | 4 grup + 3 yangın alt sayfası · Referanslar · İletişim |
| Elektrik Taahhüt | "Yangın algılama ve alarm sistemleri" maddesinden → Yangın Sistemleri (`#yangin-algilama`) · Tasarım ve Projelendirme · ilgili referanslar (etiket: Elektrik Taahhüt) · İletişim |
| Mekanik Taahhüt | "Yangından koruma sistemleri" grubundaki her maddeden → Yangın Sistemleri ve ilgili alt sayfa · Tasarım ve Projelendirme · İletişim |
| Yangın Sistemleri (genel) | Gazlı · Sulu · Köpüklü · Elektrik Taahhüt (zayıf akım) · Tasarım ve Projelendirme · ilgili referanslar (etiket: Yangın Sistemleri) · İletişim |
| Gazlı / Sulu / Köpüklü | Üst sayfa (Yangın Sistemleri) · diğer iki alt sayfa · aynı etiketli referanslar (en çok 6 kart + "Tümünü Gör" → `/referanslar/?hizmet=…`) · İletişim |
| Tasarım ve Projelendirme | Elektrik Taahhüt · Mekanik Taahhüt · Yangın Sistemleri · İletişim |
| Referanslar (liste) | 19 detay · İletişim |
| Referans detayı | Hizmet etiketlerinden ilgili hizmet sayfasına · aynı sektör/hizmetten 3 benzer referans · "Tüm Referanslar" · İletişim |
| İletişim | KVKK Aydınlatma Metni (form onayından) · harita/yol tarifi (dış bağlantı) |
| KVKK / Çerez | Birbirine · İletişim |
| 404 | Ana Sayfa · Hizmetler · Referanslar · İletişim |

Bağlantı metni hedef sayfayı adlandırır ("Gazlı söndürme sistemleri"); "tıklayın", "buradan", "devamı" kullanılmaz.

Hizmet etiketi → hizmet sayfası eşlemesi (referans detayındaki etiket bağlantıları için):

| Hizmet etiketi | Bağlandığı sayfa |
|---|---|
| Elektrik Taahhüt | `/hizmetler/elektrik-taahhut/` |
| Mekanik Taahhüt | `/hizmetler/mekanik-taahhut/` |
| Yangın Sistemleri | `/hizmetler/yangin-sistemleri/` |
| Yangın Algılama | `/hizmetler/yangin-sistemleri/#yangin-algilama` |
| Gazlı Söndürme | `/hizmetler/yangin-sistemleri/gazli-sondurme/` |
| Sulu Söndürme | `/hizmetler/yangin-sistemleri/sulu-sondurme/` |
| Köpüklü Söndürme | `/hizmetler/yangin-sistemleri/kopuklu-sondurme/` |
| Bakım ve Servis | `/hizmetler/yangin-sistemleri/#bakim` |
| Tasarım ve Projelendirme | `/hizmetler/tasarim-ve-projelendirme/` |

---

## 3. Eski içerik → yeni sayfa eşlemesi

### 3.1 Taşınan içerik

| Envanter | İçerik parçası | Yeni yer | İşlem |
|---|---|---|---|
| §1 | Logo adı "AXİS TEKNİK" | Tüm site | Tek ad: "Axis Teknik" |
| §1 | Logo alt yazısı (Elektrik Elektronik Yangın Algılama ve Mekanik Yangın Söndürme Sistemleri) | Ana sayfa hero alt metni, alt bilgi tanımı | Yeniden yazıldı (01 §2 konumlandırması) |
| §1 | Kuruluş: 2010 | Ana sayfa sayılar, Hakkımızda, alt bilgi | Aynen |
| §1 | Adres | İletişim, alt bilgi, yapısal veri | Yazım düzenlendi [TEYİT] (AS-3) |
| §1 | Telefon (pbx) 0216 307 18 62 | Üst menü, İletişim, alt bilgi, tıkla-ara | Aynen |
| §1 | Telefon 2: 0216 307 18 49 | İletişim | Telefon mu faks mı? [TEYİT] (AS-4); teyit gelene kadar gösterilmez |
| §1 | Cep 0507 201 24 25 | İletişim; WhatsApp bağlantısı | [TEYİT] (AS-5, AS-6) |
| §1 | info@axisteknik.com | İletişim, alt bilgi, form alıcısı | Aynen |
| §1 | Meta açıklama ("…aynı heyecanla…") | — | Yeniden yazıldı (07 §3) |
| §1, §3 | Slogan "Güven mi arıyorsunuz? Biz her zaman buradayız." | — | Taşınmıyor (bkz. 3.2); hero için yeni seçenekler §4.1 |
| §1, §3 | Sayaçlar: 2010 · 19 · 2 | Ana sayfa "Sayılarla" bölümü | [TEYİT] (AS-8) |
| §3 | Slider başlıkları (4 referans) | Ana sayfa "Öne Çıkan Referanslar"; #1 referansın kapsam cümlesi | Slider kaldırıldı (01 §8); içerik kartlara taşındı |
| §3 | Üç hizmet kutusu | Ana sayfa hizmet kartları (4 kart) | Yangın Sistemleri kartı eklendi; metinler yazıldı |
| §3 | "Projelerimiz" (3 referans) | Ana sayfa "Öne Çıkan Referanslar" | Slider'daki 4 kayıtla birleştirildi (6 kart) |
| §4 | Tarihçemiz | Hakkımızda › Tarihçe | Düzeltildi |
| §4 | Amacımız | Hakkımızda › Amacımız | Düzeltildi [ONAY] |
| §4 | Misyonumuz | Hakkımızda › Misyonumuz | Yeniden yazıldı [ONAY] |
| §4 | Vizyonumuz | Hakkımızda › Vizyonumuz | Yıl çıkarıldı, yeniden yazıldı [ONAY] |
| §4 | Değerlerimiz | Hakkımızda › Değerlerimiz | Yazım düzeltildi |
| §4 | İlkelerimiz | Hakkımızda › İlkelerimiz | Bir madde uyarlandı [ONAY] |
| §5.1 | Orta Gerilim, Alçak Gerilim, Otomasyon ve Enstrümantasyon listeleri | Elektrik Taahhüt | Eksiksiz; yazım düzeltildi |
| §5.1 | Zayıf Akım listesi | Elektrik Taahhüt | Eksiksiz; "Yangın algılama ve alarm" maddesi Yangın Sistemleri'ne bağlanır |
| §5.2 | HVAC listesi, Sıhhi Tesisat listesi | Mekanik Taahhüt | Eksiksiz; yazım düzeltildi |
| §5.2 | Yangından Koruma Sistemleri listesi | **Asıl içerik:** Yangın Sistemleri (genel). Mekanik Taahhüt'te bağlantılı kısa liste | Bkz. §4.4 |
| §5.3 | Tasarım Hizmetleri › Dizayn listesi | Tasarım ve Projelendirme | "Dizayn" → "tasarım" |
| §5.4 | Sulu Söndürme metni | Sulu Söndürme | Düzeltildi |
| §5.4 | Gazlı Söndürme metni | Gazlı Söndürme | Düzeltildi; "D Sistem" çıkarıldı [ONAY] |
| §5.4 | Köpüklü Söndürme metni + kullanım alanları | Köpüklü Söndürme | Düzeltildi |
| §6 | 19 referans (başlık, ülke, şehir) | Referanslar listesi + 19 detay | Başlık düzeltildi; etiketlendi; tarihler [TEYİT] |
| §7 | İletişim bilgileri | İletişim | Aynen (yukarıdaki teyitlerle) |
| §7 | Form alanları: Ad · E-posta · Konu · Mesajınız | İletişim › Teklif formu | Genişletildi (§4.11); alan listesinin sahibi 02 |

### 3.2 Taşınmayan içerik

| Envanter | İçerik | Neden |
|---|---|---|
| §1 | "Axisteknik", "Axis Mekanik", "Axis Teknik ve Mekanik" adları | Tek ad kuralı (§1.2) |
| §1 | sinan.ozdemir@axisteknik.com | Kişisel e-posta; müşteri açıkça istemedikçe yayımlanmaz (AS-9) |
| §1, §3 | "Güven mi arıyorsunuz? Biz her zaman buradayız." | Ne yapıldığını söylemiyor; "her zaman" doğrulanamayan bir taahhüt |
| §1 | Eski meta açıklama | Hizmeti tanımlamıyor |
| §3 | Slider, "Çözümlerimiz için tıklayın." | 01 §8; bağlantı metni kuralı (§2.5) |
| §3 | "Copyright 2020 Axis Teknik ve Mekanik" | Yıl ve ad hatalı; yeni alt satır §2.3 |
| §4 | "2013 Yılında…" ifadesi | Eskimiş (envanter §11.2) |
| §4 | "Yangın söndürme cihazları … ürettiğimiz" anlatımı | 01 §2 konumlandırması; müşteri üretimi teyit ederse geri alınır (AS-10) |
| §5.4 | "D Sistem en uygun çözümü sunmaktadır" | Başka firmaya ait ifade (envanter §11.3) |
| §5.4 | "Ürünler" sayfa adı | Firma ürün satıcısı olarak konumlanmıyor; içerik Hizmetler altında |
| §6 | Tüm kayıtlardaki 2016–2019 tarihleri | Büyük olasılıkla şablon değeri; doğrulanana kadar gösterilmez |
| §6, §9 | Referans görselleri, kurum logoları | 01 §9 görsel politikası |
| §8 | `/about/` (Lorem ipsum, 1999–2012 zaman çizelgesi) | Tema demosu; firmaya ait değil |
| §8 | Kordsa, Migros, Bosch Bina kayıtları | Metinleri yer tutucu; gerçek referans olup olmadığı bilinmiyor (AS-14) |
| §8 | Diyarbakır Bağlar Vehbi Koç İlköğretim Okulu (2008) | Kuruluş yılından önce; doğrulanmalı (AS-14) |
| §8 | `clinical-research-center*`, `album-no-*` | Tema demosu |
| §8 | `/urunler/`, `/urunler-2/`, `/iletisim-1/` | Yarım/yinelenen |
| §8 | "Son Yorumlar", "Arşivler", "Meta", "Latest Tweets" bileşenleri | WordPress kalıntısı |

Taşınmayan sayfaların eski URL'leri için yönlendirme: 07 §6.

---

## 4. Sayfa sayfa içerik taslağı

Taslak metinler yayına yakındır; **[ONAY]** işaretli paragraflar müşteri onayına, tasarım gereği kısaltmalar 04'e bağlıdır. Köşeli parantez içindeki notlar yayımlanmaz.

### 4.1 Ana Sayfa — `/`

**Bölüm sırası:** 1) Hero · 2) Hizmet grupları · 3) Sayılarla · 4) Öne çıkan referanslar · 5) Hakkımızda özeti · 6) İletişim çağrısı

#### 1) Hero

H1 tek ve tanımlayıcıdır. Üç seçenek; müşteri birini seçer (AS-11). Öneri: **A**.

| | Seçenek A (öneri) | Seçenek B | Seçenek C |
|---|---|---|---|
| Üst etiket | 2010'dan beri · Pendik, İstanbul | Elektrik · Mekanik · Yangın | Axis Teknik |
| Başlık (H1) | Elektrik–Mekanik Taahhüt ve Yangın Sistemleri | Yangın Algılama ve Söndürme Sistemleri, Elektrik–Mekanik Taahhüt | Tesisiniz İçin Elektrik, Mekanik ve Yangın Sistemleri |
| Alt metin | Endüstriyel tesisler, hastaneler, oteller ve kamu yapıları için tasarım, uygulama, devreye alma ve bakım hizmeti veriyoruz. | Gazlı, sulu ve köpüklü söndürme sistemlerini tasarlıyor, kuruyor ve bakımını yapıyoruz. Elektrik ve mekanik taahhüt işlerinizi de aynı ekiple yürütüyoruz. | Projelendirmeden devreye almaya ve bakıma kadar tek muhatap. 2010'dan beri sanayi, sağlık ve otel projelerinde çalışıyoruz. |
| Birincil düğme | Teklif Al → `/iletisim/#teklif-formu` | Teklif Al | Teklif Al |
| İkincil düğme | Hizmetleri İncele → `/hizmetler/` | Referansları Gör → `/referanslar/` | Bizi Arayın: 0216 307 18 62 → `tel:` |

Not: C'deki "aynı ekip / tek muhatap" ve B'deki "aynı ekiple" ifadeleri müşteri teyidine bağlıdır (AS-11). A yalnızca 01 §2'deki onaylı konumlandırmayı kullanır.

#### 2) Hizmet grupları

Bölüm başlığı (H2): **Hizmetlerimiz**
Giriş: "Dört ana başlıkta çalışıyoruz."

| Kart | Başlık (H3) | Metin | Bağlantı metni |
|---|---|---|---|
| 1 | Elektrik Taahhüt | Orta gerilim, alçak gerilim, zayıf akım, otomasyon ve enstrümantasyon sistemlerinin kurulumu, testi ve devreye alınması. | Elektrik taahhüt hizmetleri |
| 2 | Mekanik Taahhüt | Isıtma, soğutma, havalandırma (HVAC) ve sıhhi tesisat sistemlerinin kurulumu. | Mekanik taahhüt hizmetleri |
| 3 | Yangın Sistemleri | Yangın algılama ve alarm; gazlı, sulu ve köpüklü söndürme sistemlerinde tasarım, montaj, devreye alma ve bakım. Alt bağlantılar: Gazlı · Sulu · Köpüklü | Yangın sistemleri |
| 4 | Tasarım ve Projelendirme | Alçak gerilim, orta gerilim, zayıf akım, otomasyon, HVAC, sıhhi tesisat ve yangın sistemleri için tasarım. | Tasarım ve projelendirme |

Kart sırası: müşteri yangını öne almak isterse 3. kart başa alınabilir (01 §2: yangın öne çıkarılır). Öneri: menü sırasıyla aynı kalsın, yangın kartı görsel olarak vurgulansın (karar 04).

#### 3) Sayılarla

Bölüm başlığı (H2): **Sayılarla Axis Teknik**

| Sayı | Etiket | Kaynak / durum |
|---|---|---|
| 2010 | Kuruluş yılı | Envanter §1 |
| 19 | Tamamlanan proje | Envanter §1 — **güncellenecek** [TEYİT] (AS-8) |
| 2 | Devam eden proje | Envanter §1 — **güncellenecek** [TEYİT] (AS-8) |

Kurallar: Rakamlar 2020'den kalmadır; müşteri güncel sayıları vermeden yayımlanmaz. Teyit gelmezse yalnızca "2010 · Kuruluş yılı" ve sitedeki referans sayısı (içerikten otomatik sayılır: "19 referans proje") gösterilir; "devam eden" sayacı kaldırılır. Sayı animasyonu zorunlu değildir (04).

#### 4) Öne çıkan referanslar

Bölüm başlığı (H2): **Öne Çıkan Referanslar**
Giriş: "Sanayi, sağlık, otel, enerji ve telekom alanlarında tamamladığımız işlerden bazıları."

Seçim (eski ana sayfada öne çıkarılan kayıtların birleşimi; envanter §3):

| Sıra | Referans | Kart alt metni | Eski sitede |
|---|---|---|---|
| 1 | Eti Bakır Mazıdağı Fosfat Tesisi | Elektrik taahhüt işleri · Mardin | Slider + Projelerimiz |
| 2 | Türk Telekom Santralleri | Yangın algılama ve FM200 sistemleri · Türkiye geneli | Slider |
| 3 | Medical Park Hastaneleri | Yangın sistemleri bakımı ve yeni kurulumlar · Türkiye geneli | Projelerimiz |
| 4 | Konya Şeker Fabrikası | Bakım-onarım ve yangın söndürme sistemleri · Konya | Projelerimiz |
| 5 | Ergani Devlet Hastanesi | Otomatik gazlı söndürme sistemleri · Diyarbakır | Slider |
| 6 | Hilton Otel Sivas | Otomatik gazlı söndürme sistemleri · Sivas | Slider |

Düğme: **Tüm Referanslar** → `/referanslar/`

#### 5) Hakkımızda özeti

Başlık (H2): **2010'dan Beri**
Metin: "Axis Teknik 2010 yılında kuruldu. 'Öncelik kalite ve müşteri memnuniyetidir' ilkesiyle çalışıyoruz. Merkezimiz Pendik, İstanbul'da."
Bağlantı: **Hakkımızda** → `/hakkimizda/`

#### 6) İletişim çağrısı (tüm sayfalarda ortak bileşen)

Başlık (H2): **Projeniz İçin Teklif Alın**
Metin: "İhtiyacınızı kısaca anlatın; sizi arayalım."
Düğmeler: **Teklif Al** → `/iletisim/#teklif-formu` · **0216 307 18 62** → `tel:+902163071862`

[Yanıt süresi sözü ("24 saat içinde" vb.) müşteri taahhüt ederse eklenir — AS-12.]

---

### 4.2 Hakkımızda — `/hakkimizda/`

**Bölüm sırası:** 1) Giriş · 2) Tarihçe · 3) Amacımız · 4) Misyon ve Vizyon · 5) Değerlerimiz · 6) İlkelerimiz · 7) [MÜŞTERİ] Belgeler ve yeterlilikler · 8) Sayılarla (ana sayfadaki bileşen) · 9) İletişim çağrısı

**H1:** Hakkımızda

**Giriş**
"Axis Teknik; endüstriyel tesisler, hastaneler, oteller ve kamu yapıları için elektrik–mekanik taahhüt ile yangın algılama ve söndürme sistemleri alanında çalışan bir mühendislik ve taahhüt firmasıdır. Tasarım, uygulama, devreye alma ve bakım hizmeti veriyoruz. Merkezimiz Pendik, İstanbul'dadır."
[Kaynak: 01 §2 konumlandırması + envanter §1 adres. "Mühendislik ve taahhüt firması" nitelemesi [ONAY].]

**Tarihçe (H2)**
"Axis Teknik 2010 yılında kuruldu. O günden bu yana 'Öncelik kalite ve müşteri memnuniyetidir' ilkesiyle çalışıyoruz."
[Düzeltme: ad, tırnak ve ek yazımı. Envanterde başka tarihçe bilgisi yok; kilometre taşları [MÜŞTERİ] — AS-13.]

**Amacımız (H2)** [ONAY]
"Kararlı, programına bağlı ve sorumluluklarının farkında bir ekibiz. Disiplinli bir çalışma ortamında, güncel teknoloji ve donanımla nitelikli ürün ve hizmet sunarak müşterilerimizin güvenini ve saygısını kazanmayı esas alıyoruz.

Gelişen teknolojileri izleyerek bugün bulunduğumuz noktadan daha ileriye gitmeyi ve uluslararası standartlara uygun işler teslim etmeyi hedefliyoruz. İşimizi seviyoruz.

Ana faaliyet alanlarımızdan biri olan yangın algılama ve söndürme sistemleri, can ve mal güvenliğini doğrudan ilgilendirir. İnsanların yaşadığı ve çalıştığı her mekânda, kurduğumuz sistemlerin güvenilirliğinin sorumluluğunu taşıyoruz."

Yapılan değişiklikler ve gerekçeleri:

| Eski ifade | Yeni ifade | Gerekçe |
|---|---|---|
| "Biz Axisteknik çalışanları olarak … bir firmayız" (tek uzun cümle) | Üç kısa cümle | Okunabilirlik; anlam aynı |
| "en yüksek kalitede ürün ve hizmet" | "nitelikli ürün ve hizmet" | Doğrulanamayan üstünlük iddiası |
| "heyecan ve huzur verici" | Çıkarıldı | Anlamı belirsiz dolgu |
| "dünya standartlarında ürünler sunan", "Dünya standartlarında bir işletmecilik" | "uluslararası standartlara uygun işler teslim etmeyi" | İddia yerine ölçülebilir ifade (İlkelerimiz'deki "uluslararası standartlar" ile tutarlı) |
| "ana faaliyet konumuz olan Yangın Söndürme Cihazları … ürettiğimiz hayat kurtaran teknolojilerle değer yaratma zincirinin en iyi halkalarından biri olmak" | "Ana faaliyet alanlarımızdan biri olan yangın algılama ve söndürme sistemleri…" ; "ürettiğimiz" → "kurduğumuz" | **Konumlandırma değişikliği (01 §2):** firma üretici olarak değil, tasarım–uygulama–bakım firması olarak anlatılıyor. **Müşteri onayı gerekir** (AS-10) |
| "sunduğumuz ürünlerin güvenilirlik sorumluluğunu taşımaktan gurur duyuyoruz" | "kurduğumuz sistemlerin güvenilirliğinin sorumluluğunu taşıyoruz" | Aynı gerekçe; sade anlatım |

**Misyonumuz (H2)** [ONAY]
"Elektrik, mekanik ve yangın güvenliği alanlarında can ve mal güvenliğini koruyan, hayatı kolaylaştıran sistemler tasarlamak, kurmak ve bakımını yapmak için varız."
[Eski: "Yangın Söndürme Cihazları konusunda hayatı kolaylaştıran ürünler geliştirmek ve sunmak için varız." Değişiklik: "ürün geliştirmek" → "sistem tasarlamak, kurmak, bakımını yapmak"; kapsam elektrik–mekanik işleri de içerecek şekilde genişletildi. **Konumlandırma değişikliği — müşteri onayı gerekir** (AS-10).]

**Vizyonumuz (H2)** [ONAY]
"Türkiye, Avrupa ve Orta Doğu'da elektrik–mekanik taahhüt ile yangın algılama ve söndürme sistemlerinde, sunduğu teknoloji ve hizmetle tercih edilen bir kuruluş olmak."
[Eski: "2013 Yılında ülkemiz, Avrupa ve Ortadoğu'nun yangın söndürme cihazları konusunda geliştiren, üreten ve sunduğu teknolojiyle tercih edilen öncü kuruluş olmak." Değişiklikler: (1) yıl çıkarıldı — envanter §11.2; (2) "geliştiren, üreten" → hizmet odaklı anlatım — **konumlandırma, müşteri onayı gerekir** (AS-10); (3) "öncü" çıkarıldı — üstünlük iddiası. Coğrafi hedef (Türkiye, Avrupa, Orta Doğu) korundu.]

Müşteri üretim/ürün geliştirme faaliyetini teyit ederse kullanılacak **yedek metinler** (AS-10):
- Misyon (yedek): "Yangın söndürme sistemleri alanında hayatı kolaylaştıran ürün ve çözümler geliştirmek ve sunmak için varız."
- Vizyon (yedek): "Türkiye, Avrupa ve Orta Doğu'da yangın söndürme sistemlerini geliştiren, üreten ve sunduğu teknolojiyle tercih edilen bir kuruluş olmak."

**Değerlerimiz (H2)**
- Müşteri odaklılık
- Yasalara saygı
- İnsana saygı
- Dürüstlük
- Kalite

**İlkelerimiz (H2)**
- Sorunlara hızlı çözüm
- Uluslararası standartlara uygun ürün ve hizmet [ONAY — eski: "Uluslararası standartlarda ürün sunmak"; "ve hizmet" eklendi]
- Satış sonrası hizmet
- Sözünde durmak

**Belgeler ve yeterlilikler (H2)** [MÜŞTERİ]
Envanterde hiçbir belge/sertifika yok. Müşteri belge verirse (AS-15) burada ad, veren kurum ve geçerlilik tarihiyle listelenir; vermezse bölüm yayımlanmaz.

**Ekip** [MÜŞTERİ] — envanterde yok; Sürüm 1'de yalnızca müşteri içerik verirse eklenir (AS-16).

---

### 4.3 Hizmetler (genel) — `/hizmetler/`

**Bölüm sırası:** 1) Giriş · 2) Dört hizmet grubu · 3) Nasıl çalışıyoruz · 4) Öne çıkan referanslar (3 kart) · 5) İletişim çağrısı

**H1:** Hizmetler

**Giriş**
"Elektrik taahhüt, mekanik taahhüt, yangın algılama ve söndürme sistemleri ile tasarım ve projelendirme alanlarında çalışıyoruz. Endüstriyel tesisler, hastaneler, oteller ve kamu yapıları için tasarım, uygulama, devreye alma ve bakım hizmeti veriyoruz."

**Hizmet grupları (her biri H2 + kısa metin + bağlantı)**

| Başlık | Metin | Alt başlıklar (bağlantılı) |
|---|---|---|
| Elektrik Taahhüt | Trafodan prize kadar elektrik altyapısı: orta gerilim, alçak gerilim, zayıf akım, otomasyon ve enstrümantasyon. | Orta gerilim · Alçak gerilim · Zayıf akım · Otomasyon ve enstrümantasyon (sayfa içi çapalar) |
| Mekanik Taahhüt | Isıtma, soğutma, havalandırma ve sıhhi tesisat sistemleri. | HVAC · Sıhhi tesisat |
| Yangın Sistemleri | Yangın algılama ve alarm sistemleri ile gazlı, sulu ve köpüklü söndürme sistemleri. Tasarım, montaj, devreye alma ve periyodik bakım. | Gazlı söndürme · Sulu söndürme · Köpüklü söndürme |
| Tasarım ve Projelendirme | Elektrik, mekanik ve yangın sistemlerinin tasarımı. | — |

**Nasıl çalışıyoruz (H2)**
Dört adım, kısa etiketlerle (kaynak: 01 §2 "tasarım, uygulama, devreye alma ve bakım"):
1. **Tasarım** — İhtiyacı ve şartnameyi inceliyor, sistemi projelendiriyoruz.
2. **Uygulama** — Montajı yürütüyoruz.
3. **Devreye alma** — Testleri yapıyor, sistemi çalışır hâlde teslim ediyoruz.
4. **Bakım** — Periyodik bakım ve kontrolleri yapıyoruz.

[Adım açıklamaları geneldir; firmaya özgü süreç ayrıntısı (keşif, teklif süresi, garanti) [MÜŞTERİ] — AS-12.]

---

### 4.4 Yangın içeriğinin sayfalar arası dağılımı (karar)

Envanterde yangınla ilgili içerik üç ayrı yerde geçiyor. Yeni sitede yinelenen içerik olmaması için kural:

| Envanterdeki içerik | Asıl içerik (tam metin) | Diğer sayfada |
|---|---|---|
| §5.1 Zayıf Akım › "Yangın Algılama ve Alarm Sistemleri" | **Yangın Sistemleri (genel)** › "Yangın Algılama ve Alarm" bölümü (`#yangin-algilama`) | Elektrik Taahhüt › Zayıf akım listesinde madde olarak **kalır**, bağlantı verir |
| §5.2 Yangından Koruma › "Sulu yangın söndürme sistemleri" | **Sulu Söndürme** alt sayfası | Mekanik Taahhüt'te bağlantılı madde; Yangın Sistemleri (genel)'de özet kart |
| §5.2 › "Yangın tesisatı pompa istasyonları" | **Yangın Sistemleri (genel)** › "Diğer yangından koruma sistemleri" | Mekanik Taahhüt'te bağlantılı madde; Sulu Söndürme'de bir cümleyle anılır |
| §5.2 › "Gazlı söndürme sistemleri" | **Gazlı Söndürme** alt sayfası | Mekanik Taahhüt'te bağlantılı madde; Yangın (genel)'de özet kart |
| §5.2 › "Köpüklü söndürme sistemleri" | **Köpüklü Söndürme** alt sayfası | Mekanik Taahhüt'te bağlantılı madde; Yangın (genel)'de özet kart |
| §5.2 › "Duman tahliye sistemleri" | **Yangın Sistemleri (genel)** › "Diğer yangından koruma sistemleri" | Mekanik Taahhüt'te bağlantılı madde |
| §5.1 Zayıf Akım › "Acil Anons", "Karbon Monoksit Algılama" | **Elektrik Taahhüt** (asıl yer) | Yangın (genel)'de "İlgili zayıf akım sistemleri" başlığı altında bağlantı |
| §5.3 › "HVAC, Sıhhi Tesisat ve Yangın Sistemleri Dizaynı" | **Tasarım ve Projelendirme** | Yangın (genel) ve alt sayfalardan bağlantı |

Özet: Yangınla ilgili açıklayıcı metin **yalnızca** `/hizmetler/yangin-sistemleri/` ve üç alt sayfasında yer alır. Elektrik ve Mekanik sayfalarında ilgili maddeler listede eksiksiz görünür (envanter listesi bozulmaz) ama açıklama yerine bağlantı taşır.

---

### 4.5 Elektrik Taahhüt — `/hizmetler/elektrik-taahhut/`

**Bölüm sırası:** 1) Giriş · 2) Orta gerilim · 3) Alçak gerilim · 4) Zayıf akım · 5) Otomasyon ve enstrümantasyon · 6) İlgili referanslar · 7) İlgili hizmetler · 8) İletişim çağrısı

**H1:** Elektrik Taahhüt

**Giriş**
"Tesislerin elektrik altyapısını orta gerilimden zayıf akıma kadar kuruyoruz. Kablolama, pano, trafo ve jeneratör montajının yanında test, devreye alma ve elektrik idaresi kabul işlemlerini de yürütüyoruz. Kapsamımız dört başlıkta toplanır: orta gerilim, alçak gerilim, zayıf akım, otomasyon ve enstrümantasyon."

**Orta Gerilim Sistemleri (H2, `#orta-gerilim`)**
- Havai ve yeraltı orta gerilim dağıtım kablolaması
- Orta gerilim trafoları
- Orta gerilim hücreleri
- Orta gerilim jeneratörleri
- Test ve devreye alma hizmetleri
- Enerji müsaade belgesi temini ve elektrik idaresi kabul işleri

**Alçak Gerilim Sistemleri (H2, `#alcak-gerilim`)**
- Busbar sistemleri
- Enerji dağıtım kablolaması
- Alçak gerilim dağıtım, MCC ve aydınlatma panoları
- Kompanzasyon sistemleri
- Kablo tavaları
- İç ve dış mekân aydınlatması
- Cephe aydınlatması
- Acil durum aydınlatması
- UPS sistemleri
- Alçak gerilim jeneratörleri
- Yıldırımdan korunma ve topraklama

**Zayıf Akım Sistemleri (H2, `#zayif-akim`)**
- Yangın algılama ve alarm sistemleri → *bağlantı:* `/hizmetler/yangin-sistemleri/#yangin-algilama`
- Acil anons sistemleri
- Karbon monoksit algılama sistemleri
- CCTV sistemleri
- SMATV ve IPTV sistemleri
- Data ve ses sistemleri
- Otopark kontrol sistemleri
- Merkezi saat sistemleri
- Hemşire çağrı sistemleri
- Kapı ve interkom sistemleri
- Profesyonel ses ve görüntü sistemleri

Not satırı (listenin altında): "Yangın algılama ve söndürme işlerimizin ayrıntısı için [Yangın Sistemleri](/hizmetler/yangin-sistemleri/) sayfasına bakın."

**Otomasyon ve Enstrümantasyon Sistemleri (H2, `#otomasyon`)**
- SCADA ve enerji izleme sistemleri
- Enerji ve endüstriyel enstrümantasyon
- Bina otomasyon ve yönetim sistemleri
- Aydınlatma otomasyon sistemleri
- Elektrik kullanımı izleme ve faturalandırma sistemleri
- Isı izleme sistemi montajı

**İlgili referanslar (H2):** "Elektrik Taahhüt" etiketli kayıtlar — Eti Bakır Mazıdağı Fosfat Tesisi, ABD Bağdat Hava Üssü.

**İlgili hizmetler:** Tasarım ve Projelendirme · Yangın Sistemleri

Düzeltme notları: "Kablolama" → "kablolaması", "Trafolar/Hücreler/Jeneratörler" → belirtili tamlama, "Mekan" → "mekân", "Interkom" → "interkom", "Yıldırımdan Koruma" → "Yıldırımdan korunma" [yerleşik terim; ONAY gerekmez, anlam aynı], "Isı İzleme Sistem Montajı" → "Isı izleme sistemi montajı". 34 maddenin tamamı korunmuştur (6 + 11 + 11 + 6).

---

### 4.6 Mekanik Taahhüt — `/hizmetler/mekanik-taahhut/`

**Bölüm sırası:** 1) Giriş · 2) HVAC · 3) Sıhhi tesisat · 4) Yangından koruma (bağlantılı kısa liste) · 5) İlgili hizmetler · 6) İletişim çağrısı

**H1:** Mekanik Taahhüt

**Giriş**
"Isıtma, soğutma, havalandırma ve sıhhi tesisat sistemlerini kuruyoruz. Hava kanalı imalatından pompa istasyonlarına, soğuk ve hijyenik odalardan arıtma sistemlerine kadar tesisin mekanik altyapısını üstleniyoruz. Yangından koruma tesisatları da mekanik kapsamımızın parçasıdır; ayrıntısı Yangın Sistemleri sayfasındadır."

**HVAC Sistemleri (H2, `#hvac`)**
- Isıtma ve soğutma sistemleri
- Havalandırma sistemleri
- Hava kanalı imalatı ve montajı
- Pompa istasyonları
- Soğuk odalar
- Hijyenik odalar
- Değişken debili klima sistemleri

**Sıhhi Tesisat Sistemleri (H2, `#sihhi-tesisat`)**
- Sıhhi tesisat ekipmanları
- Kullanma suyu basınçlandırma ve dağıtım sistemleri
- Sıcak su basınçlandırma ve dağıtım sistemleri
- Pis su tesisatları
- Yağmur suyu tesisatları
- Arıtma ve yumuşatma sistemleri
- Bahçe sulama sistemleri

**Yangından Koruma Sistemleri (H2, `#yangindan-koruma`)**
Tek cümle: "Yangından koruma tesisatlarını ayrı bir hizmet grubu olarak yürütüyoruz:"
- Sulu yangın söndürme sistemleri → `/hizmetler/yangin-sistemleri/sulu-sondurme/`
- Yangın tesisatı pompa istasyonları → `/hizmetler/yangin-sistemleri/#diger-sistemler`
- Gazlı söndürme sistemleri → `/hizmetler/yangin-sistemleri/gazli-sondurme/`
- Köpüklü söndürme sistemleri → `/hizmetler/yangin-sistemleri/kopuklu-sondurme/`
- Duman tahliye sistemleri → `/hizmetler/yangin-sistemleri/#diger-sistemler`

Düğme: **Yangın Sistemleri** → `/hizmetler/yangin-sistemleri/`

**İlgili referanslar:** Envanterde yalnızca HVAC/sıhhi tesisat kapsamlı bir referans yok. Bölüm, "Mekanik Taahhüt" etiketli kayıt oluşana kadar gösterilmez (AS-17).

**İlgili hizmetler:** Tasarım ve Projelendirme · Elektrik Taahhüt

Düzeltme notları: "HVAC SİSTEMLERİ" büyük harf → başlık düzeni; "Hava Kanalları İmalat ve Montajı" → "Hava kanalı imalatı ve montajı"; büyük/küçük harf tutarlılığı. 19 maddenin tamamı korunmuştur (7 + 5 + 7).

---

### 4.7 Yangın Sistemleri (genel) — `/hizmetler/yangin-sistemleri/`

**Bölüm sırası:** 1) Giriş · 2) Söndürme sistemleri (3 kart) · 3) Yangın algılama ve alarm · 4) Diğer yangından koruma sistemleri · 5) Bakım ve periyodik kontrol · 6) Standartlar · 7) İlgili referanslar · 8) İlgili hizmetler · 9) İletişim çağrısı

**H1:** Yangın Algılama ve Söndürme Sistemleri

**Giriş**
"Yangın algılama ve alarm sistemleri ile gazlı, sulu ve köpüklü söndürme sistemlerini tasarlıyor, kuruyor, devreye alıyor ve bakımını yapıyoruz. Hastane, otel, fabrika, santral ve depo gibi farklı yapılarda çalıştık; referanslarımızın büyük bölümü bu alandadır."
[Dayanak: envanter §6 — 19 kaydın 18'i yangın kapsamlı; yapı türleri referans başlıklarından.]

**Söndürme Sistemleri (H2)**

| Kart | Metin | Bağlantı |
|---|---|---|
| Gazlı Söndürme | FM200, CO₂ ve inert gazlı sistemler. Söndürme sonrası kalıntı bırakmaz; korunan alan kısa sürede yeniden kullanılır. | Gazlı söndürme sistemleri |
| Sulu Söndürme | Sprinkler, yangın dolabı ve hidrant sistemleri. Hidrolik hesaplar VdS onaylı programlarla yapılır. | Sulu söndürme sistemleri |
| Köpüklü Söndürme | Yakıt ve yanıcı sıvı yangınları için köpüklü sistemler. | Köpüklü söndürme sistemleri |

**Yangın Algılama ve Alarm Sistemleri (H2, `#yangin-algilama`)**
"Yangın algılama ve alarm sistemlerini kuruyor, söndürme sistemleriyle birlikte devreye alıyoruz. İGDAŞ, Üsküdar Devlet Hastanesi, Ak Gıda, Som Ambalaj ve Türk Telekom santrallerinde algılama ve söndürme sistemlerini birlikte uyguladık."
[Dayanak: envanter §5.1 maddesi ve §6'daki 9, 15, 17, 18, 19 no.lu başlıklar. Envanterde yangın algılama için açıklayıcı metin **yok**; sistem tipleri (adresli/konvansiyonel), markalar ve standartlar [MÜŞTERİ] — AS-18. Gelene kadar bölüm bu iki cümleyle kalır.]

İlgili zayıf akım sistemleri: acil anons sistemleri · karbon monoksit algılama sistemleri → `/hizmetler/elektrik-taahhut/#zayif-akim`

**Diğer Yangından Koruma Sistemleri (H2, `#diger-sistemler`)**
- Yangın tesisatı pompa istasyonları
- Duman tahliye sistemleri

[Envanterde bu iki madde için açıklama yok; yalnızca liste olarak verilir. Açıklama [MÜŞTERİ] — AS-18.]

**Bakım ve Periyodik Kontrol (H2, `#bakim`)**
"Kurduğumuz sistemlerin bakımını da yapıyoruz. Sulu söndürme sistemlerinde bakım, periyodik kontrol ve testleri NFPA'nın muayene, test ve bakım esaslarına göre kendi personelimizle yürütüyoruz. Gazlı ve köpüklü söndürme sistemlerinin periyodik bakımlarını da üstleniyoruz."
[Dayanak: envanter §5.4 üç metin; §6'daki 2, 3, 5, 6 no.lu "bakım" başlıkları. Bakım sözleşmesi türleri, periyotlar, başka firmaların kurduğu sistemlere bakım verilip verilmediği [MÜŞTERİ] — AS-19.]

**Esas Aldığımız Standartlar (H2)**
- Yangın Yönetmeliği [resmî adı: Binaların Yangından Korunması Hakkında Yönetmelik — [TEYİT] AS-20]
- NFPA standartları
- EN standartları
- VdS onaylı hidrolik hesap programları (sulu ve köpüklü sistem tasarımında)

[Dayanak: envanter §5.4. Yalnızca metinlerde adı geçen standartlar yazıldı; standart numarası eklenmedi.]

**İlgili referanslar (H2):** "Yangın Sistemleri" etiketli kayıtlardan 6 kart + "Tümünü Gör" → `/referanslar/?hizmet=yangin-sistemleri`

**İlgili hizmetler:** Tasarım ve Projelendirme · Elektrik Taahhüt (zayıf akım) · Mekanik Taahhüt

---

### 4.8 Gazlı Söndürme — `/hizmetler/yangin-sistemleri/gazli-sondurme/`

**Bölüm sırası:** 1) Giriş · 2) Sistem türleri · 3) Çözümün belirlenmesi · 4) Tedarik, montaj, devreye alma ve bakım · 5) İlgili referanslar · 6) Diğer söndürme sistemleri · 7) İletişim çağrısı

**H1:** Gazlı Söndürme Sistemleri

**Giriş**
"Gazlı söndürme sistemleri, söndürme sonrasında iz bırakmaz ve çevresine zarar vermez. Korunan hacim kısa sürede yeniden kullanılabilir. Bu nedenle günümüzde sıkça tercih edilir."

**Sistem Türleri (H2)**
"En sık tercih edilen gazlı söndürme sistemleri şunlardır:"
- FM200 gazlı söndürme sistemleri
- CO₂ gazlı söndürme sistemleri
- İnert gazlı (argon) söndürme sistemleri

**Doğru Sistemin Seçimi (H2)** [ONAY]
"Her söndürme sisteminin, duruma ve yere göre üstün ve zayıf yanları vardır. Uygulanacak alanın özelliklerine ve şartnamelere göre en uygun çözümü birlikte belirliyoruz."
[Eski: "…D Sistem en uygun çözümü sunmaktadır." "D Sistem" başka bir firmaya ait ifade olduğu için çıkarıldı (envanter §11.3); cümlenin anlamı — çözümün alana ve şartnameye göre seçilmesi — korundu.]

**Tedarik, Montaj, Devreye Alma ve Bakım (H2)**
"Tedarik ettiğimiz tüm sistemler uluslararası sertifika ve onaylara sahiptir. Montaj ve devreye alma işlemlerini NFPA kurallarına ve ilgili uluslararası standartlara göre yapıyoruz. Kurduğumuz gazlı söndürme sistemlerinin bakımını da üstleniyoruz."
[Hangi sertifika/onaylar ve hangi markalar olduğu envanterde yok — [MÜŞTERİ] AS-21. "NFPA kurallarına yahut uluslararası standartlara" → "ve ilgili"; anlam: NFPA veya geçerli diğer uluslararası standart.]

**İlgili referanslar (H2):** "Gazlı Söndürme" etiketli kayıtlar (envanterde 12): Torku, Cihan Metal, İGDAŞ, ABD Bağdat Hava Üssü, Hilton Otel Sivas, Sheraton Otel Batum, Ergani Devlet Hastanesi, Üsküdar Devlet Hastanesi, DHL, Ak Gıda, Som Ambalaj, Türk Telekom Santralleri. Sayfada 6 kart + "Tümünü Gör" → `/referanslar/?hizmet=gazli-sondurme`

Düzeltme notları: Eski metnin ilk paragrafındaki iki cümle aynı şeyi iki kez söylüyordu ("iz bırakmaması…" / "ayak izi bırakmaması…"); tek girişte birleştirildi. "Inert (argon)gazlı" → "inert gazlı (argon)". "mahalin" → "alanın". "çevresine zarar vermemesi" ifadesi kaynak metindeki gibi bırakıldı; kastedilenin çevredeki ekipman mı doğal çevre mi olduğu belirsiz [TEYİT] (AS-21). Korunan teknik olgular: FM200, CO₂, inert gaz (argon), uluslararası sertifika/onay, NFPA, bakım.

---

### 4.9 Sulu Söndürme — `/hizmetler/yangin-sistemleri/sulu-sondurme/`

**Bölüm sırası:** 1) Giriş · 2) Sistem türleri · 3) Tasarım ve hidrolik hesap · 4) Montaj · 5) Bakım, periyodik kontrol ve test · 6) İlgili referanslar · 7) Diğer söndürme sistemleri · 8) İletişim çağrısı

**H1:** Sulu Söndürme Sistemleri

**Giriş**
"Su, doğada kolay bulunur ve yangına doğrudan etki eder. Bu nedenle B, D ve E sınıfı yangınlar dışında en çok kullanılan söndürme maddesidir."
[Yangın sınıfları kaynak metindeki gibi bırakıldı; güncel sınıflandırmaya (TS EN 2) uygunluğu müşterinin teknik ekibince [TEYİT] — AS-22.]

**Sistem Türleri (H2)**
- Sprinkler sistemleri
- Yangın dolabı sistemleri
- Hidrant sistemleri
- Diğer sulu söndürme sistemleri

"Bu sistemleri besleyen yangın tesisatı pompa istasyonlarını da kuruyoruz." → bağlantı: `/hizmetler/yangin-sistemleri/#diger-sistemler`
[Dayanak: envanter §5.2 "Yangın tesisatı pompa istasyonları".]

**Tasarım ve Hidrolik Hesap (H2)**
"Her sistemin tasarımını mühendislik birimimiz, sistemin kendi ölçütlerine göre yapar. Hidrolik hesap ve projelendirmede VdS (Almanya) onaylı hidrolik hesap programları kullanıyoruz.

Tasarımda öncelikle Yangın Yönetmeliği'ni esas alıyoruz. Yönetmeliğin yeterli olmadığı durumlarda NFPA ve EN standartlarına başvuruyoruz."

**Montaj (H2)**
"Montajı kendi personelimizle yapıyoruz. Süpervizörlük hizmeti de veriyoruz."

**Bakım, Periyodik Kontrol ve Test (H2)**
"Bakım, periyodik kontrol ve testleri de kendi personelimiz yürütür. Bu işlerde NFPA'nın muayene, test ve bakım esaslarını uyguluyoruz."
[Kaynak metin: "NFPA Test And Maintenance, Inspection" dokümanı. Belge adı kaynakta eksik/karışık; büyük olasılıkla NFPA 25 kastediliyor. Standart numarası müşteri teyit ederse eklenir — AS-22.]

**İlgili referanslar (H2):** "Sulu Söndürme" etiketli kayıtlar: Torku, Cihan Metal.

Düzeltme notları: "B,D ve E" → "B, D ve E"; "harici" → "dışında"; "söndürme kaynağı" → "söndürme maddesi"; "VDS" → "VdS"; "hidroik" → "hidrolik"; "montaj-bakım ve süpervizörlükleri sağlanmaktadır" → etken cümleler; "bakım ," boşluk hatası. Korunan teknik olgular: sprinkler, yangın dolabı, hidrant; mühendislik birimi; VdS onaylı program; Yangın Yönetmeliği → NFPA → EN önceliği; kendi personeliyle montaj ve bakım; NFPA esaslı bakım.

---

### 4.10 Köpüklü Söndürme — `/hizmetler/yangin-sistemleri/kopuklu-sondurme/`

**Bölüm sırası:** 1) Giriş · 2) Köpük türleri ve sistem çeşitleri · 3) Tasarım, tedarik, montaj ve bakım · 4) Başlıca kullanım alanları · 5) İlgili referanslar · 6) Diğer söndürme sistemleri · 7) İletişim çağrısı

**H1:** Köpüklü Söndürme Sistemleri

**Giriş**
"Köpüklü söndürme sistemleri daha çok yakıt ve yanıcı sıvı yangınlarının söndürülmesinde kullanılır."

**Köpük Türleri ve Sistem Çeşitleri (H2)**
"Köpük konsantresinin sentetik bazlı, protein bazlı, film oluşturucu ve alkole dayanıklı çeşitleri vardır. Sistemler elle veya otomatik olarak devreye girebilir.

Köpük genellikle şu sistemlerde kullanılır:"
- Sprinkler sistemleri
- Yangın dolapları
- Köpük monitörleri
- Köpük jeneratörü sistemleri

**Tasarım, Tedarik, Montaj ve Bakım (H2)**
"Tedarik ettiğimiz köpük sistemi malzemelerinin tümü onaylıdır. Montajını ve periyodik bakımlarını biz yapıyoruz. Tasarımda VdS (Almanya) onaylı hidrolik hesap programları kullanıyor, tüm hesap verilerini müşteriye teslim ediyoruz."
[Hangi onaylar olduğu envanterde yok — [MÜŞTERİ] AS-21.]

**Başlıca Kullanım Alanları (H2)**
- İlaç, gıda, lastik, baskı ve akaryakıt üretim ve depolama tesisleri
- Yanıcı ve parlayıcı kimyasal madde üretim tesisleri ve depoları
- Uçak ve helikopter hangarları
- Akaryakıt dolum istasyonları
- Denizcilik sektöründe kargo tankları ve kimyasal madde tankları
- Tersane iskeleleri ve marinalar
- Rafineriler
- Savunma sanayisinde açık ve kapalı depolar ile dolum istasyonları
- Orman yangınları

[Bu liste sistemin genel kullanım alanlarıdır, firmanın iş yaptığı yerler değildir; başlık bu yüzden "Başlıca Kullanım Alanları" olarak kalır, "Hizmet Verdiğimiz Sektörler" yapılmaz.]

**İlgili referanslar (H2):** "Köpüklü Söndürme" etiketli kayıt: THY Opet.

Düzeltme notları: "Manuel yahut" → "elle veya"; "Köpük ajanı" → "köpük"; "VDS" → "VdS"; "doneler" → "hesap verileri"; "Tersanelerde iskele ve marinalar" → "Tersane iskeleleri ve marinalar"; "Deniz sektörü" → "Denizcilik sektöründe". 9 kullanım alanının tamamı korunmuştur.

---

### 4.11 Tasarım ve Projelendirme — `/hizmetler/tasarim-ve-projelendirme/`

**Bölüm sırası:** 1) Giriş · 2) Tasarım kapsamı · 3) Tasarımda kullandığımız araç ve standartlar · 4) İlgili hizmetler · 5) İletişim çağrısı

**H1:** Tasarım ve Projelendirme

**Giriş**
"Elektrik, mekanik ve yangın sistemlerinin tasarımını yapıyoruz. Tasarımını yaptığımız sistemleri uygulayabiliyor, yalnızca projelendirme hizmeti de verebiliyoruz."
[İkinci cümle [TEYİT] — AS-23: yalnızca tasarım hizmeti (uygulamasız) veriliyor mu? Dayanak: Efa Bilişim referansındaki "Proje Desteği". Teyit gelmezse cümle çıkarılır.]

**Tasarım Kapsamı (H2)**
- Alçak gerilim sistem tasarımı
- Orta gerilim sistem tasarımı
- Zayıf akım ve otomasyon sistem tasarımı
- HVAC, sıhhi tesisat ve yangın sistemleri tasarımı

**Yangın Sistemlerinde Tasarım (H2)**
"Sulu ve köpüklü söndürme sistemlerinin hidrolik hesaplarında VdS (Almanya) onaylı programlar kullanıyoruz. Tasarımda Yangın Yönetmeliği'ni, yönetmeliğin yeterli olmadığı durumlarda NFPA ve EN standartlarını esas alıyoruz."
[Dayanak: envanter §5.4. Elektrik ve mekanik tasarımda kullanılan yazılım/standartlar envanterde yok — [MÜŞTERİ] AS-23.]

**İlgili referanslar:** "Tasarım ve Projelendirme" etiketli kayıt: Efa Bilişim (etiket [TEYİT]). Teyit gelmezse bölüm gösterilmez.

**İlgili hizmetler:** Elektrik Taahhüt · Mekanik Taahhüt · Yangın Sistemleri

Düzeltme notu: "Dizayn" → "tasarım" (4 maddenin tamamı korunmuştur).

---

### 4.12 Referanslar — `/referanslar/` ve `/referanslar/[slug]/`

#### Liste sayfası

**H1:** Referanslar

**Giriş**
"2010'dan bu yana sanayi tesisleri, hastaneler, oteller, enerji ve telekom kuruluşları için yürüttüğümüz işlerden bir bölümü. Sektöre veya hizmet türüne göre süzebilirsiniz."

**Süzgeç etiketleri:** "Sektör" · "Hizmet türü" · "Tümü" · "Süzgeçleri Temizle"
**Sonuç sayacı:** "{n} referans gösteriliyor"
**Boş sonuç:** "Bu seçime uyan referans yok. Süzgeçleri temizleyip yeniden deneyin."
**Kart:** kısa ad (H2/H3) · kapsam cümlesi · sektör etiketi · şehir, ülke · bağlantı metni: kısa adın kendisi (kartın tamamı tıklanır)

#### Etiket taksonomisi (öneri — 02 ve 04 ile uyumlanacak)

**Sektör** (her referansa tek değer):

| Etiket | Anahtar (kod) | Kayıt sayısı |
|---|---|---|
| Endüstri ve Üretim | `endustri-uretim` | 8 |
| Sağlık | `saglik` | 3 |
| Otel ve Konaklama | `otel` | 2 |
| Enerji ve Altyapı | `enerji-altyapi` | 2 |
| Telekom ve Bilişim | `telekom-bilisim` | 2 |
| Lojistik | `lojistik` | 1 |
| Savunma ve Kamu | `savunma-kamu` | 1 |

Kural: Devlet hastaneleri "Sağlık" altındadır (kamu yapısı olsa da okurun aradığı sektör sağlıktır). "Savunma ve Kamu", başka sektöre girmeyen kamu/askerî yapılar içindir.

**Hizmet türü** (her referansa bir veya daha çok değer):

| Etiket | Anahtar (kod) | Kayıt sayısı | Not |
|---|---|---|---|
| Elektrik Taahhüt | `elektrik-taahhut` | 2 | |
| Mekanik Taahhüt | `mekanik-taahhut` | 0 | Kayıt yokken süzgeçte gösterilmez (AS-17) |
| Yangın Sistemleri | `yangin-sistemleri` | 18 | Üst etiket: yangınla ilgili her kayda verilir; alt türü belirsiz kayıtlar yalnızca bunu taşır |
| Yangın Algılama | `yangin-algilama` | 5 | |
| Gazlı Söndürme | `gazli-sondurme` | 12 | FM200, CO₂ ve "otomatik gazlı" başlıkları |
| Sulu Söndürme | `sulu-sondurme` | 2 | |
| Köpüklü Söndürme | `kopuklu-sondurme` | 1 | |
| Bakım ve Servis | `bakim-servis` | 4 | |
| Tasarım ve Projelendirme | `tasarim-projelendirme` | 1 | [TEYİT] |

Etiketler yalnızca eski başlıklardaki sözcüklerden türetilmiştir; başlıkta geçmeyen hizmet etiketi verilmemiştir.

#### 19 referansın içerik tablosu

Tüm kayıtlarda **tarih: doğrulanacak** — eski sitede hepsi 2016–2019 girilmiş (envanter §6, §11.6); müşteri teyit edene kadar tarih sayfada gösterilmez (AS-24).

| # | Yeni slug | Kısa ad (düzeltilmiş) | Kapsam cümlesi | Sektör | Hizmet türü etiketleri | Ülke | Şehir | Tarih |
|---|---|---|---|---|---|---|---|---|
| 1 | `eti-bakir-mazidagi-fosfat-tesisi` | Eti Bakır Mazıdağı Fosfat Tesisi | Elektrik taahhüt işleri. | Endüstri ve Üretim | Elektrik Taahhüt | Türkiye | Mardin | doğrulanacak |
| 2 | `medical-park-hastaneleri` | Medical Park Hastaneleri | Yangın sistemlerinin bakımı ve yeni kurulumları. | Sağlık | Yangın Sistemleri · Bakım ve Servis | Türkiye | Türkiye geneli | doğrulanacak |
| 3 | `konya-seker-fabrikasi` | Konya Şeker Fabrikası | Bakım-onarım ve yangın söndürme sistemleri. | Endüstri ve Üretim | Yangın Sistemleri · Bakım ve Servis | Türkiye | Konya | doğrulanacak |
| 4 | `torku` | Torku | Pompa dairesi, sulu söndürme ve FM200 gazlı söndürme sistemleri. | Endüstri ve Üretim [TEYİT] | Yangın Sistemleri · Sulu Söndürme · Gazlı Söndürme | Türkiye | Konya | doğrulanacak |
| 5 | `kartal-hali` | Kartal Halı | Yangın sistemlerinin kurulumu ve bakımı. | Endüstri ve Üretim | Yangın Sistemleri · Bakım ve Servis | Türkiye | Gaziantep | doğrulanacak |
| 6 | `kaplan-kardesler` | Kaplan Kardeşler | Yangın sistemlerinin kurulumu ve bakımı. | Endüstri ve Üretim [TEYİT] | Yangın Sistemleri · Bakım ve Servis | Türkiye | Gaziantep | doğrulanacak |
| 7 | `efa-bilisim` | Efa Bilişim | Yangın söndürme sistemleri ve proje desteği. | Telekom ve Bilişim | Yangın Sistemleri · Tasarım ve Projelendirme [TEYİT] | Türkiye | Kahramanmaraş | doğrulanacak |
| 8 | `cihan-metal` | Cihan Metal | CO₂ ve sulu söndürme sistemleri, altyapı çalışmaları. | Endüstri ve Üretim | Yangın Sistemleri · Gazlı Söndürme · Sulu Söndürme | Türkiye | İstanbul | doğrulanacak |
| 9 | `igdas` | İGDAŞ | Yangın algılama ve otomatik gazlı söndürme sistemleri. | Enerji ve Altyapı | Yangın Sistemleri · Yangın Algılama · Gazlı Söndürme | Türkiye | İstanbul | doğrulanacak |
| 10 | `abd-bagdat-hava-ussu` | ABD Bağdat Hava Üssü | Elektrik, altyapı ve gazlı söndürme sistemleri. | Savunma ve Kamu | Elektrik Taahhüt · Yangın Sistemleri · Gazlı Söndürme | Irak | Bağdat | doğrulanacak |
| 11 | `hilton-otel-sivas` | Hilton Otel Sivas | Otomatik gazlı söndürme sistemleri. | Otel ve Konaklama | Yangın Sistemleri · Gazlı Söndürme | Türkiye | Sivas | doğrulanacak |
| 12 | `sheraton-otel-batum` | Sheraton Otel Batum | Otomatik gazlı söndürme sistemleri. | Otel ve Konaklama | Yangın Sistemleri · Gazlı Söndürme | Gürcistan | Batum | doğrulanacak |
| 13 | `ergani-devlet-hastanesi` | Ergani Devlet Hastanesi | Otomatik gazlı söndürme sistemleri. | Sağlık | Yangın Sistemleri · Gazlı Söndürme | Türkiye | Diyarbakır | doğrulanacak |
| 14 | `thy-opet` | THY Opet | Otomatik köpüklü söndürme sistemleri. | Enerji ve Altyapı [TEYİT] | Yangın Sistemleri · Köpüklü Söndürme | Türkiye | İstanbul | doğrulanacak |
| 15 | `uskudar-devlet-hastanesi` | Üsküdar Devlet Hastanesi | Yangın algılama ve gazlı söndürme sistemleri. | Sağlık | Yangın Sistemleri · Yangın Algılama · Gazlı Söndürme | Türkiye | İstanbul | doğrulanacak |
| 16 | `dhl` | DHL | Otomatik gazlı söndürme sistemleri. | Lojistik | Yangın Sistemleri · Gazlı Söndürme | Türkiye | İstanbul | doğrulanacak |
| 17 | `ak-gida` | Ak Gıda | Yangın algılama ve otomatik gazlı söndürme sistemleri. | Endüstri ve Üretim | Yangın Sistemleri · Yangın Algılama · Gazlı Söndürme | Türkiye | Sakarya | doğrulanacak |
| 18 | `som-ambalaj` | Som Ambalaj | Yangın algılama ve CO₂ gazlı söndürme sistemi. | Endüstri ve Üretim | Yangın Sistemleri · Yangın Algılama · Gazlı Söndürme | Türkiye | Karaman | doğrulanacak |
| 19 | `turk-telekom-santralleri` | Türk Telekom Santralleri | Santrallerde yangın algılama ve FM200 gazlı söndürme sistemleri. | Telekom ve Bilişim | Yangın Sistemleri · Yangın Algılama · Gazlı Söndürme | Türkiye | Türkiye geneli [TEYİT] | doğrulanacak |

Kayıt bazında düzeltme ve teyit notları:

| # | Not |
|---|---|
| 1 | "Eti Bakir" → "Eti Bakır". Kapsam cümlesi detay başlığında yok; ana sayfa slaytındaki "Elektrik Taahhüt İşleri"nden alındı. Slaytta "Etibakır Fosfat Fabrikası", detayda "Mazıdağı Fosfat Tesisi" yazıyor; detaydaki ad esas alındı [TEYİT]. |
| 2 | Şehir alanında "Türkiye Geneli" yazıyor; hangi hastaneler olduğu bilinmiyor [MÜŞTERİ]. |
| 3 | "Bakı Onarım" → "Bakım-onarım"; "Sismtemleri" → "sistemleri". |
| 4 | "TORKU" → "Torku". Sektör başlıktan anlaşılmıyor; öneri teyide bağlı. "Pompa dairesi"nin yangın pompa dairesi olduğu varsayıldı [TEYİT]; mekanik kapsamlıysa "Mekanik Taahhüt" etiketi eklenir. |
| 5, 6 | Hangi yangın sistemleri olduğu başlıkta yok; yalnızca üst etiket verildi. 6'nın sektörü başlıktan anlaşılmıyor [TEYİT]. |
| 7 | "Proje Desteği" → "Tasarım ve Projelendirme" etiketi [TEYİT]. |
| 8 | "Co2" → "CO₂"; "Alt Yapı" → "altyapı". "Altyapı çalışmaları"nın kapsamı (elektrik/mekanik/inşaat) bilinmiyor; etiket verilmedi [MÜŞTERİ]. |
| 9 | "Söndürme Cihazları Söndürme Cihazları" tekrarı giderildi. "Cihazları" → "sistemleri" [ONAY] (diğer kayıtlarla tutarlılık; 01 §2 konumlandırması). |
| 10 | "Alt Yapı" → "altyapı". Kurum adının yazımı ve yayımlanabilirliği [TEYİT] (AS-25). |
| 11 | "Cihazları" → "sistemleri": ana sayfa slaytında aynı iş "Otomatik Gazlı Söndürme Sistemleri" olarak geçiyor. Otelin tam adı [TEYİT]. |
| 12 | Kısa ada "Otel" eklendi (#11 ile tutarlılık). |
| 13 | Şehir alanı Diyarbakır (Ergani ilçesi). |
| 14 | Sektör başlıktan kesin anlaşılmıyor (akaryakıt/havacılık); öneri teyide bağlı. Kurum adının doğru yazımı [TEYİT]. |
| 18 | "Co2 Yangın Algılama ve co2 Söndürme Sistemi" → tekrar giderildi. |
| 19 | "Santral … Projesi" → "Santralleri" (ana sayfa slaytındaki "Türk Telekom Santralleri" esas alındı). Şehir alanında yalnızca "Türkiye" yazıyor; "Türkiye geneli" varsayımı [TEYİT]. |

Slug kuralı: kurum/tesis adı; ad tek başına ayırt etmiyorsa yer adı eklenir; hizmet türü slug'a yazılmaz (kapsam güncellenirse URL değişmesin). Slug'lar yayından sonra değiştirilmez.

#### Detay sayfası şablonu

| Bölüm | İçerik | Kaynak alan |
|---|---|---|
| Ekmek kırıntısı | Ana Sayfa › Referanslar › {Kısa ad} | — |
| H1 | {Kısa ad} | `title` |
| Alt başlık | {Kapsam cümlesi} | `scope` |
| Künye | Sektör · Hizmet türü (bağlantılı etiketler) · Konum: {Şehir}, {Ülke} · Tarih (yalnızca doğrulanmışsa) | `sector`, `services`, `city`, `country`, `startDate/endDate` |
| Açıklama | [MÜŞTERİ] Yapılan iş, kapsam, kullanılan sistem (2–4 cümle). Yoksa bölüm gösterilmez | `body` |
| Görsel | 05'teki kurala göre; müşteri fotoğrafı yoksa sektör temsili lisanslı görsel | — |
| Benzer referanslar | Aynı sektör veya hizmetten 3 kart | — |
| İletişim çağrısı | "Benzer bir proje mi planlıyorsunuz?" · Teklif Al | — |

Künye etiketleri: "Sektör", "Hizmet", "Konum", "Tarih".
Açıklama metni uydurulmaz. Müşteri ayrıntı vermediği sürece detay sayfası başlık + kapsam cümlesi + künyeden oluşur (zayıf içerik riski ve dizine alma politikası: 07 §4.8).

---

### 4.13 İletişim — `/iletisim/`

**Bölüm sırası:** 1) Giriş · 2) İletişim bilgileri · 3) Teklif formu (`#teklif-formu`) · 4) Harita ve yol tarifi

**H1:** İletişim ve Teklif Talebi

**Giriş**
"Projeniz veya bakım ihtiyacınız için bize yazın ya da arayın. Formu doldurursanız sizi biz arayalım."

**İletişim Bilgileri (H2)**

| Etiket | Değer | Bağlantı | Durum |
|---|---|---|---|
| Adres | Velibaba Mah. Mimar Sinan Cad. Sanayi Sitesi B1 Blok No: 15/5-8, 34896 Pendik / İstanbul | "Yol Tarifi Al" → harita | "San. Sit. B1" açılımı ve posta kodu [TEYİT] (AS-3); teyit gelmezse envanterdeki biçim aynen yazılır |
| Telefon | 0216 307 18 62 | `tel:+902163071862` | Envanter |
| Telefon / Faks | 0216 307 18 49 | — | [TEYİT] (AS-4) |
| Cep | 0507 201 24 25 | `tel:+905072012425` | [TEYİT] (AS-5) |
| WhatsApp | "WhatsApp'tan Yazın" | `https://wa.me/90…` | Numara [MÜŞTERİ] (AS-6) |
| E-posta | info@axisteknik.com | `mailto:` | Envanter |
| Çalışma saatleri | — | — | [MÜŞTERİ] (AS-2); gelmezse satır gösterilmez |

**Teklif Formu (H2, `#teklif-formu`)**

Başlık: **Teklif Formu**
Açıklama: "Yıldızlı (*) alanlar zorunludur."

Alan listesi ve doğrulama kurallarının sahibi 02'dir; aşağıdaki mikro metinler önerilen alan setine göre yazılmıştır.

| Alan | Etiket | Yardım / yer tutucu | Hata mesajı |
|---|---|---|---|
| Ad soyad* | Adınız Soyadınız | — | "Adınızı ve soyadınızı yazın." |
| Firma | Firma / Kurum | — | — |
| E-posta* | E-posta Adresiniz | "ornek@firma.com" (yer tutucu) | Boş: "E-posta adresinizi yazın." · Biçim: "Geçerli bir e-posta adresi yazın. Örnek: ad@firma.com" |
| Telefon | Telefon Numaranız | "Sizi arayabilmemiz için. Örnek: 0216 000 00 00" | "Telefon numarasını alan koduyla yazın. Örnek: 0216 000 00 00" |
| Konu* | İlgilendiğiniz Hizmet | Seçenekler: Elektrik Taahhüt · Mekanik Taahhüt · Yangın Algılama ve Söndürme Sistemleri · Tasarım ve Projelendirme · Bakım ve Servis · Diğer | "Bir hizmet seçin." |
| Mesaj* | Mesajınız | "Tesisin türü, bulunduğu şehir ve ihtiyacınızı kısaca yazın." | Boş: "Mesajınızı yazın." · Kısa: "Mesajınız en az 10 karakter olmalı." |
| KVKK* | (onay kutusu — aşağıda) | — | "Devam etmek için aydınlatma metnini okuduğunuzu onaylayın." |
| Spam doğrulaması | (Turnstile) | — | "Doğrulama tamamlanamadı. Sayfayı yenileyip yeniden deneyin." |
| Gönder düğmesi | **Talebi Gönder** | Gönderilirken: "Gönderiliyor…" | — |

**KVKK onay cümlesi (taslak)** [HUKUK]
"[KVKK Aydınlatma Metni](/kvkk-aydinlatma-metni/)'ni okudum; kişisel verilerimin talebimi yanıtlamak amacıyla işleneceğini biliyorum."

[Not: Bu cümle bir **bilgilendirme onayıdır**, açık rıza değildir. Form verisi yalnızca talebi yanıtlamak için işleniyorsa açık rıza gerekmeyebilir; pazarlama iletisi gönderilecekse ayrı ve isteğe bağlı bir izin kutusu gerekir. Nihai metin ve hukuki dayanak hukuk danışmanı onayına bağlıdır — AS-26.]

**Form mesajları**

| Durum | Metin |
|---|---|
| Başarı (başlık) | "Talebiniz bize ulaştı." |
| Başarı (metin) | "Teşekkür ederiz. Sizi en kısa sürede arayacağız. Acil durumlar için: 0216 307 18 62." |
| Genel hata | "Talebiniz gönderilemedi. Lütfen yeniden deneyin ya da bizi 0216 307 18 62 numaralı telefondan arayın." |
| Doğrulama özeti | "Formda {n} alan düzeltilmeli." |
| Ağ hatası | "Bağlantı kurulamadı. İnternet bağlantınızı denetleyip yeniden deneyin." |

["En kısa sürede" yerine somut süre müşteri taahhüt ederse yazılır — AS-12.]

**Harita ve Yol Tarifi (H2)**
Metin: "Velibaba Mahallesi, Pendik."
Düğme: **Yol Tarifi Al** (harita uygulamasında açılır). Harita gömülecekse çerez iznine bağlı yüklenir; izin yoksa durağan görsel + bağlantı (karar 06). Konum iğnesinin koordinatı [MÜŞTERİ] (AS-3).

---

### 4.14 KVKK Aydınlatma Metni — `/kvkk-aydinlatma-metni/`

> **[HUKUK] Bu sayfanın tam metni bu belgede yazılmaz.** Aşağıdaki yalnızca başlık iskeletidir. Metin, müşterinin hukuk danışmanı tarafından yazılır veya onaylanır; onaysız yayımlanmaz (AS-26).

**H1:** Kişisel Verilerin Korunması Hakkında Aydınlatma Metni

1. Veri Sorumlusu — [MÜŞTERİ: resmî unvan, adres, MERSİS no., iletişim; varsa KEP adresi]
2. İşlenen Kişisel Veriler — (form: ad soyad, firma, e-posta, telefon, mesaj içeriği; teknik: IP adresi, çerez verileri)
3. Kişisel Verilerin İşlenme Amaçları — (talebin yanıtlanması, teklif hazırlanması, iletişim)
4. İşlemenin Hukuki Sebepleri — [HUKUK]
5. Kişisel Verilerin Aktarıldığı Taraflar ve Aktarım Amaçları — (barındırma, e-posta gönderim, spam koruma ve analitik hizmet sağlayıcıları; yurt dışına aktarım değerlendirmesi [HUKUK] — sağlayıcı listesi 06'dan gelir)
6. Kişisel Verilerin Toplanma Yöntemi
7. Saklama Süresi — [MÜŞTERİ/HUKUK]
8. İlgili Kişinin Hakları (KVKK md. 11)
9. Başvuru Yöntemi — [MÜŞTERİ: başvuru adresi/e-postası]
10. Yürürlük ve Güncelleme Tarihi

İçerik uzmanının hukuki metne katkısı yalnızca sade dil ve başlık düzeni denetimidir.

### 4.15 Çerez Politikası — `/cerez-politikasi/`

> **[HUKUK]** Başlık iskeleti. Çerez listesi, sitenin gerçekte kullandığı çerezlere göre geliştirme sonunda doldurulur (06); metin hukuki onaydan geçer (AS-26).

**H1:** Çerez Politikası

1. Çerez Nedir?
2. Kullandığımız Çerez Türleri
   - Zorunlu çerezler (ör. çerez tercihi kaydı, spam koruması)
   - Analitik çerezler (yalnızca izin verilirse) — [analitik aracı kararı: 01 §7, müşteri]
   - Üçüncü taraf içerikleri (harita gömülürse)
3. Çerez Tablosu — ad · sağlayıcı · amaç · süre · tür [geliştirme sonunda doldurulur]
4. Çerez Tercihlerinizi Nasıl Yönetirsiniz? — ("Çerez Tercihleri" bağlantısı; tarayıcı ayarları)
5. İlgili Belgeler — KVKK Aydınlatma Metni bağlantısı
6. İletişim
7. Güncelleme Tarihi

### 4.16 404 — `/404`

**H1:** Sayfa Bulunamadı
**Metin:** "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Sitemizi yeniledik; aşağıdaki bağlantılardan devam edebilirsiniz."
**Bağlantılar:** Ana Sayfa · Hizmetler · Referanslar · İletişim
**Yardım satırı:** "Aradığınızı bulamadıysanız bizi arayın: 0216 307 18 62"
**Sayfa başlığı (title):** "Sayfa Bulunamadı | Axis Teknik"

### 4.17 Genel mikro metinler

**Düğmeler ve bağlantılar**

| Kullanım | Metin |
|---|---|
| Birincil çağrı | Teklif Al |
| Telefon | Bizi Arayın · (mobilde) Ara |
| WhatsApp | WhatsApp'tan Yazın |
| E-posta | E-posta Gönderin |
| Harita | Yol Tarifi Al |
| Hizmetlere git | Hizmetleri İncele |
| Referanslara git | Tüm Referanslar · Referansları Gör |
| Liste devamı | Tümünü Gör |
| Geri | Tüm Referanslara Dön · Tüm Hizmetler |
| Form | Talebi Gönder |
| Mobil menü | Menüyü Aç · Menüyü Kapat (ekran okuyucu etiketi) |
| İçeriğe atla | İçeriğe Geç (klavye kullanıcıları için ilk bağlantı) |
| Yeni sekme uyarısı | "(yeni sekmede açılır)" — ekran okuyucu metni |
| Dış bağlantı (harita, WhatsApp) | Bağlantı metnine eklenmez; `aria-label` içinde belirtilir |

**Üst bant / menü**

| Öğe | Metin |
|---|---|
| Telefon etiketi (ekran okuyucu) | "Telefon: 0216 307 18 62" |
| Ana menü etiketi (`aria-label`) | "Ana menü" |
| Alt bilgi menüsü etiketi | "Alt bilgi bağlantıları" |
| Ekmek kırıntısı etiketi | "Sayfa yolu" |
| Geçerli sayfa | `aria-current="page"` (görünür metin değişmez) |

**Çerez bandı** [HUKUK — AS-26]

| Öğe | Metin |
|---|---|
| Başlık | Çerez Tercihleri |
| Metin | "Sitenin çalışması için zorunlu çerezleri kullanıyoruz. İzin verirseniz ziyaret istatistikleri için analitik çerezleri de kullanırız. Ayrıntı: Çerez Politikası." |
| Düğmeler (eşit görünürlükte) | Kabul Et · Reddet · Tercihleri Yönet |
| Tercih paneli | "Zorunlu çerezler (her zaman açık)" · "Analitik çerezler" · "Tercihleri Kaydet" |
| Kayıt sonrası (ekran okuyucu duyurusu) | "Çerez tercihiniz kaydedildi." |

Analitik için çerezsiz bir araç seçilirse (01 §7) bant sadeleşir veya kalkar; metin o karara göre güncellenir.

**Alt bilgi**

| Öğe | Metin |
|---|---|
| Tanım | "Elektrik–mekanik taahhüt ve yangın algılama/söndürme sistemleri." |
| Sütun başlıkları | Hizmetler · Kurumsal · İletişim |
| Telif | "© {yıl} Axis Teknik. Tüm hakları saklıdır." |
| Hukuki bağlantılar | KVKK Aydınlatma Metni · Çerez Politikası · Çerez Tercihleri |

**Sistem iletileri**

| Durum | Metin |
|---|---|
| JavaScript kapalı (referans süzgeci) | Süzgeç gösterilmez; 19 referansın tamamı listelenir (ileti gerekmez) |
| Görsel yüklenemedi | Alt metin görünür (ayrı ileti yok) |
| Harita izni yok | "Haritayı görmek için çerez tercihlerinizden izin verin ya da yol tarifini harita uygulamasında açın." |

---

## 5. Müşteriden istenecek içerik

Öncelik: **E** = engelleyici (yayından önce şart), **Ö** = önemli (kaliteyi belirgin artırır), **İ** = isteğe bağlı.

| # | İstenen | Kullanılacağı yer | Öncelik |
|---|---|---|---|
| 1 | Resmî ticaret unvanı, vergi dairesi/no., MERSİS no., ticaret sicil no., varsa KEP adresi | Alt bilgi, İletişim, KVKK metni, yapısal veri | E |
| 2 | Adresin tam ve resmî yazımı, posta kodu, harita konumu (iğne) | İletişim, alt bilgi, yapısal veri, Google İşletme Profili | E |
| 3 | Telefonların teyidi: 0216 307 18 62 (santral), 0216 307 18 49 (telefon mu faks mı), 0507 201 24 25 (yayımlansın mı, kime ait) | İletişim, üst bant | E |
| 4 | WhatsApp kullanılacak numara (WhatsApp Business hesabı var mı) | Tıkla-yaz düğmesi | E |
| 5 | Form bildirimlerinin gideceği e-posta adres(ler)i; kişisel adresin (sinan.ozdemir@…) sitede yer alıp almayacağı | Form, İletişim | E |
| 6 | Hakkımızda metinlerindeki [ONAY] işaretli değişikliklerin onayı; üretim faaliyeti olup olmadığı | Hakkımızda | E |
| 7 | KVKK aydınlatma metni ve çerez politikası (hukuk danışmanından) veya taslağın hukuki onayı; veri saklama süresi; başvuru adresi | Hukuki sayfalar, form | E |
| 8 | 19 referansın teyidi: doğru kurum/tesis adı, gerçek başlangıç–bitiş yılı, kapsam (2–4 cümle), yayımlanmasına engel olup olmadığı (gizlilik) | Referanslar | E (ad/yayım izni), Ö (tarih/kapsam) |
| 9 | Güncel sayılar: tamamlanan proje sayısı, devam eden proje sayısı; varsa çalışan sayısı | Ana sayfa "Sayılarla" | Ö |
| 10 | 2020'den sonra tamamlanan yeni referanslar; "devam eden 2 proje"nin hangileri olduğu | Referanslar | Ö |
| 11 | Kordsa, Migros, Bosch ve Diyarbakır Bağlar Vehbi Koç İlköğretim Okulu kayıtlarının gerçek referans olup olmadığı | Referanslar, yönlendirme tablosu | Ö |
| 12 | Belgeler ve sertifikalar (ör. ISO belgeleri, yetkili servis/bayilik belgeleri, TSE HYB, meslek odası kayıtları, itfaiye/yangın yeterlilik belgeleri — **hangileri varsa**), tarama kopyaları ve geçerlilik tarihleri | Hakkımızda › Belgeler | Ö |
| 13 | Çalışma saatleri; mesai dışı/acil servis verilip verilmediği | İletişim, yapısal veri | Ö |
| 14 | Çalışılan/temsil edilen markalar ve yetkili satıcı–servis ilişkileri (gazlı söndürme, algılama panelleri vb.) | Yangın sayfaları | Ö |
| 15 | Yangın algılama sistemleri için kısa teknik bilgi (sistem tipleri, standartlar) | Yangın Sistemleri › Algılama | Ö |
| 16 | Bakım hizmetinin kapsamı: periyotlar, sözleşme türleri, başka firmaların kurduğu sistemlere bakım | Yangın Sistemleri › Bakım | Ö |
| 17 | Hizmet verilen bölge (Türkiye geneli mi; yurt dışı işleri sürüyor mu) | Ana sayfa, SEO, yapısal veri | Ö |
| 18 | Yanıt süresi taahhüdü (ör. "bir iş günü içinde dönüş") | Form başarı mesajı, iletişim çağrısı | İ |
| 19 | Ekip bilgisi: yönetici/mühendis adları, unvanlar, fotoğraflar (kişilerin izniyle); mühendis/teknisyen sayısı | Hakkımızda › Ekip | İ |
| 20 | Kuruluş hikâyesi ve kilometre taşları (2010'dan bugüne) | Hakkımızda › Tarihçe | İ |
| 21 | Sosyal medya hesapları (LinkedIn vb.) | Alt bilgi, yapısal veri | İ |
| 22 | Müşteri görüşleri (yazılı izinli) | Ana sayfa / referans detayı (Faz 2) | İ |
| 23 | Saha fotoğrafları ve logo kaynak dosyası | — | 05'in istek listesinde; burada yinelenmez |
| 24 | Google İşletme Profili, Search Console ve (varsa) eski Analytics erişimi | 07 | E (yayın için) |

---

## 6. Açık Sorular

Bu sorular proje yöneticisi tarafından `docs/acik-sorular.md` dosyasına aktarılacaktır. **(E)** = engelleyici.

1. **(E)** Firmanın resmî ticaret unvanı nedir? Sitede görünen ad "Axis Teknik" olarak kalabilir mi?
2. Çalışma saatleri nedir? Mesai dışı arıza/servis hizmeti var mı?
3. **(E)** Adresin tam yazımı nedir ("San. Sit. B1" neyin kısaltması; blok/kapı numarası "15/5-8" doğru mu; posta kodu)? Harita konumu neresi?
4. **(E)** 0216 307 18 49 telefon mu, faks mı? Yayımlansın mı?
5. **(E)** 0507 201 24 25 numarası sitede yayımlansın mı? Kurumsal hat mı, kişisel mi?
6. **(E)** WhatsApp düğmesi hangi numaraya bağlanacak? (01 §5 kapsam içi, envanterde WhatsApp yok.)
7. Sosyal medya hesabı var mı (LinkedIn, Instagram vb.)?
8. Güncel "tamamlanan proje" ve "devam eden proje" sayıları nedir? "Devam eden 2 proje" hangileriydi? Sayaç bölümü istenmiyor mu?
9. **(E)** sinan.ozdemir@axisteknik.com adresi sitede yer alsın mı? Form bildirimleri hangi adres(ler)e gitsin?
10. **(E)** Firma yangın söndürme cihazı/ürünü **üretiyor veya geliştiriyor mu**? Hakkımızda'daki "üretici" anlatımı 01 §2'ye göre hizmet odaklı yeniden yazıldı (§4.2); misyon, vizyon ve amaç metinlerindeki değişiklikler onaylanıyor mu?
11. Ana sayfa hero seçeneklerinden (A/B/C) hangisi? "Elektrik, mekanik ve yangın işlerini aynı ekip yürütür / tek muhatap" ifadesi doğru mu?
12. Teklif/iletişim taleplerine dönüş için süre taahhüdü verilecek mi? Keşif ücretsiz mi? Garanti süresi gibi yazılabilecek bir taahhüt var mı?
13. Hakkımızda › Tarihçe için 2010'dan bugüne eklenecek kilometre taşı var mı?
14. Kordsa, Migros, Bosch Bina ve Diyarbakır Bağlar Vehbi Koç İlköğretim Okulu (2008) kayıtları gerçek referans mı? Gerçekse kapsam ve tarihleri nedir?
15. Hangi belge ve sertifikalar var? (Envanterde hiç yok.)
16. Ekip bölümü istenir mi? Kimler, hangi unvanlarla yer alır?
17. Yalnızca mekanik (HVAC/sıhhi tesisat) kapsamlı referans var mı? (19 kayıtta yok; Mekanik Taahhüt sayfası referanssız kalıyor.)
18. Yangın algılama, duman tahliye ve yangın pompa istasyonları için açıklayıcı teknik içerik sağlanabilir mi? (Envanterde yalnızca madde adı var.)
19. Bakım hizmetinin kapsamı nedir (periyot, sözleşme, başka firmaların kurduğu sistemler)?
20. "Yangın Yönetmeliği" ifadesi "Binaların Yangından Korunması Hakkında Yönetmelik" olarak açılsın mı?
21. Gazlı ve köpüklü sistemlerde "uluslararası sertifika ve onaylar" hangileri (UL, FM, VdS, LPCB…)? Hangi markalar tedarik ediliyor; yetkili bayilik/servis var mı? Gazlı metindeki "çevresine zarar vermemesi" ile kastedilen nedir?
22. Sulu söndürme metnindeki "B, D ve E sınıfı yangınlar" ifadesi ve "NFPA Test And Maintenance, Inspection" dokümanı (NFPA 25?) teknik ekipçe teyit edilebilir mi?
23. Uygulama olmadan yalnızca tasarım/projelendirme hizmeti veriliyor mu? Elektrik ve mekanik tasarımda kullanılan yazılım/standartlar yazılsın mı?
24. **(E)** 19 referansın gerçek tarihleri nedir? (Hepsi 2016–2019 girilmiş.) Teyit gelmezse tarih gösterilmeyecek — onaylanıyor mu?
25. **(E)** Referans kurum adlarının sitede yayımlanmasına sözleşmesel/gizlilik engeli var mı (özellikle ABD Bağdat Hava Üssü, Türk Telekom, İGDAŞ, DHL)? Kurum adlarının doğru yazımı (Hilton Otel Sivas, Sheraton Otel Batum, THY Opet, Torku) nedir?
26. **(E)** KVKK aydınlatma metni, form onay cümlesi, çerez politikası ve çerez bandı metinlerini kim yazacak/onaylayacak (müşterinin hukuk danışmanı var mı)?
27. Referanslarda §4.12'de [TEYİT] işaretli sektör ve hizmet etiketleri (Torku, Kaplan Kardeşler, THY Opet, Efa Bilişim, Türk Telekom şehir alanı) doğru mu?
28. Hizmet verilen bölge nasıl tanımlansın (İstanbul / Türkiye geneli / yurt dışı)? Irak ve Gürcistan'daki işler yurt dışı hizmetin sürdüğünü gösteriyor mu?

---

## 7. Varsayımlar

1. Sitede görünen ad "Axis Teknik"tir (01 §2); resmî unvan gelince yalnızca hukuki ve künye alanlarına eklenir.
2. Firma üretici değil, tasarım–uygulama–bakım firması olarak anlatılır (01 §2). Müşteri üretimi teyit ederse §4.2'deki yedek metinler devreye girer.
3. Envanter §6'daki 19 kayıt gerçek ve yayımlanabilir referanslardır; müşteri aksini bildirirse kayıt çıkarılır ve yönlendirmesi `/referanslar/` olarak güncellenir.
4. Envanter §8'deki kayıtlar (Kordsa, Migros, Bosch, Vehbi Koç İ.O.) teyit gelene kadar referans sayılmaz.
5. Referans tarihleri doğrulanana kadar hiçbir sayfada ve yapısal veride gösterilmez.
6. "Pompa dairesi" (Torku) yangın pompa dairesidir; "Türkiye" (Türk Telekom) "Türkiye geneli" anlamındadır.
7. 0216 307 18 62 ana hattır ve tıkla-ara bu numaraya bağlanır.
8. Form alanlarının nihai listesi 02'de belirlenir; §4.13'teki mikro metinler alan eklenip çıkarılınca güncellenir.
9. Referans süzgeci tek sayfada çalışır; 19 kayıt sayfalanmaz.
10. Sürüm 1 yalnızca Türkçedir; metinler çeviriye uygun (kısa, deyimsiz) yazılır.
11. Hukuki metinler müşteri tarafında onaylanmadan yayın yapılmaz.

---

## 8. Proje yöneticisine notlar

1. **Yangın algılama için ayrı sayfa yok.** 01 §6'da hizmet adı "Yangın Algılama ve Söndürme Sistemleri", ancak alt sayfalar yalnızca söndürme türleri. Algılama içeriği genel sayfada bir bölüm (`#yangin-algilama`) olarak yerleştirildi. 19 referansın 5'i algılama içeriyor ve arama talebi olan bir konu; müşteri içerik verirse Faz 2'de `/hizmetler/yangin-sistemleri/yangin-algilama/` alt sayfası önerilir. 01 değişikliği gerektirir.
2. **Bakım/servis için ayrı sayfa yok.** 01 §2 konumlandırması "bakım"ı sayıyor, 01 §4'te üçüncü hedef kitle bakım müşterisi; içerik Yangın Sistemleri sayfasında `#bakim` bölümüne kondu. Yeterli mi, karar sizde.
3. **Mekanik Taahhüt kapsam notu.** 01 §6'da "(HVAC, sıhhi tesisat)" yazıyor; envanterde mekanik altında "Yangından Koruma Sistemleri" grubu da var. Bu grup mekanik sayfasında bağlantılı kısa liste olarak tutuldu, asıl içerik yangın sayfalarında (§4.4). 01 ile çelişki yok, bilginize.
4. **"19" sayısı.** Ana sayfa sayacındaki "19 tamamlanan proje" eski sitedeki referans kaydı sayısına eşit; gerçek proje sayısı olmayabilir. Teyit gelmezse "19 referans proje" olarak içerikten türetilmesini öneriyorum.
5. **Envanter iç tutarsızlığı.** #1 kayıt slaytta "Etibakır Fosfat Fabrikası", detayda "Eti Bakır Mazıdağı Fosfat Tesisi". Detaydaki ad kullanıldı.
6. **`docs/acik-sorular.md` henüz yok.** §6'daki 28 soru aktarılmayı bekliyor; (E) işaretliler engelleyici.
7. **Taksonomi uyumu.** §4.12'deki sektör (7) ve hizmet türü (9) etiketleri 02 (süzgeç gereksinimi), 04 (süzgeç arayüzü) ve 06 (içerik şeması) ile aynı anahtarları kullanmalı. "Yangın Sistemleri" üst etiketi, alt türü bilinmeyen 4 kayıt (Medical Park, Konya Şeker, Kartal Halı, Kaplan Kardeşler) nedeniyle gereklidir.
8. **Form alanları.** §4.13'te "Firma", "Telefon" ve "İlgilendiğiniz Hizmet" alanları eski forma göre eklendi; nihai liste iş analistinin (02) kararıdır.
9. **KVKK onay kutusu.** Önerilen cümle açık rıza değil bilgilendirme onayıdır; hukuki görüş alınmadan "açık rıza veriyorum" biçimine çevrilmemeli.
