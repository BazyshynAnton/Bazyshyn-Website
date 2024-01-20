import { useEffect, useState } from '../../shared/utils/reactImports'
import { useSettingsContext } from '../../../context/SettingsContext'
import { FiGithub, TbBrandLinkedin } from '../../shared/iconImports/iconImports'

import TerminalTextBlock from '../../shared/reusableComponents/TerminalTextBlock'

import styles from '../IntroductorySection.module.css'

const TextBlock = () => {
  const { isSmallScreen } = useSettingsContext()
  const [hint, setHint] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHint(false)
    }, 1700)
  }, [hint])

  return (
    <div className={styles.textBlockContainer}>
      {isSmallScreen ? (
        <h1>
          <TerminalTextBlock
            text={'Front-End React Developer'}
            height={'27px'}
            time={1600}
            speed={40}
          />
        </h1>
      ) : (
        <h1>Front-End React Developer 👋🏻</h1>
      )}

      {isSmallScreen ? (
        <>
          {hint ? (
            <p
              style={{
                fontStyle: 'italic',
                color: '#4e505c',
              }}
            >
              Hi, I'm Anton Bazyshyn. A React Front-end Developer with
              <br /> great enthusiasm from Balakliya, Ukraine.
            </p>
          ) : (
            <p>
              Hi, I'm Anton Bazyshyn. A React Front-end Developer with
              <br /> great enthusiasm from Balakliya, Ukraine.
            </p>
          )}{' '}
        </>
      ) : (
        <p>
          Hi, I'm Anton Bazyshyn. A React Front-end Developer with great
          enthusiasm from Balakliya, Ukraine.
        </p>
      )}

      <div className={styles.quickLinksContainer}>
        <a
          href="https://github.com/BazyshynAnton"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className={styles.svgStylesOne} />
        </a>
        <a
          href="https://www.linkedin.com/in/anton-bazyshyn-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandLinkedin className={styles.svgStylesTwo} />
        </a>
      </div>
    </div>
  )
}

export default TextBlock
