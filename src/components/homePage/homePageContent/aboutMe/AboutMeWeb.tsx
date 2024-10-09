import Spin from "./Spin"
import { useEffect, useState } from "utils/reactImports"
import { LazyLoadImage } from "utils/lazyImports"

import macbookPic from "assets/pictures/macbookPic.jpg"

import styles from "styles/homePage/aboutMe/AboutMeWeb.module.css"

export default function AboutMeWeb() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth > 645)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 885)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <div className={styles.aboutMeWebContainer}>
      <div className={styles.aboutMeWebHeaderContainer}>
        <h3>About Me</h3>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <LazyLoadImage src={macbookPic} alt="macbookPicture" />
          {isSmallScreen && <Spin />}
        </div>
        <div className={styles.aboutMeText}>
          <h3>
            A React Front-end Developer with great enthusiasm from Balakliya,
            Ukraine.
          </h3>
          <p>
            <br />I present myself as an ambitious front-end developer with 1.5
            years of experience, ready to contribute to your projects.
            <br /> I am prepared to contribute to your team, where
            professionalism, collaborative work, and a commitment to
            high-quality results are valued.
          </p>
          <p>
            • Self-motivated and self-managing, with great organizational
            skills.
            <br />• High attention to detail, thoroughness, and organization.
            <br />• Strong problem-solving and analytical skills. <br />• I
            consider myself a well-rounded person with skills in multiple areas.
          </p>
        </div>
      </div>
    </div>
  )
}
