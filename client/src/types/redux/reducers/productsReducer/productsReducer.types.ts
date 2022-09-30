export interface Product {
  productId: number;
  productName: string;
  sales: number;
  description: string;
  category: string;
  photos: string[];
  productPrice: number;
  inStock: number;
}

export interface ProductsState {
  products: Product[];
  currentProduct: Product;
}

/* eslint-disable no-unused-vars */

export enum ProductsActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
}
/* eslint-enable no-unused-vars */

interface SetProductsAction {
  type: ProductsActionTypes.SET_PRODUCTS,
  payload: {
    products: Product[];
  }
}

interface SetCurrentProductAction {
  type: ProductsActionTypes.SET_CURRENT_PRODUCT,
  payload: {
    product: Product;
  }
}

export type Action = SetProductsAction | SetCurrentProductAction;
