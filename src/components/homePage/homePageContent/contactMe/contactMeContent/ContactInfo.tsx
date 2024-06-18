import MapIcon from '@mui/icons-material/Map'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { ReactElement } from 'react'

import styles from '../../../../../styles/homePage/contactMe/contactMeContent/ContactMeContent.module.css'

const stylesForIcons = { fontSize: '2.2rem', color: '#147efb' }

export default function ContactInfo() {
  return (
    <div className={styles.contactContainer}>
      <Info
        children={<MapIcon style={stylesForIcons} />}
        infoName={'Location'}
        infoText={'Balakliya, Ukraine.'}
        linkTo={''}
      />

      <Info
        children={<EmailOutlinedIcon style={stylesForIcons} />}
        infoName={'Mail'}
        infoText={'bazyshyn.anton@gmail.com'}
        linkTo={''}
      />

      <Info
        children={<LinkedInIcon style={stylesForIcons} />}
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
