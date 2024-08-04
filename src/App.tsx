import React from 'react';
import './App.css';
//import Home from './pages/home/Home';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '././pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Inicio from './pages/inicio/Inicio';
import DenunciaCadastro from './pages/denuncia/DenunciaCadastro';
import Login from './pages/login/Login';
import { ToastContainer } from 'react-toastify';
//import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[80vh]'>
        <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path='/denunciaCadastro' element={<DenunciaCadastro/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
<Footer/> 
</BrowserRouter>   
    </>
);
}
export default App;

