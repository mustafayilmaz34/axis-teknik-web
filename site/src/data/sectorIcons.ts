import type { Sector } from './site';

// Sektör ikonları (Icon.astro içindeki Phosphor duotone adları)
export const sectorIcon: Record<Sector, string> = {
  Sanayi: 'factory',
  'Sağlık': 'hospital',
  Otel: 'hotel',
  'Telekom ve Bilişim': 'telecom',
  'Enerji ve Altyapı': 'energy',
  'Kamu ve Savunma': 'defense',
  'Lojistik ve Havacılık': 'aviation',
};

// Kapsam metninden iş türü etiketleri türetir (yeni bilgi eklemez)
export function workTags(scope: string): { label: string; fire: boolean }[] {
  const tags: { label: string; fire: boolean }[] = [];
  if (/yangın|söndürme|fm200|co2|köpük|pompa/i.test(scope)) tags.push({ label: 'Yangın Sistemleri', fire: true });
  if (/elektrik/i.test(scope)) tags.push({ label: 'Elektrik', fire: false });
  if (/bakım|onarım/i.test(scope)) tags.push({ label: 'Bakım', fire: false });
  if (/altyapı/i.test(scope)) tags.push({ label: 'Altyapı', fire: false });
  return tags;
}
