import { useCallback, useEffect, useState } from "react"
import { createDeck } from "../utils/createDeck";


export const useDeckOfCards = (includeJokers) => {
    const [ deck, setDeck ] = useState([]);
    
    useEffect(() => {
        setDeck(createDeck(includeJokers));
    }, [includeJokers]);

    const shuffle = useCallback(() => {
        setDeck(old => [...deck.sort(() => .5 - Math.random())]);
    }, [deck]);

    return [deck, {shuffle}];
}