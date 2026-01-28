

import fotopr from '../assets/Images/fotopr.png';
import { useCursor } from './CursorMotion';
import amineCV from '../assets/pdf/Mohamed_Amine_BahmaneCV.pdf';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const About = () => {


    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;

    // animation gsap

    

    useGSAP(() => {
    
     gsap.from(['.title', '.text-1', '.text-2', '.text-3'], {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '#About-section',
        start: 'top 50%',
        /* markers: true, */
      },
    });

      gsap.from('.foto', {
        opacity: 0,
        duration: 1,
        scale: 1.05,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: '.foto',
            start: 'top 50%',
        }
      })

      gsap.from ('.cvs', {
        opacity: 0,
        duration: 1,
        y: 100,
        ease: 'power4.inOut',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '#About-section',
          start: 'top 50%',
          
        }
      })



      
      
    
      
    }, []);

  return (
    <div id='About-section' className=' md:w-[70%] md:h-[120vh] lg:h-[100vh] flex justify-center items-center flex-col md:gap[20px] md:w-full lg:gap-[35px] lg:flex-row lg:w-[80%] lg:m-auto ' >
        
        
        <div className='foto w-[95%] h-[80%] m-auto flex justify-center items-center sm:w-full md:w-[80%] lg:w-[60%] 2xl:w-[60%]' >
                <img src={fotopr} alt="foto" className='w-[400px] md:w-[500px] md:h-[600px] lg:h-full lg:w-full' />
        </div>

        
        <div className=' w-[95%] h-full md:h-[80%] lg:max-h-[80%] flex flex-col justify-center items-start gap-[40px]  md:gap-[30px] 2xl:gap-[100px] 2xl:ml-[40px]'>
            <div className='w-full title' >
                <h1 className='mx-auto font-Quick text-center m-[10px] text-clamp-titles ' onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>About Me</h1>
            </div>
            
            <div >
                <span className='text-1 text-base/7 text-[13px] indent-7 md:text-[15px] 2xl:text-[17px] ' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>Hello There,</span>
                <p className='text-2 text-base/7  text-[13px] indent-7 md:text-[15px] 2xl:text-[17px] md:indent-4 mb-[25px] ' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>I’m a detail-oriented <span className='text-[#EC5938]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>Web Designer</span>  and <span className='text-[#EC5938]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>Frontend Developer</span> passionate about crafting elegant, responsive, and intuitive digital experiences. Using tools like <span className='text-[#EC5938]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>Figma</span>, <span className='text-[#EC5938]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>HTML</span>, <span className='text-[#EC5938]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>CSS</span>, <span className='text-[#EC5938]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>JavaScript</span>, and <span className='text-[#EC5938]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>React</span>, I transform creative ideas into seamless, high-performing interfaces. My focus is on building designs that not only look stunning but also deliver excellent usability and accessibility across all devices, following modern design principles.</p>
                { <p className='text-3 text-base/7  text-[13px] md:text-[15px] 2xl:text-[17px] ' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>With a strong foundation in both design and development, I thrive at the intersection of aesthetics and functionality. Whether I’m wireframing user journeys in Figma or coding dynamic components in React, I’m always driven by the end-user experience. I enjoy collaborating with cross-functional teams to turn ideas into polished products, and I’m constantly exploring new trends and technologies to stay ahead in the ever-evolving digital landscape.</p> }
            </div>

            <div className='cvs max-md:text-[13px] flex items-center justify-center gap-2 cursor-pointer  font-normal group'  onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)}>
                
                <div className="bg-[#EC5938] text-[30px] flex items-center justify-center w-[35px] h-[35px] rounded-full transition-transform duration-500 group-hover:rotate-90">
                    <i className="bxr bx-arrow-up-stroke"></i>
                </div>
                <a href={amineCV} download={amineCV} > Download CV </a>
            </div>  
        </div>
    </div>
  )
}

export default About