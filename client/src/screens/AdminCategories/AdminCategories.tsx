import * as React from 'react';
import styled from 'styled-components';
import {
  Category,
} from '../../types/redux/reducers/categoriesReducer/categoriesReducer.types';
import AdminCategoriesList
  from '../../components/AdminCategories/AdminCategoriesList';
import AdminCategoriesAddForm
  from '../../components/AdminCategories/AdminCategoriesAddForm';

interface AdminCategoriesProps {
  categories: Array<Category>
}

const AdminCategories = ({categories}: AdminCategoriesProps) => {
  return (
    <AdminCategoriesWrapper>
      <AdminCategoriesAddForm/>
      <AdminCategoriesList categories={categories}/>
    </AdminCategoriesWrapper>
  );
};

const AdminCategoriesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default AdminCategories;
