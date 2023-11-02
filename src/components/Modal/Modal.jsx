import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { GrClose } from 'react-icons/gr';

import Button from 'components/Buttons/Buttons';
import {
  Wrapper,
  CloseButton,
  Wrap,
  TextWrap,
  Title,
  Span,
  List,
  Item,
  Description,
  Info,
  ConditionItem,
  ConditionList,
  ConditionSpan,
} from './Modal.styled';
import CarImg from 'components/CarImg/CarImg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: 24,
  width: '541px',
  maxHeight: '90vh',
  overflowY: 'auto',
};

export default function BasicModal({ open, onClose, data }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#12141720',
              borderRadius: '5px',
            },
          }}
        >
          <Wrapper>
            <CloseButton onClick={onClose}>
              <GrClose style={{ width: '18px', height: '18px' }} />
            </CloseButton>
            <CarImg data={data} width="461" height="248" />
            <Wrap>
              <TextWrap>
                <Title>
                  {data.make} <Span>{data.model}, </Span>
                  {data.year}
                </Title>
              </TextWrap>
              <List>
                <Item>{data.address.split(',')[1]}</Item>
                <Item>{data.address.split(',')[2]}</Item>
                <Item>Id: </Item>
                <Item>Year: {data.year}</Item>
                <Item>Type: {data.type}</Item>
              </List>
              <List>
                <Item>Fuel Consumption: {data.fuelConsumption}</Item>
                <Item>Engine Size: {data.engineSize}</Item>
              </List>
              <Description>{data.description}</Description>
              <Info>Accessories and functionalities:</Info>
              <List>
                {data.accessories.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <List>
                {data.functionalities.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <Info>Rental Conditions:</Info>
              <ConditionList>
                <ConditionItem>
                  Minimum age:{' '}
                  <ConditionSpan>
                    {new Date().getFullYear() - data.year}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  {data.rentalConditions.split('\n')[1]}
                </ConditionItem>
                <ConditionItem>
                  {data.rentalConditions.split('\n')[2]}
                </ConditionItem>
                <ConditionItem>
                  Mileage:{' '}
                  <ConditionSpan>
                    {data.mileage.toLocaleString('en-US')}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  Price: <ConditionSpan>{data.rentalPrice}</ConditionSpan>
                </ConditionItem>
              </ConditionList>
            </Wrap>
            <Button
              text="Rental car"
              width="168px"
              onClick={() => {
                window.location.href = 'tel:+380730000000';
              }}
            />
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
}
