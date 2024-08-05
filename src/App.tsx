import React, { useEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Inicio from './pages/inicio/Inicio';
import { ToastContainer } from 'react-toastify';
import Carregamento from './pages/carregamento/Carregamento';
import DenunciaCadastro from './pages/denuncia/DenunciaCadastro';
import Perfil from './pages/perfil/Perfil';
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/carregamento" element={<CarregamentoWithRedirect />} />
            <Route path="/home" element={<Home />} />
            <Route path="/denunciaCadastro" element={<DenunciaCadastro />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/" element={<Navigate to="/carregamento" />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function CarregamentoWithRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/inicio'; // Redireciona para /home após 3 segundos
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); // Limpa o temporizador se o componente for desmontado
  }, []);

  return <Carregamento />;
}

export default App;