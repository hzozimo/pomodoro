import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [time, setTime] = useState(4);
  const [paused, setPaused] = useState(false);
  const [intervalTime, setIntervalTime] = useState(5);
  const [secondInput, setSecondInput] = useState(25);


  const state = {
    time,
    setTime,
    paused,
    setPaused,
    intervalTime, 
    setIntervalTime,
    secondInput,
    setSecondInput,
  };

  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
