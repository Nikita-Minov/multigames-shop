/* eslint-disable no-unused-vars */
import {
  OrderActionTypes,
  OrderState,
  Action,
} from '../../../types/redux/reducers/orderReducer/orderReducer.types';
import payAPI from '../../../api/pay.api';
/* eslint-enable no-unused-vars */

const initialState: OrderState = {
  order: {
    orderName: '',
    amount: 0,
    email: '',
    date: new Date(),
    data: [],
    price: 0,
  },
};

const orderReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case OrderActionTypes.SET_ORDER:
      return {
        ...state,
        order: action.payload.order,
      };
    default:
      return state;
  }
};

export const setOrder = (order: any) => {
  return {
    type: OrderActionTypes.SET_ORDER,
    payload: {
      order,
    },
  };
};

export const getOrder = (orderId: string | undefined) =>
  async (dispatch: any) => {
    if (!orderId) return console.log('Неправильный ид!');
    else {
      const order = await payAPI.getOrder({orderId});
      console.log(order.date);
      dispatch(setOrder(order));
    }
  };

export default orderReducer;
