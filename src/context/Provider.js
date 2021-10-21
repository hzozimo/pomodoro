import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [time, setTime] = useState(25);


  const state = {
    time,
    setTime
  };

  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
