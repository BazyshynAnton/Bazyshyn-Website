import MapIcon from '@mui/icons-material/Map'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
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
      />

      <Info
        children={<EmailOutlinedIcon style={stylesForIcons} />}
        infoName={'Mail'}
        infoText={'bazyshyn.anton@gmail.com'}
      />
    </div>
  )
}

function Info({
  children,
  infoName,
  infoText,
}: {
  children: ReactElement
  infoName: string
  infoText: string
}) {
  return (
    <div className={styles.myInfo}>
      <span className={styles.myInfoIcons}>{children}</span>
      <div>
        <h3>{infoName}</h3>
        <p>{infoText}</p>
      </div>
    </div>
  )
}
