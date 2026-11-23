import { useState } from 'react'

import './App.css'

import AIHeroSection from './Components/Hero_component/ai_hero_section_component'
import AIPMVVComponent from './Components/Purpose_Mission_Vision_Vale_component/ai_pmvv_component'
import AITechStackSection from './Components/Tech_stack_component/ai_tech_stack_sec'
import AIFooterComponent from './Components/Footer/ai_footer_component'
import AINavbar from './Components/nav_bar_component/ai_nav_bar_section'
import ProjectShowCaesSection from './Components/Project_component/project_show_case_section'
import AIProjectShowcaseSection from './Components/Project_component/ai_project_showcase_section'
import AIProjectShowcaseV2 from './Components/Project_component/ai_project_showcase_v2'

function App() {

  const [ishome, setishome] = useState(true)


  return (
    <>
      <div className='app'>
        <AINavbar ishome={setishome} />

        {
          ishome ?
            (
              <>
                <AIHeroSection />
                <AIPMVVComponent />

                <AIProjectShowcaseV2 />
                <AITechStackSection />

              </>
            ) :
            (<>
            </>)

        }

        <AIFooterComponent />
      </div>
    </>
  )
}
//<p>IS home : {ishome ? (<>True</>) : (<>False</>)}</p>
//<Navbar ishome={setishome} />
//<ProjectShowCaesSection ishome={setishome} />
// import Navbar from './Components/nav_bar_component/nav_bar_section'
// import Hero from './Components/Hero_component/hero_section'
// import PurposeMissionVisionValue from './Components/Purpose_Mission_Vision_Vale_component/pmvv_component'
// import ProjectShowCaesSection from './Components/Project_component/project_show_case_section'
// import TechStack from './Components/Tech_stack_component/tech_stack_section'
// import Footer from './Components/Footer/footer.'
export default App
