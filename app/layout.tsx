import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'TokenRide — Marketplace RWA',
  description:
    'Investissez dans des actifs réels tokenisés : voitures de collection, œuvres d\u2019art et skins CS2.',
}

const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/assets', label: 'Actifs' },
  { href: '/investir', label: 'Investir' },
  { href: '/portfolio', label: 'Portfolio' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-ink text-slate-100 antialiased">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-gold to-amber-600 font-black text-ink">
                T
              </span>
              <span className="text-lg font-bold tracking-tight">
                Token<span className="text-gold">Ride</span>
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 transition hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 pb-16 pt-8">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
          TokenRide — Prototype de marketplace RWA. Investir comporte un risque de perte en
          capital. Ceci n\u2019est pas un conseil en investissement.
        </footer>
      </body>
    </html>
  )
}
