import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <nav>NavBar</nav>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default MainLayout
