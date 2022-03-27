import * as React from 'react';
import Product from './Product';
import {useEffect, useState} from 'react';
import {StateTypes} from '../../types/screens/product.types';
import styled from 'styled-components';
import qiwi from '../../assets/img/product/qiwi.svg';
import card from '../../assets/img/product/card.svg';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
  getCurrentProduct,
} from '../../redux/reducers/productsReducer/productsReducer';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */

const ProductContainer = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const product = useSelector(
      (state: StoreTypes) => state.productsReducer.currentProduct);
  useEffect(() => {
    Promise.all([dispatch(getCurrentProduct(Number(id)))]);
  }, []);

  const [openedPicture, setOpenedPicture] = useState<StateTypes>({
    flag: false,
    url: '',
  });
  const photosMapped = product.photos.map((el, id) => {
    return (
      <Picture key={id} src={el} onClick={() => {
        setOpenedPicture({flag: true, url: el});
      }}/>
    );
  });
  const payWays: Array<string> = [qiwi, card];
  const [openedWindowPay, setOpenedWindowPay] = useState(false);
  return (
    <Product
      product={product}
      openedPicture={openedPicture}
      setOpenedPicture={setOpenedPicture}
      mappedPhotos={photosMapped}
      payWays={payWays}
      openedWindowPay={openedWindowPay}
      setOpenedWindowPay={setOpenedWindowPay}
    />
  );
};


const Picture = styled.img`
  width: 500px;
  height: 270px;
  border-radius: 15px;
  :hover {
    cursor: pointer;
  }
  @media(max-width: 430px) {
    margin-bottom: 20px;
    width: 100%;
    max-height: 160px;
  }
`;

export default ProductContainer;
