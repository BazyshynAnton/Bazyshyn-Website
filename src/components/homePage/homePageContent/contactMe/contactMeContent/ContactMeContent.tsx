import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

import styles from "styles/homePage/contactMe/contactMeContent/ContactMeContent.module.css"

export default function ContactMeContent() {
  return (
    <>
      <div className={styles.contactMe__header}>
        <h3>Contact</h3>
      </div>
      <div className={styles.contactMe__content}>
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  )
}
