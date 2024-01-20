import {
  useEffect,
  useState,
  lazy,
  Suspense,
} from '../../shared/utils/reactImports'

import { IoMenu } from 'react-icons/io5'

import styles from '../Header.module.css'

const HeaderForSmallScreen = lazy(() => import('./HeaderForSmallScreen'))

const HeaderForBigScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 670)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 670)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className={styles.headerBigScreen}>
        <h3>
          <a href="#home">Bazyshyn.dev </a>
        </h3>
        {isDesktop ? (
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        ) : (
          <div
            onClick={() => {
              setIsOpen(true)
            }}
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
          >
            <IoMenu style={{ width: '100%', height: '100%' }} />
          </div>
        )}
      </div>

      {!isDesktop && (
        <Suspense>
          <HeaderForSmallScreen isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
        </Suspense>
      )}
    </>
  )
}

export default HeaderForBigScreen
