
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
import PageNotFound from './components/mainpage/PageNotFound';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Showcart from './components/navbar/Showcart';
import Proddescription from './components/product/Proddescription';
import Mlresult from './components/mainpage/Mlresult';


function App() {
  return (
<>
      <Navbar/>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/human' element={<Human/>}/>
        <Route path='/veterinary' element={<Veterinary/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/searchresult' element={<Searchresult/>}/>
        <Route path='/proddescription' element={<Proddescription/>}/>
        <Route path='/showcart' element={<Showcart/>}/>
        <Route path='/mlresult' element={<Mlresult/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
</>
    
  );
}

export default App;
