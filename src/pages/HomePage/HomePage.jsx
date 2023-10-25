import { Button, ImageHero, Title, WrapperHero } from './HomePage.styled';

function HomePage() {
  return (
    <WrapperHero>
      <Title>
        Welcome to RoadRover - Where Every Journey Begins with Your Perfect
        Ride!
      </Title>
      <Button to={'/catalog'}>Go to catalog</Button>
      <ImageHero alt="rent-a-car-for-your-holiday-road-trip" />
    </WrapperHero>
  );
}

export default HomePage;
