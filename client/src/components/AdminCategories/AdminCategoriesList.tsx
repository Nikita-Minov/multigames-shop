import * as React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';
import {
  deleteCategory,
} from '../../redux/reducers/categoriesReducer/categoriesReducer';
import {
  Category,
} from '../../types/redux/reducers/categoriesReducer/categoriesReducer.types';

interface AdminCategoriesList {
  categories: Array<Category>;
}

const AdminCategoriesList = ({categories}: AdminCategoriesList) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const delCategory = (categoryId: number, token: string) => {
    dispatch(deleteCategory(categoryId, token));
  };
  return (
    <>
      {categories?categories.map((el, id) => {
        return (
          <CategoryItem key={id}>
            <h1>Name: {el.categoryName}</h1>
            <h2>Id: {el.categoryId}</h2>
            <button onClick={() => {
              delCategory(el.categoryId, cookies.token);
            }}>Delete</button>
          </CategoryItem>
        );
      }): <>Нет категорий</>}
    </>);
};

const CategoryItem = styled.div`
  border: 2px solid #000000;
  border-radius: 15px;
  width: 40%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;


export default AdminCategoriesList;
