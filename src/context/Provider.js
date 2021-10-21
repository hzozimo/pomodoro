import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [time, setTime] = useState(25);
  const [paused, setPaused] = useState(false);
  const [interval, setInterval] = useState(5);


  const state = {
    time,
    setTime,
    paused,
    setPaused,
    interval, 
    setInterval
  };

  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
