import React, { useContext, useState } from "react";
import Card from "../components/Card";
import GameOverModal from "../components/GameOverModal";
import ScoreTicker from "../components/ScoreTicker";
import { userDetailsStore } from "../context";
import { useDeckOfCards } from "../hooks/useDeckOfCard";

const GamePage = () => {
  const [context, _] = useContext(userDetailsStore);
  const [isGameOverModalOpen, setIsGameOverModalOpen] = useState(false);
  const [deck, {shuffle}] = useDeckOfCards();

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
          {deck && (
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
          {deck && (
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
