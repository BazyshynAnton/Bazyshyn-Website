import { GrMapLocation } from 'react-icons/gr'
import { MdOutlineEmail } from 'react-icons/md'

import styles from '../ContactSection.module.css'

const stylesForIcons = { fontSize: '2.2rem', color: '#147efb' }
const stylerForBorderLinks = {
  borderRadius: '50%',
  background: '#fff',
  padding: '0.8rem',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}
const LinksToContacts = ({ handleShowForm, showForm }) => {
  return (
    <div
      style={{
        paddingBottom: '2rem',
      }}
    >
      <div className={styles.linksToContactsContainer}>
        <div className={styles.myLocation}>
          <span style={stylerForBorderLinks}>
            <GrMapLocation style={stylesForIcons} />
          </span>
          <div>
            <h3>Location</h3>
            <p>Balakliya, Ukraine.</p>
          </div>
        </div>
        <div className={styles.myMail}>
          <span style={stylerForBorderLinks}>
            <MdOutlineEmail style={stylesForIcons} />
          </span>
          <div>
            <h3>Mail</h3>
            <a
              style={{ textDecoration: 'none' }}
              href="mailto:maybebazishin@gmail.com"
            >
              maybebazishin@gmail.com
            </a>
          </div>
        </div>
      </div>
      <p onClick={handleShowForm} className={styles.showFormButton}>
        {!showForm ? 'show' : 'hide'} form
      </p>
    </div>
  )
}

export default LinksToContacts
