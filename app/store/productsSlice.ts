import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'

const initialState: Product[] = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<Product[]>) => action.payload,
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      return state.filter(p => p.id !== action.payload)
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(p => p.id === action.payload.id)
      if (index >= 0) state[index] = action.payload
    }
  }
})

export const { setProducts, addProduct, deleteProduct, updateProduct } = productsSlice.actions
export default productsSlice.reducer
