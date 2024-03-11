function DatosJugador(props) {

  const { num } = props
  const { nombre, simbolo } = props
  const { onCambioNombre, onCambioSimbolo } = props

  function cambioNombre(event) {
    onCambioNombre?.(num, event.target.value)
  }

  function cambioSimbolo(event) {
    onCambioSimbolo?.(num, event.target.value)
  }

  return (
    <div className="row">
      <div>
        <label htmlFor={`jugador${num}`}>Jugador {num}: </label>
        <input id={`jugador${num}`}
          type="text"
          value={nombre}
          onChange={cambioNombre}
        />
      </div>
      <div>
        <label htmlFor={`caracter${num}`}>Caracter {num}</label>
        <input id={`caracter${num}`}
          type="text"
          maxLength="1"
          size="1"
          value={simbolo}
          onChange={cambioSimbolo}
        />
      </div>
    </div>
  )

}

export default DatosJugador
