import { useState } from 'react'
import { Form, Button, Alert, Container } from 'react-bootstrap'

function Registro() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function enviarFormulario(event) {
    event.preventDefault()

    if (nombre.trim() === '') {
      setError('Debes ingresar tu nombre')
      return
    }

    if (!email.includes('@')) {
      setError('Debes ingresar un correo válido')
      return
    }

    setError('')
    alert('Formulario enviado')
  }

  return (
    <Container className="mt-4">
      <h2>Registro</h2>

      <Form onSubmit={enviarFormulario}>

        <Form.Control
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          placeholder="Ingresa tu nombre"
          className="mb-3"
        />

        <Form.Control
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Ingresa tu correo"
        />

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <Button
          type="submit"
          className="mt-3"
        >
          Enviar
        </Button>
      </Form>
    </Container>
  )
}

export default Registro
