import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckbox() {
  const StylesFavorite = styled(Favorite)({
    fill: '#3470FF',
  });

  return (
    <Checkbox
      {...label}
      icon={<FavoriteBorder />}
      checkedIcon={<StylesFavorite />}
    />
  );
}
