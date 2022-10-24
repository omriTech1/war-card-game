import React from "react";

const ScoreTicker = ({ score = 0, name }) => {
  return (
    <div className="flex gap-x-4">
      <div className="outline outline-2 w-fit px-5 py-1 font-mono">{score}</div>
      <span>{name} </span>
    </div>
  );
};

export default ScoreTicker;
