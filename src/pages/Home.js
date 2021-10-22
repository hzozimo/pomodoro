import React from 'react'
import { Link } from 'react-router-dom' 
import './pages.css'

const Home = () => {

  return(
    <div className='home-container'>
      <h1>Desafio - Pomodoro</h1>
      <p>
          Bem vindos ao Teste Técnico de Henrique Zózimo para a VilaApps!
      </p>
      <br/>
      <p> 
        A <a href='https://brasilescola.uol.com.br/dicas-de-estudo/tecnica-pomodoro-que-e-e-como-funciona.htm' target='_blank' rel="noreferrer">Técnica Pomodoro</a> é um método de gerenciamento de tempo desenvolvido por
        Francesco Cirillo no final dos anos 1980. A técnica usa um cronômetro para dividir o
        trabalho em intervalos, tradicionalmente de 25 minutos de duração, separados por
        intervalos curtos - 5 minutos.
        Porém, buscando uma maior praticidade para esta página que é uma avaliação técnica, os temporizadores
        estarão em segundos e não em minutos. Ou seja, os 25 minutos de duração
        serão 25 segundos e os 5 minutos de intervalo serão 5 segundos.
      </p>
        <Link to="/chronometer">Ligar cronômetro</Link>
    </div>
  )
}

export default Home