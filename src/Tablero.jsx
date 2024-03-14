import { useState } from 'react'
import Celda from './Celda'

const CELDAS_INICIALES = [
  [ '', '', '' ],
  [ '', '', '' ],
  [ '', '', '' ]
]

function Tablero(props) {

  const { jugadores } = props
  const [ turno, setTurno ] = useState(0)
  const [ celdas, setCeldas ] = useState(CELDAS_INICIALES)

  const jugador = jugadores[turno]

  function onCeldaClick(i, j) {
    console.log('Celda clickeada:', i, j)
  }

  return (
    <div className="game">
      <h1>Turno de {`${jugador.nombre}`} ({`${jugador.simbolo}`})</h1>
      <div className="board">
        {
          celdas.map((fila, i) => {
            return fila.map((celda, j) => {
              return <Celda
                        key={`${i}-${j}`}
                        onClick={() => onCeldaClick(i,j)}
                        valor={celda}
                      />
            })
          })
        }
      </div>
    </div>
  )
}

export default Tablero
