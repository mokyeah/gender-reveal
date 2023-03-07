import React, { useState, useEffect } from 'react'

function App() {

    const [isLucky, setIsLucky] = useState(false);
    const [numTries, setNumTries] = useState(0);
  
    const handleLuck = () => {
      const randomNum = Math.random();
      if (randomNum < 0.1) {
        setIsLucky(true);
      } else {
        setIsLucky(false);
      }
      setNumTries(numTries + 1);
    }

    useEffect(() => {
      const handleWindowClose = (event) => {
        event.preventDefault();
        event.returnValue = '';
  
        const confirmationMessage = 'Are you sure you want to leave this page?';
  
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
  
      window.addEventListener('beforeunload', handleWindowClose);
  
      return () => {
        window.removeEventListener('beforeunload', handleWindowClose);
      }
    }, []);
  return (
    <div className=''>
      <div className='justify-center items-center flex w-full h-screen text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
      <div className=' w-1/3 h-1/3 rounded-md bg-black border-2 border-sky-500'>
        <div className='justify-center font-bold flex text-2xl p-3  '>GENDER REVEAL</div>
        <div className='text-2xl justify-center flex p-5'>  <button onClick={handleLuck}>REVEAL YOUR FUCKING GENDER</button></div>
        {isLucky ? <div className='text-4xl justify-center items-center  flex p-10'>STRAIGHT</div> : <div className=' text-4xl justify-center items-center flex p-10'>GAY</div>}
        <div className='justify-center items-center flex '>Times you tried: {numTries}, such a loser </div>
        {numTries > 10 && <div className='justify-center items-center flex text-3xl font-bold font-mono p-5'>I lub Yi Hong</div>}

      </div>
      
      </div>
      
    </div>
  )
}

export default App