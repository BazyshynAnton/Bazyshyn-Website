import { useSettingsContext } from '../../context/SettingsContext'
import { IoSettingsSharp } from 'react-icons/io5'

import styles from './SettingsWeb.module.css'

const SettingsWeb = () => {
  const { settings, setSettings, isSmallScreen } = useSettingsContext()

  return (
    <>
      {isSmallScreen && (
        <div
          className={styles.settingsBlock}
          onClick={() => setSettings(!settings)}
        >
          <IoSettingsSharp />
        </div>
      )}
    </>
  )
}

export default SettingsWeb
