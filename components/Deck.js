import { useContext } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { CasinoContext } from './Casino';

const BigButton = styled(Button)({
  height: '70px',
  fontSize: 28,
});

export function DeckWrapper({ deckId, render }) {
  return render(!!deckId);
}

export function CreateDeck({ initializeDeck }) {
  const { API_URL } = useContext(CasinoContext);

  const handleCreate = async () => {
    const res = await fetch(`${API_URL}/deck/new`);
    const json = await res.json();
    initializeDeck(json.deck_id);
  };

  return (
    <>
      <Typography variant='h3'>Create a deck to get started</Typography>
      <BigButton onClick={handleCreate}>Create Deck</BigButton>
    </>
  );
}

export function DeckActions({ count, addCard }) {
  const { deckId, API_URL } = useContext(CasinoContext);

  const handleShuffle = async () => {
    await fetch(`${API_URL}/deck/${deckId}/shuffle/?remaining=true`);
  };

  const handleDraw = async () => {
    const res = await fetch(`${API_URL}/deck/${deckId}/draw/?count=1`);
    const json = await res.json();
    addCard(json.cards[0]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant='h3'>Cards available: {count}</Typography>
      <BigButton onClick={handleShuffle}>Shuffle</BigButton>
      <BigButton
        onClick={handleDraw}
        disabled={count <= 0}>
        Draw
      </BigButton>
    </Box>
  );
}
