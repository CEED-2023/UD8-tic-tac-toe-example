function Celda(props) {
  const { valor } = props

  return (
    <div className="cell">
      {valor}
    </div>
  )
}

export default Celda
