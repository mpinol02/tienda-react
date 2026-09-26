import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Producto from './pages/Producto'
import Registro from './pages/Registro'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/producto/:id" element={<Producto />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  )
}

export default App
