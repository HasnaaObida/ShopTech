import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Sale {
  id: string
  product: string
  quantity: number
  total: number
  date: string
}

interface SalesState {
  items: Sale[]
}

const initialState: SalesState = { items: [] }

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    addSale: (state, action: PayloadAction<Sale>) => {
      state.items.push(action.payload)
    },
  },
})

export const { addSale } = salesSlice.actions
export default salesSlice.reducer
