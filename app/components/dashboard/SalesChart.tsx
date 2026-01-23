'use client'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { useState } from 'react'
import data from '../../../db.json'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow-sm text-sm">
        <p className="text-gray-800 font-medium">
          {payload[0].payload.category}
        </p>
        <p className="text-blue-500 font-semibold">
          {payload[0].value}
        </p>
      </div>
    )
  }
  return null
}

export default function SalesChart() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.chart}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="total"
            barSize={24}
            radius={[8, 8, 0, 0]}
            fill="#2563EB"
            stroke="none"
            style={{
              transition: 'all 0.3s',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transformOrigin: 'center bottom',
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
