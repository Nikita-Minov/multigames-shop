import * as React from 'react';
import styled from 'styled-components';
/* eslint-disable no-unused-vars */
import {
  InfoSectionProps,
} from '../../types/components/product/infoSection.types';
import {useState} from 'react';
import Slider from './Slider';
/* eslint-enable no-unused-vars */

const InfoSection = ({
  description,
  mappedPhotos,
}: InfoSectionProps) => {
  return (
    <InfoSectionWrapper>
      <InfoSectionBlock>
        <InfoSectionTitle>
          Описание:
        </InfoSectionTitle>
        <InfoSectionDescription>
          {description}
        </InfoSectionDescription>
        <Slider slides={mappedPhotos}/>
        <PicturesBlockForMobile>
          {mappedPhotos}
        </PicturesBlockForMobile>
      </InfoSectionBlock>
    </InfoSectionWrapper>
  );
};

const InfoSectionWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  margin-top: 40px;
  background-color: #1A1C27;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px 15px 0 0;
  @media(max-width: 375px) {
    margin-top: 0;
    border-radius: 0 0 15px 15px;
  }
`;

const InfoSectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  @media(max-width: 375px) {
    align-items: center;
  }
`;

const InfoSectionTitle = styled.h1`
  font-family: 'GothamBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  @media(max-width: 375px) {
    margin-top: 20px;
  }
`;

const InfoSectionDescription = styled.p`
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  @media(max-width: 375px) {
    text-align: center;
  }
`;


const PicturesBlockForMobile = styled.div`
  display: none;
  width: 100%;
  min-height: 270px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  @media(max-width: 375px) {
    display: flex;
  }
`;


export default InfoSection;
