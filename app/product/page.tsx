'use client'

import { useSelector } from 'react-redux'
import { RootState } from '.././store'
import ProductTable from '.././components/products/ProductTable'
import ProductForm from './../components/products/ProductForm'

export default function ProductsPage() {
  const products = useSelector((state: RootState) => state.products)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductForm />
      <ProductTable products={products} />
    </div>
  )
}
