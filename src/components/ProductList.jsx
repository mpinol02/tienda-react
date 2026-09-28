import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

function ProductList({ productos, carrito, agregarAlCarrito }) {
  return (
    <Row className="g-3">
      {productos.map((producto) => {
        const productoEnCarrito = carrito.find(
          (item) => item.id === producto.id
        )

        const cantidadEnCarrito = productoEnCarrito
          ? productoEnCarrito.cantidad
          : 0

        return (
          <Col
            key={producto.id}
            xs={12}
            md={6}
            lg={4}
          >
            <ProductCard
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              cantidadEnCarrito={cantidadEnCarrito}
              agregarAlCarrito={agregarAlCarrito}
            />
          </Col>
        )
      })}
    </Row>
  )
}

export default ProductList
