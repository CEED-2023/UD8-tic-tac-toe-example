import DatosJugador from "./DatosJugador"

function Settings(props) {

  const { jugadores } = props

  return (
    <div className="settings">
      <h1>Settings</h1>
      <DatosJugador
        num={1}
        nombre={jugadores[0].nombre}
        simbolo={jugadores[0].simbolo}
      />
      <DatosJugador
        num={2}
        nombre={jugadores[1].nombre}
        simbolo={jugadores[1].simbolo}
      />
      <button>Cambiar</button>
    </div>
  )
}

export default Settings
