import * as React from 'react';
import styled from 'styled-components';
import bg from '../../assets/img/goods/bg.jpg';
import cover from '../../assets/img/goods/cover.jpg';
import FilterSection from '../../components/Goods/FilterSection';
/* eslint-disable no-unused-vars */
import {GoodsProps} from '../../types/screens/goods.types';
import ProductItem from '../../components/Goods/ProductItem';
/* eslint-enable no-unused-vars */
import howtobuy from '../../assets/img/goods/howtobuy.svg';

const Goods = ({
  updateUsualFilter,
  updateCustomFilter,
  customFilter,
  usualFilter,
  products,
}: GoodsProps) => {
  return (
    <GoodsSection>
      <GoodsWrapper>
        <CoverImg src={cover} alt='Cover'/>
        <FilterSection
          customFilter={customFilter}
          updateCustomFilter={updateCustomFilter}
          updateUsualFilter={updateUsualFilter}
          usualFilter={usualFilter}
          products={products}
        />
        <HowToBuy href={'google.com'}>
          <img src={howtobuy} alt=""/>
          Как купить?
        </HowToBuy>
        <ProductSection>
          {products? products.map((el, id) => {
            return (
              <ProductItem key={id} product={el}/>
            );
          }):
          <></>
          }
        </ProductSection>
      </GoodsWrapper>
    </GoodsSection>
  );
};

const GoodsSection = styled.section`
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  background-image:
          linear-gradient(to top, rgba(41,41,53,0.97), rgba(41,41,53,0.97)),
          url(${bg});
  @media(max-width: 375px) {
    padding-top: 75px;
  }
`;

const GoodsWrapper = styled.div`
  margin: auto;
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 375px) {
    width: 90%;
  }
`;

const CoverImg = styled.img`
  margin-top: 20px;
  width: 100%;
  height: 240px;
  border-radius: 20px;
  @media(max-width: 375px) {
    display: none;
  }
`;

const ProductSection = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: 375px) {
    margin-top: 10px;
    background: #1A1C27;
    border-radius: 10px;
    padding-top: 40px;
    flex-direction: column;
    align-items: center;
  }
`;

const HowToBuy = styled.a`
  display: none;
  background: #1A1C27;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  @media(max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'GothamRegular', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    justify-content: center;
    text-decoration: none;
  }
`;


export default Goods;


