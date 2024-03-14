import { useState } from 'react'
import Celda from './Celda'
import { whoWins } from './lib/tic_tac_toe'

const CELDAS_INICIALES = [
  [ '', '', '' ],
  [ '', '', '' ],
  [ '', '', '' ]
]

function Tablero(props) {

  const { jugadores } = props
  const [ turno, setTurno ] = useState(0)
  const [ celdas, setCeldas ] = useState(CELDAS_INICIALES)
  const [ ganador, setGanador ] = useState(null)

  const jugador = jugadores[turno]

  function onCeldaClick(i, j) {
    if(ganador) return
    if (celdas[i][j] !== '') return

    const nuevasCeldas = [...celdas]
    nuevasCeldas[i][j] = jugador.simbolo

    const winner = whoWins(nuevasCeldas)
    if(winner) {
      setGanador(jugador)
    }

    setCeldas(nuevasCeldas)
    setTurno((turno + 1) % jugadores.length)
  }

  return (
    <div className="game">
      { !ganador && <h1>Turno de {`${jugador.nombre}`} ({`${jugador.simbolo}`})</h1> }
      { ganador && <h1>El ganador es {ganador.nombre}</h1> }
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
