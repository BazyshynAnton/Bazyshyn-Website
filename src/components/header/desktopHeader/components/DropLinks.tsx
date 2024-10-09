import { SiLeetcode, GrGithub, FaLinkedin } from "utils/iconsImports"

import styles from "styles/header/desktopHeader/DesktopHeader.module.css"

export default function DropLinks() {
  return (
    <div className={styles.drop__links}>
      <div className={styles.drop__links__arrow}></div>
      <div className={styles.drop__links__content}>
        <a href="https://github.com/BazyshynAnton" target="blank">
          <div>
            <p>GitHub</p>
            <GrGithub />
          </div>
        </a>
        <a href="https://leetcode.com/u/bazyshyn_anton/" target="blank">
          <div>
            <p>LeetCode</p>
            <SiLeetcode />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/anton-bazyshyn-dev/"
          target="blank"
        >
          <div>
            <p>LinkedIn</p>
            <FaLinkedin />
          </div>
        </a>
      </div>
    </div>
  )
}
