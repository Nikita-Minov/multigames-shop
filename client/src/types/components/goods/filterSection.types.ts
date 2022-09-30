import {Filter} from "../../screens/goods.types";
import {Product} from '../../redux/reducers/productsReducer/productsReducer.types';

export interface FilterSectionProps {
  usualFilter: Array<Filter>;
  customFilter: Array<Filter>;
  updateUsualFilter: any;
  updateCustomFilter: any;
  products: Array<Product>;
}

export interface FilterProps {
  length: number;
}

export interface FilterItemProps {
  touched: boolean;
}