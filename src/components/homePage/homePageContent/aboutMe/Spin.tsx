import { LazyLoadImage } from '../../../../utils/lazyImports'

import reactImg from '../../../../assets/pictures/react.png'

import styles from '../../../../styles/homePage/aboutMe/AboutMeWeb.module.css'

export default function Spin() {
  return (
    <div className={styles.spinReactImg}>
      <LazyLoadImage src={reactImg} alt="react-js" />
    </div>
  )
}
