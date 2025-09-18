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
        <div className='fixed top-[30px] left-[20px]'>
          <a
              href="Home"
              className={`font-Quick before:content-["{"] after:content-["}"] text-[30px] cursor-pointer `}
              onMouseEnter={() => scaleCursor(4)} 
              onMouseLeave={() => resetCursor(1)}
          >
            MBH.
          </a>
        </div>

        <div className={`h-[45px] w-fit text-[13px] flex justify-center items-center font-medium rounded-[15px] rounded-r-none fixed top-[30px] right-[40px] max-md:right-[20px] z-100 text-[#F5EAE4]  uppercase text-right`} onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} >
              <ul className='flex flex-col'>
                <li>
                  <FlipLink
                    className='opacity-[100%]'
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
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      
      className={`font-normal relative block overflow-hidden whitespace-nowrap uppercase m-[5px] transition duration-700 ease-in-out  ${className ? ` ${className}` : ''}`}
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
            className="inline-block opacity-[60%]"
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
            className="inline-block opacity-[100%] front-bold"
            
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};


