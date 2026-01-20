'use client'

import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/productsSlice'
import { addProduct as addApi } from '../../services/api'
import { useRouter } from 'next/navigation'

export default function NewProductPage() {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const product = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      quantity: Number((form.elements.namedItem('quantity') as HTMLInputElement).value),
      price: Number((form.elements.namedItem('price') as HTMLInputElement).value),
      category: (form.elements.namedItem('category') as HTMLSelectElement).value,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
    }

    const saved = await addApi(product)
    dispatch(addProduct(saved))
    router.push('/product')
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* ===== HEADER ===== */}
      <h1 className="text-3xl font-bold mb-1">Ajouter un produit</h1>
      <p className="text-gray-500 mb-8">
        Remplissez les informations ci-dessous
      </p>

      {/* ===== CARD ===== */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow border border-gray-100 p-8 space-y-6"
      >
        {/* Nom */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Nom du produit *
          </label>
          <input
            name="name"
            placeholder="Ex: MacBook Pro"
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Quantité + Prix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Quantité *
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={0}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Prix unitaire (DH) *
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              defaultValue={0}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
        </div>

        {/* Catégorie */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Catégorie *
          </label>
          <select
            name="category"
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="">Sélectionner une catégorie</option>
            <option value="Informatique">Informatique</option>
            <option value="Vêtements">Vêtements</option>
            <option value="Mobilier">Mobilier</option>
            <option value="Cuisine">Cuisine</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Description du produit..."
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Boutons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Ajouter le produit
          </button>
          <button
            type="button"
            onClick={() => router.push('/product')}
            className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  )
}
