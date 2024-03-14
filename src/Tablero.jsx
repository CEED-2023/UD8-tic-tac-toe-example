import { useState, useEffect } from 'react'
import Celda from './Celda'
import { whoWins } from './lib/tic_tac_toe'

const CELDAS_INICIALES = [
  [ '', '', '' ],
  [ '', '', '' ],
  [ '', '', '' ]
]

function Tablero(props) {

  const { jugadores } = props
  const [ simbolos, setSimbolos ] = useState([jugadores[0].simbolo, jugadores[1].simbolo])
  const [ turno, setTurno ] = useState(0)
  const [ celdas, setCeldas ] = useState(CELDAS_INICIALES)
  const [ ganador, setGanador ] = useState(null)

  useEffect(() => {
    console.log('Los jugadores han cambiado', jugadores)
    // Sustituir los simbolos por los nuevos
    const nuevasCeldas = celdas.map((fila, i) => {
      return fila.map((celda, j) => {
        return celda === simbolos[0] ? jugadores[0].simbolo : celda === simbolos[1] ? jugadores[1].simbolo : celda
      })
    })
    setCeldas(nuevasCeldas)
    // Guardar los simbolos actuales
    setSimbolos([jugadores[0].simbolo, jugadores[1].simbolo])
  },[jugadores])

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
