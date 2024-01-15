import { useEffect, useState } from '../../shared/utils/reactImports'
import TerminalTextBlock from '../../shared/reusableComponents/TerminalTextBlock'

import styles from '../PetProjects.module.css'

const stylesForHint = {
  fontStyle: 'italic',
  color: '#4e505c',
}

const NameOfSection = () => {
  const [hint, setHint] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHint(false)
    }, 1000)
  }, [hint])

  const [showAnimation, setShowAnimation] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('portfolio-div')
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

  return (
    <div className={styles.containerOfNameSection} id="portfolio-div">
      {!showAnimation ? (
        <h3>
          <TerminalTextBlock height={'22px'} text={''} />
        </h3>
      ) : (
        <>
          <h3>
            <TerminalTextBlock
              text={'PORTFOLIO'}
              height={'22px'}
              time={1000}
              speed={50}
            />
          </h3>
          {hint ? (
            <p style={stylesForHint}>
              Each project reflects my dedication to quality development and
              effective solutions.
            </p>
          ) : (
            <p>
              Each project reflects my dedication to quality development and
              effective solutions.
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default NameOfSection
