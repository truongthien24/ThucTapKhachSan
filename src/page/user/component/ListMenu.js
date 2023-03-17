import React from 'react'
import { ButtonMenu } from '../shareComponent/ButtonMenu/ButtonMenu'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../redux/action/homeAction';

export const ListMenu = () => {

    const {t} = useTranslation();

    const navigate = useNavigate();

    const dispatch = useDispatch();

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
                // alert('xin chào !')
                // dispatch(setLoading({
                //     status: 'isLoading',
                // }))
                // setTimeout(()=> {
                //     dispatch(setLoading({
                //         status: 'done',
                //     }))
                //     navigate('bookingSchedule');
                // }, 1300)    
                navigate('bookingSchedule');
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
