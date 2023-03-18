import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../../assets/icon';
import { InfoRoomSearch } from '../../shareComponent/InfoRoomSearch';
import { useDispatch } from 'react-redux';
import { layDuLieuPhongTheoParams } from '../../../../redux/action/phongAction';
import { setLoading } from '../../../../redux/action/homeAction';

export const MoreRoom = () => {

    // Somethings
    const [searchParams, setSearchParams] = useSearchParams();

    const {t} = useTranslation();
    const dispatch = useDispatch();

    // State
    const [dataRoom, setDataRoom] = useState([]);


    useEffect(async ()=> {
        const memberPar = searchParams.get('member');
        const priceFromPar = searchParams.get('priceFrom');
        const priceToPar = searchParams.get('priceTo');
        dispatch(setLoading({
            status: 'isLoading'
        })) 
        const data = await dispatch(layDuLieuPhongTheoParams({
            memberPar,
            priceFromPar,
            priceToPar
        }));
        setDataRoom(data);
        dispatch(setLoading({
            status: 'done'
        })) 
    }, [])

    // Method
    const renderRoomSearch = () => {
        return dataRoom?.map((item, index)=> {
            return <InfoRoomSearch key={index} data={item}/>
        })
    }

    // Return
    return (
        <>
            <div className="flex justify-center pb-[60px] pt-[40px] flex-col items-center">
                <div className="flex justify-center items-center">
                    <Icon name="building" color="3790c7"/>
                    <h5 className="text-[#3790c7] text-[25px] ml-[20px] font-[500]">{t('listRoom')}</h5>
                </div>
                <div className="w-[90%] md:w-[87%] xl:w-[85%] 2xl:w-[70%] grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 shadow-lg shadow-gray-300 rounded-[20px] p-[30px]">
                    {renderRoomSearch()}
                </div>
            </div>
        </>
    )
}
