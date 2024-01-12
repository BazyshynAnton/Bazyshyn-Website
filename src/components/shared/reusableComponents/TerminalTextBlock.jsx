import { useEffect, useState } from '../utils/reactImports'

import Typed from 'react-typed'

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
      <Typed strings={[text]} typeSpeed={speed} showCursor={false} />
      {isBlinkingCursor ? (
        <span style={{ height: height }} className={styles.cursor} />
      ) : (
        <span style={{ height: height }} className={styles.notBlinkingCursor} />
      )}
    </>
  )
}

export default TerminalTextBlock
