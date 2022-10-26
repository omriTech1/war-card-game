import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const GameOverModal = ({ isWinner }) => {
  const [test, setTest] = useState(false);
  useEffect(() => {
    setTest(true);
    return () => {
      setTest(false);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40">
      <div
        className={`relative outline-dashed ${
          test
            ? "bottom-36 opacity-100 blur-none"
            : "-bottom-full opacity-0 blur-lg"
        } flex h-[40%]  w-[30%] flex-col items-center justify-around rounded-xl bg-white transition-all duration-1000`}
      >
        <h2 className="text-center text-4xl font-semibold italic">
          {isWinner ? "!ניצחת" : "!הפסדת"}
        </h2>
        <button className="w-fit rounded-lg bg-gradient-to-t from-gray-100 to-green-400 p-4 outline outline-1 transition-all hover:ring-4 active:scale-90">
          שחק שוב?
        </button>
      </div>
    </div>
  );
};

GameOverModal.propTypes = {
  isWinner: PropTypes.boolean,
};

export default GameOverModal;
