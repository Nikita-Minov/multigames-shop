export interface Order {
  orderName: string;
  amount: number;
  email: string;
  date: any;
  data: string[];
  price: number;
}

export interface OrderState {
  order: Order;
}

/* eslint-disable no-unused-vars */

export enum OrderActionTypes {
  SET_ORDER = 'SET_ORDER',
}
/* eslint-enable no-unused-vars */

interface SetOrderAction {
  type: OrderActionTypes.SET_ORDER,
  payload: {
    order: Order;
  }
}

export type Action = SetOrderAction;
