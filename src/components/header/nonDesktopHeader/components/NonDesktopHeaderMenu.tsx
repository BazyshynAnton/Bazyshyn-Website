import { useState } from "utils/reactImports"

import styles from "styles/header/nonDesktopHeader/NonDesktopHeader.module.css"
import NonDesktopHeaderDrop from "./NonDesktopHeaderDrop"

export default function NonDesktopHeaderMenu() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={styles.menu}>
      <div className={styles.menu__arrow}></div>
      <div className={styles.content} onMouseLeave={() => setIsHover(false)}>
        <a href="#home" onMouseEnter={() => setIsHover(false)}>
          Home
        </a>

        <a href="#about" onMouseEnter={() => setIsHover(false)}>
          About
        </a>

        <a href="#portfolio" onMouseEnter={() => setIsHover(false)}>
          Portfolio
        </a>
        <div onMouseEnter={() => setIsHover(true)}>
          <p>Links</p>
          {isHover && <NonDesktopHeaderDrop />}
        </div>
        <a
          href="#contact"
          onMouseEnter={() => setIsHover(false)}
          className={styles.menu__contact}
        >
          Contact
        </a>
      </div>
    </div>
  )
}
