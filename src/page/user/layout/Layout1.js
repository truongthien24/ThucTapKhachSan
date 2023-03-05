import React from 'react'
import { Outlet } from 'react-router-dom'
import { MenuUser } from '../component/MenuUser'

export const Layout1 = () => {
  return (
    <div>
        <MenuUser/>
        <Outlet/>
    </div>
  )
}
