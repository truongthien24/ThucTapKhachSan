import React, { useState } from 'react'

export const ChangeLanguage = () => {

    const [open, setOpen] = useState(false);

    const [lang, setLang] = useState({
        name: 'VN',
        image: '/images/vn.png',
    })

    const listLanguage = [
        {
            name: 'KR',
            value: 'kr',
            image: '/images/kr.png',
            method: () => {}
        },
        {
            name: 'US',
            value: 'us',
            image: '/images/us.png',
            method: () => {}
        },
        {
            name: 'VN',
            value: 'vn',
            image: '/images/vn.png',
            method: () => {}
        },
    ]

    // Method
    const renderListLanguage = () => {
        return listLanguage.map((item,index)=> {
            return <li className='flex items-center justify-between py-[7px] px-[8px] bg-[white] border-b-2 duration-200 last:border-b-0 hover:bg-[#8ecaed] cursor-pointer'>
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
                <ul className='absolute top-[110%] left-0 border-solid border-[#dadada] w-full border-[1px] rounded-[8px] overflow-hidden shadow-lg shadow-gray-200'>
                    {renderListLanguage()}
                </ul>
            }
        </div>
    )
}
