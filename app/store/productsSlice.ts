import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id: string
  name: string
  category: string
  quantity: number
  price: number
}

interface ProductsState {
  items: Product[]
}

const initialState: ProductsState = {
  items: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(p => p.id !== action.payload)
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer
