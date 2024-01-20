import {
  LazyLoadImage,
  useEffect,
  useState,
} from '../../shared/utils/reactImports'

import helloWorld01 from '../../../assets/pictures/helloWorld01.gif'
import helloWorld02 from '../../../assets/pictures/helloWorld02.gif'

import styles from '../AboutMyself.module.css'

const PictureInAboutBlock = ({ isHover }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 917)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 917)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.pictureBlock}>
      {isSmallScreen ? (
        <>
          {isHover ? (
            <LazyLoadImage src={helloWorld02} alt="computer" />
          ) : (
            <LazyLoadImage src={helloWorld01} alt="computer" />
          )}
        </>
      ) : (
        <LazyLoadImage src={helloWorld02} alt="computer" />
      )}
    </div>
  )
}

export default PictureInAboutBlock
