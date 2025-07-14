import 'boxicons/css/boxicons.min.css';
/* import logo from '../assets/Images/logo-bg-remover.png';  */
/* import React, { useState } from 'react'; */
import React  from 'react';
import { useCursor } from './CursorMotion';
import {motion} from 'framer-motion';





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

        <div className={`h-[45px] w-[500px] text-[14px] flex justify-center items-center font-medium rounded-[15px] rounded-r-none fixed top-[30px] -right-[160px] max-md:-right-[180px] z-100 text-[#F5EAE4] uppercase`} >
              <ul className='flex flex-col  hover:'>
                <li>
                  <FlipLink
                    className='hover:text-[black] active:text-[black]'
                    href="#About-section"
                  >
                    About 
                  </FlipLink>
                </li >
              
                <li>
                  <FlipLink 
                    href="#Work_section" 
                  >
                    Work
                  </FlipLink>
                </li>

                <li>
                  <FlipLink 
                    href="#Contact-section" 
                  >
                    Contact
                  </FlipLink>
                </li>

              </ul>
            </div>
      </nav>
  )
}

export default Navbar


const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
}
const FlipLink = ({ children, href, className }: FlipLinkProps) => {
  const cursor = useCursor();
      const scaleCursor = cursor!.scaleCursor;
      const resetCursor = cursor!.resetCursor;
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      onMouseEnter={() => scaleCursor(1.5)} 
      onMouseLeave={() => resetCursor(1)}
      className={`font-normal relative block overflow-hidden whitespace-nowrap uppercase m-[5px] transition duration-700 ease-in-out${className ? ` ${className}` : ''}`}
      style={{
        lineHeight: 0.75,
      }}
    

    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};


