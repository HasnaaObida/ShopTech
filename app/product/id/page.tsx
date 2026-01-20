'use client'

import { useParams, useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { updateProduct, deleteProduct as deleteRedux } from '../../store/productsSlice'
import ProductForm from '../../components/products/ProductForm'
import { deleteProduct as deleteApi } from '../../services/api'
import Link from 'next/link'

export default function ProductPage() {
  const { id } = useParams() // dynamic route
  const router = useRouter()
  const dispatch = useDispatch()

  // Find the product from the store by ID
  const product = useSelector((state: RootState) =>
    state.products.find((p) => p.id === Number(id))
  )

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        Produit introuvable
        <Link href="/product" className="text-indigo-600 hover:underline block mt-2">
          Retour à la liste des produits
        </Link>
      </div>
    )
  }

  const handleUpdate = (updatedProduct: any) => {
    dispatch(updateProduct({ id: product.id, ...updatedProduct }))
    router.push('/product')
  }

  const handleDelete = async () => {
    if (!confirm('Voulez-vous vraiment supprimer ce produit ?')) return
    await deleteApi(product.id)
    dispatch(deleteRedux(product.id))
    router.push('/product')
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Modifier le produit</h1>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
        >
          Supprimer
        </button>
      </div>

      <p className="text-gray-500 mb-6">
        Modifiez les informations du produit existant
      </p>

      <ProductForm
        onSubmit={handleUpdate}
        initialData={{
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          category: product.category,
          description: product.description
        }}
      />
    </div>
  )
}
