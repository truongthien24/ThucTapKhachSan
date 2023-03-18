import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const UserLogin = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    const userLogin = localStorage.getItem('jwt');

    return (
        <div>
            {
                userLogin
                ? 
                <div className='flex items-center'>
                    <span 
                        className='cursor-pointer'
                        onClick={()=> {
                            // navigate('/user/login')
                            localStorage.removeItem("jwt");
                            window.location.reload();
                    }}>
                        {t('logOut')}
                    </span>
                    <img className='w-[50px] h-[50px] rounded-[50%] ml-[10px] object-cover' src="https://img5.thuthuatphanmem.vn/uploads/2022/01/12/anh-tokuda-dep-nhat_101702809.jpg"/>
                </div>
                :
                <div className='flex items-center'>
                    <span 
                        className='cursor-pointer'
                        onClick={()=> {
                            navigate('/user/login')
                        }}
                    >{t('login')}</span>
                    <img className='w-[60px] md:w-[60px] ml-[10px]' src="https://i.seadn.io/gae/qJxeLyPWfxm-feoHxG7qB-ntOYFj1hW-zaH7ARQoEElPDdD5FyN0NDqMROtpLia33q4y-lUj0kmRlcGhESJsh7sd8hpMDqVbItAuyOs?auto=format&w=1000"/>
                </div>
            }
        </div>
    )
}
