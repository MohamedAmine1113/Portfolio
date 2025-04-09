import React from 'react'
import Marquee from 'react-fast-marquee'


const Hero_section = () => {
  return (
    <div>
      <div className='h-[65vh] w-full  pt-[30px] font-Quick'>
        <Marquee pauseOnHover direction='right' speed={150} className='-mt-[60px]' >
          <span className='w-full h-[15vh] text-clamp2 max-md:pl-[120px] max-md:-mt-[20px] uppercase text-outline'>Web Designer & Frontend Developer</span>
        </Marquee>
        <div className='h-[40vh] pl-[40px] pb-[10px] flex justify-end flex-col text-[30px] '>
          <span className='' >Hi<span className='text-[#EC5938]'>!</span></span>
          <span className=''>My Name is</span>
          <span className='uppercase text-[#EC5938]'>Mohamed amine bahmane</span>
          <span className=''>I Build Clean & Functional Web Experiences</span>
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