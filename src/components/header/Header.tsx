import { lazy, Suspense } from "react"

import { useHeaderContext } from "context/header/HeaderContext"

const DesktopHeader = lazy(() => import("./desktopHeader/DesktopHeader"))
const NonDesktopHeader = lazy(
  () => import("./nonDesktopHeader/NonDesktopHeader")
)

export default function Header() {
  const { isDesktop } = useHeaderContext()
  return (
    <>
      {isDesktop ? (
        <Suspense>
          <DesktopHeader />
        </Suspense>
      ) : (
        <Suspense>
          <NonDesktopHeader />
        </Suspense>
      )}
    </>
  )
}
