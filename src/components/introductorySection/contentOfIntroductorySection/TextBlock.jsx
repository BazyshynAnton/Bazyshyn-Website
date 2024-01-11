import Typed from 'react-typed'

import { FiGithub } from 'react-icons/fi'
import { TbBrandLinkedin } from 'react-icons/tb'

import styles from '../IntroductorySection.module.css'

const TextBlock = () => {
  return (
    <div style={{ maxWidth: '100%', padding: '0px 20px' }}>
      <h1 style={{ color: '#2d2e32', fontSize: '2rem' }}>
        <span style={{ color: '#16a085' }}>{'➜  ~'}</span>{' '}
        <Typed
          strings={['Front-End React Developer']}
          typeSpeed={40}
          showCursor={false}
        />
        <span className={styles.cursor} />
      </h1>

      <p>
        Hi, I'm Anton Bazyshyn. A React Front-end Developer with
        <br /> great enthusiasm from Balakliya, Ukraine.
      </p>
      <div className={styles.quickLinksContainer}>
        <FiGithub className={styles.svgStylesOne} />
        <TbBrandLinkedin className={styles.svgStylesTwo} />
      </div>
    </div>
  )
}

export default TextBlock
