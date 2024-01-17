import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navegador from './common/Navegador';
import Inicio from './components/Inicio';
import NoticiaConsulta from './components/noticias/NoticiaConsulta';
import NoticiaABM from './components/noticias/NoticiaABM';
import CategoriaConsulta from './components/categorias/CategoriaConsulta';
import CategoriaUsuario from './components/categorias/CategoriaUsuario';
import CategoriaABM from './components/categorias/CategoriaABM';
import PiePagina from './common/PiePagina';
import Suscripcion from './components/suscripcion/Suscripcion';
import Login from './components/login/Login';
import Registrar from './components/login/Registrar';
import Contacto from './components/Contacto';
import AcercaDeNosotros from './components/AcercaDeNosotros';


function App() {
  return (
    <div>
      <Router>
        <Navegador></Navegador>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/noticias' element={<NoticiaConsulta></NoticiaConsulta>}></Route>
          <Route exact path='/noticiaAdmin' element={<NoticiaABM></NoticiaABM>}></Route>

          <Route exact path='/categorias' element={<CategoriaConsulta></CategoriaConsulta>}></Route>
          <Route exact path='/seccion/:id' element={<CategoriaUsuario></CategoriaUsuario>}></Route>
          <Route exact path='/categoriaAdmin' element={<CategoriaABM></CategoriaABM>}></Route>

          <Route exact path='/suscripcion' element={<Suscripcion></Suscripcion>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
          <Route exact path='/registrar' element={<Registrar></Registrar>}></Route>

          <Route exact path='/nosotros' element={<AcercaDeNosotros></AcercaDeNosotros>}></Route>
          <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>

        </Routes>
        <PiePagina></PiePagina>
      </Router>
    </div>
  );
}

export default App;
