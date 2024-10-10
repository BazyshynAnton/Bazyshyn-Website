import AboutMeWeb from "./AboutMeWeb"

import styles from "styles/homePage/HomePage.module.css"

export default function AboutMe() {
  return (
    <div className={styles.aboutMeHelpContainer} id="about">
      <div className={styles.aboutMe}>
        <AboutMeWeb />
      </div>
    </div>
  )
}
