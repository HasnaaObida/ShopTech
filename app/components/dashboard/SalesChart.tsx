'use client'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const data = {
  labels: ['Informatique', 'Cuisine', 'Vêtements'],
  datasets: [
    {
      label: 'Produits vendus',
      data: [20, 15, 10],
      backgroundColor: '#3b82f6',
    },
  ],
}

export default function SalesChart() {
  return (
    <div className="bg-white p-4 shadow rounded" style={{ height: 320 }}>
      <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  )
}
