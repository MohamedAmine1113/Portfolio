import 'boxicons/css/boxicons.min.css';
/* import logo from '../assets/Images/logo-bg-remover.png';  */
/* import React, { useState } from 'react'; */
import React  from 'react';
import { useCursor } from './CursorMotion';






const Navbar  = () => {
  
  /* const [isOpen, setIsOpen] = useState(false); */
      const cursor = useCursor();
      const scaleCursor = cursor!.scaleCursor;
      const resetCursor = cursor!.resetCursor;
    
     

  
      

      
    return (
     
      
      <nav className='w-[100%] h-[18vh]'>
        <div className='fixed top-[30px] left-[30px] z-100'>
          <a
              href="Home"
              className={`font-Quick before:content-["{"] after:content-["}"] text-[30px] cursor-pointer `}
              onMouseEnter={() => scaleCursor(4)} 
              onMouseLeave={() => resetCursor(1)}
          >
            MBH.
          </a>
        </div>

        <div className={`h-[45px] w-[500px] text-[14px] flex justify-center items-center font-medium rounded-[15px] rounded-r-none fixed top-[30px] -right-[160px] max-md:-right-[180px] z-100 text-[#F5EAE4]`} >
              <ul className='flex flex-col  hover:'>
                <li>
                  <a
                    className=''
                    href="#About-section"
                    onMouseEnter={() => {
                      scaleCursor(1.5);
                      
                    }}
                    onMouseLeave={() => {
                      resetCursor(1);

                    }}
                    
                  >
                    About 
                </a>

              </li>
                <li><a href="#Work_section" className='transition duration-700 ease-in-out' onMouseEnter={() => scaleCursor(1.5)} 
              onMouseLeave={() => resetCursor(1)}>Work</a></li>
                <li><a href="#Contact-section" className='transition duration-700 ease-in-out' onMouseEnter={() => scaleCursor(1.5)} 
              onMouseLeave={() => resetCursor(1)}>Contact</a></li>
              </ul>
            </div>
      </nav>
  )
}

export default Navbar