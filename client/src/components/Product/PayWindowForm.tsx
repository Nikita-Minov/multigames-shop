import * as React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
/* eslint-disable no-unused-vars */
import {
  PayWindowFormProps,
} from '../../types/components/product/payWindowForm.types';
import payAPI from '../../api/pay.api';
/* eslint-enable no-unused-vars */

const PayWindowForm = ({
  payWays,
  product,
  setOpenedWindowPay,
}: PayWindowFormProps) => {
  const formik = useFormik({
    initialValues: {
      amount: 1,
      email: '',
    },
    onSubmit: async (values) => {
      if (product.inStock < values.amount) {
        return alert('Такого количества аккаунтов нет в наличии!');
      }
      const url = await payAPI.getPayUrl({
        email: values.email,
        amount: values.amount,
        productId: product.productId,
      });
      window.location.href = url;
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <WindowPayField>
        <WindowPayText>Наименование:</WindowPayText>
        <WindowPayTextRegular>
          {product.productName}
        </WindowPayTextRegular>
      </WindowPayField>
      <WindowPayField>
        <WindowPayText>Количество:</WindowPayText>
        <WindowPayInput
          id="amount"
          name="amount"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.amount} />
      </WindowPayField>
      <WindowPayField>
        <WindowPayText>
          E-mail:
        </WindowPayText>
        <WindowPayInput
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email} />
      </WindowPayField>
      {payWays.map((el, id) => {
        return (
          <WindowPayFieldForBtn key={id}>
            <WindowPayBtn
              type='submit'>
              <img src={el} alt=""/>
            </WindowPayBtn>
          </WindowPayFieldForBtn>
        );
      })}
      <CloseBtn onClick={() => {
        setOpenedWindowPay(false);
      }
      }>
        Закрыть
      </CloseBtn>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WindowPayField = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media(max-width: 430px) {
    width: 90%;
  }
`;

const WindowPayText = styled.p`
  font-family: 'GothamBold', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  @media(max-width: 430px) {
    font-size: 13px;
  }
`;

const WindowPayTextRegular = styled.p`
  font-family: 'GothamRegular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  color: #FFFFFF;
  opacity: 0.7;
  @media(max-width: 430px) {
    font-size: 10px;
  }
`;

const WindowPayInput = styled.input`
  width: 70%;
  background: #242430;
  border-radius: 15px;
  border: none;
  height: 70%;
  font-family: 'GothamRegular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  opacity: 0.7;
  padding-left: 20px;
`;

const WindowPayFieldForBtn = styled(WindowPayField)`
  height: 80px;
  @media(max-width: 430px) {
    height: 40px;
  }
`;

const WindowPayBtn = styled.button`
  width: 100%;
  height: 100%;
  background: #232430;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const CloseBtn = styled.p`
  width: 185px;
  height: 50px;
  background: #232430;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  :hover {
    cursor: pointer;
  }
`;


export default PayWindowForm;
