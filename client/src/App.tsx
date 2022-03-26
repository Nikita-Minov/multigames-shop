import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import GoodsContainer from './screens/Goods/GoodsContainer';
import ProductContainer from './screens/Product/ProductContainer';
import SuccessPayContainer from './screens/SuccessPay/SuccessPayContainer';
import styled from 'styled-components';
import SocialLinksBar from './components/Header/SocialLinksBar';
/* eslint-disable no-unused-vars */
import AdminHeaderContainer
  from './components/AdminHeader/AdminHeaderContainer';
import AdminLoginContainer from './screens/AdminLogin/AdminLoginContainer';
import AdminRegisterContainer
  from './screens/AdminRegister/AdminRegisterContainer';
import AdminCategoriesContainer
  from './screens/AdminCategories/AdminCategoriesContainer';
import AdminAgreementContainer
  from './screens/AdminAgreement/AdminAgreementContainer';
import AdminGoodsContainer
  from './screens/AdminGoods/AdminGoodsContainer';
import AgreementContainer from './screens/Agreement/AgreementContainer';
import {AppProps} from './types/app.types';
/* eslint-enable no-unused-vars */

const App = ({
  menuBar,
  setMenuBar,
  socialLinksArray,
  isAdmin,
}: AppProps) => {
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
  @media(max-width: 430px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default App;
