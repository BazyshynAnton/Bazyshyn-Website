import styles from '../../styles/homePage/HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <div className={styles.homePageBackground}></div>
      <div className="main-container">
        <div className={styles.introduceHelperContainer}>
          <div className={styles.introduceContainer}></div>
        </div>
        <div className={styles.introduceContainer}></div>
      </div>
    </>
  )
}
