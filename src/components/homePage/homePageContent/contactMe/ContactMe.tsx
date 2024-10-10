import ContactMeContent from "./contactMeContent/ContactMeContent"

import styles from "styles/homePage/HomePage.module.css"

export default function ContactMe() {
  return (
    <div id="contact" className={styles.contactMeHelperContainer}>
      <div className={styles.contactMe}>
        <ContactMeContent />
      </div>
    </div>
  )
}
