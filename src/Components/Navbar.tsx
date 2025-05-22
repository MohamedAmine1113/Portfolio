import 'boxicons/css/boxicons.min.css';
/* import logo from '../assets/Images/logo-bg-remover.png';  */
/* import React, { useState } from 'react'; */
import React from 'react';
import { gsap } from 'gsap/gsap-core';




const Navbar  = () => {
  /* const [isOpen, setIsOpen] = useState(false); */
      const handleEnter = () => {
        gsap.to('#cursor', { scale: 3,color: '#0D0D0D', duration: 0.3 })
      }
      const handleLeave = () => {
        gsap.to('#cursor', { scale: 1, duration: 0.3 })
      }
      
      const handleEnterLink = () => {
        gsap.to('#cursor', { scale: 1.5, duration: 0.3 })
      }
      const handleLeaveLink = () => {
        gsap.to('#cursor', { scale: 1, duration: 0.3 })
      }

      
    return (
     
      
      <nav className='w-[100%] h-[18vh]'>
        <div className='fixed top-[30px] left-[30px] z-100'>
          <h1 
              className='font-Quick before:content-["{"] after:content-["}"] text-[30px] cursor-pointer'
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
          >
            MBH.
          </h1>
          {/* <img src={logo} alt="Logo" className="h-[120px] w-auto flex justify-center items-center fixed" /> */}
        </div>

        <div className={`h-[45px] w-[500px] text-[14px] flex justify-center items-center font-medium rounded-[15px] rounded-r-none fixed top-[30px] -right-[160px] max-md:-right-[180px] z-100`} >
              <ul className='flex flex-col'>
                <li><a href='#About-section' className=' transition duration-700 ease-in-out hover:-translate-y-[-5vw]' onMouseEnter={handleEnterLink}
              onMouseLeave={handleLeaveLink} >About</a></li>
                <li><a href="#Work_section" className='transition duration-700 ease-in-out' onMouseEnter={handleEnterLink}
              onMouseLeave={handleLeaveLink}>Work</a></li>
                <li><a href="#Contact-section" className='transition duration-700 ease-in-out' onMouseEnter={handleEnterLink}
              onMouseLeave={handleLeaveLink}>Contact</a></li>
              </ul>
            </div>
        
        {/* <div className=' flex justify-center items-center fixed top-[30px] right-[30px] cursor-pointer z-1000'>
          <i className= {`bx  max-md:text-[35px] text-[45px]  ' ${isOpen ? 'bx-x bg-[#F5EAE4] text-[#0D0D0D] md:rounded-r-[15px] max-md:rounded-t-[15px] max-md:w-[50px] max-md:text-center' : 'bx-menu-alt-right text-[#F5EAE4]'}`} onClick={() => setIsOpen(!isOpen)}></i>
        </div>

        {isOpen && (
            <div className={`max-md:hidden h-[45px] w-[500px] text-[14px] bg-[#F5EAE4] text-[#0D0D0D] flex justify-center items-center pt-[15px] pb-[15px] pr-[50px] pl-[30px] font-medium rounded-[15px] rounded-r-none fixed top-[30px] right-[70px] z-100`} >
              <ul className='flex gap-[30px] '>
                <li><a href="#Home" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href='#About-section' className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >About Me</a></li>
                <li><a href="#Work_section" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >Work</a></li>
                <li><a href="#Contact-section" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} >Contact Me</a></li>
              </ul>
            </div>
        
        )}

      {isOpen && (
            <div className={`md:hidden h-[50px] w-[270px] text-[14px] bg-[#F5EAE4] text-[#0D0D0D] flex justify-center items-center font-medium rounded-[15px] rounded-l-none fixed top-[170px] -right-[80px] transform rotate-z-90 z-100`} >
              <ul className='flex gap-[15px] '>
                <li><a href="#Home" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)}><i className='bx bx-home transform -rotate-z-90'></i></a></li>
                <li><a href="#About-section" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} ><i className='bx bx-user transform -rotate-z-90'></i></a></li>
                <li><a href="#Work_section" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} ><i className='bx bx-folder-open transform -rotate-z-90'></i></a></li>
                <li><a href="#Contact-section" className='hover:bg-[#0D0D0D] hover:text-[#F5EAE4] p-[10px] rounded-[10px] transition duration-700 ease-in-out' onClick={() => setIsOpen(false)} ><i className='bx bx-phone transform -rotate-z-90'></i></a></li>
              </ul>
            </div>
        )} */}


      </nav>
  )
}

export default Navbar