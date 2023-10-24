import styled from '@emotion/styled';
import HeroImage from '../../images/explore-our-vehicles.webp';
import HeroMobile from '../../images/car_rental.jpg';

export const ImageHero = styled.img`
  @media screen and (max-width: 768px) {
    width: 100vw;
    content: url(${HeroMobile});
  }

  @media screen and (min-width: 769px) {
    width: 75vw;
    border-radius: 14px;
    content: url(${HeroImage});
  }
`;
