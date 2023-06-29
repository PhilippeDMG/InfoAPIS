import Navbar from "./components/Navbar"
import Personajes from "./components/Personajes"
import { Link, Routes, Route } from "react-router-dom"
import PersonajeId from "./components/PersonajesId/personajesid"
import Ubicaciones from "./components/Ubicaciones"
import UbicacionesId from "./components/UbicacionesId"
import Episodios from "./components/Episodios"
import EpisodiosId from "./components/EpisodiosId"

function App() {
  console.log(
    "Hecho por Philippe Maurel. Tercer trabajo del informatorio. Junio 2023"
  )

  return (
    <div className='my-app'>
      <Navbar />
      <Routes>
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/personajes/:id' element={<PersonajeId />} />
        <Route path='/ubicaciones' element={<Ubicaciones />} />
        <Route path='/ubicaciones/:id' element={<UbicacionesId />} />
        <Route path='/episodios' element={<Episodios />} />
        <Route path='/episodios/:id' element={<EpisodiosId />} />
        <Route path='*' element={<Personajes />} />
      </Routes>
    </div>
  )
}

export default App
