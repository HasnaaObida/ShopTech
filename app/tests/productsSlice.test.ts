import productsReducer, {
  setProducts,
  addProduct,
  deleteProduct,
  Product
} from '../app/store/productsSlice'

describe('productsSlice', () => {
  test('should return the initial state', () => {
    const initial = productsReducer(undefined, { type: undefined })
    expect(initial).toEqual([])
  })

  test('should handle setProducts', () => {
    const initialState: Product[] = []
    const products: Product[] = [
      { id: 1, name: 'Clavier', price: 50 }
    ]
    const newState = productsReducer(initialState, setProducts(products))
    expect(newState).toEqual(products)
    expect(newState).toHaveLength(1)
  })

  test('should handle addProduct', () => {
    const initialState: Product[] = []
    const newState = productsReducer(
      initialState,
      addProduct({ id: 1, name: 'Clavier', price: 50 })
    )
    expect(newState).toHaveLength(1)
    expect(newState[0].name).toBe('Clavier')
  })

  test('should handle deleteProduct', () => {
    const initialState: Product[] = [
      { id: 1, name: 'Clavier', price: 50 }
    ]
    const newState = productsReducer(
      initialState,
      deleteProduct(1)
    )
    expect(newState).toHaveLength(0)
  })
})
