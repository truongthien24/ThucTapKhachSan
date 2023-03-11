import React from 'react'
import { Outlet } from 'react-router-dom'
import { MenuUser } from '../component/MenuUser'
import { Footer } from '../component/Footer'

export const Layout1 = () => {
  return (
    <div>
      <MenuUser/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
