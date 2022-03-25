/* eslint-disable no-unused-vars */
import {
  Action,
  ProductsState,
  ProductsActionTypes,
  Product,
} from '../../../types/redux/reducers/productsReducer/productsReducer.types';
/* eslint-enable no-unused-vars */
import productsAPI from '../../../api/products.api';

const initialState: ProductsState = {
  products: [],
  currentProduct: {
    productId: 0,
    productName: '',
    sales: 0,
    description: '',
    category: '',
    photos: [],
    productPrice: 0,
    inStock: 0,
  },
};

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case ProductsActionTypes.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload.product,
      };
    default:
      return state;
  }
};

export const setProducts = (products: any) => {
  return {
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: {
      products,
    },
  };
};

export const setCurrentProduct = (product: any) => {
  return {
    type: ProductsActionTypes.SET_CURRENT_PRODUCT,
    payload: {
      product,
    },
  };
};

export const getCurrentProduct = (productId: number) =>
  async (dispatch: any) => {
    const product = await productsAPI.getProduct({productId});
    dispatch(setCurrentProduct(product));
  };

export const getProducts = () => async (dispatch: any) => {
  const products = await productsAPI.getAllProducts();
  dispatch(setProducts(products));
};

export const deleteProduct = (token: string, productId: number) =>
  async (dispatch: any) => {
    await productsAPI.deleteProduct({token, productId});
    dispatch(getProducts());
  };

export const createProduct = (token: string,
    productName: string,
    data: {accounts: Array<string>},
    description: string,
    photos: {arr: Array<string>},
    productPrice: number,
    categoryId: number,
) =>
  async (dispatch: any) => {
    await productsAPI.createProduct({
      token,
      categoryId,
      productPrice,
      productName,
      photos,
      description,
      data,
    });
    dispatch(getProducts());
  };

export const addDataProduct = (
    token: string,
    productId: number,
    data: string,
) =>
  async (dispatch: any) => {
    await productsAPI.addData({
      token,
      productId,
      data,
    });
    dispatch(getProducts());
  };

export default productsReducer;
