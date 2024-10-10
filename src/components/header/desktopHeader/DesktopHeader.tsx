import DesktopHeaderDrop from "./components/DesktopHeaderDrop"

import { LazyLoadImage } from "utils/lazyImports"

import webDevIcon from "assets/pictures/icons/webDevIcon.png"

import styles from "styles/header/desktopHeader/DesktopHeader.module.css"

export default function DesktopHeader() {
  return (
    <div className={styles.desktopHeaderContainer}>
      <div className={styles.desktopHeaderContainer__content}>
        <div className={styles.desktopHeader}>
          <ul className={styles.listContainer}>
            <div className={styles.listContainer__icon}>
              <LazyLoadImage src={webDevIcon} alt="header-icon" />
            </div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
          </ul>
          <DesktopHeaderDrop />
          <a href="#contact" className={styles.desktopHeader__contact}>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  )
}
