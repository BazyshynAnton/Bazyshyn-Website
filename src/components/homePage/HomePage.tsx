import IntroduceContainer from './homePageContent/introduceContainer/IntroduceContainer'

import styles from '../../styles/homePage/HomePage.module.css'
import AboutMe from './homePageContent/aboutMe/AboutMe'

export default function HomePage() {
  return (
    <>
      <div className={styles.homePageBackground}></div>
      <div className="main-container">
        <IntroduceContainer />
        <AboutMe />
      </div>
    </>
  )
}
