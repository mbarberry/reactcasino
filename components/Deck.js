import { useContext, useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { DeckContext } from './Casino';

const BigButton = styled(Button)({
  height: '70px',
  fontSize: 28,
});

export function DeckWrapper({ deckId, render }) {
  if (deckId) {
    return render(true);
  } else {
    return render(false);
  }
}

export function CreateDeck({ setDeckId }) {
  const { API_URL } = useContext(DeckContext);

  const handleCreate = async () => {
    const res = await fetch(`${API_URL}/deck/new`);
    const json = await res.json();
    setDeckId(json.deck_id);
  };
  return (
    <>
      <Typography variant='h3'>Create a deck to get started</Typography>
      <BigButton onClick={handleCreate}>Create Deck</BigButton>
    </>
  );
}

export function DeckActions({ count, addCard }) {
  const { deckId, API_URL } = useContext(DeckContext);

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
      <BigButton onClick={handleDraw}>Draw</BigButton>
    </Box>
  );
}
