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
    <div className={styles.aboutMeWeb}>
      <div className={styles.aboutMeWeb__header}>
        <h3>About Me</h3>
      </div>
      <div className={styles.aboutMeWeb__content}>
        <div className={styles.aboutMeWeb__content__img}>
          <LazyLoadImage src={macbookPic} alt="macbookPicture" />
          {isSmallScreen && <Spin />}
        </div>
        <div className={styles.aboutMeWeb__content__text}>
          <h3>
            A React Front-end Developer with great enthusiasm from Balakliya,
            Ukraine.
          </h3>
          <p>
            I am the Front-end developer with 1.5 years of non-commercial
            experience who improves himself by investing 12 hours a day. Great
            ambitions allow me to cope with the most difficult tasks and solve
            complex problems. I put my heart and soul into all kinds of projects
            and write code with great enthusiasm. I practice with my
            pet-projects every day, which means that I have a great desire to
            develop as a Front-end developer.
          </p>
        </div>
      </div>
    </div>
  )
}
