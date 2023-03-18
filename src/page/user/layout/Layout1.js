import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { MenuUser } from '../component/MenuUser'
import { Footer } from '../component/Footer'
import { ScrollToTop } from '../component/ScrollToTop'

export const Layout1 = () => {

  const pathname = window.location.pathname;

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname])

  return (
    <div>
      <MenuUser/>
      <div className="pt-[75px] min-h-screen flex flex-col justify-between">
        <Outlet/>
        <Footer/>
      </div>
      <ScrollToTop/>
    </div>
  )
}
