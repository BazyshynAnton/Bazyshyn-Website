import { LazyLoadImage } from '../../shared/utils/reactImports'

import cssIcon from '../../../assets/pictures/icons/css.png'
import htmlIcon from '../../../assets/pictures/icons/html.png'
import jsIcon from '../../../assets/pictures/icons/js.png'
import tsIcon from '../../../assets/pictures/icons/ts.png'
import reactIcon from '../../../assets/pictures/icons/react.png'
import nextjsIcon from '../../../assets/pictures/icons/nextjs.png'
import muiIcon from '../../../assets/pictures/icons/mui.png'
import sassIcon from '../../../assets/pictures/icons/sass.png'

import styles from '../IntroductorySection.module.css'

const imgStyle = { borderRadius: '10px' }

const TechStack = () => {
  return (
    <div className={styles.techStackContainer}>
      <p>Tech Stack</p>
      <div className={styles.iconsContainer}>
        <LazyLoadImage style={imgStyle} src={cssIcon} alt="css" title="CSS" />
        <LazyLoadImage
          style={imgStyle}
          src={htmlIcon}
          alt="html"
          title="HTML"
        />
        <LazyLoadImage
          style={imgStyle}
          src={jsIcon}
          alt="js"
          title="JavaScript"
        />
        <LazyLoadImage
          style={imgStyle}
          src={tsIcon}
          alt="ts"
          title="TypeScript"
        />
        <LazyLoadImage
          style={imgStyle}
          src={reactIcon}
          alt="react"
          title="React"
        />
        <LazyLoadImage
          style={imgStyle}
          src={nextjsIcon}
          alt="nextjs"
          title="Next.js"
        />
        <LazyLoadImage
          style={imgStyle}
          src={muiIcon}
          alt="mui"
          title="Material UI"
        />
        <LazyLoadImage
          style={imgStyle}
          src={sassIcon}
          alt="sass"
          title="SASS/SCSS"
        />
      </div>
    </div>
  )
}

export default TechStack
