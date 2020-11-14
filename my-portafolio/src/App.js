
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './About/About'
import SobreMi from './SobreMi/SobreMi'
import Skills from './Skills/Skills'
import Contacto from './Contacto/Contacto'
import './App.css';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      
      </div>
     <Switch>
          <Route path="/">
            <About />
          </Route>
          <Route path="/Sobremi">
            <SobreMi/>
          </Route>
          <Route path="/Skills">
            <Skills/>
          </Route>
          <Route path="/Contacto">
            <Contacto/>
          </Route>

        </Switch>

        </Router>
    
    </>
  );
}

export default App;
