# 06 — Teknik Mimari

**Sahibi:** Yazılım Geliştirici / Mimar · **Durum:** Taslak v1 (müşteri onayı bekliyor) · **Tarih:** 14 Kasım 2026

Bu belge, `01-proje-ozeti-ve-kapsam.md` §3 (kalite hedefleri), §6 (URL yapısı) ve §7 (teknoloji kararları) ile uyumludur; çelişki olursa 01 geçerlidir. Faz 0 belgesidir: uygulama kodu ve proje iskeleti Faz 2'de bu belgeye göre kurulur.

**Okuma kuralı:** "(D)" işareti, ilgili API/yapılandırma adının veya servis sınırının **geliştirme başında resmî belgelerden doğrulanacağı** anlamına gelir. Bu belgedeki kod parçaları mekanizmayı gösteren taslaklardır, kopyalanacak son kod değildir.

---

## 1. Mimari özeti ve gerekçe

Site, derleme anında tümüyle statik HTML/CSS'e dönüştürülür (Astro, statik çıktı) ve Cloudflare Pages üzerinden CDN'den sunulur. Çalışma anında sunucu tarafında çalışan tek parça iletişim formunu işleyen sunucusuz işlevdir (Pages Function). Veritabanı, yönetim paneli ve oturum yoktur. İçerik depo içindeki Markdown/YAML dosyalarıdır; şemayla doğrulanır.

