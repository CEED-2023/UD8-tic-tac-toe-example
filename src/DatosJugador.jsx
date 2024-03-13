import { useRef } from 'react'

function DatosJugador(props) {

  const { num } = props
  const { nombre, simbolo } = props
  const { onCambioNombre, onCambioSimbolo } = props

  const refNombre = useRef()

  function cambioNombre(event) {
    onCambioNombre?.(num, event.target.value)
  }

  function cambioSimbolo(event) {
    const nuevoSimbolo = event.target.value
    onCambioSimbolo?.(num, nuevoSimbolo)
    if(nuevoSimbolo.length === 1) refNombre.current.focus()
  }

  return (
    <div className="row">
      <div>
        <label htmlFor={`caracter${num}`}>Caracter {num}</label>
        <input
          type="text"
          maxLength="1"
          size="1"
          value={simbolo}
          onChange={cambioSimbolo}
        />
      </div>
      <div>
        <label htmlFor={`jugador${num}`}>Jugador {num}: </label>
        <input
          type="text"
          value={nombre}
          onChange={cambioNombre}
          ref={refNombre}
        />
      </div>
    </div>
  )

}

export default DatosJugador
