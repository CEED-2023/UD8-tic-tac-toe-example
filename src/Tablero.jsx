import { useState } from 'react'
import Celda from './Celda'

function Tablero(props) {

  const { jugadores } = props
  const [ turno, setTurno ] = useState(0)

  const datosCeldas = [
    [ 'X', 'O', '' ],
    [ 'X', 'X', 'O' ],
    [ '', '', '']
  ]

  const jugador = jugadores[turno]

  return (
    <div className="game">
      <h1>Turno de {`${jugador.nombre}`} ({`${jugador.simbolo}`})</h1>
      <div className="board">
        {
          datosCeldas.map((fila, i) => {
            return fila.map((celda, j) => {
              return <Celda key={`${i}-${j}`} valor={celda}/>
            })
          })
        }
      </div>
    </div>
  )
}

export default Tablero
