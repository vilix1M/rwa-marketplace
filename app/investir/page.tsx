const steps = [
  {
    n: '01',
    title: 'Créez votre compte',
    text: 'Inscription en 2 minutes avec vérification d\u2019identité (KYC) obligatoire.',
  },
  {
    n: '02',
    title: 'Choisissez un actif',
    text: 'Parcourez le catalogue : voitures, œuvres d\u2019art, skins CS2. Chaque actif dispose d\u2019un dossier complet.',
  },
  {
    n: '03',
    title: 'Achetez des tokens',
    text: 'Chaque token représente une fraction de propriété de l\u2019actif sous-jacent.',
  },
  {
    n: '04',
    title: 'Percevez vos revenus',
    text: 'Les revenus locatifs et la plus-value à la revente sont distribués au prorata.',
  },
]

const faqs = [
  {
    q: 'Que signifie RWA ?',
    a: 'RWA (Real World Assets) désigne la tokenisation d\u2019actifs réels sur blockchain : chaque token représente une part de propriété contractuelle d\u2019un actif physique.',
  },
  {
    q: 'Suis-je vraiment propriétaire ?',
    a: 'Dans ce prototype, l\u2019achat est simulé. En production, une structure juridique (SPV) détient l\u2019actif et les tokens confèrent des droits économiques inscrits on-chain.',
  },
  {
    q: 'Comment les skins CS2 sont-ils sécurisés ?',
    a: 'Les skins sont conservés sur des comptes steam sécurisés par un custodien, avec assurance et audit régulier.',
  },
  {
    q: 'Puis-je revendre mes tokens ?',
    a: 'Oui, un marché secondaire permet de revendre vos tokens à d\u2019autres investisseurs (fonctionnalité à venir dans le prototype).',
  },
]

export default function InvestirPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="text-center">
        <h1 className="text-4xl font-black">Comment investir ?</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Investir dans des actifs réels tokenisés en 4 étapes simples.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-black text-gold/60">{s.n}</div>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{s.text}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Questions fréquentes</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-white/10 bg-white/5 p-5 open:bg-white/10"
            >
              <summary className="cursor-pointer font-semibold text-slate-100">{f.q}</summary>
              <p className="mt-3 text-sm text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
