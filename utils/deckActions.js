export const handleShuffle = async (API_URL, deckId) => {
  await fetch(`${API_URL}/deck/${deckId}/shuffle/?remaining=true`);
};

export const handleDraw = async (API_URL, deckId, addCard) => {
  const res = await fetch(`${API_URL}/deck/${deckId}/draw/?count=1`);
  const json = await res.json();
  addCard(json.cards[0]);
};

export const handleCreate = async (API_URL, initializeDeck) => {
  const res = await fetch(`${API_URL}/deck/new`);
  const json = await res.json();
  initializeDeck(json.deck_id);
};
