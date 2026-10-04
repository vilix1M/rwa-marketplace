'use client'

import { useState } from 'react'

export interface Chain {
  id: 'ethereum' | 'solana'
  label: string
  token: string
  info: string
  color: string
}

const chains: Chain[] = [
  {
    id: 'ethereum',
    label: 'Ethereum',
    token: 'USDC',
    info: 'Standard ERC-20 · gas élevé, sécurité maximale',
    color: 'from-indigo-500/30 to-blue-900/40',
  },
  {
    id: 'solana',
    label: 'Solana',
    token: 'USDC',
    info: 'Frais < 0,01 $ · transactions en quelques secondes',
    color: 'from-purple-500/30 to-fuchsia-900/40',
  },
]

export default function PurchasePanel({
  tokenPrice,
  tokensAvailable,
  supportedChains,
}: {
  tokenPrice: number
  tokensAvailable: number
  supportedChains: string[]
}) {
  const available = chains.filter((c) => supportedChains.includes(c.id))
  const [chain, setChain] = useState(available[0]?.id)
  const [quantity, setQuantity] = useState(1)
  const [payCrypto, setPayCrypto] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const total = quantity * tokenPrice
  const invalid = quantity < 1 || quantity > tokensAvailable
  const selectedChain = available.find((c) => c.id === chain)

  function buy() {
    if (invalid) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setQuantity((q) => Math.max(1, q - 1))
              setStatus('idle')
            }}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-lg hover:border-gold"
          >
            −
          </button>
          <input
            type="number"
            min={1}
            max={tokensAvailable}
            value={quantity}
            onChange={(e) => {
              setQuantity(Math.max(0, Number(e.target.value)))
              setStatus('idle')
            }}
            className="w-20 rounded-lg border border-white/15 bg-ink px-3 py-2 text-center font-semibold"
          />
          <button
            onClick={() => {
              setQuantity((q) => Math.min(tokensAvailable, q + 1))
              setStatus('idle')
            }}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-lg hover:border-gold"
          >
            +
          </button>
          <span className="text-sm text-slate-400">tokens</span>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-400">Total</div>
          <div className="text-2xl font-black text-gold">{total.toLocaleString('fr-FR')} €</div>
        </div>
      </div>

      {available.length > 0 && (
        <div className="mt-4">
          <div className="mb-2 flex items-center gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={payCrypto}
                onChange={(e) => {
                  setPayCrypto(e.target.checked)
                  setStatus('idle')
                }}
                className="h-4 w-4 accent-amber-400"
              />
              <span className="text-slate-300">Payer en crypto (stablecoin USDC)</span>
            </label>
          </div>
          {payCrypto && (
            <div className="grid gap-2 sm:grid-cols-2">
              {available.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setChain(c.id)
                    setStatus('idle')
                  }}
                  className={`rounded-xl border p-3 text-left transition ${
                    chain === c.id
                      ? 'border-gold bg-white/10'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{c.label}</span>
                    <span className="rounded-full bg-black/30 px-2 py-0.5 text-xs text-slate-300">
                      {c.token}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{c.info}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <button
        onClick={buy}
        className="mt-4 w-full rounded-xl bg-gold py-3 font-bold text-ink transition hover:bg-amber-400"
      >
        Investir maintenant
      </button>
      {status === 'success' && (
        <p className="mt-3 text-sm text-emerald-400">
          ✅ Ordre simulé : {quantity} token{quantity > 1 ? 's' : ''} pour{' '}
          {total.toLocaleString('fr-FR')} €
          {payCrypto && selectedChain
            ? `, réglés en ${selectedChain.token} sur ${selectedChain.label}.`
            : '.'}{' '}
          (Prototype — pas de paiement réel.)
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-400">
          Quantité invalide : choisissez entre 1 et {tokensAvailable.toLocaleString('fr-FR')} tokens.
        </p>
      )}
    </div>
  )
}
