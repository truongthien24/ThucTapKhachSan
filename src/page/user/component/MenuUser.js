import React from 'react'
import { ChangeLanguage } from './ChangeLanguage'
import { ListMenu } from './ListMenu'
import { UserLogin } from './UserLogin'

export const MenuUser = () => {
  return (
    <div className='w-full bg-[white] px-[30px] py-[10px] md:py-[5px] 2xl:py-[20px] flex items-center justify-center shadow-lg shadow-gray-200'>
        <div className='w-full xl:w-[80%] 2xl:w-[65%] flex items-center justify-between'>
          <img src="/images/fly.png" className='w-[80px] md:w-[120px] lg:w-[150px]'/>
          <ListMenu/>
          <ChangeLanguage/>
          <UserLogin/>
        </div>
    </div>
  )
}
