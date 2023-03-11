import React from 'react'
import { ButtonMenu } from '../shareComponent/ButtonMenu/ButtonMenu'
import { useTranslation } from 'react-i18next';

export const ListMenu = () => {

    const {t} = useTranslation();

    const APIMenu = [
        {
            name: `${t('aboutUs')}`,
            icon: 'check',
            method: () => {
                alert('xin chào !')
            }
        },
        {
            name: `${t('booking')}`,
            icon: 'calendar',
            method: () => {
                alert('xin chào !')
            }
        },
        {
            name: `${t('contact')}`,
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
