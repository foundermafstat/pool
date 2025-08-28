'use client';

import { useMemo, useState } from 'react';

export default function QuoteCalculator() {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [screenType, setScreenType] = useState<'standard' | 'premium'>('standard');

  const calculatePrice = useMemo(() => {
    const basePrice = Number(length) * Number(width) * 12; // $12 per sq ft
    const screenMultiplier = screenType === 'premium' ? 1.3 : 1.0;
    return (basePrice * screenMultiplier).toFixed(2);
  }, [length, width, screenType]);

  async function submitQuoteRequest() {
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        poolDimensions: { length, width },
        screenType,
        price: calculatePrice,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert('Failed: ' + (data.error || JSON.stringify(data.errors)));
      return;
    }
    alert('Request submitted! Estimated price: $' + calculatePrice);
  }

  return (
    <div className="quote-calculator space-y-4 rounded border p-4">
      <h3 className="text-xl font-semibold">Get Your Instant Quote</h3>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="block">
          <span className="block text-sm">Length (ft)</span>
          <input
            type="number"
            min={0}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="mt-1 w-full rounded border p-2"
          />
        </label>
        <label className="block">
          <span className="block text-sm">Width (ft)</span>
          <input
            type="number"
            min={0}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="mt-1 w-full rounded border p-2"
          />
        </label>
        <label className="block">
          <span className="block text-sm">Screen Type</span>
          <select
            value={screenType}
            onChange={(e) => setScreenType(e.target.value as 'standard' | 'premium')}
            className="mt-1 w-full rounded border p-2"
          >
            <option value="standard">Standard</option>
            <option value="premium">Premium (+30%)</option>
          </select>
        </label>
      </div>
      <div className="flex items-center justify-between rounded bg-neutral-50 p-3">
        <span className="text-sm text-neutral-700">Estimated Price</span>
        <span className="text-lg font-semibold">${calculatePrice}</span>
      </div>
      <button
        onClick={submitQuoteRequest}
        className="inline-flex h-14 min-w-56 items-center justify-center rounded bg-blue-700 px-6 text-white hover:bg-blue-800 focus:outline-blue-900"
      >
        Get Detailed Quote
      </button>
    </div>
  );
}
