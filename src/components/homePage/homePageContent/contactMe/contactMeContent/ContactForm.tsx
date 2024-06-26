import React, { useRef, useState } from 'react'

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

import styles from '../../../../../styles/homePage/contactMe/contactMeContent/ContactMeContent.module.css'

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false)

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formCurrent = form.current
    if (formCurrent === null) return

    setLoading(true)
    emailjs
      .sendForm(
        'service_l8kejw9',
        'template_d6owbp9',
        formCurrent,
        'uJe3e5825uwPWPzv6'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text)
          setLoading(false)
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text)
          setLoading(false)
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
        <input className={styles.buttonSubmit} type="submit" value="Send" />
      )}
    </form>
  )
}
