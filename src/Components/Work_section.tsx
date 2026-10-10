
import { useCursor } from './CursorMotion';
import { useState, useRef } from 'react'

import Eco from '../assets/Images/Mini E-Commerce Showcase in Orange and Black.png';
import gym from '../assets/Images/Gym.png';
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
import { Keyboard, Mousewheel } from 'swiper/modules';

const projects = [
    {
        num : '01. ',
        title : 'Mini E-Commerce Website',
        stack : [{name :'bx bxl-javascript text-[#ffdf00]'}, {name : 'bx bxl-html5 text-[#ef6628]'}, {name : 'bx bxl-css3 text-[#016bc1]'} ],
        image : Eco,
        description: 'A responsive 3D product storefront built with HTML, CSS and JavaScript.',
        tagline: 'INTERACTIVE SHOPPING EXPERIENCE',
        github: 'https://github.com/MohamedAmine1113/MiniProject-ECO',
        live :  'https://mohamedamine1113.github.io/MiniProject-ECO/'
        
    },
    {
        num : '02. ',
        title : 'Gym Website',
        stack : [{name :'bx bxl-wordpress text-[#00779e]'} ],
        image : gym,
        description: 'A modern gym website created with WordPress and Elementor.',
        tagline: 'FITNESS & DIGITAL EXPERIENCE',
        github: '',
        live :  'https://gym3334.infy.click/'
        
    },
    {
        num : '03. ',
        title : 'Clothing Website',
        stack : [{name :'bx bxl-wordpress text-[#00779e]'}],
        image : shop,
        description: 'A fashion e-commerce website created with WordPress and Elementor.',
        tagline: 'MODERN FASHION EXPERIENCE',
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
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        







        gsap.from('#Work_section .work-titel', {
            opacity: 0,
            duration: 0.95,
            y: 28,
            scale: 1.025,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: '#Work_section',
                start: 'top 50%',
                
            },
        })


    }, []);
  return (
   

    <div id='Work_section' className=' w-[80%] min-h-[100vh] m-auto max-lg:min-h-[60vh] flex flex-col justify-center-self items-center max-lg:h-auto max-md:h-auto max-md:w-[100%] max-lg:w-[80%]  max-md:w-full  max-lg:mt-[10px] z-1'>
    
        <div className='font-Quick text-clamp-titles mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[60px] w-fit text-center work-titel' >
            <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Works</h1>
                <p className='max-w-[440px] mx-auto mt-2 mb-5 px-4 text-center Poppins text-[12px] sm:text-[14px] leading-relaxed text-[#F5EAE4]/65'>A selection of websites I’ve designed and developed, combining thoughtful design with functional experiences.</p>
        </div>



        

            <div className='work-titel w-[95%] h-auto md:w-[95%] lg:w-[85%] xl:w-[70%] bg-[#F5EAE4] m-auto rounded-[20px]' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)} >
                
                <Swiper spaceBetween={50} slidesPerView={1} onSwiper={(swiper) => { swiperRef.current = swiper; }} onSlideChange={handleSlideChange} speed={700} modules={[Keyboard, Mousewheel]} keyboard={{ enabled: true }} mousewheel={{ enabled: true, releaseOnEdges: true, thresholdDelta: 12 }} >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} >
                            <div className='w-[95%] aspect-[2.1/1] relative group flex justify-center items-center m-auto mt-[16px] overflow-hidden rounded-[20px] bg-[#0D0D0D]'>
                                <img src={project.image} alt={`${project.title} screenshot`} className='block w-full h-full object-cover' loading='lazy' /> 
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='px-5 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-7 sm:pb-9 text-[#111111]'>
                    <div className='grid grid-cols-1 md:grid-cols-[minmax(0,1.55fr)_minmax(220px,0.85fr)] gap-6 md:gap-8'>
                        <div className='min-w-0'>
                            <div className='flex items-center gap-2 mb-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#EC5938]'>
                                <span className='w-8 h-[3px] bg-[#EC5938] rounded-full' aria-hidden='true'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#EC5938]' aria-hidden='true'></span>
                                <span className='uppercase rounded-full bg-[#EC5938]/10 px-2.5 py-1'>Live Project</span>
                            </div>
                            <h2 className='font-Instrument text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-tight tracking-tight'>
                                {project.num}{project.title}
                            </h2>
                            <p className='Poppins text-[#111111]/65 text-[12px] sm:text-[14px] leading-relaxed mt-3 max-w-[650px]'>
                                {project.description}
                            </p>
                            <div className='flex flex-wrap items-center gap-3 sm:gap-4 mt-6' aria-label='Technologies used'>
                                <span className='uppercase text-[10px] sm:text-[11px] tracking-[0.18em] text-[#111111]/55'>Tech stack</span>
                                <span className='hidden sm:block h-6 w-px bg-[#111111]/15' aria-hidden='true'></span>
                                <div className='flex flex-wrap gap-2'>
                                    {project.stack.map((tech, index) => (
                                        <span key={index} className='inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#111111]/10 bg-white/40'>
                                            <i className={`${tech.name} text-[21px]`} aria-hidden='true'></i>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='md:border-l border-[#111111]/15 md:pl-7 md:pt-4 flex flex-col justify-between gap-5 md:gap-8'>
                            <div className='flex items-start justify-between md:justify-start gap-4'>
                                <div className='flex gap-1' aria-hidden='true'>
                                    <span className='w-5 h-5 rounded-full border border-[#111111]/35'></span>
                                    <span className='w-5 h-5 -ml-2 rounded-full border border-[#111111]/35'></span>
                                </div>
                                <p className='Poppins text-[11px] tracking-[0.17em] font-medium leading-[1.8] text-[#111111]/55 uppercase max-w-[190px] md:ml-2'>{project.tagline}</p>
                            </div>
                            <div className='flex flex-wrap gap-2.5'>
                                <a href={project.live} target='_blank' rel='noopener noreferrer'
                                    className='inline-flex items-center justify-center gap-2 px-5 min-h-11 rounded-full bg-[#111111] text-[#F5EAE4] text-[12px] sm:text-[13px] font-medium hover:bg-[#EC5938] transition-colors'>
                                    View Project <span aria-hidden='true'>↗</span>
                                </a>
                                {project.github && (
                                    <a href={project.github} target='_blank' rel='noopener noreferrer'
                                        className='inline-flex items-center justify-center gap-2 px-5 min-h-11 rounded-full border border-[#111111]/30 text-[#111111] text-[12px] sm:text-[13px] font-medium hover:border-[#EC5938] hover:text-[#EC5938] transition-colors'>
                                        GitHub <span aria-hidden='true'>↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 mt-6 sm:mt-8 pb-3 text-[#F5EAE4] text-[13px]' aria-label='Project slider controls'>
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