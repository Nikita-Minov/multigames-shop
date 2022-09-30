import * as React from 'react';
import styled from 'styled-components';
import AdminRegisterForm
  from '../../components/AdminRegister/AdminRegisterForm';

const AdminRegister = () => {
  return (
    <AdminRegisterWrapper>
      <AdminRegisterTitle>
        Admin Register
      </AdminRegisterTitle>
      <AdminRegisterForm/>
    </AdminRegisterWrapper>
  );
};

const AdminRegisterWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AdminRegisterTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export default AdminRegister;
