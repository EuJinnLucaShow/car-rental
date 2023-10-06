import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function ButtonUsage({ text, onClick }) {
  const StylesButton = styled(Button)(({ theme }) => ({
    width: '274px',
    padding: '12px 0 12px 0',
    borderRadius: '12px',
    color: theme.palette.getContrastText('#0B44CD'),
    backgroundColor: '#0B44CD',
    '&:hover': {
      backgroundColor: '#3470FF',
    },
  }));

  return (
    <StylesButton variant="contained" onClick={onClick}>
      {text}
    </StylesButton>
  );
}
