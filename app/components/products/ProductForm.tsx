'use client'

import { useState, useEffect } from 'react'

interface ProductFormProps {
  onSubmit: (data: {
    name: string
    price: number
    quantity: number
    category: string
    description?: string
  }) => void
  initialData?: {
    name?: string
    price?: number
    quantity?: number
    category?: string
    description?: string
  }
}

export default function ProductForm({ onSubmit, initialData }: ProductFormProps) {
  const [name, setName] = useState(initialData?.name || '')
  const [price, setPrice] = useState(initialData?.price || 0)
  const [quantity, setQuantity] = useState(initialData?.quantity || 0)
  const [category, setCategory] = useState(initialData?.category || '')
  const [description, setDescription] = useState(initialData?.description || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !price || !quantity || !category) return
    onSubmit({ name, price, quantity, category, description })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      {/* Nom */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Nom du produit *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Clavier"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Prix */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Prix unitaire (DH) *</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Ex: 50"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Quantité */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Quantité *</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Ex: 10"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Catégorie */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Catégorie *</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Ex: Informatique"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ex: Clavier mécanique RGB"
          rows={4}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Boutons */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition"
        >
          {initialData ? 'Mettre à jour' : 'Ajouter le produit'}
        </button>
      </div>
    </form>
  )
}
