import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import EndsActivity from '../components/EndsActivity.js';
import ActivityTime from '../components/ActivityTime.js';
import './pages.css';
import pomodoro from '../assets/pomodoro.png';

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
      if(!paused && time === 0 && intervalTime === 0){
        setTime(secondInput);
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
    <div className='pomodoro-container'>
      <h1>Cronometro - Técnica Pomodoro</h1>
      <div className='img-container'>
        <img className='pomodoro-img' src= {pomodoro} alt='pomodoro'/>
      </div>
      <div>
        {time === 0 
          ? <EndsActivity />
          : (
          <div className='activity-container'>
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
        <div className='input-container'>
          <button onClick={ reset }>Resetar</button>
          <button onClick={pause}>Pausar</button>
          <label htmlFor='seconds'>
          <input type='number' name='seconds' placeholder="Segundos" onChange={ (e)=> setSecondInput(e.target.value) }/>
          </label>
          <button onClick={() => setTime(secondInput)}>Novo tempo de atividade</button>
        </div>
    </div>
  )
}

export default Chronometer;
