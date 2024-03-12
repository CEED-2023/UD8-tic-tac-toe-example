import { useState, useEffect } from 'react'
import DatosJugador from "./DatosJugador"


function Settings(props) {

  const { iniciales } = props
  const { onCambioJugadores } = props

  const [jugadores, setJugadores] = useState([
    {nombre: '', simbolo: ''},
    {nombre: '', simbolo: ''}
  ])

  useEffect(
    () => {
      setJugadores(iniciales)
    }
  ,[iniciales, setJugadores])


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
    <div className="settings">
      <h1>Settings</h1>
      <DatosJugador
        num={1}
        nombre={jugadores[0]?.nombre}
        simbolo={jugadores[0]?.simbolo}
        onCambioNombre={cambioDeNombre}
        onCambioSimbolo={cambioDeSimbolo}
      />
      <DatosJugador
        num={2}
        nombre={jugadores[1]?.nombre}
        simbolo={jugadores[1]?.simbolo}
        onCambioNombre={cambioDeNombre}
        onCambioSimbolo={cambioDeSimbolo}
      />
      <button
        onClick={() => onCambioJugadores(jugadores)}
      >
        Cambiar
      </button>
    </div>
  )
}

export default Settings
