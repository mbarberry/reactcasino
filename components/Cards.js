import { Box, Typography } from '@mui/material';

export function Cards({ drawnCards, render }) {
  return (
    <>
      {drawnCards.map((card) => {
        const name = `${card.value} of ${card.suit}`;
        const color = ['SPADES', 'CLUBS'].includes(card.suit) ? 'black' : 'red';
        const image = card.images.png;

        return render({ name, color, image });
      })}
    </>
  );
}

export function Card({ name, color, image }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
