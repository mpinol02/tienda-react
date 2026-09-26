import { useState } from 'react'
import { Button } from 'react-bootstrap'

function Contador() {
  const [valor, setValor] = useState(0)

  return (
    <div>
      <p>Valor: {valor}</p>

      <Button onClick={() => setValor(valor + 1)}>
        Incrementar
      </Button>
    </div>
  )
}

export default Contador
