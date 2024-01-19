import { useState } from './components/shared/utils/reactImports'
import { SettingsProvider } from './context/SettingsContext'

import Header from './components/header/Header'
import AboutMyself from './components/aboutMyself/AboutMyself'
import ContactSection from './components/contactSection/ContactSection'
import Footer from './components/footer/Footer'
import IntroductorySection from './components/introductorySection/IntroductorySection'
import PetProjects from './components/petProjects/PetProjects'
import SettingsWeb from './components/settingsWeb/SettingsWeb'
import SettingsBlock from './components/settingsWeb/SettingsBlock'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <SettingsProvider>
      <Header />
      <IntroductorySection />
      <AboutMyself open={open} setOpen={setOpen} />
      <PetProjects />
      <ContactSection />
      <Footer setOpen={setOpen} />
      <SettingsWeb />
      <SettingsBlock />
    </SettingsProvider>
  )
}

export default App
