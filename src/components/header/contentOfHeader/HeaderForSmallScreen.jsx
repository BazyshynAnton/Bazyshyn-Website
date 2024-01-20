import { useEffect } from '../../shared/utils/reactImports'
import { IoClose } from 'react-icons/io5'

import styles from '../Header.module.css'

const HeaderForSmallScreen = ({ setIsOpen, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.scrollbarWidth = 'none' // Firefox
      document.body.style.msOverflowStyle = 'none' // Edge
      document.body.style['&::-webkit-scrollbar'] = 'display: none' // WebKit
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.scrollbarWidth = 'auto' // Firefox
      document.body.style.msOverflowStyle = 'auto' // Edge
      document.body.style['&::-webkit-scrollbar'] = 'auto' // WebKit
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.scrollbarWidth = 'auto' // Firefox
      document.body.style.msOverflowStyle = 'auto' // Edge
      document.body.style['&::-webkit-scrollbar'] = 'auto' // WebKit
    }
  }, [isOpen])

  return (
    <div className={`${styles.smallScreenHeader} ${isOpen ? styles.open : ''}`}>
      <div onClick={() => setIsOpen(false)}>
        <IoClose />
      </div>
      <ul>
        <li>
          <a onClick={() => setIsOpen(false)} href="#home">
            Home
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="#about">
            About
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default HeaderForSmallScreen
