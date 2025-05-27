import React from 'react'
import Marquee from 'react-fast-marquee'
import { TypeAnimation } from 'react-type-animation';
import { useCursor } from './CursorMotion';

const Hero_section = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;
  
    

   

  return (
    <div>
      <div className='h-[65vh]  pt-[30px] font-Quick'>
        
      <Marquee direction="right" speed={80} className="-mt-[60px] max-md:-mt-[30px]"  >
        <span className="w-full h-[15vh] text-clamp2 max-md:pl-[100px] uppercase text-outline" onMouseEnter={() => scaleCursor(8)} onMouseLeave={() => resetCursor(1)} >
          Web Designer&nbsp;& Frontend Developer &&nbsp;
        </span>
      </Marquee>

        <div className='w-fit h-[40vh] md:pl-[40px] max-md:pl-[10px] max-md:text-[25px] pb-[10px] flex justify-end flex-col text-[30px] font-[200] '>
          <span 
              onMouseEnter={() => scaleCursor(2)} 
              onMouseLeave={() => resetCursor(1)}
          >
            Hi
            <span 
              className='text-[#EC5938]'
              
            >
              !
            </span>
          </span>

          <span 
             
              onMouseEnter={() => scaleCursor(2)} 
              onMouseLeave={() => resetCursor(1)}
          >  
            My Name is
          </span>

          <span 
              className=' uppercase text-[#EC5938] ' 
              onMouseEnter={() => {scaleCursor(2)}} 
              onMouseLeave={() => {resetCursor(1)}}
          >
            Mohamed amine bahmane
          </span>
          <span 
              
              onMouseEnter={() => scaleCursor(2)} 
              onMouseLeave={() => resetCursor(1)}
          >
            Crafting 
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  ' Clean ',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ' Functional ',
                  1000
                ]}
                cursor={false}
                repeat={Infinity}
              /> 
            Web Experiences
            </span>
        </div>
      </div>

       
       <div className='flex justify-center gap-[30px] text-[20px] cursor-pointer mt-[60px]'>
        <i className='bx bxl-github' ></i>
        <i className='bx bxl-linkedin' ></i>
        <i className='bx bx-envelope' ></i>
      </div>
    </div>
  )
}

export default Hero_section