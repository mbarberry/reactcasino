import { useState } from 'react';
import { Box, Typography } from '@mui/material';

export function Cards({ drawnCards, render }) {
  const [highlighted, setHighlighted] = useState('');
  return (
    <>
      {drawnCards.map((card) => {
        const cardId = card.value.concat(card.suit);

        return render({
          key: cardId,
          card,
          isHighlighted: highlighted === cardId,
          highlight: () => setHighlighted(cardId),
        });
      })}
    </>
  );
}

export function Card({ name, color, image, isHighlighted, highlight }) {
  const border = isHighlighted ? { border: `2px solid ${color}` } : {};

  return (
    <Box
      onClick={highlight}
      sx={{ display: 'flex', flexDirection: 'column', gap: '10px', ...border }}>
      <Typography
        variant='h5'
        sx={{ color: color }}>
        {name}
      </Typography>
      <Box
        component='img'
        src={image}
        alt='image of card'
        sx={{ height: '200px', width: '140px' }}
      />
    </Box>
  );
}
