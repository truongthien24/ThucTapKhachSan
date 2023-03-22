import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';

export const AdminInfo = (props) => {

    const {data} = props;

    // State
    const [isActive, setIsActive] = useState(false);

    // Somethings
    const {t} = useTranslation();
    const navigate = useNavigate();

    // Method
    const handleClick = () => {
        setIsActive(!isActive);
    }

    const handleLogout = () => {
        localStorage.removeItem('jwtAdmin');
    }

    // Return
    return (
        <div className="ml-[30px] relative">
            <div className="flex items-center">
                <span>{'Admin'}</span>
                <img className='w-[60px] md:w-[60px] ml-[10px] cursor-pointer' src="https://i.seadn.io/gae/qJxeLyPWfxm-feoHxG7qB-ntOYFj1hW-zaH7ARQoEElPDdD5FyN0NDqMROtpLia33q4y-lUj0kmRlcGhESJsh7sd8hpMDqVbItAuyOs?auto=format&w=1000" onClick={handleClick}/>
            </div>
            {
                isActive
                &&
                <div className="absolute top-[105%] right-0 min-w-full h-[50px] bg-white shadow-lg shadow-gray-400 z-[100] rounded-[5px] px-[10px] flex items-center cursor-pointer" 
                onClick={handleLogout}>
                    <Icon name="logOut"/>
                    <span className="ml-[8px]">{t('logOut')}</span>
                </div>
            }
        </div>
    )
}
