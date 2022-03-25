import {UsersState} from './reducers/usersReducer/usersReducer.types';
import {ProductsState} from './reducers/productsReducer/productsReducer.types';
import {CategoriesState} from './reducers/categoriesReducer/categoriesReducer.types';
import {AgreementsState} from "./reducers/agreementsReducer/agreementsReducer.types";

export interface StoreTypes {
  usersReducer: UsersState;
  productsReducer: ProductsState;
  categoriesReducer: CategoriesState;
  agreementsReducer: AgreementsState;
}