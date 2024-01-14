import { useEffect, useState } from '../../shared/utils/reactImports'
import { FiGithub, TbBrandLinkedin } from '../../shared/iconImports/iconImports'

import styles from '../IntroductorySection.module.css'
import TerminalTextBlock from '../../shared/reusableComponents/TerminalTextBlock'

const TextBlock = () => {
  const [hint, setHint] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHint(false)
    }, 1700)
  }, [hint])

  return (
    <div style={{ maxWidth: '100%' }}>
      <h1 style={{ color: '#2d2e32', fontSize: '2rem' }}>
        <TerminalTextBlock
          text={'Front-End React Developer'}
          height={'27px'}
          time={1600}
          speed={40}
        />
      </h1>

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
      )}
      <div className={styles.quickLinksContainer}>
        <FiGithub className={styles.svgStylesOne} />
        <TbBrandLinkedin className={styles.svgStylesTwo} />
      </div>
    </div>
  )
}

export default TextBlock
