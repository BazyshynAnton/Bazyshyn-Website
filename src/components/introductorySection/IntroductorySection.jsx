import PictureBlock from './contentOfIntroductorySection/PictureBlock'
import TextBlock from './contentOfIntroductorySection/TextBlock'

import styles from './IntroductorySection.module.css'

const IntroductorySection = () => {
  return (
    <div className={styles.introductorySectionContainer}>
      <div className={styles.insideIntroductorySectionContainer}>
        <TextBlock />
        <PictureBlock />
      </div>
    </div>
  )
}

export default IntroductorySection
