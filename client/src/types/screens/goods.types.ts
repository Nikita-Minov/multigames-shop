import {Product} from '../redux/reducers/productsReducer/productsReducer.types';

export interface Filter {
  name: string;
  id: number;
  touched: boolean;
  sortFn?: any;
  revSortFn?: any;
}

export interface GoodsProps {
  updateUsualFilter: any;
  updateCustomFilter: any;
  customFilter: Array<Filter>;
  usualFilter: Array<Filter>;
  products: Array<Product>;
}
