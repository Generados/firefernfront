import React, { } from 'react'
import './Navbar.css'
import { IoMenu } from "react-icons/io5";

import icon  from  '../../assets/icon2.png'
import { IoMdContact } from "react-icons/io";



function Navbar() {


  return (
    <>
     <div className='w-full bg-[#0F0F20] text-white flex justify-center py-4 color-navbar'>
          <div className="container px-2 flex justify-between text-lg mx-auto">
            <div className=' font-bold flex gap-2 '>
           <IoMenu className='mx-auto my-auto text-5xl text-[#D9D9D9]'></IoMenu>
           <div><img src={icon} alt="" className=' mt-2'/></div>
            </div>
            
            
<div>
<IoMdContact className='text-white text-5xl'></IoMdContact>
</div>
           
          </div>
        </div>
    </>
  )
}

export default Navbar