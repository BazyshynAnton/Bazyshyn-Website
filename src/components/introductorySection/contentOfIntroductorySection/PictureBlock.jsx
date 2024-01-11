import mainPhoto from '../../../assets/pictures/mainPhoto.png'

import styles from '../IntroductorySection.module.css'

const PictureBlock = () => {
  return (
    <div className={styles.pictureBlockContainer}>
      <img
        style={{ objectFit: 'cover' }}
        src={mainPhoto}
        alt="Bazyshyn Anton"
      />
    </div>
  )
}

export default PictureBlock
