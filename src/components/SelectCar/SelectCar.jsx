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
  const uniqueCarMakes = [...new Set(advertsCars.map(cars => cars.make))];

  React.useEffect(() => {
    console.log(advertsCars.filter(cars => carModel.includes(cars.make)));
  }, [carModel]);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setCarModel(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 225 }}>
        <InputLabel id="demo-multiple-name-label">Car brand</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={carModel}
          onChange={handleChange}
          input={
            <OutlinedInput
              label="Car brand"
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
    </div>
  );
}
