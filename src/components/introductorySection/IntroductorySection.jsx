import PictureBlock from './contentOfIntroductorySection/PictureBlock'
import TechStack from './contentOfIntroductorySection/TechStack'
import TextBlock from './contentOfIntroductorySection/TextBlock'

import styles from './IntroductorySection.module.css'

const IntroductorySection = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'relative',
        width: '100%',
      }}
    >
      <div className={styles.introductorySectionContainer}>
        <div className={styles.insideIntroductorySectionContainer}>
          <TextBlock />
          <PictureBlock />
        </div>
        <TechStack />
      </div>
    </div>
  )
}

export default IntroductorySection
