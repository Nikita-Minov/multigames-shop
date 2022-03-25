import * as React from 'react';
import styled from 'styled-components';
import AdminNavBar from './AdminNavBar';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useCookies} from 'react-cookie';

const AdminHeader = () => {
  /* eslint-disable no-unused-vars */
  const [cookies, setCookie, removeCookie] = useCookies();
  /* eslint-enable no-unused-vars */
  const logout = () => {
    removeCookie('token');
  };
  const username = useSelector((state: StoreTypes) =>
    state.usersReducer.user.username);
  return (
    <AdminHeaderWrapper>
      <AdminNavBar/>
      <AdminName>
        {username}
      </AdminName>
      <LogoutLink to={'/'} onClick={logout}>
        Выйти
      </LogoutLink>
    </AdminHeaderWrapper>
  );
};

const AdminHeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AdminName = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
`;

const LogoutLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #000000;
  text-decoration: none;
`;

export default AdminHeader;
