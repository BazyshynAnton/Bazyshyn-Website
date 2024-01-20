import { useEffect, useState } from '../../shared/utils/reactImports'
import { useSettingsContext } from '../../../context/SettingsContext'

import TerminalTextBlock from '../../shared/reusableComponents/TerminalTextBlock'

import styles from '../ContactSection.module.css'

const stylesForHint = {
  fontStyle: 'italic',
  color: '#4e505c',
}

const ContactText = () => {
  const { isSmallScreen } = useSettingsContext()

  const [showAnimation, setShowAnimation] = useState(false)

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

  const [hint, setHint] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHint(false)
    }, 850)
  }, [hint])

  return (
    <div className={styles.containerContactText}>
      {!showAnimation ? (
        <h3>
          <TerminalTextBlock height={'22px'} text={''} />
        </h3>
      ) : (
        <>
          {isSmallScreen ? (
            <h3>
              <TerminalTextBlock
                text={'CONTACT'}
                height={'22px'}
                time={850}
                speed={20}
              />
            </h3>
          ) : (
            <h3>CONTACT</h3>
          )}
          {isSmallScreen ? (
            <>
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
