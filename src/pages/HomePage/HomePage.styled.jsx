import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import HeroCar from '../../images/hero-car.png';
import '../../custom-font.css';

export const WrapperHero = styled.div`
  background-color: #f7f7fb;
  height: 709px;
  flex-shrink: 0;
  display: flex;
`;

export const ImageHero = styled.img`
  width: 917px;
  flex-shrink: 0;
  content: url(${HeroCar});
  margin-top: 80px;
`;

export const WrapperTitle = styled.div`
  width: 529px;
  margin-left: 140px;
  margin-top: 142px;
  position: relative;
`;

export const Title = styled.article`
  color: #1d1e21;

  font-family: 'Geomanist', sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 70.4px */
  letter-spacing: 0.8px;
`;

export const Span = styled.span`
  color: #3083ff;
  font-family: 'Geomanist', sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 0.8px;
`;

export const ImgRectangle = styled.img`
  position: absolute;
  top: 22%;
  right: 1%;
`;

export const Text = styled.article`
  color: #929395;

  font-family: 'Geomanist';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%; /* 25.92px */
  letter-spacing: 0.18px;
  margin-top: 16px;
`;

export const ImgStorePlay = styled.img`
  width: 130px;
  height: 44px;
  cursor: pointer;
`;

export const Button = styled(Link)`
  top: 230px;
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 20px;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #0b44cd;
  }

  @media screen and (max-width: 768px) {
    top: 100px;
  }
`;
