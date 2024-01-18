import styles from '../Header.module.css'

const HeaderForBigScreen = () => {
  return (
    <div className={styles.headerBigScreen}>
      <h3>
        <a href="#home">Bazyshyn.dev </a>
      </h3>
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
    </div>
  )
}

export default HeaderForBigScreen
