import React  from 'react'
/* import ECO from '../assets/Images/ECO.png' */
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
    /* const setIndex = cursor!.setZIndex */

  return (
    <div id='Work_section' className='w-[80%] h-[100vh]  m-auto  max-lg:h-[60vh] flex flex-col justify-start items-center max-lg:h-[50%] max-md:h-[30%] max-lg:w-[80%] max-md:w-full  max-lg:mt-[10px] z-1'>

        <div className='font-Quick text-clamp-titles mb-[80px] '>
            <h1 onMouseEnter={() => scaleCursor(3)} onMouseLeave={() => resetCursor(1)} >Works</h1>
        </div>

        
        <div className='flex flex-col justify-start items-center gap-12 w-full h-[30vh] max-md:h-[30vh] max-lg:h-[30vh] max-lg:gap-[5px] mb-[100px]' >



            <a href="" className='flex justify-between opacity-[20%] hover:opacity-[100%] cursor-pointer transition duration-700 ease-in-out'><p>Ecommerce Website</p><span className='border-[1px] opacity-[20%] h-0 w-150 m-auto mx-2'></span><p>HTML CSS JS, 2024</p></a>
            <a href="" className='flex justify-between opacity-[20%] hover:opacity-[100%] cursor-pointer transition duration-700 ease-in-out'><p>Apps Managment</p><span className='border-[1px] opacity-[20%] h-0 w-150 m-auto mx-2'></span><p>Wendev, 2024</p></a>
            <a href="" className='flex justify-between opacity-[20%] hover:opacity-[100%] cursor-pointer transition duration-700 ease-in-out'><p>Ecommerce Website</p><span className='border-[1px] opacity-[20%] h-0 w-150 m-auto mx-2'></span><p>Frontend, 2024</p></a>
            <a href="" className='flex justify-between opacity-[20%] hover:opacity-[100%] cursor-pointer transition duration-700 ease-in-out'><p>Ecommerce Website</p><span className='border-[1px] opacity-[20%] h-0 w-150 m-auto mx-2'></span><p>Frontend, 2024</p></a>
            
            {/* <div className='w-full m-auto grid grid-cols-1 gap-4 '>

                

                {/* <div className=' w-full h-[12vh] p-[10px] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-[20px] rounded-[15px] flex flex-col justify-start items-start gap-5'>
                    {/* <div>
                        <img src={ECO} alt="lkjih" className='rounded-[15px]  m-auto ' />
                    </div> 
                    <div className='w-full flex flex-row justify-between items-center px-[10px] '>
                        <div>
                            <h1 className='font-bold text-[25px] max-md:text-[13px] '>ECOMMERCE WEBSITE</h1>
                            <p className='text-[10px] text-[#EC5938] '>Web Developpement</p>
                            <div className='text-[20px] flex items-center justify-start gap-2 mt-[6px]'>
                                <i className='bx bxl-html5 text-[#ef6628] hover:drop-shadow-[0_0_30px_#ef6628] transition-all duration-200' ></i> 
                                <i className='bx bxl-css3 text-[#016bc1] hover:drop-shadow-[0_0_30px_#016bc1] transition-all duration-200' ></i> 
                                <i className='bx bxl-javascript text-[#ffdf00] hover:drop-shadow-[0_0_30px_#ffdf00] transition-all duration-200' ></i>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-1 cursor-pointer'>
                            <a href='https://mohamedamine1113.github.io/MiniProject-ECO/' target="_blank" className='text-[14px] cursor-pointer'>View Project</a>
                            <div className=' text-[23px] flex items-center justify-center'>
                                {<i className='bxr  bx-arrow-up-right-stroke '  ></i> }
                            </div>
                        </div>
                        
                    </div>
                    
                </div> */}


               {/* <div className=' w-full h-[12vh] p-[10px] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-[20px] rounded-[15px] flex flex-col justify-start items-start gap-5'>
                    {/* <div>
                        <img src={ECO} alt="lkjih" className='rounded-[15px]  m-auto ' />
                    </div> 
                    <div className='w-full flex flex-row justify-between items-center px-[10px] '>
                        <div>
                            <h1 className='font-bold text-[25px] max-md:text-[13px] uppercase'>app-desktop managment livraison</h1>
                            <p className='text-[10px] text-[#EC5938] '>Front-End Developpement</p>
                            <div className='text-[20px] flex items-center justify-start gap-2 mt-[6px]'>
                                <i className='bx bxl-html5 text-[#ef6628] hover:drop-shadow-[0_0_30px_#ef6628] transition-all duration-200' ></i> 
                                <i className='bx bxl-css3 text-[#016bc1] hover:drop-shadow-[0_0_30px_#016bc1] transition-all duration-200' ></i> 
                                <i className='bx bxl-javascript text-[#ffdf00] hover:drop-shadow-[0_0_30px_#ffdf00] transition-all duration-200' ></i>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-1 cursor-pointer'>
                            <a href='https://mohamedamine1113.github.io/MiniProject-ECO/' target="_blank" className='text-[14px] cursor-pointer'>View Project</a>
                            <div className=' text-[23px] flex items-center justify-center'>
                                {<i className='bxr  bx-arrow-up-right-stroke '  ></i> }
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className=' w-full h-[12vh] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-[20px] rounded-[15px]'></div>
                <div className=' w-full h-[12vh] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-[20px] rounded-[15px]'></div> 
                
             
            </div> */}




            
       

    </div>
    </div>



        

    
  )
}

export default Work_section