import Button from 'components/Button/Button';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import {
  Wrapper,
  WrapperImage,
  Image,
  WrapperTitle,
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
        <h3>
          {car.make}, {car.year}
        </h3>
        <p> {car.rentalPrice}</p>
      </WrapperTitle>
      <Description>
        <li>Lviv</li>
        <li>Ukraine</li>
        <li>Premium Auto Rentals</li>
        <li>Premium</li>
        <li>Suv</li>
        <li>XC90</li>
        <li>9584</li>
        <li>IntelliSafe advanced safety features</li>
      </Description>
      <Button
        text="Learn more"
        onClick={() => alert('Click button')}
        width="274px"
      />
    </Wrapper>
  );
}
