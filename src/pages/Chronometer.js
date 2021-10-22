import React, {useContext, useEffect} from 'react';
import Context from "../context/Context"
import EndsActivity from '../components/EndsActivity.js'
import ActivityTime from '../components/ActivityTime.js'

const Chronometer = () => {
  const {
    time,
    setTime,
    paused,
    setPaused,
    intervalTime,
    setIntervalTime,
    secondInput,
    setSecondInput,
   } = useContext(Context);

  useEffect(() => {
    const counter = setInterval(() => {
      if(!paused && time > 0){
        setTime(prevTime => prevTime -1);
      }
      if(!paused && time === 0 && intervalTime > 0){
        setIntervalTime(prevIntervalTime => prevIntervalTime -1);
      }
    }, 1000);
    return () => {clearInterval(counter);};
  });
  
  const reset = () => {
      setTime(25);
      setPaused(false);
    }

  const pause = () => {
    setPaused(prevPaused => !prevPaused);
  }

  return (
    <div>
      <h1>Cronometro</h1>
      <div>
        {time === 0 
          ? <EndsActivity />
          : (
          <div>
            <h1>Tempo de atividade: {time} segundos </h1>
            <ActivityTime progress={ time } />
          </div>
          )
        }
        </div>
        <div>
          {time === 0 
          && (<h2>Tempo de intervalo: {intervalTime} segundos</h2>)}
        </div>
        <button onClick={ reset }>Resetar</button>
        <button onClick={pause}>Pausar</button>
        <label htmlFor='seconds'>
        <input type='number' name='seconds' placeholder="Segundos" onChange={ (e)=> setSecondInput(e.target.value) }/>
        </label>
        <button onClick={() => setTime(secondInput)}>Novo tempo de atividade</button>

    </div>
  )
}

export default Chronometer;
