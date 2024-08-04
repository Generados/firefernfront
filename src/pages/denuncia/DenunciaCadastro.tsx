import React, { ChangeEvent, useState } from 'react'
import Denuncia from '../../models/Denuncia'
import axios from 'axios'
import { cadastrar } from '../../service/Service'

function DenunciaCadastro() {

const [isVisible, setIsVisible] = useState<boolean>(true)

const handleCheckBoxChange = () => {
    setIsVisible(!isVisible);
}

const[data, setData] = useState<any>()

const[denuncia, setDenuncia] = useState<Denuncia>({} as Denuncia)

async function cadastrarDenuncia(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
   
    console.log(data)
    try{
       await cadastrar('/api/denuncias', data, import.meta.env.VITE_URL_TOKEN)
       alert('Denuncia enviada')
    }catch(error){
        alert("Erro ao enviar denuncia")
    }
}

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    
    setDenuncia({
        
        
        ...denuncia,
        [e.target.name]: e.target.value
        
    })
    setData({
        data: {
            email: denuncia.email,
            Local: denuncia.local,
            descricao: denuncia.descricao,
         
        }
    })
   
    console.log(JSON.stringify(denuncia))
}



  return (
    <>
    <div className='container flex flex-col items-center justify-center mx-auto'>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={cadastrarDenuncia}>
            <div className='flex flex-col gap-2'>
                {isVisible && (
                    <><label htmlFor="email">Email</label><input
                              type="text"
                              className='border-2 border-slate-700 rounded p-2'
                              name="email"
                              value={denuncia?.email}
                              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} /></>

                )}
                 <div className='flex gap-2'>
                    <label>Anônimo</label>
                    <input 
                    type="checkbox" onChange={handleCheckBoxChange} />

                 </div>
                 <label htmlFor="local">Local</label>
                <input 
                type="text" 
                 className='border-2 border-slate-700 rounded p-2' 
                 name="local"
                 value={denuncia.local}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                  <label htmlFor="descricao">Descrição</label>
                <input 
                type="text" 
                 className='border-2 border-slate-700 rounded p-2 ' 
                 name="descricao"
                 value={denuncia.descricao}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
            </div>
            <button type='submit' className='border rounded-xl'>Enviar</button>
           
            
        </form>
    </div>
    </>
  )
}

export default DenunciaCadastro