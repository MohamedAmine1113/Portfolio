
import { useState } from 'react';
import { FormEvent } from 'react';
import { useCursor } from './CursorMotion';
/* import {motion} from 'framer-motion'; */

import Swal from 'sweetalert2'

const Contact_section = () => {

    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;

  // contact form submit function

  const [ ,setResult] = useState("");

const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.append("access_key", "02379a0c-05e2-4ae2-b85a-f8c2e0016290");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
  if (data.success) {
    await Swal.fire({
      title: "Success!",
      text: "Mesaage sent successfully.",
      icon: "success"
    });
    setResult("Success");
  } else {
    setResult("Error");
  }
};

  return (
    <div id='Contact-section' className='max-w-[90%] h-[100vh]  max-lg:h-[80vh] flex flex-col justify-center items-center m-auto max-md:mt-[200px] '>
        <div className='w-full flex flex-row justify-center items-center max-md:flex-col max-md:gap-[20px] max-lg:flex-col '>

          <div className='w-[40%]  mx-auto max-md:w-full max-md:flex-col  max-md:border-b max-md:p-[30px] p-[10px] max-lg:w-full max-lg:text-center max-lg:border-b max-lg:p-[30px]'>

            <div className='font-Quick text-clamp-titles mb-[20px] text-[35px] max-md:mx-auto max-lg:mx-auto w-fit'>
              <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Let's get in <br className='max-md:hidden max-lg:hidden' /> touch</h1>
            </div>

            <div className='mb-[20px] font-[500]  max-lg:text-center'>
              <p >Email :</p>
              <a onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} className='text-[13px] opacity-[20%] hover:opacity-[100%] mt-[5px] cursor-pointer transition duration-700 ease-in-out'>mohamed.amine.bahmane@gmail.com</a>
            </div>


            <div className='flex flex-row gap-[50px] max-lg:justify-center max-lg:gap-[80px] lg:flex max-lg;flex-col'>
               <div className='w-fit '>
              <p>Phone :</p>
              <a onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} className='text-[13px] opacity-[20%] hover:opacity-[100%] mt-[5px] cursor-pointer transition duration-700 ease-in-out'>+212 649344406</a>
            </div>
            <div className='w-fit'>
              <p>Social :</p>
              <div className='flex flex-row gap-[15px]'>
                 <a onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} className='text-[13px] opacity-[20%] hover:opacity-[100%] mt-[5px] cursor-pointer transition duration-700 ease-in-out'>Github</a>
                <a onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} className='text-[13px] opacity-[20%] hover:opacity-[100%] mt-[5px] cursor-pointer transition duration-700 ease-in-out'>Instagram</a>
                <a onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} className='text-[13px] opacity-[20%] hover:opacity-[100%] mt-[5px] cursor-pointer transition duration-700 ease-in-out'>Linkdin</a>
                {/* <a onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} className='text-[13px] opacity-[20%] hover:opacity-[100%] mt-[5px] cursor-pointer transition duration-700 ease-in-out'>Facbook</a> */}
              </div>
             
            </div>
            </div>
           
        </div>
        <div>

          

        </div>


          <form onSubmit={onSubmit} action="" className='flex flex-col gap-[25px] items-start w-[60%] text-[35px] font-[600] max-md:items-center max-md:w-full max-md:text-[30px] max-md:leading-14 max-lg:items-center max-lg:w-full max-lg:text-[30px] max-lg:leading-14 max-lg:mt-[20px]'>
              <span onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)}>My name is <input name='name' type="text" placeholder='YOUR FULL NAME' className=' max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> and I <input name='message' type="text" placeholder='WEBSITE, FULL-TIME JOB, ETC' className='w-[75%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> have a that needs help.<br /> Let’s work together – reach out at <input name='email' type="text" placeholder='YOUR EMAIL ADRESS' className='w-[70%] max-md:w-full text-[25px] text-[#F5EAE4]/50 border-b focus:bg-[#F5EAE4]/5 focus:outline-none focus:p-[5px] focus:border-none focus:rounded-[6px] transition duration-700 ease max-lg:h-[40px] max-lg:text-[20px]' onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(3)}/> to get started!</span>
              <button className='text-[16px] font-medium float-left cursor-pointer flex flex-row justify-center items-center' onMouseEnter={() => scaleCursor(2)} onMouseLeave={() => resetCursor(1)}><i className='bx bx-arrow-back mr-[10px]'></i>SEND INFO</button>
          </form>

          
          
        </div>
        
    </div>
  )
}

export default Contact_section


/* const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
}
const FlipLink = ({ children, href, className }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      
      className={` text-[25px] font-[500] w-[150px] h-[35px] relative block overflow-hidden whitespace-nowrap  mb-[25px] mr-[35px] hover:bg-[#EC5938] hover:text-[#0D0D0D] text-center rounded-[6px] ${className ? ` ${className}` : ''}`}
      style={{
        lineHeight: 1.3,
      }}
    

    >
     
      <div >
         
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block "
            key={i}
          >
            {l} 
          </motion.span>
        ))}

        
      </div>
      <div className="absolute inset-0">
        
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block "
            
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}; */