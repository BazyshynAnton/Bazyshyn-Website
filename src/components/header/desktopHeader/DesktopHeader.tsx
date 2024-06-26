import styles from '../../../styles/header/desktopHeader/DesktopHeader.module.css'
import { SiLeetcode } from 'react-icons/si'
import { GrGithub } from 'react-icons/gr'

import reactIco from '../../../assets/pictures/react.png'

import LinkIcon from '@mui/icons-material/Link'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { useHeaderContext } from '../../../context/header/HeaderContext'

export default function DesktopHeader() {
  const { isOpen, setIsOpen } = useHeaderContext()
  return (
    <div className={styles.desktopHeaderContainer}>
      <div className={styles.desktopHeaderInContainer}>
        <div className={styles.desktopHeaderMainPart}>
          <ul className={styles.listContainer}>
            <div className={styles.gifIconContainer}>
              <img src={reactIco}></img>
            </div>
            <a href="#home">Home</a>
            <li>Web-Dev</li>
          </ul>
          <div
            className={styles.otherLinksDrop}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <LinkIcon />
            <p>Links</p>
            <KeyboardArrowDownRoundedIcon />
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
