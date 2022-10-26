import React, { useMemo } from "react";
import {PropTypes} from 'prop-types';


const Card = ({ number, type }) => {
  const textColor = useMemo(() => {
    return ["heart", "diamond"].includes(type)
      ? "text-red-600"
      : "text-black"
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
      }
    } else {
      return number;
    }
  },[number])


  return (
    <div className="flex h-[500px] w-96 flex-col justify-between rounded-lg bg-white p-3 outline outline-1">
      <div className={`${textColor} text-3xl`}>{symbol}</div>
      <div className="flex flex-1 items-center justify-center gap-x-3 text-4xl">
        <div className="flex flex-wrap justify-center items-center">
          {Array.from(Array(number), (x, index) => {
            return <div key={index} className={`${type}`}></div>;
          })}
        </div>
      </div>
      <div className={`${textColor} self-end text-3xl`}>{symbol}</div>
    </div>
  );
};

export default Card;


Card.propTypes = {
  number : PropTypes.number,
  type: PropTypes.oneOf(['heart', 'diamond','club','spade'])
}