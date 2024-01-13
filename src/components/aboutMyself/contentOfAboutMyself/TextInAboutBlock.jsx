import { useEffect, useState } from '../../shared/utils/reactImports'

import TerminalTextBlock from '../../shared/reusableComponents/TerminalTextBlock'

import styles from '../AboutMyself.module.css'

const stylesForHint = {
  fontStyle: 'italic',
  color: '#4e505c',
}

const TextInAboutBlock = () => {
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

  return (
    <div className={styles.containerText} id="animation-div">
      {!showAnimation ? (
        <h3>
          <TerminalTextBlock height={'22px'} text={''} />
        </h3>
      ) : (
        <>
          <h3>
            <TerminalTextBlock
              text={'ABOUT ME'}
              height={'22px'}
              time={900}
              speed={50}
            />
          </h3>
          {hint ? (
            <>
              <h4 style={stylesForHint}>
                A React Front-end Developer with great enthusiasm from
                Balakliya, Ukraine.
              </h4>
              <p style={stylesForHint}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                voluptatum repudiandae libero qui eligendi quod doloremque
                voluptatibus hic labore ipsum, laudantium similique facere
                fugiat iusto distinctio ea porro quas animi. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Beatae, officiis
                deserunt, eveniet omnis illum fugit asperiores pariatur unde ex
                ipsa accusantium quisquam? Aliquam consectetur quaerat facere
                quia aliquid, officia asperiores?
              </p>
            </>
          ) : (
            <>
              <h4>
                A React Front-end Developer with great enthusiasm from
                Balakliya, Ukraine.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                voluptatum repudiandae libero qui eligendi quod doloremque
                voluptatibus hic labore ipsum, laudantium similique facere
                fugiat iusto distinctio ea porro quas animi. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Beatae, officiis
                deserunt, eveniet omnis illum fugit asperiores pariatur unde ex
                ipsa accusantium quisquam? Aliquam consectetur quaerat facere
                quia aliquid, officia asperiores?
              </p>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default TextInAboutBlock
