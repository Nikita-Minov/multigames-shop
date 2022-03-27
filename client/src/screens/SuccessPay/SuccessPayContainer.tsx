import * as React from 'react';
import SuccessPay from './SuccessPay';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {
  getOrder,
} from '../../redux/reducers/orderReducer/orderReducer';
import {useDispatch, useSelector} from 'react-redux';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */

const SuccessPayContainer = () => {
  const order = useSelector((state: StoreTypes) =>
    state.orderReducer.order);
  const dispatch = useDispatch();
  const {orderId} = useParams();
  useEffect(() => {
    dispatch(getOrder(orderId));
  }, []);
  return (
    <SuccessPay
      email={order.email}
      orderName={order.orderName}
      amount={order.amount}
      price={order.price}
      data={order.data}
      date={order.date}
    />
  );
};

export default SuccessPayContainer;
