import DesktopHeaderList from "./components/DesktopHeaderList"
import DesktopHeaderDrop from "./components/DesktopHeaderDrop"

import styles from "styles/header/desktopHeader/DesktopHeader.module.css"

export default function DesktopHeader() {
  return (
    <div className={styles.desktopHeaderContainer}>
      <div className={styles.desktopHeaderContainer__content}>
        <div className={styles.desktopHeader}>
          <DesktopHeaderList />
          <DesktopHeaderDrop />
          <a href="#contact" className={styles.desktopHeader__contact}>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  )
}
