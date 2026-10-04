import Link from 'next/link'
import { notFound } from 'next/navigation'
import { assets, categoryLabels, getAsset } from '@/lib/assets'
import PurchasePanel from '@/components/PurchasePanel'

export function generateStaticParams() {
  return assets.map((a) => ({ slug: a.slug }))
}

export default function AssetPage({ params }: { params: { slug: string } }) {
  const asset = getAsset(params.slug)
  if (!asset) notFound()

  const soldShare = Math.round(
    ((asset.tokensTotal - asset.tokensAvailable) / asset.tokensTotal) * 100
  )

  return (
    <div className="flex flex-col gap-8">
      <Link href="/assets" className="text-sm text-slate-400 hover:text-gold">
        ← Retour aux actifs
      </Link>
      <div className="grid gap-8 lg:grid-cols-2">
        <div
          className={`flex h-80 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br ${asset.gradient}`}
        >
          <span className="text-8xl opacity-80">
            {asset.category === 'voitures' ? '🏎️' : asset.category === 'art' ? '🎨' : '🗡️'}
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              {categoryLabels[asset.category]}
            </span>
            <h1 className="mt-3 text-3xl font-black">{asset.name}</h1>
          </div>
          <p className="text-slate-300">{asset.description}</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Stat label="Valeur totale" value={`${asset.totalValue.toLocaleString('fr-FR')} €`} />
            <Stat label="Prix du token" value={`${asset.tokenPrice} €`} highlight />
            <Stat label="Rendement annuel estimé" value={`${asset.annualYield} %`} />
            <Stat label="Tokens disponibles" value={asset.tokensAvailable.toLocaleString('fr-FR')} />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-xs text-slate-400">
              <span>Tokenisation : {soldShare}%</span>
              <span>
                {asset.tokensTotal.toLocaleString('fr-FR')} tokens au total
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-amber-500"
                style={{ width: `${soldShare}%` }}
              />
            </div>
          </div>
          <PurchasePanel tokenPrice={asset.tokenPrice} tokensAvailable={asset.tokensAvailable} />
        </div>
      </div>
    </div>
  )
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-slate-400">{label}</div>
      <div className={`mt-1 text-lg font-bold ${highlight ? 'text-gold' : 'text-slate-100'}`}>
        {value}
      </div>
    </div>
  )
}
