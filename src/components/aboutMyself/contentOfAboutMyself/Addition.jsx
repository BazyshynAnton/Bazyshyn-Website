import { useSettingsContext } from '../../../context/SettingsContext'
import styles from '../AboutMyself.module.css'

const stylesForHint = {
  fontStyle: 'italic',
  color: '#4e505c',
}

const Addition = ({ open, setOpen, hint }) => {
  const { isSmallScreen } = useSettingsContext()
  return (
    <>
      {hint ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isSmallScreen ? (
            <aside style={stylesForHint}>read more</aside>
          ) : (
            <aside onClick={() => setOpen(!open)}>
              {open ? 'hide text' : 'read more'}
            </aside>
          )}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <aside onClick={() => setOpen(!open)}>
            {open ? 'hide text' : 'read more'}
          </aside>
          {open && (
            <div className={styles.digitalMinimalist}>
              <h3>Why should you choose me?</h3>
              <p>
                In the digital era, when attention is scattered across the world
                of social networks and endless content,{' '}
                <b>I am a digital minimalist.</b> I focus on the essence of
                things, and it gives me the freedom that many have lost in the
                whirlwind of virtual reality. My day is not interrupted by
                constant notifications from social networks or other
                technologies but is filled with meaning through the development
                and improvement of skills. With the absence of unnecessary
                digital noise, I'm free to create, delve into projects, and
                build my career. My minimalistic digital ecosystem is not a
                void, but a fertile ground for development and personal growth.
                I am convinced that in this simplicity and absence of excess
                lies the key to efficiency and harmony in the digital era.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Addition
