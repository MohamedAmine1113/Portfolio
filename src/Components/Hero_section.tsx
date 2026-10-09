
import Marquee from 'react-fast-marquee'
import { TypeAnimation } from 'react-type-animation';
import { useCursor } from './CursorMotion';
import GsapMagic from './GsapMagicIcons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const Hero_section = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;
  
    
  useGSAP(() => {
    

    const tl = gsap.timeline({
      defaults: {
        x: -80,
        opacity: 0,
        ease: 'power4.inOut',
        duration: 1,
        clearProps: 'transform', // 🔥 VERY IMPORTANT for links
      },
    });

    tl.from('.text1', {})
      .from('.text2', {}, '-=0.8')
      .from('.text3', {}, '-=0.8')
      .from('.text4', {}, '-=0.8');

    gsap.from('.hero-text', {
      opacity: 0,
      duration: 1,
      scale: 1.05,
      ease: "power4.inOut",
    })

    tl.from('.iconGithub', {x : 0, duration: 0.3})
      .from('.iconLinkedIn', {x : 0,}, '-=0.2')
      .from('.iconEmail', {x : 0,}, '-=0.1');

  });
   

  return (
    <div className='min-h-[calc(100svh-80px)] font-Quick flex flex-col mt-[100px] w-full' >
      <div>
        
      <div className='hero-text'>
        <Marquee direction="right" speed={80} className="w-full h-fit "  >
          <span className=" text-clamp2 uppercase text-outline" onMouseEnter={() => scaleCursor(8)} onMouseLeave={() => resetCursor(1)} >
            Web Designer&nbsp;&amp;&nbsp;Frontend Developer&nbsp;&nbsp;
          </span>
        </Marquee>
      </div>
      

        <div className='h-[35vh] pb-[10px] px-4 sm:px-6 2xl:px-8 flex justify-end flex-col text-[25px] sm:text-[35px] font-[200] transition-all duration-300'>
          <span 
            className='w-fit text1'
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
            className='w-fit text2'
            onMouseEnter={() => scaleCursor(2)} 
            onMouseLeave={() => resetCursor(1)}
          >  
            My Name is
          </span>

          <a 
              
              className='text3 uppercase text-[#EC5938] w-fit  p-[5px] rounded-[4px] cursor-pointer '
              onMouseEnter={() => {scaleCursor(0)}} 
              onMouseLeave={() => {resetCursor(1)}}
              href='#About-section'
          > 
              Mohamed amine bahmane 
          </a>
          <span 
              className='w-fit text4'
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
    
       
       <div className='flex justify-center gap-[30px] text-[20px] cursor-pointer m-auto' >

        <a href="https://github.com/MohamedAmine1113" target='_blank' rel='noopener noreferrer' >
          <GsapMagic >
              <svg className='iconGithub'  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#F5EAE4" viewBox="0 0 24 24"  onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
                <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clipRule="evenodd"></path>
              </svg>
          </GsapMagic>
        </a>

        <a href="https://www.linkedin.com/in/mohamed-amine-mohmed-a96579362/" target='_blank' rel='noopener noreferrer'>
          <GsapMagic>
            <svg className='iconLinkedIn'  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#F5EAE4" viewBox="0 0 24 24" onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
              <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
            </svg>
          </GsapMagic>
        </a>
        
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamed.amine.bahmane@gmail.com" target='_blank' rel='noopener noreferrer'>
          <GsapMagic>
              <svg className='iconEmail'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24" >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
              </svg>
          </GsapMagic>
        </a>
          
        
        
      </div>
    </div>
  )
}

export default Hero_section