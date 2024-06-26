import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface HeaderContextType {
  isDesktop: boolean
  setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderContext = createContext<HeaderContextType>({} as HeaderContextType)

// eslint-disable-next-line react-refresh/only-export-components
export const useHeaderContext = () => {
  const context = useContext(HeaderContext)

  return context
}

interface HeaderContextProviderProps {
  children: ReactNode
}

export const HeaderContextProvider = ({
  children,
}: HeaderContextProviderProps) => {
  if (!window.innerWidth) return

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const contextValue = {
    isDesktop,
    setIsDesktop,
    isOpen,
    setIsOpen,
  }

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  )
}
