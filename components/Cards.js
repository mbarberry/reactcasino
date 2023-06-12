import { useState } from 'react';
import { Box, Typography } from '@mui/material';

export function Cards({ drawnCards, render }) {
  const [selected, setSelected] = useState('');
  return (
    <>
      {drawnCards.map((card) => {
        const cardId = card.value.concat(card.suit);
        return render({
          key: cardId,
          card,
          isSelected: selected === cardId,
          select: () => setSelected(cardId),
        });
      })}
    </>
  );
}

export function Card({ name, color, image, isSelected, select }) {
  return (
    <Box
      onClick={select}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        ...(isSelected ? { border: `2px solid ${color}` } : {}),
      }}>
      <Typography
        variant='h5'
        sx={{ color }}>
        {name}
      </Typography>
      <Box
        component='img'
        src={image}
        alt={`${name} PLAYING CARD`}
        sx={{ height: '200px', width: '140px' }}
      />
    </Box>
  );
}
