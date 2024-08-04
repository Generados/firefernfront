import React from 'react';
import iconfooter from '../../assets/icon.png';
import { TfiAndroid } from "react-icons/tfi";
import { FaAppStoreIos } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-[#0F0F20] text-white py-4">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-semibold'> FireFern | Copyright </p>
          <div className='flex gap-8 my-4 font-extralight container mx-auto items-center justify-center'>
           <Link to='/home' className='hover:underline'><p>Home</p></Link> 
           <Link to='/denunciaCadastro' className='hover:underline'><p>Denúncias</p></Link> 
           <Link to='/cadastro' className='hover:underline'><p>Alertas</p></Link> 
           <Link to='/sobre' className='hover:underline'><p>Sobre</p></Link> 
          </div>
          <p className='text-lg'>Baixe o nosso app</p>
          <div className='flex gap-4 items-center justify-center py-4'>
            <div className='flex flex-col items-center gap-1'>
            <TfiAndroid className='text-3xl' />
            <p>Android</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
            <FaAppStoreIos className='text-3xl' />
            <p>IOS</p>
            </div>
            
          </div>
          <div className='flex gap-2 '>
            <div>
              <img src={iconfooter} alt="" className='w-10'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
