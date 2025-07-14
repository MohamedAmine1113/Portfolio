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
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="#ffffff" viewBox="0 0 24 24" >
                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156"></path><path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path>
                    </svg>
                  </a>
                </GsapMagicIcons>
                <GsapMagicIcons >
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F5EAE4" viewBox="0 0 24 24"  onMouseEnter={() => scaleCursor(1.5)} onMouseLeave={() => resetCursor(1)}>
                      <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd"></path>
                    </svg>
                </GsapMagicIcons>          
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