import styles from '../../../styles/header/desktopHeader/DesktopHeader.module.css'
import gifIcon1 from '../../../assets/pictures/helloWorld01.gif'
import reactIco from '../../../assets/pictures/react.png'

import LinkIcon from '@mui/icons-material/Link'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

export default function DesktopHeader() {
  return (
    <div className={styles.desktopHeaderContainer}>
      <div className={styles.desktopHeaderInContainer}>
        <div className={styles.desktopHeaderMainPart}>
          <ul className={styles.listContainer}>
            <div className={styles.gifIconContainer}>
              <img src={reactIco}></img>
            </div>
            <li>Home</li>
            <li>Web-Dev</li>
          </ul>
          <div className={styles.otherLinksDrop}>
            <LinkIcon />
            <p>Links</p>
            <KeyboardArrowDownRoundedIcon />
          </div>
          <div className={styles.contactButton}>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}
