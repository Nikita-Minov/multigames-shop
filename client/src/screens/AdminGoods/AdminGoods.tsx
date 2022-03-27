import * as React from 'react';
import styled from 'styled-components';
import {
  Product,
} from '../../types/redux/reducers/productsReducer/productsReducer.types';
import AdminGoodsList from '../../components/AdminGoods/AdminGoodsList';
import AdminCategoriesAddForm
  from '../../components/AdminGoods/AdminGoodsAddForm';
import payAPI from '../../api/pay.api';
import {useCookies} from 'react-cookie';

interface AdminGoodsProps {
  products: Array<Product>;
}

const AdminGoods = ({products}: AdminGoodsProps) => {
  const [cookies] = useCookies();
  const getLog = async (token: string) => {
    const res = await payAPI.getLog(token);
    return res;
  };
  const clearLog = async (token: string) => {
    const res = await payAPI.deleteLog(token);
    return res;
  };
  return (
    <AdminGoodsWrapper>
      <AdminCategoriesAddForm/>
      <StyledButton onClick={async () => {
        await getLog(cookies.token);
      }}>Скачать лог</StyledButton>
      <StyledButton onClick={async () => {
        await clearLog(cookies.token);
      }}>Очистить лог</StyledButton>
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

const StyledButton = styled.button`
  margin-bottom: 40px;
`;

export default AdminGoods;
