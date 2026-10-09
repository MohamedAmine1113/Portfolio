
import { useCursor } from './CursorMotion';
import {useState} from 'react'

import Eco from '../assets/Images/ECO.png';
import gym from '../assets/Images/gym.png';
import shop from '../assets/Images/shop.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


import {Swiper, SwiperSlide} from 'swiper/react';

const projects = [
    {
        num : '01. ',
        title : 'Mini E-Commerce Website',
        stack : [{name :'bx bxl-javascript text-[#ffdf00]'}, {name : 'bx bxl-html5 text-[#ef6628]'}, {name : 'bx bxl-css3 text-[#016bc1]'} ],
        image : Eco,
        live :  'https://mohamedamine1113.github.io/MiniProject-ECO/'
        
    },
    {
        num : '02. ',
        title : 'Gym Website',
        stack : [{name :'bx bxl-wordpress text-[#00779e]'} ],
        image : gym,
        live :  'https://gym3334.infy.click/'
        
    },
    {
        num : '03. ',
        title : 'Clothing Website',
        stack : [{name :'bx bxl-wordpress text-[#00779e]'}],
        image : shop,
        live :  'http://shop3344.free.nf/',
        bgcolor : '#f3f3f3'
        
    }
]
const Work_section = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;
    /* const setIndex = cursor!.setZIndex */

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: { activeIndex: number }) => {
        const currentIndex = swiper.activeIndex;
        // You can use the currentIndex to update the displayed project details
        // For example, you might want to set the project state here
        setProject(projects[currentIndex]);
    }


    // animation gsap
     useGSAP(() => {
        







        gsap.from('.work-titel', {
            opacity: 0,
            duration: 1,
            scale: 1.05,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: '#Work_section',
                start: 'top 50%',
                
            },
        })


    });
  return (
   

    <div id='Work_section' className=' w-[80%] h-[100vh] m-auto max-lg:h-[60vh] flex flex-col justify-center-self items-center min-h-[420px] max-md:min-h-[360px] max-md:w-[100%] max-lg:w-[80%]  max-md:w-full  max-lg:mt-[10px] z-1'>
    
        <div className='font-Quick text-clamp-titles mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[60px] w-fit work-titel' >
            <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Works</h1>
        </div>



        

            <div className='work-titel w-[95%] h-[60%] md:w-[95%] md:h-[65%] lg:h-[45%] xl:w-[70%] xl:h-[70%] 2xl:h-[63%] bg-[#F5EAE4] m-auto rounded-[20px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)} >
                
                <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={handleSlideChange} >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} >
                            <div className='w-[95%] h-[82%] relative group flex justify-center items-center m-auto work-titel'>
                                <img src={project.image} alt={`${project.title} screenshot`} className='mt-[25px] rounded-[20px]' loading='lazy' /> 
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='h-[13%] flex justify-between items-center my-[10px] mx-[25px] md:mx-[45px] text-[12px] md:text-[16px] md:mt-[10px] xl:text-[20px]'>
                    <div className='flex-row justify-start it ms-center gap-[20px] '>
                        
                        <p className='font-bold text-black name'>{project.num} {project.title}</p>
                        
                        <div className='tech-stack'>
                            {project.stack.map((tech, index) => (
                                <i key={index} className={`${tech.name} `}></i>
                            ))}
                        </div>

                    </div>

                    <div className='text-black view-project'>
                        <a href={project.live}  target="_blank" rel="noopener noreferrer" className='  underline front-normal  text-[12px] md:text-[14px]'>View Project</a>
                    </div>

                </div>
            </div>
        
        
        
    </div> 



        

    
  )
}

export default Work_section