import * as React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';
import {
  deleteProduct,
} from '../../redux/reducers/productsReducer/productsReducer';
import {
  Product,
} from '../../types/redux/reducers/productsReducer/productsReducer.types';
import AdminCategoriesAddForm from './AdminGoodsAddDataForm';

interface AdminGoodsListProps {
  products: Array<Product>;
}

const AdminGoodsList = ({products}: AdminGoodsListProps) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const delProduct = (productId: number, token: string) => {
    dispatch(deleteProduct(token, productId));
  };
  return (
    <>
      {products?products.map((el, id) => {
        return (
          <GoodsItem key={id}>
            <ListItem>Название: {el.productName}</ListItem>
            <ListItem>Цена: {el.productPrice}</ListItem>
            <ListItem>Категория: {el.category}</ListItem>
            <ListItem>В наличии: {el.inStock}</ListItem>
            <ListItem>Продаж: {el.sales}</ListItem>
            <AdminCategoriesAddForm productId={el.productId}/>
            <button onClick={() => {
              delProduct(el.productId, cookies.token);
            }}>Удалить</button>
          </GoodsItem>
        );
      }): <>Нет товаров</>}
    </>);
};

const GoodsItem = styled.div`
  border: 2px solid #000000;
  border-radius: 15px;
  width: 80%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
`;

const ListItem = styled.p`
  font-size: 14px;
`;


export default AdminGoodsList;
