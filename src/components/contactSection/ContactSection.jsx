import { useState } from '../shared/utils/reactImports'

import ContactText from './contentOfContactSection/ContactText'

import styles from './ContactSection.module.css'
import LinksToContacts from './contentOfContactSection/LinksToContacts'
import EmailMessage from './contentOfContactSection/EmailMessage'

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="my-container">
      <div className={styles.containerOfContact} id="contact">
        <ContactText />
        <LinksToContacts showForm={showForm} handleShowForm={handleShowForm} />
        {showForm && <EmailMessage />}
      </div>
    </div>
  )
}

export default ContactSection
