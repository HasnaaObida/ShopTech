'use client'

import StatsCards from './components/dashboard/StatsCards'
import SalesChart from './components/dashboard/SalesChart'
import SalesTable from './components/dashboard/SalesTable'
import AiInsight from './components/dashboard/AiInsight'

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 space-y-8">
      {/* HEADER */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Vue d&apos;ensemble de votre inventaire et ventes
          </p>
        </div>
      </header>

      {/* STATS */}
      <StatsCards />

      {/* CHART + AI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border">
          <h2 className="text-xl font-semibold mb-4">
            Ventes par catégorie
          </h2>
          <SalesChart />
        </div>

        <AiInsight />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-md border p-6">
        <SalesTable />
      </div>
    </div>
  )
}
