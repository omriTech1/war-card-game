import { PropTypes } from "prop-types";
import { CardNumberSymbols } from "./CardNumberSymbols";
import { useMemo } from "react";

const Card = ({ number, type, isFlipped, ...props }) => {
  const cardColor = useMemo(() => {
    return ["heart", "diamond"].includes(type) ? "text-red-600" : "text-black";
  }, [type]);

  const symbol = useMemo(() => {
    if (number === 1) {
      return "A";
    } else if (number > 10) {
      switch (number) {
        case 11:
          return "J";
        case 12:
          return "Q";
        case 13:
          return "K";
        case 14:
          return "JOKER";
      }
    } else {
      return number;
    }
  }, [number]);

  const shape = useMemo(() => {
    switch (type) {
      case "heart":
        return "♥";
      case "club":
        return "♣";
      case "diamond":
        return "♦";
      case "spade":
        return "♠";
    }
  }, [type]);

  return (
    <div
      {...props}
      className={`${
        isFlipped ? "bg-white" : "flipped-card"
      } ${cardColor} relative flex aspect-[2/3] w-full rounded-lg border p-[3%]`}
    >
      {isFlipped && (
        <>
          <div className="absolute top-1 left-1">
            <svg width="100%" viewBox="0 0 50 50">
              <g>
                <text fill="currentColor" fontSize="8" x={1} y={8}>
                  {symbol}
                </text>
              </g>
              <g>
                <text fill="currentColor" fontSize="8" x={1} y={16}>
                  {shape}
                </text>
              </g>
            </svg>
          </div>

          {number <= 10 && (
            <div className="flex items-center justify-center">
              <CardNumberSymbols number={number} shape={shape} width="70%" />
            </div>
          )}
          <div className="absolute right-1 bottom-1">
            <svg width="100%" viewBox="0 0 50 50">
              <g>
                <text fill="currentColor" fontSize="8" x={43} y={40}>
                  {symbol}
                </text>
              </g>
              <g>
                <text fill="currentColor" fontSize="8" x={43} y={48}>
                  {shape}
                </text>
              </g>
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;

Card.propTypes = {
  isFlipped: PropTypes.bool,
  number: PropTypes.number,
  type: PropTypes.oneOf(["heart", "diamond", "club", "spade"]),
};
