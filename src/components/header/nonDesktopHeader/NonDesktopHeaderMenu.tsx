import { useState } from 'react'
import styles from '../../../styles/header/nonDesktopHeader/NonDesktopHeaderMenu.module.css'

export default function NonDesktopHeaderMenu() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={styles.nonDesktopHeaderMenuContainer}>
      <div className={styles.dropDownArrow}></div>
      <div className={styles.content} onMouseLeave={() => setIsHover(false)}>
        <div onMouseEnter={() => setIsHover(false)}>
          <p>Home</p>
        </div>
        <div onMouseEnter={() => setIsHover(false)}>
          <p>Web-dev</p>
        </div>
        <div onMouseEnter={() => setIsHover(true)}>
          <p>Links</p>
          {isHover && (
            <span className={styles.linksDropWrapper}>
              <span className={styles.linksDrop}>
                <span className={styles.dropDownArrowTwo}></span>
                <span>
                  <a href="https://github.com/BazyshynAnton" target="blank">
                    GitHub
                  </a>
                  <a>LinkedIn</a>
                  <a
                    href="https://leetcode.com/u/bazyshyn_anton/"
                    target="blank"
                  >
                    LeetCode
                  </a>
                </span>
              </span>
            </span>
          )}
        </div>
        <div onMouseEnter={() => setIsHover(false)}>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}
