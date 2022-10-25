import React from "react";

const Card = ({ number, type }) => {
  let symbol = null;
  const textColor = ["heart", "diamond"].includes(type)
    ? "text-red-600"
    : "text-black";

  if (number === 1) {
    symbol = "A";
  } else if (number > 10) {
    switch (number) {
      case 11:
        symbol = "J";
        break;
      case 12:
        symbol = "Q";
        break;
      case 13:
        symbol = "K";
        break;
    } 
  } else {
    symbol = number
  }

  return (
    <div className="flex h-[500px] w-96 flex-col justify-between rounded-lg bg-white p-3 outline outline-1">
      <div className={`${textColor} text-3xl`}>{symbol}</div>
      <div className="flex flex-1 items-center justify-center gap-x-3 text-4xl">
        {/* {'❤️'.repeat(number)} */}
        <div className="flex flex-wrap">
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
