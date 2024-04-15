
import {Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Member from './pages/membership';
import Prayer from './pages/prayer';
import Testimony from './pages/testimony';
import Live from  './pages/live';
import Contact from './pages/contact';
import './App.css';


function App() {
  return (
    <Routes className="App">
      <Route path="/" element={ <Home /> } />
      <Route path="/member" element={ <Member /> } />
      <Route path="/prayer" element={ <Prayer /> } />
      <Route path="/testimony" element={ <Testimony /> } />
      <Route path="/live" element={ <Live /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;
