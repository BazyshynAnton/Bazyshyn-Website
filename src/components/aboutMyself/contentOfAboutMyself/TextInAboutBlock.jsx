import { useSettingsContext } from '../../../context/SettingsContext'
import TerminalTextBlock from '../../shared/reusableComponents/TerminalTextBlock'

import styles from '../AboutMyself.module.css'

const stylesForHint = {
  fontStyle: 'italic',
  color: '#4e505c',
}

const TextInAboutBlock = ({ hint, showAnimation }) => {
  const { isSmallScreen } = useSettingsContext()
  return (
    <div className={styles.containerText} id="animation-div">
      {!showAnimation ? (
        <h3>
          <TerminalTextBlock height={'22px'} text={''} />
        </h3>
      ) : (
        <>
          {isSmallScreen ? (
            <h3>
              <TerminalTextBlock
                text={'ABOUT ME'}
                height={'22px'}
                time={900}
                speed={50}
              />
            </h3>
          ) : (
            <h3>ABOUT ME</h3>
          )}
          {isSmallScreen ? (
            <>
              {hint ? (
                <>
                  <h4 style={stylesForHint}>
                    A React Front-end Developer with great enthusiasm from
                    Balakliya, Ukraine.
                  </h4>
                  <p style={stylesForHint}>
                    I present myself as an ambitious front-end developer ready
                    to contribute to your projects.
                    <br />I am prepared to contribute to your team, where
                    professionalism, collaborative work, and a commitment to
                    high-quality results are valued.
                  </p>
                </>
              ) : (
                <>
                  <h4>
                    A React Front-end Developer with great enthusiasm from
                    Balakliya, Ukraine.
                  </h4>
                  <p id="digital-minimalist">
                    I present myself as an ambitious front-end developer ready
                    to contribute to your projects.
                    <br />I am prepared to contribute to your team, where
                    professionalism, collaborative work, and a commitment to
                    high-quality results are valued.
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <h4>
                A React Front-end Developer with great enthusiasm from
                Balakliya, Ukraine.
              </h4>
              <p id="digital-minimalist">
                I present myself as an ambitious front-end developer ready to
                contribute to your projects.
                <br />I am prepared to contribute to your team, where
                professionalism, collaborative work, and a commitment to
                high-quality results are valued.
              </p>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default TextInAboutBlock
