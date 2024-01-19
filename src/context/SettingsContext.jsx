import {
  useState,
  createContext,
  useContext,
  useEffect,
} from '../components/shared/utils/reactImports'

const SettingsContext = createContext()

export const useSettingsContext = () => {
  const context = useContext(SettingsContext)

  return context
}

export const SettingsProvider = ({ children }) => {
  const [blinking, setBlinking] = useState(true)
  const [settings, setSettings] = useState(false)

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 480)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 480)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <SettingsContext.Provider
      value={{ blinking, setBlinking, settings, setSettings, isSmallScreen }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
