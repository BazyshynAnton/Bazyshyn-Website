import { useSettingsContext } from '../../context/SettingsContext'

import styles from './SettingsWeb.module.css'

const SettingsBlock = () => {
  const { settings, setSettings, blinking, setBlinking } = useSettingsContext()

  return (
    <>
      {settings && (
        <>
          <div className={styles.settingsControl}>
            <h3>Settings</h3>
            <div>
              <p>cursor blinking</p>
              <input
                id="blinking"
                type="checkbox"
                className="switch"
                value={blinking}
                checked={blinking}
                onChange={() => setBlinking(!blinking)}
              />
            </div>
          </div>
          <div
            onClick={() => setSettings(false)}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: ' translate(-50%, -50%)',
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.3)',
              zIndex: '900',
            }}
          ></div>
        </>
      )}
    </>
  )
}

export default SettingsBlock
