import React from 'react'
import ECO from '../assets/Images/ECO.png'
const Work_section = () => {
  return (
    <div id='Work_section' className='w-[70%] h-[100vh] mt-[150px] flex justify-center items-center flex-col m-auto sticky top-0'>
        <div>
            <h1 className='font-Quick text-clamp-titles mb-[40px]'>Works</h1>
        </div>
        <div className='bg-[#F5EAE4] text-[#0D0D0D] w-[80%] h-[75%] rounded-[15px] flex justify-center items-center flex-col'>
            <div className='w-[95%] h-[73%] '>
                <img src={ECO} alt="lkjih" className='rounded-[15px]' />
            </div>
            <div className='w-[90%] flex justify-between items-center flex-row'>
                <div>
                    <h1 className='font-bold'>ECOMMERCE WEBSITE</h1>
                    <p className='text-[12px]'>FOR DLBKJDQN DNQNQD LKNDQD LQNDNQKLD  QDKN</p>
                </div>
                <div className='h-[80px] w-[50px] max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[30px] max-md:text-[40px] ml-[30px] max-md:ml-[10px] cursor-pointer'>
                    <i className='bx bxl-html5 text-[#ef6628] hover:drop-shadow-[0_0_30px_#ef6628] transition-all duration-200' ></i> 
                    <i className='bx bxl-css3 text-[#016bc1] hover:drop-shadow-[0_0_30px_#016bc1] transition-all duration-200' ></i> 
                    <i className='bx bxl-javascript text-[#ffdf00] hover:drop-shadow-[0_0_30px_#ffdf00] transition-all duration-200' ></i>
                </div>              
            </div>

        </div>
        
    </div>
  )
}

export default Work_section