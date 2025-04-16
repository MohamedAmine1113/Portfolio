import React from 'react'

const Contact_section = () => {
  return (
    <div  className='max-w-[90%] min-h-[100vh] mt-[120px] flex flex-col justify-center items-center m-auto'>
        <div className='flex flex-row justify-center items-center'>

        <div className='w-[40%]'>

          <div className='font-Quick text-clamp-titles mb-[30px]'>
            <h1>Let's get in <br /> touch</h1>
          </div>

          <div className='flex flex-col mb-[20px]'>
            <span className='text-[#F5EAE4]/40'>Phone</span>
            <a href="">+212 649344406</a>
          </div>

          <div className='flex flex-col mb-[20px]'>
            <span className='text-[#F5EAE4]/40'>Email</span>
            <a href="">mohamed.amine.bahmane@gmail.com</a>
          </div>

          <div className='flex flex-row items-center gap-[10px] text-[20px] '>
            <span className='text-[#F5EAE4]/40 text-[16px]'>Social Media :</span>
              <i className='bx bxl-whatsapp'></i>
              <i className='bx bxl-instagram' ></i>
              <i className='bx bxl-facebook' ></i>
              <i className='bx bxl-linkedin' ></i>
              <i className='bx bxl-github' ></i>
          </div>

        </div>


          <form action="" className='w-[60%] text-[40px] font-[600]'>
              <span>My name is <input type="text" placeholder='YOUR FULL NAME' className='text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease'/> and I <input type="text" placeholder='WEBSITE, FULL-TIME JOB, ETC' className='w-[75%] text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease'/> have a that needs help.<br /> Let’s work together – reach out at <input type="text" placeholder='YOUR EMAIL ADRESS' className='w-[70%] text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease'/> to get started!</span>
          </form>
          
        </div>
    </div>
  )
}

export default Contact_section