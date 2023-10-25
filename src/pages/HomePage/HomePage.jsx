import { Button, ImageHero, Title } from './HomePage.styled';

function HomePage() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '14px',
      }}
    >
      <Title>
        Welcome to RoadRover - Where Every Journey Begins with Your Perfect
        Ride!
      </Title>
      <Button to={'/catalog'}>Go to catalog</Button>
      <ImageHero alt="rent-a-car-for-your-holiday-road-trip" />
    </div>
  );
}

export default HomePage;
