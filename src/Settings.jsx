import DatosJugador from "./DatosJugador"

function Settings(props) {

  const { jugadores } = props
  const { onCambioNombre, onCambioSimbolo } = props

  return (
    <div className="settings">
      <h1>Settings</h1>
      <DatosJugador
        num={1}
        nombre={jugadores[0].nombre}
        simbolo={jugadores[0].simbolo}
        onCambioNombre={onCambioNombre}
        onCambioSimbolo={onCambioSimbolo}
      />
      <DatosJugador
        num={2}
        nombre={jugadores[1].nombre}
        simbolo={jugadores[1].simbolo}
        onCambioNombre={onCambioNombre}
        onCambioSimbolo={onCambioSimbolo}
      />
      <button>Cambiar</button>
    </div>
  )
}

export default Settings
