import NonDesktopHeaderMenu from "./components/NonDesktopHeaderMenu"

import { LazyLoadImage } from "utils/lazyImports"
import { useHeaderContext } from "context/header/HeaderContext"
import { IoMdMenu } from "utils/iconsImports"

import webDevIcon from "assets/pictures/icons/webDevIcon.png"

import styles from "styles/header/nonDesktopHeader/NonDesktopHeader.module.css"

export default function NonDesktopHeader() {
  const { isOpen, setIsOpen } = useHeaderContext()
  return (
    <div className={styles.nonDesktopHeaderContainer}>
      <div className={styles.nonDesktopHeaderContainer__content}>
        <div className={styles.imgContainer}>
          <LazyLoadImage src={webDevIcon} alt="reactIcon" />
        </div>
        <div
          className={styles.burgerIcon}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <IoMdMenu />
          {isOpen && <NonDesktopHeaderMenu />}
        </div>
      </div>
    </div>
  )
}
