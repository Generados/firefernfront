import React from 'react';
import { Link } from 'react-router-dom';
import foguinho from '../../assets/foguinho.png';
import bola1 from '../../assets/bola1.png';
import bola2 from '../../assets/bola2.png';
import bola3 from '../../assets/bola3.png';
import bola4 from '../../assets/bola4.png';
import fogoalerta from '../../assets/fogoamarelo.png';
import fogoModerado from '../../assets/fogolaranja.png';

import './Home.css'


function Home() {
  return (
    <>
      <div className="relative min-h-[80vh] md:min-h-[80vh] w-screen md:max-w-[80vw] md:mx-auto md:my-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8156207.653273039!2d-62.215880000000006!3d-3.4653050000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2zQW1hesO0bmlh!5e0!3m2!1spt-BR!2sbr!4v1722785148432!5m2!1spt-BR!2sbr"
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full absolute top-0 left-0 border-0 md:rounded-3xl"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full p-2 flex flex-col  items-center gap-4 ">
         
        
         <input
            type="text"
            placeholder="Buscar região..."
            className="p-4 border-2 rounded-full bg-black opacity-75 placeholder-white   text-white w-3/4 md:w-2/3"
          />
          
           
         
        </div>

      

      

        

      </div>

      <div className="flex  gap-4 container mx-auto justify-center p-2 md:justify-center my-10">
            <Link to='/cadastro' className='border shadow-black shadow-2xl  rounded-xl bg-amber-600 hover:bg-lime-700   w-40 md:w-32  p-2 px-4 text-white text-center  '> 
              <button type='submit'>Alertas</button>
            </Link> 
            <Link to='/denunciaCadastro' className='rounded-xl shadow-black shadow-2xl  bg-amber-600  hover:bg-lime-700  w-40 md:w-32 p-2  text-white text-center '> 
              <button type='submit'>Denuncie</button>
            </Link> 
          </div>
      <div className='bg-white shadow-black shadow-2xl  md:my-8 md:container md:mx-auto  md:rounded-3xl md:w-[80vw]'>
    
    
        <div className='flex flex-col container mx-auto  text-center gap-4 '>
<p className='mt-4 mb-1 font-medium'>Incêndios próximos à sua região</p>
<div className='grid grid-cols-2 container gap-5 text-center px-4 mb-4 md:grid md:grid-cols-4  md:w-1/2 md:mx-auto'>

  <p className='p-4 bg-[#D32F2F] rounded-xl  shadow-black shadow-2xl text-center '>Apuí</p>
  <p className='p-4 bg-[#FF7D00] rounded-xl  shadow-black shadow-2xl text-center '>Manicoré</p>
  <p className='p-4 bg-[#FCCA46] rounded-xl   shadow-black shadow-2xl text-center  '>Colniza</p>
  <p className='p-4 bg-[#D32F2F] rounded-xl   shadow-black shadow-2xl text-center  '>Lábrea</p>

</div>

<div className='container mx-auto p-4 flex gap-4 items-center justify-center'>
  <div className='flex gap-1'>
  <img src={bola1} alt="" className='w-6 h-4' />
  <p className='text-sm'>Grave</p>
</div>

<div className='flex gap-1'>
  <img src={bola2} alt="" className='w-6 h-4' />
  <p className='text-sm'>Moderado</p>
</div>


<div className='flex gap-1 '>
  <img src={bola3} alt="" className='w-6 h-4' />
  <p className='text-sm'>Alerta</p>
</div>

<div className='flex gap-1'>
  <img src={bola4} alt="" className='w-6 h-4' />
  <p className='text-sm'>Controlado</p>
</div>


</div>
        </div>
       
      </div>
    </>
  );
}

export default Home;
