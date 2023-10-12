import styled from '@emotion/styled';
import HeroImage from '../../images/explore-our-vehicles.png';
import HeroMobile from '../../images/car_rental.jpg';

export const ImageHero = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    content: url(${HeroMobile});
  }

  @media screen and (min-width: 769px) {
    content: url(${HeroImage});
  }
`;
