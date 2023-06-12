import { useState, useEffect } from 'react';

export default function useCards() {
  const [deckId, setDeckId] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
}
