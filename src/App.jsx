import './App.css'
import { useState } from 'react'

import Settings from './Settings'
import Tablero from './Tablero'

const JUGADORES_INICIALES = [
  { nombre: 'Pepe', simbolo: 'X' },
  { nombre: 'Juan', simbolo: 'O' }
]

function App() {

  const [jugadores, setJugadores] = useState(JUGADORES_INICIALES)

  function cambioDeNombre(num, nuevoNombre) {
    const nuevosJugadores = [...jugadores]
    nuevosJugadores[num - 1].nombre = nuevoNombre
    setJugadores(nuevosJugadores)
  }

  function cambioDeSimbolo(num, nuevoSimbolo) {
    const nuevosJugadores = [...jugadores]
    nuevosJugadores[num - 1].simbolo = nuevoSimbolo
    setJugadores(nuevosJugadores)
  }

  return (
    <>
      <h1>Tic tac toe</h1>
      <Settings
        jugadores={jugadores}
        onCambioNombre={cambioDeNombre}
        onCambioSimbolo={cambioDeSimbolo}
      />
      <Tablero />
    </>
  )
}

export default App
