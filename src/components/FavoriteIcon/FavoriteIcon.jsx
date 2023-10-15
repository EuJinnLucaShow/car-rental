import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import { useUpdateFavoriteAdvertByIdMutation } from 'redux/operations';
import { StylesFavoriteBorder, StylesFavorite } from './FavoriteIcon.styled';
import { toast } from 'react-toastify';

export default function FavoriteIcon({ data }) {
  const { id, favorite } = data;
  const [checked, setChecked] = React.useState(favorite);

  const [updateFavoriteAdvertById] = useUpdateFavoriteAdvertByIdMutation();

  const handleToggleFavorite = async ({ id, favorite }) => {
    try {
      const newFavoriteStatus = !favorite;
      await updateFavoriteAdvertById({ id, favorite: newFavoriteStatus });
      setChecked(newFavoriteStatus);

      if (newFavoriteStatus) {
        toast.success('Added to favorite', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        toast.warn('Removed from favorites', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      toast.error('Sorry, something went wrong', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div style={{ position: 'absolute', top: '0', right: '0' }}>
      <Checkbox
        icon={<StylesFavoriteBorder />}
        checkedIcon={<StylesFavorite />}
        checked={checked}
        onChange={() => handleToggleFavorite({ id, favorite })}
      />
    </div>
  );
}
