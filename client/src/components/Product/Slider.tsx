import * as React from 'react';
import {useState} from 'react';
import prev from '../../assets/img/product/prev.svg';
import next from '../../assets/img/product/next.svg';
import styled from 'styled-components';
/* eslint-disable no-unused-vars */
import {SliderProps} from '../../types/components/product/slider.types';
/* eslint-enable no-unused-vars */

const Slider = ({slides}: SliderProps) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const PrevSlide = () => {
    setSliderIndex(sliderIndex-1);
    if (sliderIndex < 0) {
      setSliderIndex(slides.length-2);
    }
  };
  const NextSlide = () => {
    setSliderIndex(sliderIndex+1);
    if (sliderIndex > slides.length-2) setSliderIndex(0);
  };
  return (
    <PicturesBlock>
      <PictureBlock>
        <SliderButtonPrev onClick={PrevSlide}>
          <img src={prev} alt=""/>
        </SliderButtonPrev>
        {slides[sliderIndex]}
      </PictureBlock>
      <PictureBlock>
        {slides[sliderIndex+1]}
        <SliderButtonNext onClick={NextSlide}>
          <img src={next} alt=""/>
        </SliderButtonNext>
      </PictureBlock>
    </PicturesBlock>
  );
};

const PicturesBlock = styled.div`
  width: 100%;
  min-height: 270px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  @media(max-width: 375px) {
    display: none;
  }
`;

const PictureBlock = styled.div`
  position: relative;
  width: 48%;
  min-height: 270px;
`;

const SliderButtonPrev = styled.a`
  position: absolute;
  left: 10%;
  :hover {
    cursor: pointer;
  }
  background: none;
  border: none;
  bottom: 40%;
  @media(max-width: 375px) {
    display: none;
  }
`;

const SliderButtonNext = styled.a`
  position: absolute;
  right: 10%;
  bottom: 40%;
  :hover {
    cursor: pointer;
  }
  background: none;
  border: none;
  @media(max-width: 375px) {
    display: none;
  }
`;

export default Slider;
