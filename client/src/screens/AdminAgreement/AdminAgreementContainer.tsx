import * as React from 'react';
import AdminAgreement from './AdminAgreement';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const AdminAgreementContainer = () => {
  const [isAuth] = useSelector((state: StoreTypes) => [
    state.usersReducer.isAuth,
  ]);
  const agreements = useSelector((state: StoreTypes) =>
    state.agreementsReducer.agreements);
  return (
    isAuth?
      <AdminAgreement agreements={agreements}/>:
      <Navigate to={'/admin/login'}/>
  );
};

export default AdminAgreementContainer;
