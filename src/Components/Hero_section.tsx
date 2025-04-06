import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero_section = () => {
  return (
    <div>
      <div className='h-[100vh] w-auto font-Quick flex justify-center flex-col pt-[30px] '>
        <span className='text-[50px] pl-[40px]' >Hi! My Name is</span>
        <span className='text-[150px] text-center' >Mohamed Amine Bahmane</span>
        <span className='text-[50px] pl-[40px]'  >I<span className='text-[#EC5938]'>’</span>m a </span>
        <span className='ml-[250px] -mt-[40px] text-[50px] text-[#EC5938]'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Frontend-developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'UI/UX Design',
              1000
            ]}
            repeat={Infinity}
          />
      </span>
      </div>

      <div className='-mt-[50px] flex justify-center gap-[30px] text-[30px] cursor-pointer'>
        <i className='bx bxl-github'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bx-envelope' ></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bxl-instagram' ></i>
      </div>
    </div>
  )
}

export default Hero_section