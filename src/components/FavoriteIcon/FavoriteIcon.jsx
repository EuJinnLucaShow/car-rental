import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function FavoriteIcon() {
  const StylesFavorite = styled(Favorite)({
    fill: '#3470FF',
  });

  return (
    <div style={{ position: 'absolute', top: '0', right: '0' }}>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<StylesFavorite />}
      />
    </div>
  );
}
