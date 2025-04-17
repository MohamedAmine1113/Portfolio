
import ECO from '../assets/Images/ECO.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work_section = () => {

    

  return (
    <div id='Work_section' className='w-[70%] h-[100vh] flex flex-col justify-center items-center mt-[90px] m-auto  max-lg:h-[50%] max-md:h-[30%] max-lg:w-[80%] max-md:w-full  max-md:mt-[80px] max-lg:mt-[10px]'>

        <div className='font-Quick text-clamp-titles mb-[40px] mt-[60px]'>
            <h1 >Works</h1>
        </div>

        <div className='bg-[#F5EAE4] text-[#0D0D0D] w-[80%] h-[75vh] max-md:h-[30vh] max-lg:h-[30vh] rounded-[15px] flex justify-center items-center flex-col gap-[10px] max-lg:gap-[5px] mb-[100px] '>
            <div className='w-[95%] h-[73%] mt-[10px] max-md:mt-[10px] max-lg:mt-[10px]'>
                <img src={ECO} alt="lkjih" className='rounded-[15px]' />
            </div>

            <div className='w-[90%] h-[80px] flex justify-between items-center flex-row '>
                <div>
                    <h1 className='font-bold max-md:text-[13px]'>ECOMMERCE WEBSITE</h1>
                    <p className='text-[10px]'>Front-End Developpement</p>
                </div>

                <div className='max-md:w-[90px] max-md:h-[90px] flex items-center justify-center text-[30px] max-md:text-[25px] ml-[30px] max-md:ml-[10px] cursor-pointer'>
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