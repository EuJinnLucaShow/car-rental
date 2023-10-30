import styled from '@emotion/styled';
import HeroCar from '../../images/hero-car.png';
import '../../custom-font.css';
import Rectangle from '../../images/rectangle.svg';

export const WrapperHero = styled.div`
  background-color: #f7f7fb;
  height: 709px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
`;

export const ImageHero = styled.img`
  width: 825px;
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
  font-family: 'GeomanistMedium';
  font-size: 64px;
  line-height: 110%; /* 70.4px */
  letter-spacing: 0.8px;
`;

export const Span = styled.span`
  color: #3083ff;
  font-family: 'GeomanistMedium';
  font-size: 64px;
  line-height: 110%;
  letter-spacing: 0.8px;
  position: relative;
  &::after {
    position: absolute;
    content: url(${Rectangle});
    top: 23px;
    right: 0;
  }
`;

export const Text = styled.article`
  color: #929395;

  font-family: 'GeomanistRegular';
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

export const WrapperBrandLogo = styled.div`
  display: flex;
  width: 1160px;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 123px;
  margin-left: auto;
  margin-right: auto;
`;

export const ImgBrandLogo = styled.img`
  width: 64px;
  height: 64px;
`;
