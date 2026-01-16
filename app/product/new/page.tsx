'use client'

import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/productsSlice'
import ProductForm from '../../components/products/ProductForm'

export default function NewProductPage() {
  const dispatch = useDispatch()

  const handleAdd = (product: { name: string; price: number }) => {
    dispatch(addProduct(product))
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ajouter un produit</h1>
      <ProductForm onSubmit={handleAdd} />
    </div>
  )
}
