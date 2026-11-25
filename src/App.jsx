import { useState } from 'react'
import './App.css'

import AIHeroSection from './Components/Hero_component/ai_hero_section_component'
import AIPMVVComponent from './Components/Purpose_Mission_Vision_Vale_component/ai_pmvv_component'
import AIProjectShowcaseV2 from './Components/Project_component/ai_project_showcase_v2'
import AITechStackSection from './Components/Tech_stack_component/ai_tech_stack_sec'
import AIFooterComponent from './Components/Footer/ai_footer_component'
import AINavbar from './Components/nav_bar_component/ai_nav_bar_section'

function App() {
  const [ishome, setishome] = useState(true)

  return (
    <div className="app">
      <AINavbar ishome={setishome} />

      {ishome ? (
        <main>
          {/* 1. HOME: AIHeroSection */}
          <section id="home">
            <AIHeroSection />
          </section>

          {/* 2. ABOUT ME: AIPMVVComponent */}
          <section id="about">
            <AIPMVVComponent />
          </section>

          {/* 3. PROJECTS: AIProjectShowcaseV2 */}
          <section id="projects">
            <AIProjectShowcaseV2 />
          </section>

          {/* 4. TECH STACK: AITechStackSection */}
          <section id="techstack">
            <AITechStackSection />
          </section>
        </main>
      ) : null}

      {/* 5. CONTACT: AIFooterComponent */}
      <footer id="contact">
        <AIFooterComponent />
      </footer>
    </div>
  )
}

export default App
