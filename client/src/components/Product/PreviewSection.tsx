import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
/* eslint-disable no-unused-vars */
import {
  PreviewSectionProps,
} from '../../types/components/product/prieviewSection.types';
/* eslint-enable no-unused-vars */

interface ProductItemWrapperProps {
  photoUrl: string;
}

const PreviewSection = ({
  productName,
  productPrice,
  stockValue,
  category,
  sales,
  setOpenedWindowPay,
  photos,
}: PreviewSectionProps) => {
  return (
    <PreviewSectionWrapper>
      <PreviewBlock>
        <PreviewBlockWrapper>
          <BackLink to={'/'}>
            НАЗАД
          </BackLink>
          <ProductDescription>
            {productName}
          </ProductDescription>
          <ProductImage src={photos[0]} alt='img'/>
          <ProductItemWrapper photoUrl={photos[0]}>
            <PriceField>
              {productPrice}Р
            </PriceField>
          </ProductItemWrapper>
        </PreviewBlockWrapper>
      </PreviewBlock>
      <PayBlock>
        <StatusAndPayBlock>
          <PayBlockPrice>
            {productPrice}Р
          </PayBlockPrice>
          <InStockStatus>
            {stockValue? 'Есть в наличии': 'Нет в наличии'}
          </InStockStatus>
        </StatusAndPayBlock>
        <InfoBlock>
          <InStockValue>
            В наличии: <InStockValueLight> {stockValue} шт</InStockValueLight>
          </InStockValue>
          <Category>
            Категория: <InStockValueLight> {category}</InStockValueLight>
          </Category>
          <InStockValue>
            Продаж: <InStockValueLight> {sales} шт</InStockValueLight>
          </InStockValue>
        </InfoBlock>
        <InfoBlockMobile>
          <InStockValue>
            В наличии: <InStockValueLight> {stockValue} шт</InStockValueLight>
          </InStockValue>
          <Category>
            Категория: <InStockValueLight> {category}</InStockValueLight>
          </Category>
          <InStockValue>
            Продаж: <InStockValueLight> {sales} шт</InStockValueLight>
          </InStockValue>
        </InfoBlockMobile>
        <BuyLink onClick={() => {
          setOpenedWindowPay(true);
        }}>
          Купить
        </BuyLink>
      </PayBlock>
    </PreviewSectionWrapper>
  );
};

const PreviewSectionWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  @media(max-width: 430px) {
    min-height: 300px;
    flex-direction: column;
    justify-content: start;
  }
`;

const PreviewBlock = styled.div`
  width: 60%;
  min-height: 500px;
  background-color: #1A1C27;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 430px) {
    margin-bottom: 0;
    align-items: start;
    min-height: 230px;
    border-radius: 15px 15px 0 0;
    width: 100%;
  }
`;

const PreviewBlockWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  @media(max-width: 430px) {
    align-items: center;
    justify-content: start;
  }
`;

const BackLink = styled(Link)`
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  margin-bottom: 20px;
  @media(max-width: 430px) {
    display: none;
  }
`;

const ProductDescription = styled.p`
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 20px;
  @media(max-width: 430px) {
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    opacity: 0.9;
  }
`;

const ProductImage = styled.img`
  width: 620px;
  height: 325px;
  border-radius: 20px;
  @media(max-width: 430px) {
    display: none;
  }
`;

const PayBlock = styled.div`
  width: 38%;
  height: 100%;
  background-color: #1A1C27;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 430px) {
    border-radius: 0;
    width: 100%;
  }
`;

const StatusAndPayBlock = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media(max-width: 430px) {
    display: none;
  }
`;

const PayBlockPrice = styled.p`
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
  @media(max-width: 430px) {
    display: none;
  }
`;

const InStockStatus = styled.p`
  width: 160px;
  height: 45px;
  border-radius: 15px;
  background: linear-gradient(to right, #313c5f, #574a70);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  @media(max-width: 430px) {
    display: none;
    background: linear-gradient(to right, #323950, #34345b);
  }
`;

const InStockValue = styled.p`
  margin-top: 30px;
  width: 90%;
  height: 45px;
  border-radius: 15px;
  background: linear-gradient(to right, #313c5f, #574a70);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  @media(max-width: 430px) {
    height: 60px;
    margin-top: 0;
    width: 48%;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
`;

const Category = styled(InStockValue)`
  @media(max-width: 430px) {
    display: none;
  }
`;

const InStockValueLight = styled.p`
  margin-left: 5px;
  font-family: 'GothamLight', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  @media(max-width: 430px) {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
`;

const BuyLink = styled.button`
  margin-top: 150px;
  width: 100%;
  height: 45px;
  background: linear-gradient(to right, #313c5f, #574a70);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  border: none;
  :hover {
    cursor: pointer;
  }
  border-radius: 0 0 15px 15px;
  @media(max-width: 430px) {
    width: 90%;
    height: 60px;
    border-radius: 15px;
    margin-top: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
`;


const ProductItemWrapper = styled.div<ProductItemWrapperProps>`
  display: none;
  width: 350px;
  min-height: 190px;
  background: url(${(props) => props.photoUrl}) no-repeat;
  background-size: cover;
  border-radius: 20px;
  border: none;
  outline: none;
  margin-bottom: 30px;
  text-decoration: none;
  @media(max-width: 430px) {
    margin-bottom: 0;
    width: 100%;
    min-height: 150px;
    display: block;
  }
`;

const PriceField = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 100px;
  height: 30px;
  background: #1C1E29;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  left: 230px;
  top: 10px;
  opacity: 0.95;
  @media(max-width: 430px) {
    left: 160px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media(max-width: 430px) {
    display: none;
  }
`;

const InfoBlockMobile = styled.div`
  display: none;
  @media(max-width: 430px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;


export default PreviewSection;
