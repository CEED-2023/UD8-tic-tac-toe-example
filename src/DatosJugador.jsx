function DatosJugador(props) {

  const { num } = props
  const { nombre, simbolo } = props

  return (
    <div className="row">
      <div>
        <label htmlFor="jugador1">Jugador {num}: </label>
        <input id={`jugador${num}`}
          type="text" value={nombre} />
      </div>
      <div>
        <label htmlFor="caracter2">Caracter {num}</label>
        <input id={`caracter${num}`}
          type="text"
          maxLength="1"
          size="1" value={simbolo}/>
      </div>
    </div>
  )

}

export default DatosJugador
