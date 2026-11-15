# 02 — Fonksiyonel Gereksinimler

**Sahibi:** İş Analisti · **Durum:** Taslak v1 (müşteri onayı bekliyor) · **Tarih:** 14 Kasım 2026

Dayanak: `01-proje-ozeti-ve-kapsam.md` (bağlayıcı) ve `docs/kaynak/mevcut-site-icerik-envanteri.md` (tek olgu kaynağı). Çelişkide 01 geçerlidir.

## 1. Giriş

Bu belge, yeni Axis Teknik sitesinin **ne yapacağını** tanımlar: sayfaların amacı, içerik blokları, davranışlar, veri alanları ve kabul ölçütleri. Nasıl yapılacağı (mimari, kod) 06'da; metinler 03'te; ekran tasarımı 04'te; SEO ve yönlendirmeler 07'de; test senaryoları 08'dedir.

### 1.1 Öncelik tanımları

| Öncelik | Anlamı |
|---|---|
| **Olmalı** | Sürüm 1 yayın koşulu. Karşılanmadan yayına çıkılmaz. |
| **İyi olur** | Sürüm 1'de hedeflenir; süre/bilgi eksikliğinde proje yöneticisi kararıyla ertelenebilir. |
| **Sonra** | Sürüm 1 kapsamı dışı (Faz 2 adayı). Yalnızca altyapıyı engellememek için kayda alınmıştır. |

### 1.2 Kimlik düzeni

| Aralık | Alan | Aralık | Alan |
|---|---|---|---|
| FG-001–029 | Site geneli | FG-090–119 | İletişim ve teklif formu |
| FG-030–039 | Ana Sayfa | FG-120–129 | Yasal sayfalar ve 404 |
| FG-040–049 | Hakkımızda | FG-130–139 | İçerik yönetimi |
| FG-050–069 | Hizmetler | FG-140–149 | Analitik ve ölçüm |
| FG-070–089 | Referanslar | HK-xx / AS-xx / V-xx | Kullanıcı hikâyesi / Açık soru / Varsayım |

Kimlikler kalıcıdır; silinen gereksinimin numarası yeniden kullanılmaz. Kabul ölçütlerinde **V** = Verildiğinde, **Y** = Yapıldığında, **O** = Olmalı.

**"Müşteriden alınacak"** ifadesi: bilgi envanterde yoktur; değer gelene kadar ilgili öğe sitede **gösterilmez** (yer tutucu metin veya uydurma değer yayınlanmaz) ve ilgili açık soru (AS-xx) kapanmadan gereksinim "tamam" sayılmaz.

## 2. Kişilikler ve kullanıcı hikâyeleri

| Kod | Kişilik (01 §4) | Bağlam | Aradığı |
|---|---|---|---|
| K1 | Satın alma / teknik müdür (fabrika, hastane, otel, lojistik) | Masaüstü ağırlıklı, karşılaştırma yapar | Yeterlilik, benzer referans, teklif yolu |
| K2 | Ana yüklenici / proje firması | Masaüstü, alt yüklenici arar | Hizmet kapsamının ayrıntısı, benzer projeler |
| K3 | Mevcut müşteri | Çoğunlukla mobil, acelesi var | Telefon, adres, yol tarifi |

| Kimlik | Kişilik | Hikâye | İlgili gereksinimler |
|---|---|---|---|
| HK-01 | K1 | Kendi sektörümdeki referansları görmek istiyorum ki firmanın benzer işi yaptığından emin olayım. | FG-070–074, FG-036 |
| HK-02 | K1 | İhtiyacım olan sistemin (ör. gazlı söndürme) kapsamını okumak istiyorum ki doğru firmaya ulaştığımı anlayayım. | FG-053–058 |
| HK-03 | K1 | İncelediğim sayfadan ayrılmadan teklif isteyebilmek istiyorum ki zaman kaybetmeyeyim. | FG-005, FG-059, FG-092–101 |
| HK-04 | K1 | Talebimin ulaştığını görmek istiyorum ki ayrıca aramak zorunda kalmayayım. | FG-099, FG-102 |
| HK-05 | K2 | Elektrik/mekanik iş kalemlerini alt gruplarıyla görmek istiyorum ki şartnamemle karşılaştırayım. | FG-052–054 |
| HK-06 | K2 | Referansları hizmet türüne göre süzüp bağlantısını ekibimle paylaşmak istiyorum. | FG-071, FG-073 |
| HK-07 | K2 | Firmanın tasarımdan bakıma hangi aşamaları üstlendiğini görmek istiyorum. | FG-034, FG-056, FG-040 |
| HK-08 | K3 | Telefonumdan tek dokunuşla firmayı aramak istiyorum. | FG-005, FG-006, FG-090 |
| HK-09 | K3 | Adrese yol tarifi almak istiyorum. | FG-091 |
| HK-10 | K3 | Bakım/servis talebimi yazılı iletmek istiyorum (WhatsApp veya form). | FG-007, FG-093 |

## 3. Site geneli gereksinimler (FG-001–029)

### 3.1 Üst bilgi ve menü

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-001 | Olmalı | Tüm sayfalarda ortak üst bilgi: logo (ana sayfaya bağlantı), ana menü, telefon, "Teklif Al" düğmesi. | 1. Menü sırası 01 §6'daki gibidir: Hizmetler ▾ · Referanslar · Hakkımızda · İletişim.<br>2. "Teklif Al" `/iletisim/` sayfasındaki forma götürür (FG-005).<br>3. Telefon, envanterdeki pbx numarasıdır ve tıklanınca arama başlatır (FG-006).<br>4. Bulunulan sayfanın/bölümün menü öğesi görsel olarak ve yardımcı teknolojiler için "geçerli sayfa" olarak işaretlidir.<br>5. Hiçbir yerde "Servislerimiz" ifadesi geçmez. |
| FG-002 | Olmalı | Masaüstünde (≥ 1024 px) "Hizmetler" açılır menüsü. | 1. İçerik: Hizmetler (genel), 4 hizmet grubu ve Yangın Sistemleri altında 3 alt sayfa (01 §6).<br>2. Fare ile üzerine gelince ve tıklayınca/Enter–Boşluk ile açılır; Esc ile kapanır ve odak tetikleyiciye döner.<br>3. Tab ile tüm öğelere sırayla ulaşılır; menü dışına odak çıkınca kapanır.<br>4. Açık/kapalı durumu yardımcı teknolojilere bildirilir.<br>5. JS kapalıyken "Hizmetler" bağlantısı `/hizmetler/` sayfasına gider. |
| FG-003 | Olmalı | Mobil ve tablette (< 1024 px) açılır mobil menü. | **V** menü kapalıyken **Y** menü düğmesine dokunulduğunda **O** tüm menü öğeleri, telefon ve "Teklif Al" görünür; arka plan kaymaz; odak menü içinde kalır.<br>2. "Hizmetler" alt öğeleri açılır-kapanır bölüm olarak gösterilir.<br>3. Esc, kapat düğmesi veya bir bağlantıya dokunma menüyü kapatır; odak menü düğmesine döner.<br>4. Dokunma hedefleri en az 44×44 px'tir.<br>5. JS kapalıyken tüm sayfalara alt bilgideki bağlantılardan ulaşılabilir. |
| FG-004 | Olmalı | "İçeriğe geç" bağlantısı. | Sayfadaki ilk Tab durağıdır, odaklanınca görünür, ana içeriğe atlar. |

