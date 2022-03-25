import {Filter} from '../../../screens/goods.types';

export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface CategoriesState {
  categories: Category[];
  mappedCategories: Array<Filter>;
}

/* eslint-disable no-unused-vars */

export enum CategoriesActionTypes {
  SET_CATEGORIES = 'SET_CATEGORIES',
  SET_MAPPED_CATEGORIES = 'SET_MAPPED_CATEGORIES',
}
/* eslint-enable no-unused-vars */

interface SetCategoriesAction {
  type: CategoriesActionTypes.SET_CATEGORIES,
  payload: {
    categories: Category[];
  }
}

interface SetMappedCategoriesAction {
  type: CategoriesActionTypes.SET_MAPPED_CATEGORIES,
  payload: {
    mappedCategories: Array<Filter>;
  }
}

export type Action = SetCategoriesAction | SetMappedCategoriesAction;
