import Checkbox from '@mui/material/Checkbox';
import { StylesFavoriteBorder, StylesFavorite } from './FavoriteIcon.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';
import { selectFavorites } from 'redux/selectors';
import { useEffect } from 'react';

export default function FavoriteIcon({ data }) {
  const dispatch = useDispatch();

  const arrs = useSelector(selectFavorites);

  const isChecked = arrs.favorites.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };

  useEffect(() => {
    console.log(arrs);
  }, [arrs]);

  return (
    <div style={{ position: 'absolute', top: '0', right: '0' }}>
      <Checkbox
        icon={<StylesFavoriteBorder />}
        checkedIcon={<StylesFavorite />}
        checked={isChecked}
        onChange={handleToggleFavorite}
      />
    </div>
  );
}
