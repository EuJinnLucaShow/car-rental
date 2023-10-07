import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import advertsCars from '../../db/advertsCars.json';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 225,
      borderRadius: 14,
    },
  },
};

function getStyles(model, carModel, theme) {
  return {
    fontWeight:
      carModel.indexOf(model) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectCar() {
  const theme = useTheme();
  const [carModel, setCarModel] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const uniqueCarMakes = [...new Set(advertsCars.map(cars => cars.make))];
  const prices = [
    '$10',
    '$20',
    '$30',
    '$40',
    '$50',
    '$60',
    '$70',
    '$80',
    '$90',
    '$100',
  ];

  React.useEffect(() => {
    const selectCars = advertsCars.filter(cars => carModel.includes(cars.make));
    const selectPrice = selectCars.filter(cars =>
      price.includes(cars.rentalPrice)
    );
    console.log(selectPrice);
  }, [carModel, price]);

  const handleChangeCar = event => {
    const {
      target: { value },
    } = event;
    setCarModel(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangePrice = event => {
    const {
      target: { value },
    } = event;
    setPrice(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 225 }}>
        <InputLabel id="сar-brand-label">Car brand</InputLabel>
        <Select
          labelId="сar-brand-label"
          id="сar-brand"
          multiple
          value={carModel}
          onChange={handleChangeCar}
          input={
            <OutlinedInput
              label="сar-brand"
              sx={{
                borderRadius: '14px',
                background: '#F7F7FB',
              }}
            />
          }
          MenuProps={MenuProps}
        >
          {uniqueCarMakes.map(make => (
            <MenuItem
              key={make}
              value={make}
              style={getStyles(make, carModel, theme)}
            >
              {make}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 135 }}>
        <InputLabel id="price-1-hour-label">Price/ 1 hour</InputLabel>
        <Select
          labelId="price-1-hour-label"
          id="price-1-hour"
          multiple
          value={price}
          onChange={handleChangePrice}
          input={
            <OutlinedInput
              label="price-1-hour"
              sx={{
                borderRadius: '14px',
                background: '#F7F7FB',
              }}
            />
          }
          MenuProps={MenuProps}
        >
          {prices.map(cost => (
            <MenuItem
              key={cost}
              value={cost}
              style={getStyles(cost, price, theme)}
            >
              {cost}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
