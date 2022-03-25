/* eslint-disable no-unused-vars */
import categoriesAPI from '../../../api/categories.api';
import {
  Action,
  CategoriesActionTypes,
  CategoriesState,
} from
  '../../../types/redux/reducers/categoriesReducer/categoriesReducer.types';
import {Filter} from '../../../types/screens/goods.types';
import {
  Product,
} from '../../../types/redux/reducers/productsReducer/productsReducer.types';
/* eslint-enable no-unused-vars */

const initialState: CategoriesState = {
  categories: [],
  mappedCategories: [],
};

const categoriesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CategoriesActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case CategoriesActionTypes.SET_MAPPED_CATEGORIES:
      return {
        ...state,
        mappedCategories: action.payload.mappedCategories,
      };
    default:
      return state;
  }
};

export const setCategories = (categories: any) => {
  return {
    type: CategoriesActionTypes.SET_CATEGORIES,
    payload: {
      categories,
    },
  };
};

export const setMappedCategories = (mappedCategories: Array<Filter>) => {
  return {
    type: CategoriesActionTypes.SET_MAPPED_CATEGORIES,
    payload: {
      mappedCategories,
    },
  };
};


export const getAllCategories = () => async (dispatch: any) => {
  const categories = await categoriesAPI.getAllCategories();
  dispatch(setCategories(categories));
  if (categories) {
    const mappedCategories = categories.map((el: any, id: any) => {
      return {
        name: el.categoryName,
        id: id,
        touched: false,
        sortFn(arr: Array<Product>) {
          return arr.filter((el) => el.category == this.name);
        },
        revSortFn(arr: Array<Product>) {
          return arr.filter((el) => el.category != this.name);
        },
      };
    });
    dispatch(setMappedCategories(mappedCategories));
  }
};

export const deleteCategory = (
    categoryId: number,
    token: string,
) => async (dispatch: any) => {
  await categoriesAPI.deleteCategory({categoryId, token});
  dispatch(getAllCategories());
};

export const createCategory = (
    categoryName: string,
    token: string,
) => async (dispatch: any) => {
  await categoriesAPI.addCategory({categoryName, token});
  dispatch(getAllCategories());
};

export default categoriesReducer;
