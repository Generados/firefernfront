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
import { ToastContainer } from 'react-toastify';
import Carregamento from './pages/carregamento/Carregamento';
import DenunciaCadastro from './pages/denuncia/DenunciaCadastro';
import Perfil from './pages/perfil/Perfil';
import Sobre from './pages/sobre/Sobre';
//import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[80vh]'>
<Routes>
<Route path="/carregamento" element={<Carregamento />} />
<Route path="/home" element={<Home />} />
<Route path="/denunciaCadastro" element={<DenunciaCadastro />} />
<Route path="/inicio" element={<Inicio />} />
<Route path="/" element={<Inicio />} />
<Route path="/sobre" element={<Sobre />} />
<Route path="/perfil" element={<Perfil />} />
<Route path="/cadastro" element={<Cadastro />} />
</Routes>
    </div>
<Footer/> 
</BrowserRouter>   
    </>
);
}
export default App;

