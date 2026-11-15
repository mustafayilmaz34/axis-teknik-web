# Axis Teknik — Web Sitesi (Astro + Tailwind)

## Çalıştırma
Bilgisayarda Node.js (22 veya üstü) kurulu olmalı. Bu klasörde:

    npm install
    npm run dev       # http://localhost:4321 adresinde açılır
    npm run build     # yayına hazır dosyalar dist/ klasörüne çıkar

## İçerik nerede?
- Firma bilgileri, hizmetler, referanslar: `src/data/site.ts` (yeni referans = listeye bir satır)
- Sayfalar: `src/pages/` · Renkler ve yazı tipleri: `src/styles/global.css`

## Yapılacaklar
1. **Fotoğraflar:** `public/images/` klasörüne koyun (ör. `hero.jpg`), `global.css` içindeki `.hero-bg` yorumundaki gibi bağlayın. Yalnızca kendi fotoğraflarınızı veya Unsplash/Pexels gibi ücretsiz lisanslı görselleri kullanın.
2. **Form:** Şu an e-posta uygulamasını açar. Formspree (ücretsiz) hesabı açıp adresi `src/data/site.ts` → `formEndpoint` alanına yazınca form doğrudan e-posta gönderir.
3. **Yayın:** `dist/` klasörü Cloudflare Pages, Netlify veya herhangi bir hostinge yüklenebilir.
4. Arkadaşınıza sorulacaklar: `../docs/acik-sorular.md` (WhatsApp numarası, referans izinleri, KVKK metni vb.)
