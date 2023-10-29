import {
  WrapperHero,
  WrapperTitle,
  Title,
  Span,
  ImageHero,
  ImgRectangle,
  Text,
  ImgStorePlay,
} from './HomePage.styled';
import Rectangle from '../../images/rectangle.svg';
import AppStore from '../../images/app-store.png';
import GooglePlay from '../../images/google-play.png';

function HomePage() {
  return (
    <WrapperHero>
      <WrapperTitle>
        <Title>
          Find, book, and rental car in <Span>Easy</Span> steps.
        </Title>
        <ImgRectangle src={Rectangle} alt="Rectangle" />
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
      {/* <Title>
        Welcome to RoadRover - Where Every Journey Begins with Your Perfect
        Ride!
      </Title>
      <Button to={'/catalog'}>Go to catalog</Button> */}
    </WrapperHero>
  );
}

export default HomePage;
