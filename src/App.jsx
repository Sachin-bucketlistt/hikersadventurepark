import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeroHome from './components/HeroHomeComponent/HeroHome'
import AboutUs from './components/AboutUs/AboutUs'
import ActivitiesSection from './components/ActivitiesSection/ActivitiesSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroHome/>
      <hr className="section-divider" />
      <AboutUs/>
      <hr className="section-divider" />
      <ActivitiesSection/>
    </>
  )
}

export default App

