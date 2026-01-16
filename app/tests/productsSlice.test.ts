import productsReducer, { addProduct, removeProduct, updateProduct } from '../store/productsSlice';
import { Product } from '../types/product';

describe('productsSlice', () => {
    const initialState: Product[] = [];

    it('should return the initial state', () => {
        expect(productsReducer(undefined, { type: 'unknown' })).toEqual([]);
    });

    it('should handle adding a product', () => {
        const newProduct: Product = { id: 1, name: 'Laptop', price: 1200 };
        const nextState = productsReducer(initialState, addProduct(newProduct));
        expect(nextState).toHaveLength(1);
        expect(nextState[0]).toEqual(newProduct);
    });

    it('should handle removing a product', () => {
        const state: Product[] = [
            { id: 1, name: 'Laptop', price: 1200 },
            { id: 2, name: 'Mouse', price: 30 }
        ];
        const nextState = productsReducer(state, removeProduct(1));
        expect(nextState).toHaveLength(1);
        expect(nextState[0].id).toBe(2);
    });

    it('should handle updating a product', () => {
        const state: Product[] = [{ id: 1, name: 'Laptop', price: 1200 }];
        const updatedProduct: Product = { id: 1, name: 'Laptop Pro', price: 1500 };
        const nextState = productsReducer(state, updateProduct(updatedProduct));
        expect(nextState[0].name).toBe('Laptop Pro');
        expect(nextState[0].price).toBe(1500);
    });
});
