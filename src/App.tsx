import './index.css'
import Navbar from "./Components/Navbar"
import Hero_section from "./Components/Hero_section"
import About from './Components/About'
import Skills from './Components/Skills_section'


const App = () => {
  return (
    <div id="Home" >
      <Navbar />
      <Hero_section />
      <About />
      <Skills />
      
    </div>
  )
}

export default App