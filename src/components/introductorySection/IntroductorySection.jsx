import PictureBlock from './contentOfIntroductorySection/PictureBlock'
import TechStack from './contentOfIntroductorySection/TechStack'
import TextBlock from './contentOfIntroductorySection/TextBlock'

import styles from './IntroductorySection.module.css'

const IntroductorySection = () => {
  return (
    <div style={{ background: '#f9f9f9' }} id="home">
      <div className="my-container">
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
      </div>
    </div>
  )
}

export default IntroductorySection
