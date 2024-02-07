import './App.css'
import { useState } from 'react'

import Settings from './Settings'
import Tablero from './Tablero'

const JUGADORES_INICIALES = [
  { nombre: 'Pepe', simbolo: 'X' },
  { nombre: 'Juan', simbolo: 'O' }
]

function App() {

  const [jugadores, _setJugadores] = useState(JUGADORES_INICIALES)

  return (
    <>
      <h1>Tic tac toe</h1>
      <Settings jugadores={jugadores}/>
      <Tablero />
    </>
  )
}

export default App
