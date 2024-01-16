import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navegador from './common/Navegador';
import Inicio from './components/Inicio';


function App() {
  return (
    <div>
      <Router>
        <Navegador></Navegador>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
