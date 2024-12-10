import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <FeatureSection/>
     <WorkFlow/>
     <Pricing/>
     <Testimonials/>
    </div>
  )
}

export default App
