'use client'

export default function StatsCards() {
  const stats = [
    { label: 'Stock total', value: 120 },
    { label: 'Valeur totale du stock', value: '3,400€' },
    { label: 'Produits vendus', value: 75 },
    { label: 'Valeur totale des ventes', value: '1,250€' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(s => (
        <div key={s.label} className="bg-white p-4 shadow rounded text-center">
          <h3 className="text-sm text-gray-500">{s.label}</h3>
          <p className="text-xl font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  )
}
