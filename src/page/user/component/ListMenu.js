import React from 'react'
import { ButtonMenu } from '../shareComponent/ButtonMenu/ButtonMenu'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../redux/action/homeAction';
import Swal from 'sweetalert2';

export const ListMenu = () => {

    const {t} = useTranslation();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const APIMenu = [
        {
            name: `${t('aboutUs')}`,
            icon: 'check',
            method: () => {
                Swal.fire({
                    icon: 'info',
                    title: `${t('FuncIsDev')}`,
                    confirmButtonColor: '#3790c7',
                    confirmButtonText: `${t('ok')}`,
                    timer: 2000,
                    timerProgressBar: true
                  })
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
                const jwt = localStorage.getItem('jwt');
                if(jwt) {
                    navigate('bookingSchedule');
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: `${t('youAreNotLoggedIn')}`,
                        timer: 1500,
                        timerProgressBar: true,
                        confirmButtonText: `${t('ok')}`,
                        confirmButtonColor: '#3790c7'
                    })
                }
            }
        },
        {
            name: `${t('service')}`,
            icon: 'service',
            method: () => {
                // Swal.fire({
                //     icon: 'info',
                //     title: `${t('FuncIsDev')}`,
                //     confirmButtonColor: '#3790c7',
                //     confirmButtonText: `${t('ok')}`,
                //     timer: 2000,
                //     timerProgressBar: true
                //   })
                navigate('service');
            }
        },
        {
            name: `${t('contact')}`,
            icon: 'phone',
            method: () => {
                Swal.fire({
                    icon: 'info',
                    title: `${t('FuncIsDev')}`,
                    confirmButtonColor: '#3790c7',
                    confirmButtonText: `${t('ok')}`,
                    timer: 2000,
                    timerProgressBar: true
                  })
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
