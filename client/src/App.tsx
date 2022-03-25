import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import GoodsContainer from './screens/Goods/GoodsContainer';
import ProductContainer from './screens/Product/ProductContainer';
import SuccessPayContainer from './screens/SuccessPay/SuccessPayContainer';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import SocialLinksBar from './components/Header/SocialLinksBar';
import agreement from './assets/img/header/agreement.svg';
/* eslint-disable no-unused-vars */
import {SocialLink} from './types/components/header/header.types';

import vk from './assets/img/header/vk.svg';
import AdminHeaderContainer
  from './components/AdminHeader/AdminHeaderContainer';
import AdminLoginContainer from './screens/AdminLogin/AdminLoginContainer';
import AdminRegisterContainer
  from './screens/AdminRegister/AdminRegisterContainer';
import {useCookies} from 'react-cookie';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from './redux/reducers/usersReducer/usersReducer';
import {getProducts} from './redux/reducers/productsReducer/productsReducer';
import {
  getAllCategories,
} from './redux/reducers/categoriesReducer/categoriesReducer';
import {
  getAllAgreements,
} from './redux/reducers/agreementsReducer/agreementsReducer';
import AdminCategoriesContainer
  from './screens/AdminCategories/AdminCategoriesContainer';
import AdminAgreementContainer
  from './screens/AdminAgreement/AdminAgreementContainer';
import AdminGoodsContainer
  from './screens/AdminGoods/AdminGoodsContainer';
import {StoreTypes} from './types/redux/store.types';
import AgreementContainer from './screens/Agreement/AgreementContainer';
/* eslint-enable no-unused-vars */
const App = () => {
  const socialLinksArray:Array<SocialLink> = [
    {name: 'Техподдержка', url: '/', icon: vk},
    {name: 'Отзывы', url: '/', icon: vk},
    {name: 'Соглашение', url: '/agreement', icon: agreement},
  ];
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: StoreTypes) =>
    state.usersReducer.user.isAdmin);
  const [cookies] = useCookies(['token']);
  useEffect(() => {
    Promise.all([
      dispatch(getProducts()),
      dispatch(getAllCategories()),
      dispatch(getUser(cookies.token)),
      dispatch(getAllAgreements()),
    ]);
  }, []);
  const [menuBar, setMenuBar] = useState(false);
  return (
    <>
      {menuBar?
        <MenuBar>
          <SocialLinksBar socialLinks={socialLinksArray}/>
        </MenuBar>:
        <></>
      }
      <Routes>
        <Route path="/" element={
          <>
            <HeaderContainer setMenuBar={setMenuBar} menuBar={menuBar}/>
            <GoodsContainer/>
          </>
        } />
        <Route path="/product/:id" element={
          <>
            <HeaderContainer setMenuBar={setMenuBar} menuBar={menuBar}/>
            <ProductContainer/>
          </>
        } />
        <Route path="/agreement" element={
          <>
            <HeaderContainer setMenuBar={setMenuBar} menuBar={menuBar}/>
            <AgreementContainer/>
          </>
        } />
        <Route path="/success" element={
          <>
            <HeaderContainer setMenuBar={setMenuBar} menuBar={menuBar}/>
            <SuccessPayContainer/>
          </>
        } />
      </Routes>
      <Routes>
        <Route path="/admin/goods" element={
          <>
            <AdminHeaderContainer/>
            {isAdmin?<AdminGoodsContainer/>:<><h1>Вы не админ!</h1></>}

          </>
        } />
        <Route path="/admin/agreement" element={
          <>
            <AdminHeaderContainer/>
            {isAdmin?<AdminAgreementContainer/>:<><h1>Вы не админ!</h1></>}
          </>
        } />
        <Route path="/admin/categories" element={
          <>
            <AdminHeaderContainer/>
            {isAdmin?<AdminCategoriesContainer/>:<><h1>Вы не админ!</h1></>}
          </>
        } />
        <Route path="/admin/login" element={
          <>
            <AdminLoginContainer/>
          </>
        } />
        <Route path="/admin/register" element={
          <>
            <AdminRegisterContainer/>
          </>
        } />
      </Routes>
    </>
  );
};

const MenuBar = styled.div`
  display: none;
  padding-top: 75px;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #1A1C27;
  @media(max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default App;
