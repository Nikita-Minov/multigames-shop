import * as React from 'react';
import styled from 'styled-components';
import AdminLoginForm from '../../components/AdminLogin/AdminLoginForm';

const AdminLogin = () => {
  return (
    <AdminLoginWrapper>
      <AdminLoginTitle>
        Admin Login
      </AdminLoginTitle>
      <AdminLoginForm/>
    </AdminLoginWrapper>
  );
};

const AdminLoginWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AdminLoginTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export default AdminLogin;
