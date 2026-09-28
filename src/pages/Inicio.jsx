import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import ShoppingCart from '../components/ShoppingCart'

function Inicio() {
  const productos = [
    { id: 1, nombre: 'Teclado', precio: 19990 },
    { id: 2, nombre: 'Mouse', precio: 12990 },
    { id: 3, nombre: 'Audífonos', precio: 24990 },
    { id: 4, nombre: 'Monitor', precio: 89990 },
  ]

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = sessionStorage.getItem('carrito')

    if (carritoGuardado) {
      return JSON.parse(carritoGuardado)
    }

    return []
  })

  useEffect(() => {
    sessionStorage.setItem(
      'carrito',
      JSON.stringify(carrito)
    )
  }, [carrito])

  function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    )

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        )
      )
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1,
        },
      ])
    }
  }

  function vaciarCarrito() {
    setCarrito([])
  }

  const total = carrito.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  )

  return (
    <Container className="mt-4">
      <h1>Catálogo</h1>

      <ProductList
        productos={productos}
        carrito={carrito}
        agregarAlCarrito={agregarAlCarrito}
      />

      <ShoppingCart
        carrito={carrito}
        total={total}
        vaciarCarrito={vaciarCarrito}
      />
    </Container>
  )
}

export default Inicio
