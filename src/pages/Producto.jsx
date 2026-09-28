import { useParams, Link } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'

function Producto() {
  const { id } = useParams()

  const productos = [
    { id: 1, nombre: 'Teclado', precio: 19990 },
    { id: 2, nombre: 'Mouse', precio: 12990 },
    { id: 3, nombre: 'Audífonos', precio: 24990 },
    { id: 4, nombre: 'Monitor', precio: 89990 },
  ]

  const producto = productos.find(
    (item) => item.id === Number(id)
  )

  if (!producto) {
    return (
      <Container className="mt-4">
        <h2>Producto no encontrado</h2>

        <Button as={Link} to="/">
          Volver al catálogo
        </Button>
      </Container>
    )
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>

          <Card.Text>
            ID del producto: {producto.id}
          </Card.Text>

          <Card.Text>
            Precio: ${producto.precio}
          </Card.Text>

          <Button
            as={Link}
            to="/"
            className="me-2"
          >
            Volver al catálogo
          </Button>

          <Button
            as={Link}
            to="/registro?origen=producto"
            variant="success"
          >
            Ir a registro
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Producto
