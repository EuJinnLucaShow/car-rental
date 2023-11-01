import { useState } from 'react';
import Buttons from 'components/Buttons/Buttons';
import BasicModal from 'components/Modal/Modal';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import {
  Wrapper,
  WrapperImage,
  WrapperTitle,
  Title,
  Price,
  Description,
} from './CardItem.styled';
import CarImg from 'components/CarImg/CarImg';

export default function CardItem({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <WrapperImage>
        <FavoriteIcon data={data} />
        <CarImg data={data} />
      </WrapperImage>
      <WrapperTitle>
        <Title>
          {data.make} <span style={{ color: '#3470FF' }}>{data.model}</span>,{' '}
          {data.year}
        </Title>
        <Price>{data.rentalPrice}</Price>
      </WrapperTitle>
      <Description>
        <li>{data.address.split(',')[1]}</li>
        <li>{data.address.split(',')[2]}</li>
        <li>{data.rentalCompany}</li>
        <li>{data.type}</li>
        <li>{data.model}</li>
        <li>{data.mileage}</li>
        <li>{data.accessories[0]}</li>
      </Description>
      <Buttons text="Learn more" onClick={handleOpen} width="274px" />
      {open && <BasicModal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
}
