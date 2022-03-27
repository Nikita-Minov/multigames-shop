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
  width: 330px;
  height: 190px;
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
  border-radius: 20px;
  border: none;
  outline: none;
  margin-bottom: 30px;
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
  width: 100px;
  height: 30px;
  background: #1C1E29;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  left: 210px;
  top: 10px;
  opacity: 0.95;
  @media(max-width: 430px) {
    left: 160px;
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
  top: 125px;
  opacity: 0.95;
  @media(max-width: 430px) {
    top: 85px;
  }
`;

export default ProductItem;