### 3.2 Sabit iletişim çağrıları

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-005 | Olmalı | "Teklif Al" çağrısı her sayfada görünür. | 1. Her sayfadan forma en çok 1 tıkla ulaşılır (01 §3).<br>2. Hizmet ve referans sayfalarından gelindiğinde formdaki "Konu" alanı ilgili hizmet türüyle önceden seçili gelir (FG-094); kullanıcı değiştirebilir.<br>3. `/iletisim/` sayfasında düğme sayfa içi forma kaydırır ve odağı forma taşır. |
| FG-006 | Olmalı | Tıkla-ara. | 1. Sitede görünen her telefon numarası arama başlatan bağlantıdır; uluslararası biçimde (+90…) kodlanır, ekranda yerel biçimde gösterilir.<br>2. Birincil numara: envanterdeki pbx (0216 307 18 62). İkinci numara ve cep numarasının gösterimi AS-03 ve AS-04'e bağlıdır.<br>3. Bağlantının erişilebilir adı numarayı ve eylemi içerir ("Ara: 0216 307 18 62"). |
| FG-007 | Olmalı | WhatsApp ile yaz. | 1. Numara **müşteriden alınacak** (AS-02); numara site ayarlarında tanımlı değilse WhatsApp öğesi hiçbir sayfada görünmez.<br>2. Tanımlıysa bağlantı, hazır bir Türkçe karşılama metniyle WhatsApp sohbetini yeni sekmede/uygulamada açar.<br>3. Bağlantının görünür veya erişilebilir adı "WhatsApp ile yazın"dır. |
| FG-008 | Olmalı | Mobilde (< 768 px) ekranın altında sabit hızlı erişim çubuğu: Ara · WhatsApp (varsa) · Teklif Al. | 1. Kaydırma sırasında görünür kalır; sayfa içeriğini ve çerez bandını örtmez (alt bilginin son satırı okunabilir).<br>2. Form alanı odaktayken (ekran klavyesi açıkken) forma engel olmaz.<br>3. Mobil menü açıkken gizlenir.<br>4. Düzen kaymasına (CLS) yol açmaz. |
| FG-009 | Olmalı | E-posta bağlantısı. | Sitede görünen e-posta adresi (info@axisteknik.com) e-posta istemcisini açan bağlantıdır. Kişisel adresin (envanter §11.9) gösterimi AS-05'e bağlıdır; yanıt gelene kadar gösterilmez. |

### 3.3 Alt bilgi, kırıntı yolu, ortak davranışlar

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-010 | Olmalı | Tüm sayfalarda ortak alt bilgi. | İçerik: 1. logo ve tek cümlelik konumlandırma (01 §2);<br>2. Hizmetler bağlantıları (4 grup + 3 yangın alt sayfası);<br>3. Kurumsal bağlantılar (Hakkımızda, Referanslar, İletişim);<br>4. adres, telefon(lar), e-posta — site ayarlarından, FG-006/009 kurallarıyla;<br>5. yasal bağlantılar (KVKK Aydınlatma Metni, Çerez Politikası) ve "Çerez tercihleri" düğmesi (FG-015);<br>6. telif satırı: yıl otomatik güncellenir; firma adı AS-01 yanıtına göre;<br>7. sosyal medya ve çalışma saatleri **müşteriden alınacak** (AS-06, AS-07); değer yoksa alan görünmez. |
| FG-011 | Olmalı | Kırıntı yolu (breadcrumb). | 1. Ana Sayfa ve 404 dışındaki tüm sayfalarda, başlığın üstünde görünür.<br>2. URL hiyerarşisini izler (ör. Ana Sayfa › Hizmetler › Yangın Sistemleri › Gazlı Söndürme).<br>3. Son öğe bağlantı değildir ve "geçerli sayfa" olarak işaretlidir.<br>4. Yapısal veriyle de sunulur (ayrıntı 07). |
| FG-012 | Olmalı | Her sayfanın benzersiz başlığı ve açıklaması. | Her sayfada tek H1, benzersiz sayfa başlığı ve meta açıklama bulunur; paylaşım (Open Graph) görseli ve başlığı tanımlıdır. Kurallar 07'de. |
| FG-013 | Olmalı | Dış bağlantı ve iç bağlantı davranışı. | 1. İç bağlantılar sonda eğik çizgili kanonik URL'yi kullanır.<br>2. Dış bağlantılar (harita, WhatsApp) yeni sekmede açılır ve bu durum yardımcı teknolojilere bildirilir.<br>3. Sitede kırık iç bağlantı sayısı = 0. |

### 3.4 Çerez izni

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-014 | Olmalı | Çerez izni bandı. | **V** kullanıcı daha önce tercih yapmamışken **Y** herhangi bir sayfa açıldığında **O** bant görünür; "Kabul et", "Reddet" ve "Tercihler" seçenekleri eşit görünürlüktedir.<br>2. Tercih yapılana kadar zorunlu olmayan hiçbir çerez/izleme yüklenmez (ağ isteği dahil).<br>3. "Reddet" seçildiğinde analitik hiç yüklenmez; site tüm işlevleriyle çalışır.<br>4. Kategoriler: Zorunlu (kapatılamaz) ve Analitik (varsayılan kapalı).<br>5. Bant klavye ile kullanılabilir, içeriği kalıcı olarak örtmez, düzen kaymasına yol açmaz.<br>6. Bantta Çerez Politikası bağlantısı bulunur. |
| FG-015 | Olmalı | Tercihin saklanması ve değiştirilmesi. | 1. Tercih saklanır; sonraki ziyaretlerde bant yeniden çıkmaz (saklama süresi AS-19).<br>2. Alt bilgideki "Çerez tercihleri" düğmesi tercih penceresini her sayfada yeniden açar.<br>3. İzin geri alındığında analitik o andan itibaren durur. |
| FG-016 | İyi olur | Çerezsiz analitik seçilirse sadeleştirme. | Müşteri çerezsiz analitik seçerse (AS-18) ve sitede zorunlu olmayan çerez kalmazsa bant kaldırılır; Çerez Politikası sayfası kalır. Karar hukuk teyidiyle verilir. |

### 3.5 Dil altyapısı

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-017 | Olmalı | Sürüm 1 yalnızca Türkçedir. | 1. Tüm sayfalar belge dilini Türkçe olarak bildirir.<br>2. Büyük harfe çevrilen metinlerde Türkçe harf kuralları doğrudur (i→İ, ı→I).<br>3. Tarih ve sayılar Türkçe biçimdedir.<br>4. Dil değiştirici Sürüm 1'de gösterilmez. |
| FG-018 | Olmalı | İngilizceye hazır yapı. | 1. Arayüz metinleri (menü, düğme, form etiketi, hata iletisi, çerez bandı) sayfa şablonlarına gömülü değil, dile göre ayrılmış tek bir kaynaktan gelir.<br>2. İçerik kayıtları dil bilgisi taşıyabilir; ikinci dil eklemek mevcut TR URL'lerini değiştirmez.<br>3. EN URL düzeni 01'de tanımlı değildir → Proje yöneticisine not 6. |
| FG-019 | Sonra | İngilizce içerik ve dil değiştirici. | Faz 2. |

## 4. Sayfa bazlı gereksinimler

Her sayfa FG-001–018'i devralır. Aşağıdaki "bloklar" içerik sırasını verir; görsel düzen 04'te tanımlanır. Tüm görseller 01 §9 görsel politikasına uyar.

### 4.1 Ana Sayfa `/` (FG-030–039)

**Amaç:** Firmanın ne yaptığını 5 saniyede anlatmak; K1/K2'yi hizmet ve referanslara, K3'ü iletişime yönlendirmek.

| Kimlik | Öncelik | Blok / gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-030 | Olmalı | Kahraman (hero) alanı. | 1. Tek, sabit alan: H1 başlık, kısa açıklama (01 §2 konumlandırması), birincil çağrı "Teklif Al", ikincil çağrı "Hizmetleri İncele" veya "Referanslar".<br>2. Otomatik dönen slider ve açılış "Loading" ekranı yoktur (01 §8).<br>3. 360 px genişlikte başlık ve birincil çağrı ilk ekranda görünür.<br>4. Hero görseli sayfanın LCP hedefini (≤ 2,5 sn) bozmaz. |
| FG-031 | Olmalı | Hizmet grupları. | 1. Dört kart: Elektrik Taahhüt, Mekanik Taahhüt, Yangın Algılama ve Söndürme Sistemleri, Tasarım ve Projelendirme.<br>2. Her kart: ad, kısa açıklama (03), ikon/görsel, ilgili grup sayfasına bağlantı.<br>3. Kartın tamamı tıklanabilir; bağlantı adı hizmet adını içerir ("tıklayın" gibi genel ad kullanılmaz). |
| FG-032 | Olmalı | Sayılar. | 1. Yalnızca doğrulanmış değerler gösterilir. Kuruluş yılı (2010) envanterden gelir.<br>2. Referans sayısı elle yazılmaz; yayındaki referans kayıtlarından otomatik hesaplanır.<br>3. "Devam eden proje" ve diğer sayılar **müşteriden alınacak** (AS-08); doğrulanmayan sayı gösterilmez.<br>4. Doğrulanmış en az 2 sayı yoksa blok hiç görünmez.<br>5. Sayı animasyonu varsa "hareketi azalt" tercihinde devre dışıdır ve sayılar JS'siz de okunur. |
| FG-033 | Olmalı | Öne çıkan referanslar. | 1. İçerikte "öne çıkan" işaretli 3–6 referans kartı; seçim AS-09.<br>2. Kart alanları FG-070 ile aynıdır.<br>3. "Tüm referanslar" bağlantısı `/referanslar/` sayfasına gider. |
| FG-034 | Olmalı | Neden biz / çalışma süreci. | 1. Süreç adımları 01 §2'deki dört aşamadır: tasarım, uygulama, devreye alma, bakım.<br>2. "Neden biz" maddeleri yalnızca envanter §4'teki değer ve ilkelerden veya müşteri onaylı metinden türetilir (03).<br>3. Belge, sertifika, ödül, rakam içeren iddia müşteri teyidi olmadan yazılmaz (AS-10). |
| FG-035 | İyi olur | Sektörler. | 1. Sektör listesi referans sınıflandırmasıyla aynıdır (FG-131, V-04).<br>2. Her sektör, o sektöre süzülmüş referans listesine bağlanır (`/referanslar/` + sektör filtresi).<br>3. Yayında referansı olmayan sektör gösterilmez. |
| FG-036 | Olmalı | Kapanış iletişim çağrısı. | Başlık, kısa metin, "Teklif Al" düğmesi ve tıkla-ara telefonu içeren blok alt bilgiden hemen önce yer alır. |

