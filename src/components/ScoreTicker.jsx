import React from "react";
import { PropTypes, defaultProps } from "prop-types";

const ScoreTicker = ({ score, name }) => {
  return (
    <div className="flex gap-x-4">
      <div className="w-fit px-5 py-1 font-mono outline outline-2">{score}</div>
      <span>{name} </span>
    </div>
  );
};

export default ScoreTicker;


ScoreTicker.defaultProps = {
  score: 0
}







ScoreTicker.propTypes = {
  score: PropTypes.number,
  name: PropTypes.string,
};
