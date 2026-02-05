
import Marquee from 'react-fast-marquee'
import { useCursor } from './CursorMotion';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Skills_section = () => {

  const cursor = useCursor();
  const scaleCursor = cursor!.scaleCursor;
  const resetCursor = cursor!.resetCursor;

  useGSAP(() => {
  
    gsap.from('.skills', {
      opacity: 0,
      duration: 1,
      scale: 1.05,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: '#skills-section',
        start: 'top 80%',
     
      },
    })
  });

  
  return (
    <div className='skills max-w-[80%] h-[50vh] max-md:max-w-[100%] max-md:h-[30vh] max-md:w-full max-lg:max-w-[100%] max-lg:h-[30vh] flex justify-center items-center flex-col m-auto' id='skills-section'>
        <h1 className='font-Quick text-clamp-titles mb-[20px]' onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>Skills</h1>
          <Marquee speed={100} pauseOnHover className='cursor-pointer' >
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#197799] hover:drop-shadow-[0_0_26px_#197799] transition-all duration-200 ' 
            ><i className='bx bxl-react'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#05b7ff] hover:drop-shadow-[0_0_26px_#05b7ff] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-tailwind-css' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#ef6628] hover:drop-shadow-[0_0_26px_#ef6628] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-html5' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#5382A1]  hover:drop-shadow-[0_0_26px_#5382A1] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-java' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#016bc1] hover:drop-shadow-[0_0_26px_#016bc1] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-css3' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#ffdf00] hover:drop-shadow-[0_0_26px_#ffdf00] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-javascript' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#62b04a] hover:drop-shadow-[0_0_26px_#62b04a] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}  ><i className='bx bxl-nodejs'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#3776AB] hover:drop-shadow-[0_0_26px_#3776AB] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-python' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:drop-shadow-[0_0_26px_#F5EAE4] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-github' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#fb4a27] hover:drop-shadow-[0_0_26px_#fb4a27] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-git'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#00779e] hover:drop-shadow-[0_0_26px_#00779e] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-wordpress'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:drop-shadow-[0_0_26px_#F5EAE4] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-figma'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#3179c7] hover:drop-shadow-[0_0_26px_#3179c7] transition-all duration-200'
            onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} ><i className='bx bxl-typescript'></i></div>
        </Marquee> 
  
        
    </div>
  )
}

export default Skills_section