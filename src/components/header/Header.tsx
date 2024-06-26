import DesktopHeader from './desktopHeader/DesktopHeader'
import NonDesktopHeader from './nonDesktopHeader/NonDesktopHeader'

import { useHeaderContext } from '../../context/header/HeaderContext'

// import styles from '../../styles/header/Header.module.css'

export default function Header() {
  const { isDesktop } = useHeaderContext()
  return <>{isDesktop ? <DesktopHeader /> : <NonDesktopHeader />}</>
}
