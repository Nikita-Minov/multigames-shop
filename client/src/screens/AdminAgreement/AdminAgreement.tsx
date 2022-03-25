import * as React from 'react';
import styled from 'styled-components';
import {
  Agreement,
} from '../../types/redux/reducers/agreementsReducer/agreementsReducer.types';
import AdminAgreementList
  from '../../components/AdminAgreement/AdminAgreementList';
import AdminCategoriesAddForm
  from '../../components/AdminAgreement/AdminAgreementAddForm';

interface AdminAgreementProps {
  agreements: Array<Agreement>
}

const AdminAgreement = ({agreements}: AdminAgreementProps) => {
  return (
    <AdminAgreementWrapper>
      <AdminCategoriesAddForm/>
      <AdminAgreementList agreements={agreements}/>
    </AdminAgreementWrapper>
  );
};

const AdminAgreementWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default AdminAgreement;
