import Buttons from 'components/Buttons/Buttons';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import {
  Wrapper,
  WrapperImage,
  Image,
  WrapperTitle,
  Title,
  Price,
  Description,
} from './CardItem.styled';

const car = {
  id: 9582,
  year: 2008,
  make: 'Buick',
  model: 'Enclave',
  type: 'SUV',
  img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg',
  description:
    'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
  fuelConsumption: '10.5',
  engineSize: '3.6L V6',
  accessories: ['Leather seats', 'Panoramic sunroof', 'Premium audio system'],
  functionalities: ['Power liftgate', 'Remote start', 'Blind-spot monitoring'],
  rentalPrice: '$40',
  rentalCompany: 'Luxury Car Rentals',
  address: '123 Example Street, Kiev, Ukraine',
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 5858,
};

export default function CardItem() {
  return (
    <Wrapper>
      <WrapperImage>
        <FavoriteIcon />
        <Image src={car.img} alt="Car" />
      </WrapperImage>
      <WrapperTitle>
        <Title>
          {car.make} <span style={{ color: '#3470FF' }}>{car.model}</span>,{' '}
          {car.year}
        </Title>
        <Price>{car.rentalPrice}</Price>
      </WrapperTitle>
      <Description>
        <li>{car.address.split(',')[1]}</li>
        <li>{car.address.split(',')[2]}</li>
        <li>{car.rentalCompany}</li>
        <li>{car.type}</li>
        <li>{car.model}</li>
        <li>{car.mileage}</li>
        <li>{car.accessories[0]}</li>
      </Description>
      <Buttons
        text="Learn more"
        onClick={() => {
          window.location.href = 'tel:+380730000000';
        }}
        width="274px"
      />
    </Wrapper>
  );
}
