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

export const Title = styled.h1`
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

export const WrapperHowItWork = styled.div`
  display: flex;
  width: 1160px;
  flex-direction: column;
  align-items: center;
  gap: 54px;
  margin-top: 132px;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleHowItWork = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  color: #acaeb4;

  text-align: center;
  font-family: 'GeomanistMedium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 1.96px;
`;

export const SpanHowItWork = styled.span`
  color: #1d1e21;

  text-align: center;
  font-family: 'GeomanistMedium';
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 124%; /* 39.68px */
  letter-spacing: 0.4px;
`;

export const WrapperStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 1160px;
`;

export const WrapperImgLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 129px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;

  box-shadow: 0px 12px 32px 0px rgba(169, 169, 173, 0.16);
`;

export const WrapperImgData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 129px;
  flex-shrink: 0;
  border-radius: 24px;
  background: radial-gradient(
    115.89% 115.89% at 49.61% 115.89%,
    #3083ff 0%,
    #87b5fb 100%
  );
  box-shadow: 0px 16px 32px 0px rgba(48, 131, 255, 0.3);
`;

export const WrapperImgBook = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 129px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;

  box-shadow: 0px 12px 32px 0px rgba(169, 169, 173, 0.16);
`;

export const WrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepTitle = styled.h3`
  color: #1d1e21;

  text-align: center;
  font-family: 'GeomanistMedium';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.25px;
  margin-top: 40px;
`;

export const StepArticle = styled.article`
  color: #929395;
  width: 240px;
  text-align: center;
  font-family: 'GeomanistRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%; /* 23.04px */
  letter-spacing: 0.16px;
  margin-top: 16px;
`;

export const WrapperWhyChooseUs = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;

  margin-top: 132px;
  height: 662px;
  flex-shrink: 0;
  background: linear-gradient(
    270deg,
    #fafafa 0%,
    rgba(250, 250, 250, 0) 203.13%
  );
`;

export const ImgWhyChooseUs = styled.div`
  /*  */
`;

export const ContentWhyChooseUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const TitleWhyChooseUs = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  color: #acaeb4;

  font-family: 'GeomanistMedium';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  letter-spacing: 1.96px;
  text-transform: uppercase;
  margin-top: 90px;
  width: 433px;
`;

export const SpanWhyChooseUs = styled.span`
  color: #1d1e21;
  font-family: 'GeomanistMedium';
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 124%; /* 39.68px */
  letter-spacing: 0.4px;
  text-transform: none;
`;

export const ListWhyChooseUs = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const ItemWhyChooseUs = styled.li`
  display: flex;
`;

export const TitleItem = styled.h3`
  color: #1d1e21;
  font-family: 'GeomanistRegular';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.225px;
`;

export const ArticleItem = styled.article`
  width: 300px;
  color: #929395;
  font-family: 'GeomanistRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%; /* 20.16px */
  letter-spacing: 0.14px;
`;

export const IconsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;

  box-shadow: 0px 12px 32px 0px rgba(169, 169, 173, 0.16);

  margin-right: 20px;
`;
