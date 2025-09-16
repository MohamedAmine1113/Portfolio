import React from 'react'

import fotopr from '../assets/Images/fotopr.png';
import { useCursor } from './CursorMotion';
import amineCV from '../assets/pdf/amineCV.pdf';
const About = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;

  return (
    <div id='About-section' className=' max-w-[90%] min-h-[100vh] mt-[200px] flex justify-center items-start flex-row gap-[10px] m-auto max-md:flex-col max-md:w-full max-md:mt-[120px] max-lg:flex-col max-lg:w-full max-lg:mt-[100px]'>
        
        
        <div className='w-[30%] h-[80%] flex justify-center max-md:w-[90%] max-lg:w-[80%]  ' >
                <img src={fotopr} alt="foto" className='w-[400px] h-[600px] max-md:h-[500px] max-md:w-[400px]' />
        </div>

        
        <div className='w-[50%] h-full max-md:w-[80%] max-md:h-[70%] max-lg:w-[80%] max-lg:h-[70%] font-[200] flex flex-col justify-between items-start '>
            <div>
                <h1 className='mx-auto font-Quick text-center m-[10px] text-clamp-titles mb-[50px]' onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>About Me</h1>
            </div>
            
            <div >
                <span className='text-base/7  ' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>Hello There,</span>
                <p className='text-base/7 font-[200] indent-7 max-md:text-[13px] max-md:indent-4 mb-[20px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>I’m a detail-oriented Web Designer and Frontend Developer passionate about crafting elegant, responsive, and intuitive digital experiences. Using tools like Figma, HTML, CSS, JavaScript, and React, I transform creative ideas into seamless, high-performing interfaces. My focus is on building designs that not only look stunning but also deliver excellent usability and accessibility across all devices, following modern design principles.</p>
                { <p className='text-base/7 font-[200] max-md:text-[13px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>With a strong foundation in both design and development, I thrive at the intersection of aesthetics and functionality. Whether I’m wireframing user journeys in Figma or coding dynamic components in React, I’m always driven by the end-user experience. I enjoy collaborating with cross-functional teams to turn ideas into polished products, and I’m constantly exploring new trends and technologies to stay ahead in the ever-evolving digital landscape.</p> }
            </div>

            <div className='max-md:text-[13px]   flex items-center justify-center gap-2 cursor-pointer mt-[50px] font-normal'  onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>
                
                <div className='bg-[#EC5938] text-[25px] flex items-center justify-center w-[30px] h-[30px] rounded-full'>
                    {<i className='bxr  bx-arrow-up-right-stroke '  ></i> }
                </div>
                <a href={amineCV} download={amineCV}> Download CV </a>
            </div>  
        </div>
    </div>
  )
}

export default About