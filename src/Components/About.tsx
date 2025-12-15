import React from 'react'

import fotopr from '../assets/Images/fotopr.png';
import { useCursor } from './CursorMotion';
import amineCV from '../assets/pdf/amineCV.pdf';
const About = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;

  return (
    <div id='About-section' className=' md:w-[70%] md:h-[150vh] lg:h-[100vh] flex justify-center items-center flex-col gap-[40px] md:gap[20px] md:w-full lg:gap-[35px] lg:flex-row lg:w-[80%] lg:m-auto ' >
        
        
        <div className='w-[90%] h-[80%] m-auto flex justify-center items-center sm:w-full md:w-[80%] lg:w-[60%] 2xl:w-[50%]' >
                <img src={fotopr} alt="foto" className='w-[400px] h-[600px] lg:h-full lg:w-full' />
        </div>

        
        <div className='w-[80%] h-full lg:max-h-[80%]  font-[200] flex flex-col justify-center items-start gap-[40px]  md:gap-[30px] 2xl:gap-[100px] 2xl:ml-[40px]'>
            <div className='w-full' >
                <h1 className='mx-auto font-Quick text-center m-[10px] text-clamp-titles ' onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>About Me</h1>
            </div>
            
            <div >
                <span className='text-base/7 text-[13px] indent-7 md:text-[15px] 2xl:text-[17px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>Hello There,</span>
                <p className='text-base/7  text-[13px] indent-7 md:text-[15px] 2xl:text-[17px] md:indent-4 mb-[25px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>I’m a detail-oriented Web Designer and Frontend Developer passionate about crafting elegant, responsive, and intuitive digital experiences. Using tools like Figma, HTML, CSS, JavaScript, and React, I transform creative ideas into seamless, high-performing interfaces. My focus is on building designs that not only look stunning but also deliver excellent usability and accessibility across all devices, following modern design principles.</p>
                { <p className='text-base/7 font-[200] text-[13px] md:text-[15px] 2xl:text-[17px] ' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>With a strong foundation in both design and development, I thrive at the intersection of aesthetics and functionality. Whether I’m wireframing user journeys in Figma or coding dynamic components in React, I’m always driven by the end-user experience. I enjoy collaborating with cross-functional teams to turn ideas into polished products, and I’m constantly exploring new trends and technologies to stay ahead in the ever-evolving digital landscape.</p> }
            </div>

            <div className='max-md:text-[13px] flex items-center justify-center gap-2 cursor-pointer  font-normal group'  onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>
                
                <div className="bg-[#EC5938] text-[30px] flex items-center justify-center w-[35px] h-[35px] rounded-full transition-transform duration-500 group-hover:rotate-90">
                    <i className="bxr bx-arrow-up-stroke"></i>
                </div>
                <a href={amineCV} download={amineCV}> Download CV </a>
            </div>  
        </div>
    </div>
  )
}

export default About