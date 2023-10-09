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

export default function CardItem({
  data: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  },
}) {
  return (
    <Wrapper>
      <WrapperImage>
        <FavoriteIcon />
        <Image src={img} alt="Car" />
      </WrapperImage>
      <WrapperTitle>
        <Title>
          {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
        </Title>
        <Price>{rentalPrice}</Price>
      </WrapperTitle>
      <Description>
        <li>{address.split(',')[1]}</li>
        <li>{address.split(',')[2]}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage}</li>
        <li>{accessories[0]}</li>
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
