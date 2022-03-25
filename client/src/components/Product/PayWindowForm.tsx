import * as React from 'react';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
/* eslint-disable no-unused-vars */
import {
  PayWindowFormProps,
  MyFormValues,
} from '../../types/components/product/payWindowForm.types';
/* eslint-enable no-unused-vars */

const PayWindowForm = ({
  payWays,
  product,
  setOpenedWindowPay,
}: PayWindowFormProps) => {
  const initialValues: MyFormValues = {amount: 1, email: ''};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        alert(values.amount + values.email);
      }}
    >
      <StyledForm>
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
            placeholder="Количество" />
        </WindowPayField>
        <WindowPayField>
          <WindowPayText>
            E-mail:
          </WindowPayText>
          <WindowPayInput
            id="email"
            name="email"
            placeholder="E-mail" />
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
    </Formik>
  );
};

const StyledForm = styled(Form)`
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
  @media(max-width: 375px) {
    width: 90%;
  }
`;

const WindowPayText = styled.p`
  font-family: 'GothamBold', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  @media(max-width: 375px) {
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
  @media(max-width: 375px) {
    font-size: 10px;
  }
`;

const WindowPayInput = styled(Field)`
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
  @media(max-width: 375px) {
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
