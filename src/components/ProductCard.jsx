import { Card, Button } from 'react-bootstrap'
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
          className="me-2"
          onClick={() => setFavorito(!favorito)}
        >
          {favorito ? '★ Favorito' : '☆ Favorito'}
        </Button>

        <Button
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
      </Card.Body>
    </Card>
  )
}

export default ProductCard
