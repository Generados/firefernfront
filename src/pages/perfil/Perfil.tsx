import React, { useContext } from 'react'
import Image from '../../assets/perfil.jpg'
import Email from '../../assets/email.png'
import Telefone from '../../assets/telefone.png'
import Endereco from '../../assets/endereco.png'
import Denuncias from '../../assets/megafone.png'
import Foguinho from '../../assets/icon.png'

function Perfil() {
  return ( 
    <div className='flex items-center justify-center py-16 flex-col'>
      <div className='flex flex-col items-center pb-6'>
        <img src={Image} alt="" className='w-32 h-32'/>
        <p className='text-2xl font-semibold'>Perfil</p>
      </div>

        <div className='flex bg-gray-200 p-3 rounded shadow-md gap-4 items-center flex-col'>
          <div className='flex items-center gap-4'>
            <img src={Email} alt="" className='w-10 h-10'/>
            <p className='text-2xl font-semibold'>example@email.com</p>
          </div>

          <hr className="border-slate-800 w-80" />

          <div className='flex items-center gap-4'>
          <img src={Endereco} alt="" className='w-10 h-10'/>
          <p className='text-2xl font-semibold'>Rua José Number, 1</p>
        </div>

        <hr className="border-slate-800 w-80" />

        <div className='flex items-center gap-4'>
          <img src={Denuncias} alt="" className='w-10 h-10'/>
          <p className='text-2xl font-semibold'>3</p>
        </div>

        <hr className="border-slate-800 w-80" />

        <div className='flex items-center gap-4'>
          <img src={Telefone} alt="" className='w-10 h-10'/>
          <p className='text-2xl font-semibold'> +55 (11) 4002-8922</p>
        </div>

        <hr className="border-slate-800 w-80" />

        <div className='flex bg-gray-50 items-center gap-2 justify-center shadow-md flex-col rounded'>
          <button type='submit' className='p-3'>Editar</button>
        </div>
      </div>

    </div>
  )
}

export default Perfil