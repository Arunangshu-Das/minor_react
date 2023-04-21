
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/navbar/Login';
import Signup from './components/navbar/Signup';
import Footer from './components/Footer';
import Home from './components/mainpage/Home';
import Human from './components/mainpage/Human';
import Veterinary from './components/mainpage/Veterinary';
import Search from './components/navbar/Search';
import Searchresult from './components/navbar/Searchresult';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
<>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/human' element={<Human/>}/>
        <Route path='/veterinary' element={<Veterinary/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/searchresult' element={<Searchresult/>}/>
      </Routes>
      <Footer/>
</>
    
  );
}

export default App;
