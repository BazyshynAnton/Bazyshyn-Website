import { useEffect, useState } from '../shared/utils/reactImports'

import PictureInAboutBlock from './contentOfAboutMyself/PictureInAboutBlock'
import TextInAboutBlock from './contentOfAboutMyself/TextInAboutBlock'

import styles from './AboutMyself.module.css'
import Addition from './contentOfAboutMyself/Addition'

const AboutMyself = ({ open, setOpen }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const [showAnimation, setShowAnimation] = useState(false)

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animation-div')
      const position = element.getBoundingClientRect().top
      const scrollPosition = window.scrollY

      if (!hasScrolled && scrollPosition >= position) {
        setShowAnimation(true)
        setHint(true)
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  const [hint, setHint] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHint(false)
    }, 900)
  }, [hint])

  return (
    <div className="my-container">
      <div
        className={styles.aboutWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="about"
      >
        <div className={styles.aboutMyselfContainer}>
          <PictureInAboutBlock isHover={isHover} />
          <TextInAboutBlock hint={hint} showAnimation={showAnimation} />
        </div>
        {showAnimation && (
          <Addition open={open} setOpen={setOpen} hint={hint} />
        )}
      </div>
    </div>
  )
}

export default AboutMyself
