import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'

import Fundo from "./assets/fundo.jpg" 

import useCountdown from './hooks/useCountdown'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00")

  return (
    <>
      <div>
        <div className="App" style={{backgroundImage: `url(${Fundo})`}}>
          <div className="container">
            <Title title="Contagem regressiva"/>
            
            <div className="countdown-container">
              <Counter title="Dias" number={day}/>
              <Counter title="Horas" number={hour}/>
              <Counter title="Minutos" number={minute}/>
              <Counter title="Segundos" number={second}/>
            </div>
            
        
          </div>
        </div>
      </div>
    </>
  )
}

export default App
