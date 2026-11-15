# 04 — Tasarım Sistemi ve Arayüz

**Sahibi:** UI/UX Tasarımcı · **Durum:** Taslak v1 (müşteri onayı bekliyor) · **Tarih:** 14 Kasım 2026

Bağlı belgeler: `01-proje-ozeti-ve-kapsam.md` (bağlayıcı: site haritası §6, teknoloji §7, tasarım yönü §8, görsel politikası §9) · `05-gorsel-plani.md` (görsel yuva kimlikleri) · `docs/kaynak/mevcut-site-icerik-envanteri.md` (içerik).

Bu belge, geliştiricinin Tailwind temasına ve Astro bileşenlerine doğrudan aktarabileceği kesinlikte yazılmıştır. Belirteç adları İngilizce, açıklamalar Türkçedir. Buradaki hiçbir örnek metin nihai içerik değildir; metinler 03'ten gelir.

---

## 1. Tasarım ilkeleri

### 1.1 İlkeler

| # | İlke | Somut karşılığı |
|---|---|---|
| 1 | **Kanıt, vaatten önce gelir.** Ziyaretçi (satın alma/teknik müdür) yeterlilik arar. | Ana sayfanın ilk iki ekranında hizmet kapsamı ve referanslar görünür; "Güven mi arıyorsunuz?" türü slogan tek başına bölüm olmaz. Her hizmet sayfası ilgili referanslarla biter. |
| 2 | **Uzun teknik listeler taranabilir olmalı.** Elektrik sayfasında 4 alt grupta 34, mekanikte 3 alt grupta 19 madde var. | Maddeler alt gruplara ayrılır, her alt grubun başlığı, ikonu ve madde sayısı vardır; sayfa içi gezinme (çapa) ile gruplar arasında tek dokunuşla geçilir (§5.8). Tablo veya düz madde yığını kullanılmaz. |
| 3 | **Yangın güvenliği firması sakin görünür.** Alev, alarm kırmızısı, felaket görüntüsü korku satar; bu firma önlem ve mühendislik satar. | Arayüzün taşıyıcı rengi logodaki mavi ailesidir. Kırmızı arayüzde eylem veya zemin rengi olarak kullanılmaz (§3.1.6). Görsellerde alev yoktur (05 §1). |
| 4 | **İletişim her zaman bir dokunuş uzakta.** (01 §3) | Masaüstünde üst bilgide telefon + "Teklif Al"; mobilde sabit eylem çubuğu (Ara / WhatsApp / Teklif); her sayfanın sonunda çağrı bandı. |
| 5 | **Doğrulanmayan bilgi gösterilmez, boşluk tasarımı bozmaz.** Referans tarihleri, sayaçlar, belgeler henüz doğrulanmadı. | Her bileşenin "veri yok" durumu tanımlıdır: alan boşsa satır, rozet veya bant hiç çizilmez; yer tutucu metin ("—", "Yakında") yazılmaz. |
| 6 | **Hız tasarımın parçasıdır.** (Lighthouse mobil ≥ 90, LCP ≤ 2,5 sn) | Sayfa başına en çok 1 büyük kahraman görseli; yazı tipi en çok 2 aile, kendi sunucumuzdan; hareket yalnızca `opacity`/`transform`; JS gerektiren bileşen sayısı sınırlı (mobil menü, filtre, form, ışık kutusu, çerez bandı). |

### 1.2 Eski siteden bilinçli olarak bırakılanlar

| Bırakılan | Neden | Yerine |
|---|---|---|
| Açılıştaki "Loading…" ekranı | İçeriği geciktirir, LCP'yi bozar | Yok; sayfa doğrudan çizilir |
| Otomatik dönen tam ekran slider (4 slayt) | Mesajı böler, erişilebilirlik ve performans sorunu | Tek, sabit kahraman alanı (§5.5); slayttaki 4 proje "öne çıkan referanslar" bölümüne taşınır |
| Sarı tema rengi `#edb820` | Hazır temanın varsayılanı, logoyla ilgisiz | Logodan türetilen palet (§3.1) |
| Müşteri kurum logoları ve internetten toplanmış fotoğraflar | Telif riski (01 §9) | Metin rozetleri (§5.14) + sektör temelli lisanslı görsel havuzu (05 §3) |
| Sayarak artan sayaç animasyonu | Dikkat dağıtır, hareket hassasiyeti olanları rahatsız eder; değerler de güncel değil | Durağan istatistik bandı (§5.9), yalnızca doğrulanan değerlerle |
| "Çözümlerimiz için tıklayın." kutuları | Bilgi taşımayan bağlantı metni | Başlık + 1 cümle açıklama + alt grup adları içeren hizmet kartı (§5.7) |
| "Servislerimiz" adı, birden çok H1, yan sütundaki WordPress bileşenleri | Tutarsızlık, SEO | Her sayfada tek H1, "Hizmetler" (01 §6) |
| BÜYÜK HARFLE yazılmış uzun başlıklar ("TARİHÇEMİZ", "HVAC SİSTEMLERİ") | Okunabilirliği düşürür | Başlıklar cümle/başlık düzeninde; büyük harf yalnızca 13 px üst etiketlerde |

---

## 2. Marka

### 2.1 Mevcut logo (inceleme sonucu)

`docs/kaynak/mevcut-logo.png` — 750×258 px PNG. Solda eğik şeritlerden oluşan üçgen amblem, sağda iki satır siyah kalın serif "AXİS / TEKNİK", altta tek satır alt yazı. Piksellerden ölçülen renkler:

| Parça | Hex |
|---|---|
| Amblem — koyu kırmızı şerit | `#AE0905` |
| Amblem — kırmızı şerit | `#E3010F` |
| Amblem — açık mavi şerit | `#009FE3` |
| Amblem — mavi şerit | `#008CD0` |
| Amblem — turuncu yatay şeritler | `#E94C09` |
| Yazı | `#000000` |

Sorunlar: dosya düşük çözünürlüklü ve kenarları tırtıklı; alt yazı 750 px genişlikte bile zor okunuyor; şeffaf/koyu zemin sürümü yok.

### 2.2 Yapılacak iş (yeniden tasarım değil — 01 §5)

1. Logo **SVG olarak yeniden çizilir** (amblem geometrisi ve yazı biçimi korunur; kenarlar temizlenir, şeritler arası boşluklar eşitlenir). Müşteride özgün vektör dosya (AI/EPS/PDF) varsa o kullanılır (Açık Soru 1).
2. Yazı, yazı tipi olarak değil **eğriye çevrilmiş** biçimde teslim edilir.
3. Üretilecek sürümler:

| Sürüm | Dosya | İçerik | Kullanım |
|---|---|---|---|
| Yatay — açık zemin | `logo-axis-teknik.svg` | Renkli amblem + `#161D27` yazı, alt yazısız | Üst bilgi, açık zeminli her yer |
| Yatay — koyu zemin | `logo-axis-teknik-inverse.svg` | Amblem ve yazı tek renk beyaz `#FFFFFF` | Alt bilgi, koyu çağrı bandı |
| Yatay — alt yazılı | `logo-axis-teknik-tagline.svg` | Açık zemin sürümü + alt yazı | Yalnızca ≥ 320 px genişlikte basılı/PDF/OG kullanımı; web üst bilgisinde **kullanılmaz** |
| Amblem | `mark-axis-teknik.svg` | Yalnızca üçgen amblem, renkli | Favicon, uygulama simgesi, yükleme gerektirmeyen küçük alanlar |
| Amblem — tek renk | `mark-axis-teknik-mono.svg` | `currentColor` | Safari sabitlenmiş sekme, filigran |

Koyu zeminde renkli amblem kullanılmaz: koyu kırmızı şeridin `#082538` zemin üzerindeki karşıtlığı **2,13:1**'dir (hesaplandı), grafik öğe eşiği olan 3:1'in altında kalır.

### 2.3 Kullanım kuralları

| Kural | Değer |
|---|---|
| Güvenli alan | Her yönde amblem yüksekliğinin %25'i kadar boşluk; içine metin, kenarlık veya görsel girmez |
| En küçük boyut — yatay logo | Yükseklik 32 px (ekran); üst bilgide mobil 36 px, masaüstü 44 px |
| En küçük boyut — amblem | 24 px; 16 px favicon için sadeleştirilmiş çizim (aşağıda) |
| Zemin | Yalnızca `surface.page`, `surface.subtle` veya beyaz (açık sürüm); `brand.900`/`brand.950` (koyu sürüm). Fotoğraf üzerine logo konmaz |
| Yasaklar | Oran bozma, döndürme, gölge/dış ışıma, renk değiştirme, amblem ile yazının yerini değiştirme, alt yazıyı 320 px'ten dar alanda gösterme |
| Bağlantı | Üst bilgideki logo her zaman `/` adresine gider; erişilebilir adı "Axis Teknik — Ana sayfa" |

### 2.4 Favicon ve uygulama simgesi

Amblemden türetilir (yazı içermez). 16–32 px'te şeritler birbirine karışmaması için amblemin **3 parçalı sadeleştirilmiş** çizimi kullanılır (kırmızı eğik şerit, mavi eğik şerit, turuncu taban; ince ara şeritler birleştirilir). Dosya listesi ve boyutlar: 05 §7.

### 2.5 Firma adının yazımı

| Bağlam | Yazım |
|---|---|
| Düz metin, başlık, başlık etiketi (`<title>`), alt bilgi | **Axis Teknik** (iki sözcük, baş harfler büyük) |
| Yalnızca logo çiziminde | AXİS TEKNİK |
| Kullanılmayacak | Axisteknik, Axis Mekanik, Axis Teknik ve Mekanik, AXIS (noktasız I ile), Axis Teknik® |
| Resmî unvan | Yalnızca alt bilgi künyesi ve yasal sayfalarda; müşteri teyidinden sonra (01 §2) |

Teknik not: `<html lang="tr">` zorunludur. CSS `text-transform: uppercase` ancak bu durumda "i → İ", "ı → I" dönüşümünü doğru yapar (üst etiketlerde "İLETİŞİM" yerine "ILETIŞIM" yazılmasını önler).

---

## 3. Tasarım belirteçleri

Belirteçler CSS değişkeni olarak tanımlanır (`--color-brand-700` vb.) ve Tailwind temasına eşlenir. Bileşenlerde ham hex yazılmaz; **rol belirteçleri** (§3.1.5) kullanılır.

### 3.1 Renk

#### 3.1.1 Marka mavisi — `brand` (birincil)

Logodaki `#008CD0` mavisinden türetildi (ton ≈ 200°). Arayüzün taşıyıcı rengidir: bağlantılar, ikincil düğmeler, koyu yüzeyler, odak halkası.

