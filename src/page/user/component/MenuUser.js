import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChangeLanguage } from './ChangeLanguage'
import { ListMenu } from './ListMenu'
import { UserLogin } from './UserLogin'

export const MenuUser = () => {

  const navigate = useNavigate()

  const returnHome = () => {
    navigate('/user');
  }

  return (
    <div className='fixed top-0 left-0 z-[4] w-full bg-[white] px-[30px] py-[10px] md:py-[5px] 2xl:py-[20px] flex items-center justify-center shadow-lg shadow-gray-200'>
        <div className='w-full xl:w-[90%] 2xl:w-[70%] flex items-center justify-between'>
          <img src="/images/fly.png" className='w-[80px] md:w-[120px] lg:w-[150px] cursor-pointer' onClick={returnHome}/>
          <ListMenu/>
          <ChangeLanguage/>
          <UserLogin/>
        </div>
    </div>
  )
}
