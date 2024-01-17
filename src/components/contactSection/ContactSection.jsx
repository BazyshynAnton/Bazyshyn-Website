import ContactText from './contentOfContactSection/ContactText'

import styles from './ContactSection.module.css'
import EmailMessage from './contentOfContactSection/EmailMessage'
import LinksToContacts from './contentOfContactSection/LinksToContacts'
import { useState } from 'react'

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="my-container">
      <div className={styles.containerOfContact}>
        <ContactText />
        <LinksToContacts showForm={showForm} handleShowForm={handleShowForm} />
        {showForm && <EmailMessage />}
      </div>
    </div>
  )
}

export default ContactSection
