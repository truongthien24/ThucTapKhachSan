import React from 'react'
import { ButtonMenu } from '../shareComponent/ButtonMenu/ButtonMenu'

export const ListMenu = () => {

    const APIMenu = [
        {
            name: 'Về chúng tôi',
            method: () => {
                alert('xin chào !')
            }
        },
        {
            name: 'Đặt phòng',
            method: () => {
                alert('xin chào !')
            }
        },
        {
            name: 'Liên hệ',
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
