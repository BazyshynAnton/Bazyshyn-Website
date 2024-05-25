import Header from '../components/header/Header'

import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  )
}
