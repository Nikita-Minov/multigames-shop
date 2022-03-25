import * as React from 'react';
import Goods from './Goods';
import {useState} from 'react';
import {Filter} from '../../types/screens/goods.types';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
import {useDispatch, useSelector} from 'react-redux';
import {
  setMappedCategories,
} from '../../redux/reducers/categoriesReducer/categoriesReducer';
import {
  Product,
} from '../../types/redux/reducers/productsReducer/productsReducer.types';
/* eslint-enable no-unused-vars */
/* eslint-disable require-jsdoc */


const GoodsContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: StoreTypes) =>
    state.categoriesReducer.mappedCategories);

  function sortArr(arr: Array<Product>) {
    return arr.sort((a, b) => a.productPrice > b.productPrice? 1: -1);
  }

  function sortArrTwo(arr: Array<Product>) {
    return arr.sort((a, b) => a.productPrice < b.productPrice? 1: -1);
  }

  const [usualFilter, setUsualFilter] = useState<Array<Filter>>([
    {name: 'Сначала дешёвые', id: 0, touched: false, sortFn: sortArr},
    {name: 'Сначала дорогие', id: 1, touched: false, sortFn: sortArrTwo},
  ]);

  const [customFilter, setCustomFilter] =
    useState<Array<Filter>>(categories);
  const updateUsualFilter = (id: number) => {
    setUsualFilter(usualFilter.map((el) => (
      el.id == id? {...el, touched: true}:{...el, touched: false}
    )));
  };
  const updateCustomFilter = (id: number) => {
    dispatch(setMappedCategories(categories.map((el) => (
      el.id == id? {...el, touched: true}:{...el, touched: false}
    ))));
    setCustomFilter(customFilter.map((el) => (
      el.id == id? {...el, touched: true}:{...el, touched: false}
    )));
  };

  const products = useSelector((state: StoreTypes) =>
    state.productsReducer.products);

  return (
    <Goods
      updateUsualFilter={updateUsualFilter}
      updateCustomFilter={updateCustomFilter}
      usualFilter={usualFilter}
      customFilter={categories}
      products={products}
    />
  );
};

export default GoodsContainer;


