import './App.css'
import { useState } from 'react'

import Settings from './Settings'
import Tablero from './Tablero'

const JUGADORES_INICIALES = [
  { nombre: 'Ana', simbolo: 'X' },
  { nombre: 'Juan', simbolo: 'O' }
]

function App() {

  const [jugadores, setJugadores] = useState(JUGADORES_INICIALES)

  return (
    <>
      <h1>Tic tac toe</h1>
      <Settings
        iniciales={JUGADORES_INICIALES}
        jugadores={jugadores}
        onCambioJugadores={setJugadores}
      />
      <Tablero jugadores={jugadores}/>
    </>
  )
}

export default App
