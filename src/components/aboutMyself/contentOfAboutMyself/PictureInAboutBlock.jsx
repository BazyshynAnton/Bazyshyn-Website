import helloWorld01 from '../../../assets/pictures/helloWorld01.gif'
import helloWorld02 from '../../../assets/pictures/helloWorld02.gif'

import styles from '../AboutMyself.module.css'

const PictureInAboutBlock = ({ isHover }) => {
  return (
    <div className={styles.picrureBlock}>
      {isHover ? (
        <img src={helloWorld02} alt="computer" />
      ) : (
        <img src={helloWorld01} alt="computer" />
      )}
    </div>
  )
}

export default PictureInAboutBlock
