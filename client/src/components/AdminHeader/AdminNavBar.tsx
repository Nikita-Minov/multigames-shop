import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const AdminNavBar = () => {
  const navBarLinks = [
    {name: 'Товары', url: '/admin/goods'},
    {name: 'Соглашение', url: '/admin/agreement'},
    {name: 'Категории', url: '/admin/categories'},
  ];
  return (
    <AdminNavBarWrapper>
      {
        navBarLinks.map((el, id) => {
          return (
            <NavBarLink key={id} to={el.url} >{el.name}</NavBarLink>
          );
        })
      }
    </AdminNavBarWrapper>
  );
};

const AdminNavBarWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBarLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #000000;
  text-decoration: none;
`;

export default AdminNavBar;
