import 'boxicons/css/boxicons.min.css';
import logo from '../assets/Images/logo-bg-remover.png'; 
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    return (
      
      <nav className='flex'>
        <div>
          <img src={logo} alt="Logo" className="h-[150px] w-auto flex justify-center items-center fixed" />
        </div>
        
        <div className='w-[73px] h-[53px] bg-[#EC5938] rounded-[20px] flex justify-center items-center fixed top-[40px] right-[30px] cursor-pointer z-2'>
          <i className= {`bx  text-[54px] text-[#F5EAE4]' ${isOpen ? 'bx-x' : 'bx-menu-alt-right'}`} onClick={() => setIsOpen(!isOpen)}></i>
        </div>

        {isOpen && (
          <div className={`h-[53px] w-[700px] bg-[#F5EAE4] text-[#0D0D0D] flex justify-center items-center pt-[15px] pb-[15px] pr-[50px] pl-[30px] font-medium rounded-[20px] fixed top-[40px] right-[70px] transition-all duration-[15000ms] ease-in-out z-1 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} >
            <ul className='flex gap-[30px]'>
              <li><a href="App.tsx" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >Home</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >About Me</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >Skills</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >Projects</a></li>
              <li><a href="#" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >Contact Me</a></li>
            </ul>
          </div>
        )}

      </nav>
      
    
  )
}

export default Navbar