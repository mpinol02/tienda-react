import { useParams } from 'react-router-dom'

function Producto() {
  const { id } = useParams()

  return (
    <h2>
      Producto seleccionado: {id}
    </h2>
  )
}

export default Producto
