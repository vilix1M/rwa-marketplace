import Link from 'next/link'
import type { RwaAsset } from '@/lib/assets'
import { categoryLabels } from '@/lib/assets'

export default function AssetCard({ asset }: { asset: RwaAsset }) {
  const soldShare = Math.round(
    ((asset.tokensTotal - asset.tokensAvailable) / asset.tokensTotal) * 100
  )
  return (
    <Link
      href={`/assets/${asset.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-gold/50 hover:bg-white/10"
    >
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${asset.gradient}`}
      >
        <span className="text-5xl opacity-80">
          {asset.category === 'voitures' ? '🏎️' : asset.category === 'art' ? '🎨' : '🗡️'}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          {categoryLabels[asset.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-semibold leading-tight transition group-hover:text-gold">
          {asset.name}
        </h3>
        <p className="line-clamp-2 text-sm text-slate-400">{asset.description}</p>
        <div className="mt-auto grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-lg bg-black/30 py-2">
            <div className="text-slate-400">Valeur</div>
            <div className="font-semibold text-slate-100">
              {asset.totalValue.toLocaleString('fr-FR')} €
            </div>
          </div>
          <div className="rounded-lg bg-black/30 py-2">
            <div className="text-slate-400">Token</div>
            <div className="font-semibold text-gold">{asset.tokenPrice} €</div>
          </div>
          <div className="rounded-lg bg-black/30 py-2">
            <div className="text-slate-400">Rendement</div>
            <div className="font-semibold text-emerald-400">{asset.annualYield}%</div>
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs text-slate-400">
            <span>{soldShare}% tokenisé</span>
            <span>{asset.tokensAvailable.toLocaleString('fr-FR')} tokens dispo</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-gold to-amber-500" style={{ width: `${soldShare}%` }} />
          </div>
        </div>
      </div>
    </Link>
  )
}
