import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function ButtonUsage({ text, onClick, width }) {
  const StylesButton = styled(Button)(({ theme }) => ({
    width: width,
    padding: '12px 0 12px 0',
    borderRadius: '12px',
    color: theme.palette.getContrastText('#3470FF'),
    backgroundColor: '#3470FF',
    '&:hover': {
      backgroundColor: '#0B44CD',
    },
  }));

  return (
    <StylesButton variant="contained" onClick={onClick}>
      {text}
    </StylesButton>
  );
}
