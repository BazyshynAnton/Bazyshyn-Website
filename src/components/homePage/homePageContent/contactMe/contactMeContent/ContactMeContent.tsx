import ContactInfo from './ContactInfo'

import styles from '../../../../../styles/homePage/contactMe/contactMeContent/ContactMeContent.module.css'

export default function ContactMeContent() {
  return (
    <>
      <div className={styles.contactMeHeader}>
        <h3>Contact</h3>
      </div>
      <div className={styles.contentContainer}>
        <ContactInfo />
      </div>
    </>
  )
}
// Add contact form!
