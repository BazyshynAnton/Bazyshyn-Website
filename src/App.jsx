import Header from './components/header/Header'
import AboutMyself from './components/aboutMyself/AboutMyself'
import ContactSection from './components/contactSection/ContactSection'
import Footer from './components/footer/Footer'
import IntroductorySection from './components/introductorySection/IntroductorySection'
import PetProjects from './components/petProjects/PetProjects'
import { useState } from 'react'
import SettingsWeb from './components/settingsWeb/SettingsWeb'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header />
      <IntroductorySection />
      <AboutMyself open={open} setOpen={setOpen} />
      <PetProjects />
      <ContactSection />
      <Footer setOpen={setOpen} />
      <SettingsWeb />
    </>
  )
}

export default App
