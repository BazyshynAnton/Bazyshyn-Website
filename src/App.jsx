import AboutMyself from './components/aboutMyself/AboutMyself'
import IntroductorySection from './components/introductorySection/IntroductorySection'
import PetProjects from './components/petProjects/PetProjects'

const App = () => {
  return (
    <div className="my-container">
      <IntroductorySection />
      <AboutMyself />
      <PetProjects />
    </div>
  )
}

export default App
