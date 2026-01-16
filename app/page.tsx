'use client'

import StatsCards from './components/dashboard/StatsCards'
import dynamic from 'next/dynamic'


const SalesChart = dynamic(() => import('./components/dashboard/SalesChart'), { ssr: false })
const SalesTable = dynamic(() => import('./components/dashboard/SalesTable'), { ssr: false })

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsCards />
      <SalesChart />
      <SalesTable /> 
    </div>
  )
}
