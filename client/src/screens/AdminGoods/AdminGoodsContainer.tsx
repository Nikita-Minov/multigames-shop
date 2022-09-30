import * as React from 'react';
import AdminGoods from './AdminGoods';
import {useSelector} from 'react-redux';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */

const AdminGoodsContainer = () => {
  const products = useSelector((state: StoreTypes) =>
    state.productsReducer.products);
  return (
    <AdminGoods products={products}/>
  );
};

export default AdminGoodsContainer;
