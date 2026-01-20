const API_URL = 'http://localhost:4000'

export async function fetchProducts() {
  const res = await fetch(`${API_URL}/products`)
  return res.json()
}

export async function addProduct(product: any) {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
  return res.json()
}

export async function deleteProduct(id: number) {
  await fetch(`${API_URL}/products/${id}`, { method: 'DELETE' })
}
