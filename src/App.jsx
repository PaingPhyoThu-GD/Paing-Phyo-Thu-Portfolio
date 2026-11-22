import { useState } from 'react'

import './App.css'
import Navbar from './Components/nav_bar_component/nav_bar_section'
import Hero from './Components/Hero_component/hero_section'
import PurposeMissionVisionValue from './Components/Purpose_Mission_Vision_Vale_component/pmvv_component'

function App() {


  return (<>
    <Navbar/>
    <Hero/>
    <PurposeMissionVisionValue/>
  </>
  )
}

export default App
