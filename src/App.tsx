import React from 'react';
import './App.css';
//import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '././pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Inicio from './pages/inicio/Inicio';
import Carregamento from './pages/carregamento/Carregamento';
import DenunciaCadastro from './pages/denuncia/DenunciaCadastro';
//import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[80vh]'>
<Routes>
<Route path="/denunciaCadastro" element={<DenunciaCadastro />} />
<Route path="/carregamento" element={<Carregamento />} />
<Route path="/inicio" element={<Inicio />} />
<Route path="/" element={<Inicio />} />
<Route path="/cadastro" element={<Cadastro />} />
</Routes>
    </div>
<Footer/> 
</BrowserRouter>   
    </>
);
}
export default App;

