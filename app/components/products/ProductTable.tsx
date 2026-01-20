'use client'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

export default function ProductTable({
  products,
  onDelete
}: {
  products: Product[]
  onDelete: (id: number) => void
}) {
  if (!Array.isArray(products)) return <p>Pas de produits</p>

  return (
    <table className="w-full bg-white rounded shadow">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">Nom</th>
          <th className="p-2">Prix</th>
          <th className="p-2">Qté</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id} className="border-t hover:bg-gray-50 transition">
            <td className="p-2">{p.name}</td>
            <td className="p-2">{p.price}DH</td>
            <td className="p-2">{p.quantity}</td>
            <td className="p-2">
              <button
                onClick={() => onDelete(p.id)}
                className="text-red-500 hover:underline"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
