import { Card, Button } from 'react-bootstrap'

function ProductCard({ nombre, precio }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>${precio}</Card.Text>
        <Button>Ver producto</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
