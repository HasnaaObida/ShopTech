import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // or your JSON server / backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const addProduct = async (product: any) => {
  const response = await api.post('/products', product);
  return response.data;
};

export const updateProduct = async (product: any) => {
  const response = await api.put(`/products/${product.id}`, product);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export default api;
