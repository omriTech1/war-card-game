import React from "react";

const Card = ({ number, type }) => {
  let letter = null
  const textColor = ["heart", "diamond"].includes(type)
    ? "text-red-600"
    : "text-black";

  if (number === 1) {
    letter = 'A'
  }
  if (number > 10) {
    switch (number) {
      case 11:
        letter = "J";
        break;
      case 12:
        letter = "Q";
        break;
      case 13:
        letter = "K";
        break;
    }
  }

  return (
    <div className="h-[500px] p-3 bg-white rounded-lg outline outline-1 w-96 flex flex-col justify-between">
      <div className={`${textColor} text-3xl`}>{letter || number}</div>
      <div className="text-4xl flex-1 flex justify-center items-center gap-x-3">
        {/* {'❤️'.repeat(number)} */}
        <div className="flex flex-wrap">
        {Array.from(Array(number), (x, index) => {
          return <div key={index} className={`${type}`}></div>
        })}
        </div> 
      </div>
      <div className={`${textColor} text-3xl self-end`}>{letter || number}</div>
    </div>
  );
};

export default Card;
