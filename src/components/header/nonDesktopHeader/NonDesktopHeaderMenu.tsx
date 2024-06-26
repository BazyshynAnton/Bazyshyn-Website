import styles from '../../../styles/header/nonDesktopHeader/NonDesktopHeaderMenu.module.css'

export default function NonDesktopHeaderMenu() {
  return (
    <div className={styles.nonDesktopHeaderMenuContainer}>
      <div className={styles.dropDownArrow}></div>
      <div className={styles.content}>
        <div>
          <p>Home</p>
        </div>
        <div>
          <p>Web-dev</p>
        </div>
        <div>
          <p>Links</p>
        </div>
        <div>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}
