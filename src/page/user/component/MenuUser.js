import React from 'react'
import { ListMenu } from './ListMenu'

export const MenuUser = () => {
  return (
    <div className='w-full bg-[white] px-[30px] py-[10px] md:py-[10px] 2xl:py-[20px] flex items-center justify-between'>
        <img src="/images/fly.png" className='w-[80px] md:w-[120px] lg:w-[150px]'/>
        <ListMenu/>
        <div>
            
        </div>
    </div>
  )
}