| Belirteç | Hex | Kullanım |
|---|---|---|
| `brand.50` | `#F0F8FD` | Açık vurgu zemini (bilgi kutusu, seçili çip zemini, ikon kutusu) |
| `brand.100` | `#DCEFFA` | Hover zemini, rozet zemini |
| `brand.200` | `#B9DFF5` | Dekoratif kenarlık; koyu zeminde ikincil metin |
| `brand.300` | `#84C8ED` | Koyu zeminde bağlantı ve odak halkası |
| `brand.400` | `#3FAAE0` | Yalnızca dekoratif (çizgi, grafik) |
| `brand.500` | `#008CD0` | **Logo mavisi.** Dekoratif ve ≥ 24 px ikonlar; beyaz zeminde metin rengi olarak kullanılmaz (3,71:1) |
| `brand.600` | `#0074B0` | Odak halkası (açık zemin), ikon rengi |
| `brand.700` | `#005C8D` | **Bağlantı metni**, ikincil düğme metni/kenarlığı, bilgi rengi |
| `brand.800` | `#0A4A70` | Bağlantı hover, koyu rozet |
| `brand.900` | `#0C3A58` | Koyu yüzey (iç sayfa hero'su, üst iletişim şeridi) |
| `brand.950` | `#082538` | En koyu yüzey (alt bilgi, çağrı bandı, görsel üstü karartma) |

#### 3.1.2 Eylem turuncusu — `accent` (vurgu)

Logodaki `#E94C09` turuncusundan türetildi. **Tek görevi birincil eylemi işaretlemektir** ("Teklif Al", form gönder). Sayfada aynı anda görünen dolgulu turuncu öğe sayısı az tutulur (üst bilgi düğmesi + bölüm başına en çok 1).

| Belirteç | Hex | Kullanım |
|---|---|---|
| `accent.50` | `#FFF4ED` | Vurgu zemini (öne çıkan not) |
| `accent.100` | `#FFE6D5` | Hover zemini |
| `accent.200` | `#FECBAA` | Dekoratif |
| `accent.300` | `#FDA774` | Koyu zeminde vurgu metni/üst etiket |
| `accent.400` | `#F9773A` | Koyu zeminde ince vurgu çizgisi |
| `accent.500` | `#E94C09` | **Logo turuncusu.** Yalnızca dekoratif (bölüm başlığı çizgisi, madde imi); üzerine beyaz metin konmaz (3,82:1) |
| `accent.600` | `#C73F06` | **Birincil düğme zemini** (beyaz metin) |
| `accent.700` | `#A33208` | Birincil düğme hover; açık zeminde turuncu metin |
| `accent.800` | `#83290C` | Birincil düğme aktif (basılı) |
| `accent.900` | `#6C240D` | Yedek |

#### 3.1.3 Marka kırmızısı — `signal` (kısıtlı)

| Belirteç | Hex | Kullanım |
|---|---|---|
| `signal.500` | `#E3010F` | **Yalnızca logo/amblem çiziminde.** Arayüz belirteci olarak dışa açılmaz |
| `signal.700` | `#AE0905` | **Yalnızca logo/amblem çiziminde** |

Kurallar için bkz. §3.1.6.

#### 3.1.4 Nötr skala — `neutral`

Maviye hafif kaydırılmış soğuk gri (ton ≈ 213°); marka mavisiyle aynı ısıda durur.

| Belirteç | Hex | Kullanım |
|---|---|---|
| `neutral.50` | `#F7F9FB` | Dönüşümlü bölüm zemini |
| `neutral.100` | `#EEF2F6` | Kart içi zemin, girdi devre dışı zemini, görsel yer tutucu zemini |
| `neutral.200` | `#DFE5EC` | Varsayılan kenarlık, ayraç |
| `neutral.300` | `#C7D0DA` | Güçlü ayraç; koyu zeminde gövde metni |
| `neutral.400` | `#98A4B3` | Devre dışı metin/ikon; koyu zeminde ikincil metin. Açık zeminde metin olarak kullanılmaz (2,53:1) |
| `neutral.500` | `#5F6C7D` | Üçüncül metin (tarih, sayaç, yardımcı metin), **girdi kenarlığı** |
| `neutral.600` | `#4F5B6A` | İkincil metin |
| `neutral.700` | `#3A4553` | Gövde metni |
| `neutral.800` | `#252E3A` | Güçlü gövde |
| `neutral.900` | `#161D27` | Başlıklar, logo yazısı |
| `neutral.950` | `#0C1118` | Yedek (ışık kutusu zemini) |

#### 3.1.5 Rol belirteçleri (bileşenlerde bunlar kullanılır)

| Rol belirteci | Değer | Hex | Açıklama |
|---|---|---|---|
| `surface.page` | beyaz | `#FFFFFF` | Sayfa zemini |
| `surface.subtle` | `neutral.50` | `#F7F9FB` | Dönüşümlü bölüm zemini |
| `surface.muted` | `neutral.100` | `#EEF2F6` | Kart içi alan, yer tutucu |
| `surface.card` | beyaz | `#FFFFFF` | Kart zemini |
| `surface.brand-soft` | `brand.50` | `#F0F8FD` | Bilgi/vurgu zemini |
| `surface.inverse` | `brand.950` | `#082538` | Alt bilgi, çağrı bandı |
| `surface.inverse-soft` | `brand.900` | `#0C3A58` | İç sayfa hero'su, üst iletişim şeridi |
| `text.heading` | `neutral.900` | `#161D27` | Başlıklar |
| `text.body` | `neutral.700` | `#3A4553` | Gövde |
| `text.muted` | `neutral.600` | `#4F5B6A` | İkincil metin |
| `text.subtle` | `neutral.500` | `#5F6C7D` | Üçüncül metin; yalnızca ≥ 13 px |
| `text.link` | `brand.700` | `#005C8D` | Bağlantı |
| `text.link-hover` | `brand.800` | `#0A4A70` | Bağlantı hover |
| `text.on-inverse` | beyaz | `#FFFFFF` | Koyu zeminde başlık |
| `text.on-inverse-muted` | `neutral.300` | `#C7D0DA` | Koyu zeminde gövde |
| `text.on-inverse-link` | `brand.300` | `#84C8ED` | Koyu zeminde bağlantı |
| `text.disabled` | `neutral.400` | `#98A4B3` | Devre dışı (karşıtlık şartından muaf) |
| `border.default` | `neutral.200` | `#DFE5EC` | Kart, ayraç (dekoratif) |
| `border.strong` | `neutral.300` | `#C7D0DA` | Belirgin ayraç (dekoratif) |
| `border.input` | `neutral.500` | `#5F6C7D` | Form girdisi kenarlığı (beyaz üzerinde 5,35:1 ≥ 3:1) |
| `border.inverse` | beyaz %16 | `rgb(255 255 255 / .16)` | Koyu zeminde ayraç (dekoratif) |
| `action.primary` | `accent.600` | `#C73F06` | Birincil düğme |
| `action.primary-hover` | `accent.700` | `#A33208` | |
| `action.primary-active` | `accent.800` | `#83290C` | |
| `action.secondary` | `brand.700` | `#005C8D` | İkincil düğme (çerçeveli) |
| `focus.ring` | `brand.600` | `#0074B0` | Açık zeminde odak halkası |
| `focus.ring-inverse` | beyaz | `#FFFFFF` | Koyu zeminde odak halkası |
| `overlay.scrim` | `brand.950` %72 | `rgb(8 37 56 / .72)` | Mobil menü/ışık kutusu arkası |

**Anlamsal renkler**

| Anlam | Metin/ikon | Zemin | Kenarlık (dekoratif) | Kullanım |
|---|---|---|---|---|
| Başarı `success` | `#17734A` | `#E8F6EE` | `#2E9B68` | Form gönderildi mesajı |
| Uyarı `warning` | `#8A5300` | `#FFF6DB` | `#B87400` | Dikkat notu (ör. JS kapalıyken form uyarısı) |
| Hata `danger` | `#B4173A` | `#FDEEF2` | `#D12B52` | Alan hatası, form gönderim hatası |
| Bilgi `info` | `#005C8D` | `#F0F8FD` | `#84C8ED` | Bilgilendirme notu ("Temsilî görsel" açıklaması vb.) |

Üçüncü taraf: WhatsApp düğmesi için `#0B6B5F` (koyu WhatsApp yeşili; beyaz metinle 6,40:1). Parlak `#25D366` üzerine beyaz metin konmaz.

#### 3.1.6 Kırmızının kullanımı (yangın güvenliği firması için özel kural)

1. **Marka kırmızısı (`#E3010F`, `#AE0905`) yalnızca logonun içinde yaşar.** Düğme, bağlantı, zemin, başlık, ikon, madde imi veya çizgi rengi olarak kullanılmaz. Gerekçe: bu sektörde kırmızı "alarm/yangın/arıza" demektir; sayfaya yayılırsa hem tehlike duygusu yaratır hem de gerçek hata mesajlarının ayırt ediciliğini yok eder.
2. **Birincil eylem rengi turuncudur** (`accent.600`), kırmızı değil. Turuncu yalnızca dolgulu düğme ve küçük dekoratif vurgu olarak görünür.
3. **Hata rengi ayrı bir tondur:** `#B4173A` (maviye dönük, soğuk kızıl; ton ≈ 347°). Logo kırmızısından (ton ≈ 356–1°, tam doygun) ve eylem turuncusundan (ton ≈ 18°) bilinçli olarak uzaklaştırıldı. Yalnızca form doğrulama ve sistem hatalarında görünür.
4. **Hata hiçbir zaman yalnızca renkle anlatılmaz:** her hata mesajı ikon (`circle-alert`) + metin içerir; hatalı girdide kenarlık 2 px'e çıkar. Hata rengi dolgulu düğme zemini olarak kullanılmaz (sitede "sil/yıkıcı" eylem yoktur).
5. **Yangın sistemleri sayfaları kırmızıya boyanmaz.** Yangın hizmet grubunun ikonu ve rozetleri diğer gruplarla aynı `brand` mavisindedir. Görsellerde yer alan kırmızı ekipman (söndürme tüpü, yangın dolabı, sprinkler borusu) doğal rengini korur; arayüzdeki tek kırmızı kaynak fotoğraflar ve logodur.
6. **Uyarı sarısı** eski tema sarısını (`#edb820`) geri getirmez: uyarı yalnızca koyu kehribar metin + çok açık zemin olarak, dar alanda kullanılır.

#### 3.1.7 Karşıtlık tablosu (hesaplanmış)

Yöntem: WCAG 2.x bağıl parlaklık formülü (sRGB doğrusallaştırma, `L = 0,2126R + 0,7152G + 0,0722B`, oran `(L1 + 0,05) / (L2 + 0,05)`), `python3` ile çalıştırılarak hesaplandı. Eşikler: normal metin ≥ 4,5:1 · büyük metin (≥ 24 px veya ≥ 18,66 px kalın) ve grafik/arayüz öğesi ≥ 3:1.

**İzin verilen metin–zemin çiftleri**

| Ön plan | Zemin | Oran | Sonuç | Kullanım |
|---|---|---|---|---|
| `neutral.900` `#161D27` | beyaz `#FFFFFF` | 16,95 | AAA | Başlık |
| `neutral.900` `#161D27` | `neutral.50` `#F7F9FB` | 16,06 | AAA | Başlık, dönüşümlü bölüm |
| `neutral.900` `#161D27` | `neutral.100` `#EEF2F6` | 15,06 | AAA | Kart içi başlık |
| `neutral.900` `#161D27` | `brand.50` `#F0F8FD` | 15,78 | AAA | Bilgi kutusu başlığı |
| `neutral.700` `#3A4553` | beyaz | 9,74 | AAA | Gövde |
| `neutral.700` `#3A4553` | `neutral.50` | 9,23 | AAA | Gövde |
| `neutral.700` `#3A4553` | `neutral.100` | 8,66 | AAA | Gövde |
| `neutral.700` `#3A4553` | `brand.50` | 9,07 | AAA | Gövde |
| `neutral.600` `#4F5B6A` | beyaz | 6,91 | AA | İkincil metin |
| `neutral.600` `#4F5B6A` | `neutral.50` | 6,55 | AA | İkincil metin |
| `neutral.600` `#4F5B6A` | `neutral.100` | 6,15 | AA | İkincil metin |
| `neutral.600` `#4F5B6A` | `brand.50` | 6,44 | AA | İkincil metin |
| `neutral.500` `#5F6C7D` | beyaz | 5,35 | AA | Üçüncül metin |
| `neutral.500` `#5F6C7D` | `neutral.50` | 5,07 | AA | Üçüncül metin |
| `neutral.500` `#5F6C7D` | `neutral.100` | 4,75 | AA | Üçüncül metin |
| `neutral.500` `#5F6C7D` | `brand.50` | 4,98 | AA | Üçüncül metin |
| `brand.700` `#005C8D` | beyaz | 7,20 | AAA | Bağlantı |
| `brand.700` `#005C8D` | `neutral.50` | 6,82 | AA | Bağlantı |
| `brand.700` `#005C8D` | `neutral.100` | 6,40 | AA | Bağlantı |
| `brand.700` `#005C8D` | `brand.50` | 6,71 | AA | Seçili çip metni, bilgi metni |
| `brand.700` `#005C8D` | `brand.100` `#DCEFFA` | 6,10 | AA | Rozet metni |
| `brand.800` `#0A4A70` | beyaz | 9,43 | AAA | Bağlantı hover |
| `brand.800` `#0A4A70` | `brand.100` | 7,98 | AAA | Rozet metni (güçlü) |
| beyaz | `brand.700` `#005C8D` | 7,20 | AAA | Seçili çip (dolgulu) |
| beyaz | `brand.900` `#0C3A58` | 11,92 | AAA | İç sayfa hero başlığı |
| beyaz | `brand.950` `#082538` | 15,77 | AAA | Alt bilgi/çağrı bandı başlığı |
| `neutral.300` `#C7D0DA` | `brand.950` | 10,11 | AAA | Koyu zeminde gövde |
| `neutral.300` `#C7D0DA` | `brand.900` | 7,64 | AAA | Koyu zeminde gövde |
| `neutral.400` `#98A4B3` | `brand.950` | 6,23 | AA | Koyu zeminde üçüncül metin (telif satırı) |
| `brand.300` `#84C8ED` | `brand.950` | 8,61 | AAA | Koyu zeminde bağlantı |
| `brand.300` `#84C8ED` | `brand.900` | 6,51 | AA | Koyu zeminde bağlantı |
| `accent.300` `#FDA774` | `brand.950` | 8,23 | AAA | Koyu zeminde üst etiket |
| beyaz | `accent.600` `#C73F06` | 5,07 | AA | **Birincil düğme** |
| beyaz | `accent.700` `#A33208` | 6,96 | AA | Birincil düğme hover |
| `accent.700` `#A33208` | beyaz | 6,96 | AA | Turuncu metin (üst etiket) |
| `accent.700` `#A33208` | `neutral.50` | 6,60 | AA | Turuncu metin |
| `accent.700` `#A33208` | `accent.50` `#FFF4ED` | 6,44 | AA | Vurgu notu |
| `accent.800` `#83290C` | `accent.100` `#FFE6D5` | 7,66 | AAA | Vurgu rozeti |
| `#17734A` (başarı) | beyaz | 5,85 | AA | Başarı metni |
| `#17734A` (başarı) | `#E8F6EE` | 5,25 | AA | Başarı kutusu |
| `#8A5300` (uyarı) | beyaz | 6,33 | AA | Uyarı metni |
| `#8A5300` (uyarı) | `#FFF6DB` | 5,86 | AA | Uyarı kutusu |
| `#B4173A` (hata) | beyaz | 6,72 | AA | Alan hata metni |
| `#B4173A` (hata) | `neutral.50` | 6,37 | AA | Alan hata metni |
| `#B4173A` (hata) | `#FDEEF2` | 5,98 | AA | Hata kutusu |
| beyaz | `#0B6B5F` (WhatsApp) | 6,40 | AA | WhatsApp düğmesi |

**Metin dışı öğeler (eşik 3:1)**

| Öğe | Renk | Bitişik zemin | Oran | Sonuç |
|---|---|---|---|---|
| Girdi kenarlığı | `neutral.500` `#5F6C7D` | beyaz | 5,35 | Geçer |
| Odak halkası (açık) | `brand.600` `#0074B0` | beyaz | 5,09 | Geçer |
| Odak halkası (açık) | `brand.600` `#0074B0` | `neutral.50` / `neutral.100` / `brand.50` | 4,82 / 4,53 / 4,74 | Geçer |
| Odak halkası (koyu) | beyaz | `brand.950` / `brand.900` | 15,77 / 11,92 | Geçer |
| Hata kenarlığı | `#D12B52` | beyaz / `#FDEEF2` | 5,03 / 4,47 | Geçer |
| Birincil düğme gövdesi | `accent.600` | `brand.950` (çağrı bandı) | 3,11 | Geçer |
| İkon (≥ 24 px) | `brand.500` `#008CD0` | beyaz / `neutral.50` | 3,71 / 3,51 | Geçer (yalnızca grafik) |
| Dekoratif çizgi | `accent.500` `#E94C09` | beyaz / `neutral.50` | 3,82 / 3,62 | Geçer (yalnızca grafik) |

**Yasak çiftler (hesaplandı, AA'yı geçmiyor — kullanılmaz)**

| Ön plan | Zemin | Oran | Not |
|---|---|---|---|
| beyaz | `accent.500` `#E94C09` | 3,82 | Logo turuncusu düğme zemini olamaz → `accent.600` |
| beyaz | `brand.500` `#008CD0` | 3,71 | Logo mavisi düğme zemini olamaz → `brand.700` |
| `brand.500` `#008CD0` | beyaz | 3,71 | Logo mavisi metin olamaz → `brand.700` |
| `#009FE3` (logo açık mavi) | beyaz | 2,97 | Yalnızca logoda |
| `accent.400` `#F9773A` | beyaz | 2,72 | Yalnızca koyu zeminde |
| `neutral.400` `#98A4B3` | beyaz | 2,53 | Yalnızca devre dışı durum |
| `brand.600` `#0074B0` | `brand.950` | 3,10 | Koyu zeminde metin olamaz → `brand.300` |
| beyaz | `#128C7E` (WhatsApp orta yeşil) | 4,14 | → `#0B6B5F` |

Görsel üstüne metin konduğu tek yer §5.5'teki iç sayfa hero'sudur; orada metin her zaman düz `brand.900` zemin üzerinde durur, görsel metnin arkasına girmez. Böylece fotoğrafa bağlı karşıtlık riski yoktur.

### 3.2 Tipografi

#### 3.2.1 Yazı tipleri

| Rol | Öneri | Alternatif | Gerekçe |
|---|---|---|---|
| Başlık | **Archivo** (değişken; `wght` 100–900, `wdth` 62–125) — SIL OFL 1.1 | **Manrope** (değişken; `wght` 200–800) — SIL OFL 1.1 | Geniş, sağlam, endüstriyel karakterli grotesk; kalın ağırlıklarda Türkçe işaretler (ğ, ş, ç, İ noktası) net; teknik başlıklarda ("Orta Gerilim Hücreler") sıkı durur |
| Gövde ve arayüz | **Inter** (değişken; `wght` 100–900, `opsz`) — SIL OFL 1.1 | **Source Sans 3** (değişken; `wght` 200–900) — SIL OFL 1.1 | Küçük boyutta yüksek okunabilirlik; tablo rakamları (`tnum`); eksiksiz Türkçe desteği |
| Rakam/kod | Gövde yazı tipinin `font-variant-numeric: tabular-nums` özelliği | — | Telefon, istatistik, tarih hizası; üçüncü aile yüklenmez |

Kurallar:

- Yalnızca `.woff2`, **kendi alan adımızdan** sunulur (ör. Fontsource paketleri üzerinden derlemeye dahil edilir); Google Fonts CDN'ine istek atılmaz (KVKK ve performans).
- Alt küme: `latin` + `latin-ext` (Türkçe `ğ Ğ ş Ş ı İ ö Ö ü Ü ç Ç` ve `â î û` dahil). Faz 1'de her iki ailede bu 15 karakterin tüm kullanılan ağırlıklarda çizimi **gözle doğrulanır** (sınama dizgisi: "Işık ılık süt iç; ĞÜŞİÖÇ ğüşıöç; KÂĞIT, İĞNE").
- `font-display: swap`; ekran üstü metinde kullanılan iki dosya (`Archivo` ve `Inter` latin-ext) `<link rel="preload">` ile önceliklendirilir.
- Yedek yığın (CLS'yi azaltmak için `size-adjust` ayarlı yerel yedek tanımlanır):
  - `--font-heading: "Archivo Variable", "Archivo", "Arial Narrow", system-ui, sans-serif`
  - `--font-body: "Inter Variable", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- Kullanılan ağırlıklar: başlık 600 ve 700; gövde 400, 500, 600. Başka ağırlık kullanılmaz. Başlıklarda `wdth` 100 (varsayılan); `display` stilinde 96.
- İtalik yalnızca gövde içinde vurgu için; ayrı italik dosya yüklenmez, vurgu için 600 ağırlık tercih edilir.

#### 3.2.2 Ölçek

Kök boyut 16 px (`html { font-size: 100% }` — kullanıcı ayarı ezilmez). Akışkan değerler 375 px → 1280 px görünüm genişliği aralığında doğrusal büyür.

| Belirteç | Aile | Mobil (375) | Masaüstü (≥ 1280) | `font-size` (clamp) | Satır yük. | Ağırlık | Harf aralığı | Kullanım |
|---|---|---|---|---|---|---|---|---|
| `text-display` | Başlık | 36 px / 2,25 rem | 56 px / 3,5 rem | `clamp(2.25rem, 1.732rem + 2.21vw, 3.5rem)` | 1,08 | 700 | −0,02em | Ana sayfa H1 |
| `text-h1` | Başlık | 30 px / 1,875 rem | 44 px / 2,75 rem | `clamp(1.875rem, 1.512rem + 1.547vw, 2.75rem)` | 1,14 | 700 | −0,02em | İç sayfa H1 |
| `text-h2` | Başlık | 24 px / 1,5 rem | 34 px / 2,125 rem | `clamp(1.5rem, 1.241rem + 1.105vw, 2.125rem)` | 1,2 | 700 | −0,015em | Bölüm başlığı |
| `text-h3` | Başlık | 20 px / 1,25 rem | 24 px / 1,5 rem | `clamp(1.25rem, 1.146rem + 0.442vw, 1.5rem)` | 1,3 | 600 | −0,01em | Kart/alt grup başlığı |
| `text-h4` | Başlık | 18 px / 1,125 rem | 20 px / 1,25 rem | `clamp(1.125rem, 1.073rem + 0.221vw, 1.25rem)` | 1,35 | 600 | 0 | Küçük başlık |
| `text-lead` | Gövde | 18 px / 1,125 rem | 20 px / 1,25 rem | `clamp(1.125rem, 1.073rem + 0.221vw, 1.25rem)` | 1,55 | 400 | 0 | Giriş paragrafı |
| `text-body` | Gövde | 16 px / 1 rem | 17 px / 1,0625 rem | `clamp(1rem, 0.974rem + 0.11vw, 1.0625rem)` | 1,65 | 400 | 0 | Gövde |
| `text-sm` | Gövde | 14 px / 0,875 rem | 14 px | sabit | 1,5 | 400/500 | 0 | Yardımcı metin, künye etiketi, alt bilgi |
| `text-xs` | Gövde | 13 px / 0,8125 rem | 13 px | sabit | 1,4 | 500 | 0,01em | Rozet, telif satırı, görsel alt yazısı |
| `text-overline` | Gövde | 13 px / 0,8125 rem | 13 px | sabit | 1,3 | 600 | 0,08em, BÜYÜK HARF | Bölüm üst etiketi |
| `text-stat` | Başlık | 36 px / 2,25 rem | 52 px / 3,25 rem | `clamp(2.25rem, 1.836rem + 1.768vw, 3.25rem)` | 1 | 700 | −0,02em, `tnum` | İstatistik değeri |
| `text-button` | Gövde | 16 px | 16 px | sabit | 1,25 | 600 | 0 | Düğme |
| `text-nav` | Gövde | 16 px | 15 px | sabit | 1,25 | 500 | 0 | Menü |

Kurallar:

- **En küçük metin 13 px**; gövde hiçbir yerde 16 px'in altına inmez (iOS'ta girdi odaklanınca yakınlaşmayı önlemek için form girdileri de 16 px).
- **Akışkan boyutlandırma:** `clamp(min, kesişim + eğim·vw, max)`; eğim = `(max − min) / (1280 − 375)`. `vw` bileşeni her zaman bir `rem` bileşeniyle toplanır (tarayıcı yakınlaştırması ve kullanıcı yazı boyutu çalışmaya devam eder; WCAG 1.4.4).
- **Paragraf genişliği:** gövde metni en çok `68ch` (≈ 640–680 px); giriş paragrafı en çok `56ch`; başlıklar en çok `22ch` (display) / `28ch` (h1–h2). Yasal metin sayfası tek sütun `72ch`.
- Başlıklarda `text-wrap: balance`, paragraflarda `text-wrap: pretty`; `hyphens: manual` (Türkçe otomatik heceleme tarayıcılarda tutarsız — kullanılmaz). Uzun bileşik teknik başlıklar için `overflow-wrap: anywhere` yalnızca kart başlıklarında.
- Paragraf arası boşluk `1em`; başlık üstü boşluk, altındaki boşluğun en az 2 katı.
- Liste maddeleri `text-body`, satır yüksekliği 1,5.

### 3.3 Boşluk ölçeği

Taban 4 px. Tailwind varsayılan ölçeğiyle birebir; yalnızca aşağıdaki adımlar kullanılır.

| Belirteç | rem | px | Tipik kullanım |
|---|---|---|---|
| `space-1` | 0,25 | 4 | İkon–metin iç boşluğu (küçük) |
| `space-2` | 0,5 | 8 | Çip iç boşluğu, rozet |
| `space-3` | 0,75 | 12 | Liste satır aralığı |
| `space-4` | 1 | 16 | Mobil sayfa kenar payı, kart içi öğe aralığı |
| `space-5` | 1,25 | 20 | Kart iç boşluğu (mobil) |
| `space-6` | 1,5 | 24 | Izgara aralığı (mobil), kart iç boşluğu (masaüstü) |
| `space-8` | 2 | 32 | Izgara aralığı (masaüstü), bölüm başlığı–içerik arası |
| `space-10` | 2,5 | 40 | |
| `space-12` | 3 | 48 | Bölüm başlığı–içerik arası (masaüstü) |
| `space-16` | 4 | 64 | Bölüm dikey boşluğu (mobil, sıkı) |
| `space-20` | 5 | 80 | |
| `space-24` | 6 | 96 | Bölüm dikey boşluğu (masaüstü) |

Bölüm dikey boşluğu (`section-y`): `clamp(3.5rem, 2.257rem + 5.304vw, 6.5rem)` → mobil 56 px, masaüstü 104 px. Sıkı çeşit (`section-y-tight`): bunun yarısı (28 → 52 px); istatistik bandı ve filtre çubuğu çevresinde.

### 3.4 Izgara, kapsayıcı ve kırılma noktaları

| Belirteç | En küçük genişlik | Sütun | Oluk | Sayfa kenar payı | Not |
|---|---|---|---|---|---|
| (taban) | 0 | 4 | 16 px | 16 px | Tasarım 320 px'te yatay kaydırmasız çalışır (WCAG 1.4.10) |
| `sm` | 640 px | 8 | 24 px | 24 px | |
| `md` | 768 px | 8 | 24 px | 32 px | Tablet dikey |
| `lg` | 1024 px | 12 | 32 px | 32 px | Masaüstü menü bu noktada açılır |
| `xl` | 1280 px | 12 | 32 px | 40 px | |
| `2xl` | 1440 px | 12 | 32 px | otomatik | İçerik artık büyümez |

| Kapsayıcı | En büyük genişlik | Kullanım |
|---|---|---|
| `container` | 1200 px (75 rem) | Varsayılan |
| `container-narrow` | 768 px (48 rem) | Yasal metin, 404, tek sütun metin |
| `container-wide` | 1360 px (85 rem) | Ana sayfa hero'su, alt bilgi |
| `prose` | 68ch | Gövde metni blokları |

Zemin renkleri tam genişliktir; içerik kapsayıcıda kalır. Kart ızgaraları: 1 sütun (taban) → 2 (`sm`) → 3 (`lg`); dört hizmet grubu kartı: 1 → 2 (`sm`) → 4 (`xl`).

### 3.5 Köşe yarıçapı

| Belirteç | Değer | Kullanım |
|---|---|---|
| `radius-none` | 0 | Tam genişlik bantlar |
| `radius-sm` | 4 px | Rozet, onay kutusu, odak halkası köşesi |
| `radius-md` | 6 px | Düğme, girdi, çip |
| `radius-lg` | 10 px | Kart, görsel, harita, bilgi kutusu |
| `radius-xl` | 16 px | Ana sayfa hero görseli, ışık kutusu |
| `radius-full` | 9999 px | Yalnızca dairesel ikon düğmeleri |

Hap biçimli (tam yuvarlak) düğme ve çip kullanılmaz; köşeler mühendislik firmasına uygun biçimde düşük ve tutarlıdır.

### 3.6 Gölge ve yükseklik

Gölgeler `brand.950` tabanlıdır (nötr siyah değil), düşük saydamlıkta. Kartlar varsayılan olarak **kenarlıkla** ayrılır; gölge yalnızca yükselen (üste binen) öğelerde ve hover'da kullanılır.

| Belirteç | Değer | Kullanım |
|---|---|---|
| `shadow-none` | yok | Kart (varsayılan: 1 px `border.default`) |
| `shadow-sm` | `0 1px 2px rgb(8 37 56 / .06)` | Girdi, yapışkan üst bilgi (kaydırılınca) |
| `shadow-md` | `0 4px 12px -2px rgb(8 37 56 / .10), 0 2px 4px -2px rgb(8 37 56 / .06)` | Kart hover, açılır menü |
| `shadow-lg` | `0 16px 32px -8px rgb(8 37 56 / .16), 0 4px 8px -4px rgb(8 37 56 / .08)` | Mobil menü paneli, çerez bandı, ışık kutusu |
| `shadow-up` | `0 -2px 8px rgb(8 37 56 / .08)` | Mobil sabit eylem çubuğu |

### 3.7 Kenarlıklar

| Belirteç | Değer | Kullanım |
|---|---|---|
| `border-hairline` | 1 px `border.default` | Kart, ayraç, tablo satırı |
| `border-strong` | 1 px `border.strong` | Bölüm ayracı |
| `border-input` | 1 px `border.input` | Girdi (varsayılan) |
| `border-input-active` | 2 px `brand.700` | Girdi (odak), seçili çip |
| `border-input-error` | 2 px `#D12B52` | Hatalı girdi |
| `border-accent` | 3 px `accent.500`, yalnızca sol veya üst kenar | Bölüm başlığı vurgusu, öne çıkan not |

Kenarlık kalınlığı 1 → 2 px değişirken düzen kaymaması için iç boşluk 1 px azaltılır veya `box-shadow: inset` kullanılır.

### 3.8 Hareket

| Belirteç | Değer | Kullanım |
|---|---|---|
| `duration-fast` | 120 ms | Renk, kenarlık, opaklık (hover/odak) |
| `duration-base` | 200 ms | Açılır menü, çip, akordeon ikonu |
| `duration-slow` | 320 ms | Mobil menü paneli, ışık kutusu, çerez bandı |
| `ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Varsayılan |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Giren öğe |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Çıkan öğe |

Kurallar:

- Yalnızca `opacity`, `transform`, `color`, `background-color`, `border-color`, `box-shadow` canlandırılır; düzen özellikleri (`width`, `height`, `top`) canlandırılmaz.
- **Yok:** kaydırmayla beliren bölümler, paralaks, otomatik dönen içerik, sayarak artan rakam, video arka plan, yükleme ekranı.
- Kart hover: `translateY(-2px)` + `shadow-md`, 120 ms. Görsel hover yakınlaştırması en çok `scale(1.03)`.
- `@media (prefers-reduced-motion: reduce)`: tüm geçişler `0.01ms`, `transform` tabanlı hover etkileri kapalı, `scroll-behavior: auto`. Durum değişimi (açık/kapalı) anında gerçekleşir; işlev kaybolmaz.
- Sayfa içi çapaya yumuşak kaydırma yalnızca hareket azaltma kapalıyken (`scroll-behavior: smooth`).

### 3.9 Odak halkası

| Bağlam | Değer |
|---|---|
| Açık zemin | `outline: 2px solid #0074B0; outline-offset: 2px` |
| Koyu zemin (`surface.inverse*`) | `outline: 2px solid #FFFFFF; outline-offset: 2px` |
| Dolgulu turuncu düğme | `outline: 2px solid #0074B0; outline-offset: 2px` (açık zemin) / beyaz (koyu zemin) |
| Girdi | 2 px `brand.700` kenarlık + `outline: 2px solid #0074B0; outline-offset: 1px` |
| Görsel içeren kart (tamamı bağlantı) | Halka kartın dış kenarında, `radius-lg` ile |

- Yalnızca `:focus-visible` ile gösterilir; `outline: none` tek başına hiçbir yerde yazılmaz.
- Halka kırpılmaz: `overflow: hidden` olan kapsayıcılarda halka dış sarmalayıcıya taşınır.
- Yapışkan üst bilgi ve mobil eylem çubuğu odaklanan öğeyi örtmemelidir (WCAG 2.4.11): `html { scroll-padding-top: 96px; scroll-padding-bottom: 88px }` (mobilde alt değer eylem çubuğu yüksekliği + 24 px).

### 3.10 z-index katmanları

| Belirteç | Değer | Öğe |
|---|---|---|
| `z-base` | 0 | Akış içi içerik |
| `z-raised` | 10 | Kart hover, yapışkan sayfa içi gezinme |
| `z-header` | 100 | Yapışkan üst bilgi |
| `z-actionbar` | 110 | Mobil sabit eylem çubuğu |
| `z-dropdown` | 200 | Hizmetler açılır menüsü |
| `z-banner` | 300 | Çerez izni bandı |
| `z-overlay` | 400 | Karartma katmanı |
| `z-modal` | 500 | Mobil menü paneli, ışık kutusu (`<dialog>` üst katmanı kullanır; değer yedektir) |
| `z-skip` | 600 | Skip link |

Bunların dışında z-index değeri yazılmaz.

### 3.11 Sabit ölçüler

| Öğe | Mobil | Masaüstü (`lg`+) |
|---|---|---|
| Üst iletişim şeridi yüksekliği | gösterilmez | 40 px |
| Üst bilgi yüksekliği | 64 px | 76 px |
| Mobil sabit eylem çubuğu | 64 px + `env(safe-area-inset-bottom)` | gösterilmez |
| Düğme yüksekliği (md / lg) | 44 / 52 px | 44 / 52 px |
| Girdi yüksekliği | 48 px | 48 px |
| Çip yüksekliği | 40 px (dokunma alanı 44 px) | 36 px |
| İkon boyutları | 16, 20, 24, 32, 40 px | aynı |

---

## 4. İkon ve çizim dili

### 4.1 İkon seti

**Lucide** (ISC lisansı; açık kaynak, ticari kullanım serbest). Tek set kullanılır; başka setten ikon karıştırılmaz.

| Kural | Değer |
|---|---|
| Biçim | Satır içi SVG (derleme zamanında dahil edilir; ikon yazı tipi veya çalışma zamanı kitaplığı yok) |
| Çizgi kalınlığı | 24 px ızgarada 1,75 px; 32–40 px gösterimde 1,5 px; uçlar ve köşeler yuvarlak |
| Renk | `currentColor`; varsayılan `brand.700` (açık zemin), `brand.300` (koyu zemin). İkonlar kırmızıya boyanmaz |
| İkon kutusu | 48×48 px, `radius-lg`, zemin `brand.50`, ikon 24 px `brand.700` (hizmet kartı ve alt grup başlığında) |
| Erişilebilirlik | Dekoratif ikon `aria-hidden="true"`; tek başına anlam taşıyan ikon düğmesinde `aria-label` |
| Eksik ikon | Sette karşılığı olmayan kavram için aynı ızgara/çizgi kurallarıyla ekip çizer (01 §9 madde 2c); görsel kayıt tablosuna "ekip üretimi" olarak işlenir |

İkon adları Faz 1'de setin o günkü kararlı sürümünde doğrulanır; adı değişmiş veya bulunmayan ikon için aynı kavramı taşıyan en yakın ikon seçilir.

### 4.2 İkon eşlemesi

**Hizmet grupları**

| Hizmet grubu | Lucide ikonu (öneri) | Kavram |
|---|---|---|
| Elektrik Taahhüt | `zap` | Enerji |
| Mekanik Taahhüt | `fan` | Havalandırma/HVAC |
| Yangın Algılama ve Söndürme Sistemleri | `fire-extinguisher` | Söndürme ekipmanı (alev değil, önlem) |
| Tasarım ve Projelendirme | `drafting-compass` | Teknik çizim |

**Alt gruplar**

| Alt grup | İkon (öneri) | | Alt grup | İkon (öneri) |
|---|---|---|---|---|
| Orta Gerilim Sistemleri | `utility-pole` | | HVAC Sistemleri | `air-vent` |
| Alçak Gerilim Sistemleri | `plug-zap` | | Yangından Koruma Sistemleri | `shield-check` |
| Zayıf Akım Sistemleri | `cctv` | | Sıhhi Tesisat Sistemleri | `droplets` |
| Otomasyon ve Enstrümantasyon | `gauge` | | Yangın Algılama ve Alarm | `bell-ring` |
| Gazlı Söndürme | `cylinder` | | Sulu Söndürme | `shower-head` |
| Köpüklü Söndürme | `waves` | | Tasarım (dizayn) | `ruler` |

**Sektörler (referans rozetleri ve filtre; sektör listesi 02/03'te kesinleşir — bkz. Açık Soru 6)**

| Sektör | İkon | | Sektör | İkon |
|---|---|---|---|---|
| Sağlık | `hospital` | | Enerji ve Altyapı | `fuel` |
| Otel ve Konaklama | `hotel` | | Telekom ve Bilişim | `server` |
| Gıda | `wheat` | | Lojistik | `warehouse` |
| Sanayi ve Üretim | `factory` | | Savunma/Askerî Tesis | `shield` |

**Arayüz:** telefon `phone` · e-posta `mail` · konum `map-pin` · saat `clock` · menü `menu` · kapat `x` · aşağı ok `chevron-down` · ileri `arrow-right` · dış bağlantı `external-link` · onay `check` · hata `circle-alert` · bilgi `info` · filtre `sliders-horizontal` · yol tarifi `navigation` · büyüt `maximize-2`. WhatsApp simgesi marka simgesidir; Lucide'da yoktur, WhatsApp'ın marka kullanım kurallarına uygun tek renk simge ayrı SVG olarak eklenir ve görsel kayıt tablosuna işlenir.

### 4.3 Çizim dili

- Fotoğraf dışı süsleme tek motiften gelir: **logodaki 60° eğik şerit**. Kullanım: koyu bantların (iç sayfa hero'su, çağrı bandı) sağ kenarında `brand.800`/`brand.900` tonlarında, %100 opak, büyük ölçekli 2–3 eğik şerit (SVG, dekoratif, `aria-hidden`). Bu motif fotoğraf üzerine bindirilmez ve açık zeminde kullanılmaz.
- İllüstrasyon yalnızca 404 sayfasında (05: `IMG-404-ILLU`) kullanılır; ikonlarla aynı çizgi dilinde, tek renk `brand.700` + `accent.500` vurgu.
- Stok illüstrasyon paketi, 3B figür, eğimli renk geçişli (gradient) arka plan, "blob" biçimler kullanılmaz.

---

## 5. Bileşen kütüphanesi

Her bileşen için: **Amaç · Anatomi · Çeşitler · Durumlar · Duyarlı davranış · Erişilebilirlik**. Bileşen adları (İngilizce) dosya adı önerisidir.

### 5.1 Skip link — `SkipLink`

- **Amaç:** Klavye kullanıcısının üst bilgiyi atlayıp ana içeriğe geçmesi.
- **Anatomi:** `<a href="#icerik">İçeriğe geç</a>`; `<body>` içindeki ilk odaklanabilir öğe.
- **Durumlar:** Varsayılan: ekran dışında (görsel olarak gizli, `display:none` değil). Odak: sol üstte 16 px içeride, `brand.950` zemin, beyaz metin, `radius-md`, 12×16 px iç boşluk, `z-skip`.
- **Duyarlı:** Tüm genişliklerde aynı.
- **Erişilebilirlik:** Hedef `<main id="icerik" tabindex="-1">`. Referanslar sayfasında ikinci bağlantı: "Filtreleri atla, sonuçlara geç".

### 5.2 Üst iletişim şeridi — `TopBar`

- **Amaç:** Masaüstünde telefon/e-posta/çalışma saatini kalıcı göstermek (hedef kitle 3: mevcut müşteri).
- **Anatomi:** `surface.inverse-soft` (`brand.900`) zemin, 40 px; solda `map-pin` + "Pendik, İstanbul" · `clock` + çalışma saatleri (doğrulanırsa); sağda `phone` + telefon (`tel:`), `mail` + e-posta (`mailto:`). Metin `text-sm`, `neutral.300`; bağlantılar beyaz.
- **Çeşitler:** Yok.
- **Durumlar:** Bağlantı hover: alt çizgi; odak: beyaz halka. Çalışma saati verisi yoksa o öğe çizilmez.
- **Duyarlı:** `< lg` gizli (aynı bilgiler mobil menüde ve sabit eylem çubuğunda). Yapışkan değildir; sayfa kaydırılınca kaybolur, üst bilgi yapışır.
- **Erişilebilirlik:** Telefon bağlantısının erişilebilir adı tam numara ("Telefon: 0216 307 18 62"); ikonlar dekoratif.

### 5.3 Üst bilgi — `SiteHeader`

- **Amaç:** Marka, ana gezinme, birincil eylem.
- **Anatomi (masaüstü `lg`+):** beyaz zemin, 76 px, altta 1 px `border.default`; solda logo (44 px) · ortada/sağda menü: **Hizmetler ▾ · Referanslar · Hakkımızda · İletişim** · sağda telefon bağlantısı (ikon + numara, `xl`+ görünür) + **"Teklif Al"** birincil düğme (md). Sıra 01 §6'ya uygundur.
- **"Hizmetler" açılır menüsü:** Düğmeye **tıklamayla** açılır (yalnızca hover ile açılmaz). Panel: 720 px genişlik, `surface.card`, `shadow-md`, `radius-lg`, `z-dropdown`; 2 sütun:
  - Sol sütun (4 satır): her hizmet grubu için ikon kutusu + ad + tek satır açıklama (`text-sm`, `text.muted`). Elektrik Taahhüt · Mekanik Taahhüt · Yangın Algılama ve Söndürme Sistemleri · Tasarım ve Projelendirme.
  - Sağ sütun (`surface.subtle` zemin): "Yangın söndürme sistemleri" üst etiketi altında 3 bağlantı: Gazlı Söndürme · Sulu Söndürme · Köpüklü Söndürme; en altta "Tüm hizmetler →" (`/hizmetler/`).
- **Anatomi (mobil `< lg`):** 64 px; solda logo (36 px), sağda menü düğmesi (44×44 px, `menu` ikonu + görünür "Menü" yazısı ≥ 360 px'te). Telefon ve teklif düğmeleri burada **yoktur** (sabit eylem çubuğundadır, §5.24).
- **Mobil menü paneli:** tam ekran `<dialog>`; üstte logo + kapat düğmesi; gövdede: "Hizmetler" akordeonu (**varsayılan açık**; içinde 4 grup, Yangın'ın altında girintili 3 alt sayfa) · Referanslar · Hakkımızda · İletişim (her satır 56 px, `text-h4`); altta sabit blok: "Teklif Al" (tam genişlik birincil düğme) + telefon + e-posta + adres.
- **Çeşitler:** `default` · `scrolled` (kaydırma > 8 px: `shadow-sm` eklenir, yükseklik değişmez).
- **Durumlar:**
  - Menü öğesi — varsayılan: `neutral.800`; hover: `brand.700` + 2 px alt çizgi; odak: halka; geçerli sayfa: `brand.700`, 2 px `accent.500` alt çizgi, `aria-current="page"` (alt sayfalarda üst öğe `aria-current="true"`).
  - Açılır düğme — kapalı/açık: `chevron-down` 180° döner; `aria-expanded`.
- **Duyarlı:** `position: sticky; top: 0`. Mobilde menü açıkken arka plan kaydırması kilitlenir.
- **Erişilebilirlik:** `<header>` içinde `<nav aria-label="Ana menü">`. Açılır menü: `<button aria-expanded aria-controls>`; `Esc` kapatır ve odağı düğmeye döndürür; dışarı tıklama ve odağın panelden çıkması kapatır; ok tuşları zorunlu değil, `Tab` sırası doğal. Mobil panel: `<dialog>` + `showModal()` (odak tuzağı ve `Esc` yerleşik); açılınca odak kapat düğmesine, kapanınca menü düğmesine döner. JS yoksa: menü düğmesi alt bilgideki tam site bağlantılarına (`#site-menu`) çapa bağlantısı olarak çalışır.

### 5.4 Düğme — `Button`

- **Amaç:** Eylem başlatmak (form gönderme, panel açma) veya eylem ağırlıklı gezinme (`<a>` olarak "Teklif Al").
- **Anatomi:** [ikon (isteğe bağlı, 20 px)] + etiket + [sondaki ikon]; `radius-md`; `text-button`.
- **Çeşitler:**

| Çeşit | Zemin | Metin | Kenarlık | Kullanım |
|---|---|---|---|---|
| `primary` | `accent.600` | beyaz | yok | Sayfanın ana eylemi: "Teklif Al", "Gönder" |
| `secondary` | şeffaf | `brand.700` | 1,5 px `brand.700` | İkincil eylem: "Hizmetleri incele", "Tüm referanslar" |
| `inverse` | beyaz | `brand.900` | yok | Koyu zeminde ikincil eylem |
| `ghost` | şeffaf | `brand.700` | yok | Üçüncül: "Filtreleri temizle" |
| `whatsapp` | `#0B6B5F` | beyaz | yok | Yalnızca WhatsApp bağlantısı |

  Boyutlar: `md` 44 px yükseklik, 20 px yatay iç boşluk · `lg` 52 px, 28 px (hero ve çağrı bandı) · `sm` 36 px, 14 px (yalnızca masaüstü yoğun alan; çevresinde ≥ 8 px boşluk). Tam genişlik seçeneği: `block`.
- **Durumlar:**

| Durum | `primary` | `secondary` |
|---|---|---|
| Varsayılan | `accent.600` | şeffaf, `brand.700` |
| Hover | `accent.700` | zemin `brand.50` |
| Odak | varsayılan + odak halkası | aynı |
| Aktif (basılı) | `accent.800`, `translateY(1px)` | zemin `brand.100` |
| Devre dışı | zemin `neutral.200`, metin `neutral.500`, `cursor: not-allowed` | kenarlık `neutral.300`, metin `neutral.500` |
| Yükleniyor | etiket yerinde kalır, önüne 20 px dönen gösterge; `aria-busy="true"`, tıklama engelli; genişlik değişmez | aynı |

- **Duyarlı:** Mobilde hero ve çağrı bandındaki düğmeler tam genişlik ve alt alta; `sm`+ yan yana. Etiket tek satır; uzun etiket kısaltılmaz, sarar.
- **Erişilebilirlik:** Gezinme için `<a>`, eylem için `<button type>`. Etiket eylemi söyler ("Teklif Al", "Formu Gönder"); "Tıklayın", "Devamı" tek başına kullanılmaz. Devre dışı düğmede neden yakınında metinle belirtilir. Hareket azaltmada dönen gösterge yerine "Gönderiliyor…" metni.

### 5.5 Bağlantı — `Link`

- **Amaç:** Gezinme.
- **Çeşitler:** `inline` (metin içi: `brand.700`, **her zaman altı çizili**, `text-underline-offset: 3px`, kalınlık 1 px) · `standalone` (tek başına: `brand.700`, 600 ağırlık, sonda `arrow-right` 16 px; alt çizgi hover'da) · `nav` (menü/alt bilgi) · `external` (yeni sekme açıyorsa sonda `external-link` + görsel olarak gizli "(yeni sekmede açılır)") · `tel`/`mail` (başında ikon).
- **Durumlar:** hover: `brand.800`, alt çizgi 2 px; odak: halka; aktif: `brand.900`; ziyaret edilmiş: renk değişmez.
- **Duyarlı:** Tek başına duran bağlantıların dokunma alanı dikeyde ≥ 44 px (iç boşlukla).
- **Erişilebilirlik:** Metin içi bağlantı yalnızca renkle ayırt edilmez (alt çizgi zorunlu). Bağlantı metni bağlamından bağımsız anlamlıdır: "Gazlı söndürme sistemlerini incele →"; kartlarda yinelenen "İncele" metinleri görsel olarak gizli ek metinle tamamlanır.

### 5.6 Hero — `Hero`

- **Amaç:** Sayfanın ne olduğunu ve bir sonraki adımı ilk ekranda söylemek. Slider değildir; tek durumludur.
- **Çeşit A — `home` (yalnızca Ana Sayfa):**
  - Anatomi: beyaz zemin; **sol** (7/12): üst etiket (`text-overline`, `accent.700`) · H1 (`text-display`, en çok 22ch) · giriş paragrafı (`text-lead`, en çok 56ch) · düğme çifti: "Teklif Al" (`primary`, lg) + "Hizmetleri incele" (`secondary`, lg) · altında güven satırı (3 kısa madde, `check` ikonlu; içerik 03'ten, doğrulanmış bilgilerle). **Sağ** (5/12): `IMG-HOME-HERO` 4:5 dikey, `radius-xl`; sol alt köşesinden 24 px dışarı taşan küçük bilgi kartı (beyaz, `shadow-md`, "2010'dan beri" gibi **doğrulanmış** tek veri; veri yoksa kart çizilmez).
  - Metin görselin üzerine binmez → karşıtlık fotoğraftan bağımsızdır.
  - En küçük yükseklik yok; içerik kadar. Masaüstünde ilk ekranda H1 + düğmeler + görselin en az %70'i görünür (1366×768'de).
- **Çeşit B — `page` (iç sayfalar; görselli):**
  - Anatomi: `brand.900` zemin, sağ kenarda eğik şerit motifi (§4.3); içerik: kırıntı yolu (koyu zemin çeşidi) · H1 (`text-h1`, beyaz) · giriş paragrafı (`text-lead`, `neutral.300`, en çok 56ch) · isteğe bağlı tek düğme. `lg`+: sağda 5/12 genişlikte görsel (3:2), bandın alt kenarından 48 px aşağı taşar (bir sonraki bölümle bağ kurar), `radius-lg`, `shadow-lg`.
  - Kullanım: Hizmetler genel, hizmet grup sayfaları, yangın alt sayfaları, Hakkımızda, referans detayı.
- **Çeşit C — `page-plain` (iç sayfalar; görselsiz, kısa):**
  - Anatomi: B ile aynı, görsel yok; dikey iç boşluk `section-y-tight`.
  - Kullanım: Referanslar listesi (filtreye hızlı ulaşmak için), İletişim, yasal metinler.
- **Durumlar:** Görsel yüklenemezse `surface.muted` zemin + görselin baskın rengi (05 §5 yer tutucu); düzen kaymaz (`aspect-ratio` sabit).
- **Duyarlı:**
  - A — mobil: tek sütun; sıra: üst etiket → H1 → paragraf → düğmeler (tam genişlik, alt alta) → görsel (4:3 kırpım, `radius-lg`) → güven satırı. Bilgi kartı mobilde görselin altına normal akışta iner.
  - B — `< lg`: görsel bandın altında, kapsayıcı genişliğinde 16:9 kırpım, banda 32 px biner. `< sm`: görsel tam genişlik (kenar paysız) 16:9.
- **Erişilebilirlik:** Sayfadaki tek `<h1>` buradadır. Hero görseli bilgi taşıyorsa anlamlı `alt` (05 §3), yalnızca atmosferse `alt=""`. Hero görseli LCP adayıdır: `loading="eager"`, `fetchpriority="high"` (05 §5).

### 5.7 Bölüm başlığı — `SectionHeading`

- **Amaç:** Her bölümü aynı düzenle açmak.
- **Anatomi:** [üst etiket `text-overline`, `accent.700`] → başlık (`text-h2`, `<h2>`) → [açıklama `text-lead`/`text-body`, `text.muted`, en çok 56ch] → [sağda bağlantı: "Tüm referanslar →"]. Başlığın üstünde 40×3 px `accent.500` çizgi (dekoratif).
- **Çeşitler:** `left` (varsayılan; sola hizalı — uzun Türkçe başlıklar için) · `center` (yalnızca çağrı bandı ve 404) · `inverse` (koyu zemin: başlık beyaz, etiket `accent.300`, açıklama `neutral.300`).
- **Duyarlı:** `lg`+: başlık solda, bağlantı aynı satırda sağda (taban çizgisine hizalı). Mobil: bağlantı bölümün **sonuna** (içerikten sonra) taşınır.
- **Erişilebilirlik:** Üst etiket başlık öğesi değildir (`<p>`). Başlık düzeyi sayfa hiyerarşisine göre parametreyle verilir; görsel boyut düzeyden bağımsızdır.

### 5.8 Hizmet kartı — `ServiceCard`

- **Amaç:** Bir hizmet grubunu veya alt sayfayı özetleyip ilgili sayfaya götürmek.
- **Anatomi:** görsel (4:3, üstte; `IMG-SVC-*-CARD`) → gövde (24 px iç boşluk): ikon kutusu (görselin alt kenarına 24 px biner) · başlık (`text-h3`) · tek cümle açıklama (`text-body`, en çok 3 satır) · **alt grup özeti** (en çok 4 satır, `text-sm`, `check` imli; ör. "Orta Gerilim · Alçak Gerilim · Zayıf Akım · Otomasyon") · "İncele →" (`standalone` bağlantı).
- **Çeşitler:** `media` (görselli; Ana Sayfa ve Hizmetler genel) · `compact` (görselsiz: ikon kutusu + başlık + açıklama + bağlantı; yangın alt sayfa kartları ve "diğer hizmetler" şeritleri) · `horizontal` (`md`+: görsel solda 2/5, metin sağda; Hizmetler genel sayfasında dönüşümlü).
- **Durumlar:** Varsayılan: beyaz, 1 px `border.default`, `radius-lg`. Hover: `shadow-md`, `translateY(-2px)`, başlık `brand.700`, görsel `scale(1.03)` (kırpılmış). Odak: kartın tamamında halka. Aktif: `shadow-sm`. Görsel yok/yüklenemedi: `compact` düzenine düşer.
- **Duyarlı:** 1 sütun (taban) → 2 (`sm`) → 4 (`xl`; dört grup kartı). Kartlar aynı satırda eşit yükseklikte; bağlantı alta yaslı.
- **Erişilebilirlik:** Kartın tamamı tıklanabilir, ancak DOM'da tek bağlantı vardır: başlıktaki `<a>` `::after` ile kartı kaplar (iç içe bağlantı yok). "İncele" metni dekoratiftir (`aria-hidden`), bağlantının adı başlıktır. Görsel `alt=""` (başlık zaten adı veriyor).

### 5.9 Hizmet madde listesi (alt gruplu) — `ServiceScopeList`

- **Amaç:** Envanterdeki uzun madde listelerini (Elektrik: 4 alt grup, 6 + 11 + 11 + 6 = 34 madde; Mekanik: 3 alt grup, 7 + 5 + 7 = 19 madde) **taranabilir** sunmak. Tablo, sekme arkasına gizlenmiş içerik veya tek uzun madde listesi kullanılmaz.
- **Anatomi:**
  1. **Sayfa içi gezinme (`ScopeNav`)** — alt grup adları + madde sayıları ("Alçak Gerilim · 11"); her biri ilgili alt gruba çapa bağlantısı.
  2. **Alt grup bloğu (`ScopeGroup`)** — her alt grup bir `<section>`:
     - Başlık satırı: ikon kutusu (48 px) + alt grup adı (`<h3>`, `text-h3`) + sayı rozeti ("11 hizmet", `text-xs`, `brand.100` zemin, `brand.800` metin).
     - İsteğe bağlı 1–2 cümle açıklama (03'ten; yoksa çizilmez).
     - **Madde ızgarası:** `<ul>`; her madde tek satır kutu: 20 px `check` ikonu (`brand.600`) + madde adı (`text-body`, `neutral.800`); satır yüksekliği en az 44 px, altta 1 px `border.default`. Maddeler bağlantı değildir (ayrı sayfaları yok); yalnızca yangınla ilgili maddeler (ör. "Gazlı söndürme sistemleri") ilgili alt sayfaya `inline` bağlantıdır.
     - İsteğe bağlı alt grup görseli (`IMG-SVC-*-SUB-*`, 4:3).
- **Çeşitler:** `with-media` (alt grup görselli; grup sayfaları) · `plain` (görselsiz; Tasarım sayfasındaki 4 maddelik kısa liste — bu durumda `ScopeNav` çizilmez).
- **Durumlar:**
  - `ScopeNav` öğesi — varsayılan: `text.muted`; hover: `brand.700`; **geçerli** (kaydırmayla o grup görünümde): `brand.700`, 600 ağırlık, solda 3 px `accent.500` çizgi (masaüstü) / altta 2 px çizgi (mobil), `aria-current="true"`; odak: halka.
  - Akordeon (yalnızca mobil) — kapalı/açık: `chevron-down` döner.
  - Madde satırı — hover: yok (etkileşimli değil; yanlış beklenti yaratmamak için).
- **Duyarlı:**
  - **`lg`+:** iki sütunlu düzen. Sol 3/12: `ScopeNav` dikey liste, `position: sticky; top: 100px`. Sağ 9/12: alt grup blokları alt alta, aralarında 64 px ve 1 px ayraç. Her blokta madde ızgarası **2 sütun** (`column-gap` 32 px; okuma sırası sütun bazlı: `columns: 2`, `break-inside: avoid`), görsel varsa bloğun sağında 4/9 genişlikte ve maddeler tek sütun olur — karar kuralı: **madde sayısı ≥ 9 ise görsel bloğun üstünde 21:9 şerit, maddeler 2 sütun; < 9 ise görsel sağda, maddeler tek sütun.**
  - **`md`–`lg`:** `ScopeNav` üst bilginin altına yapışan yatay çip satırı (taşarsa yatay kaydırma, sağ kenarda solma); bloklar tek sütun, maddeler 2 sütun.
  - **`< md`:** `ScopeNav` aynı yatay çip satırı (yapışkan, 48 px). Alt grup blokları **akordeon** (`<details>`): başlık satırı (ikon + ad + sayı rozeti + ok) her zaman görünür; **ilk grup açık**, diğerleri kapalı; üstte "Tümünü aç / Tümünü kapat" `ghost` düğmesi. Maddeler tek sütun. Böylece 34 madde yerine ilk bakışta 4 grup başlığı + ilk grubun maddeleri görünür.
- **Erişilebilirlik:** `ScopeNav` → `<nav aria-label="Bu sayfadaki hizmet grupları">`. Akordeon yerel `<details>/<summary>`; içerik DOM'da ve aranabilir kalır; `md`+ genişlikte tüm `<details>` `open` ve `summary` etkileşimsiz görünür. Çapa hedeflerinde `scroll-margin-top` (üst bilgi + çip satırı yüksekliği). Sayı rozeti erişilebilir adda: "Alçak Gerilim Sistemleri, 11 hizmet". JS yoksa: tüm gruplar açık, gezinme düz çapa bağlantısı (geçerli grup vurgusu olmaz).

### 5.10 İstatistik bandı — `StatBand`

- **Amaç:** Birkaç doğrulanmış sayısal gerçeği tek bakışta vermek.
- **Anatomi:** `surface.subtle` zemin, üst–alt 1 px `border.default`; 2–4 öğe; her öğe: değer (`text-stat`, `neutral.900`) + etiket (`text-sm`, `text.muted`); öğeler arasında dikey 1 px ayraç.
- **Çeşitler:** `light` (varsayılan) · `inverse` (`brand.950` zemin; değer beyaz, etiket `neutral.300`) — Hakkımızda sayfasında.
- **Durumlar:** **Durağan**; sayarak artma yok. Veri kuralı: yalnızca müşterinin doğruladığı değerler gösterilir (envanterdeki "19 tamamlanan / 2 devam eden" 2020'den kalmadır — Açık Soru 4). Doğrulanmış öğe sayısı < 2 ise bant **hiç çizilmez**.
- **Duyarlı:** mobil 2 sütun (3 öğe varsa 3. öğe tam genişlik değil, 2+1 sola hizalı); `md`+ tek satır.
- **Erişilebilirlik:** `<dl>`; görsel sıra değer → etiket olsa da her çift `<div>` içinde `<dt>` etiket, `<dd>` değer (CSS ile sıra çevrilir). "+" gibi ekler metin olarak yazılır.

### 5.11 Referans kartı — `ReferenceCard`

- **Amaç:** Bir referansı liste ve öne çıkanlar bölümünde tanıtmak; detay sayfasına götürmek.
- **Anatomi:** görsel (3:2; sektör havuzundan `IMG-REF-<SEKTÖR>-NN` veya müşteri fotoğrafı) → sol üst köşesinde sektör rozeti (§5.14, beyaz zemin) → gövde (20–24 px iç boşluk): müşteri/proje adı (`text-h4`, `<h3>`) · iş tanımı (`text-body`, en çok 2 satır; ör. "Otomatik gazlı söndürme sistemleri") · alt satır: `map-pin` + şehir, ülke (`text-sm`, `text.subtle`) · [yıl — yalnızca doğrulanmışsa] · hizmet türü rozetleri (en çok 2 + "+1").
- **Çeşitler:** `default` (görselli) · `featured` (Ana Sayfa; `lg`+ ilk kart 2 sütun genişliğinde, görsel 16:9) · `text` (görselsiz; "ilgili referanslar" şeridinde ve görsel bulunamayan durumda — üstte 3 px `brand.500` şerit).
- **Durumlar:** Varsayılan/hover/odak/aktif: hizmet kartıyla aynı. Filtrelenip gizlenen kart `hidden` özniteliği alır. Tarih alanı boşsa o satır çizilmez; "2016–2019" şablon değeri gösterilmez (01 §12).
- **Duyarlı:** 1 → 2 (`sm`) → 3 (`lg`) sütun; 19 kart sayfalama olmadan tek sayfada (ilk 6 kartın görselleri `eager` değil, tümü `lazy`; bkz. 05 §5).
- **Erişilebilirlik:** Tüm kart tek bağlantı (başlıktaki `<a>` yayılır). Görsel temsilî olduğu için `alt=""` (yanlış beyanı önler: görsel müşterinin tesisi değildir). Liste `<ul>`; her kart `<li>` içinde `<article>`.

### 5.12 Filtre çubuğu ve çipler — `FilterBar` / `Chip`

- **Amaç:** 19 referansı sektöre ve hizmet türüne göre daraltmak (01 §5).
- **Anatomi:** iki grup, her biri `<fieldset>` + görünür `<legend>` ("Sektör", "Hizmet türü"); grup içinde çipler: "Tümü" + seçenekler (her çipte ad + parantez içinde eşleşen kayıt sayısı). Altında sonuç satırı: "19 referanstan 5'i gösteriliyor" + "Filtreleri temizle" (`ghost`; yalnızca filtre etkinken).
- **Seçim mantığı:** Her grupta **tek seçim** (radyo davranışı); iki grup birbiriyle **VE** ile birleşir. Seçim URL sorgu dizgisine yazılır (`?sektor=saglik&hizmet=gazli-sondurme`), sayfa yenilenmez, geri tuşu çalışır, bağlantı paylaşılabilir.
- **Çip çeşitleri:** `filter` (seçilebilir) · `static` (etkileşimsiz etiket — §5.14 rozeti ile aynı görünüm ailesi).
- **Çip durumları:**

| Durum | Görünüm |
|---|---|
| Varsayılan | beyaz zemin, 1 px `border.input`, metin `neutral.800`, `radius-md` |
| Hover | zemin `brand.50`, kenarlık `brand.700` |
| Odak | odak halkası |
| Seçili | zemin `brand.700`, metin beyaz, başında 16 px `check` ikonu (yalnızca renkle ayırt edilmez) |
| Seçili + hover | zemin `brand.800` |
| Devre dışı (diğer gruptaki seçimle 0 sonuç verecek) | zemin `neutral.100`, metin `neutral.500`, sayı "(0)"; seçilemez ama görünür |
| Sonuç yok | Kart ızgarası yerine boş durum: `info` kutusu "Bu seçime uyan referans yok." + "Filtreleri temizle" düğmesi |

- **Duyarlı:** `lg`+: iki grup alt alta, çipler sarar; çubuk yapışkan **değildir**. `< lg`: her grup tek satır, yatay kaydırmalı (kenarlarda solma göstergesi, `scroll-snap`); çubuk üst bilginin altına yapışır (yalnızca "Sektör" satırı + sonuç sayısı; "Hizmet türü" satırı kaydırınca yapışmaz). Çip dokunma alanı ≥ 44 px yüksek, aralarında 8 px.
- **Erişilebilirlik:** Çipler görsel olarak gizlenmiş `<input type="radio">` + `<label>`'dır (yerel klavye davranışı: ok tuşlarıyla grup içinde gezinme). Sonuç satırı `role="status" aria-live="polite"`. Filtre değişince odak yerinde kalır. JS yoksa: çubuk gizlenir, 19 referansın tamamı sektör başlıkları altında gruplu listelenir.

### 5.13 Referans detay künyesi — `ReferenceFacts`

- **Amaç:** Referansın doğrulanmış temel bilgilerini yapılandırılmış göstermek (eski sitede açıklama metni yok; künye sayfanın ana içeriğidir).
- **Anatomi:** `surface.subtle` zeminli, `radius-lg`, 24–32 px iç boşluklu kutu; `<dl>`: **Müşteri / Tesis · Sektör · Verilen hizmetler · Konum (şehir, ülke) · Tarih · Kapsam**. Etiket `text-sm`, `text.subtle`, 500; değer `text-body`, `neutral.900`, 500. "Verilen hizmetler" değeri ilgili hizmet sayfalarına bağlantılı rozetlerdir.
- **Çeşitler:** `sidebar` (`lg`+: sağ sütunda, `sticky`, altında "Benzer bir proje için teklif alın" `primary` düğmesi) · `inline` (mobil: H1'in hemen altında 2 sütunlu ızgara).
- **Durumlar:** **Boş alan satırı çizilmez** (özellikle Tarih ve Kapsam; 01 §12). En az Müşteri, Sektör, Hizmet, Konum bulunur.
- **Duyarlı:** mobil: 2 sütun (`dt` üstte, `dd` altta); uzun değerler tam genişlik. `lg`+: tek sütun, her satır altında ayraç.
- **Erişilebilirlik:** `<dl>` anlamsal yapı; rozet bağlantılarının adı hizmet adıdır.

### 5.14 Galeri ve ışık kutusu — `Gallery` / `Lightbox`

- **Amaç:** Bir referansa ait **gerçek** (müşteriden gelen, izinli) saha fotoğraflarını göstermek.
- **Kural:** Galeri yalnızca o referans için ≥ 2 müşteri fotoğrafı varsa çizilir. Temsilî stok görselle galeri yapılmaz.
- **Anatomi:** küçük resim ızgarası (4:3, `radius-lg`), her biri `<button>`; sağ alt köşede `maximize-2` ikonu. Işık kutusu: `<dialog>`, zemin `neutral.950` %92; ortada görsel (`object-fit: contain`, en çok 90vw × 80vh); altta alt yazı + "3 / 7" sayacı; üst sağda kapat; yanlarda önceki/sonraki düğmeleri (48×48 px).
- **Durumlar:** Küçük resim hover: `scale(1.03)` + koyulaşma %8; odak: halka. Işık kutusu yükleniyor: düşük çözünürlüklü yer tutucu + dönen gösterge; hata: "Görsel yüklenemedi" + kapat. İlk/son görselde ilgili ok devre dışı (döngü yok).
- **Duyarlı:** ızgara 2 sütun (mobil) → 3 (`md`) → 4 (`lg`); 5'ten fazla görselde son küçük resimde "+N" katmanı. Mobilde ışık kutusunda yatay kaydırma hareketi desteklenir, ancak düğmeler de her zaman görünür (WCAG 2.5.7).
- **Erişilebilirlik:** `<dialog>` + `showModal()`; `Esc` kapatır; sol/sağ ok tuşları gezdirir; kapanınca odak açan küçük resme döner. Her görselin anlamlı `alt` metni; sayaç `aria-live="polite"`. Düğme adları: "Görseli büyüt: {alt}", "Önceki görsel", "Sonraki görsel", "Kapat". JS yoksa: küçük resimler görselin tam boyutuna düz bağlantıdır.

### 5.15 Sektör ve müşteri metin rozetleri — `Badge` / `ClientNameGrid`

- **Amaç:** Müşteri logoları izinsiz kullanılamadığı için (01 §9) güven göstergesini **metinle** kurmak.
- **`Badge` anatomi:** [16 px ikon] + etiket; `text-xs`, 500; 4×10 px iç boşluk; `radius-sm`.

| Çeşit | Zemin | Metin | Kullanım |
|---|---|---|---|
| `sector` | `brand.100` | `brand.800` | Sektör (ikonlu) |
| `service` | `neutral.100` | `neutral.700` | Hizmet türü |
| `on-image` | beyaz | `neutral.900` | Kart görseli üstünde (`shadow-sm`) |
| `count` | `brand.100` | `brand.800` | "11 hizmet" |
| `note` | `accent.100` | `accent.800` | "Temsilî görsel" |

- **`ClientNameGrid` anatomi (Ana Sayfa "Referanslarımızdan" şeridi):** müşteri adlarının **düz metin** olarak dizildiği ızgara; her hücre: sektör ikonu (20 px, `brand.600`) + ad (`text-h4`, `neutral.800`, 600) + sektör (`text-xs`, `text.subtle`); hücreler 1 px `border.default` ile ayrılır; her hücre ilgili referans detayına bağlantıdır.
  - Adlar kurumun marka yazı tipi, rengi veya logosu taklit edilmeden, sitenin başlık yazı tipiyle yazılır.
  - Hangi adların yazılabileceği müşteri teyidine bağlıdır (Açık Soru 5); teyitsiz ad listeye girmez. Hücre sayısı < 6 ise bileşen çizilmez.
- **Durumlar:** `Badge` etkileşimsizdir (bağlantı olduğunda hover: zemin bir ton koyu, alt çizgi). `ClientNameGrid` hücresi hover: zemin `brand.50`, ad `brand.700`; odak: halka.
- **Duyarlı:** `ClientNameGrid` 2 sütun (mobil) → 3 (`md`) → 4 (`lg`) → 6 (`xl`). Otomatik kayan şerit (marquee) **yok**.
- **Erişilebilirlik:** `<ul>`; yazı görsel değil gerçek metin olduğu için ekran okuyucu ve arama motoru okur. İzin alınıp logo kullanılırsa (Faz 2) her logo `alt="{Kurum adı}"` ile ve tek renk nötr işlenmiş biçimde eklenir.

### 5.16 Süreç adımları — `ProcessSteps`

- **Amaç:** Firmanın iş akışını (konumlandırma cümlesindeki sıra: **tasarım → uygulama → devreye alma → bakım**; 01 §2) göstermek. Adım metinleri 03'ten gelir.
- **Anatomi:** `<ol>`; her adım: numara dairesi (40 px, `brand.700` zemin, beyaz `text-h4`, `tnum`) + başlık (`text-h4`) + 1–2 cümle açıklama (`text-body`); adımlar arası bağlantı çizgisi (2 px `brand.200`).
- **Çeşitler:** `horizontal` (`lg`+: 4 sütun, çizgi yatay) · `vertical` (mobil ve dar alan: numara solda, çizgi dikey) · `compact` (açıklamasız; hizmet sayfası kenar notu).
- **Durumlar:** Etkileşimsiz; hover/odak yok.
- **Duyarlı:** `< lg` dikey; `lg`+ yatay 4 sütun. 5+ adımda her genişlikte dikey.
- **Erişilebilirlik:** Sıra `<ol>` ile verilir; numara dairesi `aria-hidden` (liste numarası zaten okunur). Çizgi dekoratif.

### 5.17 Çağrı bandı (CTA) — `CtaBand`

- **Amaç:** Her sayfanın sonunda (alt bilgiden hemen önce) teklif/iletişim çağrısı (01 §8).
- **Anatomi:** `brand.950` zemin, sağda eğik şerit motifi; solda başlık (`text-h2`, beyaz, en çok 24ch) + 1 cümle (`neutral.300`); sağda düğmeler: "Teklif Al" (`primary`, lg) + telefon (`inverse`, lg; `phone` ikonu + numara, `tel:`).
- **Çeşitler:** `default` · `contextual` (başlık sayfaya göre: hizmet sayfasında "{Hizmet} için teklif alın"; "Teklif Al" bağlantısı `/iletisim/?konu={slug}` ile formdaki hizmet seçimini önceden doldurur) · `compact` (tek satır; referans detayı kenar çubuğunun mobil karşılığı).
- **Durumlar:** Düğme durumları §5.4.
- **Duyarlı:** mobil: tek sütun, sola hizalı, düğmeler tam genişlik alt alta; `lg`+: 7/12 metin + 5/12 düğmeler, dikeyde ortalı. Mobilde sabit eylem çubuğu zaten göründüğünden bant kısaltılmaz ama alt iç boşluğu eylem çubuğunu hesaba katar.
- **Erişilebilirlik:** `<section aria-labelledby>`; İletişim sayfasında bu bant **gösterilmez** (sayfa zaten o).

### 5.18 Form alanları — `Field*`, `FormMessage`

Alanların listesi, zorunlulukları ve doğrulama kuralları 02'de (iş analisti) kesinleşir; burada görünüm ve davranış tanımlıdır.

- **Ortak anatomi:** etiket (`text-sm`, 600, `neutral.900`, girdinin **üstünde**, her zaman görünür) + [zorunlu değilse "(isteğe bağlı)" eki, `text.subtle`] → [yardım metni, `text-sm`, `text.muted`] → girdi → [hata metni]. Zorunlu alanlar çoğunlukta olduğu için yıldız yerine isteğe bağlı alanlar işaretlenir.
- **Ortak ölçü:** yükseklik 48 px; yatay iç boşluk 14 px; `radius-md`; yazı 16 px; beyaz zemin; alanlar arası dikey boşluk 20 px.
- **Ortak durumlar:**

| Durum | Görünüm |
|---|---|
| Varsayılan | 1 px `border.input` (`#5F6C7D`) |
| Hover | kenarlık `neutral.700` |
| Odak | 2 px `brand.700` kenarlık + odak halkası |
| Dolu | varsayılanla aynı (yeşil onay işareti yok) |
| Hata | 2 px `#D12B52` kenarlık; altında `circle-alert` 16 px + hata metni (`text-sm`, `#B4173A`); `aria-invalid="true"` |
| Devre dışı | zemin `neutral.100`, metin `neutral.500`, kenarlık `neutral.300` |
| Salt okunur | zemin `neutral.50`, kenarlık kesikli değil düz `neutral.300` |

- **Çeşitler:**
  - **Metin girdisi (`FieldText`)** — `type` ve `autocomplete` doğru verilir (`name`, `organization`, `email`, `tel`); telefon için `inputmode="tel"`. Yer tutucu metin etiket yerine kullanılmaz; yalnızca biçim örneği için (`neutral.500`).
  - **Seçim (`FieldSelect`)** — yerel `<select>` (özel açılır liste yazılmaz); sağda `chevron-down`; ilk seçenek "Seçiniz" (boş değer). Kullanım: "İlgilendiğiniz hizmet".
  - **Metin alanı (`FieldTextarea`)** — en az 5 satır (≈ 140 px), dikey boyutlandırılabilir; karakter sınırı varsa sağ altta sayaç (`aria-live="polite"`, sınıra %90'da duyurulur).
  - **Onay kutusu (`FieldCheckbox`)** — 20×20 px kutu, `radius-sm`, 1,5 px `border.input`; işaretli: `brand.700` zemin + beyaz `check`; etiket sağında, `text-sm`/`text-body`; tıklanabilir alan kutu + etiket, en az 44 px yüksek. KVKK onayı: etiket içinde aydınlatma metnine `inline` bağlantı (yeni sekme). **Önceden işaretli gelmez.**
  - **Dosya eki** — Sürüm 1 tasarımında yoktur (02 gerektirirse eklenir).
  - **Spam doğrulaması** — Cloudflare Turnstile bileşeni gönder düğmesinin üstünde, sabit yükseklikte yer tutucuyla (CLS önlenir).
- **Mesajlar (`FormMessage`):**
  - **Hata özeti** — gönderimde hata varsa formun üstünde `danger` kutusu: başlık "Formda {n} alan düzeltilmeli" + her hata ilgili alana çapa bağlantısı; kutuya odak taşınır (`tabindex="-1"`, `role="alert"`).
  - **Gönderim hatası (sunucu/ağ)** — `danger` kutusu: "Mesajınız gönderilemedi. Lütfen tekrar deneyin veya bizi arayın: {telefon}". Girilen veriler **silinmez**.
  - **Başarı** — form yerine `success` kutusu (`role="status"`): `check` ikonu + "Mesajınız bize ulaştı" + sonraki adım cümlesi (03'ten) + "Ana sayfaya dön" bağlantısı; odak kutuya taşınır.
- **Gönder düğmesi:** `primary`, lg; yükleniyor durumunda "Gönderiliyor…" + `aria-busy`; çift gönderim engellenir.
- **Doğrulama zamanlaması:** alan terk edilince (`blur`) ve gönderimde; yazarken hata gösterilmez, ancak hatalı alan düzeltilirken hata anında kalkar.
- **Duyarlı:** mobil tek sütun; `md`+: Ad Soyad | Firma ve Telefon | E-posta çiftleri 2 sütun, diğerleri tam genişlik. Form genişliği en çok 640 px.
- **Erişilebilirlik:** Her girdi `<label for>` ile bağlı; yardım ve hata metni `aria-describedby` ile; hata metni neyin yanlış olduğunu ve nasıl düzeltileceğini söyler ("E-posta adresi '@' içermeli. Örnek: ad@firma.com"). Zorunluluk `required` + `aria-required`. JS yoksa form yerel HTML doğrulaması ve standart `POST` ile çalışır.

### 5.19 Harita bloğu — `MapBlock`

- **Amaç:** Adresi göstermek ve yol tarifi başlatmak.
- **Anatomi:** sol: adres kartı (`<address>`: adres, telefonlar, e-posta, çalışma saatleri [varsa]) + "Yol tarifi al" (`secondary` düğme, harita uygulamasında açar) + "Adresi kopyala" (`ghost`). Sağ: harita alanı (16:9, `lg`+ 4:3; `radius-lg`, 1 px kenarlık).
- **Çeşitler / durumlar (iki aşamalı yükleme — performans ve KVKK):**
  1. **Durağan (varsayılan):** `IMG-CONTACT-MAP` durağan harita görseli (05) + ortasında konum iğnesi + üzerinde "Etkileşimli haritayı göster" düğmesi (`inverse`). Üçüncü taraf isteği yapılmaz.
  2. **Etkileşimli:** düğmeye basılınca harita `iframe`'i yüklenir (`loading="lazy"`, `title="Axis Teknik konumu — harita"`). Yükleniyor: iskelet + gösterge. Hata: durağan görsele dönülür + "Harita yüklenemedi. Yol tarifi bağlantısını kullanabilirsiniz."
- **Duyarlı:** mobil: adres kartı üstte, harita altta tam genişlik 4:3; `lg`+: 5/12 kart + 7/12 harita.
- **Erişilebilirlik:** Haritaya bağımlı bilgi yok: adres her zaman metin olarak yanında. `iframe` klavye tuzağı oluşturmaz; hemen ardından "Haritayı atla" hedefi (bir sonraki başlık). Harita sağlayıcısı seçimi ve çerez etkisi: Açık Soru 8.

### 5.20 Kırıntı yolu — `Breadcrumb`

- **Amaç:** Konumu göstermek, üst düzeye dönüş (özellikle 3 düzeyli `/hizmetler/yangin-sistemleri/gazli-sondurme/`).
- **Anatomi:** `<nav aria-label="Sayfa yolu"><ol>`: Ana Sayfa › Hizmetler › Yangın Algılama ve Söndürme Sistemleri › **Gazlı Söndürme**. Ayraç `chevron-right` 16 px (CSS/dekoratif). `text-sm`.
- **Çeşitler:** `on-dark` (hero içinde: bağlantılar `brand.300`, geçerli sayfa beyaz) · `on-light` (bağlantılar `brand.700`, geçerli sayfa `text.muted`).
- **Durumlar:** bağlantı hover: alt çizgi; odak: halka; son öğe bağlantı değildir, `aria-current="page"`.
- **Duyarlı:** mobil: yalnızca bir üst düzey gösterilir ("‹ Yangın Algılama ve Söndürme Sistemleri"); `md`+ tam yol. Uzun adlar tek satırda kesilmez, sarar.
- **Erişilebilirlik:** Ana Sayfa'da gösterilmez. Yapısal veri (BreadcrumbList) 07 kapsamında aynı veriden üretilir.

### 5.21 Alt bilgi — `SiteFooter`

- **Amaç:** Tam gezinme, künye, yasal bağlantılar.
- **Anatomi:** `brand.950` zemin; üst blok 4 sütun:
  1. Logo (koyu zemin sürümü, 40 px) + 2 satır firma tanımı (03) + [sosyal medya ikonları — yalnızca hesap varsa; envanterde yok].
  2. **Hizmetler:** 4 grup + girintili 3 yangın alt sayfası.
  3. **Kurumsal:** Referanslar · Hakkımızda · İletişim · KVKK Aydınlatma Metni · Çerez Politikası · "Çerez tercihleri" (çerez bandını yeniden açan düğme).
  4. **İletişim:** `<address>` — adres, telefon(lar), e-posta, çalışma saatleri (varsa); her biri ikonlu ve bağlantılı.
  
  Alt şerit (üstte 1 px `border.inverse`): "© {yıl} Axis Teknik" (yıl derleme zamanında) · [resmî unvan — teyit sonrası].
- **Çeşitler:** Yok.
- **Durumlar:** bağlantı varsayılan `neutral.300`; hover beyaz + alt çizgi; odak beyaz halka. Sütun başlıkları `text-overline`, `accent.300`.
- **Duyarlı:** mobil: tek sütun, bloklar alt alta (akordeon **değil** — tüm bağlantılar görünür); `md`: 2×2; `lg`+: 4 sütun (4/12 · 3/12 · 2/12 · 3/12). Mobilde alt iç boşluk = eylem çubuğu yüksekliği + 24 px.
- **Erişilebilirlik:** `<footer>`; içinde `<nav aria-label="Alt bilgi menüsü" id="site-menu">`. Sütun başlıkları `<h2>` (görsel olarak küçük). Satır dokunma yüksekliği ≥ 44 px (mobil).

### 5.22 Çerez izni bandı — `CookieConsent`

- **Amaç:** Analitik için açık rıza almak (01 §7; KVKK). Çerezsiz analitik seçilirse bu bileşen hiç yayınlanmaz (01 §7 müşteri kararı).
- **Anatomi:** ekranın altında, `surface.card`, `shadow-lg`, üstte 1 px kenarlık; kısa metin (en çok 2 cümle) + "Çerez Politikası" bağlantısı; düğmeler: **"Reddet"** (`secondary`) · **"Kabul et"** (`secondary`) · "Tercihler" (`ghost`). Kabul ve Reddet **eşit görsel ağırlıktadır** (ikisi de aynı çeşit, aynı boyut); kabul düğmesi turuncu `primary` yapılmaz.
- **Çeşitler:** `banner` (ilk ziyaret) · `preferences` (`<dialog>`: "Zorunlu" [kilitli, açık] ve "Analitik" [varsayılan **kapalı**] anahtarları + "Seçimi kaydet").
- **Durumlar:** Görünür / gizli (seçim yapıldıysa çizilmez; seçim süresi 07/06'da). Alt bilgideki "Çerez tercihleri" düğmesi `preferences` çeşidini açar.
- **Duyarlı:** mobil: tam genişlik; **sabit eylem çubuğunun üstünde** durur (`bottom: 64px + safe-area`); düğmeler tam genişlik, alt alta (Reddet, Kabul et, Tercihler). `md`+: sol alt köşede 480 px genişlikte kart, 24 px içeride. Bant sayfa içeriğini kilitlemez (karartma yok).
- **Erişilebilirlik:** `role="region" aria-label="Çerez izni"`; odak tuzağı kurmaz, sayfa yüklenince odağı çalmaz; DOM sırasında `<main>`'den önce yer alır ki klavye kullanıcısı erken ulaşsın. Anahtarlar `<input type="checkbox" role="switch">`. Bant, odaklanan öğeleri örtmemelidir (`scroll-padding-bottom` bant yüksekliği kadar artırılır).

### 5.23 Sektör/müşteri şeridi

Bkz. §5.15 `ClientNameGrid`.

### 5.24 Mobil sabit eylem çubuğu — `MobileActionBar`

- **Amaç:** Mobilde arama/WhatsApp/teklif eylemlerini her an başparmak altında tutmak (hedef kitle 3; 01 §3 "en çok 1 tık").
- **Anatomi:** ekranın altında sabit, beyaz zemin, üstte 1 px `border.default`, `shadow-up`; yükseklik 64 px + `env(safe-area-inset-bottom)`; 3 eşit sütun:

| Sıra | Etiket | İkon | Görünüm | Hedef |
|---|---|---|---|---|
| 1 | **Ara** | `phone` | metin `brand.700`; ikon üstte 22 px, etiket altta `text-xs` 600 | `tel:` (sabit hat) |
| 2 | **WhatsApp** | WhatsApp simgesi | metin `#0B6B5F` | `https://wa.me/…` (numara teyidi: Açık Soru 7) |
| 3 | **Teklif Al** | `file-text` | dolgulu: `accent.600` zemin, beyaz metin (sütunu kaplar) | `/iletisim/#teklif-formu` |

- **Çeşitler:** `3'lü` (varsayılan) · `2'li` (WhatsApp numarası teyit edilmezse: Ara + Teklif Al).
- **Durumlar:** basılı: zemin `brand.50` (1–2), `accent.800` (3); odak: halka (içe doğru, `outline-offset: -2px`). Mobil menü veya ışık kutusu açıkken gizlenir. İletişim sayfasında "Teklif Al" yerine sayfa içi "Forma git" çapası.
- **Duyarlı:** yalnızca `< lg`. `lg`+ gösterilmez (üst bilgide karşılıkları var). Ekran klavyesi açıkken (form odakta) gizlenir. `<body>`'ye alt iç boşluk eklenir; hiçbir içerik çubuğun arkasında kalmaz.
- **Erişilebilirlik:** `<nav aria-label="Hızlı iletişim">`; her öğe ≥ 64×64 px dokunma alanı; erişilebilir adlar: "Bizi arayın: 0216 307 18 62", "WhatsApp ile yazın (yeni sekmede açılır)", "Teklif alın". DOM'da `<main>`'den sonra, alt bilgiden önce.

### 5.25 404 düzeni — `NotFound`

- **Amaç:** Kaybolan ziyaretçiyi (özellikle eski URL'lerden gelenleri) doğru sayfaya ulaştırmak.
- **Anatomi:** `container-narrow`, ortalı: `IMG-404-ILLU` (vektör, en çok 240 px) → "404" üst etiketi → H1 "Aradığınız sayfa bulunamadı" → 1–2 cümle açıklama → düğmeler: "Ana sayfaya dön" (`primary`) + "Hizmetleri incele" (`secondary`) → "Sık ziyaret edilenler" bağlantı listesi (4 hizmet grubu + Referanslar + İletişim) → telefon satırı.
- **Durumlar:** Tek durum. Arama kutusu yok (site içi arama kapsam dışı).
- **Duyarlı:** mobil: düğmeler tam genişlik; liste tek sütun; `md`+: liste 2 sütun.
- **Erişilebilirlik:** `<title>` "Sayfa bulunamadı — Axis Teknik"; illüstrasyon `alt=""`. Sayfa HTTP 404 döner (06/08).

### 5.26 Yardımcı bileşenler

| Bileşen | Tanım |
|---|---|
| `Callout` (bilgi/uyarı kutusu) | Sol kenarda 3 px anlam rengi çizgi + açık zemin + ikon + metin. Çeşitler: `info`, `success`, `warning`, `danger`, `accent` (öne çıkan not). Yangın alt sayfalarında "Uygulanan standartlar" notu için `info` |
| `StandardsList` (standart rozet satırı) | Yangın alt sayfalarında metinde geçen standart adlarının (ör. envanterdeki NFPA, EN, VdS, Yangın Yönetmeliği) **metin rozeti** olarak dizilmesi; kurum logoları kullanılmaz. Yalnızca 03'te onaylanan metinde geçenler yazılır |
| `UseCaseGrid` (kullanım alanları) | Köpüklü söndürme sayfasındaki 9 kullanım alanı için: 20 px ikon + tek satır metin; 1 → 2 (`sm`) → 3 (`lg`) sütun; madde yığını değil ızgara |
| `Prose` | Uzun metin (yasal sayfalar, Hakkımızda): `68–72ch`, başlık/paragraf/liste/tablo stilleri; tablolar mobilde yatay kaydırmalı sarmalayıcıda (`role="region"`, `tabindex="0"`, etiketli) |
| `Figure` | Görsel + alt yazı (`text-xs`, `text.subtle`); temsilî görselde `note` rozeti "Temsilî görsel" |
| `ValueList` (değerler/ilkeler) | Hakkımızda'daki 5 değer + 4 ilke için: `check` ikonlu 2 sütunlu kısa liste |
| `RelatedStrip` | "Diğer hizmetler" / "Benzer referanslar": 3 `compact`/`text` kart |

---

## 6. Sayfa şablonları

Ortak iskelet (tüm sayfalar; aşağıdaki çizimlerde yinelenmez):

```
[SkipLink]
[CookieConsent]            (ilk ziyaret; analitik kararına bağlı)
[TopBar]                   (yalnızca lg+)
[SiteHeader]               (yapışkan)
<main id="icerik"> … sayfa bölümleri … </main>
[CtaBand]                  (İletişim, yasal sayfalar ve 404 hariç)
[SiteFooter]
[MobileActionBar]          (yalnızca < lg)
```

Çizim dili: `[IMG-…]` = 05'teki görsel yuvası · `(B)` = birincil düğme · `(b)` = ikincil düğme · bölüm zeminleri sırayla beyaz / `surface.subtle` dönüşümlüdür; art arda iki koyu bant gelmez.

### 6.1 Ana Sayfa — `/`

| # | Bölüm | Bileşen | Zemin | Görsel yuvası |
|---|---|---|---|---|
| 1 | Kahraman | `Hero` (home) | beyaz | `IMG-HOME-HERO` |
| 2 | Hizmet grupları | `SectionHeading` + 4 × `ServiceCard` (media) | subtle | `IMG-SVC-ELEKTRIK-CARD`, `-MEKANIK-CARD`, `-YANGIN-CARD`, `-TASARIM-CARD` |
| 3 | Yangın sistemleri vurgusu | `SectionHeading` + 3 × `ServiceCard` (compact: Gazlı/Sulu/Köpüklü) + yanında görsel | beyaz | `IMG-SVC-YANGIN-ALGILAMA` |
| 4 | İstatistik | `StatBand` (light) — veri doğrulanmışsa | subtle | — |
| 5 | Öne çıkan referanslar | `SectionHeading` (+ "Tüm referanslar →") + 3 × `ReferenceCard` (ilki featured) | beyaz | İlgili `IMG-REF-*` yuvaları |
| 6 | Müşteri adları | `ClientNameGrid` — teyitli adlarla | beyaz (5'in devamı) | — |
| 7 | Nasıl çalışıyoruz | `SectionHeading` + `ProcessSteps` (4 adım) | subtle | — |
| 8 | Hakkımızda özeti | 2 sütun: görsel + kısa metin + (b) "Hakkımızda" | beyaz | `IMG-HOME-ABOUT` |
| 9 | Çağrı | `CtaBand` (default) | koyu | — |

Öne çıkan 3 referansın seçimi 03'e aittir; eski slider'daki dört proje (envanter §3) adaydır.

Masaüstü (`lg`+):

```
┌──────────────────────────────────────────────────────────────────────┐
│ ÜST ETİKET                                    ┌────────────────────┐ │
│ H1 — text-display (en çok 22ch)               │                    │ │
│ Giriş paragrafı (text-lead, 56ch)             │  [IMG-HOME-HERO]   │ │
│ (B) Teklif Al   (b) Hizmetleri incele         │      4:5           │ │
│ ✓ madde   ✓ madde   ✓ madde                 ┌─┴──────┐             │ │
│                                             │bilgi k.│─────────────┘ │
├─────────────────────────────────────────────┴────────┴───────────────┤
│ ▬ Hizmetlerimiz (h2)                                                 │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                  │
│ │[CARD 4:3]│ │[CARD 4:3]│ │[CARD 4:3]│ │[CARD 4:3]│                  │
│ │▣ Elektrik│ │▣ Mekanik │ │▣ Yangın  │ │▣ Tasarım │                  │
│ │açıklama  │ │          │ │          │ │          │                  │
│ │✓alt grup │ │          │ │          │ │          │                  │
│ │İncele →  │ │          │ │          │ │          │                  │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘                  │
├──────────────────────────────────────────────────────────────────────┤
│ ▬ Yangın algılama ve söndürme (h2)        ┌────────────────────────┐ │
│ açıklama                                  │[IMG-SVC-YANGIN-        │ │
│ ┌────────┐┌────────┐┌────────┐            │  ALGILAMA]  4:3        │ │
│ │▣ Gazlı ││▣ Sulu  ││▣ Köpük │            │                        │ │
│ └────────┘└────────┘└────────┘            └────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────┤
│   değer │ değer │ değer        (StatBand — yalnızca doğrulanmışsa)   │
├──────────────────────────────────────────────────────────────────────┤
│ ▬ Referanslar (h2)                              Tüm referanslar →    │
│ ┌──────────────────────┐ ┌──────────┐ ┌──────────┐                   │
│ │ [IMG-REF-…] 16:9     │ │[REF 3:2] │ │[REF 3:2] │                   │
│ │ featured             │ │          │ │          │                   │
│ └──────────────────────┘ └──────────┘ └──────────┘                   │
│ ┌────┬────┬────┬────┬────┬────┐  ClientNameGrid (metin)              │
│ └────┴────┴────┴────┴────┴────┘                                      │
├──────────────────────────────────────────────────────────────────────┤
│ ▬ Nasıl çalışıyoruz    ①────②────③────④                              │
├──────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────┐  ▬ Axis Teknik hakkında (h2)                  │
│ │ [IMG-HOME-ABOUT]   │  kısa metin (68ch)                            │
│ │      4:3           │  (b) Hakkımızda                               │
│ └────────────────────┘                                               │
├──────────────────────────────────────────────────────────────────────┤
│ ███ CtaBand: başlık + cümle            (B) Teklif Al  (☎ numara) ███ │
└──────────────────────────────────────────────────────────────────────┘
```

Mobil:

```
┌────────────────────┐
│ ÜST ETİKET         │
│ H1 (36 px)         │
│ giriş paragrafı    │
│ [(B) Teklif Al   ] │
│ [(b) Hizmetler   ] │
│ ┌────────────────┐ │
│ │[IMG-HOME-HERO] │ │
│ │     4:3        │ │
│ └────────────────┘ │
│ ✓ ✓ ✓ güven satırı │
├────────────────────┤
│ ▬ Hizmetlerimiz    │
│ [ServiceCard] ×4   │  (tek sütun; sm'de 2)
├────────────────────┤
│ ▬ Yangın …         │
│ [compact kart] ×3  │
│ [IMG-…-ALGILAMA]   │
├────────────────────┤
│ değer  │ değer     │
│ değer              │
├────────────────────┤
│ ▬ Referanslar      │
│ [ReferenceCard] ×3 │
│ Tüm referanslar →  │
│ [ad][ad]           │  ClientNameGrid 2 sütun
├────────────────────┤
│ ▬ Nasıl çalışıyoruz│
│ ①│ ②│ ③│ ④│ (dikey)│
├────────────────────┤
│ [IMG-HOME-ABOUT]   │
│ ▬ Hakkında + (b)   │
├────────────────────┤
│ ███ CtaBand ███    │
├────────────────────┤
│ Ara │WhatsApp│Teklif│  ← sabit
└────────────────────┘
```

### 6.2 Hizmetler (genel) — `/hizmetler/`

| # | Bölüm | Bileşen | Görsel yuvası |
|---|---|---|---|
| 1 | Hero | `Hero` (page) + `Breadcrumb` | `IMG-SVC-INDEX-HERO` |
| 2 | Dört hizmet grubu | 4 × `ServiceCard` (horizontal, dönüşümlü); her kartta alt grup adlarının tam listesi | `IMG-SVC-*-CARD` (4 adet) |
| 3 | Yangın söndürme alt sayfaları | `SectionHeading` + 3 × `ServiceCard` (compact) | — |
| 4 | Süreç | `ProcessSteps` | — |
| 5 | İlgili referanslar | `RelatedStrip` (3 × `ReferenceCard` text) + "Tüm referanslar →" | — |
| 6 | Çağrı | `CtaBand` | — |

```
Masaüstü                                     Mobil
┌───────────────────────────────────────┐    ┌──────────────────┐
│███ ‹yol›  H1 Hizmetler      ┌───────┐ │    │███ ‹üst düzey    │
│███ giriş paragrafı          │[INDEX-│ │    │███ H1            │
│███                          │ HERO] │ │    │███ giriş         │
├─────────────────────────────┤ 3:2   ├─┤    ├──────────────────┤
│                             └───────┘ │    │[INDEX-HERO 16:9] │
│ ┌─────────┬─────────────────────────┐ │    ├──────────────────┤
│ │[CARD]   │▣ Elektrik Taahhüt       │ │    │[CARD 4:3]        │
│ │ 4:3     │açıklama · ✓OG ✓AG ✓ZA ✓O│ │    │▣ Elektrik        │
│ │         │İncele →                 │ │    │açıklama ✓✓✓✓     │
│ └─────────┴─────────────────────────┘ │    │İncele →          │
│ ┌─────────────────────────┬─────────┐ │    │ … ×4             │
│ │▣ Mekanik Taahhüt …      │[CARD]   │ │    ├──────────────────┤
│ └─────────────────────────┴─────────┘ │    │▬ Söndürme sist.  │
│  … Yangın (görsel solda), Tasarım …   │    │[compact] ×3      │
├───────────────────────────────────────┤    ├──────────────────┤
│▬ Yangın söndürme sistemleri           │    │ProcessSteps dikey│
│ [▣ Gazlı] [▣ Sulu] [▣ Köpüklü]        │    ├──────────────────┤
├───────────────────────────────────────┤    │Referans şeridi   │
│ ①───②───③───④                         │    ├──────────────────┤
├───────────────────────────────────────┤    │███ CtaBand       │
│ [ref] [ref] [ref]   Tüm referanslar → │    └──────────────────┘
├───────────────────────────────────────┤
│███ CtaBand                            │
└───────────────────────────────────────┘
```

### 6.3 Hizmet grup sayfası — `/hizmetler/elektrik-taahhut/`, `/mekanik-taahhut/`, `/tasarim-ve-projelendirme/`, `/yangin-sistemleri/`

| # | Bölüm | Bileşen | Görsel yuvası |
|---|---|---|---|
| 1 | Hero | `Hero` (page) + `Breadcrumb` + (B) "Teklif Al" | `IMG-SVC-<GRUP>-HERO` |
| 2 | Giriş | `Prose` (2–3 paragraf; 03'ten) + yanında `Callout` (accent): öne çıkan bilgi | — |
| 3 | Hizmet kapsamı | `SectionHeading` + `ServiceScopeList` | `IMG-SVC-<GRUP>-SUB-*` |
| 4 | Süreç | `ProcessSteps` (compact/horizontal) | — |
| 5 | Bu alandaki referanslar | `SectionHeading` + 3 × `ReferenceCard` + bağlantı `/referanslar/?hizmet=<slug>` | `IMG-REF-*` |
| 6 | Diğer hizmetler | `RelatedStrip` (kalan 3 grup, compact) | — |
| 7 | Çağrı | `CtaBand` (contextual) | — |

Grup farkları:

| Grup | 3. bölüm | Ek |
|---|---|---|
| Elektrik Taahhüt | `ServiceScopeList` (with-media), 4 alt grup: Orta Gerilim (6) · Alçak Gerilim (11) · Zayıf Akım (11) · Otomasyon ve Enstrümantasyon (6) | Zayıf akımdaki "Yangın Algılama ve Alarm Sistemleri" maddesi yangın sayfasına bağlantı |
| Mekanik Taahhüt | `ServiceScopeList` (with-media), 3 alt grup: HVAC (7) · Yangından Koruma (5) · Sıhhi Tesisat (7) | Yangından Koruma maddeleri ilgili yangın alt sayfalarına bağlantı |
| Tasarım ve Projelendirme | `ServiceScopeList` (plain), 4 madde; `ScopeNav` yok; yanında `IMG-SVC-TASARIM-DETAY` | Bölüm kısa olduğu için `ProcessSteps` öne çıkar |
| Yangın Sistemleri (genel) | Önce "Yangın algılama ve alarm" bloğu (metin + `IMG-SVC-YANGIN-ALGILAMA`), sonra 3 × `ServiceCard` (media; Gazlı/Sulu/Köpüklü — görselleri alt sayfa hero yuvalarının 4:3 kırpımı), sonra `StandardsList` | Referans bölümü 6 kart gösterir (referansların çoğu bu grupta) |

Masaüstü (Elektrik örneği):

```
┌────────────────────────────────────────────────────────────────────┐
│███ Ana Sayfa › Hizmetler › Elektrik Taahhüt       ┌──────────────┐ │
│███ H1 Elektrik Taahhüt                            │[IMG-SVC-     │ │
│███ giriş paragrafı (56ch)     (B) Teklif Al       │ ELEKTRIK-    │ │
├───────────────────────────────────────────────────┤ HERO] 3:2    ├─┤
│ Giriş metni (68ch)                                └──────────────┘ │
│ paragraf … paragraf …                        ┌ Callout ─────────┐  │
│                                              └──────────────────┘  │
├────────────────────────────────────────────────────────────────────┤
│ ▬ Hizmet kapsamı (h2)                                              │
│ ┌ ScopeNav ─────┐ ┌ ScopeGroup ───────────────────────────────────┐│
│ │▌Orta Gerilim 6│ │ ▣ Orta Gerilim Sistemleri (h3)   [6 hizmet]  ││
│ │ Alçak Ger.  11│ │ ┌───────────────────┐ ┌────────────────────┐ ││
│ │ Zayıf Akım  11│ │ │✓ Havai ve yeraltı…│ │ [IMG-SVC-ELEKTRIK- │ ││
│ │ Otomasyon    6│ │ │✓ OG trafolar      │ │   SUB-OG] 4:3      │ ││
│ │ (yapışkan)    │ │ │✓ OG hücreler …    │ │                    │ ││
│ └───────────────┘ │ └───────────────────┘ └────────────────────┘ ││
│                   ├───────────────────────────────────────────────┤│
│                   │ ▣ Alçak Gerilim Sistemleri (h3)  [11 hizmet] ││
│                   │ ┌─────────────────────────────────────────┐   ││
│                   │ │ [IMG-SVC-ELEKTRIK-SUB-AG] 21:9 şerit    │   ││
│                   │ └─────────────────────────────────────────┘   ││
│                   │ ✓ Busbar sistemleri      ✓ Cephe aydınlatma   ││
│                   │ ✓ Enerji dağıtım kabl.   ✓ Acil durum aydınl. ││
│                   │ ✓ AG dağıtım, MCC …      ✓ UPS sistemleri     ││
│                   │ ✓ …                      ✓ …                  ││
│                   ├───────────────────────────────────────────────┤│
│                   │ ▣ Zayıf Akım (11) …   ▣ Otomasyon (6) …       ││
│                   └───────────────────────────────────────────────┘│
├────────────────────────────────────────────────────────────────────┤
│ ①───②───③───④  ProcessSteps                                        │
├────────────────────────────────────────────────────────────────────┤
│ ▬ Bu alandaki referanslar   [ref] [ref] [ref]      Tümünü gör →    │
├────────────────────────────────────────────────────────────────────┤
│ Diğer hizmetler: [▣ Mekanik] [▣ Yangın] [▣ Tasarım]                │
├────────────────────────────────────────────────────────────────────┤
│███ CtaBand: "Elektrik taahhüt işleriniz için teklif alın"          │
└────────────────────────────────────────────────────────────────────┘
```

Mobil:

```
┌──────────────────────┐
│███ ‹ Hizmetler       │
│███ H1                │
│███ giriş             │
│███ [(B) Teklif Al  ] │
├──────────────────────┤
│[…-HERO 16:9]         │
├──────────────────────┤
│ giriş metni          │
│ ┌ Callout ─────────┐ │
├──────────────────────┤
│[OG 6][AG 11][ZA 11]→ │ ← yapışkan çip satırı
├──────────────────────┤
│ Tümünü aç            │
│ ▼ ▣ Orta Gerilim  6  │ ← açık
│   ✓ madde            │
│   ✓ madde …          │
│   [SUB-OG 4:3]       │
│ ▶ ▣ Alçak Gerilim 11 │ ← kapalı
│ ▶ ▣ Zayıf Akım    11 │
│ ▶ ▣ Otomasyon      6 │
├──────────────────────┤
│ ProcessSteps (dikey) │
├──────────────────────┤
│ Referans kartları ×3 │
├──────────────────────┤
│ Diğer hizmetler ×3   │
├──────────────────────┤
│███ CtaBand           │
└──────────────────────┘
```

### 6.4 Yangın alt sayfası — `/hizmetler/yangin-sistemleri/{gazli|sulu|kopuklu}-sondurme/`

Envanterde bu sayfaların paragraf metni vardır (envanter §5.4; metinler 03'te yeniden yazılır). Şablon metin ağırlıklıdır.

| # | Bölüm | Bileşen | Görsel yuvası |
|---|---|---|---|
| 1 | Hero | `Hero` (page) + `Breadcrumb` (3 düzey) | `IMG-SVC-<GAZLI/SULU/KOPUKLU>-HERO` |
| 2 | Sistem tanımı | 2 sütun: `Prose` (8/12) + kenar sütunu (4/12): "Kısaca" `Callout` (info) + `StandardsList` | — |
| 3 | Sistem türleri | `SectionHeading` + kısa kart ızgarası (içerik 03'ten; ör. envanterde gazlıda FM200 · CO₂ · inert gaz, suluda sprinkler · yangın dolabı · hidrant) | `IMG-SVC-<…>-DETAY` (bölüm yanında 4:3) |
| 4 | Kullanım alanları | `UseCaseGrid` — yalnızca içerikte varsa (köpüklüde 9 madde) | — |
| 5 | Verdiğimiz hizmetler | `ProcessSteps` (tasarım → montaj → devreye alma → bakım) | — |
| 6 | İlgili referanslar | 3 × `ReferenceCard` + bağlantı `/referanslar/?hizmet=<slug>` | `IMG-REF-*` |
| 7 | Diğer söndürme sistemleri | `RelatedStrip` (diğer 2 alt sayfa + yangın genel) | — |
| 8 | Çağrı | `CtaBand` (contextual) | — |

```
Masaüstü                                          Mobil
┌─────────────────────────────────────────────┐   ┌──────────────────┐
│███ … › Yangın … › Gazlı Söndürme  ┌───────┐ │   │███ ‹ Yangın …    │
│███ H1                             │[GAZLI-│ │   │███ H1 · giriş    │
│███ giriş                          │ HERO] │ │   ├──────────────────┤
├───────────────────────────────────┤       ├─┤   │[GAZLI-HERO 16:9] │
│ Prose (68ch)                      └───────┘ │   ├──────────────────┤
│ paragraf …               ┌ Kısaca ────────┐ │   │┌ Kısaca ────────┐│
│ paragraf …               │ • • •          │ │   │└────────────────┘│
│                          ├ Standartlar ───┤ │   │ Prose            │
│                          │ [rozet][rozet] │ │   │ [rozet][rozet]   │
├──────────────────────────┴────────────────┴─┤   ├──────────────────┤
│▬ Sistem türleri        ┌──────────────────┐ │   │▬ Sistem türleri  │
│ [kart] [kart] [kart]   │[GAZLI-DETAY] 4:3 │ │   │ [kart] ×n        │
├────────────────────────┴──────────────────┴─┤   │ [GAZLI-DETAY]    │
│▬ Kullanım alanları (varsa)  ▫ ▫ ▫ / ▫ ▫ ▫   │   ├──────────────────┤
├─────────────────────────────────────────────┤   │ UseCaseGrid 1 süt│
│ ①───②───③───④                               │   ├──────────────────┤
├─────────────────────────────────────────────┤   │ Süreç (dikey)    │
│▬ İlgili referanslar  [ref][ref][ref]        │   ├──────────────────┤
├─────────────────────────────────────────────┤   │ Referanslar ×3   │
│ Diğer: [▣ Sulu] [▣ Köpüklü] [▣ Yangın genel]│   ├──────────────────┤
├─────────────────────────────────────────────┤   │ Diğer ×3         │
│███ CtaBand                                  │   │███ CtaBand       │
└─────────────────────────────────────────────┘   └──────────────────┘
```

Mobilde "Kısaca" kutusu metnin **önüne** alınır (özet önce).

### 6.5 Referanslar listesi — `/referanslar/`

| # | Bölüm | Bileşen | Görsel yuvası |
|---|---|---|---|
| 1 | Hero | `Hero` (page-plain) + `Breadcrumb` | — (görselsiz; filtreye hızlı erişim) |
| 2 | Filtre | `FilterBar` (Sektör · Hizmet türü) + sonuç satırı | — |
| 3 | Liste | `<ul>` 19 × `ReferenceCard` (default) / boş durum | `IMG-REF-<SEKTÖR>-NN` (19 yuva) |
| 4 | Temsilî görsel notu | `Callout` (info, küçük): "Kartlardaki görseller sektörü temsil eder; projelere ait fotoğraf değildir." — yalnızca havuz görseli kullanılan kart varsa | — |
| 5 | Çağrı | `CtaBand` | — |

```
Masaüstü                                           Mobil
┌──────────────────────────────────────────────┐   ┌───────────────────┐
│███ Ana Sayfa › Referanslar                   │   │███ ‹ Ana Sayfa    │
│███ H1 Referanslar · giriş                    │   │███ H1 · giriş     │
├──────────────────────────────────────────────┤   ├───────────────────┤
│ Sektör      [Tümü✓][Sağlık 3][Otel 2][Gıda 3]│   │Sektör             │
│             [Sanayi 5][Enerji 2][…]          │   │[Tümü✓][Sağlık][…]→│ ← yapışkan
│ Hizmet türü [Tümü✓][Gazlı][Sulu][Köpüklü][…] │   │Hizmet türü        │
│ 19 referans gösteriliyor   Filtreleri temizle│   │[Tümü✓][Gazlı][…] →│
├──────────────────────────────────────────────┤   │19 referans        │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐       │   ├───────────────────┤
│ │[REF 3:2] │ │[REF 3:2] │ │[REF 3:2] │       │   │┌─────────────────┐│
│ │[Sağlık]  │ │[Otel]    │ │[Gıda]    │       │   ││[REF 3:2][rozet] ││
│ │Ad (h3)   │ │          │ │          │       │   ││Ad               ││
│ │iş tanımı │ │          │ │          │       │   ││iş tanımı        ││
│ │⌖ şehir   │ │          │ │          │       │   ││⌖ şehir          ││
│ └──────────┘ └──────────┘ └──────────┘       │   │└─────────────────┘│
│  … 7 satır (19 kart) …                       │   │ … ×19             │
├──────────────────────────────────────────────┤   ├───────────────────┤
│ ⓘ Görseller temsilîdir.                      │   │ⓘ not              │
├──────────────────────────────────────────────┤   │███ CtaBand        │
│███ CtaBand                                   │   └───────────────────┘
└──────────────────────────────────────────────┘
```

Çiplerdeki sayılar ve sektör adları örnektir; kesin sınıflandırma içerik verisinden üretilir (Açık Soru 6). Varsayılan sıralama 03'te belirlenir.

### 6.6 Referans detayı — `/referanslar/[slug]/`

Eldeki veri azdır (başlık, şehir, ülke; tarih doğrulanmamış; açıklama yok). Şablon **az veriyle de dolu görünecek** biçimde kurulur; boş alanlar çizilmez.

| # | Bölüm | Bileşen | Görsel yuvası |
|---|---|---|---|
| 1 | Hero | `Hero` (page) + `Breadcrumb` + sektör rozeti; H1 = müşteri/proje adı; giriş = iş tanımı | `IMG-REF-<SEKTÖR>-NN` (karttakiyle aynı) veya müşteri fotoğrafı `IMG-REF-<slug>-01` |
| 2 | Künye + özet | `lg`+: sol 8/12 `Prose` (proje özeti — 03'te yazılırsa; yoksa "Verilen hizmetler" bağlantılı liste), sağ 4/12 `ReferenceFacts` (sidebar) + (B) | — |
| 3 | Temsilî görsel notu | `Figure` altında `note` rozeti — yalnızca havuz görseli kullanılıyorsa | — |
| 4 | Galeri | `Gallery` — yalnızca ≥ 2 müşteri fotoğrafı varsa | `IMG-REF-<slug>-02…` |
| 5 | İlgili hizmetler | 1–3 × `ServiceCard` (compact) | — |
| 6 | Benzer referanslar | 3 × `ReferenceCard` (aynı sektör, yoksa aynı hizmet türü) + "Tüm referanslar →" | `IMG-REF-*` |
| 7 | Çağrı | `CtaBand` (contextual: "Benzer bir proje için teklif alın") | — |

```
Masaüstü                                           Mobil
┌──────────────────────────────────────────────┐   ┌───────────────────┐
│███ … › Referanslar › {Ad}         ┌────────┐ │   │███ ‹ Referanslar  │
│███ [Sektör rozeti]                │[IMG-REF│ │   │███ [rozet]        │
│███ H1 {Müşteri / proje adı}       │ -…] 3:2│ │   │███ H1             │
│███ iş tanımı (lead)               │        │ │   │███ iş tanımı      │
├───────────────────────────────────┤        ├─┤   ├───────────────────┤
│                                   └────────┘ │   │[IMG-REF 16:9]     │
│                                   Temsilî gör.│   │ Temsilî görsel    │
│ ▬ Proje özeti (h2)        ┌ Künye ─────────┐ │   ├───────────────────┤
│ metin (varsa)             │ Müşteri  …     │ │   │ Künye (2 sütun)   │
│                           │ Sektör   …     │ │   │ Müşteri │ Sektör  │
│ ▬ Verilen hizmetler       │ Hizmetler[r][r]│ │   │ Hizmet  │ Konum   │
│ • bağlantılı liste        │ Konum    …     │ │   ├───────────────────┤
│                           │ (Tarih)  …     │ │   │ Proje özeti       │
│                           │ (B) Teklif al  │ │   │ Verilen hizmetler │
│                           └────────────────┘ │   ├───────────────────┤
├──────────────────────────────────────────────┤   │ Galeri (2 sütun)  │
│ ▬ Galeri (varsa)  [▫][▫][▫][▫+3]             │   ├───────────────────┤
├──────────────────────────────────────────────┤   │ İlgili hizmetler  │
│ ▬ İlgili hizmetler  [▣][▣]                   │   ├───────────────────┤
├──────────────────────────────────────────────┤   │ Benzer ref. ×3    │
│ ▬ Benzer referanslar [ref][ref][ref]         │   ├───────────────────┤
├──────────────────────────────────────────────┤   │███ CtaBand        │
│███ CtaBand                                   │   └───────────────────┘
└──────────────────────────────────────────────┘
```

Mobilde künye, özetin **önünde** gelir (en somut bilgi önce).

### 6.7 Hakkımızda — `/hakkimizda/`

| # | Bölüm | Bileşen | Görsel yuvası |
|---|---|---|---|
| 1 | Hero | `Hero` (page) + `Breadcrumb` | `IMG-ABOUT-HERO` |
| 2 | Biz kimiz | 2 sütun: `Prose` (firma tanımı, tarihçe; 03) + görsel | `IMG-ABOUT-EKIP` |
| 3 | İstatistik | `StatBand` (inverse) — doğrulanmışsa | — |
| 4 | Misyon · Vizyon | 2 kart yan yana (`surface.subtle`, `radius-lg`; başlık + 1 paragraf) — metinler 03'te güncellenmiş hâliyle | — |
| 5 | Değerler ve ilkeler | `SectionHeading` + 2 × `ValueList` (Değerlerimiz 5 · İlkelerimiz 4) | — |
| 6 | Nasıl çalışıyoruz | `ProcessSteps` | — |
| 7 | Tesis/ofis | Görsel + adres özeti + (b) "İletişim" — yalnızca müşteri fotoğrafı gelirse | `IMG-ABOUT-TESIS` |
| 8 | Belgeler | `StandardsList`/belge kartları — **yalnızca müşteri belge sağlarsa** (envanterde yok; Açık Soru 9) | — |
| 9 | Çağrı | `CtaBand` | — |

```
Masaüstü                                           Mobil
┌──────────────────────────────────────────────┐   ┌───────────────────┐
│███ Ana Sayfa › Hakkımızda        ┌─────────┐ │   │███ H1 · giriş     │
│███ H1 · giriş                    │[ABOUT-  │ │   ├───────────────────┤
├──────────────────────────────────┤ HERO]   ├─┤   │[ABOUT-HERO 16:9]  │
│ ▬ Biz kimiz (h2)                 └─────────┘ │   ├───────────────────┤
│ Prose (68ch)            ┌──────────────────┐ │   │ Biz kimiz         │
│                         │[IMG-ABOUT-EKIP]  │ │   │ [ABOUT-EKIP 4:3]  │
│                         │      4:3         │ │   ├───────────────────┤
│                         └──────────────────┘ │   │███ değer│değer    │
├──────────────────────────────────────────────┤   ├───────────────────┤
│███ değer │ değer │ değer  (StatBand inverse) │   │ [Misyon]          │
├──────────────────────────────────────────────┤   │ [Vizyon]          │
│ ┌ Misyon ────────────┐ ┌ Vizyon ───────────┐ │   ├───────────────────┤
│ └────────────────────┘ └───────────────────┘ │   │ Değerler ✓✓✓✓✓    │
├──────────────────────────────────────────────┤   │ İlkeler  ✓✓✓✓     │
│ ▬ Değerlerimiz ✓ ✓ ✓ ✓ ✓ │ İlkelerimiz ✓✓✓✓  │   ├───────────────────┤
├──────────────────────────────────────────────┤   │ Süreç (dikey)     │
│ ①───②───③───④                                │   ├───────────────────┤
├──────────────────────────────────────────────┤   │ [ABOUT-TESIS]     │
│ [IMG-ABOUT-TESIS 16:9]  adres · (b) İletişim │   │ adres · (b)       │
├──────────────────────────────────────────────┤   ├───────────────────┤
│███ CtaBand                                   │   │███ CtaBand        │
└──────────────────────────────────────────────┘   └───────────────────┘
```

Art arda iki koyu bant kuralı: `StatBand` (inverse) hero'nun hemen altına konmaz; arada "Biz kimiz" bölümü bulunur.

### 6.8 İletişim — `/iletisim/`

| # | Bölüm | Bileşen | Görsel yuvası |
|---|---|---|---|
| 1 | Hero | `Hero` (page-plain) + `Breadcrumb` | — |
| 2 | Hızlı iletişim | 3 kutu: Telefon (`tel:`) · WhatsApp · E-posta (`mailto:`); her biri ikon + değer + kısa açıklama; tamamı tıklanabilir | — |
| 3 | Form + bilgiler | `lg`+: sol 7/12 **Teklif/iletişim formu** (`id="teklif-formu"`; `Field*`, KVKK onayı, Turnstile, gönder), sağ 5/12 `<address>` kartı (adres, telefonlar, e-posta, çalışma saatleri [varsa]) + "Formdan sonra ne olur?" 3 adımlı `ProcessSteps` (compact; metin 03) | — |
| 4 | Harita | `MapBlock` | `IMG-CONTACT-MAP`, isteğe bağlı `IMG-CONTACT-BINA` (bina girişi; adres kartında) |

`CtaBand` bu sayfada yoktur.

```
Masaüstü                                           Mobil
┌──────────────────────────────────────────────┐   ┌───────────────────┐
│███ Ana Sayfa › İletişim                      │   │███ H1 · giriş     │
│███ H1 İletişim ve Teklif · giriş             │   ├───────────────────┤
├──────────────────────────────────────────────┤   │[☎ Telefon       ] │
│ ┌ ☎ Telefon ──┐ ┌ WhatsApp ──┐ ┌ ✉ E-posta ┐ │   │[WhatsApp        ] │
│ └─────────────┘ └────────────┘ └───────────┘ │   │[✉ E-posta       ] │
├──────────────────────────────────────────────┤   ├───────────────────┤
│ ▬ Teklif formu (h2)        ┌ Adres ────────┐ │   │▬ Teklif formu     │
│ [Ad Soyad    ][Firma     ] │ adres         │ │   │[Ad Soyad        ] │
│ [Telefon     ][E-posta   ] │ telefonlar    │ │   │[Firma           ] │
│ [Hizmet seçimi          ▾] │ e-posta       │ │   │[Telefon         ] │
│ [Mesaj                   ] │ (saatler)     │ │   │[E-posta         ] │
│ [                        ] ├ Sonraki adım ─┤ │   │[Hizmet         ▾] │
│ ☐ KVKK metnini okudum …    │ ① ② ③         │ │   │[Mesaj           ] │
│ [Turnstile]                └───────────────┘ │   │☐ KVKK …           │
│ (B) Formu Gönder                             │   │[Turnstile]        │
├──────────────────────────────────────────────┤   │[(B) Formu Gönder] │
│ ┌ Adres + (b) Yol tarifi ┐ ┌───────────────┐ │   ├───────────────────┤
│ │                        │ │[IMG-CONTACT-  │ │   │ Adres kartı       │
│ │ [IMG-CONTACT-BINA]     │ │ MAP] harita   │ │   │ Sonraki adım ①②③  │
│ └────────────────────────┘ └───────────────┘ │   ├───────────────────┤
└──────────────────────────────────────────────┘   │ (b) Yol tarifi    │
                                                   │ [IMG-CONTACT-MAP] │
                                                   └───────────────────┘
```

Form alan listesi çizimde **örnektir**; kesin liste 02'dedir. `?konu=<slug>` ile gelindiğinde hizmet seçimi önceden dolar.

### 6.9 Yasal metin sayfası — `/kvkk-aydinlatma-metni/`, `/cerez-politikasi/`

| # | Bölüm | Bileşen |
|---|---|---|
| 1 | Hero | `Hero` (page-plain) + `Breadcrumb`; H1 + "Son güncelleme: {tarih}" (`text-sm`) |
| 2 | Gövde | `lg`+: sol 3/12 yapışkan içindekiler (`<nav aria-label="İçindekiler">`, h2 başlıklarından üretilir), sağ 8/12 `Prose` (72ch). Çerez Politikası'nda çerez tablosu + "Çerez tercihlerini değiştir" (b) |

Görsel yuvası yok. `CtaBand` yok. Mobilde içindekiler metnin üstünde, kapalı `<details>` ("İçindekiler") olarak.

```
Masaüstü                                   Mobil
┌────────────────────────────────────┐     ┌──────────────────┐
│███ Ana Sayfa › KVKK Aydınlatma M.  │     │███ H1            │
│███ H1 · Son güncelleme: …          │     │███ Son günc.: …  │
├────────────────────────────────────┤     ├──────────────────┤
│ ┌İçindekiler┐  h2 1. Veri sorumlusu│     │▶ İçindekiler     │
│ │ 1 …       │  paragraf (72ch)     │     │ h2 … paragraf    │
│ │ 2 …       │  h2 2. …             │     │ h2 … paragraf    │
│ │(yapışkan) │  tablo / liste       │     │ [tablo ↔ kayar]  │
│ └───────────┘                      │     └──────────────────┘
└────────────────────────────────────┘
```

### 6.10 404 — `/404`

Bileşen: `NotFound` (§5.25). Görsel yuvası: `IMG-404-ILLU`. `CtaBand` yok; `MobileActionBar` var.

```
Masaüstü / Mobil (tek sütun, ortalı; mobilde düğmeler tam genişlik)
┌──────────────────────────────────────┐
│            [IMG-404-ILLU]            │
│                 404                  │
│   H1 Aradığınız sayfa bulunamadı     │
│   açıklama (1–2 cümle)               │
│  (B) Ana sayfaya dön  (b) Hizmetler  │
│  ─────────────────────────────────   │
│  Sık ziyaret edilenler               │
│  • Elektrik Taahhüt   • Referanslar  │
│  • Mekanik Taahhüt    • İletişim     │
│  • Yangın Sistemleri  • Tasarım …    │
│  ☎ 0216 307 18 62                    │
└──────────────────────────────────────┘
```

---

## 7. Erişilebilirlik gereksinimleri (WCAG 2.2 AA)

| Konu | Gereksinim | WCAG | Tasarımdaki güvence |
|---|---|---|---|
| Metin karşıtlığı | Normal metin ≥ 4,5:1; büyük metin ≥ 3:1 | 1.4.3 | Yalnızca §3.1.7 "izin verilen çiftler" kullanılır; yasak çiftler listelidir |
| Metin dışı karşıtlık | Girdi kenarlığı, odak halkası, anlam taşıyan ikon ≥ 3:1 | 1.4.11 | `border.input` 5,35:1; odak halkası ≥ 4,53:1 |
| Renge bağımlı olmama | Durum yalnızca renkle anlatılmaz | 1.4.1 | Hata: ikon + metin + kalın kenarlık; seçili çip: onay ikonu; bağlantı: alt çizgi; geçerli menü: alt çizgi |
| Odak görünürlüğü | Her etkileşimli öğede görünür odak; 2 px halka, 2 px boşluk | 2.4.7, 2.4.13 (hedef) | §3.9 |
| Odağın örtülmemesi | Yapışkan üst bilgi, eylem çubuğu ve çerez bandı odaktaki öğeyi tümüyle örtmez | 2.4.11 | `scroll-padding` değerleri (§3.9); çerez bandı karartmasız |
| Dokunma hedefi | **En az 24×24 px** (zorunlu); **önerilen ve bu projede uygulanan: 44×44 px** (mobil); komşu hedefler arası ≥ 8 px | 2.5.8 | Düğme 44/52 px, çip 44 px dokunma alanı, menü satırı 56 px, eylem çubuğu 64 px. İstisna: metin içi bağlantılar |
| Klavye | Tüm işlevler klavyeyle; mantıklı `Tab` sırası (DOM = görsel sıra); odak tuzağı yalnızca `<dialog>` içinde; `Esc` her açılır katmanı kapatır | 2.1.1, 2.1.2, 2.4.3 | Açılır menü, mobil menü, filtre, ışık kutusu, çerez tercihleri tanımları (§5) |
| Sürükleme | Kaydırma hareketi gereken her yerde düğme alternatifi | 2.5.7 | Işık kutusu okları; yatay çip satırları klavyeyle de kaydırılır |
| Başlık hiyerarşisi | Her sayfada tek `<h1>`; düzey atlanmaz (h1 → h2 → h3); görsel boyut düzeyden bağımsız | 1.3.1, 2.4.6 | `SectionHeading` düzey parametresi; kart başlıkları bulunduğu bölüme göre h3 |
| Yer imleri | `<header>`, `<nav>` (etiketli), `<main>`, `<footer>`; birden çok `<nav>` ayrı `aria-label` taşır | 1.3.1, 2.4.1 | Ana menü · Sayfa yolu · Bu sayfadaki hizmet grupları · Alt bilgi menüsü · Hızlı iletişim |
| Blokları atlama | Skip link | 2.4.1 | §5.1 |
| Metin boyutu | %200 yakınlaştırmada içerik/işlev kaybı yok; 320 px genişlikte yatay kaydırma yok (veri tabloları hariç) | 1.4.4, 1.4.10 | `rem` tabanlı ölçek; `clamp` içinde `rem` bileşeni |
| Metin aralığı | Kullanıcı satır/harf/paragraf aralığını artırınca içerik kesilmez | 1.4.12 | Sabit yükseklikli metin kutusu yok; düğmeler `min-height` kullanır |
| Hareket | `prefers-reduced-motion` desteklenir; otomatik oynayan/kayan/yanıp sönen içerik yok | 2.2.2, 2.3.3 | §3.8 |
| Görseller | Bilgi taşıyan görselde anlamlı `alt`; dekoratif/temsilî görselde `alt=""`; metin görsel olarak gömülmez | 1.1.1, 1.4.5 | 05 §5 alt metin kuralları; müşteri adları gerçek metin (§5.15) |
| Formlar | Görünür etiket; hata tanımı ve öneri; hata özeti; `autocomplete`; yinelenen bilgi tekrar istenmez; doğrulama bilişsel test içermez | 1.3.5, 3.3.1–3.3.3, 3.3.7, 3.3.8 | §5.18; Turnstile görünmez/etkileşimsiz kipte tercih edilir |
| Tutarlı yardım | İletişim yolları her sayfada aynı yerde | 3.2.6 | Üst bilgi, eylem çubuğu, alt bilgi |
| Dil | `<html lang="tr">`; yabancı dildeki uzun ifadeler `lang` ile işaretlenir | 3.1.1, 3.1.2 | §2.5 |
| Durum mesajları | Filtre sonucu, form sonucu, sayaç `aria-live`/`role="status"` | 4.1.3 | §5.12, §5.18 |
| Ad, rol, değer | Yerel HTML öğeleri önceliklidir (`<button>`, `<details>`, `<dialog>`, `<select>`, radyo/onay kutusu); ARIA yalnızca yerel karşılık yoksa | 4.1.2 | §5 genelinde |

Doğrulama (Faz 1 tasarım aşamasında): her yüksek çözünürlüklü ekran için karşıtlık denetimi, odak sırası açıklaması ve başlık taslağı teslim edilir. Otomatik (axe-core) ve elle testler 08 kapsamındadır.

---

## 8. Tasarım teslimleri ve Faz 1 çıktıları

| # | Teslim | İçerik | Onaylayan |
|---|---|---|---|
| T1 | **Logo paketi** | §2.2'deki 5 SVG + PNG dışa aktarımları + favicon seti (05 §7) | Müşteri |
| T2 | **Belirteç dosyası** | §3'teki tüm belirteçler (renk, tipografi, boşluk, yarıçap, gölge, hareket) JSON/CSS değişkeni olarak; Tailwind temasına eşleme tablosu | Geliştirici (uygulanabilirlik) |
| T3 | **Stil panosu (1 sayfa)** | Renkler, yazı tipleri (Türkçe sınama dizgisiyle), düğme/kart/form örnekleri, 3–4 örnek görsel tonu (05 §1). Önerilen ve alternatif yazı tipi çifti yan yana | **Müşteri onayı 1** |
| T4 | **Tel kafesler (düşük çözünürlüklü)** | §6'daki 10 şablonun mobil (375) ve masaüstü (1280) tel kafesleri; gerçek başlık ve madde sayılarıyla (lorem ipsum yok) | Proje yöneticisi + iş analisti; **Müşteri onayı 2** |
| T5 | **Görsel seçkisi** | 05 §3'teki yuvalar için aday görseller (yuva başına 2–3 aday) + doldurulmuş görsel kayıt tablosu | **Müşteri onayı 3** |
| T6 | **Yüksek çözünürlüklü ekranlar** | Öncelik sırası: Ana Sayfa → Elektrik Taahhüt (en uzun liste) → Gazlı Söndürme → Referanslar listesi → Referans detayı → İletişim → Hakkımızda → Hizmetler genel → Yasal → 404. Her biri 375 ve 1440 px; kritik şablonlarda 768 px ara durum | **Müşteri onayı 4** |
| T7 | **Bileşen sayfası** | §5'teki tüm bileşenler, tüm çeşit ve durumlarıyla (hover/odak/hata/boş/yükleniyor) | Geliştirici + test mühendisi |
| T8 | **Etkileşim notları** | Açılır menü, mobil menü, filtre, akordeon, ışık kutusu, form akışı, çerez bandı için durum diyagramı veya tıklanabilir prototip | Geliştirici |
| T9 | **Erişilebilirlik ek açıklamaları** | Ekran başına: başlık düzeyleri, yer imleri, odak sırası, `alt` metinleri | Test mühendisi |

Onay adımları ve kuralları:

1. **Onay 1 — yön:** stil panosu. Renk/yazı tipi değişikliği bu adımdan sonra yapılırsa §3 güncellenir ve karşıtlık tablosu yeniden hesaplanır.
2. **Onay 2 — yapı:** tel kafesler. Bölüm sırası ve içerik kapsamı burada donar.
3. **Onay 3 — görseller:** seçki. Onaylanmayan yuva için yeni aday sunulur; lisans kaydı olmayan görsel sunulmaz.
4. **Onay 4 — ekranlar:** yüksek çözünürlüklü tasarımlar. En çok 2 düzeltme turu planlanır (tur sayısı 09'da kesinleşir).
5. Her onay yazılı (e-posta) alınır ve proje yöneticisince kayda geçirilir.

Geliştirme sırasında tasarımcı, her bileşen ve şablon için önizleme dağıtımında **tasarım uygunluk gözden geçirmesi** yapar (ölçü, renk belirteci, durumlar, duyarlı davranış).

---

## 9. Açık sorular ve varsayımlar

### 9.1 Açık sorular (proje yöneticisi `docs/acik-sorular.md` dosyasına aktarır)

| # | Soru | Etkisi | Engelleyici mi? |
|---|---|---|---|
| 1 | Logonun özgün vektör dosyası (AI/EPS/PDF/SVG) müşteride var mı? | Yoksa PNG'den yeniden çizilir (T1) | Hayır |
| 2 | Logodaki alt yazı ("Elektrik Elektronik Yangın Algılama ve Mekanik Yangın Söndürme Sistemleri") korunacak mı, kısaltılacak mı? Web üst bilgisinde alt yazısız sürümün kullanılması kabul mü? | Logo paketi, alt bilgi | Hayır |
| 3 | Müşterinin uyulması gereken bir kurumsal kimlik kılavuzu, zorunlu renk kodu veya yazı tipi var mı? | §3.1, §3.2 | Onay 1'den önce |
| 4 | İstatistik bandında hangi güncel ve doğrulanmış değerler gösterilecek (kuruluş yılı, tamamlanan/devam eden proje, ekip büyüklüğü vb.)? | `StatBand` çizilir/çizilmez | Hayır (yoksa bant gizlenir) |
| 5 | Hangi müşteri adları sitede **metin olarak** anılabilir? Herhangi biri için logo kullanım izni alınabilir mi? | `ClientNameGrid`, referans kartları | Onay 2'den önce |
| 6 | Referansların sektör ve hizmet türü sınıflandırması (filtre seçenekleri) kim tarafından kesinleştirilecek? 05 §3'teki eşleme taslaktır; bazı firmaların sektörü envanterden anlaşılmıyor | `FilterBar`, rozetler, görsel havuzu | Onay 2'den önce |
| 7 | WhatsApp için kullanılacak numara hangisi (envanterdeki cep numarası mı)? WhatsApp Business hesabı var mı? | `MobileActionBar` 3'lü/2'li çeşit | Hayır |
| 8 | Harita sağlayıcısı (Google Haritalar yerleştirme / OpenStreetMap tabanlı) ve çerez izniyle ilişkisi | `MapBlock` | Hayır |
| 9 | Gösterilebilecek belge, yetki veya sertifika var mı (envanterde yok)? | Hakkımızda 8. bölüm | Hayır (yoksa bölüm yok) |
| 10 | Çalışma saatleri nedir? | `TopBar`, alt bilgi, İletişim | Hayır (yoksa alan gizlenir) |
| 11 | Analitik için çerezsiz alternatif seçilecek mi? (01 §7) | `CookieConsent` yayınlanır/yayınlanmaz | Geliştirme başlamadan |

### 9.2 Varsayımlar

1. Logo yeniden tasarlanmaz; biçimi korunarak vektöre çevrilir (01 §5). Logo renkleri arayüz paletinin kaynağıdır, ancak logo kırmızısı arayüzde kullanılmaz (§3.1.6).
2. Yalnızca açık tema tasarlanır (01 §5); belirteçler rol tabanlı olduğundan koyu tema ileride eklenebilir.
3. Önerilen yazı tipleri (Archivo, Inter) ve alternatifleri (Manrope, Source Sans 3) SIL Open Font License ile dağıtılmaktadır; Faz 1'de lisans metni ve Türkçe karakter kapsamı indirilen dosyalar üzerinden doğrulanır.
4. İkon adları Lucide'ın güncel sürümünde doğrulanacaktır; bulunmayan ikon için aynı kavramda eşdeğeri seçilir.
5. Metin içerikleri (başlıklar, açıklamalar, süreç adımları, güven satırı) 03'ten gelir; bu belgedeki örnek ifadeler yalnızca düzeni göstermek içindir.
6. Form alanları ve doğrulama kuralları 02'de tanımlanır; §5.18 ve §6.8 görünüm ve davranışı tanımlar.
7. İngilizce sürüm Faz 2'dir (01 §5); düzenler %30 daha uzun/kısa metne dayanacak esneklikte kurulur, üst bilgide dil değiştirici için yer ayrılmaz ama `TopBar` sağ ucuna eklenebilir.
8. Referanslarda müşteri fotoğrafı gelene kadar sektör havuzundan temsilî görsel kullanılır ve bu durum sayfada açıkça belirtilir (§5.11, §6.5, §6.6).

---

## Proje yöneticisine notlar

1. **Mobilde telefon/teklif konumu (01 §6 ile uyum):** 01 §6 ana menü için "sağda belirgin 'Teklif Al' düğmesi ve telefon" der. Bu, masaüstünde aynen uygulanmıştır. Mobilde (< 1024 px) 64 px'lik üst bilgiye logo + telefon + düğme + menü sığmadığından bu iki eylem **sabit alt eylem çubuğuna** taşınmıştır (§5.24). Hedefe (her sayfadan en çok 1 tık) uygundur; 01'de bir cümleyle not edilmesi önerilir.
2. **WhatsApp ve harita** 01 §5'te kapsam içidir, ancak envanterde WhatsApp numarası ve harita yoktur. Tasarım, numara teyit edilmezse 2'li eylem çubuğuna düşecek biçimde kurulmuştur (Açık Soru 7, 8).
3. **Referans sektör/hizmet sınıflandırması** filtre için zorunludur (01 §5) fakat envanterde sektör alanı yoktur; bazı firmaların (ör. Kaplan Kardeşler, Efa Bilişim) sektörü addan kesin anlaşılmıyor. 05 §3'teki eşleme taslaktır; sahibi 02/03 olmalıdır (Açık Soru 6).
4. **Temsilî görsel beyanı:** 01 §9 madde 3 referans kartlarında "sektörü temsil eden lisanslı görsel" öngörüyor. Yanıltıcı olmaması için tasarım, bu görsellerin "Temsilî görsel" olarak işaretlenmesini ve `alt=""` verilmesini şart koşmuştur. Müşteri bu notu istemezse alternatif, referans kartlarının görselsiz (`text` çeşidi) kullanılmasıdır; karar müşteriye sunulmalı.
5. **Yangın sistemleri genel sayfası için içerik:** 01 §6'daki `/hizmetler/yangin-sistemleri/` sayfasında "yangın algılama ve alarm" için envanterde yalnızca madde adı vardır (paragraf metni yok). §6.3'teki blok için 03'te metin yazılması gerekir.
6. **Çerez bandı:** KVKK açısından "Kabul et" ve "Reddet" eşit ağırlıkta tasarlanmıştır; analitik kararı (01 §7) çerezsiz çözüm yönünde çıkarsa bileşen tümüyle kalkar ve sayfa ağırlığı azalır — tasarımcı önerisi bu yöndedir.
7. **01 §8 ile çelişki yok.** Renkler logodan türetilmiştir; ancak logodaki üç renkten kırmızı bilinçli olarak arayüz dışında bırakılmış, mavi taşıyıcı, turuncu eylem rengi yapılmıştır. 01 §8'deki "(kırmızı–turuncu–mavi)" ifadesi bu kararla okunmalıdır.
