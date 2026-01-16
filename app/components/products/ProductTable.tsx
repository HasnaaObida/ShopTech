'use client'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Product } from '../../store/productsSlice'

export default function ProductTable() {
  const products: Product[] = useSelector((state: RootState) => state.products.items)

  return (
    <div className="bg-white p-4 shadow rounded overflow-x-auto">
      <table className="w-full text-sm table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Nom</th>
            <th className="p-2">Catégorie</th>
            <th className="p-2">Quantité</th>
            <th className="p-2">Prix</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">{p.quantity}</td>
              <td className="p-2">{p.price}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
