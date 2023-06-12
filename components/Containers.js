import { Box, Typography } from '@mui/material';

export function CasinoContainer({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography variant='h1'>Casino</Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          gap: '20px',
          justifyContent: 'center',
        }}>
        {children}
      </Box>
    </Box>
  );
}

export function DeckContainer({ children }) {
  return (
    <Box
      sx={{
        flexBasis: '40%',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
      }}>
      {children}
    </Box>
  );
}

export function CardsContainer({ children }) {
  return (
    <Box
      sx={{
        flexBasis: '60%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '40px',
      }}>
      {children}
    </Box>
  );
}
