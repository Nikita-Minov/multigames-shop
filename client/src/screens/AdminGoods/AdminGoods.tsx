import * as React from 'react';
import styled from 'styled-components';
import {
  Product,
} from '../../types/redux/reducers/productsReducer/productsReducer.types';
import AdminGoodsList from '../../components/AdminGoods/AdminGoodsList';
import AdminCategoriesAddForm
  from '../../components/AdminGoods/AdminGoodsAddForm';

interface AdminGoodsProps {
  products: Array<Product>;
}

const AdminGoods = ({products}: AdminGoodsProps) => {
  return (
    <AdminGoodsWrapper>
      <AdminCategoriesAddForm/>
      <AdminGoodsList products={products}/>
    </AdminGoodsWrapper>
  );
};

const AdminGoodsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AdminGoods;
