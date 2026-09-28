import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Inicio from './pages/Inicio'
import Producto from './pages/Producto'
import Registro from './pages/Registro'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Mi Tienda
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="menu-principal" />

          <Navbar.Collapse id="menu-principal">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>

              <Nav.Link as={Link} to="/registro">
                Registro
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  )
}

export default App
