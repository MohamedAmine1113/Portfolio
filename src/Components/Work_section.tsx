
import { useCursor } from './CursorMotion';
import { useState, useRef } from 'react'

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
import type { Swiper as SwiperInstance } from 'swiper';
import { Keyboard } from 'swiper/modules';

const projects = [
    {
        num : '01. ',
        title : 'Mini E-Commerce Website',
        stack : [{name :'bx bxl-javascript text-[#ffdf00]'}, {name : 'bx bxl-html5 text-[#ef6628]'}, {name : 'bx bxl-css3 text-[#016bc1]'} ],
        image : Eco,
        description: 'A responsive storefront built with HTML, CSS and JavaScript.',
        github: 'https://github.com/MohamedAmine1113/MiniProject-ECO',
        live :  'https://mohamedamine1113.github.io/MiniProject-ECO/'
        
    },
    {
        num : '02. ',
        title : 'Gym Website',
        stack : [{name :'bx bxl-wordpress text-[#00779e]'} ],
        image : gym,
        description: 'A fitness website focused on clear service presentation.',
        github: '',
        live :  'https://gym3334.infy.click/'
        
    },
    {
        num : '03. ',
        title : 'Clothing Website',
        stack : [{name :'bx bxl-wordpress text-[#00779e]'}],
        image : shop,
        description: 'A product-focused online clothing storefront.',
        github: '',
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
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperInstance | null>(null);

    const handleSlideChange = (swiper: { activeIndex: number }) => {
        const currentIndex = swiper.activeIndex;
        // You can use the currentIndex to update the displayed project details
        // For example, you might want to set the project state here
        setProject(projects[currentIndex]);
        setActiveIndex(currentIndex);
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
   

    <div id='Work_section' className=' w-[80%] min-h-[100vh] m-auto max-lg:min-h-[60vh] flex flex-col justify-center-self items-center max-lg:h-auto max-md:h-auto max-md:w-[100%] max-lg:w-[80%]  max-md:w-full  max-lg:mt-[10px] z-1'>
    
        <div className='font-Quick text-clamp-titles mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[60px] w-fit work-titel' >
            <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Works</h1>
        </div>



        

            <div className='work-titel w-[95%] h-auto md:w-[95%] lg:w-[85%] xl:w-[70%] bg-[#F5EAE4] m-auto rounded-[20px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)} >
                
                <Swiper spaceBetween={50} slidesPerView={1} onSwiper={(swiper) => { swiperRef.current = swiper; }} onSlideChange={handleSlideChange} modules={[Keyboard]} keyboard={{ enabled: true }} >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} >
                            <div className='w-[95%] h-auto relative group flex justify-center items-center m-auto work-titel'>
                                <img src={project.image} alt={`${project.title} screenshot`} className='mt-[25px] rounded-[20px] w-full h-auto object-contain' loading='lazy' /> 
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='min-h-[70px] flex flex-wrap gap-3 justify-between items-center my-[10px] mx-[25px] md:mx-[45px] text-[12px] md:text-[16px] md:mt-[10px] xl:text-[20px]'>
                    <div className='flex-row justify-start it ms-center gap-[20px] '>
                        
                        <p className='font-bold text-black name'>{project.num} {project.title}</p>
                        
                        <p className='text-black/70 text-[11px] md:text-[13px] leading-relaxed max-w-[380px] mt-1'>{project.description}</p>
                        <div className='tech-stack' aria-label='Technologies used'>
                            {project.stack.map((tech, index) => (
                                <i key={index} className={`${tech.name} `}></i>
                            ))}
                        </div>

                    </div>

                    <div className='text-black view-project flex flex-wrap items-center gap-3'>
                        <a href={project.live}  target="_blank" rel="noopener noreferrer" className='  underline front-normal  text-[12px] md:text-[14px]'>View Project ↗</a>
                        {project.github && <a href={project.github} target='_blank' rel='noopener noreferrer' className='underline text-[12px] md:text-[14px]'>GitHub ↗</a>}
                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center gap-4 pb-3 text-[#F5EAE4] text-[13px]' aria-label='Project slider controls'>
                <button type='button' aria-label='Previous project' disabled={activeIndex === 0}
                    onClick={() => swiperRef.current?.slidePrev()}
                    className='border border-[#F5EAE4]/50 rounded-full w-9 h-9 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#EC5938]'>←</button>
                <span aria-live='polite' className='min-w-[54px] text-center'>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
                <button type='button' aria-label='Next project' disabled={activeIndex === projects.length - 1}
                    onClick={() => swiperRef.current?.slideNext()}
                    className='border border-[#F5EAE4]/50 rounded-full w-9 h-9 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#EC5938]'>→</button>
            </div>
        
        
        
    </div> 



        

    
  )
}

export default Work_section