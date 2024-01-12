import cssIcon from '../../../assets/pictures/icons/css.webp'
import htmlIcon from '../../../assets/pictures/icons/html.webp'
import jsIcon from '../../../assets/pictures/icons/js.webp'
import tsIcon from '../../../assets/pictures/icons/ts.webp'
import reactIcon from '../../../assets/pictures/icons/react.webp'
import muiIcon from '../../../assets/pictures/icons/mui.png'
import sassIcon from '../../../assets/pictures/icons/sass.webp'

import styles from '../IntroductorySection.module.css'

const TechStack = () => {
  return (
    <div className={styles.techStackContainer}>
      <p>Tech Stack</p>
      <img src={cssIcon} alt="css" title="CSS" />
      <img src={htmlIcon} alt="html" title="HTML" />
      <img src={jsIcon} alt="js" title="JavaScript" />
      <img src={tsIcon} alt="ts" title="TypeScript" />
      <img src={reactIcon} alt="react" title="React" />
      <img
        style={{ borderRadius: '10px' }}
        src={muiIcon}
        alt="mui"
        title="Material UI"
      />
      <img src={sassIcon} alt="sass" title="SASS/SCSS" />
    </div>
  )
}

export default TechStack
