export async function fetchProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products (${res.status})`);
  }

  return res.json();
}
