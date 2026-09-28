import { Card, Button } from 'react-bootstrap'

function ShoppingCart({ carrito, total, vaciarCarrito }) {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Carrito de compras</Card.Title>

        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {carrito.map((producto) => (
              <div key={producto.id} className="mb-3">
                <strong>{producto.nombre}</strong>

                <div>
                  Cantidad: {producto.cantidad}
                </div>

                <div>
                  Subtotal: ${producto.precio * producto.cantidad}
                </div>
              </div>
            ))}

            <hr />

            <h4>Total: ${total}</h4>

            <Button
              variant="danger"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default ShoppingCart
