import React, { useEffect } from 'react'
import { gsap } from 'gsap/gsap-core'


const CursorMotion= () => {
    useEffect(() => {
        const HandmouseMove = (e: MouseEvent) => {
            const cursor = document.getElementById('cursor') as HTMLElement
            gsap.to(cursor, {
                x: e.clientX - 30 / 2 ,
                y: e.clientY - 30 / 2 ,
                duration: 1,
                delay: 0,
                ease: 'power4.out',
                backgroundColor: '#EC5938',
                color: '#0D0D0D',
            })
        }
        window.addEventListener('mousemove', HandmouseMove)
            
        return () => {  
            window.removeEventListener('mousemove', HandmouseMove)
        }
    })
  return (
    <div>
        <div id='cursor' className='fixed top-0 left-0 h-[30px] w-[30px] rounded-full pointer-events-none '/>
        {/* <div>
            <h1 
                onMouseEnter={()=> gsap.to("#cursor" , {scale: 4 , duration:0.3})}
                onMouseLeave={()=> gsap.to("#cursor" , {scale: 1 , duration:0.3})}
                className=' text-[50px] font-Quick text-center mt-[200px] cursor-pointer '
                >
                    HOVER ME</h1>
        </div> */}
    </div>
    
  )
}

export default CursorMotion