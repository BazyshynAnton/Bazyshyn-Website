import macbookPic from '../../../../assets/pictures/macbookPic.jpg'

import styles from '../../../../styles/homePage/aboutMe/AboutMeWeb.module.css'

export default function AboutMeWeb() {
  return (
    <div className={styles.aboutMeWebContainer}>
      <div className={styles.aboutMeWebHeaderContainer}>
        <h3>About Me</h3>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={macbookPic} alt="macbookPicture" />
        </div>
        <div className={styles.aboutMeText}>
          <h3>
            A React Front-end Developer with great enthusiasm from Balakliya,
            Ukraine.
          </h3>
          <p>
            I present myself as an ambitious front-end developer ready to
            contribute to your projects.
            <br /> I am prepared to contribute to your team, where
            professionalism, collaborative work, and a commitment to
            high-quality results are valued.
          </p>
        </div>
      </div>
    </div>
  )
}
