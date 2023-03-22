
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/navbar/Login';
import Signup from './components/navbar/Signup';
import Footer from './components/Footer';
import Home from './components/mainpage/Home';
import Human from './components/mainpage/Human';
import Veterinary from './components/mainpage/Veterinary';
import Search from './components/navbar/Search';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/human' element={<Human/>}/>
        <Route path='/veterinary' element={<Veterinary/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
