import React, { useState } from 'react';
import './Navbar.css';
import { IoMenu, IoClose } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import icon from '../../assets/icon2.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className='w-full bg-[#0F0F20] text-white flex justify-center py-4 color-navbar'>
        <div className="container px-2 flex justify-between text-lg mx-auto">
          <div className='font-bold flex gap-2'>
            <IoMenu className='mx-auto my-auto text-5xl text-[#D9D9D9]' onClick={toggleMenu} />
            <div><img src={icon} alt="" className='mt-2' /></div>
          </div>
          <div>
            <Link to="/perfil"><IoMdContact className='text-white text-5xl' /> </Link>
          </div>
        </div>
      </div>

      {/* Menu lateral */}
      <div className={`fixed top-0 left-0 h-full w-52 bg-gray-800 opacity-90 text-white z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full '} transition-transform duration-300 ease-in-out`}>
        <div className='p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent text-xl font-medium'>FireFern</h2>
            <IoClose className='text-3xl cursor-pointer ' onClick={toggleMenu} />
    </div>
  
          
          <ul>
            <li className='mb-4'><Link to="/denunciaCadastro" onClick={toggleMenu}>Denúncia</Link></li>
            <li className='mb-4'><Link to="/sobre" onClick={toggleMenu}>Sobre</Link></li>
            <li className='mb-4'><Link to="/alertas" onClick={toggleMenu}>Alertas</Link></li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}>
        

        </div>
      )}
    

    </>
  );
}

export default Navbar;
