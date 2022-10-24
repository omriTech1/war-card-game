import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
const HomePage = () => {
    const [context, setContext] = useContext(Context);
    const [input, setInput] = useState(context);
    const navigate = useNavigate()
    // console.log(context);
  const onSubmit = (e) => {
    e.preventDefault()
    setContext(input)
    navigate('/room/123')
  };

  return (
    <div className="h-screen bg-pink-200 flex justify-center items-center">
      <div className="bg-white h-[30%] w-[40%] rounded-xl flex justify-center items-center flex-col py-10">
        <h1 className="text-center pt-5 text-4xl italic font-semibold">
          משחק קלפים - מלחמה
        </h1>
        <form
          onSubmit={onSubmit}
          className="gap-y-4 w-full h-full flex justify-center items-center gap-x-3 flex-col"
        >
            <label className="italic text-2xl" htmlFor="name">:שם</label>
          <input
            value={input}
            id="name"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="rounded-lg w-[40%] outline-1 outline px-4 py-2"
            dir="rtl"
          />
        <button className="bg-gradient-to-tr from-green-600 to-orange-300 p-4 rounded-lg px-10 cursor-pointer">
          התחל
        </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
