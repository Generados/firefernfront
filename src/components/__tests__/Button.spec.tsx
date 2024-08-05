jest.mock('../../assets/foguinho.png', () => 'test-file-stub');
jest.mock('../../assets/bola1.png', () => 'test-file-stub');
jest.mock('../../assets/bola2.png', () => 'test-file-stub');
jest.mock('../../assets/bola3.png', () => 'test-file-stub');
jest.mock('../../assets/bola4.png', () => 'test-file-stub');
jest.mock('../../assets/fogoamarelo.png', () => 'test-file-stub');
jest.mock('../../assets/fogolaranja.png', () => 'test-file-stub');
jest.mock('../../assets/wave.svg', () => 'test-file-stub');


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Cadastro from '../../pages/cadastro/Cadastro';
import DenunciaCadastro from '../../pages/denuncia/DenunciaCadastro';

test('deve redirecionar para a página de cadastro ao clicar no botão alerta', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro/>} />
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText('Alertas'));

  expect(screen.getByText('Preencha os dados')).toBeInTheDocument();
});


test('deve direcionar para página de cadastrar denúncia ao clicar no botão de denúncia', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denunciaCadastro" element={<DenunciaCadastro/>} />
      </Routes>
    </MemoryRouter>

    )

    fireEvent.click(screen.getByText('Denuncie'));

    expect(screen.getByText('Denuncie um incêndio')).toBeInTheDocument();
})

