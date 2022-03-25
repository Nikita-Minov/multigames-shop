import {ProductType} from "../../screens/product.types";

export interface PayWindowProps {
  product: ProductType;
  payWays: Array<string>;
  setOpenedWindowPay: any;
}
