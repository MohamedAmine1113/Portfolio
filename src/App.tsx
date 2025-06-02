import './index.css'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero_section"
import About from './Components/About'
import Skills from './Components/Skills_section'
import Work from './Components/Work_section'
import Contact from './Components/Contact_section'


import { CursorProvider } from './Components/CursorMotion'



const App = () => {
  
  return (
    <div id="Home" >
      <CursorProvider>
        <Navbar  />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </CursorProvider>
      
      
     
      
      
    </div>
  )
}

export default App