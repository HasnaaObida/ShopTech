'use client'

import { useParams } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { updateProduct } from '../../store/productsSlice'
import ProductForm from '../../components/products/ProductForm'

export default function ProductPage() {
  const { id } = useParams() // dynamic route
  const dispatch = useDispatch()

  // Find the product from the store by ID
  const product = useSelector((state: RootState) =>
    state.products.find((p) => p.id === Number(id))
  )

  if (!product) {
    return <div className="p-6">Produit introuvable</div>
  }

  const handleUpdate = (updatedProduct: { name: string; price: number }) => {
    dispatch(updateProduct({ id: product.id, ...updatedProduct }))
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Modifier le produit</h1>
      <ProductForm
        onSubmit={handleUpdate}
        initialData={{ name: product.name, price: product.price }}
      />
    </div>
  )
}
