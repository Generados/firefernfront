import React from 'react'
import icon from '../../assets/icon.png';
import bombeiros from '../../assets/image-bombeiros.png';
import { Link } from 'react-router-dom';


function Inicio() {
  return (
    <div className='flex flex-col gap-8 container mx-auto items-center justify-center'>
<h1 className='text-5xl  text-[#FF4001] font-normal text-center mt-8 '>Bem vindo</h1>
<div className='text-xl'>
<img src={icon} alt="" className='opacity-30 w-20 my-2' />
</div>


<div className='opacity-75 md:w-96'>
    <img src={bombeiros} alt=""  />
</div>




<Link to='/home' className='rounded-xl color-button text-center   bg-[#F6AA1C]  hover:bg-lime-700   w-1/2 py-2 mb-6 md:w-60 justify-center font-normal text-xl text-[#FFFFFF]'><button>Continuar</button></Link>


    </div>
  )
}


export default Inicio
