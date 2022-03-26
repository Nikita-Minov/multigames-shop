import * as React from 'react';
import styled from 'styled-components';
/* eslint-disable no-unused-vars */
import {
  SocialLinksBarProps,
} from '../../types/components/header/socialLinksBar.types';
/* eslint-enable no-unused-vars */

const SocialLinksBar = ({socialLinks}: SocialLinksBarProps) => {
  return (
    <SocialLinksBarWrapper>
      {
        socialLinks.map((el, id) => {
          return (
            <SocialLink key={id} href={el.url}>
              {el.name} <SocialLinkImg src={el.icon} alt={el.name}/>
            </SocialLink>
          );
        })
      }
    </SocialLinksBarWrapper>
  );
};


const SocialLinksBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 430px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 180px;
  height: 40px;
  background-color: #212331;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 430px) {
    margin-top: 20px;
  }
`;

const SocialLinkImg = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

export default SocialLinksBar;
