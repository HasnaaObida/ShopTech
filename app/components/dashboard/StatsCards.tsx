'use client'

import { ShoppingCart, Euro, Package, TrendingUp } from 'lucide-react'
import data from '../../../db.json'

export default function StatsCards() {
  const stats = data?.stats ?? []

  const icons = [
    Package,
    Euro,
    ShoppingCart,
    TrendingUp,
  ]

  const colors = [
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-purple-100 text-purple-600',
    'bg-yellow-100 text-yellow-600',
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat, index) => {
        const Icon = icons[index] ?? Package
        const color = colors[index] ?? 'bg-gray-100 text-gray-500'

        return (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300 flex items-center gap-4"
          >
            {/* Icon */}
            <div className={`p-3 rounded-full ${color} flex items-center justify-center`}>
              <Icon size={22} />
            </div>

            {/* Stats */}
            <div className="flex flex-col">
              <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              {stat.change && (
                <p className="text-xs text-green-500 mt-0.5">{stat.change}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
