import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
/* eslint-disable no-unused-vars */
import {ProductItemProps} from '../../types/components/goods/productItem.types';
/* eslint-enable no-unused-vars */

interface ProductItemWrapperProps {
  url: string;
}

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <ProductItemWrapper
      url={product.photos[0]}
      to={`/product/${product.productId}`}>
      <PriceField>
        {product.productPrice}p
      </PriceField>
      <DescriptionField>
        {product.productName}
      </DescriptionField>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled(Link)<ProductItemWrapperProps>`
  width: 325px;
  height: 190px;
  background: url(${(props) => props.url})  no-repeat;
  background-size: cover;
  border-radius: 20px;
  border: none;
  outline: none;
  margin-bottom: 30px;
  margin-right: 1%;
  margin-left: 1%;
  text-decoration: none;
  @media(max-width: 430px) {
    width: 275px;
    height: 150px;
  }
`;

const PriceField = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 30%;
  height: 30px;
  background: #1C1E29;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  left: 60%;
  top: 10px;
  opacity: 0.95;
  @media(max-width: 430px) {
    font-size: 14px;
  }
 
`;

const DescriptionField = styled.p`
  width: 100%;
  height: 35px;
  background: #1A1C27;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #FFFFFF;
  border-radius: 0 0 15px 15px;
  top: 72%;
  opacity: 0.95;
  text-align: center;
  @media(max-width: 430px) {
    font-size: 14px;
    top: 85px;
  }
`;

export default ProductItem;
