'use client'

import { BarChart3, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react'
import data from '../../../db.json'

export default function AiInsight() {
  const ai = data?.ai ?? {}

  return (
    <div
      className="
        bg-white rounded-2xl p-6 border border-gray-100
        shadow-md transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-orange-200
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="
            p-2 bg-orange-100 text-orange-500 rounded-lg
            transition-transform duration-300
            group-hover:rotate-6
          "
        >
          <Sparkles size={18} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Analyse IA</h3>
          <p className="text-sm text-gray-500">
            Insights générés automatiquement
          </p>
        </div>
      </div>

      {/* Liste des insights */}
      <ul className="space-y-3 text-sm text-gray-700">
        <li className="flex gap-2 items-start hover:text-blue-600 transition-colors">
          <BarChart3 className="text-blue-500 mt-0.5" size={18} />
          {ai.electronics ??
            'La catégorie Électronique domine les ventes ce mois-ci.'}
        </li>

        <li className="flex gap-2 items-start hover:text-green-600 transition-colors">
          <TrendingUp className="text-green-500 mt-0.5" size={18} />
          {ai.sales ??
            'Les ventes sont en hausse par rapport au mois précédent.'}
        </li>

        <li className="flex gap-2 items-start hover:text-yellow-600 transition-colors">
          <AlertTriangle className="text-yellow-500 mt-0.5" size={18} />
          {ai.alert ??
            'Attention : certains produits ont un stock faible.'}
        </li>
      </ul>
    </div>
  )
}
