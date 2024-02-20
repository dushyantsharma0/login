import logo from './logo.svg';

import './App.css';
import Registation from './registation';
import Login from './login';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Homepage';
import Main from './mainpage';

function App() {
 
  return (
    <div className="App">
      <Router>
     <Link to='/'>Home</Link><br/><br/>
     <Link to='/register'>Registation</Link><br/><br/>
     <Link to='/login'>Login</Link><br/><br/>
      <Routes>
      <Route path='/main' element={ <Main/>}/>
      <Route path='/register' element={ <Registation/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        
        
      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
