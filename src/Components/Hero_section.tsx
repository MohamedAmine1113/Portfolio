import React from 'react'
import Marquee from 'react-fast-marquee'
import { TypeAnimation } from 'react-type-animation';

const Hero_section = () => {
  return (
    <div>
      <div className='h-[65vh] w-full  pt-[30px] font-Quick'>
        <Marquee direction='right' speed={100} className='-mt-[60px]' >
          <span className='w-full h-[15vh] text-clamp2 max-md:pl-[120px] max-md:-mt-[20px] uppercase text-outline whitespace-pre'>Web Designer & Frontend Developer & </span>
        </Marquee>
        <div className='h-[40vh] md:pl-[40px] max-md:pl-[10px] max-md:text-[25px] pb-[10px] flex justify-end flex-col text-[30px] font-[200]'>
          <span >Hi<span className='text-[#EC5938]'>!</span></span>
          <span >My Name is</span>
          <span className='uppercase text-[#EC5938]'>Mohamed amine bahmane</span>
          <span >
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

      <div className='flex justify-center gap-[30px] text-[20px] cursor-pointer mt-[60px]'>
        <i className='bx bxl-github'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bx-envelope' ></i>
      </div>
    </div>
  )
}

export default Hero_section