import styled from '@emotion/styled';
import HeroImage from '../../images/explore-our-vehicles.webp';
import HeroMobile from '../../images/car_rental.jpeg';
import { Link } from 'react-router-dom';

export const WrapperHero = styled.div`
position: relative;
        display: flex;
        justify-content: center;
        border-radius: 14px;
`;

export const ImageHero = styled.img`
  border-radius: 14px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    content: url(${HeroMobile});
  }

  @media screen and (min-width: 769px) {
    width: 75vw;
    content: url(${HeroImage});
  }
`;

export const Title = styled.h1`
  position: absolute;
  font-family: 'Manrope';
  text-align: center;

  color: #0b44cd;
  font-style: normal;
  font-weight: 700;
  text-shadow: rgba(224, 255, 255, 0.5) 5px 5px 5px;

  @media screen and (max-width: 768px) {
    margin-top: 25px;
    width: 300px;
    font-size: 22px;
  }

  @media screen and (min-width: 769px) {
    margin-top: 60px;
    width: 700px;
    font-size: 48px;
  }
`;

export const Button = styled(Link)`
  position: absolute;
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
