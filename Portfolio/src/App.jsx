import Home from './pages/Home'
import './css/App.css'

function App() {
 
  const Alumno = {
    nombre: "Nicolas Nahuel",
    apellido: "Alvarez",
    edad: 28,
    direccion:"Cristo rey 425",
    Tel:"3816396545",
    estadoCivil:"Soltero",
    hobby: "Futbol"
}

  return (
    <div className='bgapp'>

      <Home {...Alumno}/>

    </div>
  
  )
}

export default App
