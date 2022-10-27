export const createDeck = (includeJokers = false) => {
    const JOKERS = includeJokers ? 2 : 0
  const CARDS_IN_SHAPE = 13;
  const deck = [];
  const shapes = ["heart", "club", "diamond", "spade"];

  for (let i = 0; i < (CARDS_IN_SHAPE * shapes.length) + JOKERS; i++) {
    deck.push({
      _id: i,
      number: Math.floor(i / shapes.length) + 1,
      type: shapes[i % shapes.length],
      typeId: i % shapes.length,
    });
  }

  return deck;
};
