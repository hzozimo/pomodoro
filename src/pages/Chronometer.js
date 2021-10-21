import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom' 

const Chronometer = () => {
  const {time, setTime } = useState();

  
  const counter = setInterval(() => {
    if (time > 0) {
      setTime(time -1);
    }
    if (time === 0) {
      clearInterval(counter);
    }
  },1000)

  const turnOff = () => {
    setTime(25);
  }
  
  useEffect(counter)

  return (
    <div>
      <div>
        {time === 0 
          ? <h1>FIM!</h1>
          : <h1>Tempo Restante {time} seconds </h1>
        }
        </div>
        <Link to="/" onClick={ turnOff }>Desligar cronômetro</Link>
    </div>
  )
}

export default Chronometer;