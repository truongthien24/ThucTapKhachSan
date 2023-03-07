import React from 'react'
import { Icon } from '../../../assets/icon'

export const SearchArea = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        {/* <div className='w-[100%] flex justify-center py-[20px] bg-[#f7f7f7] rounded-t-[20px]'>
            <h3 className='text-[20px]'>Đặt phòng ở đây</h3>
        </div> */}
        <div className='w-full md:w-[90%] lg:w-[80%] 2xl:w-[65%] flex items-center justify-center py-[20px]'>
          <div className='flex items-center'>
              <Icon name="search" color="3790c7"/>
              <h3 className='text-[25px] ml-[20px] text-[#3790c7] font-[500]'>Đặt phòng ở đây</h3>
          </div>
        </div>
    </div>
  )
}
