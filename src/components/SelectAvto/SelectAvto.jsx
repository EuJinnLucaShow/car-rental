import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import advertsCars from '../../db/advertsCars.json';

export default function SelectAvto() {
  const uniqueCarMakes = [...new Set(advertsCars.map(cars => cars.make))];

  return (
    <div>
      <Autocomplete
        disablePortal
        id="car-brand"
        options={uniqueCarMakes}
        sx={{
          width: 225,
          borderRadius: 14,
          background: '#F7F7FB',
          '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
            borderRadius: 14,
          },
        }}
        renderInput={params => <TextField {...params} label="Car brand" />}
      />
    </div>
  );
}
