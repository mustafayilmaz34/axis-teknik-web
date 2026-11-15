# Axis Teknik — Kurumsal Web Sitesi

axisteknik.com'un yerine geçecek yeni kurumsal site. Firma: elektrik–mekanik taahhüt ve yangın algılama/söndürme sistemleri (Pendik, İstanbul).

## Şu anki aşama

**Site çalışır durumda (basitleştirilmiş sürüm).** Kod `site/` klasöründe: Astro + Tailwind, 5 sayfa (Ana Sayfa, Hizmetler, Referanslar, Hakkımızda, İletişim) + 404. İçeriğin tamamı `site/src/data/site.ts` içinde.

Proje sahibi token harcamasını düşük tutmak istiyor: **alt ajan ekibi kullanılmaz, yeni gereksinim belgesi yazılmaz**, doğrudan `site/` üzerinde küçük ve hedefli değişiklikler yapılır. `docs/` yalnızca başvuru kaynağıdır.

Sıradaki işler (`site/README.md`):
1. Başlık fotoğrafları: `site/public/images/` içine `anasayfa`, `hizmetler`, `referanslar`, `hakkimizda`, `iletisim` adlarıyla (.jpg/.webp/.png) konunca kendiliğinden bağlanır.
2. Form: `site/src/data/site.ts` → `formEndpoint` (ör. Formspree) girilince doğrudan gönderir; boşken e-posta uygulamasını açar.
3. Müşteri onayı bekleyen konular: `docs/acik-sorular.md`.

Çalıştırma: `cd site`, `npm install`, `npm run dev` → http://localhost:4321

## Önce bunları oku

1. `docs/gereksinimler/01-proje-ozeti-ve-kapsam.md` — kapsam, site haritası, teknoloji ve görsel kararları (**bağlayıcı**)
2. `docs/kaynak/mevcut-site-icerik-envanteri.md` — eski siteden alınan içerik (**tek içerik kaynağı**)
3. Rolünle ilgili belge (`docs/gereksinimler/02…09`)

## Değişmez kurallar

- **Bilgi uydurma.** Firma bilgisi, referans ayrıntısı, belge, rakam yalnızca envanterden veya müşteriden gelir. Eksikse `docs/acik-sorular.md`.
- **Görsel politikası.** Eski sitenin görselleri kullanılmaz. Yalnızca müşteriye ait veya ticari kullanıma açık lisanslı görseller; müşteri logoları yazılı izinsiz kullanılmaz. Her görsel kayıt tablosuna işlenir.
- **Dil.** Belgeler ve arayüz Türkçe; kod, dosya ve değişken adları İngilizce.
- **Teknoloji.** Astro (statik) · TypeScript · Tailwind CSS v4 · npm. İçerik `site/src/data/site.ts` içinde (Content Collections kullanılmıyor).
- **Kalite kapıları.** Lighthouse mobil Performans ≥ 90, diğerleri ≥ 95 · WCAG 2.2 AA · eski URL'lerin tamamı 301.

## Ekip (yalnızca kullanıcı açıkça isterse)

Roller `.claude/agents/` altında tanımlıdır: `proje-yoneticisi`, `is-analisti`, `icerik-seo-uzmani`, `ui-ux-tasarimci`, `yazilim-gelistirici`, `test-muhendisi`. Her rol yalnızca kendi belgelerini/dosyalarını değiştirir; çelişkide proje yöneticisi karar verir.

Çalışma akışı: iş analisti gereksinimi netleştirir → tasarımcı ekranı tanımlar → geliştirici uygular → test mühendisi doğrular → proje yöneticisi kapatır.
