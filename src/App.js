import './App.css';
import Dashboard from './layouts/Dashboard.jsx';
import 'semantic-ui-css/semantic.min.css'; 
import { Container } from 'semantic-ui-react';
import Navi from "./layouts/Navi";

function App() {   // app isimli bir component arıyor arkadas
  return (
    // className='App' diyerek, app isimli bir css arıyor
    <div className="App"> 
    <Navi/>
    <Container className="main">
       
      <Dashboard/>
      </Container>

    </div>
  );
}

export default App;


// div kısmına jsx deniyor. x=> xml den geliyor.