import React from 'react'
import Marquee from 'react-fast-marquee'
import { TypeAnimation } from 'react-type-animation';
import { useCursor } from './CursorMotion';
import GsapMagic from './GsapMagicIcons';


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

        <div className=' h-[40vh] md:pl-[40px] max-md:pl-[10px] max-md:text-[25px] pb-[10px] flex justify-end flex-col text-[30px] font-[200] '>
          <span 
            className='w-fit'
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
            className='w-fit'
            onMouseEnter={() => scaleCursor(2)} 
            onMouseLeave={() => resetCursor(1)}
          >  
            My Name is
          </span>

          <span 
              className=' uppercase text-[#EC5938] w-fit hover:text-[#0D0D0D] hover:bg-[#EC5938] transition duration-1000 ease-in-out p-[5px] rounded-[4px] cursor-default'
              onMouseEnter={() => {scaleCursor(0)}} 
              onMouseLeave={() => {resetCursor(1)}}
          >
            Mohamed amine bahmane
          </span>
          <span 
              className='w-fit'
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
    
       
       <div className='flex justify-center gap-[30px] text-[20px] cursor-pointer mt-[60px] w-fit m-auto' >
        <GsapMagic >
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F5EAE4" viewBox="0 0 24 24" onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
              <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd"></path>
            </svg>
        </GsapMagic>
        <GsapMagic>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F5EAE4" viewBox="0 0 24 24" onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
              <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
            </svg>
        </GsapMagic>
        <GsapMagic>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F5EAE4" viewBox="0 0 24 24" onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
              <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.47 0 2.96-.37 4.44-1.1l-.89-1.79c-1.2.59-2.4.9-3.56.9-4.41 0-8-3.59-8-8S7.59 4 12 4s8 3.59 8 8v1c0 .69-.31 2-1.5 2-1.4 0-1.49-1.82-1.5-2V8h-2v.03C14.16 7.4 13.13 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.45 0 2.75-.63 3.66-1.62.52.89 1.41 1.62 2.84 1.62 2.27 0 3.5-2.06 3.5-4v-1c0-5.51-4.49-10-10-10m0 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"></path>
            </svg>
        </GsapMagic>
          
        
        
      </div>
    </div>
  )
}

export default Hero_section