Projenin belirleyici koşulları: (a) içerik çok seyrek değişiyor (eski site 2020'den beri güncellenmemiş), (b) eski sitenin asıl sorunu güncellenmeyen çekirdek/eklenti kaynaklı güvenlik ve bakım yükü (envanter §10), (c) hedef kitle çoğunlukla mobilde ve hız ölçütü sıkı (01 §3), (d) sayfa sayısı küçük (~35 sayfa).

| Ölçüt | Astro (statik) — **seçilen** | WordPress | Next.js | Hazır site kurucu (Wix vb.) |
|---|---|---|---|---|
| Çalışma anı saldırı yüzeyi | Yalnızca 1 işlev (form) | PHP + veritabanı + eklentiler + giriş sayfası | Sunucu/edge çalışma zamanı (statik dışa aktarımda azalır) | Sağlayıcıya bağlı |
| Bakım yükü | Yılda birkaç bağımlılık güncellemesi; güncellenmese de site güvenli kalır | Sürekli çekirdek/eklenti/tema güncellemesi; yapılmazsa bugünkü durum | Çatı sürüm geçişleri sık ve kapsamlı | Düşük, ama kontrol yok |
| İstemciye giden JS | Varsayılan sıfır; yalnız adalar | Tema/eklentiye bağlı, genelde yüksek | React çalışma zamanı her sayfada | Yüksek, denetlenemez |
| 01 §3 hız hedefi | Rahat karşılanır | Ek önbellek/optimizasyon eklentisi gerekir | Karşılanabilir, daha çok çaba ister | Garanti edilemez |
| İçerik düzenleme | Dosya + Git (teknik olmayan kullanıcı için §18 akışı; Faz 2'de git tabanlı CMS seçeneği) | Panel (en kolay) | Dosya veya ayrı CMS | Panel (kolay) |
| Maliyet / bağımlılık | Barındırma ücretsiz katman; çıktı taşınabilir düz dosya | Barındırma + bakım emeği | Benzer; platform özelliklerine bağlanma riski | Sürekli abonelik; taşınamaz |
| Bu proje için sonuç | İçerik ağırlıklı, az etkileşimli siteye tam uyum | Panel avantajı, seyrek güncellenen sitede bakım yükünü karşılamıyor | Uygulama benzeri sitelere uygun; burada gereksiz karmaşıklık | Performans, SEO ve yönlendirme denetimi yetersiz |

Kabul edilen ödünleşim: yönetim paneli yok (01 §5 kapsam dışı). İçerik değişikliği bir dosya düzenlemesi ve otomatik yayın demektir (§18.1).

---

## 2. Sistem şeması

```
                         ┌──────────────────────── Cloudflare ────────────────────────┐
 Ziyaretçi tarayıcısı    │                                                            │
 ───────────────────     │  DNS + CDN/TLS ──► Pages (statik çıktı: HTML, CSS, JS,     │
  GET /hizmetler/ ──────►│                    AVIF/WebP, woff2, _redirects, _headers) │
                         │                                                            │
  POST /api/contact ────►│  Pages Function (functions/api/contact.ts)                 │
   (form alanları +      │    1. Origin/Content-Type/boyut denetimi                   │
    Turnstile belirteci) │    2. Bal küpü alanı                                       │
                         │    3. Şema doğrulama (Zod)                                 │
                         │    4. Turnstile siteverify ──► challenges.cloudflare.com   │
                         │    5. E-posta API çağrısı ───────────────┐                 │
                         │    6. 303 /iletisim/tesekkurler/ veya JSON│                 │
                         └───────────────────────────────────────────┼────────────────┘
                                                                     ▼
  Turnstile betiği ◄── challenges.cloudflare.com        İşlemsel e-posta servisi (HTTPS API)
  (yalnız /iletisim/)                                                │  SPF/DKIM: gönderim alt alan adı
                                                                     ▼
  Analitik betiği ◄── yalnızca izin verildikten sonra      Firma gelen kutusu (CONTACT_TO_EMAIL)
  (izin yoksa istek ve çerez yok)                          — veri başka hiçbir yerde saklanmaz
```

```
 CI/CD
 Geliştirici ─► özellik dalı ─► Pull Request ─┬─► GitHub Actions: lint · tip · birim · derleme · e2e · a11y
                                              │                    · Lighthouse CI · bağlantı denetimi
                                              └─► Cloudflare Pages: önizleme dağıtımı (PR'a özel URL, noindex)
               PR onayı + tüm kapılar yeşil ─► main'e birleştirme ─► Cloudflare Pages: üretim dağıtımı
               Sorun ─► Pages panelinden önceki dağıtıma geri alma (§15.4)
```

---

## 3. Teknoloji yığını

**Sürüm kuralı (01 §7):** Bu belgede sürüm numarası sabitlenmez. Geliştirme başında her aracın **güncel kararlı sürümü** kurulur, `package.json` ve `pnpm-lock.yaml` ile kilitlenir. Node.js için **güncel LTS** kullanılır; sürüm `.nvmrc` ve `package.json > engines` içinde tutulur, CI ve Cloudflare derleme ortamı aynı sürüme ayarlanır (D).

### 3.1 01 §7 ile belirlenmiş kararlar

| Katman | Karar | Uygulama notu |
|---|---|---|
| Çatı | Astro (statik üretim), TypeScript strict | `output: 'static'`; Astro'nun "strict" (veya daha sıkı) tsconfig ön ayarı (D). SSR bağdaştırıcısı **kurulmaz** |
| Stil | Tailwind CSS + tasarım belirteçleri | §7. Tailwind'in güncel sürümündeki kurulum biçimi (Vite eklentisi, CSS içi tema tanımı) (D) |
| Etkileşim | Astro adaları, vanilla TS | UI çatısı (React/Vue/Svelte vb.) eklenmez; §8 |
| İçerik | Content Collections + Zod | Koleksiyon tanım dosyasının konumu ve yükleyici (loader) API'si (D); §5 |
| Görseller | Astro görsel işleme | `astro:assets` (`Image`/`Picture`) (D); §9 |
| Barındırma | Cloudflare Pages | §15; bkz. §20 not 1 |
| Form | Pages Functions + işlemsel e-posta + Turnstile | §10 |
| Analitik | İzne bağlı GA4 veya çerezsiz alternatif | Müşteri kararı (Açık Soru 6); §13 |
| Kalite | ESLint, Prettier, Vitest, Playwright, axe-core, Lighthouse CI, GitHub Actions | §15.3 |
| Araçlar | Node.js LTS, pnpm, Git (GitHub) | Yalnız pnpm; `npm`/`yarn` kilit dosyası depoya girmez |

### 3.2 Önerilen yardımcı araçlar

| İhtiyaç | Öneri | Not |
|---|---|---|
| Tip denetimi | `astro check` (`@astrojs/check`) + `tsc --noEmit` (functions için) | (D) |
| Lint eklentileri | `eslint-plugin-astro`, `typescript-eslint`, `eslint-plugin-jsx-a11y` (Astro desteğiyle) | (D) |
| Biçimlendirme | `prettier-plugin-astro`, `prettier-plugin-tailwindcss` | Sınıf sırası otomatik |
| İkon | Depoda tutulan SVG dosyaları (`src/assets/icons/`), derlemede satır içi SVG üreten tek bir `Icon.astro` bileşeni | İkon yazı tipi ve CDN yok. İkon seti seçimi ve lisansı 04/05'ten gelir |
| Yazı tipi | Kendi sunucumuzdan woff2 (değişken yazı tipi tercih edilir) | Dosya kaynağı: Fontsource paketi veya Astro'nun yazı tipi API'si — hangisinin kararlı olduğu (D); §7.3 |
| Site haritası | `@astrojs/sitemap` | §13 |
| JSON-LD tipleri | `schema-dts` | Derleme anında tip güvenli yapısal veri |
| Sunucu doğrulama | `zod` (işlev içinde doğrudan bağımlılık) | İstemci ve işlev aynı şemayı `src/lib/contact-schema.ts` üzerinden paylaşır |
| İşlev tipleri/yerel çalıştırma | `wrangler`, Cloudflare Workers tip paketi | (D) |
| a11y testi | `@axe-core/playwright` | |
| HTML doğrulama | `html-validate` (derleme çıktısı üzerinde) | Yinelenen `id`, eksik `alt` vb. |
| Bağlantı denetimi | `lychee` veya `linkinator` (derleme çıktısı üzerinde) | Biri seçilir (D) |
| Bağımlılık güncelleme | Dependabot veya Renovate | §11.2 |
| Commit denetimi | `commitlint` + basit git kancası (`lefthook` veya `husky`) | §17.3 |

Yeni bağımlılık ekleme kuralı: istemciye giden her paket için gzip boyutu PR açıklamasına yazılır; aynı iş ≤ ~50 satır kendi kodumuzla yapılabiliyorsa paket eklenmez.

---

## 4. Depo ve klasör yapısı

```
axis-teknik-web/
├─ .github/
│  ├─ workflows/            ci.yml (PR + main), scheduled.yml (haftalık bağlantı/Lighthouse)
│  ├─ dependabot.yml | renovate.json
│  └─ pull_request_template.md
├─ docs/                    gereksinimler/, kaynak/, acik-sorular.md
├─ functions/
│  ├─ api/contact.ts        POST /api/contact
│  ├─ _lib/                 turnstile.ts, email.ts, responses.ts (rota üretmeyen yardımcılar) (D)
│  └─ tsconfig.json
├─ public/                  işlenmeden kopyalananlar
│  ├─ _redirects            eski URL → yeni URL (kaynak: 07)
│  ├─ _headers              güvenlik ve önbellek başlıkları
│  ├─ robots.txt  favicon.svg  apple-touch-icon.png  site.webmanifest
│  └─ og/                   varsayılan Open Graph görseli
├─ src/
│  ├─ pages/
│  │  ├─ index.astro  hakkimizda.astro  404.astro
│  │  ├─ hizmetler/index.astro  hizmetler/[...slug].astro
│  │  ├─ referanslar/index.astro  referanslar/[slug].astro
│  │  ├─ iletisim/index.astro  iletisim/tesekkurler.astro   (bkz. §20 not 2)
│  │  └─ [legal].astro      /kvkk-aydinlatma-metni/, /cerez-politikasi/
│  ├─ layouts/              BaseLayout.astro, PageLayout.astro, LegalLayout.astro
│  ├─ components/
│  │  ├─ ui/                Button, Card, Badge, Icon, Breadcrumb, FormField …  (durumsuz, JS'siz)
│  │  ├─ sections/          Hero, ServiceGroupList, ReferenceGrid, StatBand, ContactCta, Header, Footer …
│  │  ├─ islands/           MobileMenu, ReferenceFilter, ContactForm, CookieConsent, Gallery, MapEmbed
│  │  └─ seo/               Seo.astro, JsonLd.astro
│  ├─ content/
│  │  ├─ services/tr/       *.md  (yangın alt sayfaları: yangin-sistemleri/*.md)
│  │  ├─ references/tr/     *.md  (19 kayıt)
│  │  ├─ legal/tr/          kvkk-aydinlatma-metni.md, cerez-politikasi.md
│  │  └─ site/              settings.yaml, taxonomy.yaml (enum etiketleri)
│  ├─ content.config.ts     koleksiyon şemaları (dosya adı/konumu (D))
│  ├─ assets/
│  │  ├─ images/            services/, references/, sectors/, general/  (kaynak görseller)
│  │  ├─ icons/             *.svg
│  │  └─ fonts/             *.woff2 (paketten gelmiyorsa)
│  ├─ styles/               tokens.css (belirteçler), global.css (Tailwind girişi + temel katman)
│  ├─ i18n/                 tr.ts (arayüz metinleri), index.ts
│  ├─ lib/                  seo.ts, jsonld.ts, routes.ts, taxonomy.ts, contact-schema.ts, format.ts
│  └─ env.d.ts
├─ tests/
│  ├─ unit/                 *.test.ts  (Vitest: lib, şema, işlev mantığı)
│  ├─ e2e/                  *.spec.ts  (Playwright: gezinme, filtre, form, yönlendirmeler)
│  ├─ a11y/                 *.spec.ts  (axe: her şablondan en az bir sayfa + tüm durumlar)
│  └─ fixtures/
├─ astro.config.ts  tsconfig.json  eslint.config.js  prettier.config.js
├─ playwright.config.ts  vitest.config.ts  lighthouserc.json
├─ .nvmrc  .editorconfig  .gitignore  .dev.vars.example  package.json  pnpm-lock.yaml
└─ CLAUDE.md  README.md
```

**Adlandırma kuralları**

| Öge | Kural | Örnek |
|---|---|---|
| Bileşen dosyası | PascalCase `.astro` | `ReferenceCard.astro` |
| Ada betiği | Bileşenle aynı klasörde, kebab-case `.ts` | `islands/reference-filter.ts` |
| `lib`, test, yapılandırma | kebab-case | `contact-schema.ts`, `contact-form.spec.ts` |
| Sayfa dosyaları ve içerik slug'ları | 01 §6: küçük harf, Türkçe karakter yok, tire | `gazli-sondurme.md` |
| Görsel dosyası | `konu-aciklama-sıra.uzantı`, küçük harf, tire, Türkçe karakter yok | `sector-healthcare-01.jpg` |
| TS tipleri / değişkenler / sabitler | PascalCase / camelCase / UPPER_SNAKE_CASE | `ReferenceEntry`, `serviceTypes`, `MAX_MESSAGE_LENGTH` |
| CSS değişkeni | `--kategori-ad-kademe` | `--color-brand-600` |
| Ortam değişkeni | UPPER_SNAKE_CASE; istemciye açık olanlar `PUBLIC_` önekli | §11.3 |

İçe aktarma takma adı: `@/` → `src/`. Bileşenler arası bağımlılık yönü: `pages → layouts → sections → ui`; `ui` bileşeni `sections` veya içerik koleksiyonu içe aktarmaz.

---

## 5. İçerik modeli

Tüm içerik `src/content/` altındadır ve derlemede Zod şemasıyla doğrulanır; şemaya uymayan içerik derlemeyi kırar (yayına çıkamaz). Dil hazırlığı için içerik baştan `tr/` alt klasöründedir (§14). **Enum değerleri taslaktır**; kesin taksonomi `03-icerik-ve-bilgi-mimarisi.md` belgesinden gelir ve tek yerde (`src/lib/taxonomy.ts` + etiketler `site/taxonomy.yaml`) tanımlanır.

Ortak alt şemalar:

| Alt şema | Alanlar |
|---|---|
| `imageField` | `src` (zorunlu; `src/assets/images` altındaki dosya, şemada görsel yardımcı işleviyle doğrulanır (D)) · `alt` (zorunlu, 5–160 karakter; yalnız dekoratif görselde `decorative: true` ile birlikte boş olabilir) · `caption` (ops.) · `credit` (ops.; lisans gerektiriyorsa) · `registryId` (zorunlu; 05'teki görsel kayıt tablosu kimliği — 01 §9.4) |
| `seoField` | `title` (ops., ≤ 60 karakter; yoksa sayfa başlığından üretilir) · `description` (zorunlu, 70–160 karakter) · `ogImage` (ops., `imageField`) · `noindex` (ops., varsayılan `false`) · `canonical` (ops.) |

### 5.1 `services`

Her **sayfa** bir kayıttır (toplam 8: 4 grup + 4 yangın alt sayfası — `yangin-algilama` (K-01), `gazli-sondurme`, `sulu-sondurme`, `kopuklu-sondurme`). Envanterde yangın algılama için hazır metin yoktur (yalnız §5.1 Zayıf Akım maddeleri); sayfa metni 03'ten gelir. Hiyerarşi: sayfa (grup) → `sections[]` (alt grup) → `items[]` (madde). Envanter §5'teki madde listeleri `sections/items` içine, yangın metinleri (§5.4) Markdown gövdesine girer.

| Alan | Tip | Zorunlu | Açıklama |
|---|---|---|---|
| `title` | string | evet | Sayfa H1'i. Ör. "Elektrik Taahhüt" |
| `navLabel` | string | hayır | Menüde farklı/kısa ad gerekiyorsa |
| `slug` | string | evet | URL parçası; 01 §6 ile birebir (`elektrik-taahhut`, `yangin-algilama`, `gazli-sondurme` …) |
| `parent` | `reference('services')` | hayır | Yalnız yangın alt sayfalarında: `yangin-sistemleri`. En çok 1 düzey |
| `order` | number | evet | Menü ve liste sırası |
| `summary` | string (≤ 200) | evet | Kart ve liste özeti |
| `icon` | string (ikon adı) | evet | `src/assets/icons/` içinde var olmalı (şemada denetlenir) |
| `heroImage` | `imageField` | evet | |
| `sections` | dizi | hayır | Alt gruplar; her biri: `id` (çapa için slug), `title`, `intro` (ops.), `items[]` |
| `sections[].items[]` | dizi | — | `label` (zorunlu), `description` (ops.), `link` (ops., `reference('services')` — ör. Mekanik › Yangından Koruma maddelerinin yangın alt sayfalarına bağlanması) |
| `referenceServiceTypes` | `ServiceType[]` | hayır | Bu sayfada otomatik listelenecek referansların hizmet türleri |
| `featuredReferences` | `reference('references')[]` | hayır | Elle seçilmiş ilgili referanslar (otomatik listenin önüne geçer; en çok 6) |
| `cta` | `{ heading, text }` | hayır | Sayfaya özel çağrı metni; yoksa genel |
| `seo` | `seoField` | evet | |
| `draft` | boolean | hayır | `true` ise üretimde sayfa oluşturulmaz |
| gövde | Markdown | hayır | Giriş ve açıklama metni (03'ten) |

Hizmetler genel sayfası (`/hizmetler/`) koleksiyondan üretilen bir liste sayfasıdır; kendi metni `site/settings.yaml > pages.services` altında tutulur.

### 5.2 `references`

| Alan | Tip | Zorunlu | Açıklama |
|---|---|---|---|
| `title` | string | evet | Düzeltilmiş başlık (03) |
| `slug` | string | evet | `/referanslar/[slug]/`; kesin slug'lar 03/07'de |
| `client` | string | evet | Müşteri/kurum adı (düz metin; logo kullanılmaz — 01 §9.3) |
| `summary` | string (≤ 200) | evet | Kart özeti; envanterde açıklama olmadığından 03, yalnız başlıktaki olgudan üretir |
| `scope` | string[] | hayır | Yapılan işin kalemleri; **yalnız müşteri doğrularsa** doldurulur |
| `sector` | enum (tek) | evet | Aşağıdaki taslak |
| `serviceTypes` | enum[] (≥ 1) | evet | Aşağıdaki taslak |
| `country` | string | evet | Ör. "Türkiye", "Irak", "Gürcistan" |
| `city` | string | hayır | Tek şehir yoksa boş |
| `locationNote` | string | hayır | Ör. "Türkiye geneli" (kayıt 2 ve 19) |
| `startYear`, `endYear` | number (4 hane) | hayır | `endYear ≥ startYear` şemada denetlenir |
| `datesVerified` | boolean | evet (varsayılan `false`) | `false` iken tarih **hiçbir yerde gösterilmez** ve JSON-LD'ye girmez (01 §12). Envanterdeki 2016–2019 değerleri doğrulanana dek `false` |
| `status` | enum `completed` \| `ongoing` | hayır (varsayılan `completed`) | "2 devam eden proje" hangileri belli değil (Açık Soru 11) |
| `featured` | boolean | hayır | Ana sayfada gösterim |
| `order` | number | evet | Liste sırası (küçük önce) |
| `cover` | `imageField` | evet | Varsayılan: sektörü temsil eden lisanslı görsel |
| `gallery` | `imageField[]` | hayır | Yalnız izinli/müşteriye ait fotoğraflar; boşsa galeri bölümü çizilmez |
| `legacyPath` | string | hayır | Eski sitedeki yol (ör. `/dhl/`). Test, her `legacyPath` için `_redirects` içinde 301 kuralı olduğunu doğrular |
| `seo` | `seoField` | evet | |
| `draft` | boolean | hayır | |
| gövde | Markdown | hayır | Müşteri onaylı proje açıklaması gelirse |

**Enum taslakları (kesin değil — 03'e bağlanacak):**

| Enum | Taslak anahtarlar (etiketler `taxonomy.yaml` içinde Türkçe) |
|---|---|
| `sector` | `industry` (Sanayi ve Üretim) · `healthcare` (Sağlık) · `hospitality` (Otel ve Turizm) · `energy-utilities` (Enerji ve Altyapı) · `telecom-it` (Telekom ve Bilişim) · `logistics-aviation` (Lojistik ve Havacılık) · `public-defense` (Kamu ve Savunma) |
| `serviceTypes` | `fire-detection` (Yangın Algılama) · `gas-suppression` (Gazlı Söndürme) · `water-suppression` (Sulu Söndürme) · `foam-suppression` (Köpüklü Söndürme) · `electrical` (Elektrik Taahhüt) · `mechanical` (Mekanik Taahhüt) · `infrastructure` (Altyapı) · `maintenance` (Bakım ve Servis) · `design` (Tasarım ve Proje) |

Hangi referansın hangi sektöre girdiği envanterde yazmaz; atamayı içerik uzmanı yapar, belirsiz olanlar müşteriye sorulur. Filtre arayüzünde yalnızca en az bir kaydı olan değerler gösterilir.

**Örnek kayıt** (envanter §6 satır 13 ve §3 slider bilgisi; başka olgu eklenmemiştir) — `src/content/references/tr/ergani-devlet-hastanesi.md`:

```yaml
---
title: "Ergani Devlet Hastanesi Otomatik Gazlı Söndürme Sistemleri"
slug: "ergani-devlet-hastanesi"        # kesin slug 03/07'de
client: "Ergani Devlet Hastanesi"
summary: "Ergani Devlet Hastanesi için otomatik gazlı söndürme sistemleri."
sector: "healthcare"                   # taslak atama
serviceTypes: ["gas-suppression"]
country: "Türkiye"
city: "Diyarbakır"
startYear: 2016                        # envanterdeki değer; doğrulanmadı
endYear: 2019
datesVerified: false                   # → sayfada tarih gösterilmez
featured: true                         # eski ana sayfa slider'ında yer alıyordu; 03 karar verir
order: 13
cover:
  src: "@/assets/images/sectors/sector-healthcare-01.jpg"   # 05'te seçilecek lisanslı görsel
  alt: "…"                             # 05'te yazılacak; boş bırakılamaz
  registryId: "…"
legacyPath: "/ergani-devlet-hastanesi/"
seo:
  description: "…"                     # 07'de yazılacak
---
```

Diğer 18 kayıt aynı kalıba oturur: `scope` ve gövde boş, `gallery` boş, `datesVerified: false`. "Türkiye Geneli" (kayıt 2) ve "Türkiye" (kayıt 19) şehir değerleri `city` yerine `locationNote` alanına girer.

### 5.3 `site` ayarları (`src/content/site/settings.yaml`, tek kayıt)

| Alan | Tip | Zorunlu | Açıklama |
|---|---|---|---|
| `brandName` | string | evet | "Axis Teknik" (01 §2) |
| `legalName` | string | hayır | Resmî unvan — müşteriden (Açık Soru 12); boşsa gösterilmez |
| `tagline`, `description` | string | evet | Varsayılan meta ve alt bilgi metni (03) |
| `foundingYear` | number | evet | 2010 (envanter §1) |
| `address` | nesne | evet | `street`, `district`, `city`, `postalCode` (ops.), `country` |
| `phones[]` | dizi (≥ 1) | evet | `label`, `e164` (`+90…`), `display`, `type` (`landline`\|`mobile`\|`fax`), `primary` (bool), `whatsapp` (bool) |
| `emails[]` | dizi (≥ 1) | evet | `label`, `address`, `primary`. Kişisel adresin yayımlanıp yayımlanmayacağı müşteri kararı (envanter §11.9) |
| `openingHours[]` | dizi | hayır | `days[]`, `opens`, `closes`; boşsa arayüz ve JSON-LD'de yer almaz |
| `social[]` | dizi | hayır | `platform` (enum), `url`; boşsa simgeler çizilmez |
| `geo` | `{ lat, lng }` | hayır | Harita ve JSON-LD için; müşteri teyidiyle |
| `map` | `{ directionsUrl, embedUrl }` | hayır | "Yol tarifi" bağlantısı ve tıklayınca yüklenen gömme adresi |
| `stats[]` | dizi | hayır | `key`, `label`, `value`, `verified` (bool). **Yalnız `verified: true` olanlar gösterilir** (envanter §11.7: sayaçlar güncel değil) |
| `navigation` | nesne | evet | `cta` (etiket + hedef); menü ögeleri `services` koleksiyonundan türetilir |
| `pages` | nesne | evet | Koleksiyon dışı sayfaların (ana sayfa, hakkımızda, hizmetler genel, referanslar, iletişim) `seoField` ve kısa metin alanları |
| `analytics` | nesne | hayır | `provider` (`ga4`\|`cookieless`\|`none`); kimlik ortam değişkeninden |

Envanterde bulunan değerler (adres, 3 telefon, 2 e-posta, kuruluş yılı) girilir; `0(216)307 18 49` numarasının türü belirsiz olduğundan müşteri teyidine kadar yayımlanmaz (Açık Soru 12).

### 5.4 `legal`

| Alan | Tip | Zorunlu | Açıklama |
|---|---|---|---|
| `title` | string | evet | |
| `slug` | enum | evet | `kvkk-aydinlatma-metni` \| `cerez-politikasi` (01 §6) |
| `lastUpdated` | date | evet | Sayfada "Son güncelleme" olarak gösterilir |
| `version` | string | hayır | Çerez izni sürümüyle eşleşir; değişince izin yeniden sorulur |
| `seo` | `seoField` | evet | |
| gövde | Markdown | evet | Metin müşterinin hukuk danışmanınca onaylanır; ekip hukuki metin uydurmaz |

---

## 6. Yönlendirme ve sayfa üretimi

| Rota | Kaynak | Üretim |
|---|---|---|
| `/`, `/hakkimizda/`, `/iletisim/`, `/referanslar/`, `/hizmetler/` | `src/pages/*.astro` + `site` ayarları | Statik |
| `/hizmetler/[grup]/`, `/hizmetler/yangin-sistemleri/[alt]/` | `hizmetler/[...slug].astro` + `getStaticPaths` (`parent` zincirinden yol) | Koleksiyondan, 8 sayfa (yangın alt sayfaları: `yangin-algilama`, `gazli-sondurme`, `sulu-sondurme`, `kopuklu-sondurme`) |
| `/referanslar/[slug]/` | `referanslar/[slug].astro` + `getStaticPaths` | Koleksiyondan, 19 sayfa |
| `/kvkk-aydinlatma-metni/`, `/cerez-politikasi/` | `[legal].astro` | Koleksiyondan |
| `/iletisim/tesekkurler/` | Statik, `noindex`, site haritası dışı | §20 not 2 |
| `/404` | `404.astro` → `404.html` | Pages, eşleşmeyen yollarda 404 durum koduyla sunar (D) |
| `/api/contact` | `functions/api/contact.ts` | Yalnız POST; diğer yöntemler 405 |

- **Sondaki eğik çizgi:** `trailingSlash: 'always'`, `build.format: 'directory'` (D). Tüm iç bağlantılar `src/lib/routes.ts` içindeki yardımcılarla üretilir; elle yazılmış yol kullanılmaz. Eğik çizgisiz istek Pages tarafından eğik çizgili sürüme yönlendirilir; durum kodu ve tek sıçrama olduğu e2e ile doğrulanır (D).
- **Kurallılık (canonical):** her sayfada mutlak, eğik çizgili, tek ana makine adlı `rel="canonical"`.
- **Eski URL yönlendirmeleri:** `public/_redirects` dosyası (Cloudflare Pages) (D). **Tablonun tek kaynağı 07 belgesidir**; geliştirici satırları oradan aktarır, kendisi hedef belirlemez. Kurallar: hepsi `301`; belirli kurallar joker kurallardan önce yazılır (eşleşme sırası (D)); zincir yok (eski → nihai adres tek sıçrama). Biçim örneği:

  ```
  /hizmetlerimiz/                    /hizmetler/                      301
  /elektrik-taahhut-cozumlerimiz/    /hizmetler/elektrik-taahhut/     301
  /dhl/                              /referanslar/<07'deki-slug>/     301
  /portfolios/*                      /referanslar/                    301
  ```

  Kural sayısı sınırı (statik/dinamik) geliştirme başında doğrulanır (D); bu sitede beklenen sayı < 100. `/wp-admin/`, `/wp-login.php`, `/xmlrpc.php`, `/wp-content/*` gibi WordPress yolları yönlendirilmez, 404 döner (07 aksi karar vermedikçe).
- **Doğrulama:** `tests/e2e/redirects.spec.ts`, 07 tablosunun makinece okunur kopyasındaki (ör. `tests/fixtures/redirects.csv`) her satırı önizleme ortamında ister; durum 301, hedef 200 ve tek sıçrama olmalıdır. Bu test yayın kapısıdır (01 §12).
- **`www` / çıplak alan adı ve http→https:** Tek kurallı ana makine adı kullanılır; öneri mevcut dizinlenmiş adres olan `https://www.axisteknik.com` (nihai karar 07). Diğer ad ana ada 301 ile yönlenir. Bu, `_redirects` ile **yapılamaz** (yalnız yol eşler); Cloudflare bölge düzeyinde yönlendirme kuralı gerekir, dolayısıyla DNS bölgesinin Cloudflare'de olmasına bağlıdır (D; §16 Yol A/B). HTTPS, Cloudflare'de "her zaman HTTPS" ayarı + HSTS ile zorlanır. `*.pages.dev` adresleri ve önizlemeler `X-Robots-Tag: noindex` başlığı alır (`_headers` içinde makine adına özel kural (D)).

---

## 7. Stil mimarisi

### 7.1 Belirteç akışı

```
04 belgesindeki belirteç tablosu  →  src/styles/tokens.css  (:root CSS değişkenleri)
                                  →  Tailwind teması (değişkenlere eşleme)
                                  →  bileşenlerde yalnız Tailwind sınıfları
```

- `tokens.css` tek doğruluk kaynağıdır: renk (`--color-*`), yazı (`--font-*`, `--text-*`, `--leading-*`), boşluk (`--space-*`), köşe (`--radius-*`), gölge (`--shadow-*`), kırılım, hareket süresi (`--duration-*`), z-ekseni. **Değerler 04'ten gelir; bu belge değer tanımlamaz.**
- Tailwind teması bu değişkenlere bağlanır. Güncel Tailwind'de bunun CSS içi tema bloğuyla mı yapılandırma dosyasıyla mı yapılacağı (D). Taslak:

  ```css
  /* tokens.css */  :root { --color-brand-600: /* 04 */; --radius-md: /* 04 */; }
  /* global.css */  @theme { --color-brand-600: var(--color-brand-600); }  /* sözdizimi (D) */
  ```
- Tailwind'in varsayılan renk paleti kapatılır; yalnız belirteçlerden gelen adlar kullanılabilir. Bileşenlerde keyfî değer (`text-[#123456]`, `mt-[13px]`) ESLint kuralıyla yasaktır.
- Anlamsal belirteçler (ör. `--color-text`, `--color-surface`, `--color-focus-ring`) ham paletten türetilir; bileşenler anlamsal adları kullanır. Koyu tema kapsam dışıdır, ancak bu katman ileride eklenmesini mümkün kılar.

### 7.2 CSS kuralları

- Bileşen stili Tailwind sınıflarıyla; tekrar eden kalıplar `ui/` bileşeni olarak soyutlanır (`@apply` yalnız Markdown gövdesi gibi sınıf verilemeyen içerikte, `prose` benzeri tek bir katmanda).
- Tek CSS dosyası, harici olarak sunulur (satır içi `<style>` yok → CSP'de `'unsafe-inline'` gerekmez; ilgili derleme ayarı (D)).
- Odak göstergesi tüm etkileşimli ögelerde görünür (WCAG 2.2 — 2.4.11); `prefers-reduced-motion` altında geçişler kapatılır; dokunma hedefi en az 24×24 CSS px (tasarım hedefi 04'e göre).

### 7.3 Yazı tipleri

- Yazı tipi ailesi 04'ten gelir. Dosyalar **kendi alan adımızdan** woff2 olarak sunulur; Google Fonts veya başka CDN'e istek atılmaz (gizlilik + hız).
- Alt küme: Latin + Latin Extended-A (Türkçe `ğ Ğ ı İ ş Ş ö ü ç` kapsanmalı). `unicode-range` ile bölünmüş dosyalar; Türkçe karakterlerin doğru dosyada olduğu görsel regresyon testinde "İıĞğŞşÖöÜüÇç" örnek metniyle doğrulanır.
- En çok 2 aile; tercihen değişken yazı tipi (tek dosyada tüm ağırlıklar). Toplam bütçe §12.
- `font-display: swap`; yedek yazı tipi için ölçü eşitleme (`size-adjust`, `ascent-override`) ile CLS önlenir. Yalnız ekranın üst kısmında kullanılan birincil dosya `<link rel="preload" as="font" type="font/woff2" crossorigin>` ile önceden yüklenir.
- Yazı tipi dosyaları içerik karmalı adla ve uzun süreli, değişmez önbellek başlığıyla sunulur.

---

## 8. İstemci tarafı etkileşim stratejisi

İlke: her sayfa JavaScript kapalıyken okunabilir, gezilebilir ve iletişime geçilebilir olmalıdır. JS yalnızca deneyimi iyileştirir. UI çatısı yoktur; adalar, bileşenin yanında duran küçük vanilla TS modülleridir (özel öge veya `data-*` ile bağlanan betik).

| Parça | JS'siz davranış (temel) | JS ile iyileştirme | Yükleme zamanı |
|---|---|---|---|
| Üst menü (masaüstü) | Saf HTML/CSS; "Hizmetler" alt menüsü `:focus-within`/`:hover` ile açılır, üst öge `/hizmetler/` bağlantısıdır | `aria-expanded`, Esc ile kapama | Sayfa yüklenince, küçük |
| Mobil menü | `<details>` tabanlı açılır menü veya alt bilgideki tam gezinme çapasına bağlantı (seçim 04'e göre) | Odak tuzağı, arka plan kaydırma kilidi, Esc | Sayfa yüklenince |
| Referans filtresi | Filtreler gerçek bağlantılardır: `/referanslar/?sektor=…&hizmet=…`. JS yokken tüm 19 kart listelenir ve filtre denetimleri `<noscript>` dışında gizlenmez ama "tümü" durumunda kalır; liste kısa olduğundan tam liste kabul edilebilir temel deneyimdir | URL parametresini okuyup kartları `hidden` ile süzer, `history.pushState` ile URL'yi günceller, sonuç sayısını `aria-live` ile duyurur; geri/ileri çalışır; filtreli URL paylaşılabilir | Yalnız `/referanslar/` |
| İletişim formu | Yerel `<form method="post" action="/api/contact">`; HTML5 doğrulama öznitelikleri; başarıda 303 ile teşekkür sayfası, hatada işlevin döndürdüğü sade hata sayfası | `fetch` ile gönderim, alan bazlı hata iletileri, gönderim sırasında düğme durumu, girdiler korunur | Yalnız `/iletisim/`; görünür olunca |
| Turnstile | Betiği üçüncü taraftır ve JS gerektirir → JS tümüyle kapalıysa form gönderilemez; `<noscript>` içinde telefon, e-posta ve WhatsApp bağlantıları gösterilir (§20 not 3) | — | Yalnız `/iletisim/` |
| Çerez izni | Bant çizilmez; analitik zaten yüklenmez (izin yok = izleme yok) | Bant, tercih paneli, izin kaydı | Boşta (idle) |
| Galeri | Küçük resimler tam boy görsele giden bağlantılardır | Klavye ve dokunma destekli ışık kutusu (`<dialog>`) | Yalnız galerisi olan referans sayfası; görünür olunca |
| Harita | Adres metni + "Yol tarifi al" bağlantısı + statik yer tutucu | Düğmeye basınca `iframe` yüklenir (§11.5) | Tıklayınca |
| Tıkla-ara / WhatsApp / e-posta | `tel:`, `https://wa.me/…`, `mailto:` bağlantıları | — | JS yok |

**Filtre parametre sözleşmesi (K-04):** S1'de `sektor` ve `hizmet`; konum filtresi "iyi olur" önceliğindedir — eklenirse `ulke` parametresi aynı sözleşmeyle gelir, veri (`country`) şemada zaten vardır; değerler Türkçe karakter içermeyen URL anahtarlarıdır (ör. `?sektor=saglik&hizmet=gazli-sondurme`); anahtar ↔ enum eşlemesi `taxonomy.yaml` içinde tutulur. Bilinmeyen değer yok sayılır. Filtreli URL'ler `rel="canonical"` ile `/referanslar/` adresini gösterir.

**JS bütçesi** (birinci taraf, gzip): filtresiz/formsuz sayfalarda ≤ 10 KB; hiçbir sayfada ≤ 30 KB. Üçüncü taraf betik yalnızca Turnstile (`/iletisim/`) ve izin sonrası analitiktir. Bütçe CI'da derleme çıktısı ölçülerek zorlanır (§12).

Astro'nun istemci tarafı sayfa geçişleri (view transitions/istemci yönlendirici) kullanılmaz: ek JS ve erişilebilirlik riski getirir, bu sitede gerek yoktur.

---

## 9. Görsel işleme hattı

1. **Kaynak:** 05'te onaylanan görsel, özgün çözünürlükte (uzun kenar ≥ 2400 px önerilir; en çok ~4000 px) `src/assets/images/` altına konur ve görsel kayıt tablosuna işlenir. Kayıtsız görsel kabul edilmez (`registryId` şemada zorunlu). `public/` altına içerik görseli konmaz (işlenmez).
2. **Dönüşüm:** Derlemede Astro görsel hizmeti (`<Picture>`) AVIF + WebP üretir, son yedek JPEG'dir (D). Kalite ayarları ilk gerçek görsellerle görsel karşılaştırma yapılarak belirlenir.
3. **Duyarlı genişlikler:** bileşen başına sabit genişlik kümeleri ve doğru `sizes`:

   | Kullanım | Genişlikler (px) | `sizes` (taslak; 04 ızgarasına göre kesinleşir) |
   |---|---|---|
   | Hero | 640, 960, 1280, 1920 | `100vw` |
   | Kart kapağı | 320, 480, 640, 960 | `(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw` |
   | Galeri küçük resmi / tam boy | 320, 480 / 960, 1600 | ızgaraya göre / `100vw` |

4. **LCP önceliği:** her şablonda LCP adayı (genellikle hero) `loading="eager"`, `fetchpriority="high"` alır; CSS arka plan görseli olarak verilmez. Gerekirse `<link rel="preload" as="image" imagesrcset …>`.
5. **Tembel yükleme:** ekranın altındaki tüm görseller `loading="lazy"`, `decoding="async"`.
6. **CLS:** her görselde `width`/`height` (Astro yerel görsellerde otomatik üretir) veya `aspect-ratio`; oranlar 04'te sabitlenir (ör. kart kapağı tek oran).
7. **Boyut bütçeleri:** §12.
8. **Alt metin:** şemada zorunlu (§5). `Image`/`Picture` doğrudan değil, `alt` vermeyi zorunlu kılan sarmalayıcı `ui/Img.astro` üzerinden kullanılır; ham `<img>` ESLint ile yasaktır. Dekoratif görsel `alt=""` + `decorative: true`.
9. **Open Graph görseli:** sayfa başına 1200×630 JPEG; yoksa `public/og/default.jpg`.
10. **Logo ve ikonlar:** SVG, satır içi; logo vektörü 04/05'ten gelir.
11. **Önbellek:** işlenmiş görseller içerik karmalı adla çıkar → uzun süreli, değişmez önbellek.

---

## 10. İletişim formu mimarisi

Form alanlarının kesin listesi 02 ve 04'ten gelir. Aşağıdaki şema teknik taslaktır.

### 10.1 İstek akışı (`POST /api/contact`)

1. **Ön denetimler:** yöntem POST; `Origin` üretim/önizleme makine adlarından biri; `Content-Type` `application/x-www-form-urlencoded`, `multipart/form-data` veya `application/json`; gövde ≤ 16 KB. Aksi → 4xx.
2. **Bal küpü:** ekran okuyuculardan ve klavyeden gizlenmiş (`tabindex="-1"`, `autocomplete="off"`, görsel olarak gizli sarmalayıcı `aria-hidden`) `website` alanı doluysa → istemciye başarı yanıtı verilir, e-posta **gönderilmez**.
3. **Zaman tuzağı (ops.):** formun çizilmesiyle gönderim arası < 3 sn ise bal küpüyle aynı davranış (yalnız JS açıkken eklenen alanla; JS'siz gönderimi engellemez).
4. **Şema doğrulama** (Zod; `src/lib/contact-schema.ts`, istemciyle ortak).
5. **Turnstile:** `cf-turnstile-response` belirteci Cloudflare `siteverify` uç noktasına gizli anahtarla gönderilir; başarısızsa 400. Uç nokta adresi, yanıt alanları ve belirteç ömrü (D).
6. **E-posta:** servis API'sine `fetch` ile tek çağrı (SDK yok; zaman aşımı ~8 sn).
7. **Yanıt:** `Accept: application/json` ise JSON (`{ ok: true }` / `{ ok: false, code, fieldErrors }`); değilse başarıda `303 → /iletisim/tesekkurler/`, hatada durum koduyla sade, kendi kendine yeten Türkçe HTML hata sayfası (ileti + "forma dön" bağlantısı + telefon).

### 10.2 Doğrulama şeması (taslak)

| Alan (`name`) | Kural |
|---|---|
| `name` | zorunlu, 2–100 karakter |
| `company` | isteğe bağlı, ≤ 150 |
| `email` | zorunlu, geçerli e-posta, ≤ 254 |
| `phone` | isteğe bağlı, ≤ 20; rakam, boşluk, `+ ( ) -` |
| `topic` | isteğe bağlı enum (hizmet grupları + "diğer"; değerler 02/03'ten) |
| `message` | zorunlu, 10–3000 karakter |
| `kvkkConsent` | zorunlu, işaretli olmalı (aydınlatma metnini okudum beyanı; metin 03/hukuk) |
| `website` | bal küpü; boş olmalı |
| `cf-turnstile-response` | zorunlu |

Tüm metinler kırpılır; satır sonu ve denetim karakterleri başlık alanlarına (konu, yanıt adresi) girmeden önce temizlenir (başlık enjeksiyonu önlemi). E-posta gövdesi düz metin + kaçışlanmış basit HTML'dir; kullanıcı girdisi HTML olarak yorumlanmaz. Dosya eki S1'de yoktur.

### 10.3 Hız sınırlama

| Seçenek | Değerlendirme |
|---|---|
| Cloudflare WAF hız sınırlama kuralı (`/api/contact`, IP başına) | **Tercih edilen**: kod yok, kişisel veri bizim tarafımızda tutulmaz. Bölgenin Cloudflare'de olmasını gerektirir; ücretsiz katmandaki kural sayısı/sınırları (D) |
| Workers hız sınırlama bağlaması (binding) | Pages Functions'ta kullanılabilirliği (D) |
| KV sayacı | Yedek seçenek. IP düz metin saklanmaz: `HMAC(IP, RATE_LIMIT_SALT)` + kısa TTL. Yine de KVKK açısından geçici işleme sayılır; aydınlatma metnine yansıtılır |

**Kesin eşik:** IP başına 10 dakikada **3** gönderim (iş analistinin önerisi benimsendi); aşımda 429 + Türkçe ileti. Eşik, başarılı ve başarısız tüm POST isteklerini sayar; değer yapılandırmadan değiştirilebilir olmalıdır. WAF kuralının bu pencere/sayıyı ücretsiz katmanda destekleyip desteklemediği (D); desteklemiyorsa KV sayacına geçilir.

### 10.4 E-posta servisi

| Seçenek | Artı | Eksi / doğrulanacak |
|---|---|---|
| **Resend** | Basit HTTP API, alt alan adından gönderim, ücretsiz katman | Katman sınırları, veri konumu, sözleşme koşulları (D) |
| **Postmark** | İşlemsel e-postada teslim edilebilirlik itibarı | Ücretsiz katmanın kapsamı (D) |
| Brevo | Ücretsiz katman | Pazarlama odaklı ürün; işlemsel API ayrı yapılandırılır (D) |
| Amazon SES | Çok düşük maliyet | Hesap/sandbox onayı ve kurulum karmaşık; bu ölçek için fazla |
| Cloudflare'in kendi e-posta gönderim ürünü | Tek sağlayıcı | Genel kullanıma açık olup olmadığı ve koşulları (D) |

**Öneri:** Resend veya Postmark; seçim geliştirme başında güncel ücretsiz katman, veri işleme sözleşmesi ve teslim testine göre yapılır. E-posta katmanı `functions/_lib/email.ts` içinde tek arayüzün (`sendContactEmail(payload)`) arkasındadır; sağlayıcı değişimi tek dosyadır.

- **Gönderen alan adı:** kök alan adının mevcut e-posta kayıtlarına dokunmamak için ayrı bir alt alan adı (taslak: `bildirim.axisteknik.com`) doğrulanır; **SPF ve DKIM** kayıtları yalnız bu alt alan adına eklenir, DMARC hizalaması sağlanır. Kök alan adının SPF/MX/DMARC kayıtları **değiştirilmez** (§16).
- **Başlıklar:** `From: Axis Teknik Web Formu <CONTACT_FROM_EMAIL>` · `To: CONTACT_TO_EMAIL` · `Reply-To:` ziyaretçinin e-postası · konu: `[Web Formu] <konu> — <ad>`.
- Ziyaretçiye otomatik yanıt e-postası S1'de **gönderilmez** (kötüye kullanılarak üçüncü kişilere istenmeyen e-posta yollanmasını önlemek için); teşekkür sayfası yeterlidir.

### 10.5 Hata yönetimi

| Durum | Kod | Kullanıcıya |
|---|---|---|
| Alan hatası | 400 | Alan bazlı ileti (JS) / hata sayfası (JS'siz) |
| Turnstile başarısız/süresi dolmuş | 400 | "Doğrulama başarısız, yeniden deneyin" + bileşen sıfırlanır |
| Hız sınırı | 429 | "Çok sayıda deneme; birkaç dakika sonra deneyin veya arayın" |
| E-posta servisi hatası/zaman aşımı | 502 | "Mesaj iletilemedi" + telefon ve e-posta bağlantısı; girdiler korunur |
| Beklenmeyen | 500 | Genel ileti + telefon |

Yeniden deneme: e-posta çağrısı ağ hatasında en çok 1 kez yinelenir. Kuyruk ya da kalıcı saklama **yoktur**; iletilemeyen mesaj kaybolur, bu yüzden hata iletisinde alternatif kanal her zaman gösterilir.

### 10.6 Kişisel veri, KVKK ve günlükler

- Form verisi **hiçbir yerde saklanmaz** (veritabanı, KV, dosya, analitik yok); yalnız e-posta olarak iletilir. Saklama süresi ve silme yükümlülüğü firmanın gelen kutusu için geçerlidir (aydınlatma metninde belirtilir).
- Veri, işleme sırasında Cloudflare (işlev, Turnstile) ve e-posta servisi üzerinden geçer; bunlar yurt dışında yerleşik veri işleyenlerdir. **Yurt dışına aktarım** hükümlerinin değerlendirilmesi ve aydınlatma metnine yansıtılması müşterinin hukuk danışmanının işidir (Açık Soru 9); ekip hukuki görüş vermez.
- **Günlükler:** yalnız olay türü (`validation_failed`, `turnstile_failed`, `email_failed`, `sent`), HTTP durumu, zaman ve istek kimliği yazılır. Ad, e-posta, telefon, mesaj, IP ve tam istek gövdesi **asla** `console.*` ile yazılmaz; birim testi günlük çıktısında kişisel veri bulunmadığını doğrular. E-posta servisinin kendi gönderim günlüklerinin saklama süresi en kısa ayara getirilir (D).
- Analitikte form olayı yalnız "gönderildi" bilgisidir; alan içeriği gönderilmez.
- İşlev yanıtlarında `Cache-Control: no-store`.

---

## 11. Güvenlik

### 11.1 HTTP başlıkları (`public/_headers`; işlev yanıtlarında kodla)

| Başlık | Değer (taslak) |
|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` — önce kısa süre (ör. 1 gün) ile başlanır, sorun yoksa uzatılır. `includeSubDomains` ve `preload`, firmanın tüm alt alan adlarının HTTPS desteklediği teyit edilmeden **eklenmez** (Açık Soru 3) |
| `Content-Security-Policy` | aşağıda |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()` (D: güncel yönerge adları) |
| `X-Frame-Options` | `DENY` (CSP `frame-ancestors 'none'` ile birlikte) |
| `Cross-Origin-Opener-Policy` | `same-origin` |

CSP taslağı (önce `Content-Security-Policy-Report-Only` ile önizlemede denenir, sonra zorlanır):

```
default-src 'self';
script-src 'self' https://challenges.cloudflare.com [ANALİTİK_BETİK_KAYNAĞI];
style-src 'self';
img-src 'self' data: [ANALİTİK_GÖRSEL_KAYNAĞI];
font-src 'self';
connect-src 'self' [ANALİTİK_UÇ_NOKTALARI];
frame-src https://challenges.cloudflare.com [HARİTA_GÖMME_KAYNAĞI];
form-action 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none';
upgrade-insecure-requests
```

- Köşeli ayraçlı yer tutucular, seçilen analitik (Açık Soru 6) ve harita sağlayıcısına göre o sağlayıcının güncel CSP belgesinden doldurulur (D).
- `'unsafe-inline'` ve `'unsafe-eval'` kullanılmaz. Bunun için: satır içi betik ve stil üretilmez (Astro'nun küçük betik/stil dosyalarını satır içine alma ayarları kapatılır (D)); zorunlu kalırsa karma (hash) kullanılır — Astro'nun CSP desteğinin durumu (D). JSON-LD veri bloğudur, yürütülmez.
- Turnstile için gereken kaynak listesi Cloudflare belgelerinden doğrulanır (D).

### 11.2 Bağımlılık güncelleme politikası

- Dependabot/Renovate: güvenlik güncellemeleri hemen PR açar; yama/küçük sürümler haftalık gruplanmış tek PR; büyük sürümler ayrı PR ve elle inceleme. Tüm PR'lar aynı CI kapılarından geçer.
- `pnpm audit` CI'da çalışır; **üretim** bağımlılıklarında yüksek/kritik bulgu birleştirmeyi engeller.
- Kilit dosyası depodadır; CI `pnpm install --frozen-lockfile` kullanır. GitHub Actions eylemleri sürüm etiketine değil commit SHA'sına sabitlenir.
- Çalışma anı bağımlılığı hedefi: işlevde yalnız `zod`.

### 11.3 Gizli anahtar yönetimi ve ortam değişkenleri

Değerler depoya yazılmaz. Yerelde `.dev.vars` (gitignore'da; şablonu `.dev.vars.example`), önizleme ve üretimde Cloudflare Pages proje ayarlarında **ortam başına ayrı** tutulur. Önizleme ortamı ayrı Turnstile anahtarı ve test alıcı adresi kullanır.

| Ad | Tür | Nerede | Açıklama |
|---|---|---|---|
| `PUBLIC_SITE_URL` | açık | derleme | Kurallı kök adres (canonical, sitemap, OG) |
| `PUBLIC_TURNSTILE_SITE_KEY` | açık | derleme | Turnstile site anahtarı |
| `PUBLIC_ANALYTICS_PROVIDER` | açık | derleme | `ga4` \| `cookieless` \| `none` |
| `PUBLIC_ANALYTICS_ID` | açık | derleme | Ölçüm kimliği/belirteci; boşsa analitik kodu çıktıya girmez |
| `TURNSTILE_SECRET_KEY` | **gizli** | işlev | Turnstile sunucu anahtarı |
| `EMAIL_API_KEY` | **gizli** | işlev | E-posta servisi API anahtarı (yalnız gönderim yetkili) |
| `CONTACT_TO_EMAIL` | yapılandırma | işlev | Bildirimlerin gideceği adres(ler) |
| `CONTACT_FROM_EMAIL` | yapılandırma | işlev | Doğrulanmış gönderen adresi |
| `ALLOWED_ORIGINS` | yapılandırma | işlev | Kabul edilen `Origin` listesi |
| `RATE_LIMIT_SALT` | **gizli** | işlev | Yalnız KV tabanlı hız sınırlama seçilirse |
| `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` | **gizli** | GitHub Actions | Yalnız dağıtım CI'dan yapılırsa (§15.2) |
| `LHCI_GITHUB_APP_TOKEN` | **gizli** | GitHub Actions | İsteğe bağlı; Lighthouse CI durum bildirimi |

Kurallar: API belirteçleri en az yetkiyle üretilir; ekipten biri ayrıldığında veya sızıntı şüphesinde döndürülür; GitHub'da gizli anahtar taraması ve itme koruması açılır; `PUBLIC_` öneki olmayan değişken istemci koduna içe aktarılamaz (tip düzeyinde `env.d.ts` ile ayrılır).

### 11.4 Üçüncü taraf betik politikası

İzin verilenler yalnızca: (1) Turnstile — yalnız `/iletisim/` sayfasında; (2) seçilen analitik — yalnız izin sonrası (çerezsiz seçenekte 03/hukuk kararına göre). Bunların dışında CDN'den yazı tipi, ikon, kütüphane, sohbet aracı, sosyal medya gömmesi, etiket yöneticisi (GTM) **yoktur**; ekleme isteği proje yöneticisi kararı ve CSP güncellemesi gerektirir.

### 11.5 Harita gömme (gizlilik dostu)

Sayfa yüklenirken harita sağlayıcısına hiçbir istek gitmez. Statik yer tutucu (lisansı 05'te kayıtlı görsel veya çizim) + adres metni + "Yol tarifi al" bağlantısı (yeni sekme) gösterilir. "Haritayı göster" düğmesine basılınca `iframe` eklenir (`loading="lazy"`, `referrerpolicy="no-referrer"`, anlamlı `title`); düğme yanında "harita üçüncü taraf sağlayıcıdan yüklenir" bilgisi verilir. Sağlayıcı seçimi ve yer tutucunun lisans koşulları geliştirme başında doğrulanır (D).

### 11.6 Diğer

- Yönetim arayüzü, giriş sayfası, veritabanı yok → eski sitedeki `xmlrpc.php`/giriş yüzeyi tümüyle ortadan kalkar.
- GitHub: `main` korumalı dal (zorunlu PR, zorunlu durum denetimleri, zorla itme kapalı); hesaplarda iki adımlı doğrulama. Cloudflare hesabında iki adımlı doğrulama; hesap **müşteri adına** açılır, ekip üye olarak eklenir (Açık Soru 2).
- `security.txt` isteğe bağlıdır (iletişim adresi müşteriden).

---

## 12. Performans bütçesi

Ölçüm: Lighthouse CI, mobil öykünme, önizleme derlemesi üzerinde, her şablondan bir sayfa (ana sayfa, hizmet grubu, yangın alt sayfası, referans listesi, referans detayı, iletişim, yasal). Aktarım boyutları sıkıştırılmış (gzip/brotli) ölçülür.

| Ölçüt | Bütçe | Zorlama |
|---|---|---|
| Lighthouse mobil Performans | ≥ 90 (01 §3) | LHCI — birleştirmeyi engeller |
| Lighthouse Erişilebilirlik / En İyi Uygulamalar / SEO | ≥ 95 (01 §3) | LHCI — engeller |
| LCP | ≤ 2,5 sn (01 §3) | LHCI (laboratuvar) + yayın sonrası saha verisi |
| CLS | ≤ 0,1 (01 §3) | LHCI |
| INP | ≤ 200 ms (01 §3) | Saha verisi; laboratuvarda vekil ölçüt TBT ≤ 150 ms |
| Toplam sayfa ağırlığı (ilk yükleme, mobil) | ≤ 600 KB; galerili referans detayında ≤ 900 KB | LHCI kaynak bütçesi |
| HTML (belge başına) | ≤ 40 KB | LHCI |
| Birinci taraf JS | ≤ 10 KB (filtre/form olmayan sayfa); ≤ 30 KB (her sayfa) | Derleme çıktısı boyut betiği |
| CSS (toplam, tek dosya) | ≤ 30 KB | Boyut betiği |
| Yazı tipleri (ilk yüklemede inen toplam) | ≤ 100 KB, en çok 3 dosya | LHCI |
| LCP görseli (mobil genişlikte, AVIF) | ≤ 120 KB | Boyut betiği / gözden geçirme |
| Kart görseli (her biri) | ≤ 40 KB | Gözden geçirme |
| İstek sayısı (ilk yükleme) | ≤ 25 | LHCI |
| Üçüncü taraf istek (izin öncesi; `/iletisim/` hariç) | 0 | e2e ağ denetimi |

Bütçe değerleri (01 §3'tekiler dışında) mimarın önerisidir; ilk gerçek tasarım ve görsellerle bir kez gözden geçirilir, gevşetme proje yöneticisi onayı ister.

**Sağlayan teknikler:** statik HTML + CDN kenar önbelleği; varsayılan sıfır JS ve UI çatısı yok; adaların görünürlük/boşta yüklenmesi; tek küçük CSS dosyası (kullanılmayan sınıflar derlemede atılır); AVIF/WebP + doğru `sizes`; LCP görseline öncelik; kendi sunucumuzdan alt kümelenmiş woff2 + ön yükleme + ölçü eşitlemeli yedek; görsellerde boyut öznitelikleri; karmalı adlı varlıklarda `Cache-Control: public, max-age=31536000, immutable`, HTML'de yeniden doğrulamalı kısa önbellek (D: Pages varsayılanları); izin öncesi üçüncü taraf yok; harita tıklayınca; Turnstile yalnız iletişim sayfasında.

---

## 13. SEO ve analitik — teknik uygulama (ayrıntı 07'de)

- **`Seo.astro`:** her sayfada tek noktadan `<title>`, `meta description`, `canonical`, `robots`, Open Graph/Twitter kartı, `lang="tr"`, tema rengi, favicon bağlantıları. Girdi `seoField`. Başlık kalıbı ve uzunluk kuralları 07'den; derlemede yinelenen `title`/`description` varsa test başarısız olur. Her sayfada tek `<h1>` (html-validate + e2e).
- **JSON-LD (`JsonLd.astro` + `src/lib/jsonld.ts`):** içerik koleksiyonlarından derlemede üretilir, `schema-dts` ile tiplenir. Tür seçimi 07'nin kararıdır (taslak: site genelinde kuruluş/yerel işletme, hizmet sayfalarında `Service`, tüm iç sayfalarda `BreadcrumbList`). Yalnız doğrulanmış veriler girer (boş çalışma saati, doğrulanmamış tarih, olmayan sosyal hesap çıktıya yazılmaz).
- **Site haritası:** `@astrojs/sitemap`; `noindex` sayfalar, teşekkür sayfası ve 404 hariç. `robots.txt` site haritasını gösterir; önizleme/`pages.dev` ortamları `noindex` başlığı alır.
- **İzin yönetimi (`CookieConsent` adası):** kendi yazdığımız küçük bileşen. Kategoriler (K-05): **zorunlu** — izin kaydı ve Turnstile (izin sorulmaz, politika metninde açıklanır); **analitik** — izne bağlı. Harita izin kategorisi değildir; kullanıcının tıklamasıyla yüklenir (§11.5). Seçim, sürüm numarası ve tarihle birlikte birinci taraf depolamada **6 ay** saklanır; süre dolunca veya politika sürümü değişince yeniden sorulur (çerez mi `localStorage` mı — 03/hukuk); "reddet" ile "kabul et" eşit görünürlükte; alt bilgideki "Çerez tercihleri" bağlantısıyla her an değiştirilebilir.
- **Analitik yüklemesi:** izin verilmeden analitik betiği **DOM'a eklenmez**, sağlayıcıya istek gitmez, çerez yazılmaz (e2e: izin öncesi çerez sayısı 0 ve üçüncü taraf istek 0). İzin verilince betik dinamik eklenir; izin geri alınırsa sonraki sayfa yüklemesinde yüklenmez ve analitik çerezleri silinir. GA4 seçilirse izin kipi (consent mode) ayrıntıları (D). Çerezsiz analitik seçilirse bant yalnızca gerekiyorsa gösterilir (K-05): bileşen `PUBLIC_ANALYTICS_PROVIDER` değerine göre derlemede koşullu çıkar; gerekip gerekmediği hukuki teyide bağlıdır.
- **Ölçülecek olaylar (01 §3):** form gönderimi (teşekkür sayfası görüntülemesi), `tel:` / WhatsApp / `mailto:` tıklamaları. Olay adları 07'de.
- Arama motoru doğrulaması (Search Console) DNS TXT kaydıyla yapılır; sayfaya etiket konmaz.

---

## 14. Çoklu dil hazırlığı

S1 yalnız Türkçedir (01 §5). İngilizce eklendiğinde yeniden yazım gerekmemesi için baştan uygulananlar:

| Konu | S1'de yapılan | EN eklendiğinde |
|---|---|---|
| URL (K-06) | Türkçe ön eksiz kökte kalır (01 §6 değişmez) | İngilizce `/en/…` altında, İngilizce slug'larla (ör. `/en/services/fire-protection/`); Astro i18n yönlendirme yapılandırması (varsayılan dil ön eksiz) (D) |
| İçerik | `src/content/<koleksiyon>/tr/…` | Aynı dosya adıyla `en/…`; kayıtlar ortak `translationKey` (varsayılan: dosya adı) ile eşlenir; `slug` dile özeldir |
| Arayüz metinleri | Tümü `src/i18n/tr.ts` içinde; bileşenlerde sabit Türkçe metin yok (lint/gözden geçirme) | `en.ts` eklenir; `t(key, locale)` yardımcı işlevi hazır |
| Rotalar | `routes.ts` yardımcıları `locale` parametresi alır (varsayılan `tr`) | Sayfa dosyaları `src/pages/en/` altında aynı şablonları kullanır |
| SEO | `<html lang="tr">`, `og:locale` | Karşılıklı `hreflang` + `x-default`; dil başına site haritası girdileri; dil değiştirici |
| Biçimlendirme | Tarih/sayı `Intl` ile `tr-TR` | `en` yereli |
| Taksonomi | Enum anahtarları İngilizce, etiketler `taxonomy.yaml` içinde dile göre | `en` etiketleri eklenir |
| Form | Hata iletileri `i18n` içinde; işlev `locale` alanını okur | EN iletiler ve EN teşekkür sayfası |

Çevirisi olmayan sayfa için dil değiştirici o dilin ana sayfasına gider; otomatik dil yönlendirmesi (tarayıcı diline göre) yapılmaz.

---

## 15. Ortamlar ve dağıtım

### 15.1 Ortamlar

| Ortam | Adres | Amaç | Not |
|---|---|---|---|
| Yerel | `localhost` | Geliştirme | `pnpm dev` (Astro); işlevle birlikte denemek için derleme çıktısı üzerinde `wrangler pages dev` (D). Turnstile'ın resmî test anahtarları kullanılır (D); e-posta gerçek gönderilmez (sahte uç nokta) |
| Önizleme | PR başına Pages önizleme URL'si | Gözden geçirme, e2e/LHCI hedefi, müşteri onayı | `noindex`; ayrı Turnstile anahtarı; `CONTACT_TO_EMAIL` test adresi; analitik kapalı |
| Üretim | `axisteknik.com` (kurallı makine adı §6) | Canlı | Yalnız `main` |

### 15.2 Dal stratejisi ve dağıtım

- Gövde tabanlı: kısa ömürlü dallar (`feat/…`, `fix/…`, `content/…`, `chore/…`, `docs/…`) → PR → `main`. `main` her zaman yayınlanabilir durumdadır; doğrudan itme kapalıdır. Squash merge.
- **Dağıtım:** Cloudflare Pages'in GitHub bütünleşmesi her PR için önizleme, `main` için üretim dağıtımı yapar (derleme komutu `pnpm build`, çıktı `dist/`) (D). GitHub Actions kalite kapılarını çalıştırır; dal koruması kapılar yeşil olmadan birleştirmeye izin vermez, dolayısıyla üretime yalnız denetimden geçmiş kod çıkar. Derlemenin CI'da yapılıp `wrangler` ile yüklenmesi alternatiftir; yalnız derleme ortamı farkı sorun çıkarırsa geçilir.

### 15.3 CI kalite kapıları (`.github/workflows/ci.yml`)

| # | Kapı | Komut (taslak) | Başarısızlık |
|---|---|---|---|
| 1 | Biçim + lint | `pnpm format:check`, `pnpm lint` | engeller |
| 2 | Tip denetimi | `pnpm typecheck` (`astro check` + işlevler için `tsc`) | engeller |
| 3 | Birim testleri | `pnpm test:unit` (şema, `lib`, işlev mantığı; satır kapsamı hedefi `src/lib` ve `functions` için ≥ %80) | engeller |
| 4 | Derleme | `pnpm build` (içerik şeması hataları burada yakalanır) | engeller |
| 5 | Çıktı denetimleri | `html-validate`, bağlantı denetimi (iç bağlantılar), boyut bütçesi betiği, `_redirects` ↔ `legacyPath` tutarlılığı | engeller |
| 6 | Uçtan uca | `pnpm test:e2e` — Playwright; Chromium + WebKit + mobil görünüm; JS kapalı senaryoları dahil | engeller |
| 7 | Erişilebilirlik | `pnpm test:a11y` — axe, WCAG 2.2 AA etiketleri; ihlal sayısı 0 | engeller |
| 8 | Lighthouse CI | `pnpm lhci` — §12 eşikleri; 3 çalıştırmanın ortancası | engeller |
| 9 | Güvenlik | `pnpm audit --prod` | yüksek/kritik engeller |

Haftalık zamanlanmış iş: üretim sitesinde dış bağlantı denetimi + Lighthouse; başarısızlıkta otomatik GitHub sorunu açılır. Test kapsamının ayrıntısı 08 belgesindedir; bu tablo CI'da neyin zorunlu olduğunu tanımlar.

### 15.4 Geri alma

1. **Hızlı:** Cloudflare Pages panelinde önceki başarılı üretim dağıtımına geri alma (saniyeler; yeniden derleme yok) (D).
2. **Kalıcı:** hatalı commit `git revert` ile geri alınır, PR → `main`.
3. İşlev ve statik içerik aynı dağıtımda olduğundan birlikte geri döner. Ortam değişkeni değişiklikleri dağıtımdan bağımsızdır; değişiklikler `docs/` altındaki işletme günlüğüne tarihle not edilir.

---

## 16. Alan adı geçiş planı

Ön koşul: Açık Soru 1–4 kapanmış olmalı. E-posta kesintisi bu projenin en yüksek etkili riskidir; planın tamamı MX ve ilgili kayıtlara **dokunmama** ilkesine göre kurulmuştur.

**A. Tespit (geçişten ≥ 2 hafta önce)**
1. Alan adı kayıt kuruluşu, yetkili ad sunucuları ve DNS panelini kimin yönettiği belirlenir; erişim yetkisi yazılı alınır.
2. Mevcut DNS bölgesinin **tam dökümü** alınır ve depoda (gizli bilgi içermiyorsa) veya güvenli paylaşımda saklanır: A/AAAA, CNAME, **MX**, TXT (SPF, DKIM, DMARC, doğrulama kayıtları), SRV, `autodiscover`/`mail`/`webmail`/`ftp` gibi alt alan adları.
3. E-postanın nerede barındığı belirlenir. **Kritik denetim:** MX, WordPress'in durduğu barındırma paketini/sunucusunu mu gösteriyor? Öyleyse barındırma paketi kapatılırsa e-posta da kapanır (adım E-16).
4. Eski sitenin barındırma sağlayıcısı, panel erişimi ve paket bitiş tarihi öğrenilir.
5. Search Console ve varsa mevcut analitik mülklerine erişim alınır; en çok ziyaret alan ve dış bağlantı alan URL'lerin listesi 07'ye verilir.

**B. Hazırlık (≥ 1 hafta önce)**
6. Eski sitenin yedeği: tüm dosyalar + veritabanı dökümü + taranmış statik kopya (arşiv ve yönlendirme denetimi için). Yedek müşteriye teslim edilir; depoya **konmaz**.
7. Canlı sitedeki tüm URL'ler taranır; 07 yönlendirme tablosuyla karşılaştırılır (eksik satır = yayın engeli).
8. Cloudflare hesabı (müşteri adına) ve Pages projesi hazırlanır; üretim ortam değişkenleri girilir; site `pages.dev` adresinde tam kapılarla doğrulanır, müşteri onayı alınır.
9. E-posta gönderim alt alan adı (SPF/DKIM) eklenir ve form bildirimi uçtan uca denenir (bu kayıtlar yeni adlardır, mevcut e-postayı etkilemez).
10. Yol seçimi:
    - **Yol A — ad sunucuları Cloudflare'e taşınır (önerilen):** çıplak alan adı ↔ `www` yönlendirmesi, WAF hız sınırlama ve HSTS yönetimi mümkün olur. Cloudflare'in içe aktardığı kayıtlar adım 2'deki dökümle **satır satır** karşılaştırılır; e-posta ile ilgili kayıtlar (MX, `mail`, `autodiscover` vb.) **yalnız DNS** (vekilsiz) kipte bırakılır (D).
    - **Yol B — DNS mevcut sağlayıcıda kalır:** yalnız `www` kaydı Pages'e CNAME yapılır; çıplak alan adının yönlendirmesi mevcut sağlayıcıda çözülmelidir. Pages'te çıplak alan adını bölge Cloudflare'de olmadan bağlamanın mümkün olup olmadığı (D). Kısıtları nedeniyle yalnız Yol A mümkün değilse seçilir.
11. Değişecek kayıtların (yalnız web: çıplak alan adı ve `www`) TTL'i geçişten 24–48 saat önce 300 sn'ye düşürülür. Yol A'da ad sunucusu değişimi kayıt kuruluşu düzeyindedir ve yayılması daha uzun sürebilir; bu sürede eski ve yeni bölge **aynı kayıtları** sunmalıdır.

**C. Geçiş günü** (hafta içi sabah; cuma ve tatil öncesi yapılmaz)

12. Son içerik dondurma teyidi; eski sitenin son yedeği.
13. Özel alan adları Pages projesine eklenir; web kayıtları değiştirilir (Yol A: ad sunucuları + kayıtlar; Yol B: `www` CNAME). **MX, SPF, DKIM, DMARC kayıtlarına dokunulmaz.**
14. Sertifikanın verildiği ve sitenin HTTPS üzerinden yanıt verdiği doğrulanır.

**D. Doğrulama (aynı gün)**

15. Denetim listesi:
    - Farklı ağlardan/çözümleyicilerden DNS yanıtı; `http→https` ve `www`/çıplak yönlendirmesi tek sıçrama.
    - `redirects.spec.ts` üretim adresine karşı: tüm eski URL'ler 301 → 200.
    - **E-posta:** dışarıdan `info@` adresine gönderim ve yanıt alma; MX/SPF/DKIM sorgu sonuçlarının geçiş öncesi dökümle aynı olması.
    - Form: gerçek gönderim → bildirim gelen kutusuna ulaşıyor, SPF/DKIM geçiyor (ileti başlıklarından).
    - Lighthouse (üretim), güvenlik başlıkları, `robots.txt`, site haritası; Search Console'a site haritası gönderimi; alan adı değişmediği için adres değişikliği bildirimi gerekmez.
    - Çalışırlık izleme ve analitik (izin sonrası) çalışıyor.

**E. Geri dönüş ve kapanış**

16. **Geri dönüş planı:** eski barındırma en az 2–4 hafta **çalışır durumda** tutulur. Ciddi sorun olursa web kayıtları (Yol A'da gerekirse ad sunucuları) eski değerlerine döndürülür; düşük TTL sayesinde dakikalar içinde etkili olur (ad sunucusu geri dönüşü daha uzun sürer — bu yüzden Yol A'da önce Cloudflare bölgesindeki A/CNAME kaydını eski sunucuya çevirmek tercih edilir). Geri dönüş kararı ölçütleri: site erişilemiyor, e-posta akışı bozuldu, form çalışmıyor ve 1 saat içinde düzeltilemiyor.
17. Gözlem süresi (2–4 hafta): Search Console tarama hataları/404'ler haftalık incelenir, eksik yönlendirme 07'ye eklenir. Sorunsuzsa TTL normale (ör. 1 saat) alınır, HSTS süresi uzatılır.
18. **Eski WordPress'in kapatılması:** gözlem süresi sonunda. E-posta aynı pakette barınıyorsa paket **kapatılmaz**; yalnız WordPress dosyaları ve veritabanı kaldırılır (veya e-posta önce ayrı bir plana taşınır — müşteri kararı). E-posta ayrı yerdeyse barındırma paketi iptal edilir. Son yedek müşteride saklanır; veritabanı kişisel veri içerebileceğinden (yorumlar, kullanıcı hesapları) saklama süresi müşteriyle belirlenir. Eski WordPress kullanıcı parolaları başka yerde kullanılıyorsa değiştirilmesi önerilir.

---

## 17. Kodlama standartları ve "tamamlandı" tanımı

### 17.1 Standartlar

- **TypeScript:** strict; `any` ve `@ts-ignore` yasak (`@ts-expect-error` gerekçe yorumuyla); dış veriler (form girdisi, API yanıtı, URL parametresi) Zod ile ayrıştırılmadan kullanılmaz.
- **Astro bileşenleri:** `Props` arayüzü zorunlu; bileşen içinde veri çekme yalnız `sections` ve `pages` düzeyinde; `ui` bileşenleri saf ve içerikten bağımsız. İstemci betiği yalnız `islands/` altında.
- **HTML/erişilebilirlik:** anlamsal ögeler (`header`, `nav`, `main`, `footer`, başlık sırası atlanmaz); etkileşimli öge yalnız `<a>`/`<button>`/form denetimi; her form alanında görünür `<label>`; hata iletileri `aria-describedby` ile bağlı; "içeriğe atla" bağlantısı; renk tek başına bilgi taşımaz.
- **Metin:** arayüz metni bileşene gömülmez (`i18n/tr.ts` veya içerik dosyası). Firma bilgisi yalnız `site/settings.yaml` içinden okunur; şablona elle telefon/adres yazılmaz.
- **Tasarım:** 04'te olmayan görsel karar verilmez; eksik durum (boş, hata, odak, uzun metin) tasarımcıya sorulur.
- **Yorumlar ve kod:** İngilizce; yalnız "neden"i açıklayan yorum. Ölü kod ve `console.log` birleştirilmez.
- **Testler:** hata düzeltmesi önce başarısız bir testle yeniden üretilir.

### 17.2 "Tamamlandı" tanımı (iş paketi başına)

1. Kabul ölçütleri (02/09) karşılandı; tasarımla (04) görsel olarak eşleşiyor (360, 768, 1280 px).
2. §15.3'teki tüm CI kapıları yeşil; yeni mantık için birim, yeni kullanıcı akışı için e2e testi eklendi.
3. Klavye ile tam kullanılabilir; ekran okuyucuda (en az bir tane) duman testi yapıldı; JS kapalıyken temel işlev çalışıyor.
4. Performans bütçesi aşılmadı; yeni istemci JS'i varsa boyutu PR'da belirtildi.
5. Yeni görsel varsa kayıt tablosunda; yeni içerik alanı varsa bu belgedeki şema tablosu güncellendi.
6. Uydurma içerik, yer tutucu metin ("Lorem ipsum") veya gizli anahtar yok.
7. Önizleme bağlantısı PR'da; en az bir gözden geçirme onayı.

### 17.3 Commit ve PR kuralları

- **Conventional Commits**, İngilizce, emir kipi: `feat(references): add sector filter`. Türler: `feat`, `fix`, `content`, `style`, `refactor`, `perf`, `test`, `docs`, `build`, `ci`, `chore`. `commitlint` ile denetlenir.
- Küçük, tek amaçlı PR (hedef ≤ ~400 değişen satır; içerik/görsel PR'ları hariç). PR başlığı commit kuralına uyar (squash başlığı olur).
- PR şablonu: ne/neden · ilgili iş paketi · ekran görüntüsü (mobil + masaüstü) · test notları · denetim listesi (17.2).
- İçerik değişiklikleri (`content/…` dalı) kod değişikliğiyle aynı PR'da karıştırılmaz.

---

## 18. İşletme ve bakım

### 18.1 İçerik güncelleme — teknik olmayan biri için yeni referans ekleme

Ön koşul: kişinin GitHub hesabı ve depoya yazma yetkisi var; adımların ekran görüntülü sürümü `README.md` içinde tutulur.

1. Görsel(ler) hazırlanır: firmaya ait veya lisanslı, uzun kenar ≥ 2400 px; kullanım izni varsa. Önce görsel kayıt tablosuna satır eklenir.
2. GitHub web arayüzünde `src/content/references/tr/` klasöründe mevcut bir kaydın içeriği kopyalanır, "Add file → Create new file" ile `yeni-proje-adi.md` oluşturulur (küçük harf, tire, Türkçe karakter yok).
3. Alanlar doldurulur: başlık, müşteri, özet, sektör ve hizmet türleri (dosyanın başındaki açıklama satırında izin verilen değerler listelenir), ülke/şehir, sıra. Tarih yalnız kesin biliniyorsa yazılır ve `datesVerified: true` yapılır.
4. Görsel `src/assets/images/references/` klasörüne yüklenir; kayıtta yolu ve **alt metni** yazılır.
5. "Propose changes" → Pull Request açılır. Birkaç dakika içinde PR'da **önizleme bağlantısı** ve denetim sonuçları görünür.
6. Kırmızı denetim varsa hata iletisi eksik/yanlış alanı söyler (ör. "alt metin zorunlu", "geçersiz sektör"); dosya düzeltilir.
7. Önizleme doğruysa PR onaylanıp birleştirilir; site birkaç dakikada kendiliğinden yayınlanır. Yanlışlık fark edilirse PR "Revert" ile geri alınır.

Telefon/adres/çalışma saati değişikliği yalnız `src/content/site/settings.yaml` dosyasında yapılır; site genelinde ve yapısal veride kendiliğinden güncellenir. Bu akış müşteriye ağır gelirse değişiklikler bakım kapsamında ekipçe yapılır ya da Faz 2'de git tabanlı CMS eklenir (01 §5).

### 18.2 Düzenli bakım

| İş | Sıklık |
|---|---|
| Güvenlik güncellemesi PR'larının birleştirilmesi | Çıktığında (hedef ≤ 1 hafta) |
| Yama/küçük sürüm güncellemeleri | Aylık toplu |
| Büyük sürümler (Astro, Tailwind vb.), Node LTS geçişi | Yılda 1–2 kez, planlı |
| Form uçtan uca denemesi (gerçek gönderim) | Aylık + her dağıtım sonrası duman testi |
| Search Console, kırık bağlantı ve Lighthouse raporu incelemesi | Aylık (haftalık zamanlanmış iş sorun açar) |
| İçerik doğruluğu (telefon, adres, istatistikler, referanslar) | 6 ayda bir müşteriyle |
| Alan adı ve servis yenileme tarihleri, erişim yetkileri, API anahtarı döndürme | Yılda bir |

### 18.3 İzleme

- **Çalışırlık:** dış izleme servisi (ücretsiz katmanı olan bir servis; seçim (D)) ana sayfa ve `/iletisim/` için 5 dakikada bir; uyarı ekip ve müşteri e-postasına.
- **Form:** işlev günlükleri (kişisel verisiz olay kodları) ve e-posta servisinin teslim/geri dönme (bounce) raporu; `email_failed` olayı için uyarı yöntemi geliştirme başında belirlenir (D: Pages Functions günlük saklama ve uyarı olanakları). Yedek güvence: aylık elle deneme.
- **Sertifika/DNS:** Cloudflare otomatik yeniler; izleme servisi sertifika bitişini de denetler.
- **Hata izleme servisi** (Sentry vb.) S1'de yok: istemci JS'i çok az ve üçüncü taraf betik politikasına aykırı.

### 18.4 Maliyet kalemleri

Fiyatlar bu belgede verilmez; teklif/yayın öncesi **güncel fiyat ve katman sınırları doğrulanacaktır**.

| Kalem | Tür | Not |
|---|---|---|
| Alan adı yenileme (axisteknik.com) | Ücretli, yıllık | Mevcut gider; müşteride |
| Kurumsal e-posta barındırma | Mevcut gider | Değişmiyor; eski web barındırmasıyla aynı paketteyse §16-18 |
| Cloudflare Pages + DNS + Turnstile | Ücretsiz katman bekleniyor | Derleme/istek sınırları (D) |
| İşlemsel e-posta servisi | Ücretsiz katman bekleniyor (aylık form hacmi düşük) | (D) |
| Analitik | GA4 ücretsiz; çerezsiz alternatiflerin bir kısmı ücretli | Seçime bağlı (D) |
| Çalışırlık izleme | Ücretsiz katman | (D) |
| GitHub (özel depo + Actions dakikaları) | Ücretsiz katman bekleniyor | (D) |
| Stok görsel / yazı tipi lisansı | Varsa tek seferlik | 04/05'e bağlı |
| Eski barındırma paketi | Geçişten sonra **kalkan** gider (e-posta orada değilse) | |
| Bakım emeği (§18.2) | Sürekli | 09'da planlanır |

---

## 19. Riskler, açık sorular ve varsayımlar

### 19.1 Teknik riskler ve önlemler

| # | Risk | Etki | Önlem |
|---|---|---|---|
| R1 | DNS geçişinde e-posta kayıtlarının bozulması | Yüksek | §16: tam döküm, satır satır karşılaştırma, MX'e dokunmama, geçiş sonrası e-posta testi, geri dönüş planı |
| R2 | E-posta eski web barındırmasıyla aynı pakette; paket kapatılınca e-posta kesilir | Yüksek | §16-3 tespit; paket kapatılmadan önce yazılı teyit |
| R3 | Alan adı/DNS erişiminin kimde olduğu bilinmiyor ya da eski hizmet sağlayıcıda | Yüksek (takvim) | Açık Soru 1; Faz 2 başlamadan çözülür |
| R4 | Form bildirimlerinin gereksiz (spam) klasörüne düşmesi | Orta | Alt alan adında SPF/DKIM/DMARC; yayın öncesi teslim testi; aylık deneme |
| R5 | Form verisi saklanmadığı için e-posta hatasında talebin kaybolması | Orta | Hata iletisinde alternatif kanal; tek yeniden deneme; izleme. Saklama istenirse KVKK etkisiyle birlikte ayrı karar |
| R6 | Eksik yönlendirme → sıralama kaybı | Orta | 07 tablosu + otomatik test yayın kapısı; yayın sonrası 404 izleme |
| R7 | Araçların büyük sürümlerinde API değişikliği (Astro içerik katmanı, Tailwind yapılandırması, Cloudflare ürün yönü) | Orta | (D) işaretli kalemler geliştirme başında doğrulanır; sürümler kilitlenir; platforma özgü kod `functions/` ve iki yapılandırma dosyasıyla sınırlı |
| R8 | Katı CSP'nin Turnstile/analitik/haritayı engellemesi | Düşük | Önce Report-Only; e2e'de konsol CSP ihlali denetimi |
| R9 | Müşteri görsellerinin düşük çözünürlüklü gelmesi → bütçe/kalite sorunu | Orta | §9 asgari ölçü; 05 çekim listesi; yetersiz görsel galeriye alınmaz |
| R10 | Dosya tabanlı içerik akışının müşteriye zor gelmesi | Orta | §18.1 adım adım kılavuz + şema hata iletileri; bakım kapsamı; Faz 2 git tabanlı CMS |
| R11 | Turnstile'ın bazı kullanıcıları (JS kapalı, kısıtlı ağ) engellemesi | Düşük | Her zaman görünür telefon/e-posta/WhatsApp |
| R12 | Yurt dışı veri işleyenler nedeniyle KVKK uyum eksikliği | Orta (hukuki) | Açık Soru 9; aydınlatma metni hukuk onayı olmadan yayına çıkılmaz |

### 19.2 Açık sorular (`docs/acik-sorular.md` dosyasına aktarılmak üzere)

1. Alan adı hangi kayıt kuruluşunda, hesap kimin adına ve DNS paneline kim erişebiliyor? **(engelleyici — Faz 4)**
2. Cloudflare ve GitHub hesapları kimin adına açılacak (öneri: müşteri adına; ekip üye olarak)? **(engelleyici — Faz 2)**
3. Alan adında web sitesi dışında kullanılan alt alan adları/servisler var mı (webmail, FTP, uzaktan erişim, başka uygulama)? HSTS ve DNS taşıma kararını etkiler.
4. Mevcut web barındırma sağlayıcısı ve paketi nedir; kurumsal e-posta aynı pakette mi, ayrı bir sağlayıcıda mı? **(engelleyici — Faz 4)**
5. Ad sunucularının Cloudflare'e taşınmasına (Yol A) onay var mı?
6. Analitik: GA4 (çerez izni bandı ile) mi, çerezsiz bir alternatif mi? Mevcut bir GA4 mülkü var mı?
7. Form bildirimleri hangi adres(ler)e gidecek (`info@` mi, birden çok alıcı mı)? Bildirimlerde konu/etiket tercihi var mı?
8. Form için kullanılacak gönderim alt alan adı (taslak `bildirim.axisteknik.com`) uygun mu?
9. KVKK: aydınlatma metni ve çerez politikasını kim hazırlayıp onaylayacak; yurt dışında yerleşik veri işleyenlerin (Cloudflare, e-posta servisi, seçilirse Google) kullanımı hukuken değerlendirildi mi? **(engelleyici — yayın)**
10. Harita için koordinat/işletme kaydı (ör. harita servisi işletme sayfası) var mı; hangi sağlayıcı gömülecek?
11. Referans tarihleri (hepsi 2016–2019) doğru mu; "2 devam eden proje" hangileri? Doğrulanmazsa tarih ve sayaçlar gösterilmez.
12. Resmî unvan; `0(216)307 18 49` numarası telefon mu faks mı; WhatsApp için hangi numara kullanılacak; kişisel e-posta adresi yayımlanacak mı? (01 ve envanterle ortak sorular.)
13. Yayın sonrası içerik güncellemelerini kim yapacak (müşteri mi, bakım kapsamında ekip mi)?
14. Search Console ve mevcut analitik hesaplarına erişim verilebilir mi?
15. Eski sitenin yedeğini kim saklayacak ve ne kadar süre?

### 19.3 Varsayımlar

- 01 §12'deki varsayımlar geçerlidir (alan adı ve DNS müşteride; e-posta mevcut sağlayıcıda kalır; MX'e dokunulmaz).
- Aylık form gönderimi ve trafik, kullanılan servislerin ücretsiz katman sınırlarının çok altındadır.
- İçerik güncellemesi seyrektir (yılda birkaç kez); dakikalar süren derleme-yayın döngüsü kabul edilebilir.
- S1'de form dosya eki, otomatik yanıt e-postası ve CRM bütünleşmesi yoktur.
- Kaynak kod özel bir GitHub deposunda tutulur; mülkiyeti müşteriye aittir.
- Hedef tarayıcılar: Chrome, Edge, Safari, Firefox'un güncel ve bir önceki ana sürümleri; iOS Safari ve Android Chrome'un son iki ana sürümü. AVIF desteklemeyen tarayıcı WebP/JPEG alır.
- Site yalnız açık temadır (01 §5); belirteç katmanı koyu temaya engel değildir.

---

## 20. Proje yöneticisine notlar

01'deki kararlar bu belgede değiştirilmemiştir. Karar veya 01/diğer belgelerde güncelleme gerektirebilecek noktalar:

1. **Cloudflare Pages'in ürün yönü.** Cloudflare, yeni projeler için statik varlık sunan Workers'ı öne çıkarmaktadır; Pages'in desteklendiği ancak yeni özelliklerin Workers'a geldiği yönünde bilgim var, güncel durumu doğrulamadım. Karar (01 §7) Pages olarak uygulanacak; geliştirme başında resmî belgelerden doğrulanıp gerekirse 01 §7'nin "Cloudflare Pages (veya Cloudflare'in eşdeğer statik barındırma ürünü)" biçiminde güncellenmesini öneririm. Mimari etkisi küçüktür (`functions/`, `_redirects`, `_headers` karşılıkları).
2. **Teşekkür sayfası 01 §6 site haritasında yok.** JS'siz form gönderiminin ve dönüşüm ölçümünün en yalın yolu `/iletisim/tesekkurler/` sayfasıdır (`noindex`, site haritası dışı). 01 §6'ya eklenmesini öneririm. Reddedilirse seçenek: işlevin başarı sayfasını kendisinin üretmesi (şablon yinelenir, ölçüm zorlaşır).
3. **Turnstile ve "JS'siz çalışma" sınırı.** Turnstile tarayıcıda JavaScript gerektirir. Form, bizim betiğimiz olmadan (yerel gönderimle) çalışır; ancak JavaScript tümüyle kapalıysa gönderilemez. Bu durumda telefon/e-posta/WhatsApp gösterilir. Belirteçsiz gönderimi kabul etmek spam korumasını boşa çıkaracağından önermiyorum; 02/08 kabul ölçütlerinin buna göre yazılması gerekir.
4. **`www` mı çıplak alan adı mı.** Teknik öneri mevcut dizinlenmiş `www` adresinin korunmasıdır; nihai karar 07'de verilmeli ve 01'de tek satırla sabitlenmelidir. Çıplak alan adı yönlendirmesi fiilen DNS bölgesinin Cloudflare'e taşınmasını (Yol A) gerektirir — bu, müşteriden alınacak bir onaydır (Açık Soru 5).
5. **E-postanın eski barındırmayla aynı pakette olma olasılığı** 01 §12'deki "e-posta mevcut sağlayıcıda kalır" varsayımının içini değiştirir: paket kapatılamaz ya da e-posta taşınmalıdır (kapsam dışı ek iş). Açık Soru 4 ilk toplantıda kapatılmalı.
6. **Yurt dışı veri işleyenler (KVKK).** Cloudflare ve e-posta servisi kaçınılmaz olarak yurt dışındadır; GA4 seçilirse Google da eklenir. Hukuki değerlendirme müşterinindir ve yayın engeli olarak izlenmelidir (Açık Soru 9). Çerezsiz analitik seçilirse izin bandı ve bu yükün bir kısmı kalkabilir; teknik açıdan çerezsiz seçenek daha yalındır.
7. **Form verisinin saklanmaması** bilinçli bir tercihtir (KVKK yükünü azaltır) ancak e-posta hatasında talep kaybolur (R5). Müşteri "hiçbir talep kaybolmasın" derse saklama katmanı ayrı bir kapsam ve KVKK kararıdır.
8. **Filtrenin JS'siz davranışı.** Statik sitede sunucu tarafı süzme yoktur; JS kapalıyken tüm 19 referans listelenir (filtre bağlantıları çalışır ama süzmez). 02'deki filtre kabul ölçütü buna göre yazılmalı. Tam JS'siz süzme istenirse her filtre değeri için ayrı statik sayfa üretmek gerekir (01 §6'ya yeni URL'ler eklenir) — S1 için önermiyorum.
9. **Enum taksonomisi ve slug'lar** (sektör, hizmet türü, referans slug'ları, filtre URL anahtarları) 03/07'den gelmeden içerik girişi başlayamaz; 09'da 03'ün bu çıktısı geliştirme iş paketlerinin ön koşulu olarak işaretlenmeli.
10. **`docs/acik-sorular.md` henüz yok.** §19.2'deki sorular bu dosyanın sahibi olarak sizin tarafınızdan aktarılmalı; 1, 2, 4 ve 9 engelleyicidir.
