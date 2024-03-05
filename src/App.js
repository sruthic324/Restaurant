import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/l' element={<Login/>}/>
       <Route path='/s' element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
