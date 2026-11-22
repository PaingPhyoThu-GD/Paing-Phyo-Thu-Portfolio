import { useState } from 'react'

import './App.css'
import Navbar from './Components/nav_bar_component/nav_bar_section'
import Hero from './Components/Hero_component/hero_section'
import PurposeMissionVisionValue from './Components/Purpose_Mission_Vision_Vale_component/pmvv_component'
import ProjectShowCaesSection from './Components/Project_component/project_show_case_section'
import TechStack from './Components/Tech_stack_component/tech_stack_section'
import Footer from './Components/Footer/footer.'


function App() {

  const [ishome , setishome] = useState(true)


  return (
    <>
      
      <Navbar ishome = {setishome}/>
      <p>IS home : {ishome? (<>True</>): (<>False</>)}</p>
      {
        ishome ? 
        (
          <>
            <Hero/>
            <PurposeMissionVisionValue/>
            <ProjectShowCaesSection ishome = {setishome}/>
            <TechStack/>
          </>
        ):
        (<>
        </>)

      }
      <Footer/>
    </>
  )
}

export default App
