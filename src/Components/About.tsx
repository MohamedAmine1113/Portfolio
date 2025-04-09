import React from 'react'
import foto from '../assets/Images/foto.png'

const About = () => {

  return (
    <div id='About-section' className='max-w-[80%] min-h-[100vh] flex justify-center items-center flex-row gap-[10px] m-auto max-md:flex-col max-md:w-full max-md:mt-[120px] max-md:mb-[120px] max-lg:flex-col max-lg:w-full max-lg:mt-[100px] max-lg:mb-[100px]'>
        <div className='w-[30%] h-[70%] max-md:w-[80%] max-md:h-[70%] max-lg:w-[80%] max-lg:h-[70%] '>

            <div className='bg-black rounded-[10px] mb-[10px] max-lg:flex max-lg:justify-center'>
                <img src={foto} alt="foto" />
            </div>

            <div className='bg-black h-[90px] mb-[10px] rounded-[10px] flex justify-center gap-[25px]  items-center font-bold text-[23px] relative cursor-pointer'>
                <span className='h-[50px] text-[#F5EAE4] -mt-[15px]'>Let's Work </span>
                <span className='h-[50px] text-[#EC5938] mt-[40px] -ml-[10px]'>Together</span>
                <i className='bx bx-up-arrow-alt text-[30px] transform rotate-z-40 absolute top-[2px] right-[2px] font-light'></i>
            </div>

            <div className='h-[30px] bg-[#F5EAE4] text-[#0D0D0D] rounded-[10px] font-bold flex items-center justify-center gap-2 px-3 cursor-pointer'>
                <a href="">Download CV</a>
                <i className='bx bxs-download'></i>
                
            </div>
        </div>
        <div className='bg-black p-[20px] w-[50%] h-[70%] rounded-[10px]  max-md:w-[80%] max-md:h-[70%] max-lg:w-[80%] max-lg:h-[70%]'>
            <div className=' flex flex-col items-center justify-center'>
                <h1 className='font-Quick text-center m-[10px] text-clamp-about-title'>About Me</h1>
                <p className='p-[10px] text-base/7 font-medium indent-7 max-md:text-[13px] max-md:indent-4'>I’m a detail-oriented <span className='text-[#EC5938]'>Web Designer</span> and <span className='text-[#EC5938]'>Frontend Developer</span> with a passion for creating elegant, responsive, and intuitive digital experiences. I work with tools like <span className='text-[#EC5938]'>Figma</span>, <span className='text-[#EC5938]'>HTML</span>, <span className='text-[#EC5938]'>CSS</span>, <span className='text-[#EC5938]'>JavaScript</span>, and <span className='text-[#EC5938]'>React</span> to bring creative ideas to life. My goal is to build interfaces that not only look great but also perform flawlessly across all devices, with a strong focus on usability, accessibility, and modern design principles.</p>
            </div>
            
            <div className='text-center text-[20px] mt-[15px] flex flex-col'>
                <div>
                    <li className='float-left max-md:text-[13px] font-light text-[16px]'>Social Media :</li>
                </div>
                <div className='flex justify-center gap-[20px] mt-[5px] max-md:text-[13px]'>
                    <i className='bx bxl-whatsapp cursor-pointer'></i>
                    <i className='bx bxl-instagram cursor-pointer' ></i>
                    <i className='bx bxl-facebook cursor-pointer'></i>
                    <i className='bx bxl-twitter cursor-pointer'></i>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About