import styles from "styles/footer/Footer.module.css"

export default function Footer() {
  const DATE = new Date().getFullYear()
  return (
    <div className={styles.footerContainer}>
      <p>Bazyshyn.dev</p>
      <p>Copyright © {DATE} All rights are reserved.</p>
    </div>
  )
}
