import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'

const App = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <FeatureSection/>
     <WorkFlow/>
    </div>
  )
}

export default App
