import styles from '../../../../styles/homePage/HomePage.module.css'
import ContactMeContent from './contactMeContent/ContactMeContent'

export default function ContactMe() {
  return (
    <div id="contact" className={styles.contactMeHelperContainer}>
      <div className={styles.contactMeContainer}>
        <ContactMeContent />
      </div>
    </div>
  )
}
