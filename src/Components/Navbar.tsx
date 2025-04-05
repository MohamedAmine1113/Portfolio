import 'boxicons/css/boxicons.min.css';
import logo from '../assets/logo-bg-remover.png'; 
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    return (
      
      <nav className='flex'>
        <div>
          <img src={logo} alt="Logo" className="h-[150px] w-auto flex justify-center items-center fixed cursor-pointer" />
        </div>
        
        <div className='w-[73px] h-[53px] bg-[#EC5938] rounded-[20px] flex justify-center items-center fixed top-[40px] right-[30px] cursor-pointer'>
          <i className= {`bx  text-[54px] text-[#F5EAE4]' ${isOpen ? 'bx-x' : 'bx-menu-alt-right'}`} onClick={() => setIsOpen(!isOpen)}></i>
        </div>

        {isOpen && (
          <div className={`h-[53px] w-[600px] bg-[#F5EAE4] text-[#0D0D0D] flex justify-center items-center pt-[15px] pb-[15px] pr-[50px] pl-[30px] font-medium rounded-[20px] fixed top-[40px] right-[80px] transition-all duration-1000 ease-in-out -z-1 translate-x-4 `} >
            <ul className='flex gap-[30px]'>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' >Home</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' >About Me</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' >Skills</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' >Projects</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' >Contact Me</a></li>
            </ul>
          </div>
        )}
        

        
      </nav>
      
    
  )
}

export default Navbar