### 4.2 Hakkımızda `/hakkimizda/` (FG-040–049)

**Amaç:** Firmanın kim olduğunu, 01 §2 konumlandırmasıyla tutarlı biçimde anlatmak.

| Kimlik | Öncelik | Blok / gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-040 | Olmalı | Firma tanıtımı. | 1. Kuruluş yılı (2010) ve faaliyet alanı 01 §2 ile tutarlıdır; firma "yangın söndürme cihazı üreticisi" olarak sunulmaz (envanter §11.5).<br>2. Firma adı sitenin tamamında tek biçimde yazılır (AS-01). |
| FG-041 | Olmalı | Misyon, vizyon, değerler, ilkeler. | 1. Değerler (5) ve ilkeler (4) envanter §4'teki maddelerdir.<br>2. Eskimiş "2013 yılında…" vizyon cümlesi yayınlanmaz; yeni metin müşteri onaylıdır (AS-11). |
| FG-042 | İyi olur | Belgeler / yetkinlikler. | **Müşteriden alınacak** (AS-10). Belge gelmezse blok görünmez. |
| FG-043 | Olmalı | Bağlantılar ve çağrı. | Sayfada Hizmetler ve Referanslar'a yönlendiren bağlantılar ile kapanış iletişim çağrısı (FG-036 ile aynı blok) bulunur. |
| FG-044 | Sonra | Ekip, müşteri yorumları, zaman çizelgesi. | Envanterde yok; Faz 2. |

### 4.3 Hizmetler (FG-050–069)

**Amaç:** Hizmet kapsamını şartnameyle karşılaştırılabilir ayrıntıda sunmak; ilgili referans ve teklif formuna yönlendirmek.

**İçerik eşlemesi (envanter → sayfa):**

