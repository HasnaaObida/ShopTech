'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { category: 'Informatique', total: 20 },
  { category: 'Cuisine', total: 15 },
  { category: 'Vêtements', total: 10 },
]

export default function SalesChart() {
  return (
    <div className="bg-white p-4 shadow rounded" style={{ height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
