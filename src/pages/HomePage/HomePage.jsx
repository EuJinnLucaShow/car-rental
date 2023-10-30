import {
  WrapperHero,
  WrapperTitle,
  Title,
  Span,
  ImageHero,
  Text,
  ImgStorePlay,
  WrapperBrandLogo,
  ImgBrandLogo,
  WrapperHowItWork,
  TitleHowItWork,
  SpanHowItWork,
  WrapperStep,
  WrapperImgLocation,
  WrapperImgData,
  WrapperImgBook,
} from './HomePage.styled';

import AppStore from '../../images/app-store.png';
import GooglePlay from '../../images/google-play.png';
import Mazda from '../../images/mazda.png';
import Audi from '../../images/audi.png';
import Vw from '../../images/vw.png';
import Bmw from '../../images/bmw.png';
import Amg from '../../images/amg.png';
import Ford from '../../images/ford.png';
import Nissan from '../../images/nissan.png';

function HomePage() {
  return (
    <>
      <WrapperHero>
        <WrapperTitle>
          <Title>
            Find, book, and rental car in <Span>Easy</Span> steps.
          </Title>
          <Text>
            Get a car wherever and whenever you need it with your iOS or Android
            device.
          </Text>
          <div style={{ display: 'flex', marginTop: 32, gap: 12 }}>
            <ImgStorePlay src={AppStore} alt="App Store" />
            <ImgStorePlay src={GooglePlay} alt="Google Play" />
          </div>
        </WrapperTitle>
        <ImageHero />
      </WrapperHero>
      <WrapperBrandLogo>
        <ImgBrandLogo src={Mazda} alt="Brand Logo Mazda" />
        <ImgBrandLogo src={Audi} alt="Brand Logo Audi" />
        <ImgBrandLogo src={Vw} alt="Brand Logo VW" />
        <ImgBrandLogo src={Bmw} alt="Brand Logo BMW" />
        <ImgBrandLogo src={Amg} alt="Brand Logo AMG" />
        <ImgBrandLogo src={Ford} alt="Brand Logo Ford" />
        <ImgBrandLogo src={Nissan} alt="Brand Logo Nissan" />
      </WrapperBrandLogo>
      <WrapperHowItWork>
        <TitleHowItWork>
          HOW IT WORK
          <SpanHowItWork>Rent with following 3 working steps</SpanHowItWork>
        </TitleHowItWork>
        <WrapperStep>
          <WrapperImgLocation></WrapperImgLocation>
          <WrapperImgData></WrapperImgData>
          <WrapperImgBook></WrapperImgBook>
        </WrapperStep>
      </WrapperHowItWork>
    </>
  );
}

export default HomePage;
