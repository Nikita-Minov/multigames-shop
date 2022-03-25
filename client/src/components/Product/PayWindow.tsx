import * as React from 'react';
import styled from 'styled-components';
/* eslint-disable no-unused-vars */
import {
  PayWindowProps,
} from '../../types/components/product/payWindow.types';
import PayWindowForm from './PayWindowForm';
/* eslint-enable no-unused-vars */

const PayWindow = ({
  product,
  payWays,
  setOpenedWindowPay,
}: PayWindowProps) => {
  return (
    <WindowPay>
      <WindowPayWrapper>
        <WindowPayTitle>
          Выберите способ оплаты
        </WindowPayTitle>
        <PayWindowForm
          setOpenedWindowPay={setOpenedWindowPay}
          payWays={payWays}
          product={product}
        />
      </WindowPayWrapper>
    </WindowPay>
  );
};

const WindowPay = styled.div`
  margin-top: 75px;
  width: 50%;
  min-height: 700px;
  background-color: #1A1C27;
  position: fixed;
  left: 25%;
  top: 10%;
  border-radius: 15px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 375px) {
    width: 90%;
    left: 5%;
    top: 5%;
    min-height: 550px;
  }
`;

const WindowPayWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WindowPayTitle = styled.h1`
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 40px;
`;

export default PayWindow;
