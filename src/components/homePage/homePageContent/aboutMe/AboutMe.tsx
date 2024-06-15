import AboutMeWeb from './AboutMeWeb'

import styles from '../../../../styles/homePage/HomePage.module.css'

export default function AboutMe() {
  return (
    <div className={styles.aboutMeHelpContainer}>
      <div className={styles.aboutMeContainer}>
        <AboutMeWeb />
      </div>
    </div>
  )
}
