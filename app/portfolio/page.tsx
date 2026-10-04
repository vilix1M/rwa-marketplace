const holdings = [
  { name: 'Lamborghini Huracán EVO', tokens: 40, value: 2000, yieldPct: 8.4 },
  { name: 'Banksy — Olive Branch', tokens: 60, value: 600, yieldPct: 11.2 },
  { name: 'AWP | Dragon Lore (FN)', tokens: 4, value: 1000, yieldPct: 15.6 },
]

export default function PortfolioPage() {
  const totalValue = holdings.reduce((s, h) => s + h.value, 0)
  const weightedYield =
    totalValue > 0
      ? holdings.reduce((s, h) => s + (h.value / totalValue) * h.yieldPct, 0)
      : 0
  const projectedAnnual = (totalValue * weightedYield) / 100

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-black">Portfolio (démo)</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs text-slate-400">Valeur du portefeuille</div>
          <div className="mt-1 text-3xl font-black text-gold">
            {totalValue.toLocaleString('fr-FR')} €
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs text-slate-400">Rendement pondéré</div>
          <div className="mt-1 text-3xl font-black text-emerald-400">
            {weightedYield.toFixed(1)} %
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs text-slate-400">Revenus annuels projetés</div>
          <div className="mt-1 text-3xl font-black text-slate-100">
            {projectedAnnual.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} €
          </div>
        </div>
      </div>

      <section>
        <h2 className="mb-4 text-xl font-bold">Mes positions</h2>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/10 text-left text-xs uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3">Actif</th>
                <th className="px-5 py-3">Tokens</th>
                <th className="px-5 py-3">Valeur</th>
                <th className="px-5 py-3">Rendement</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h) => (
                <tr key={h.name} className="border-t border-white/5 bg-white/5">
                  <td className="px-5 py-4 font-medium">{h.name}</td>
                  <td className="px-5 py-4">{h.tokens}</td>
                  <td className="px-5 py-4">{h.value.toLocaleString('fr-FR')} €</td>
                  <td className="px-5 py-4 text-emerald-400">{h.yieldPct} %</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Données de démonstration — connectez un portefeuille pour suivre vos vraies positions.
        </p>
      </section>
    </div>
  )
}
