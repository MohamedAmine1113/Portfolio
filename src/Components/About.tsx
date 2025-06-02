import React from 'react'
import foto from '../assets/Images/fotos.jfif'
import { useCursor } from './CursorMotion';

const About = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;

  return (
    <div id='About-section' className=' max-w-[90%] min-h-[100vh] mt-[200px] flex justify-center items-center flex-row gap-[10px] m-auto max-md:flex-col max-md:w-full max-md:mt-[120px] max-lg:flex-col max-lg:w-full max-lg:mt-[100px]'>
        
        
        <div className='w-[40%] h-[80%] flex justify-center max-md:w-[90%] max-lg:w-[80%]  ' >
                <img src={foto} alt="foto" className='w-[400px] h-[600px] max-md:h-[500px] max-md:w-[400px]' />
        </div>

        
        <div className='w-[50%] h-[70%] max-md:w-[80%] max-md:h-[70%] max-lg:w-[80%] max-lg:h-[70%]'>
            <div className='flex flex-col '>
                <h1 className='mx-auto font-Quick text-center m-[10px] text-clamp-titles ' onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>About Me</h1>
                <span className='text-base/7 font-[200] ' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>Hello There,</span>
                <p className='text-base/7 font-[200] indent-7 max-md:text-[13px] max-md:indent-4 mb-[20px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>I’m a detail-oriented <span className='text-[#EC5938] hover:text-[#0D0D0D] hover:bg-[#EC5938] transition duration-1000 ease-in-out p-[3px] rounded-[4px] cursor-default' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1.5)}>Web Designer</span> and <span className='text-[#EC5938] hover:text-[#0D0D0D] hover:bg-[#EC5938] transition duration-1000 ease-in-out p-[3px] rounded-[4px] cursor-default' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1.5)}>Frontend Developer</span> with a passion for creating elegant, responsive, and intuitive digital experiences. I work with tools like <span className='text-[#EC5938]'>Figma</span>, <span className='text-[#EC5938]'>HTML</span>, <span className='text-[#EC5938]'>CSS</span>, <span className='text-[#EC5938]'>JavaScript</span>, and <span className='text-[#EC5938]'>React</span> to bring creative ideas to life. My goal is to build interfaces that not only look great but also perform flawlessly across all devices, with a strong focus on usability, accessibility, and modern design principles.</p>
                <p className='text-base/7 font-[200] max-md:text-[13px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>With a strong foundation in both design and development, I thrive at the intersection of aesthetics and functionality. Whether I’m wireframing user journeys in Figma or coding dynamic components in React, I’m always driven by the end-user experience. I enjoy collaborating with cross-functional teams to turn ideas into polished products, and I’m constantly exploring new trends and technologies to stay ahead in the ever-evolving digital landscape.</p>
            </div>
            <div className='max-md:text-[13px] mt-[20px] w-[50%] h-[40px] bg-[#F5EAE4] text-[#0D0D0D] rounded-[10px] font-bold flex items-center justify-center gap-2  cursor-pointer float-right'  onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>
                <a href="">Download CV</a>
                <i className='bx bxs-download'></i>
            </div>  
        </div>
    </div>
  )
}

export default About