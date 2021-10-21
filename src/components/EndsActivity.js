import React, {useEffect} from 'react';

const EndsActivity = () => {


 useEffect(() => {
  const audio = new Audio('https://www.soundjay.com/buttons/beep-01a.mp3');
  audio.play();
 },[])

  return(
    <h1>Fim da Atividade! Hora do Intervalo!</h1>
  )
}

export default EndsActivity;