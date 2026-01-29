



import "@fontsource/poppins/200.css";
import { useCursor } from './CursorMotion';
import GsapMagic from './GsapMagicIcons';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
      const cursor = useCursor();
      const scaleCursor = cursor!.scaleCursor;
      const resetCursor = cursor!.resetCursor;

      // gsap animation
    useGSAP(() => {
      
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#Footer-section',
              start: 'top 95%',
             
          },
            defaults: {
              x: -50,
              opacity: 0,
              ease: 'power4.inOut',
              duration: 1,
              clearProps: 'transform',
              stagger: 0.15,
            
            },
          });

        tl.from('.Copyright', {x: 0, duration: 0.5});
        tl.from('.whatsappIcon', {})
          .from('.instagramIcon', {}, '-=0.8')
          .from('.facebookIcon', {}, '-=0.8')
          .from('.twitterIcon', {}, '-=0.8');
        

      });

  return (
    <footer id="Footer-section"  className='w-100% border-t border-[1px] h-[6vh] flex justify-between items-center px-[5px]  sm:mt-[50px]  text-center text-[10px] md:text-[16px] md:mt-[10px] xl:text-[16px] mt-[40px] font-[200]' >   
        
        
        <span className="text-[20px] ml-[15px] flex gap-[15px] sm:gap-[20px] md:gap-[25px] justify-center items-center cursor-pointer" onMouseEnter={() => scaleCursor(0)} onMouseLeave={() => resetCursor(1)} >
          <a href="https://wa.me/212649344406" target="_blank" className="whatsappIcon" >
            <GsapMagic>
              <i className="bx bxl-whatsapp hover:text-[#25D366]"></i>
            </GsapMagic>
          </a>
          <a href="https://www.instagram.com/med_amineq7" target="_blank"  className="instagramIcon">
            <GsapMagic>
              <i className="bx bxl-instagram hover:text-[#E1306C]"></i>
            </GsapMagic>
          </a>
          <a href="http://facebook.com/amine.ell.547/" target="_blank"  className="facebookIcon">
            <GsapMagic>
              <i className="bx bxl-facebook hover:text-[#1877F2]"></i>
            </GsapMagic>
          </a>
          <a href="https://x.com/med_amineq7" target="_blank" className="twitterIcon">
            <GsapMagic>
              <i className="bx bxl-twitter hover:text-[#1DA1F2]"></i>
            </GsapMagic>
          </a>
          
         
        
          
        </span>        

        <p className="Copyright w-fit">© 2025 Mohamed Amine Bahmane. All Rights Reserved</p>

    </footer>
  )
}   

export default Footer