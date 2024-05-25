import { Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import HomePage from './components/homePage/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
