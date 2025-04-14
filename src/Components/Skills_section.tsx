import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills_section = () => {
  return (
    <div className='w-[80%] h-[50vh] mt-[30px] max-md:h-[30vh] max-md:w-full max-lg:h-[30vh] flex justify-center items-center flex-col m-auto'>
        <h1 className='font-Quick text-clamp-titles mb-[20px]'>Skills</h1>
        <Marquee speed={100} pauseOnHover className='cursor-pointer'>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#197799] hover:drop-shadow-[0_0_30px_#197799] transition-all duration-200 '><i className='bx bxl-react'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#05b7ff] hover:drop-shadow-[0_0_30px_#05b7ff] transition-all duration-200'><i className='bx bxl-tailwind-css' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#ef6628] hover:drop-shadow-[0_0_30px_#ef6628] transition-all duration-200'><i className='bx bxl-html5' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#016bc1] hover:drop-shadow-[0_0_30px_#016bc1] transition-all duration-200'><i className='bx bxl-css3' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#ffdf00] hover:drop-shadow-[0_0_30px_#ffdf00] transition-all duration-200'><i className='bx bxl-javascript' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#62b04a] hover:drop-shadow-[0_0_30px_#62b04a] transition-all duration-200' ><i className='bx bxl-nodejs'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:drop-shadow-[0_0_30px_#F5EAE4] transition-all duration-200'><i className='bx bxl-github' ></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#fb4a27] hover:drop-shadow-[0_0_30px_#fb4a27] transition-all duration-200'><i className='bx bxl-git'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#00779e] hover:drop-shadow-[0_0_30px_#00779e] transition-all duration-200'><i className='bx bxl-wordpress'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:drop-shadow-[0_0_30px_#F5EAE4] transition-all duration-200'><i className='bx bxl-figma'></i></div>
            <div className='h-[140px] w-[120px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[60px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#3179c7] hover:drop-shadow-[0_0_30px_#3179c7] transition-all duration-200'><i className='bx bxl-typescript'></i></div>
        </Marquee> 
    </div>
  )
}

export default Skills_section