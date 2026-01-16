'use client'

const sales = [
  { product: 'Clavier', category: 'Informatique', quantity: 5, price: 50, date: '2024-12-01' },
  { product: 'T-shirt', category: 'Vêtements', quantity: 3, price: 20, date: '2024-12-02' },
]

export default function SalesTable() {
  return (
    <div className="bg-white p-4 shadow rounded overflow-x-auto">
      <table className="w-full text-sm table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Produit</th>
            <th className="p-2">Catégorie</th>
            <th className="p-2">Quantité</th>
            <th className="p-2">Prix</th> 
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{s.product}</td>
              <td className="p-2">{s.category}</td>
              <td className="p-2">{s.quantity}</td>
              <td className="p-2">{s.price}€</td>
              <td className="p-2">{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
