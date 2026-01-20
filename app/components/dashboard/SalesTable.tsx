'use client'

import data from '../../../db.json'

export default function SalesTable() {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">Dernières ventes</h3>

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Produit</th>
            <th className="p-3 text-left">Catégorie</th>
            <th className="p-3 text-right">Qté</th>
            <th className="p-3 text-right">Prix</th>
            <th className="p-3 text-right">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.sales.map((s, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{s.product}</td>
              <td className="p-3">{s.category}</td>
              <td className="p-3 text-right">{s.quantity}</td>
              <td className="p-3 text-right">{s.price} DH</td>
              <td className="p-3 text-right text-gray-500">{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
