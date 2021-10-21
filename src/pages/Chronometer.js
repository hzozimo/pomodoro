import React, {useContext, useEffect} from 'react';
import Context from "../context/Context"
import { Link } from 'react-router-dom' 

const Chronometer = () => {
  const {
    time,
    setTime,
    paused,
    setPaused,
    interval,
     setInterval
   } = useContext(Context);

  


  useEffect(() => {
    const counter = setInterval(() => {
      if(paused || time > 0){
        setTime(prevCounter => prevCounter -1);
      }
    }, 1000);
 
    return () => clearInterval(counter);
  });
  
  const reset = () => {
      setTime(25);
    }

  const pause = () => {
    setPaused(!paused);
  }
    
    

  return (
    <div>
      <h1>Cronometro</h1>
      <div>
        {time === 0 
          ? <h1>FIM!</h1>
          : <h1>Tempo de Atividade: {time} seconds </h1>
        }
        </div>
        <button onClick={ reset }>Resetar</button>
        <button onClick={pause}>Pausar</button>
    </div>
  )
}

export default Chronometer;