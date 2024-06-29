import { useHeaderContext } from '../../../context/header/HeaderContext'
import { LazyLoadImage } from '../../../utils/lazyImports'

import reactIco from '../../../assets/pictures/react.png'

import {
  SiLeetcode,
  GrGithub,
  FaLinkedin,
  IoLink,
  IoIosArrowDown,
} from '../../../utils/iconsImports'

import styles from '../../../styles/header/desktopHeader/DesktopHeader.module.css'

export default function DesktopHeader() {
  const { isOpen, setIsOpen } = useHeaderContext()
  return (
    <div className={styles.desktopHeaderContainer}>
      <div className={styles.desktopHeaderInContainer}>
        <div className={styles.desktopHeaderMainPart}>
          <ul className={styles.listContainer}>
            <div className={styles.headerIconContainer}>
              <LazyLoadImage src={reactIco} alt="header-icon" />
            </div>
            <a href="#home">Home</a>
            <a href="#home">Web-dev</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
          </ul>
          <div
            className={styles.otherLinksDrop}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <IoLink />
            <p>Links</p>
            <IoIosArrowDown />
            {isOpen && (
              <div className={styles.linksContainer}>
                <div className={styles.dropDownArrow}></div>
                <div className={styles.linksContent}>
                  <a href="https://github.com/BazyshynAnton" target="blank">
                    <div>
                      <p>GitHub</p>
                      <GrGithub />
                    </div>
                  </a>
                  <a
                    href="https://leetcode.com/u/bazyshyn_anton/"
                    target="blank"
                  >
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
            )}
          </div>
          <a href="#contact" className={styles.contactButton}>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  )
}
