import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const Hero_section = () => {
  return (
    <div>
      <div className='h-[65vh] w-full font-Quick flex justify-center flex-col pt-[30px]'>
        <span className='text-clamp1 pl-[40px]' >Hi! My Name is</span>
        <span className="text-clamp2 text-center">Mohamed Amine Bahmane </span>
        <span className='text-clamp1 pl-[40px] max-md:text-[30px]'  >I<span className='text-[#EC5938]'>’</span>m a </span>
        <span className=' pl-[200px] -mt-[50px] text-clamp3 text-[#EC5938] max-md:pl-[120px] max-md:-mt-[20px]'>
          <TypeAnimation 
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Frontend-developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'UI/UX Designer',
              1000
            ]}
            repeat={Infinity}
          />
      </span>
      </div>

      <div className='flex justify-center gap-[30px] text-[20px] cursor-pointer mt-[60px]'>
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