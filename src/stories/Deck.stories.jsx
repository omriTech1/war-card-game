import React, { useCallback, useEffect, useState } from "react";

import Card from "../components/Card";
import { useDeckOfCards } from "../hooks/useDeckOfCard";

function Deck({showDebug, includeJokers}) {
  const [deck, {shuffle}] = useDeckOfCards(includeJokers);
  const [flippedCards, setFlippedCards] = useState([]);

  const flipCard = useCallback((id) => {
    if (flippedCards.includes(id)) {
      setFlippedCards([
        ...flippedCards.filter(currId => currId !== id)
      ])
  } else {
    setFlippedCards([ 
      ...flippedCards,
      id
    ])
  }
  }, [flippedCards]);

  return <div>
    <button onClick={() => shuffle()}>Shuffle</button>
    <div className="flex gap-2 flex-wrap">
    {deck && deck.map(({_id, ...card}) => <div className="relative" key={_id}>
      {showDebug && <pre className="bg-red-100 text-sm absolute left-0 top-0">{_id}: {JSON.stringify(card)}</pre>}
      <Card {...card} isFlipped={!flippedCards.includes(_id)} onClick={() => flipCard(_id)} />
      </div>)}
  </div>
  </div>
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DevUtils/Deck",
  component: Deck,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Deck {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  showDebug: false,
  includeJokers: false
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args