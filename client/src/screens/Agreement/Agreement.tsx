import * as React from 'react';
import styled from 'styled-components';
import bg from '../../assets/img/goods/bg.jpg';
/* eslint-disable no-unused-vars */
import {AgreementProps} from '../../types/screens/agreement.types';
/* eslint-enable no-unused-vars */

const Agreement = ({agreementPoints}: AgreementProps) => {
  return (
    <AgreementSection>
      <AgreementWrapper>
        <AgreementBlock>
          <AgreementTitle>
            Соглашение
          </AgreementTitle>
          <AgreementItem>
            Покупая товар в нашем магазине, Вы соглашаетесь с данными правилами:
          </AgreementItem>
          {agreementPoints? agreementPoints.map((el, id) => {
            return (
              <AgreementItem key={id}>
                {el.clauseOfAgr}
              </AgreementItem>
            );
          }): <></>}
        </AgreementBlock>
      </AgreementWrapper>
    </AgreementSection>
  );
};

const AgreementSection = styled.section`
  min-width: 1900px;
  min-height: 100vh;
  background-image:
          linear-gradient(to top, rgba(41,41,53,0.97), rgba(41,41,53,0.97)),
          url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  @media(max-width: 430px) {
    width: 100%;
  }
`;

const AgreementWrapper = styled.div`
  margin: auto;
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 430px) {
    width: 90%;
  }
`;

const AgreementBlock = styled.div`
  margin-top: 45px;
  width: 100%;
  min-height: 800px;
  background-color: #1A1C27;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
`;

const AgreementTitle = styled.h1`
  margin-top: 75px;
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 50px;
  @media(max-width: 430px) {
    margin-bottom: 20px;
    margin-top: 30px;
    font-size: 16px;
  }
`;

const AgreementItem = styled.p`
  width: 80%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  opacity: 0.7;
  text-align: center;
  margin-bottom: 10px;
  @media(max-width: 430px) {
    font-size: 14px;
  }
`;

export default Agreement;
