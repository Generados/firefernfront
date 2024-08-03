import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


function Cadastro() {
  return (
    <>
      <div className="container mx-auto px-4 my-16">
      <FaArrowLeft className='text-2xl '></FaArrowLeft>
        <form className='flex flex-col items-center gap-10  w-full max-w-lg mx-auto'>
        
          <div className='flex gap-4 md:gap-10 flex-wrap justify-center items-center'>
         
            <h2 className="text-3xl md:text-5xl font-normal login-titulo">Cadastrar</h2>
            
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className='text-[#16171B] pb-4'>Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="endereco" className='text-[#16171B] pb-4'>Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Digite seu endereço"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="telefone" className='text-[#16171B] pb-4'>Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="Digite seu telefone"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className='text-[#16171B] pb-4'>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className='text-[#16171B] pb-4'>Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            />
          </div>

          <div className="flex  sm:flex-row justify-around w-full gap-4">
          
            <button className="rounded-xl bg-[#F6AA1C] hover:bg-[#538d22] w-80 sm:w-1/2 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]" type='submit'>
              Cadastrar
            </button>
          </div>

          <hr className="border-slate-800 w-80" />
          <p className='text-[#16171B] font-medium'>
              Já possui conta?{' '}
              <Link to="/login" className=" hover:text-[#023e8a]  underline">
                Login
              </Link>
            </p>

        </form>
      </div>
    </>
  );
}

export default Cadastro;
