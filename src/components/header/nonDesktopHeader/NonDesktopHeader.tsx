import MenuIcon from '@mui/icons-material/Menu'
import reactIco from '../../../assets/pictures/react.png'
import { useHeaderContext } from '../../../context/header/HeaderContext'

import styles from '../../../styles/header/nonDesktopHeader/NonDesktopHeader.module.css'
import NonDesktopHeaderMenu from './NonDesktopHeaderMenu'

export default function NonDesktopHeader() {
  const { isOpen, setIsOpen } = useHeaderContext()
  return (
    <div className={styles.desktopHeaderContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={reactIco} alt="reactIcon" />
        </div>
        <div
          className={styles.burgerIcon}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <MenuIcon />
          {isOpen && <NonDesktopHeaderMenu />}
        </div>
      </div>
    </div>
  )
}
