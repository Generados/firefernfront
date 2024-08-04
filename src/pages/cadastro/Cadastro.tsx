import React, { ChangeEvent,  useEffect,  useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../service/Service';


function Cadastro() {

    const navigate = useNavigate()
 

    const [data, setData] = useState<any>()
   
    const [usuario, setUsuario] = useState<Usuario>({
      id: 0,

      email: '',
  
      telefone: '',

     
  
    })
   
    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
      id: 0,
  
      email: '',
  
      telefone: '',

     
    })

   
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  
      setUsuario({
  
        ...usuario,
  
        [e.target.name]: e.target.value

        

  
      })
    }

    console.log(data.data)

      useEffect(() =>{
        setData({
          data: {
              email: usuario.email,
              telefone: usuario.telefone

             
           
          }
          
      });

      },[usuario])

  
    
   
    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
  
      e.preventDefault() 
   
        try {
  
          await cadastrarUsuario(`/api/usuarios`, data, setUsuarioResposta)
  
          alert('Você definiu para receber alertas')
   
        } catch (error) {
  
          alert('Erro ao cadastrar')
  
        }

      
  
    }


  return (
    <>
      <div className="container mx-auto px-4 my-16">
      <FaArrowLeft className='text-2xl '></FaArrowLeft>
        <form onSubmit={cadastrarNovoUsuario} className='flex flex-col items-center gap-10  w-full max-w-lg mx-auto'>
        
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
              value={usuario.email}
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
         


          <div className="flex flex-col w-full">
            <label htmlFor="telefone" className='text-[#16171B] pb-4'>Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="Telefone"
              value={usuario.telefone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            />
          </div>


         
         

          <div className="flex  sm:flex-row justify-around w-full gap-4">
          
            <button className="rounded-xl bg-[#F6AA1C] hover:bg-[#538d22] w-80 sm:w-1/2 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]" type='submit'>
              Receber Alertas
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default Cadastro;
