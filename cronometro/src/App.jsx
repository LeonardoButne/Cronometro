import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'

import Fundo from "./assets/fundo.jpg" 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="App" style={{backgroundImage: `url(${Fundo})`}}>
          <div className="container">
            <Title title="Contagem regressiva"/>
            
            <Counter title="Dias" number={2}/>
            <Counter title="Horas" number={2}/>
            <Counter title="Minutos" number={2}/>
            <Counter title="Segundos" number={2}/>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default App
