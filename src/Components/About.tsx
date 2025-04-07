import React from 'react'
import foto from '../assets/Images/foto.png'
import Arrow from '../assets/Images/arrow-with-broken-line.png'
const About = () => {
  return (
    <div className='w-[80%] h-[100vh] flex justify-center items-center flex-row gap-[10px] m-auto'>
        <div className='w-[30%] h-[70%]'>
            <div className='bg-black rounded-[10px] mb-[10px]'>
                <img src={foto} alt="foto" />
            </div>
            <div className='bg-black h-[100px] mb-[10px] rounded-[10px] flex items-center pl-[15px] font-bold text-[24px]  relative'>
                <span className='text-[#F5EAE4] '>Let's Work </span>
                <span className='text-[#EC5938] mt-[30px] ml-[10px]'>Together</span>
                <i className='bx bxs-right-arrow ml-[30px]'></i>
                <img src={Arrow} alt="Arrow" className='absolute -top-[1px] right-[28px]'/>
            </div>
            <div className='h-[28px] bg-[#F5EAE4] text-[#0D0D0D] rounded-[10px] font-bold flex items-center justify-center gap-2 px-3'>
                <a href="">Download CV</a>
                <i className='bx bxs-download float-right'></i>
                
            </div>
        </div>
        <div className='bg-black p-[20px] w-[50%] h-[70%] rounded-[10px]'>
            <h1>About Me</h1>
            <p>Hi, I'm a passionate UI/UX Designer and Frontend Developer. I specialize in creating engaging, responsive websites and intuitive user interfaces that prioritize both aesthetics and usability. With experience in tools like Figma, React, HTML, CSS, and JavaScript, I bring designs to life while ensuring they're optimized for performance and accessibility.</p>
        </div>
    </div>
  )
}

export default About