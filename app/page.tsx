import Link from 'next/link'
import AssetCard from '@/components/AssetCard'
import { assets } from '@/lib/assets'

export default function Home() {
  const featured = assets.slice(0, 3)
  return (
    <div className="flex flex-col gap-16">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 md:p-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
          Actifs réels · Tokenisation · Fractionnement
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
          Possédez une part de <span className="text-gold">voitures</span>, d
          <span className="text-gold">œuvres d&apos;art</span> et de{' '}
          <span className="text-gold">skins CS2</span> rares.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          TokenRide fractionne des actifs réels vérifiés en tokens accessibles dès 5 €.
          Diversifiez votre portefeuille au-delà des cryptomonnaies, avec des actifs
          tangibles et des revenus locatifs.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/assets"
            className="rounded-xl bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-amber-400"
          >
            Explorer les actifs
          </Link>
          <Link
            href="/investir"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-gold hover:text-gold"
          >
            Comment investir ?
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Actifs en vedette</h2>
          <Link href="/assets" className="text-sm text-gold hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <AssetCard key={a.slug} asset={a} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: '🔐',
            title: 'Actifs vérifiés',
            text: 'Chaque actif est authentifié, assuré et conservé en lieu sûr par un custodien partenaire.',
          },
          {
            icon: ' fractionalisé',
            title: 'Accessible dès 5 €',
            text: 'Le fractionnement en tokens permet d\u2019investir avec un ticket d\u2019entrée minime.',
          },
          {
            icon: '💸',
            title: 'Revenus distribués',
            text: 'Les revenus locatifs et la plus-value potentielle sont répartis entre les détenteurs de tokens.',
          },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">{f.icon.trim()}</div>
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{f.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
