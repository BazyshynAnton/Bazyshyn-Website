import DropLinks from "./DropLinks"

import { useHeaderContext } from "context/header/HeaderContext"

import { IoLink, IoIosArrowDown } from "utils/iconsImports"

import styles from "styles/header/desktopHeader/DesktopHeader.module.css"

export default function DesktopHeaderDrop() {
  const { isOpen, setIsOpen } = useHeaderContext()

  return (
    <div
      className={styles.drop}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <IoLink />
      <p>Links</p>
      <IoIosArrowDown />
      {isOpen && <DropLinks />}
    </div>
  )
}
