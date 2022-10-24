import React, { useContext } from "react";
import Card from "../components/Card";
import ScoreTicker from "../components/ScoreTicker";
import { Context } from "../context";
import deck from '../deck.json'

const GamePage = () => {
  const [context, setContext] = useContext(Context);
  const shuffledDeck = deck.sort((a, b) => 0.5 - Math.random());

  const player1Cards = shuffledDeck.slice(0, shuffledDeck.length/2)
  const player2Cards = shuffledDeck.slice(shuffledDeck.length/2)

  return (
    <div className="h-screen bg-green-300 flex p-5">
      <section className="flex-1">
        <div className="flex flex-col gap-y-16">
          <ScoreTicker score={63} name={context}/>
          <Card number={player1Cards[0].number} type={player2Cards[0].type}/>
        </div>
      </section>
      <section className="flex-1">
        <div className="flex flex-col gap-y-16 items-end">
          <ScoreTicker name={'יריב 3'} />
        <Card number={player2Cards[0].number} type={player2Cards[0].type}/>
        </div>
      </section>
      <button className="absolute text-4xl bg-fuchsia-300 outline outline-1 rounded-full font-serif h-24 w-96 left-[50%] translate-x-[-50%] bottom-60">
        התחל משחק 
      </button>
    </div>
  );
};

export default GamePage;
