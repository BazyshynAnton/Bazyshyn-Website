import IntroduceContainer from "./homePageContent/introduceContainer/IntroduceContainer"
import AboutMe from "./homePageContent/aboutMe/AboutMe"
import WebPortfolio from "./homePageContent/portfolio/webPortfolio/WebPortfolio"
import ContactMe from "./homePageContent/contactMe/ContactMe"

import styles from "styles/homePage/HomePage.module.css"

export default function HomePage() {
  return (
    <div className="wrapper">
      <div className={styles.homePageBackground}></div>
      <div className="main-container">
        <IntroduceContainer />
        <AboutMe />
        <WebPortfolio />
        <ContactMe />
      </div>
    </div>
  )
}
