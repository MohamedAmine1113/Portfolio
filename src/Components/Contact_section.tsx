import React from 'react'
import { useCursor } from './CursorMotion';
import GsapMagicIcons from './GsapMagicIcons';

const Contact_section = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;

  return (
    <div id='Contact-section' className='w-[90%] h-[100vh] max-lg:h-[60vh] mt-[90px] flex flex-col justify-center items-center m-auto max-md:mt-[200px] '>
        <div className='flex flex-row justify-center items-center max-md:flex-col max-md:gap-[20px] max-lg:flex-col'>

          <div className='w-[40%] max-md:w-full max-md:text-center max-md:border-b max-md:p-[30px] p-[10px] max-lg:w-full max-lg:text-center max-lg:border-b max-lg:p-[30px]'>

            <div className='font-Quick text-clamp-titles mb-[30px] text-[35px] max-md:text-center max-lg:text-center w-fit'>
              <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Let's get in <br className='max-md:hidden max-lg:hidden' /> touch</h1>
            </div>

            <div className='flex flex-col mb-[20px] w-fit' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
              <span className='text-[#F5EAE4]/40'>Phone</span>
              <a href="" >+212 649344406</a>
            </div>

            <div className='flex flex-col mb-[20px] w-fit' onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
              <span className='text-[#F5EAE4]/40'>Email</span>
              <a href="">mohamed.amine.bahmane@gmail.com</a>
            </div>

            <div className='flex flex-row items-center gap-[10px] text-[20px] max-md:flex-col max-lg:flex-col'>
              <span className='text-[#F5EAE4]/40 text-[16px]'>Social Media :</span>
              <div className='flex gap-[10px]'>
                <GsapMagicIcons>
                  <a href="https://www.linkedin.com/in/mohamed-amine-bahmane-0b1b4a1b2/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F5EAE4" viewBox="0 0 24 24">
                      <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
                    </svg>
                  </a>
                </GsapMagicIcons>
                <GsapMagicIcons>
                  <a href="">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 24 24" >
                      <path fill-rule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.41 7.41 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263" clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </GsapMagicIcons>
                
                <i className='bx bxl-instagram' ></i>
                <i className='bx bxl-facebook' ></i>
                <i className='bx bxl-linkedin' ></i>
                <i className='bx bxl-github' ></i>
              </div>
                
            </div>

        </div>


          <form action="" className='flex flex-col gap-[25px] items-start w-[60%] text-[35px] font-[600] max-md:items-center max-md:w-full max-md:text-[30px] max-md:leading-14 max-lg:items-center max-lg:w-full max-lg:text-[30px] max-lg:leading-14 max-lg:mt-[20px]'>
              <span onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>My name is <input type="text" placeholder='YOUR FULL NAME' className=' max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> and I <input type="text" placeholder='WEBSITE, FULL-TIME JOB, ETC' className='w-[75%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> have a that needs help.<br /> Let’s work together – reach out at <input type="text" placeholder='YOUR EMAIL ADRESS' className='w-[70%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> to get started!</span>
              <button className='text-[16px] font-medium float-left cursor-pointer flex flex-row justify-center items-center' onMouseEnter={() => scaleCursor(2)} onMouseLeave={() => resetCursor(1)}><i className='bx bx-arrow-back mr-[10px]'></i>SEND INFO</button>
          </form>
          
        </div>
    </div>
  )
}

export default Contact_section