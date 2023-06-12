import { useState, createContext } from 'react';

import { CasinoContainer, DeckContainer, CardsContainer } from './Containers';
import { DeckWrapper, DeckActions, CreateDeck } from './Deck';
import { Cards, Card } from './Cards';

export const CasinoContext = createContext(null);

export default function Casino() {
  const [deckId, setDeckId] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);

  return (
    <CasinoContext.Provider
      value={{ API_URL: 'https://deckofcardsapi.com/api', deckId }}>
      <CasinoContainer>
        <DeckContainer>
          <DeckWrapper
            deckId={deckId}
            render={(deck) => {
              if (deck) {
                return (
                  <DeckActions
                    count={52 - drawnCards.length}
                    addCard={(card) => {
                      setDrawnCards([...drawnCards, card]);
                    }}
                  />
                );
              }
              return <CreateDeck setDeckId={setDeckId} />;
            }}
          />
        </DeckContainer>
        <CardsContainer>
          <Cards
            drawnCards={drawnCards}
            render={({ key, card, isHighlighted, highlight }) => {
              return (
                <Card
                  key={key}
                  name={`${card.value} of ${card.suit}`}
                  color={'SPADES CLUBS'.includes(card.suit) ? 'black' : 'red'}
                  image={card.images.png}
                  isHighlighted={isHighlighted}
                  highlight={highlight}
                />
              );
            }}
          />
        </CardsContainer>
      </CasinoContainer>
    </CasinoContext.Provider>
  );
}
