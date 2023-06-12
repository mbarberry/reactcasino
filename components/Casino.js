import { useState, createContext } from 'react';

import { CasinoContainer, DeckContainer, CardsContainer } from './Containers';
import { DeckWrapper, DeckActions, CreateDeck } from './Deck';
import { Cards, Card, CardWrapper } from './Cards';

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
                    initializeNewDeck={(id) => {
                      setDrawnCards([]);
                      setDeckId(id);
                    }}
                  />
                );
              }
              return <CreateDeck initializeDeck={(id) => setDeckId(id)} />;
            }}
          />
        </DeckContainer>
        <CardsContainer>
          <Cards
            drawnCards={drawnCards}
            render={({ key, card, isSelected, select, unselect }) => {
              return (
                <CardWrapper
                  key={key}
                  card={
                    <Card
                      name={`${card.value} of ${card.suit}`}
                      color={
                        'SPADESCLUBS'.includes(card.suit) ? 'black' : 'red'
                      }
                      image={card.images.png}
                      isSelected={isSelected}
                      select={select}
                    />
                  }
                  isSelected={isSelected}
                  unselect={unselect}
                />
              );
            }}
          />
        </CardsContainer>
      </CasinoContainer>
    </CasinoContext.Provider>
  );
}
