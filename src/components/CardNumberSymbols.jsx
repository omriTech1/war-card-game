import { CardSymbol } from "./CardSymbol";
import { PropTypes } from "prop-types";
import { useMemo } from "react";

export function CardNumberSymbols({ number = 1, shape = "♥", ...props }) {
  const numberPositions = useMemo(
    () => ({
      1: [8],
      2: [2, 14],
      3: [8, 2, 14],
      4: [1, 3, 13, 15],
      5: [1, 3, 8, 13, 15],
      6: [1, 3, 7, 9, 13, 15],
      7: [1, 3, 5, 7, 9, 13, 15],
      8: [1, 3, 5, 7, 9, 11, 13, 15],
      9: [1, 3, 4, 6, 8, 10, 12, 13, 15],
      10: [1, 3, 16, 4, 6, 10, 17, 12, 13, 15],
    }),
    []
  );

  const enabledPositions = useMemo(
    () => numberPositions[Math.max(1, Math.min(10, number))],
    [number]
  );

  const positions = useMemo(
    () => [
      { x: 0, y: 0 }, // 1
      { x: 13, y: 0 }, // 2
      { x: 26, y: 0 }, // 3
      { x: 0, y: 16 }, // 4
      { x: 13, y: 12 }, // 5
      { x: 26, y: 16 }, // 6
      { x: 0, y: 24 }, // 7
      { x: 13, y: 24 }, // 8
      { x: 26, y: 24 }, // 9
      { x: 0, y: 32, flipped: true }, // 10
      { x: 13, y: 36, flipped: true }, // 11
      { x: 26, y: 32, flipped: true }, // 12
      { x: 0, y: 48, flipped: true }, // 13
      { x: 13, y: 48, flipped: true }, // 14
      { x: 26, y: 48, flipped: true }, // 15
      { x: 13, y: 8 }, // 16 (like 5)
      { x: 13, y: 40, flipped: true }, // 17 (like 11)
    ],
    []
  );

  return (
    <svg {...props} viewBox="0 0 42 64">
      {positions.map(
        (details, pos) =>
          enabledPositions.includes(pos + 1) && (
            <CardSymbol key={pos} {...details}>
              {shape}
            </CardSymbol>
          )
      )}
    </svg>
  );
}

CardNumberSymbols.propTypes = {
  shape: PropTypes.oneOf(["♥", "♦", "♣", "♠"]),
  number: PropTypes.number,
};
