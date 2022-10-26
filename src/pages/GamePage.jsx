import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import GameOverModal from "../components/GameOverModal";
import ScoreTicker from "../components/ScoreTicker";
import { userDetailsStore } from "../context";

const GamePage = () => {
  const [context, _] = useContext(userDetailsStore);
  const [isGameOverModalOpen, setIsGameOverModalOpen] = useState(false);
  const [deck, setDeck] = useState();

  useEffect(() => {
    let deck = createDeck();
    deck.sort((a, b) => 0.5 - Math.random());
    setDeck(deck);
  }, []);

  const createDeck = () => {
    const deck = [];
    const types = ["heart", "club", "diamond", "spade"];
    let number = 1;
    for (let i = 1; i < 53; i++) {
      deck.push({
        number,
        type: types[number % 4],
      });
      if (i % 4 === 0) {
        number++;
      }
    }
    return deck;
  };

  const playTurn = () => {
    // opens both of the cards and checks to see which card is higher
    // increases winner's score accordingly
  };

  return (
    <div className="flex h-screen bg-green-300 p-5">
      {isGameOverModalOpen && <GameOverModal isWinner={false} />}
      <section className="flex-1">
        <div className="flex flex-col gap-y-16">
          <ScoreTicker name={context} />
          {player1Cards && (
            <Card
              number={deck[0]?.number}
              type={deck[0]?.type}
              isFlipped={false}
            />
          )}
        </div>
      </section>
      <section className="flex-1">
        <div className="flex flex-col items-end gap-y-16">
          <ScoreTicker name={"יריב 3"} />
          {player2Cards && (
            <Card
              number={deck[1]?.number}
              type={deck[1]?.type}
              isFlipped={false}
            />
          )}
        </div>
      </section>
      <button
        className="absolute left-[50%] bottom-60 h-24 w-96
       translate-x-[-50%] rounded-full
        bg-fuchsia-300
         font-serif text-4xl outline outline-1"
      >
        התחל משחק
      </button>
    </div>
  );
};

export default GamePage;
