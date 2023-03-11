import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import i18n from '../../../assets/i18n/i18n';
import { setLoading } from '../../../redux/action/homeAction';

export const ChangeLanguage = () => {

    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState({
        name: 'VN',
        image: '/images/vn.png',
    })

    const dispatch = useDispatch();

    const handleMethod = (data) => {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        localStorage.setItem('language', data.value);
        i18n.changeLanguage(data.value)
        setTimeout(()=> {
            setLang(data)
            setOpen(false);
            dispatch(setLoading({
                status: 'done'
            }))
        }, 500)   
    }

    const listLanguage = [
        {
            name: 'KR',
            value: 'kr',
            image: '/images/kr.png',
            method: () => {
                handleMethod({
                    name: 'KR',
                    value: 'kr',
                    image: '/images/kr.png',
                })
            }
        },
        {
            name: 'EN',
            value: 'en',
            image: '/images/us.png',
            method: () => {
                handleMethod({
                    name: 'EN',
                    value: 'en',
                    image: '/images/us.png',
                })
            }
        },
        {
            name: 'VN',
            value: 'vn',
            image: '/images/vn.png',
            method: () => {
                handleMethod({
                    name: 'VN',
                    value: 'vn',
                    image: '/images/vn.png',
                })
            }
        },
    ]

    // Method
    const renderListLanguage = () => {
        return listLanguage.map((item,index)=> {
            return <li className='flex items-center justify-between py-[7px] px-[8px] bg-[white] border-b-2 duration-200 last:border-b-0 hover:bg-[#8ecaed] cursor-pointer' onClick={item.method}>
                <img src={item.image} className="w-[25px]"/>
                <span>{item.name}</span>
            </li>
        })
    }

    return (
        <div className='relative'>
            <button 
                className='flex items-center justify-between border-solid border-[#dadada] border-[1px] rounded-[8px] px-[8px] py-[5px]' 
                onClick={()=> {
                    setOpen(!open);
                }}>
                <img className="w-[25px] mr-[10px]" src={lang.image}/>
                <span>{lang.name}</span>
            </button>
            {
                open
                &&
                <ul className='absolute top-[110%] left-0 border-solid border-[#dadada] w-full border-[1px] rounded-[8px] overflow-hidden shadow-lg shadow-gray-200 z-10'>
                    {renderListLanguage()}
                </ul>
            }
        </div>
    )
}
