# 01 — Proje Özeti, Kapsam ve Ortak Kararlar

**Sahibi:** Proje Yöneticisi · **Durum:** Taslak v1 (müşteri onayı bekliyor) · **Tarih:** 14 Kasım 2026

Bu belge ekibin ortak zeminidir. Diğer tüm gereksinim belgeleri buradaki kararlarla uyumlu olmak zorundadır; çelişki olursa bu belge geçerlidir.

## 1. Proje tanımı

Axis Teknik'in (axisteknik.com) 2020'den beri güncellenmeyen WordPress sitesinin yerine; güncel teknolojiyle, profesyonel bir arayüzle ve lisanslı/kaliteli görsellerle sıfırdan kurumsal bir web sitesi yapılacaktır. Mevcut sitedeki **gerçek** içerik (firma bilgileri, hizmet listeleri, 19 referans, yangın sistemleri metinleri) korunup düzeltilerek taşınır; tema demo kalıntıları taşınmaz.

Kaynak: `docs/kaynak/mevcut-site-icerik-envanteri.md`

## 2. Firma konumlandırması

Mevcut site firmayı tutarsız anlatıyor (envanter §11). Yeni sitede konumlandırma:

> **Endüstriyel tesisler, hastaneler, oteller ve kamu yapıları için elektrik–mekanik taahhüt ve yangın algılama/söndürme sistemleri: tasarım, uygulama, devreye alma ve bakım.**

- Site bir **B2B kurumsal tanıtım ve teklif toplama** sitesidir; e-ticaret veya ev tipi arıza servisi sitesi değildir.
- Çalışma adı: **Axis Teknik** (logodaki ad). Resmî unvan müşteriden teyit edilecek.
- Yangın sistemleri, referansların çoğunu oluşturduğu için menüde ayrı bir hizmet grubu olarak öne çıkarılır.

## 3. Hedefler ve başarı ölçütleri

| Hedef | Ölçüt |
|---|---|
| Güven veren profesyonel görünüm | Müşteri onayı; tutarlı tasarım sistemi; lisanssız görsel sayısı = 0 |
| Teklif/iletişim talebi toplamak | Her sayfadan en çok 1 tıkla arama veya form; form gönderimi ölçülür |
| Mobilde hızlı | Lighthouse mobil Performans ≥ 90, diğer üç kategori ≥ 95; LCP ≤ 2,5 sn, CLS ≤ 0,1, INP ≤ 200 ms |
| Erişilebilir | WCAG 2.2 AA |
| Aramada bulunabilir | Her sayfada benzersiz başlık/açıklama, yapısal veri, site haritası; eski URL'lerin tamamı 301 ile yönlenir |
| Bakımı kolay ve güvenli | Sunucu tarafında güncellenecek CMS/eklenti yok; içerik dosya tabanlı |

## 4. Hedef kitle

1. **Satın alma / teknik müdür** (fabrika, hastane, otel, lojistik): yeterlilik ve referans arar, teklif ister.
2. **Ana yüklenici / proje firması**: alt yüklenici arar; hizmet kapsamı ve benzer projelere bakar.
3. **Mevcut müşteri**: bakım/servis için telefon ve adres arar (çoğunlukla mobilde).

## 5. Kapsam

### Kapsam içi (Sürüm 1)
- Sayfalar: Ana Sayfa, Hakkımızda, Hizmetler (genel + 4 grup + yangın alt sayfaları), Referanslar (liste + 19 detay), İletişim/Teklif, KVKK Aydınlatma Metni, Çerez Politikası, 404.
- İletişim/teklif formu (e-posta bildirimi, spam koruması, KVKK onayı).
- Tıkla-ara, WhatsApp, e-posta, harita/yol tarifi.
- Referanslarda sektör ve hizmet türüne göre filtre.
- SEO altyapısı, yapısal veri, eski URL yönlendirmeleri.
- Onaya bağlı analitik (çerez izni ile).
- Duyarlı (mobil öncelikli) tasarım, açık tema. 
- Yeni görsel seti (lisanslı stok + müşteriden gelecek saha fotoğrafları).

### Kapsam dışı (Sürüm 1)
- İngilizce sürüm (altyapı hazır olacak, içerik Faz 2).
- Blog/haberler, kariyer sayfası, canlı destek, müşteri paneli, çevrim içi ödeme.
- Yönetim paneli (CMS). İçerik depo içindeki dosyalardan yönetilir; ihtiyaç doğarsa Faz 2'de git tabanlı CMS eklenir.
- Logo yeniden tasarımı (mevcut logo vektöre çevrilip temizlenir; yeni logo ayrı iştir).
- Koyu tema.

## 6. Site haritası ve URL yapısı (bağlayıcı)

