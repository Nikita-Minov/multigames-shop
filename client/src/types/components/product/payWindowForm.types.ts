import {ProductType} from "../../screens/product.types";

export interface PayWindowFormProps {
  product: ProductType;
  payWays: Array<string>;
  setOpenedWindowPay: any;
}

export interface MyFormValues {
  amount: number;
  email: string;
}