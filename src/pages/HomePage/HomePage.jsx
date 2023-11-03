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
  WrapperBlock,
  StepTitle,
  StepArticle,
  WrapperWhyChooseUs,
  ContentWhyChooseUs,
  ImgWhyChooseUs,
  TitleWhyChooseUs,
  SpanWhyChooseUs,
  ListWhyChooseUs,
  ItemWhyChooseUs,
  TitleItem,
  ArticleItem,
  IconsItem,
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
import Location from '../../images/location.svg';
import Calendar from '../../images/calendar-tick.svg';
import Book from '../../images/car.svg';
import Line from '../../images/Line.svg';
import ImageWhyChooseUs from '../../images/image-why-choose-us.png';
import Icons from '../../images/symbol-defs.svg';

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
          <WrapperBlock>
            <WrapperImgLocation>
              <img src={Location} alt="Location" />
            </WrapperImgLocation>
            <StepTitle>Choose location</StepTitle>
            <StepArticle>
              Choose your location and find your best car.
            </StepArticle>
          </WrapperBlock>
          <img src={Line} alt="Line" />
          <WrapperBlock>
            <WrapperImgData>
              <img src={Calendar} alt="Calendar" />
            </WrapperImgData>
            <StepTitle>Pick-up date</StepTitle>
            <StepArticle>
              Select your pick up date and time to book your car.
            </StepArticle>
          </WrapperBlock>
          <img src={Line} alt="Line" />
          <WrapperBlock>
            <WrapperImgBook>
              <img src={Book} alt="Book" />
            </WrapperImgBook>
            <StepTitle>Book your car</StepTitle>
            <StepArticle>
              Book your car and we will deliver it directly to you.
            </StepArticle>
          </WrapperBlock>
        </WrapperStep>
      </WrapperHowItWork>
      <WrapperWhyChooseUs>
        <ImgWhyChooseUs>
          <img src={ImageWhyChooseUs} alt="Cars Map" width="610px" />
        </ImgWhyChooseUs>
        <ContentWhyChooseUs>
          <TitleWhyChooseUs>
            Why choose us
            <SpanWhyChooseUs>
              We offer the best experience with our rental deals
            </SpanWhyChooseUs>
          </TitleWhyChooseUs>
          <ListWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-wallet`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>Best price guaranteed</TitleItem>
                <ArticleItem>
                  Find a lower price? We’ll refund you 100% of the difference
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-profile`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>Experience driver</TitleItem>
                <ArticleItem>
                  Don’t have a driver? Don’t worry, we have many experienced
                  driver for you.
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-bitcoin-refresh`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>24-hour car delivery</TitleItem>
                <ArticleItem>
                  Book your car anytime and we will deliver it directly to you.
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-messages`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>24/7 technical support</TitleItem>
                <ArticleItem>
                  Have a question? Contact Carentall support anytime when you
                  have problem.
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
          </ListWhyChooseUs>
        </ContentWhyChooseUs>
      </WrapperWhyChooseUs>
    </>
  );
}

export default HomePage;
