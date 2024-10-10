import { LazyLoadImage } from "utils/lazyImports"

import mainPhoto from "assets/pictures/mainPhoto.png"
import cssIcon from "assets/pictures/icons/css.png"
import htmlIcon from "assets/pictures/icons/html.png"
import jsIcon from "assets/pictures/icons/js.png"
import tsIcon from "assets/pictures/icons/ts.png"
import reactIcon from "assets/pictures/icons/react.png"
import nextjsIcon from "assets/pictures/icons/nextjs.png"
import muiIcon from "assets/pictures/icons/mui.png"
import sassIcon from "assets/pictures/icons/sass.png"

import styles from "styles/homePage/introduceContainer/WebDev.module.css"

export default function WebDev() {
  return (
    <div className={styles.web}>
      <div className={styles.web__tech}>
        <div className={styles.web__tech__header}>
          <h3>Front-End Developer</h3>
          <p>
            Hi, I'm Anton Bazyshyn.
            <br /> A React Front-end Developer with great enthusiasm from
            Balakliya, Ukraine.
          </p>
        </div>
        <div className={styles.web__tech__stack}>
          <p>Tech Stack</p>
          <div className={styles.icons}>
            <LazyLoadImage
              className={styles.icons_style}
              src={cssIcon}
              alt="css"
              title="CSS"
            />
            <LazyLoadImage
              className={styles.icons_style}
              src={htmlIcon}
              alt="html"
              title="HTML"
            />
            <LazyLoadImage
              className={styles.icons_style}
              src={jsIcon}
              alt="js"
              title="JavaScript"
            />
            <LazyLoadImage
              className={styles.icons_style}
              src={tsIcon}
              alt="ts"
              title="TypeScript"
            />
            <LazyLoadImage
              className={styles.icons_style}
              src={reactIcon}
              alt="react"
              title="React"
            />
            <LazyLoadImage
              className={styles.icons_style}
              src={nextjsIcon}
              alt="nextjs"
              title="Next.js"
            />
            <LazyLoadImage
              className={styles.icons_style}
              src={muiIcon}
              alt="mui"
              title="Material UI"
            />
            <LazyLoadImage
              className={styles.icons_style}
              src={sassIcon}
              alt="sass"
              title="SASS/SCSS"
            />
          </div>
        </div>
      </div>
      <div className={styles.pictureOfTheBestProgrammerInTheWorld}>
        <LazyLoadImage
          style={{ objectFit: "cover" }}
          src={mainPhoto}
          alt="Bazyshyn Anton"
        />
      </div>
    </div>
  )
}