| Sayfa | Envanter kaynağı | Alt gruplar (madde sayısı) |
|---|---|---|
| `/hizmetler/elektrik-taahhut/` | §5.1 | Orta Gerilim (6) · Alçak Gerilim (11) · Zayıf Akım (11) · Otomasyon ve Enstrümantasyon (6) |
| `/hizmetler/mekanik-taahhut/` | §5.2 | HVAC (7) · Sıhhi Tesisat (7) · Yangından Koruma → Yangın Sistemleri sayfasına çapraz bağlantı (not 2) |
| `/hizmetler/yangin-sistemleri/` | §5.2 "Yangından Koruma" (5) + §5.1 Zayıf Akım'daki algılama maddeleri | Algılama ve alarm · Söndürme · 3 alt sayfa kartı |
| `…/gazli-sondurme/` | §5.4 Gazlı | Sistem türleri: FM200, CO2, inert (argon) |
| `…/sulu-sondurme/` | §5.4 Sulu | Sprinkler, yangın dolabı, hidrant sistemleri |
| `…/kopuklu-sondurme/` | §5.4 Köpüklü | Köpük türleri; kullanım alanları (9 madde) |
| `/hizmetler/tasarim-ve-projelendirme/` | §5.3 | Sistem tasarımı (4) |

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-050 | Olmalı | Hizmetler genel sayfası `/hizmetler/`. | 1. Dört hizmet grubu kart olarak listelenir: ad, kısa açıklama, alt grup adları, grup sayfasına bağlantı.<br>2. Yangın Sistemleri kartında 3 alt sayfaya doğrudan bağlantı vardır.<br>3. Sayfa, hizmet içerik kayıtlarından üretilir; yeni kayıt eklendiğinde liste kendiliğinden güncellenir. |
| FG-051 | Olmalı | Hizmet sayfası ortak yapısı (grup ve alt sayfaların tümü). | Bloklar sırasıyla: 1. başlık (H1) ve giriş metni (03);<br>2. kapsam listesi (FG-052);<br>3. ilgili referanslar (FG-058);<br>4. teklif çağrısı (FG-059);<br>5. diğer hizmetlere bağlantılar (FG-060). |
| FG-052 | Olmalı | Kapsam listeleri alt gruplarıyla sunulur. | 1. Yukarıdaki eşleme tablosundaki tüm alt gruplar ve envanterdeki tüm maddeler sayfada yer alır (madde sayıları tabloyla eşleşir; yazım düzeltmeleri 03'te).<br>2. Her alt grup bir alt başlıktır (H2/H3), maddeler gerçek liste olarak işaretlenir.<br>3. Tüm maddeler JS'siz ve "tümünü göster" gerektirmeden okunabilir; alt gruplar katlanır tasarlanırsa varsayılan durum açıktır.<br>4. Birden çok alt grubu olan sayfada alt gruplara sayfa içi bağlantılar bulunur. |
| FG-053 | Olmalı | Yangın Sistemleri genel sayfası. | 1. Algılama ve söndürme kapsamı ayrı alt başlıklarda verilir.<br>2. Gazlı, sulu ve köpüklü söndürme için alt sayfa kartları (ad, kısa açıklama, bağlantı) bulunur.<br>3. Alt sayfası olmayan kalemler (yangın algılama ve alarm, yangın pompa istasyonları, duman tahliye) bu sayfada liste maddesi olarak yer alır. |
| FG-054 | Olmalı | Yangın alt sayfaları (gazlı, sulu, köpüklü). | 1. İçerik envanter §5.4'teki metinlerden türetilir: sistem türleri, uygulanan standartlar (envanterde geçenler: Yangın Yönetmeliği, NFPA, EN), verilen hizmetler (tasarım, montaj, devreye alma, bakım).<br>2. Başka firmaya ait "D Sistem" ifadesi hiçbir sayfada yer almaz (envanter §11.3).<br>3. Köpüklü söndürme sayfasında "Başlıca kullanım alanları" listesi 9 maddeyle yer alır.<br>4. Onay/sertifika iddiaları ("VdS onaylı yazılım", "uluslararası sertifikalı sistemler") müşteri teyidi olmadan yayınlanmaz (AS-12).<br>5. Her alt sayfada üst sayfaya ve diğer iki alt sayfaya bağlantı vardır. |
| FG-055 | Olmalı | Mekanik Taahhüt sayfasında yangın çapraz bağlantısı. | "Yangından korunma" kalemleri bu sayfada yinelenmez; `/hizmetler/yangin-sistemleri/` sayfasına açıklamalı bağlantı verilir. |
| FG-056 | Olmalı | Tasarım ve Projelendirme sayfası. | Envanter §5.3'teki 4 tasarım kalemi listelenir; tasarımı yapılan disiplinlerin grup sayfalarına bağlantı verilir. |
| FG-057 | İyi olur | Sık sorulan sorular bloğu. | Yalnızca müşteri onaylı soru–yanıtlar; içerik yoksa blok görünmez. Açılır-kapanır öğeler klavye ile kullanılabilir. |
| FG-058 | Olmalı | İlgili referanslar. | **V** bir hizmet sayfası açıkken **O** hizmet türü o sayfayla eşleşen referanslardan en çok 3'ü kart olarak gösterilir.<br>2. Eşleşme referans kaydındaki "hizmet türleri" alanından otomatik yapılır; elle liste tutulmaz.<br>3. "Bu hizmetteki tüm referanslar" bağlantısı, ilgili hizmet filtresi uygulanmış `/referanslar/` listesine gider.<br>4. Eşleşen referans yoksa blok görünmez (boş başlık kalmaz). |
| FG-059 | Olmalı | Teklif çağrısı. | Her hizmet sayfasında "Bu hizmet için teklif alın" çağrısı bulunur; forma götürür ve Konu alanını o hizmetle önceden seçer (FG-005/094). Yanında tıkla-ara telefonu yer alır. |
| FG-060 | İyi olur | Diğer hizmetler. | Sayfa sonunda diğer hizmet gruplarına bağlantı kartları bulunur; bulunulan sayfa listede yer almaz. |

### 4.4 Referanslar (FG-070–089)

**Amaç:** Yeterliliği benzer işlerle kanıtlamak (K1, K2).

#### Liste `/referanslar/`

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-070 | Olmalı | Referans kartları listesi. | 1. Yayındaki tüm referanslar (başlangıçta 19) tek sayfada kart olarak listelenir; sayfalama yoktur.<br>2. Kart alanları: görsel, referans adı, sektör, hizmet türü etiket(ler)i, konum (şehir, ülke).<br>3. Kartın tamamı detay sayfasına bağlanır; bağlantı adı referans adıdır.<br>4. Varsayılan sıra içerikteki "sıra" alanına göredir (FG-131); yıl doğrulanırsa yeniden eskiye sıralama seçeneği AS-13'e bağlıdır.<br>5. Kart görselleri görsel politikasına uyar: yazılı izin yoksa kurum logosu/tesis fotoğrafı değil, sektörü temsil eden lisanslı görsel kullanılır. |
| FG-071 | Olmalı | Sektör ve hizmet türü filtreleri. | **V** liste açıkken **Y** bir veya daha çok filtre değeri seçildiğinde **O** liste sayfa yenilenmeden yalnızca eşleşen kartları gösterir.<br>2. Aynı filtre içinde birden çok değer VEYA, farklı filtreler arasında VE mantığıyla birleşir.<br>3. Seçili değerler görünür biçimde işaretlenir; "Filtreleri temizle" tek adımda tümünü kaldırır.<br>4. Sonuç sayısı ("19 referanstan 6'sı gösteriliyor") görünür ve değiştiğinde ekran okuyuculara duyurulur.<br>5. Filtre değerleri içerikten üretilir; referansı olmayan değer seçenek olarak çıkmaz.<br>6. Filtreler klavye ile kullanılabilir; mobilde tek sütunda rahat kullanılır.<br>7. JS kapalıyken tüm referanslar filtresiz listelenir. |
| FG-072 | İyi olur | Konum filtresi. | 1. Seçenekler içerikteki ülke ve şehir değerlerinden üretilir.<br>2. Birden çok ilde yürütülen işler ("Türkiye geneli") ayrı bir seçenek olarak yer alır ve herhangi bir Türkiye ili seçildiğinde de sonuçlarda görünür.<br>3. FG-071'in 1–7. ölçütleri bu filtre için de geçerlidir.<br>Not: 01 §5 kapsamında yalnızca sektör ve hizmet türü sayılmıştır → not 1. |
| FG-073 | Olmalı | Filtre durumu URL'de tutulur. | **V** filtre uygulanmışken **Y** adres kopyalanıp yeni sekmede açıldığında **O** aynı filtreler seçili ve aynı sonuçlar görünür.<br>2. Tarayıcının geri/ileri düğmeleri filtre durumunu geri alır/yineler.<br>3. Filtre durumu sorgu parametresiyle taşınır; `/referanslar/` yolu değişmez ve filtreli görünümlerin kanonik adresi `/referanslar/` olur (ayrıntı 07).<br>4. Geçersiz/tanınmayan parametre yok sayılır; sayfa hata vermez. |
| FG-074 | Olmalı | Boş sonuç durumu. | **V** seçili filtrelerle eşleşen referans yokken **O** boş liste yerine şu ileti görünür: açıklama ("Bu ölçütlere uyan referans bulunamadı"), "Filtreleri temizle" düğmesi ve "Projenizi konuşalım" teklif çağrısı. |
| FG-075 | Olmalı | Liste sonu çağrısı. | Listenin altında kapanış iletişim çağrısı (FG-036 bloğu) bulunur. |

#### Detay `/referanslar/[slug]/`

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-076 | Olmalı | Referans detay sayfası ve veri alanları. | 1. Yayındaki her referans için bir detay sayfası vardır (başlangıçta 19; slug'lar 03/07'de).<br>2. Gösterilen alanlar aşağıdaki tablodadır.<br>3. Değeri olmayan isteğe bağlı alanın etiketi de görünmez (boş "Yıl: —" satırı olmaz). |
| FG-077 | Olmalı | Görseller. | 1. En az 1 kapak görseli; birden çok görsel varsa galeri.<br>2. Her görselin anlamlı alternatif metni vardır.<br>3. Galeri büyütme sunuyorsa klavye ile açılır, gezilir, Esc ile kapanır; odak yönetilir.<br>4. Temsilî (stok) görsel kullanıldığında bunun gerçek saha fotoğrafı izlenimi vermemesi için görsel altı notu kuralı AS-14'e göre belirlenir. |
| FG-078 | Olmalı | Önceki / sonraki referans. | 1. Liste sırasına göre önceki ve sonraki referansa bağlantı; bağlantıda referans adı yazar.<br>2. İlk kayıtta "önceki", son kayıtta "sonraki" gösterilmez.<br>3. "Tüm referanslar" bağlantısı listeye döner. |
| FG-079 | Olmalı | İlgili referanslar. | 1. Aynı sektördeki veya en az bir ortak hizmet türü olan en çok 3 referans gösterilir; önce her iki ölçütü de karşılayanlar gelir.<br>2. Görüntülenen referans kendi listesinde yer almaz.<br>3. Eşleşme yoksa blok görünmez. |
| FG-080 | Olmalı | Hizmet bağlantıları ve teklif çağrısı. | 1. Hizmet türü etiketleri ilgili hizmet sayfasına bağlanır.<br>2. "Benzer bir proje için teklif alın" çağrısı forma götürür; Konu alanı referansın ilk hizmet türüyle önceden seçilir. |
| FG-081 | Sonra | Müşteri görüşü, proje büyüklüğü (m², kVA vb.), ekipman markaları. | Envanterde yok; müşteri verirse Faz 2'de alan eklenir. |

**Referans veri alanları:**

| Alan | Zorunlu | Kaynak / kural |
|---|---|---|
| Ad (başlık) | Evet | Envanter §6; yazım düzeltmeleri 03 |
| Müşteri / tesis adı | Evet | Envanter başlığından ayrıştırılır; yayın izni AS-15 |
| Kapsam (yapılan iş özeti) | Evet | Envanter başlığındaki iş tanımı; ek ayrıntı **müşteriden alınacak** (AS-13) |
| Sektör | Evet (tek değer) | Sınıflandırma V-04; atama 03 |
| Hizmet türleri | Evet (≥ 1) | Sınıflandırma V-05; envanter başlığından türetilir |
| Ülke | Evet | Envanter §6 (Türkiye, Irak, Gürcistan) |
| Şehir | Evet | Envanter §6; çok illi işlerde "Türkiye geneli" |
| Yıl / tarih aralığı | Hayır | Yalnızca doğrulanırsa gösterilir (envanterdeki 2016–2019 şablon değeri olabilir — AS-13) |
| Görseller (dosya, alternatif metin) | ≥ 1 | Görsel politikası; kayıt tablosunda karşılığı olmalı |
| Öne çıkan · Sıra · Taslak | Hayır | Ana sayfa seçimi, liste sırası, yayın durumu |

### 4.5 İletişim ve Teklif Formu `/iletisim/` (FG-090–119)

**Amaç:** Teklif/iletişim talebi toplamak; telefon, adres ve yol tarifini hızlı vermek.

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-090 | Olmalı | İletişim bilgileri bloğu. | 1. Adres (envanter §1), telefon(lar) (FG-006), e-posta (FG-009), WhatsApp (FG-007) site ayarlarından gelir; üst/alt bilgiyle aynı kaynaktır.<br>2. Çalışma saatleri **müşteriden alınacak** (AS-07); yoksa görünmez.<br>3. Bilgiler görsel değil metindir (kopyalanabilir) ve yapısal veriyle de sunulur (07).<br>4. Mobilde bu blok formdan önce gelir (K3). |
| FG-091 | Olmalı | Harita ve yol tarifi. | 1. Firma konumunu gösteren harita alanı bulunur; konum/pin doğrulaması AS-16.<br>2. "Yol tarifi al" bağlantısı, hedefi firma adresi olan harita uygulamasını/sitesini yeni sekmede açar.<br>3. Üçüncü taraf etkileşimli harita, kullanıcı açıkça istemeden (tıklamadan) yüklenmez; öncesinde statik önizleme ve adres metni görünür.<br>4. Haritaya ulaşamayan kullanıcı için adres metni her zaman mevcuttur. |
| FG-092 | Olmalı | Form alanları. | Alanlar aşağıdaki tablodaki gibidir; her alanın görünür etiketi vardır (yer tutucu metin etiket yerine geçmez); zorunlu alanlar hem görsel hem programatik olarak işaretlidir; alanlar tarayıcı otomatik doldurmasını destekler. |
| FG-093 | Olmalı | Konu / hizmet türü seçenekleri. | Seçenekler: Elektrik Taahhüt · Mekanik Taahhüt · Yangın Algılama ve Söndürme Sistemleri · Tasarım ve Projelendirme · Bakım / Servis · Diğer. Liste AS-17 ile teyit edilir. |
| FG-094 | Olmalı | Konu ön seçimi. | **V** kullanıcı bir hizmet veya referans sayfasındaki teklif çağrısından geldiğinde **O** Konu alanı ilgili seçenekle dolu gelir ve geldiği sayfa bilgisi bildirim e-postasına eklenir.<br>2. Geçersiz ön seçim değeri yok sayılır; alan boş gelir. |
| FG-095 | Olmalı | İstemci tarafı doğrulama. | **V** eksik/hatalı alan varken **Y** "Gönder"e basıldığında **O** form gönderilmez; her hatalı alanın yanında ne yapılması gerektiğini söyleyen Türkçe ileti çıkar; odak ilk hatalı alana gider.<br>2. Hata, alan terk edildiğinde gösterilir; yazarken her tuşta gösterilmez.<br>3. Düzeltilen alanın hatası hemen kalkar. |
| FG-096 | Olmalı | Sunucu tarafı doğrulama. | 1. Tablodaki tüm kurallar sunucuda yeniden uygulanır; istemci doğrulaması atlanarak gönderilen geçersiz istek reddedilir ve e-posta gönderilmez.<br>2. Alanlardaki HTML/betik içeriği etkisizleştirilir; e-posta başlıklarına satır başı eklenerek yapılan enjeksiyon engellenir.<br>3. Sunucu hatası alan bazında kullanıcıya gösterilir. |
| FG-097 | Olmalı | KVKK onayı. | 1. İşaret kutusu varsayılan olarak boştur; işaretlenmeden form gönderilemez.<br>2. Etikette `/kvkk-aydinlatma-metni/` bağlantısı vardır; bağlantı yeni sekmede açılır ve form verisi kaybolmaz.<br>3. Etiket metni hukuk teyidiyle kesinleşir (AS-20).<br>4. Onay zamanı bildirim e-postasında yer alır. |
| FG-098 | Olmalı | Gönderim sırasındaki durum. | 1. Gönderim sürerken düğme devre dışıdır ve "Gönderiliyor…" durumu görünür; çift tıklama tek gönderim üretir.<br>2. Durum ekran okuyuculara duyurulur. |
| FG-099 | Olmalı | Başarı durumu. | **V** geçerli form gönderildiğinde **O** form yerinde, sayfa değişmeden onay iletisi görünür ("Talebiniz bize ulaştı"); odak iletiye taşınır.<br>2. İletide acil durumlar için tıkla-ara telefonu yer alır. Geri dönüş süresi vaadi **müşteriden alınacak** (AS-21); teyitsiz süre yazılmaz.<br>3. Form temizlenir; sayfa yenilendiğinde yeniden gönderim olmaz.<br>4. Ölçüm olayı tetiklenir (FG-142). |
| FG-100 | Olmalı | Hata durumu (gönderilemedi). | **V** ağ/sunucu/e-posta servisi hatası oluştuğunda **O** kullanıcının girdiği veriler korunur; "Gönderilemedi, lütfen tekrar deneyin" iletisi ile telefon ve e-posta alternatifi gösterilir.<br>2. Bildirim e-postası gönderilemediyse kullanıcıya başarı iletisi gösterilmez.<br>3. Teknik hata ayrıntısı kullanıcıya gösterilmez. |
| FG-101 | Olmalı | Spam koruması. | 1. Görünmez tuzak alan (honeypot): dolu gelen gönderim sessizce reddedilir, e-posta gönderilmez.<br>2. Cloudflare Turnstile doğrulaması (01 §7) sunucuda denetlenir; doğrulanmayan gönderim reddedilir.<br>3. Doğrulama gerçek kullanıcıdan bulmaca çözmesini normal koşulda istemez; başarısız olursa anlaşılır ileti ve telefon alternatifi gösterilir.<br>4. Koruma, klavye ve ekran okuyucu kullanıcısını engellemez. |
| FG-102 | Olmalı | E-posta bildirimi (firmaya). | 1. Her geçerli gönderimde alıcı adres(ler)e e-posta gider; alıcı **müşteriden alınacak** (AS-22).<br>2. İçerik: tüm form alanları, gönderim tarihi-saati (Türkiye saati), kaynak sayfa, KVKK onayı bilgisi.<br>3. Konu satırı talebi ayırt ettirir (ör. "Web teklif talebi — [Konu] — [Firma/Ad]").<br>4. "Yanıtla" doğrudan talep sahibinin e-postasına gider.<br>5. E-posta, gelen kutusuna düşecek biçimde kimlik doğrulamalı alan adından gönderilir (ayrıntı 06). |
| FG-103 | İyi olur | Talep sahibine otomatik onay e-postası. | Gönderimin özeti ve firma iletişim bilgilerini içerir; pazarlama içeriği taşımaz. Uygulanması AS-21'e bağlıdır. |
| FG-104 | Olmalı | Gönderim sınırı. | 1. Aynı kaynaktan kısa sürede yinelenen gönderimler sınırlandırılır (öneri: 10 dakikada en çok 3; kesin değer 06).<br>2. Sınır aşıldığında kullanıcıya "Çok sayıda deneme yapıldı, lütfen daha sonra deneyin veya bizi arayın" iletisi gösterilir.<br>3. Mesaj 2000 karakteri, istek gövdesi makul bir boyutu aşarsa reddedilir. |
| FG-105 | Olmalı | Form erişilebilirliği. | 1. Tüm alan ve düğmeler yalnızca klavyeyle, mantıklı sırayla kullanılabilir; odak göstergesi görünürdür.<br>2. Hata iletileri ilgili alana programatik olarak bağlıdır ve göründüğünde duyurulur; hata yalnızca renkle belirtilmez.<br>3. Telefon ve e-posta alanları mobilde uygun klavyeyi açar.<br>4. Form 320 px genişlikte yatay kaydırma olmadan kullanılır; %200 yakınlaştırmada işlev kaybı olmaz.<br>5. Zaman aşımı yoktur. |
| FG-106 | Olmalı | Veri saklama. | Form verisi sitede/veritabanında saklanmaz; yalnızca e-posta ile iletilir (V-07). İşlem günlüklerinde kişisel veri (ad, telefon, e-posta, mesaj) tutulmaz. |
| FG-107 | İyi olur | JS kapalı durumu. | JS kapalıyken formun yerinde/üstünde, talebin telefon veya e-posta ile iletilebileceğini söyleyen not görünür. |
| FG-108 | Sonra | Dosya ekleme (şartname, proje). | Faz 2 adayı (AS-23). |

**Form alanları ve doğrulama kuralları:**

| Alan | Tür | Zorunlu | Kural | Hata iletisi (taslak; son metin 03) |
|---|---|---|---|---|
| Ad Soyad | Metin | Evet | 2–80 karakter; yalnız boşluk olamaz | "Adınızı ve soyadınızı yazın." |
| Firma | Metin | Hayır (V-06) | En çok 120 karakter | — |
| Telefon | Telefon | Evet | Boşluk, parantez, tire ve baştaki + kabul edilir; ayıklandıktan sonra 10–15 rakam (yurt dışı numaralar geçerli) | "Geçerli bir telefon numarası yazın. Örnek: 0216 123 45 67" |
| E-posta | E-posta | Evet | Geçerli e-posta biçimi; en çok 254 karakter | "Geçerli bir e-posta adresi yazın. Örnek: ad@firma.com" |
| Konu / hizmet türü | Seçim | Evet | FG-093 listesinden bir değer | "Bir konu seçin." |
| Mesaj | Çok satırlı metin | Evet | 10–2000 karakter; kalan karakter bilgisi gösterilir | "Talebinizi kısaca yazın (en az 10 karakter)." |
| KVKK onayı | İşaret kutusu | Evet | İşaretli olmalı | "Devam etmek için aydınlatma metnini onaylayın." |
| Tuzak alan | Gizli | — | Boş olmalı; kullanıcıya ve yardımcı teknolojilere görünmez | — |

Tüm metin alanlarında baştaki/sondaki boşluklar kırpılır. Türkçe karakterler tüm alanlarda ve bildirim e-postasında bozulmadan iletilir.

### 4.6 Yasal sayfalar ve 404 (FG-120–129)

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-120 | Olmalı | KVKK Aydınlatma Metni `/kvkk-aydinlatma-metni/`. | 1. Metin müşteri/hukuk danışmanı onaylıdır; ekip hukuki metin uydurmaz (AS-20).<br>2. Asgari başlıklar: veri sorumlusunun kimliği, işlenen veriler ve amaçlar, aktarım (e-posta, barındırma, spam koruması ve analitik hizmet sağlayıcıları dahil), toplama yöntemi ve hukuki sebep, saklama süresi, ilgili kişinin hakları ve başvuru yolu.<br>3. Veri sorumlusu unvanı, MERSİS/vergi bilgisi ve başvuru adresi **müşteriden alınacak** (AS-01).<br>4. Sayfada son güncelleme tarihi görünür.<br>5. Formdan ve alt bilgiden bağlantılıdır. |
| FG-121 | Olmalı | Çerez Politikası `/cerez-politikasi/`. | 1. Sitede fiilen kullanılan çerez/depolama kayıtlarını tablo hâlinde listeler: ad, sağlayıcı, amaç, süre, kategori.<br>2. Tablo, yayındaki sitede gözlenen kayıtlarla birebir eşleşir (yayın öncesi denetlenir — 08).<br>3. Sayfada "Çerez tercihlerini değiştir" düğmesi bulunur (FG-015).<br>4. Son güncelleme tarihi görünür. |
| FG-122 | Olmalı | Yasal sayfa okunabilirliği. | Uzun metin başlık hiyerarşisiyle bölünür; satır uzunluğu ve yazı boyutu gövde metni standartlarındadır; sayfa yazdırılabilir. |
| FG-123 | Olmalı | 404 sayfası. | **V** var olmayan bir adres istendiğinde **O** sunucu 404 durum kodu döner ve site üst/alt bilgisiyle 404 sayfası görünür.<br>2. İçerik: kısa açıklama, Ana Sayfa · Hizmetler · Referanslar · İletişim bağlantıları, tıkla-ara telefonu.<br>3. Sayfa arama motoru dizinine kapalıdır.<br>4. Eski sitenin bilinen URL'leri 404'e düşmez; 301 ile yönlenir (07'deki tablo). |

## 5. İçerik yönetimi gereksinimleri (FG-130–139)

Yönetim paneli yoktur (01 §5); içerik depo içindeki dosyalardan yönetilir.

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-130 | Olmalı | İçerik türleri. | Üç içerik türü vardır: **hizmetler**, **referanslar**, **site ayarları** (01 §7). Sayfa şablonlarında firma bilgisi, hizmet maddesi veya referans verisi elle yazılmaz. |
| FG-131 | Olmalı | Yeni referans eklemek = 1 içerik dosyası + görsel(ler). | **V** şemaya uygun yeni bir referans dosyası ve görselleri eklendiğinde **Y** site yeniden üretildiğinde **O** başka hiçbir dosya değiştirilmeden: detay sayfası oluşur; liste, filtre seçenekleri, ilgili referanslar, ana sayfa referans sayısı ve site haritası güncellenir.<br>2. Alanlar §4.4'teki veri alanları tablosuyla aynıdır. Sektör ve hizmet türü yalnızca tanımlı listelerden seçilebilir. |
| FG-132 | Olmalı | Şema doğrulaması. | 1. Zorunlu alanı eksik, türü yanlış, tanımsız sektör/hizmet türü içeren veya var olmayan görsele işaret eden içerik, site üretimini **durdurur**; hata iletisi dosyayı ve alanı belirtir.<br>2. Alternatif metni olmayan içerik görseli üretimi durdurur.<br>3. Aynı slug'a sahip iki kayıt üretimi durdurur.<br>4. Hatalı içerik canlı siteye hiçbir koşulda çıkmaz. |
| FG-133 | Olmalı | Site ayarları tek kaynaktır. | Firma adı, adres, telefonlar, e-posta, WhatsApp numarası, çalışma saatleri, sosyal medya bağlantıları ve harita konumu tek bir ayar kaydındadır. **V** bir değer bu kayıtta değiştirildiğinde **O** üst bilgi, alt bilgi, iletişim sayfası, sabit çubuk ve yapısal veride aynı anda değişir. İsteğe bağlı değer boşsa ilgili öğe görünmez. |
| FG-134 | Olmalı | Hizmet içeriği yapısı. | Hizmet kaydı: ad, kısa açıklama, giriş metni, alt gruplar (ad + madde listesi), üst hizmet (yangın alt sayfaları için), eşleşen hizmet türü, sıra. Alt grup veya madde eklemek yalnızca içerik dosyasını değiştirerek yapılır. |
| FG-135 | Olmalı | Taslak durumu. | "Taslak" işaretli kayıt canlı sitede, listelerde, sayılarda ve site haritasında görünmez; önizleme dağıtımında görülebilir. |
| FG-136 | Olmalı | Yayın öncesi önizleme. | Her içerik değişikliği canlıya alınmadan önce ayrı bir önizleme adresinde görülebilir (01 §7). |
| FG-137 | Olmalı | Görsel kaydı zorunluluğu. | Sitede kullanılan her görselin görsel kayıt tablosunda kaynak, lisans ve yazar bilgisi vardır (01 §9); kayıtsız görsel sayısı = 0 (denetim yöntemi 05/08). |
| FG-138 | Olmalı | URL kalıcılığı. | Yayınlanmış bir sayfanın slug'ı değiştirilirse eski adres 301 ile yenisine yönlendirilir; yönlendirme eklenmeden slug değişikliği yayınlanmaz. |
| FG-139 | Sonra | Git tabanlı yönetim paneli. | Faz 2 (01 §5). |

## 6. Analitik ve ölçüm olayları (FG-140–149)

| Kimlik | Öncelik | Gereksinim | Kabul ölçütleri |
|---|---|---|---|
| FG-140 | Olmalı | İzne bağlı ölçüm. | 1. Analitik betiği ve olayları yalnızca "Analitik" izni verildikten sonra yüklenir/gönderilir (FG-014).<br>2. İzin yokken analitik sağlayıcısına hiçbir ağ isteği gitmez.<br>3. Analitik yüklenmese veya engellense de sitenin hiçbir işlevi bozulmaz.<br>4. Analitik aracı seçimi (GA4 / çerezsiz alternatif) AS-18. |
| FG-141 | Olmalı | Kişisel veri gönderilmez. | Olay parametrelerinde ad, telefon, e-posta, mesaj metni veya form alanı içeriği bulunmaz. |
| FG-142 | Olmalı | Dönüşüm olayları ölçülür. | Aşağıdaki tabloda "Olmalı" olan olaylar, belirtilen tetikleyicide **bir kez** gönderilir; önizleme ortamındaki olaylar canlı veriye karışmaz. |
| FG-143 | İyi olur | Yardımcı olaylar. | Tabloda "İyi olur" olan olaylar. |

| Olay (çalışma adı) | Tetikleyici | Parametreler | Öncelik |
|---|---|---|---|
| `form_submit` | Sunucu başarı yanıtı döndüğünde (FG-099) | konu, kaynak sayfa | Olmalı |
| `phone_click` | Herhangi bir telefon bağlantısına tıklama | konum (üst bilgi / sabit çubuk / iletişim / alt bilgi / içerik) | Olmalı |
| `whatsapp_click` | WhatsApp bağlantısına tıklama | konum | Olmalı |
| `email_click` | E-posta bağlantısına tıklama | konum | Olmalı |
| `cta_click` | "Teklif Al" çağrılarına tıklama | konum, kaynak sayfa | Olmalı |
| `directions_click` | "Yol tarifi al" tıklaması | — | Olmalı |
| `form_start` | Formda ilk alana ilk giriş | kaynak sayfa | İyi olur |
| `form_error` | Doğrulama hatası veya gönderim hatası | hata türü (alan adı / sunucu / sınır); alan içeriği değil | İyi olur |
| `reference_filter` | Referans filtresi değişimi | filtre adı, seçilen değer, sonuç sayısı | İyi olur |
| `not_found` | 404 sayfasının görüntülenmesi | istenen yol | İyi olur |

## 7. Fonksiyonel olmayan gereksinimler (özet)

Ayrıntı ve ölçüm yöntemi 06 (mimari) ve 08'de (test). Hedefler 01 §3 ve CLAUDE.md kalite kapılarından alınmıştır; "öneri" yazanlar bu belgenin önerisidir ve 06/08'de kesinleşir.

| Alan | Ölçüt | Hedef |
|---|---|---|
| Performans | Lighthouse mobil Performans | ≥ 90 (her sayfa şablonu) |
| Performans | Lighthouse Erişilebilirlik / En İyi Uygulamalar / SEO | ≥ 95 |
| Performans | LCP · CLS · INP | ≤ 2,5 sn · ≤ 0,1 · ≤ 200 ms |
| Performans | Görseller | AVIF/WebP, duyarlı boyutlar, ekran dışı görsellerde tembel yükleme |
| Erişilebilirlik | Uyum düzeyi | WCAG 2.2 AA; otomatik taramada kritik/ciddi ihlal = 0 |
| Erişilebilirlik | Klavye · yakınlaştırma · hareket | Tüm işlevler klavyeyle; %200 yakınlaştırma ve 320 px'te yatay kaydırma yok; "hareketi azalt" tercihi uygulanır |
| Güvenlik | Aktarım | Tüm sayfalar HTTPS; http → https yönlendirme; karışık içerik = 0 |
| Güvenlik | Başlıklar | İçerik güvenlik politikası ve temel güvenlik başlıkları tanımlı (liste 06) |
| Güvenlik | Form | Sunucu tarafı doğrulama, spam koruması, gönderim sınırı (FG-096, 101, 104); gizli anahtarlar depoda yer almaz |
| Güvenlik | Saldırı yüzeyi | Sunucu tarafında CMS/eklenti/veritabanı yok; herkese açık yönetim girişi yok |
| Tarayıcı desteği | Masaüstü (öneri) | Chrome, Edge, Firefox, Safari — son 2 ana sürüm |
| Tarayıcı desteği | Mobil (öneri) | iOS Safari ve Android Chrome — son 2 ana sürüm |
| Tarayıcı desteği | Ekran genişliği | 320 px – 1920 px arası kusursuz; daha genişte içerik ortalanır |
| Dayanıklılık | JS kapalı | Tüm içerik ve gezinme çalışır; yalnızca filtre, form gönderimi ve etkileşimli harita JS gerektirir |
| KVKK | İzin | Zorunlu olmayan çerez/izleme yalnızca açık izinle; izin öncesi yüklenen = 0 |
| KVKK | Veri azaltma | Formda yalnızca §4.5 tablosundaki alanlar; sitede kalıcı kişisel veri saklanmaz |
| KVKK | Aydınlatma | Form gönderimi öncesi aydınlatma metnine erişim ve onay (FG-097) |
| SEO | Yönlendirme | Eski URL'lerin tamamı 301 (07 tablosu); kırık iç bağlantı = 0 |
| Görsel politikası | Lisans | Lisanssız/kayıtsız görsel = 0; eski siteden taşınan görsel = 0 |

## 8. Kapsam dışı / Faz 2

| Konu | Durum | İlgili kimlik |
|---|---|---|
| İngilizce içerik ve dil değiştirici | Faz 2 (altyapı S1'de hazır) | FG-019 |
| Yönetim paneli (git tabanlı CMS) | Faz 2, ihtiyaç doğarsa | FG-139 |
| Blog/haberler, kariyer, canlı destek, müşteri paneli, çevrim içi ödeme | Kapsam dışı (01 §5) | — |
| Koyu tema, logo yeniden tasarımı | Kapsam dışı (01 §5) | — |
| Formda dosya ekleme | Faz 2 adayı | FG-108 |
| Ekip, müşteri yorumları, zaman çizelgesi | Faz 2 adayı (içerik yok) | FG-044 |
| Referansta proje büyüklüğü, ekipman markası, müşteri görüşü | Faz 2 adayı (içerik yok) | FG-081 |
| Site içi arama | Kapsam dışı (sayfa sayısı az) | — |
| Ürün kataloğu ("Ürünler" sayfaları) | Kapsam dışı; eski URL'ler yönlendirilir (envanter §8) | — |
| Form taleplerinin CRM'e/tabloya kaydı | Kapsam dışı; yalnız e-posta | FG-106 |

## 9. Açık Sorular (müşteriye sorulacak)

**E** = engelleyici (yanıt gelmeden ilgili gereksinim tamamlanamaz). Proje yöneticisi bu listeyi `docs/acik-sorular.md` dosyasına işler.

| No | Soru | Etkilediği | E |
|---|---|---|---|
| AS-01 | Resmî ticaret unvanı, sitede kullanılacak kısa ad (Axis Teknik?), vergi dairesi/no ve MERSİS no nedir? | FG-010, 040, 120 | E |
| AS-02 | WhatsApp hattı kullanılacak mı? Kullanılacaksa hangi numara — envanterdeki cep numarası (0507 201 24 25) mı, başka bir kurumsal hat mı? Bu numarada WhatsApp (Business) etkin mi? | FG-007, 008 | E |
| AS-03 | 0216 307 18 49 numarası telefon mu, faks mı? Sitede gösterilsin mi? | FG-006, 090 | |
| AS-04 | Cep numarası sitede arama numarası olarak gösterilsin mi? Birincil arama numarası pbx (0216 307 18 62) olarak doğru mu? | FG-001, 006 | E |
| AS-05 | Kişisel e-posta adresi (ad.soyad@…) sitede yayınlanmaya devam etsin mi? | FG-009 | |
| AS-06 | Kurumsal sosyal medya hesapları var mı (LinkedIn, Instagram vb.)? Bağlantıları nedir? | FG-010 | |
| AS-07 | Çalışma günleri ve saatleri nedir? Mesai dışı acil servis hattı var mı? | FG-010, 090 | |
| AS-08 | Ana sayfa sayıları: güncel tamamlanan/devam eden proje sayıları nedir? Gösterilmesini istediğiniz başka doğrulanabilir sayı var mı (çalışan sayısı, hizmet verilen il sayısı vb.)? | FG-032 | |
| AS-09 | Ana sayfada öne çıkarılacak 3–6 referans hangileri? | FG-033 | |
| AS-10 | Sahip olunan belge, yetki ve sertifikalar nelerdir (ISO, TSE hizmet yeterlilik, üretici yetkili bayiliği/servisliği, itfaiye yeterlilikleri vb.)? Belge kopyaları paylaşılabilir mi? | FG-034, 042 | |
| AS-11 | Hakkımızda: güncel vizyon/misyon metni; firmanın üretim faaliyeti var mı, yoksa yalnızca taahhüt/uygulama mı? | FG-040, 041 | E |
| AS-12 | Yangın metinlerindeki iddialar güncel ve belgelenebilir mi: VdS onaylı hidrolik hesap yazılımı kullanımı, montaj ve bakımın kendi personelinizle yapılması, tedarik edilen sistemlerin uluslararası onayları? Hangi yazılım/markalar? | FG-054 | E |
| AS-13 | 19 referans için: gerçek yıl(lar), kapsamın kısa açıklaması, işin tamamlanmış mı sürüyor mu olduğu. Eklenecek yeni referans var mı? Kordsa, Migros, Bosch ve Vehbi Koç İlköğretim Okulu kayıtları gerçek referans mı (envanter §8)? | FG-070, 076 | E |
| AS-14 | Referanslar için firmaya ait saha fotoğrafları (asılları) paylaşılabilir mi? Temsilî stok görsel kullanılan referanslarda "temsilî görsel" notu konmasını onaylıyor musunuz? | FG-077 | |
| AS-15 | Referans olarak adı geçen kurumların (özellikle marka adları ve "ABD Bağdat Hava Üssü" gibi hassas olabilecek işler) adlarının yayınlanması için izin/gizlilik kısıtı var mı? Logo kullanımı için yazılı izin alınabilecek kurum var mı? | FG-070, 076 | E |
| AS-16 | Adres güncel mi? Harita üzerindeki doğru konum (pin) ve varsa işletme harita kaydı bağlantısı nedir? | FG-090, 091 | E |
| AS-17 | Formdaki konu seçenekleri uygun mu? "Bakım / Servis" ayrı bir seçenek olarak kalsın mı; eklenecek başka konu var mı? | FG-093 | |
| AS-18 | Analitik aracı: çerez iznine bağlı GA4 mü, çerezsiz bir alternatif mi? Mevcut bir Google hesabı/GA4 mülkü var mı? | FG-016, 140 | |
| AS-19 | Çerez tercihi ne kadar süre saklansın (öneri: 6 ay)? Hukuk danışmanınızın görüşü var mı? | FG-015 | |
| AS-20 | KVKK Aydınlatma Metni ve Çerez Politikası metinlerini kim hazırlayacak/onaylayacak (hukuk danışmanı)? Form onay kutusunun metni nasıl olmalı? VERBİS kaydı var mı? | FG-097, 120, 121 | E |
| AS-21 | Taleplere hedeflenen geri dönüş süresi nedir (onay iletisinde yazılacak)? Talep sahibine otomatik onay e-postası gönderilsin mi? | FG-099, 103 | |
| AS-22 | Form bildirimleri hangi e-posta adres(ler)ine gitsin (info@axisteknik.com mu, ek alıcılar var mı)? Bu kutu düzenli izleniyor mu? | FG-102 | E |
| AS-23 | Müşterilerinizin teklif isterken dosya (şartname, proje) göndermesi gerekiyor mu? (Faz 2 önceliğini belirler.) | FG-108 | |
| AS-24 | "Firma" alanı formda zorunlu olsun mu? (Bireysel/ev tipi talepleri azaltır, ancak mevcut müşterinin hızlı talebini zorlaştırabilir.) | FG-092 | |

## 10. Varsayımlar

| No | Varsayım | Yanlışsa etkisi |
|---|---|---|
| V-01 | "Teklif Al" ayrı bir sayfa değil, `/iletisim/` sayfasındaki tek formdur (01 §6). | Form gereksinimleri ikiye bölünür. |
| V-02 | Konu ön seçimi ve referans filtreleri sorgu parametresiyle taşınır; bu, 01 §6'daki URL yapısını değiştirmez. | 07 ile kanonik adres kuralları yeniden ele alınır. |
| V-03 | Birincil arama numarası envanterde üst bantta yer alan pbx numarasıdır (AS-04 ile teyit edilecek). | Üst bilgi ve sabit çubuktaki numara değişir (yalnız site ayarı). |
| V-04 | Sektör sınıflandırması taslağı (01 §2 ve §4'ten): Endüstri ve Üretim · Sağlık · Otel ve Turizm · Kamu ve Altyapı · Lojistik ve Havacılık. Nihai liste ve referans atamaları 03'te yapılır. | Filtre seçenekleri ve ana sayfa sektör bloğu değişir; yapı aynı kalır. |
| V-05 | Referans hizmet türü sınıflandırması taslağı: Elektrik Taahhüt · Mekanik Taahhüt · Yangın Algılama · Gazlı Söndürme · Sulu Söndürme · Köpüklü Söndürme · Tasarım ve Projelendirme · Bakım ve Servis. Her tür bir hizmet sayfasıyla eşleşir (Bakım ve Servis hariç). | FG-058 eşleşmeleri ve filtre değerleri değişir. |
| V-06 | Formda "Firma" alanı isteğe bağlıdır (AS-24). | Doğrulama tablosunda tek satır değişir. |
| V-07 | Form talepleri yalnızca e-posta ile iletilir; ayrıca kayıt/arşiv tutulmaz. E-posta kutusu müşteri tarafından izlenir (01 §12: e-posta mevcut sağlayıcıda kalır). | Kayıt istenirse saklama, KVKK saklama süresi ve erişim gereksinimleri eklenir. |
| V-08 | Başlangıçta 19 referans yayınlanır; envanter §8'deki demo kayıtlar AS-13 teyidi olmadan eklenmez. | Referans sayısı ve yönlendirme tablosu değişir. |
| V-09 | Referans sayısı az olduğundan (≈ 19–30) listede sayfalama ve arama gerekmez. | 50+ kayıtta "daha fazla göster" gereksinimi eklenir. |
| V-10 | Onay metni, KVKK ve çerez metinleri müşteri/hukuk tarafından sağlanır; ekip yalnızca yapıyı ve yerleşimi hazırlar. | Yayın tarihi hukuki metin teslimine bağlanır. |
| V-11 | Çalışma saatleri, sosyal medya, belgeler ve WhatsApp bilgisi gelmezse site bu öğeler olmadan yayınlanır. | — |

## 11. Proje yöneticisine notlar

1. **Konum filtresi kapsamı.** 01 §5 "Referanslarda sektör ve hizmet türüne göre filtre" diyor; görev tanımında konum filtresi de istendi. Konum filtresini FG-072 olarak **İyi olur** önceliğiyle yazdım. S1'e alınacaksa 01 §5 güncellenmeli.
2. **Yangından korunma kalemlerinin yeri.** Envanterde "Yangından Koruma Sistemleri" Mekanik Taahhüt altında, "Yangın Algılama ve Alarm" ise Elektrik › Zayıf Akım altında. 01 §6 Mekanik'i "HVAC, sıhhi tesisat" olarak tanımlayıp yangını ayrı grup yaptığı için söndürme kalemlerini Yangın Sistemleri sayfasına taşıdım, Mekanik sayfasında çapraz bağlantı bıraktım (FG-053, FG-055). Yangın algılama maddesinin Elektrik sayfasında da kalıp kalmayacağı 03'te netleşmeli.
3. **Yangın algılama için alt sayfa yok.** 01 §6'da yalnızca üç söndürme alt sayfası var; oysa referansların önemli bir kısmının başlığında "Yangın Algılama" geçiyor. Algılama şimdilik genel yangın sayfasında bir bölüm (FG-053). Ayrı alt sayfa isteniyorsa 01 §6'ya eklenmeli.
4. **Bakım/servis sayfası yok.** Konumlandırma (01 §2) "bakım"ı sayıyor ve birkaç referans bakım işi; site haritasında bakım sayfası yok. Bakımı formda konu seçeneği ve referans hizmet türü olarak ele aldım (FG-093, V-05); karşılık gelen hizmet sayfası olmadığı için FG-058 eşleşmesi dışında kalıyor.
5. **Çerez bandı ↔ analitik kararı.** 01 §7 analitik seçimini müşteriye bırakıyor. Çerezsiz araç seçilirse bant gereksizleşebilir (FG-016). Ayrıca Turnstile ve gömülü harita da üçüncü taraf hizmetidir; Turnstile'ı "zorunlu" kategorisinde, haritayı tıklayınca yüklenen içerik olarak varsaydım (FG-091, FG-101). Hukuki sınıflandırma teyit edilmeli; 06 bu varsayımı bilmeli.
6. **EN URL düzeni tanımsız.** 01 "altyapı hazır olacak" diyor ama İngilizce adres düzenini (ör. `/en/…`) belirlemiyor. FG-018 yalnızca "TR URL'leri değişmez" koşulunu koyuyor; düzen 01 veya 06'da kararlaştırılmalı.
7. **Açık sorular dosyası.** `docs/acik-sorular.md` sizin belgeniz olduğu için dokunmadım; §9'daki 24 sorunun (10'u engelleyici) oraya aktarılması gerekiyor.
8. **Ana sayfa sayıları.** Envanterdeki sayaçlar (19 tamamlanan / 2 devam eden) 2020'den kalma. Referans sayısını içerikten otomatik hesaplattım, doğrulanmayan sayıyı gizledim (FG-032); doğrulama gelmezse blok yalnızca kuruluş yılı + referans sayısıyla çıkar.
9. **Referans adlarının yayın izni.** 01 §9 logo ve tesis fotoğrafını izne bağlıyor ama kurum **adlarının** metin olarak kullanımına değinmiyor. Yurt dışı askerî tesis gibi kayıtlar için AS-15'i engelleyici olarak işaretledim.
10. **Kabul ölçütlerindeki sayısal öneriler** (gönderim sınırı 10 dk/3, tarayıcı sürümleri, çerez tercihi 6 ay) bu belgenin önerisidir; 06 ve 08 sahipleri kesinleştirmeli.
