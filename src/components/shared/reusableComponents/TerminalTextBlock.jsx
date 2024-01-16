import { useEffect, useState } from '../utils/reactImports'

import { TypeAnimation } from 'react-type-animation'

import styles from '../../introductorySection/IntroductorySection.module.css'

const TerminalTextBlock = ({ text, height, time, speed }) => {
  const [isBlinkingCursor, setIsBlinkingCursor] = useState(false)

  const changeCursor = () => {
    setIsBlinkingCursor(true)
  }

  useEffect(() => {
    setTimeout(changeCursor, time)
  }, [isBlinkingCursor, time])

  return (
    <>
      <span style={{ color: '#16a085' }}>{'➜  ~'}</span>{' '}
      <TypeAnimation
        key={text}
        sequence={[text]}
        speed={speed}
        cursor={false}
      />
      {isBlinkingCursor ? (
        <span style={{ height: height }} className={styles.cursor} />
      ) : (
        <span style={{ height: height }} className={styles.notBlinkingCursor} />
      )}
    </>
  )
}

export default TerminalTextBlock
