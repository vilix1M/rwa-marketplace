'use client'

import { useState } from 'react'

export default function PurchasePanel({
  tokenPrice,
  tokensAvailable,
}: {
  tokenPrice: number
  tokensAvailable: number
}) {
  const [quantity, setQuantity] = useState(1)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const total = quantity * tokenPrice
  const invalid = quantity < 1 || quantity > tokensAvailable

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
      <button
        onClick={buy}
        className="mt-4 w-full rounded-xl bg-gold py-3 font-bold text-ink transition hover:bg-amber-400"
      >
        Investir maintenant
      </button>
      {status === 'success' && (
        <p className="mt-3 text-sm text-emerald-400">
          ✅ Ordre simulé : {quantity} token{quantity > 1 ? 's' : ''} pour{' '}
          {total.toLocaleString('fr-FR')} €. (Prototype — pas de paiement réel.)
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
