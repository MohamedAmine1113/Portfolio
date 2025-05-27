import React, {   useRef , createContext , useContext , useEffect } from 'react'
import { gsap } from 'gsap';


export const CursorMotion = createContext<{ scaleCursor: (s: number) => void, resetCursor: (s: number) => void  , setZIndex: (z: number) => void , /* colorDefference : (type : string) => void */} | null>(null);
export const useCursor = () => useContext(CursorMotion);


export const CursorProvider = ({ children }: { children: React.ReactNode }) => {

    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const HandmouseMove = (e: MouseEvent) => {
            const cursor = document.getElementById('cursor') as HTMLElement
            gsap.to(cursor, {
                x: e.clientX - 30 / 2 ,
                y: e.clientY - 30 / 2 ,
                delay: 0,
                ease: 'power4.out',
                backgroundColor: 'transparent',
                
            })
        }
        window.addEventListener('mousemove', HandmouseMove)
            
        return () => {  
            window.removeEventListener('mousemove', HandmouseMove)
        }
    },[])
    
    const setZIndex  = (z : number) => {
        if (cursorRef.current) {
            cursorRef.current.style.zIndex = `${z}`;
        }
    }

   /*  const colorDefference = (type : string) => {
        if (cursorRef.current) {
            cursorRef.current.style.background = `${type}`;
        }
    } */

    const scaleCursor = (scale: number) => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, { scale, duration: 0.8 });
        }
    };

    const resetCursor = (scale: number) => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, { scale: scale, duration: 0.8 });
        }
    };

  return (

    <CursorMotion.Provider value={{ scaleCursor, resetCursor , setZIndex ,/* colorDefference */ }}>

         <div ref={cursorRef} id="cursor" className="fixed top-0 left-0 h-[30px] w-[30px] rounded-full pointer-events-none -z-10 bg-transparent" />
         {children}

    </CursorMotion.Provider>
    
  )
}

