import * as React from 'react';
import AdminCategories from './AdminCategories';
import {useSelector} from 'react-redux';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */
import {Navigate} from 'react-router-dom';

const AdminCategoriesContainer = () => {
  const [isAuth] = useSelector((state: StoreTypes) => [
    state.usersReducer.isAuth,
  ]);
  const categories = useSelector((state: StoreTypes) =>
    state.categoriesReducer.categories);
  return (
    isAuth?
      <AdminCategories categories={categories}/>:
      <Navigate to={'/admin/login'}/>
  );
};

export default AdminCategoriesContainer;
