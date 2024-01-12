import { useState } from '../shared/utils/reactImports'

import PictureInAboutBlock from './contentOfAboutMyself/PictureInAboutBlock'
import TextInAboutBlock from './contentOfAboutMyself/TextInAboutBlock'

import styles from './AboutMyself.module.css'

const AboutMyself = () => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.aboutMyselfContainer}
    >
      <PictureInAboutBlock isHover={isHover} />
      <TextInAboutBlock />
    </div>
  )
}

export default AboutMyself
