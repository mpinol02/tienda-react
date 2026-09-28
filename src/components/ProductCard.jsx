import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function ProductCard({ id, nombre, precio, agregarAlCarrito }) {
  const [favorito, setFavorito] = useState(false)

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>

        <Card.Text>
          ${precio}
        </Card.Text>

        <Button
          variant="warning"
          className="me-2 mb-2"
          onClick={() => setFavorito(!favorito)}
        >
          {favorito ? '★ Favorito' : '☆ Favorito'}
        </Button>

        <Button
          className="me-2 mb-2"
          onClick={() =>
            agregarAlCarrito({
              id,
              nombre,
              precio,
            })
          }
        >
          Agregar al carrito
        </Button>

        <Button
          as={Link}
          to={`/producto/${id}`}
          variant="secondary"
          className="mb-2"
        >
          Ver producto
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
