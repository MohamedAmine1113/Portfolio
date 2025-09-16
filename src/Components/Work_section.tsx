import React  from 'react'
import ECO from '../assets/Images/ECO.png'
import { useCursor } from './CursorMotion';


const Work_section = () => {
    /* const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        cursorRef.current = document.getElementById('cursor') as HTMLDivElement | null;
        console.log(cursorRef.current)
    },[]) */

    /* const setZIndex  = (z : number) => {
        if (cursorRef.current) {
            cursorRef.current.style.zIndex = `${z}`;
        }
    }
     */
    const cursor = useCursor();
    const scaleCursor = cursor!.scaleCursor;
    const resetCursor = cursor!.resetCursor;
    const setIndex = cursor!.setZIndex

  return (
    <div id='Work_section' className='w-[70%] h-[100vh] max-lg:h-[60vh] flex flex-col justify-center items-center mt-[90px] m-auto  max-lg:h-[50%] max-md:h-[30%] max-lg:w-[80%] max-md:w-full  max-lg:mt-[10px]'>

        <div className='font-Quick text-clamp-titles mb-[40px] mt-[60px]'>
            <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Works</h1>
        </div>

        <div className=' w-full h-[25vh] max-md:h-[30vh] max-lg:h-[30vh] rounded-[10px] flex justify-between items-center flex-row gap-[10px] max-lg:gap-[5px] mb-[100px] border-b pl-[5px] pr-[5px]'  onMouseEnter={() => {scaleCursor(0); setIndex(1)}} onMouseLeave={() => {resetCursor(1); setIndex(0)}}>
        
                <div className='w-[25%]'>
                    <h1 className='font-bold text-[25px] max-md:text-[13px] '>ECOMMERCE WEBSITE</h1>
                    <p className='text-[10px] text-[#EC5938] '>Front-End Developpement</p>
                    <div className='text-[20px] flex items-center justify-start gap-3 mt-[10px]A'>
                        <i className='bx bxl-html5 text-[#ef6628] hover:drop-shadow-[0_0_30px_#ef6628] transition-all duration-200' ></i> 
                        <i className='bx bxl-css3 text-[#016bc1] hover:drop-shadow-[0_0_30px_#016bc1] transition-all duration-200' ></i> 
                        <i className='bx bxl-javascript text-[#ffdf00] hover:drop-shadow-[0_0_30px_#ffdf00] transition-all duration-200' ></i>
                    </div>
                    
                </div>

                {  <div className='w-[25%]  '>
                    <img src={ECO} alt="lkjih" className='rounded-[15px]' />
                </div> }

                <div className='w-[25%] flex items-center justify-end '>
                    
                    <button className='text-[16px]  cursor-pointer'>View Project</button>
                    <div className=' text-[23px] flex items-center justify-center'>
                        {<i className='bxr  bx-arrow-up-right-stroke '  ></i> }
                    </div>
                    
                    
                </div>              
            </div>




            <div className=' w-full h-[25vh] max-md:h-[30vh] max-lg:h-[30vh] rounded-[10px] flex justify-between items-center flex-row gap-[10px] max-lg:gap-[5px] mb-[100px] border-b pl-[5px] pr-[5px]'  onMouseEnter={() => {scaleCursor(0); setIndex(1)}} onMouseLeave={() => {resetCursor(1); setIndex(0)}}>
        
                <div className='w-[25%]'>
                    <h1 className='font-bold text-[25px] max-md:text-[13px] '>ECOMMERCE WEBSITE</h1>
                    <p className='text-[10px] text-[#EC5938] '>Front-End Developpement</p>
                    <div className='text-[20px] flex items-center justify-start gap-3 mt-[10px]A'>
                        <i className='bx bxl-html5 text-[#ef6628] hover:drop-shadow-[0_0_30px_#ef6628] transition-all duration-200' ></i> 
                        <i className='bx bxl-css3 text-[#016bc1] hover:drop-shadow-[0_0_30px_#016bc1] transition-all duration-200' ></i> 
                        <i className='bx bxl-javascript text-[#ffdf00] hover:drop-shadow-[0_0_30px_#ffdf00] transition-all duration-200' ></i>
                    </div>
                    
                </div>

                {  <div className='w-[25%]  '>
                    <img src={ECO} alt="lkjih" className='rounded-[15px]' />
                </div> }

                <div className='w-[25%] flex items-center justify-end '>
                    
                    <button className='text-[16px]  cursor-pointer'>View Project</button>
                    <div className=' text-[23px] flex items-center justify-center'>
                        {<i className='bxr  bx-arrow-up-right-stroke '  ></i> }
                    </div>
                    
                    
                </div>              
            </div>
       

    </div>



        

    
  )
}

export default Work_section