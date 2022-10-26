import React, { useEffect, useState } from 'react'
import {PropTypes} from 'prop-types';

const GameOverModal = ({isWinner}) => {
    const [test, setTest] = useState(false)
    useEffect(() => {   
      setTest(true)
      return () => {
        setTest(false)
      }
    }, [])
    
  return (
    <div className='w-screen bg-black h-screen bg-opacity-40 z-10 absolute top-0 left-0 flex justify-center items-center'>
        <div className={`outline-dashed relative ${test ? 'bottom-36 blur-none opacity-100' : '-bottom-full blur-lg opacity-0'} transition-all duration-1000  w-[30%] bg-white h-[40%] rounded-xl flex flex-col justify-around items-center`}>
            <h2 className='text-center italic font-semibold text-4xl'>
                {isWinner ? '!ניצחת' : '!הפסדת'}
            </h2>
            <button className='hover:ring-4 active:scale-90 transition-all outline outline-1 bg-gradient-to-t from-gray-100 to-green-400 rounded-lg w-fit p-4'>שחק שוב?</button>
        </div>
    </div>
  )
}

GameOverModal.propTypes = {
    isWinner : PropTypes.boolean,
}

export default GameOverModal