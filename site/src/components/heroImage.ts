import { existsSync } from 'node:fs';
import { join } from 'node:path';

// public/images/<ad> dosyası varsa koyu katmanla birlikte arka plan stili döndürür; yoksa undefined.
export function heroStyle(name: string): string | undefined {
  for (const ext of ['jpg', 'jpeg', 'webp', 'png']) {
    if (existsSync(join(process.cwd(), 'public', 'images', `${name}.${ext}`))) {
      return `background-image: linear-gradient(120deg, rgb(8 37 56 / .92) 35%, rgb(12 58 88 / .55)), url('/images/${name}.${ext}'); background-size: cover; background-position: center;`;
    }
  }
}
