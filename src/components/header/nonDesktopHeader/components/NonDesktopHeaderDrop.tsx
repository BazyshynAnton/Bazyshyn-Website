import { SiLeetcode, GrGithub, FaLinkedin } from "utils/iconsImports"

import styles from "styles/header/nonDesktopHeader/NonDesktopHeader.module.css"

export default function NonDesktopHeaderDrop() {
  return (
    <span className={styles.linksDropContainer}>
      <span className={styles.linksDrop}>
        <span className={styles.linksDrop__arrow}></span>
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
          <a href="https://leetcode.com/u/bazyshyn_anton/" target="blank">
            LeetCode <SiLeetcode />
          </a>
        </span>
      </span>
    </span>
  )
}
