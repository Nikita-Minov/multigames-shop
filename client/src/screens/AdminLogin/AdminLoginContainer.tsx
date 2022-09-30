import * as React from 'react';
import AdminLogin from './AdminLogin';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */

const AdminLoginContainer = () => {
  const isAuth = useSelector((state: StoreTypes) => state.usersReducer.isAuth);
  return (
    isAuth?<Navigate to={'/admin/goods'}/>:<AdminLogin/>
  );
};

export default AdminLoginContainer;
