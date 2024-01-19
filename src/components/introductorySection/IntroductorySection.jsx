import PictureBlock from './contentOfIntroductorySection/PictureBlock'
import TechStack from './contentOfIntroductorySection/TechStack'
import TextBlock from './contentOfIntroductorySection/TextBlock'

import styles from './IntroductorySection.module.css'

const IntroductorySection = () => {
  return (
    <div style={{ background: '#f9f9f9' }} id="home">
      <div className="my-container">
        <div className={styles.mainContainer}>
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
