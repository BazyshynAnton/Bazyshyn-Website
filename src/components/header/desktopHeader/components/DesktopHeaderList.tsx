import { LazyLoadImage } from "utils/lazyImports"

import webDevIcon from "assets/pictures/icons/webDevIcon.png"

import styles from "styles/header/desktopHeader/DesktopHeader.module.css"

export default function DesktopHeaderList() {
  return (
    <ul className={styles.listContainer}>
      <div className={styles.listContainer__icon}>
        <LazyLoadImage src={webDevIcon} alt="header-icon" />
      </div>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
    </ul>
  )
}
