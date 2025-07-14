import React from 'react'
import { useCursor } from './CursorMotion';
import {motion} from 'framer-motion';

const Contact_section = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;

  return (
    <div id='Contact-section' className='w-[90%] h-[100vh] max-lg:h-[60vh] mt-[90px] flex flex-col justify-center items-center m-auto max-md:mt-[200px] '>
        <div className='flex flex-row justify-center items-center max-md:flex-col max-md:gap-[20px] max-lg:flex-col'>

          <div className='w-[40%] max-md:w-full max-md:text-center max-md:border-b max-md:p-[30px] p-[10px] max-lg:w-full max-lg:text-center max-lg:border-b max-lg:p-[30px]'>

            <div className='font-Quick text-clamp-titles mb-[30px] text-[35px] max-md:text-center max-lg:text-center w-fit'>
              <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Let's get in <br className='max-md:hidden max-lg:hidden' /> touch</h1>
            </div>

            <div className='flex flex-row ' >
              <div className='mr-[20px] text-center'>
                <FlipLink href="https://instagram.com" > Instagram </FlipLink>
                <FlipLink href="https://instagram.com" >Instagram</FlipLink>
              </div>
              <div>
                <FlipLink href="https://instagram.com" >Instagram</FlipLink>
                <FlipLink href="https://instagram.com" >Instagram</FlipLink>
              </div>
               
               
               
                
            </div>

        </div>


          <form action="" className='flex flex-col gap-[25px] items-start w-[60%] text-[35px] font-[600] max-md:items-center max-md:w-full max-md:text-[30px] max-md:leading-14 max-lg:items-center max-lg:w-full max-lg:text-[30px] max-lg:leading-14 max-lg:mt-[20px]'>
              <span onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>My name is <input type="text" placeholder='YOUR FULL NAME' className=' max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> and I <input type="text" placeholder='WEBSITE, FULL-TIME JOB, ETC' className='w-[75%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> have a that needs help.<br /> Let’s work together – reach out at <input type="text" placeholder='YOUR EMAIL ADRESS' className='w-[70%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> to get started!</span>
              <button className='text-[16px] font-medium float-left cursor-pointer flex flex-row justify-center items-center' onMouseEnter={() => scaleCursor(2)} onMouseLeave={() => resetCursor(1)}><i className='bx bx-arrow-back mr-[10px]'></i>SEND INFO</button>
          </form>
          
        </div>
    </div>
  )
}

export default Contact_section


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
      
      className={` text-[25px] font-normal relative block overflow-hidden whitespace-nowrap  mb-[10px] transition duration-700 ease-in-out  ${className ? ` ${className}` : ''}`}
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