export type Category = 'voitures' | 'art' | 'cs2'

export type Chain = 'ethereum' | 'solana'

export interface RwaAsset {
  slug: string
  name: string
  category: Category
  description: string
  imageUrl: string
  totalValue: number
  tokenPrice: number
  tokensTotal: number
  tokensAvailable: number
  annualYield: number
  currency: 'EUR'
  gradient: string
  chains: Chain[]
}

export const assets: RwaAsset[] = [
  {
    slug: 'lamborghini-huracan-evo',
    name: 'Lamborghini Huracán EVO',
    category: 'voitures',
    description:
      'Flèche d\u2019argent de 2019, 640 ch, 4 200 km. Véhicule de collection conservé en garage climatisé, revenus générés via location événementielle.',
    imageUrl: '',
    totalValue: 219000,
    tokenPrice: 50,
    tokensTotal: 4380,
    tokensAvailable: 1523,
    annualYield: 8.4,
    currency: 'EUR',
    gradient: 'from-lime-500/20 to-emerald-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'porsche-911-carrera-s-992',
    name: 'Porsche 911 Carrera S (992)',
    category: 'voitures',
    description:
      'Iconique 911 type 992 de 2020, boîte PDK, couleur GT Silver. Revenus mensuels via plateforme de location premium.',
    imageUrl: '',
    totalValue: 145000,
    tokenPrice: 25,
    tokensTotal: 5800,
    tokensAvailable: 2310,
    annualYield: 7.9,
    currency: 'EUR',
    gradient: 'from-slate-400/20 to-slate-800/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'ford-mustang-bullitt',
    name: 'Ford Mustang Bullitt',
    category: 'voitures',
    description:
      'Édition Bullitt 2019, moteur 5.0 V8, 460 ch. Séries limitées à forte appréciation historique.',
    imageUrl: '',
    totalValue: 78000,
    tokenPrice: 20,
    tokensTotal: 3900,
    tokensAvailable: 1044,
    annualYield: 6.8,
    currency: 'EUR',
    gradient: 'from-emerald-600/20 to-green-900/40',
    chains: ['ethereum'],
  },
  {
    slug: 'ferrari-f40',
    name: 'Ferrari F40',
    category: 'voitures',
    description:
      'Dernière Ferrari validée par Enzo Ferrari lui-même. 2,9 L biturbo, 478 ch, 4 800 km. La voiture de collection la plus recherchée des décennies 1980-1990.',
    imageUrl: '',
    totalValue: 2450000,
    tokenPrice: 100,
    tokensTotal: 24500,
    tokensAvailable: 8900,
    annualYield: 9.6,
    currency: 'EUR',
    gradient: 'from-red-500/20 to-red-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'ferrari-laferrari-aperta',
    name: 'Ferrari LaFerrari Aperta',
    category: 'voitures',
    description:
      'Hybride hybride V12 de 963 ch, 1 des 210 Aperta produites. Hypercar moderne à appréciation structurelle, exposée lors de concours d’élégance.',
    imageUrl: '',
    totalValue: 5100000,
    tokenPrice: 250,
    tokensTotal: 20400,
    tokensAvailable: 12250,
    annualYield: 8.9,
    currency: 'EUR',
    gradient: 'from-yellow-500/20 to-red-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'ferrari-250-gt-berlinetta-sw9164',
    name: 'Ferrari 250 GT Berlinetta',
    category: 'voitures',
    description:
      'Légende des années 50, châssis matching-numbers, historique de course documenté. Les 250 GT s’échangent régulièrement au-delà de 10 M€.',
    imageUrl: '',
    totalValue: 12800000,
    tokenPrice: 500,
    tokensTotal: 25600,
    tokensAvailable: 20400,
    annualYield: 7.4,
    currency: 'EUR',
    gradient: 'from-amber-600/20 to-rose-900/40',
    chains: ['ethereum'],
  },
  {
    slug: 'pagani-huayra-bc',
    name: 'Pagani Huayra BC',
    category: 'voitures',
    description:
      '1 des 40 Huayra BC. V12 biturbo Mercedes-AMG de 794 ch, carrosserie en carbone titane. Pièce de collection contemporaine extrêmement rare.',
    imageUrl: '',
    totalValue: 3850000,
    tokenPrice: 100,
    tokensTotal: 38500,
    tokensAvailable: 21200,
    annualYield: 10.1,
    currency: 'EUR',
    gradient: 'from-zinc-400/20 to-slate-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'pagani-zonda-r',
    name: 'Pagani Zonda R',
    category: 'voitures',
    description:
      'Monoplace de piste, 750 ch, 1 070 kg. La Zonda R établit des records sur circuit et figure parmi les Grails des collectionneurs Pagani.',
    imageUrl: '',
    totalValue: 3100000,
    tokenPrice: 250,
    tokensTotal: 12400,
    tokensAvailable: 7400,
    annualYield: 10.8,
    currency: 'EUR',
    gradient: 'from-gray-500/20 to-purple-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'bugatti-chiron-super-sport',
    name: 'Bugatti Chiron Super Sport',
    category: 'voitures',
    description:
      'Version ultime de la Chiron, 1 600 ch, 440 km/h. Édition extrêmement limitée, pilier des collections de très haute valeur.',
    imageUrl: '',
    totalValue: 5800000,
    tokenPrice: 250,
    tokensTotal: 23200,
    tokensAvailable: 15900,
    annualYield: 8.2,
    currency: 'EUR',
    gradient: 'from-blue-600/20 to-slate-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'bugatti-veyron-164',
    name: 'Bugatti Veyron 16.4 (2005)',
    category: 'voitures',
    description:
      'La première hypercar de l’ère moderne, 1 001 ch, 407 km/h. Un jalon historique de l’automobile, valeur en constante appréciation.',
    imageUrl: '',
    totalValue: 1750000,
    tokenPrice: 50,
    tokensTotal: 35000,
    tokensAvailable: 26800,
    annualYield: 8.7,
    currency: 'EUR',
    gradient: 'from-indigo-400/20 to-blue-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'banksy-olive-branch',
    name: 'Banksy — Olive Branch (ed.)',
    category: 'art',
    description:
      'Sérigraphie signée, édition limitée 150 exemplaires, certificat Pest Control. Stockée en chambre forte muséale.',
    imageUrl: '',
    totalValue: 42000,
    tokenPrice: 10,
    tokensTotal: 4200,
    tokensAvailable: 1877,
    annualYield: 11.2,
    currency: 'EUR',
    gradient: 'from-amber-500/20 to-rose-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'Damien-hirst-methylamine',
    name: 'Damien Hirst — Methylamine',
    category: 'art',
    description:
      'Pièce de la série "Spot Paintings", acrylique sur toile 40 cm. Historique de galerie complet.',
    imageUrl: '',
    totalValue: 165000,
    tokenPrice: 50,
    tokensTotal: 3300,
    tokensAvailable: 920,
    annualYield: 9.7,
    currency: 'EUR',
    gradient: 'from-cyan-400/20 to-blue-900/40',
    chains: ['ethereum'],
  },
  {
    slug: 'yayoi-kusama-pumpkin-print',
    name: 'Yayoi Kusama — Pumpkin',
    category: 'art',
    description:
      'Estampe originale numérotée de la série Pumpkin. Marché de l\u2019art japonais en forte croissance.',
    imageUrl: '',
    totalValue: 28500,
    tokenPrice: 5,
    tokensTotal: 5700,
    tokensAvailable: 3550,
    annualYield: 12.5,
    currency: 'EUR',
    gradient: 'from-orange-400/20 to-purple-900/40',
    chains: ['solana'],
  },
  {
    slug: 'ak-47-case-hardened-blue-gem',
    name: 'AK-47 | Case Hardened (Blue Gem)',
    category: 'cs2',
    description:
      'Pattern Tier 1 "Blue Gem", StatTrak™, Field-Tested. Skin CS2 ultra-rare, liquidité élevée sur les marketplaces de gaming.',
    imageUrl: '',
    totalValue: 310000,
    tokenPrice: 100,
    tokensTotal: 3100,
    tokensAvailable: 640,
    annualYield: 14.8,
    currency: 'EUR',
    gradient: 'from-blue-500/20 to-indigo-900/40',
    chains: ['ethereum', 'solana'],
  },
  {
    slug: 'awp-dragon-lore-fn',
    name: 'AWP | Dragon Lore (FN)',
    category: 'cs2',
    description:
      'Factory New, souvenir de la collection Cobblestone. L\u2019un des skins les plus recherchés du jeu.',
    imageUrl: '',
    totalValue: 1250000,
    tokenPrice: 250,
    tokensTotal: 5000,
    tokensAvailable: 1870,
    annualYield: 15.6,
    currency: 'EUR',
    gradient: 'from-amber-500/20 to-red-900/40',
    chains: ['ethereum'],
  },
  {
    slug: 'karambit-doppler-sapphire',
    name: 'Karambit | Doppler Sapphire',
    category: 'cs2',
    description:
      'Couteau Karambit phase Sapphire, Minimal Wear. Rareté extrême, demande constante des collectionneurs.',
    imageUrl: '',
    totalValue: 145000,
    tokenPrice: 50,
    tokensTotal: 2900,
    tokensAvailable: 1150,
    annualYield: 13.4,
    currency: 'EUR',
    gradient: 'from-violet-500/20 to-fuchsia-900/40',
    chains: ['ethereum', 'solana'],
  },
]

export const categoryLabels: Record<Category, string> = {
  voitures: 'Voitures de collection',
  art: 'Œuvres d\u2019art',
  cs2: 'Skins CS2',
}

export function getAsset(slug: string) {
  return assets.find((a) => a.slug === slug)
}
