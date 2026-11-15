# Axis Teknik — Yeni Kurumsal Web Sitesi

[axisteknik.com](https://www.axisteknik.com/) için sıfırdan yapılacak kurumsal sitenin proje klasörü.

**Durum:** Faz 0 — Gereksinim (kod yok). Belgeler müşteri onayı bekliyor.

## Buradan başlayın

| Kim | Ne okumalı |
|---|---|
| Müşteri / karar verici | [`docs/acik-sorular.md`](docs/acik-sorular.md) → yanıtlanması gereken sorular; [`01`](docs/gereksinimler/01-proje-ozeti-ve-kapsam.md) → ne yapılacak, ne yapılmayacak |
| Ekip | [`CLAUDE.md`](CLAUDE.md) → kurallar; sonra kendi rol belgesi |

## Belgeler

| # | Belge | Sahibi |
|---|---|---|
| — | [`docs/kaynak/mevcut-site-icerik-envanteri.md`](docs/kaynak/mevcut-site-icerik-envanteri.md) — eski sitenin tüm içeriği ve sorunları | Proje Yöneticisi |
| 01 | [Proje özeti, kapsam ve ortak kararlar](docs/gereksinimler/01-proje-ozeti-ve-kapsam.md) | Proje Yöneticisi |
| 02 | [Fonksiyonel gereksinimler](docs/gereksinimler/02-fonksiyonel-gereksinimler.md) | İş Analisti |
| 03 | [İçerik ve bilgi mimarisi](docs/gereksinimler/03-icerik-ve-bilgi-mimarisi.md) | İçerik ve SEO Uzmanı |
| 04 | [Tasarım sistemi ve arayüz](docs/gereksinimler/04-tasarim-sistemi-ve-arayuz.md) | UI/UX Tasarımcı |
| 05 | [Görsel planı](docs/gereksinimler/05-gorsel-plani.md) | UI/UX Tasarımcı |
| 06 | [Teknik mimari](docs/gereksinimler/06-teknik-mimari.md) | Yazılım Geliştirici |
| 07 | [SEO gereksinimleri ve yönlendirme tablosu](docs/gereksinimler/07-seo-gereksinimleri.md) | İçerik ve SEO Uzmanı |
| 08 | [Test planı](docs/gereksinimler/08-test-plani.md) | Test Mühendisi |
| 09 | [Yol haritası ve iş paketleri](docs/gereksinimler/09-yol-haritasi-ve-is-paketleri.md) | Proje Yöneticisi |
| — | [`docs/acik-sorular.md`](docs/acik-sorular.md) — müşteriye sorulacaklar (tek liste) | Proje Yöneticisi |

## Ekip

Altı rol `.claude/agents/` altında tanımlıdır ve Claude Code'da alt ajan olarak çağrılabilir:

`proje-yoneticisi` · `is-analisti` · `icerik-seo-uzmani` · `ui-ux-tasarimci` · `yazilim-gelistirici` · `test-muhendisi`

## Teknoloji (özet)

Astro (statik) · TypeScript · Tailwind CSS · Content Collections · Cloudflare Pages · Vitest + Playwright + Lighthouse CI. Gerekçeler: 01 §7 ve 06.
