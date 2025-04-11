import './index.css'
import Navbar from "./Components/Navbar"
import Hero_section from "./Components/Hero_section"
import About from './Components/About'
import Skills from './Components/Skills_section'
import Work from './Components/Work_section'



const App = () => {
  return (
    <div id="Home" >
      <Navbar />
      <Hero_section />
      <About />
      <Skills />
      <Work />
      
    </div>
  )
}

export default App