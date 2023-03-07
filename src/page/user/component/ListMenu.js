import React from 'react'
import { ButtonMenu } from '../shareComponent/ButtonMenu/ButtonMenu'

export const ListMenu = () => {

    const APIMenu = [
        {
            name: 'Về chúng tôi',
            icon: 'check',
            method: () => {
                alert('xin chào !')
            }
        },
        {
            name: 'Đặt phòng',
            icon: 'calendar',
            method: () => {
                alert('xin chào !')
            }
        },
        {
            name: 'Liên hệ',
            icon: 'phone',
            method: () => {
                alert('xin chào !')
            }
        },
    ]

    const renderMenu = () => {
        return APIMenu.map((item,index)=> {
            return <ButtonMenu data={item} key={index}/>
        })
    }

    return (
        <ul className='flex items-center justify-between'>
            {
                renderMenu()
            }
        </ul>
    )
}
