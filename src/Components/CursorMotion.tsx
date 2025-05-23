import React, { useEffect } from 'react'
import { gsap } from 'gsap/gsap-core'


const CursorMotion= () => {
    
    useEffect(() => {
        const HandmouseMove = (e: MouseEvent) => {
            const cursor = document.getElementById('cursor') as HTMLElement
            gsap.to(cursor, {
                x: e.clientX - 30 / 2 ,
                y: e.clientY - 30 / 2 ,
                duration: 0.3,
                delay: 0,
                ease: 'power4.out',
                backgroundColor: '#EC5938',
                
            })
        }
        window.addEventListener('mousemove', HandmouseMove)
            
        return () => {  
            window.removeEventListener('mousemove', HandmouseMove)
        }
    },[])
    
  return (
    <div>
         <div id="cursor" className="fixed top-0 left-0 h-[30px] w-[30px] rounded-full pointer-events-none" />
         
    </div>
    
  )
}

export default CursorMotion