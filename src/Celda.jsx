function Celda(props) {
  const { onClick } = props
  const { valor } = props

  return (
    <div onClick={onClick} className="cell">
      {valor}
    </div>
  )
}

export default Celda
