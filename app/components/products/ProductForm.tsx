// ProductForm.tsx
'use client'

type Props = {
  onSubmit: (product: { id: number; name: string }) => void
}

export default function ProductForm({ onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const product = { id: Date.now(), name: 'Test Product' }
        onSubmit(product)
      }}
    >
      <input type="text" placeholder="Nom du produit" className="border p-2 mr-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Ajouter</button>
    </form>
  )
}
