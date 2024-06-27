import { IoMdMap } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

import { ReactElement } from 'react'

import styles from '../../../../../styles/homePage/contactMe/contactMeContent/ContactMeContent.module.css'

const stylesForIcons = { fontSize: '2.2rem', color: '#147efb' }

export default function ContactInfo() {
  return (
    <div className={styles.contactContainer}>
      <Info
        children={<IoMdMap style={stylesForIcons} />}
        infoName={'Location'}
        infoText={'Balakliya, Ukraine.'}
        linkTo={''}
      />

      <Info
        children={<MdOutlineEmail style={stylesForIcons} />}
        infoName={'Mail'}
        infoText={'bazyshyn.anton@gmail.com'}
        linkTo={''}
      />

      <Info
        children={<FaLinkedin style={stylesForIcons} />}
        infoName={'LinkedIn'}
        infoText={'Anton Bazyshyn'}
        linkTo={'https://www.linkedin.com/in/anton-bazyshyn-dev/'}
      />
    </div>
  )
}

function Info({
  children,
  infoName,
  infoText,
  linkTo,
}: {
  children: ReactElement
  infoName: string
  infoText: string
  linkTo: string
}) {
  return (
    <>
      {linkTo ? (
        <div className={styles.myInfo}>
          <span className={styles.myInfoIcons}>{children}</span>
          <a href={linkTo} target="blank">
            <div>
              <h3>{infoName}</h3>
              <p>{infoText}</p>
            </div>
          </a>
        </div>
      ) : (
        <div className={styles.myInfo}>
          <span className={styles.myInfoIcons}>{children}</span>
          <div>
            <h3>{infoName}</h3>
            <p>{infoText}</p>
          </div>
        </div>
      )}
    </>
  )
}
