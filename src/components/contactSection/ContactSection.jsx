import ContactText from './contentOfContactSection/ContactText'

import styles from './ContactSection.module.css'
import EmailMessage from './contentOfContactSection/EmailMessage'

const ContactSection = () => {
  return (
    <div className="my-container">
      <div className={styles.containerOfContact}>
        <ContactText />
        <EmailMessage />
      </div>
    </div>
  )
}

export default ContactSection
