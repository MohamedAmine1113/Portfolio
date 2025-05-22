import React from 'react'

const Contact_section = () => {
  return (
    <div id='Contact-section' className='w-[90%] h-[100vh] max-lg:h-[60vh] mt-[90px] flex flex-col justify-center items-center m-auto max-md:mt-[200px] '>
        <div className='flex flex-row justify-center items-center max-md:flex-col max-md:gap-[20px] max-lg:flex-col'>

          <div className='w-[40%] max-md:w-full max-md:text-center max-md:border-b max-md:p-[30px] p-[10px] max-lg:w-full max-lg:text-center max-lg:border-b max-lg:p-[30px]'>

            <div className='font-Quick text-clamp-titles mb-[30px] text-[35px] max-md:text-center max-lg:text-center'>
              <h1>Let's get in <br className='max-md:hidden max-lg:hidden' /> touch</h1>
            </div>

            <div className='flex flex-col mb-[20px]'>
              <span className='text-[#F5EAE4]/40'>Phone</span>
              <a href="">+212 649344406</a>
            </div>

            <div className='flex flex-col mb-[20px]'>
              <span className='text-[#F5EAE4]/40'>Email</span>
              <a href="">mohamed.amine.bahmane@gmail.com</a>
            </div>

            <div className='flex flex-row items-center gap-[10px] text-[20px] max-md:flex-col max-lg:flex-col'>
              <span className='text-[#F5EAE4]/40 text-[16px]'>Social Media :</span>
              <div className='flex gap-[10px]'>
                <i className='bx bxl-whatsapp'></i>
                <i className='bx bxl-instagram' ></i>
                <i className='bx bxl-facebook' ></i>
                <i className='bx bxl-linkedin' ></i>
                <i className='bx bxl-github' ></i>
              </div>
                
            </div>

        </div>


          <form action="" className='flex flex-col gap-[25px] items-start w-[60%] text-[35px] font-[600] max-md:items-center max-md:w-full max-md:text-[30px] max-md:leading-14 max-lg:items-center max-lg:w-full max-lg:text-[30px] max-lg:leading-14 max-lg:mt-[20px]'>
              <span>My name is <input type="text" placeholder='YOUR FULL NAME' className='max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]'/> and I <input type="text" placeholder='WEBSITE, FULL-TIME JOB, ETC' className='w-[75%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]'/> have a that needs help.<br /> Let’s work together – reach out at <input type="text" placeholder='YOUR EMAIL ADRESS' className='w-[70%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]'/> to get started!</span>
              <button className='text-[16px] font-medium float-left cursor-pointer flex flex-row justify-center items-center'><i className='bx bx-arrow-back mr-[10px]'></i>SEND INFO</button>
          </form>
          
        </div>
    </div>
  )
}

export default Contact_section