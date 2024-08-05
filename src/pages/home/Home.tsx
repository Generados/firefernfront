import React from 'react';
import { Link } from 'react-router-dom';
import foguinho from '../../assets/foguinho.png';
import bola1 from '../../assets/bola1.png';
import bola2 from '../../assets/bola2.png';
import bola3 from '../../assets/bola3.png';
import bola4 from '../../assets/bola4.png';
import fogoalerta from '../../assets/fogoamarelo.png';
import fogoModerado from '../../assets/fogolaranja.png';

function Home() {
  return (
    <>
      <div className="relative min-h-[80vh] w-screen">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8156207.653273039!2d-62.215880000000006!3d-3.4653050000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2zQW1hesO0bmlh!5e0!3m2!1spt-BR!2sbr!4v1722785148432!5m2!1spt-BR!2sbr"
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full absolute top-0 left-0 border-0"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full p-2 flex flex-col  items-center gap-4">
         
        
         <input
            type="text"
            placeholder="Buscar região afetada..."
            className="p-4 border-2 rounded-full bg-black opacity-75 placeholder-white text-white"
          />
          
         
          <div className="flex flex-col gap-60 ml-40   ">
            <Link to='/cadastro' className='border rounded-xl bg-amber-600 w-full p-2 text-white text-center ml-8'> 
              <button type='submit'>Alertas</button>
            </Link> 
            <Link to='/denunciaCadastro' className='rounded-xl bg-amber-600 w-full p-2 my-6 text-white text-center ml-8'> 
              <button type='submit'>Denuncie</button>
            </Link> 
          </div>
        </div>

        <img src={foguinho} alt="" className='absolute top-32 left-10'/>

        <img src={foguinho} alt="" className='absolute top-72 left-10'/>

        <img src={foguinho} alt="" className='absolute top-96 left-40'/>
        <img src={foguinho} alt="" className='absolute top-72 right-10'/>
        <img src={fogoalerta} alt="" className='absolute top-72 right-28'/>

        <img src={fogoalerta} alt="" className='absolute top-32 right-10'/>

        <img src={fogoModerado} alt="" className='absolute top-52 left-10'/>

        

      </div>

      <div className='bg-black '>
        <div className='flex flex-col container mx-auto text-white text-center gap-4 '>
<p className='mt-4 mb-1'>Incêndios próximos à sua região</p>
<div className='grid grid-cols-2 text-white container gap-5 text-center px-4 mb-4 '>

  <p className='p-4 bg-[#D32F2F] rounded-xl w-full '>Apuí</p>
  <p className='p-4 bg-[#FF7D00] rounded-xl text-center '>Manicoré</p>
  <p className='p-4 bg-[#FCCA46] rounded-xl text-center  '>Colniza</p>
  <p className='p-4 bg-[#D32F2F] rounded-xl text-center  '>Lábrea</p>

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
