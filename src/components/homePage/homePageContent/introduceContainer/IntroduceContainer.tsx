import WebDev from "./WebDev"

import { useEffect, useState } from "utils/reactImports"

import styles from "styles/homePage/HomePage.module.css"

export default function IntroduceContainer() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 490)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 490)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <div id="home" className={styles.introduceHelperContainer}>
      <div className={styles.introduce}>
        <div className={styles.introduce__header}>
          <div className={styles.introduce__header__content}>
            {isSmallScreen ? (
              <>
                <div className={styles.introduce__header__content_section}>
                  <h2>Web-dev</h2>
                </div>
              </>
            ) : (
              <>
                <div className={styles.introduce__header__content_section}>
                  <h2>Web</h2>
                </div>
              </>
            )}
          </div>
        </div>
        <WebDev />
      </div>
    </div>
  )
}
