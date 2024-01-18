import Swal from 'sweetalert2'

import { IoSettingsSharp } from 'react-icons/io5'

import styles from './SettingsWeb.module.css'

const SettingsWeb = () => {
  return (
    <div className={styles.settingsBlock}>
      <IoSettingsSharp />
    </div>
  )
}

export default SettingsWeb
