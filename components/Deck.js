import { useContext } from 'react';
import { Box, Typography } from '@mui/material';

import { CasinoContext } from './Casino';
import { BigButton } from '@/styles/components';
import { handleCreate, handleShuffle, handleDraw } from '@/utils/deckActions';

export function DeckWrapper({ deckId, render }) {
  return render(!!deckId);
}

export function DeckActions({ count, addCard, initializeNewDeck }) {
  const { API_URL, deckId } = useContext(CasinoContext);

  if (count > 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant='h3'>Cards available: {count}</Typography>
        <BigButton onClick={() => handleShuffle(API_URL, deckId)}>
          Shuffle
        </BigButton>
        <BigButton onClick={() => handleDraw(API_URL, deckId, addCard)}>
          Draw
        </BigButton>
      </Box>
    );
  }
  return (
    <BigButton onClick={() => handleCreate(API_URL, initializeNewDeck)}>
      New Deck
    </BigButton>
  );
}

export function CreateDeck({ initializeDeck }) {
  const { API_URL } = useContext(CasinoContext);

  return (
    <>
      <Typography variant='h3'>Create a deck to get started</Typography>
      <BigButton onClick={() => handleCreate(API_URL, initializeDeck)}>
        Create Deck
      </BigButton>
    </>
  );
}
