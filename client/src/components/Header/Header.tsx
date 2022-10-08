import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
/* eslint-disable no-unused-vars */
import {
  HeaderProps,
  HeaderWrapperProps,
} from '../../types/components/header/header.types';
import NavBar from './NavBar';
import SocialLinksBar from './SocialLinksBar';
/* eslint-enable no-unused-vars */

const Header = ({
  links,
  socialLinks,
  updateLinksArray,
  setMenuBar,
  menuBar,
}: HeaderProps) => {
  return (
    <HeaderWrapper menuBar={menuBar}>
      <HeaderSection>
        <MenuButton onClick={() => {
          menuBar?setMenuBar(false):setMenuBar(true);
        }}>|||</MenuButton>
        <Logo>
          <LogoLink to='/'>
            <LogoText>
              sg
            </LogoText>
            <LogoTextLight>
              | SkyGames - Небесные аккаунты по земным ценам!
            </LogoTextLight>
          </LogoLink>
        </Logo>
        <LogoForMobile>
          <LogoLinkForMobile to='/'>
            <LogoText>
              SkyGames
            </LogoText>
          </LogoLinkForMobile>
        </LogoForMobile>
        <NavBar links={links} updateLinksArray={updateLinksArray}/>
        <SocialLinksBarWrapper>
          <SocialLinksBar socialLinks={socialLinks}/>
        </SocialLinksBarWrapper>
      </HeaderSection>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: ${(props) => props.menuBar? 'fixed': 'static'};
  z-index: 10;
  min-width: 1900px;
  height: 100px;
  background-color: #1A1C27;
  @media(max-width: 430px) {
    min-width: 100%;
    width: 100%;
    height: 75px;
  }
`;

const HeaderSection = styled.div`
  width: 75%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 430px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 25%;
  @media(max-width: 430px) {
    display: none;
  }
`;

const LogoForMobile = styled(Logo)`
  display: none;
  @media(max-width: 430px) {
    display: flex;
    justify-content: center;
  }
`;

const LogoLinkForMobile = styled(Link)`
  text-decoration: none;
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const LogoText = styled.h3`
  color: #E5E5E5;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

const LogoTextLight = styled.h3`
  color: #E5E5E5;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
`;

const MenuButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  display: none;
  outline: 0;
  border: 0;
  color: #ffffff;
  background: none;
  font-size: 30px;
  transform: rotate(90deg);
  @media(max-width: 430px) {
    position: absolute;
    left: 5%;
    display: block;
  }
`;

const SocialLinksBarWrapper = styled.div`
  width: 30%;
  height: 100%;
  @media(max-width: 430px) {
    display: none;
  }
`;


export default Header;
