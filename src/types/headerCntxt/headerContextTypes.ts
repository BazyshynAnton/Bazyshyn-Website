import { React } from '../../utils/reactImports'

export interface headerContext {
  isDesktop: boolean
  setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
