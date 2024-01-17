import { useState } from '../../shared/utils/reactImports'
import { useRef } from 'react'

import emailjs from '@emailjs/browser'

import styles from '../ContactSection.module.css'

const EmailMessage = () => {
  const [loading, setLoading] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_l8kejw9',
        'template_d6owbp9',
        form.current,
        'uJe3e5825uwPWPzv6'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <form ref={form} onSubmit={sendEmail} className={styles.formEmail}>
      <div className={styles.nameEmailBlock}>
        <div>
          <label htmlFor="user_name">Your Name</label>
          <input id="user_name" type="text" name="user_name" />
        </div>
        <div>
          <label htmlFor="user_email">Your Email</label>
          <input id="user_email" type="email" name="user_email" />
        </div>
      </div>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      {loading ? (
        <button className={styles.buttonLoading}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      ) : (
        <input
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 2000)
          }}
          className={styles.buttonSubmit}
          type="submit"
          value="Send"
        />
      )}
    </form>
  )
}

export default EmailMessage
