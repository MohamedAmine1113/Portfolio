import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills_section = () => {
  return (
    <div className='w-[80%] h-[50vh] mt-[30px] max-md:h-[30vh] max-md:w-full max-lg:h-[30vh] flex justify-center items-center flex-col m-auto'>
        <h1 className='font-Quick text-clamp-titles mb-[40px]'>Skills</h1>
        <Marquee speed={100} pauseOnHover className='cursor-pointer'>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#197799] hover:drop-shadow-[1px_1px_20px_#197799]  '><i className='bx bxl-react'></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#05b7ff] hover:drop-shadow-[1px_1px_20px_#05b7ff]'><i className='bx bxl-tailwind-css' ></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#ef6628] hover:drop-shadow-[1px_1px_20px_#ef6628]'><i className='bx bxl-html5' ></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#016bc1] hover:drop-shadow-[1px_1px_20px_#016bc1]'><i className='bx bxl-css3' ></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#ffdf00] hover:drop-shadow-[1px_1px_20px_#ffdf00]'><i className='bx bxl-javascript' ></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#62b04a] hover:drop-shadow-[1px_1px_20px_#62b04a]' ><i className='bx bxl-nodejs'></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#171516] hover:drop-shadow-[1px_1px_20px_#171516]'><i className='bx bxl-github' ></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#fb4a27] hover:drop-shadow-[1px_1px_20px_#fb4a27]'><i className='bx bxl-git'></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#00779e] hover:drop-shadow-[1px_1px_20px_#00779e]'><i className='bx bxl-wordpress'></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#fb4a27] hover:drop-shadow-[1px_1px_20px_#fb4a27]'><i className='bx bxl-figma'></i></div>
            <div className='h-[180px] w-[150px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[80px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] hover:text-[#3179c7] hover:drop-shadow-[1px_1px_20px_#3179c7]'><i className='bx bxl-typescript'></i></div>
        </Marquee> 
    </div>
  )
}

export default Skills_section