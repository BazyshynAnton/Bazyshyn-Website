import { useEffect, useState } from '../../shared/utils/reactImports'
import TerminalTextBlock from '../../shared/reusableComponents/TerminalTextBlock'

import styles from '../ContactSection.module.css'

const stylesForHint = {
  fontStyle: 'italic',
  color: '#4e505c',
}

const ContactText = () => {
  const [hint, setHint] = useState(true)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHint(false)
    }, 900)
  }, [hint])

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animation-contact-text')
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
    <div className={styles.containerContactText} id="animation-contact-text">
      {!showAnimation ? (
        <h3>
          <TerminalTextBlock height={'22px'} text={''} />
        </h3>
      ) : (
        <>
          <h3>
            <TerminalTextBlock
              text={'CONTACT'}
              height={'22px'}
              time={900}
              speed={50}
            />
          </h3>
          {hint ? (
            <p style={stylesForHint}>
              If your message were a variable, I would assign it the highest
              value!
            </p>
          ) : (
            <p>
              If your message were a variable, I would assign it the highest
              value!
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default ContactText
