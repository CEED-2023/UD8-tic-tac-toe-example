import DatosJugador from "./DatosJugador"

function Settings() {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <DatosJugador num={1}/>
      <DatosJugador num={2}/>
      <button>Cambiar</button>
    </div>
  )
}

export default Settings
