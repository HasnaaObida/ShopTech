'use client'

import { useState } from 'react'
import data from '../../../db.json'

export default function SalesTable() {
  const [category, setCategory] = useState('all')

  const categories = Array.from(new Set(data.sales.map(s => s.category)))

  const filteredSales =
    category === 'all'
      ? data.sales
      : data.sales.filter(s => s.category === category)

  return (
    <div className="p-4 bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200 p-2">
        
        {/* Header + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Dernières ventes</h1>
            <p className="text-gray-500 mt-1 text-sm">Historique récent des transactions</p>
          </div>
          <div className="flex-shrink-0">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-xl px-3 py-1 text-sm bg-white text-gray-700 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
              <option value="all">Toutes catégories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-1 px-2 font-medium text-gray-700 rounded-tl-xl">Produit</th>
                <th className="py-1 px-2 font-medium text-gray-700">Catégorie</th>
                <th className="py-1 px-2 text-right font-medium text-gray-700">Quantité</th>
                <th className="py-1 px-2 text-right font-medium text-gray-700">Prix unitaire</th>
                <th className="py-1 px-2 text-right font-medium text-gray-700 rounded-tr-xl">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.map((s, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="py-1 px-2 text-gray-800">{s.product}</td>
                  <td className="py-1 px-2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                      {s.category}
                    </span>
                  </td>
                  <td className="py-1 px-2 text-right text-gray-700 font-medium">{s.quantity}</td>
                  <td className="py-1 px-2 text-right text-gray-800 font-semibold">{s.price} DH</td>
                  <td className="py-1 px-2 text-right text-gray-500">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
