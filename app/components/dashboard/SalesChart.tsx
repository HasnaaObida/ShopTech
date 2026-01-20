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
import data from '../../../db.json'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ padding: 8, background: '#fff', border: '1px solid #ddd', borderRadius: 4 }}>
        <p style={{ margin: 0, fontSize: 14, color: '#333' }}>
          {payload[0].payload.category}: {payload[0].value}
        </p>
      </div>
    )
  }
  return null
}

export default function SalesChart() {
  return (
    <div style={{ height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.chart} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fill: '#6b7280', fontSize: 12 }} />
          <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="total"
            fill="#2563eb"
            barSize={24}
            radius={[8, 8, 0, 0]}
            animationDuration={900}
            animationEasing="ease-in-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
