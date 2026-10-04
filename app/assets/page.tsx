import AssetCard from '@/components/AssetCard'
import { assets, categoryLabels, type Category } from '@/lib/assets'

const categories: (Category | 'tous')[] = ['tous', 'voitures', 'art', 'cs2']

export default function AssetsPage({
  searchParams,
}: {
  searchParams: { cat?: string }
}) {
  const active = categories.includes(searchParams.cat as Category)
    ? (searchParams.cat as Category)
    : 'tous'
  const filtered = active === 'tous' ? assets : assets.filter((a) => a.category === active)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-black">Tous les actifs</h1>
        <p className="mt-2 text-slate-400">
          {filtered.length} actif{filtered.length > 1 ? 's' : ''} tokenisé
          {filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <a
            key={c}
            href={c === 'tous' ? '/assets' : `/assets?cat=${c}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === c
                ? 'bg-gold text-ink'
                : 'border border-white/15 text-slate-300 hover:border-gold/60 hover:text-gold'
            }`}
          >
            {c === 'tous' ? 'Tous' : categoryLabels[c as Category]}
          </a>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <AssetCard key={a.slug} asset={a} />
        ))}
      </div>
    </div>
  )
}
