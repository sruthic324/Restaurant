import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/l' element={<Login/>}/>
       <Route path='/s' element={<Signup/>}/>
       <Route path='/d' element={<Dashboard/>}/>
       <Route path='/m' element={<Menu/>}/>
       <Route path='/o' element={<Order/>}/>
    </Routes>
    </div>
  );
}

export default App;
