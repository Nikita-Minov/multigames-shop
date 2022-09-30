import * as React from 'react';
import AdminRegister from './AdminRegister';
import {useSelector} from 'react-redux';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */
import {Navigate} from 'react-router-dom';

const AdminRegisterContainer = () => {
  const isAuth = useSelector((state: StoreTypes) => state.usersReducer.isAuth);
  return (
    isAuth?<Navigate to={'/admin/goods'}/>:<AdminRegister/>
  );
};

export default AdminRegisterContainer;
