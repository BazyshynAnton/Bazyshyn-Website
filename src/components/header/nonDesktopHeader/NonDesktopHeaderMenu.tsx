import { useState } from 'react'

import { SiLeetcode, GrGithub, FaLinkedin } from '../../../utils/iconsImports'

import styles from '../../../styles/header/nonDesktopHeader/NonDesktopHeaderMenu.module.css'

export default function NonDesktopHeaderMenu() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={styles.nonDesktopHeaderMenuContainer}>
      <div className={styles.dropDownArrow}></div>
      <div className={styles.content} onMouseLeave={() => setIsHover(false)}>
        <a href="#home" onMouseEnter={() => setIsHover(false)}>
          Home
        </a>

        <a href="#home" onMouseEnter={() => setIsHover(false)}>
          Web-dev
        </a>

        <a href="#about" onMouseEnter={() => setIsHover(false)}>
          About
        </a>

        <a href="#portfolio" onMouseEnter={() => setIsHover(false)}>
          Portfolio
        </a>
        <div onMouseEnter={() => setIsHover(true)}>
          <p>Links</p>
          {isHover && (
            <span className={styles.linksDropWrapper}>
              <span className={styles.linksDrop}>
                <span className={styles.dropDownArrowTwo}></span>
                <span>
                  <a href="https://github.com/BazyshynAnton" target="blank">
                    GitHub <GrGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anton-bazyshyn-dev/"
                    target="blank"
                  >
                    LinkedIn <FaLinkedin />
                  </a>
                  <a
                    href="https://leetcode.com/u/bazyshyn_anton/"
                    target="blank"
                  >
                    LeetCode <SiLeetcode />
                  </a>
                </span>
              </span>
            </span>
          )}
        </div>
        <a
          href="#contact"
          onMouseEnter={() => setIsHover(false)}
          className={styles.contactLink}
        >
          Contact
        </a>
      </div>
    </div>
  )
}
