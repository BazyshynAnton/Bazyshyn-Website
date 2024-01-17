import AboutMyself from './components/aboutMyself/AboutMyself'
import ContactSection from './components/contactSection/ContactSection'
import Footer from './components/footer/Footer'
import IntroductorySection from './components/introductorySection/IntroductorySection'
import PetProjects from './components/petProjects/PetProjects'

const App = () => {
  return (
    <>
      <IntroductorySection />
      <AboutMyself />
      <PetProjects />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
