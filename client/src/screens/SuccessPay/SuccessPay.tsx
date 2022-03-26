import * as React from 'react';
import styled from 'styled-components';
import bg from '../../assets/img/goods/bg.jpg';
import {Link} from 'react-router-dom';

interface AccountType {
  name: string;
  amount: number;
  email: string;
  date: string;
  data: string;
  price: number;
}

const SuccessPay = () => {
  const account: AccountType = {
    name: 'От 30 до 52 бойцов [ПОЛНЫЙ ДОСТУП]',
    amount: 1,
    email: 'skskasw@mail.ru',
    date: '18.03.2022 10:37:12',
    data: 'login:pass',
    price: 115,
  };
  return (
    <SuccessPaySection>
      <SuccessPayWrapper>
        <SuccessPayBlockWrapper>
          <SuccessPayBlock>
            <SuccessPayField>
              <SuccessPayText>
                Наименование:
              </SuccessPayText>
              <SuccessPayTextRegular>
                {account.name}
              </SuccessPayTextRegular>
            </SuccessPayField>
            <SuccessPayField>
              <SuccessPayText>
                Количество:
              </SuccessPayText>
              <SuccessPayTextRegular>
                {account.amount}
              </SuccessPayTextRegular>
            </SuccessPayField>
            <SuccessPayField>
              <SuccessPayText>
                Ваш E-mail:
              </SuccessPayText>
              <SuccessPayTextRegular>
                {account.email}
              </SuccessPayTextRegular>
            </SuccessPayField>
            <SuccessPayField>
              <SuccessPayText>
                Дата и время:
              </SuccessPayText>
              <SuccessPayTextRegular>
                {account.date}
              </SuccessPayTextRegular>
            </SuccessPayField>
            <SuccessPayField>
              <SuccessPayText>
                Данные от аккаунта:
              </SuccessPayText>
              <SuccessPayTextRegular>
                {account.data}
              </SuccessPayTextRegular>
            </SuccessPayField>
            <SuccessPayField>
              <SuccessPayText>
                Цена:
              </SuccessPayText>
              <SuccessPayTextRegular>
                {account.price}
              </SuccessPayTextRegular>
            </SuccessPayField>
            <BackLink to={'/'}>
              На главную
            </BackLink>
          </SuccessPayBlock>
        </SuccessPayBlockWrapper>
      </SuccessPayWrapper>
    </SuccessPaySection>
  );
};

const SuccessPaySection = styled.section`
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  background-image:
          linear-gradient(to top, rgba(41,41,53,0.97), rgba(41,41,53,0.97)),
          url(${bg});
  @media(max-width: 430px) {
    padding-top: 75px;
  }
`;

const SuccessPayWrapper = styled.div`
  margin: auto;
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 430px) {
    width: 100%;
  }
`;

const SuccessPayBlockWrapper = styled.div`
  margin-top: 130px;
  width: 70%;
  min-height: 650px;
  background: #1A1C27;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  @media(max-width: 430px) {
    margin-top: 50px;
    width: 90%;
    min-height: 500px;
  }
`;

const SuccessPayBlock = styled.div`
  margin-top: 100px;
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 430px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const SuccessPayField = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media(max-width: 430px) {
    width: 85%;
  }
`;

const SuccessPayText = styled.p`
  font-family: 'GothamBold', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  @media(max-width: 430px) {
    font-size: 12px;
  }
`;

const SuccessPayTextRegular = styled.p`
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

const BackLink = styled(Link)`
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
  @media(max-width: 430px) {
    width: 150px;
    height: 40px;
  }
`;

export default SuccessPay;
