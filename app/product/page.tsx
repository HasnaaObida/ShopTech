'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import {
  setProducts,
  deleteProduct as deleteRedux,
  updateProduct as updateRedux,
} from '../store/productsSlice'
import { fetchProducts, deleteProduct as deleteApi } from '../services/api'
import Link from 'next/link'
import { Pencil, Trash2 } from 'lucide-react'

export default function ProductsPage() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products)

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  // Modals
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [productToDelete, setProductToDelete] = useState<number | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [productToEdit, setProductToEdit] = useState<any>(null)
  const [editForm, setEditForm] = useState({
    name: '',
    price: 0,
    quantity: 0,
    category: '',
  })

  useEffect(() => {
    fetchProducts().then(data => {
      dispatch(setProducts(data))
      setLoading(false)
    })
  }, [dispatch])

  const categories = Array.from(new Set(products.map(p => p.category)))

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (categoryFilter ? p.category === categoryFilter : true))

  /* ================= DELETE ================= */

  const handleDelete = async () => {
    if (!productToDelete) return
    await deleteApi(productToDelete)
    dispatch(deleteRedux(productToDelete))
    setShowDeleteModal(false)
  }

  /* ================= EDIT ================= */

  const openEditModal = (product: any) => {
    setProductToEdit(product)
    setEditForm({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
    })
    setShowEditModal(true)
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!productToEdit) return

    const updated = { ...productToEdit, ...editForm }

    // 🔥 SAFE UPDATE (NO API HELPER)
    await fetch(`/api/products/${updated.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })

    dispatch(updateRedux(updated))
    setShowEditModal(false)
  }

  if (loading) return <p className="p-6 text-gray-500">Chargement...</p>

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* ===== HEADER ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Produits</h1>
          <p className="text-gray-500">
            Gérez votre catalogue de {products.length} produits
          </p>
        </div>

        <Link
          href="/product/new"
          className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl shadow hover:bg-orange-600 transition"
        >
          + Ajouter un produit
        </Link>
      </div>

      {/* ===== SEARCH & FILTER ===== */}
      <div className="flex flex-col lg:flex-row gap-4">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Toutes catégories</option>
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* ===== TABLE ===== */}
      <div className="bg-white rounded-2xl shadow border overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left">Nom</th>
              <th className="p-4 text-left">Catégorie</th>
              <th className="p-4 text-left">Quantité</th>
              <th className="p-4 text-left">Prix</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map(p => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{p.name}</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-200">
                    {p.category}
                  </span>
                </td>

                <td
                  className={`p-4 font-semibold ${
                    p.quantity < 20 ? 'text-red-500' : ''
                  }`}
                >
                  {p.quantity}
                </td>

                <td className="p-4">{p.price} DH</td>

                <td className="p-4 flex justify-end gap-4">
                  <button
                    onClick={() => openEditModal(p)}
                    className="text-gray-600 hover:text-orange-500"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => {
                      setProductToDelete(p.id)
                      setShowDeleteModal(true)
                    }}
                    className="text-gray-600 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== DELETE MODAL ===== */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-3">
              Supprimer ce produit ?
            </h2>
            <p className="text-gray-500 mb-6">
              Cette action est irréversible.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Annuler
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== EDIT MODAL ===== */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Modifier le produit
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                value={editForm.name}
                onChange={e =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                placeholder="Nom"
              />
              <input
                type="number"
                value={editForm.price}
                onChange={e =>
                  setEditForm({ ...editForm, price: Number(e.target.value) })
                }
                className="w-full p-3 border rounded-lg"
                placeholder="Prix"
              />
              <input
                type="number"
                value={editForm.quantity}
                onChange={e =>
                  setEditForm({
                    ...editForm,
                    quantity: Number(e.target.value),
                  })
                }
                className="w-full p-3 border rounded-lg"
                placeholder="Quantité"
              />
              <input
                value={editForm.category}
                onChange={e =>
                  setEditForm({ ...editForm, category: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                placeholder="Catégorie"
              />

              <div className="flex justify-end gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
