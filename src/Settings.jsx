function Settings() {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="row">
        <div>
          <label htmlFor="jugador1">Jugador 1: </label>
          <input id="jugador1" type="text" value="Pepe" />
        </div>
        <div>
          <label htmlFor="caracter2">Caracter 1</label>
          <input id="caracter1" type="text" maxLength="1" size="1" value="X"/>
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="jugador2">Jugador 2: </label>
          <input id="jugador2" type="text" value="Juan"/>
        </div>
        <div>
          <label htmlFor="caracter1">Caracter 2: </label>
          <input id="caracter1" type="text" maxLength="1" size="1" value="O"/>
        </div>
      </div>
      <button>Cambiar</button>
    </div>
  )
}

export default Settings
