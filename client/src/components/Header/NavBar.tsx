import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
/* eslint-disable no-unused-vars */
import {
  NavBarProps,
  LinkProps,
} from '../../types/components/header/navbar.types';
/* eslint-enable no-unused-vars */

const NavBar = ({links, updateLinksArray}: NavBarProps) => {
  return (
    <NavBarWrapper>
      {links.map((el, id) => {
        return (
          <NavBarLink
            key={id}
            to={el.url}
            isActive={el.isActive}
            onClick={() => {
              updateLinksArray(id);
            }}
          >
            {el.name}
          </NavBarLink>
        );
      })}
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.nav`
  width: 20%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 430px) {
    display: none;
  }
`;

const NavBarLink = styled(Link)<LinkProps>`
  padding: 8px 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  border-bottom: ${(props) => props.isActive? '#A3DDFC 2px solid': 'none'} ;
`;

export default NavBar;
