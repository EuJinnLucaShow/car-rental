import Checkbox from '@mui/material/Checkbox';
import { StylesFavoriteBorder, StylesFavorite } from './FavoriteIcon.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';
import { selectFavorites } from 'redux/selectors';

export default function FavoriteIcon({ data }) {
  const dispatch = useDispatch();

  const cars = useSelector(selectFavorites);

  const isChecked = cars.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };

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
