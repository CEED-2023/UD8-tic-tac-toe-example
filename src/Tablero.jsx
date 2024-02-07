import Celda from './Celda'

function Tablero() {

  const datosCeldas = [
    [ 'X', 'O', '' ],
    [ 'X', 'X', 'O' ],
    [ '', '', '']
  ]

  return (
    <div className="game">
      <h1>Turno de Pepe (X)</h1>
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
