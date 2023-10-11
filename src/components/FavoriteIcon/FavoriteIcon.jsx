import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import { useUpdateFavoriteAdvertByIdMutation } from 'redux/operations';

export default function FavoriteIcon({ data }) {
  const { id, favorite } = data;
  const [favChecked, setFavChecked] = React.useState(favorite);

  const StylesFavorite = styled(Favorite)({
    fill: '#3470FF',
  });

  const StylesFavoriteBorder = styled(FavoriteBorder)({
    fill: '#FFFFFFCC',
  });

  const [updateFavoriteAdvertById] = useUpdateFavoriteAdvertByIdMutation();

  const handleToggleFavorite = async ({ id, favorite }) => {
    try {
      // Toggle the favorite status
      const newFavoriteStatus = !favorite;
      // Call the mutation to update the favorite status
      await updateFavoriteAdvertById({ id, favorite: newFavoriteStatus });
      setFavChecked(newFavoriteStatus);
    } catch (error) {
      console.log('Sorry something wrong');
    }
  };

  return (
    <div style={{ position: 'absolute', top: '0', right: '0' }}>
      <Checkbox
        icon={<StylesFavoriteBorder />}
        checkedIcon={<StylesFavorite />}
        checked={favChecked} // Assuming 'favorite' is a boolean property in the 'data' object
        onChange={() => handleToggleFavorite({ id, favorite })}
      />
    </div>
  );
}
