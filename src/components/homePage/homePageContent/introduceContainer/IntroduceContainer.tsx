import WebDev from './WebDev'

import styles from '../../../../styles/homePage/HomePage.module.css'

export default function IntroduceContainer() {
  return (
    <div className={styles.introduceHelperContainer}>
      <div className={styles.introduceContainer}>
        <div className={styles.sectionLine}>
          <div className={styles.introduceHeader}>
            <div className={styles.introduceHeaderSection}>
              <h2>Web-dev</h2>
            </div>
            <div className={styles.introduceHeaderSection}>
              <h2>Game-dev</h2>
            </div>
          </div>
        </div>
        <WebDev />
      </div>
    </div>
  )
}