```
/                                         Ana Sayfa
/hakkimizda/                              Hakkımızda
/hizmetler/                               Hizmetler (genel)
/hizmetler/elektrik-taahhut/              Elektrik Taahhüt (OG, AG, zayıf akım, otomasyon)
/hizmetler/mekanik-taahhut/               Mekanik Taahhüt (HVAC, sıhhi tesisat)
/hizmetler/yangin-sistemleri/             Yangın Algılama ve Söndürme Sistemleri (genel)
/hizmetler/yangin-sistemleri/yangin-algilama/   (K-01)
/hizmetler/yangin-sistemleri/gazli-sondurme/
/hizmetler/yangin-sistemleri/sulu-sondurme/
/hizmetler/yangin-sistemleri/kopuklu-sondurme/
/hizmetler/tasarim-ve-projelendirme/      Tasarım ve Projelendirme
/referanslar/                             Referanslar (filtreli liste)
/referanslar/[slug]/                      Referans detayı (19 adet)
/iletisim/                                İletişim ve Teklif Formu
/kvkk-aydinlatma-metni/
/cerez-politikasi/
/404
```

Ana menü: **Hizmetler ▾ · Referanslar · Hakkımızda · İletişim** + sağda belirgin **"Teklif Al"** düğmesi ve telefon.

Kurallar: küçük harf, Türkçe karakter yok, tire ile ayrım, sonda eğik çizgi. "Servislerimiz" ifadesi kullanılmaz; her yerde "Hizmetler".

## 7. Teknoloji kararları (bağlayıcı)

| Katman | Karar | Gerekçe |
|---|---|---|
| Çatı | **Astro** (statik üretim), TypeScript (strict) | İçerik ağırlıklı kurumsal site; varsayılan olarak sıfır JS, en yüksek hız; WordPress'in güvenlik/bakım yükü yok |
| Stil | **Tailwind CSS** + tasarım belirteçleri (CSS değişkenleri) | Tutarlı tasarım sistemi, küçük CSS |
| Etkileşim | Gerektiği yerde Astro adaları (filtre, mobil menü, form) — çatı bağımsız/vanilla TS | Gereksiz JS yok |
| İçerik | Astro Content Collections (Markdown/MDX + Zod şeması): hizmetler, referanslar, site ayarları | Tip güvenli, sürüm kontrollü içerik |
| Görseller | Astro görsel işleme: AVIF/WebP, duyarlı `srcset`, tembel yükleme | Performans |
| Barındırma | **Cloudflare Pages** (CDN, otomatik HTTPS, önizleme dağıtımları) | Ücretsiz katman yeterli, Türkiye'de hızlı |
| Form | Sunucusuz işlev (Pages Functions) + işlemsel e-posta servisi + Cloudflare Turnstile | Sunucu bakımı yok, spam koruması |
| Analitik | Çerez iznine bağlı GA4 (veya çerezsiz bir alternatif — müşteri kararı) | KVKK uyumu |
| Kalite | ESLint, Prettier, Vitest, Playwright, axe-core, Lighthouse CI; GitHub Actions | Otomatik kalite kapıları |
| Araçlar | Node.js LTS, pnpm, Git (GitHub) | Standart |

Sürüm numaraları belgelerde sabitlenmez; geliştirme başlangıcında her aracın **güncel kararlı sürümü** kurulur ve `package.json` ile kilitlenir.

## 8. Tasarım yönü (özet — ayrıntı 04'te)

