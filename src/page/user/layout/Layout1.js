import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { MenuUser } from '../component/MenuUser'
import { Footer } from '../component/Footer'
import { ScrollToTop } from '../component/ScrollToTop'
import { useDispatch } from 'react-redux'
import { getUser } from '../../../redux/action/accountAction'

export const Layout1 = () => {

  const pathname = window.location.pathname;

  const dispatch = useDispatch();

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname])

  useEffect(()=> {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    dispatch(getUser(jwt));
  }, []);

  return (
    <div className='user bg-[#fcfcfc]'>
      <MenuUser/>
      <div className="pt-[70px] md:pt-[60px] lg:pt-[75px] min-h-screen flex flex-col justify-between">
        <Outlet/>
        <Footer/>
      </div>
      <ScrollToTop/>
    </div>
  )
}
