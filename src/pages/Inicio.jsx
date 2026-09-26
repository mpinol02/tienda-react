import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

function Inicio() {
  const productos = [
    { id: 1, nombre: 'Teclado', precio: 19990 },
    { id: 2, nombre: 'Mouse', precio: 12990 },
    { id: 3, nombre: 'Audífonos', precio: 24990 },
    { id: 4, nombre: 'Monitor', precio: 89990 },
  ]

  return (
    <Container className="mt-4">
      <h1>Catálogo</h1>

      <Row className="g-3">
        {productos.map((producto) => (
          <Col
            key={producto.id}
            xs={12}
            md={6}
            lg={4}
          >
            <ProductCard
              nombre={producto.nombre}
              precio={producto.precio}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Inicio