- Mühendislik/endüstri firmasına yakışan sade, güven veren, ferah bir arayüz. Renkler logodan türetilir (kırmızı–turuncu–mavi); temanın sarısı (#edb820) bırakılır.
- Açılış "Loading" ekranı ve otomatik dönen tam ekran slider **yok**; yerine tek, net bir kahraman (hero) alanı.
- Her sayfada görünür iletişim çağrısı.

## 9. Görsel politikası (bağlayıcı — ayrıntı 05'te)

1. Mevcut sitedeki görsellerin **hiçbiri** taşınmaz (telif ve kalite — envanter §9).
2. İzin verilen kaynaklar: (a) müşterinin kendi saha fotoğrafları, (b) ticari kullanıma açık lisanslı stok (Unsplash, Pexels vb. veya satın alınmış), (c) ekibin ürettiği vektör çizim/ikonlar.
3. Müşteri kurum logoları ve tesis fotoğrafları **yazılı izin olmadan** kullanılmaz; referans kartları varsayılan olarak sektörü temsil eden lisanslı görsel + metinle tasarlanır.
4. Her görselin kaynağı, lisansı ve yazarı `görsel kayıt tablosunda` tutulur.

## 10. Ekip ve sorumluluklar

| Rol | Ajan tanımı | Sahip olduğu belgeler |
|---|---|---|
| Proje Yöneticisi | `.claude/agents/proje-yoneticisi.md` | 01, 09, `acik-sorular.md` |
| İş Analisti | `.claude/agents/is-analisti.md` | 02 |
| İçerik ve SEO Uzmanı | `.claude/agents/icerik-seo-uzmani.md` | 03, 07 |
| UI/UX Tasarımcı | `.claude/agents/ui-ux-tasarimci.md` | 04, 05 |
| Yazılım Geliştirici / Mimar | `.claude/agents/yazilim-gelistirici.md` | 06 |
| Test Mühendisi | `.claude/agents/test-muhendisi.md` | 08 |

## 11. Aşamalar

| Faz | İçerik | Çıktı |
|---|---|---|
| **0 — Gereksinim** (şu an) | İçerik envanteri, gereksinim belgeleri | `docs/` klasörü, müşteri onayı |
| 1 — Tasarım | Görsellerin seçimi, tel kafes ve yüksek çözünürlüklü ekranlar | Onaylı tasarım |
| 2 — Geliştirme | Proje iskeleti, bileşenler, sayfalar, içerik girişi, form | Önizleme sitesi |
| 3 — Test | İşlevsel, görsel, erişilebilirlik, performans, SEO testleri | Test raporu |
| 4 — Yayın | Alan adı geçişi, yönlendirmeler, izleme | Canlı site |

Ayrıntılı iş paketleri: `09-yol-haritasi-ve-is-paketleri.md`.

## 12. Karar kaydı

| No | Tarih | Karar | Gerekçe / kaynak |
|---|---|---|---|
| K-01 | 14.11.2026 | Site haritasına **`/hizmetler/yangin-sistemleri/yangin-algilama/`** (Yangın Algılama ve Alarm Sistemleri) alt sayfası eklendi. | Referansların çoğu algılama içeriyor; yalnız söndürme alt sayfaları vardı (02 notu 3). |
| K-02 | 14.11.2026 | Yangın kalemlerinin asıl içeriği Yangın Sistemleri sayfalarındadır. Mekanik › Yangından Koruma ve Elektrik › Zayıf Akım › Yangın Algılama maddeleri listede kalır, ilgili yangın sayfasına bağlantı verir. | Tek içerik kaynağı, iki giriş noktası (02 notu 2). |
| K-03 | 14.11.2026 | Bakım ve periyodik kontrol ayrı sayfa değildir. Yangın Sistemleri genel sayfasında bölüm, formda konu seçeneği ve referanslarda hizmet türü etiketi olarak yer alır. | Kapsamı büyütmemek (02 notu 4). |
| K-04 | 14.11.2026 | Referans filtresi S1'de **sektör + hizmet türü**; konum filtresi "İyi olur" (FG-072), zaman kalırsa eklenir. | 02 notu 1. |
| K-05 | 14.11.2026 | Çerezsiz analitik seçilirse çerez bandı yalnızca gerekirse gösterilir; karar müşteri yanıtına (analitik tercihi) bağlıdır. Turnstile zorunlu kategori, harita tıklayınca yüklenir. | 02 notu 5; hukuki teyit açık soru. |
| K-06 | 14.11.2026 | İngilizce sürüm (Faz 2) `/en/...` önekiyle yayımlanır; Türkçe URL'ler değişmez. | 02 notu 6. |
| K-07 | 14.11.2026 | Referans **kurum adları** da yayın öncesi müşteriyle teyit edilir (özellikle kamu/askerî tesisler). Teyit edilmeyen kayıt yayımlanmaz. | 02 notu 9; 01 §9'un kapsamı genişletildi. |
| K-08 | 14.11.2026 | Ana sayfa referans sayısı içerikten otomatik hesaplanır; doğrulanmamış sayılar (ör. "devam eden proje") gösterilmez. | 02 notu 8. |

## 13. Varsayımlar ve riskler

- **Varsayım:** Alan adı (axisteknik.com) ve DNS yönetimi müşteridedir ve geçişe izin verilir.
- **Varsayım:** Kurumsal e-posta (info@axisteknik.com) mevcut sağlayıcıda kalır; yalnızca web barındırması taşınır. DNS geçişinde MX kayıtlarına dokunulmaz.
- **Risk:** Müşteriden gerçek saha fotoğrafı gelmezse site tümüyle stok görsele dayanır → özgünlük azalır. Önlem: 05'teki çekim listesi müşteriye erken iletilir.
- **Risk:** Referans bilgileri (tarih, kapsam) doğrulanmazsa detay sayfaları zayıf kalır. Önlem: `acik-sorular.md` ilk toplantıda kapatılır; doğrulanmayan alan sayfada gösterilmez.
- **Risk:** Eski URL'ler yönlendirilmezse arama sıralaması kaybı. Önlem: 07'deki yönlendirme tablosu yayın kapısıdır.
