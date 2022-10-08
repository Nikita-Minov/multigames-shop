import * as React from 'react';
import styled from 'styled-components';
import bg from '../../assets/img/goods/bg.jpg';
import InfoSection from '../../components/Product/InfoSection';
import PreviewSection from '../../components/Product/PreviewSection';
/* eslint-disable no-unused-vars */
import {
  ProductProps,
  ProductsSessionProps,
} from '../../types/screens/product.types';
import PayWindow from '../../components/Product/PayWindow';
/* eslint-enable no-unused-vars */

const Product = ({
  product,
  setOpenedPicture,
  openedPicture,
  mappedPhotos,
  payWays,
  openedWindowPay,
  setOpenedWindowPay,
}: ProductProps) => {
  return (
    <ProductsSection
      windowPayOpenedFlag={openedWindowPay}
      flag={openedPicture.flag}>
      {openedPicture.flag?
        <OpenedPicture src={openedPicture.url} onClick={() => {
          setOpenedPicture({flag: false, url: ''});
        }} />:
        <></>
      }
      {openedWindowPay?
        <PayWindow
          product={product}
          setOpenedWindowPay={setOpenedWindowPay}
          payWays={payWays}/>:
        <></>
      }
      <ProductsWrapper>
        <PreviewSection
          category={product.category}
          productName={product.productName}
          productPrice={product.productPrice}
          stockValue={product.inStock}
          sales={product.sales}
          setOpenedWindowPay={setOpenedWindowPay}
          photos={product.photos}
        />
        <InfoSection
          description={product.description}
          mappedPhotos={mappedPhotos}
        />
      </ProductsWrapper>
    </ProductsSection>
  );
};

const ProductsSection = styled.section<ProductsSessionProps>`
  min-width: 1900px;
  min-height: 100vh;
  background-image:
          linear-gradient(to top, rgba(41,41,53,0.97), rgba(41,41,53,0.97)),
          url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  ${(props) => props.flag || props.windowPayOpenedFlag?`
  :after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.9);
    z-index: 11;
  }`: ''};
  @media(max-width: 430px) {
    min-width: 100%;
    width: 100%;
  }
`;

const ProductsWrapper = styled.div`
  margin: auto;
  max-width: 1140px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 430px) {
    justify-content: start;
    width: 90%;
  }
`;

const OpenedPicture = styled.img`
  margin-top: 50px;
  position: fixed;
  width: 75%;
  height: 75%;
  left: 10%;
  top: 10%;
  :hover {
    cursor: pointer;
  }
  border-radius: 15px;
  z-index: 3;
  @media(max-width: 430px) {
    top: 40%;
    height: 30%;
    left: 5%;
    margin-top: 0;
    width: 90%;
  }
`;

export default Product;
