import React, {useEffect} from 'react'
import { Icon } from '../../../assets/icon'
import { useDispatch, useSelector } from 'react-redux';
import { layDuLieuPhong } from '../../../redux/action/phongAction';
import {RoomAreaItem} from '../shareComponent/RoomAreaItem';

export const ListRoomArea = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(layDuLieuPhong())
    }, [])

    const {listRoom} = useSelector(state=>state.phong);
    
    // Method
    const renderRoom = () => {
        return listRoom.map((item, index) => {
            if(index < 3) {
                return <RoomAreaItem data={item} key={index} flag={index}/>
            }
        })
    }

    return (
        <div className='w-full flex justify-center items-center'>
            {/* <div className='w-[100%] flex justify-center py-[20px] bg-[#f7f7f7] rounded-t-[20px]'>
                <h3 className='text-[20px]'>Đặt phòng ở đây</h3>
            </div> */}
            <div className='w-full md:w-[90%] lg:w-[80%] 2xl:w-[65%] flex flex-col items-center justify-center py-[20px]'>
                <div className='flex items-center mb-[20px]'>
                    <Icon name="building" color="3790c7"/>
                    <h3 className='text-[25px] ml-[20px] text-[#3790c7] font-[500]'>Danh sách phòng</h3>
                </div>
                <div className='w-full pt-[20px] pb-[5px] px-[30px]'>
                    {
                        renderRoom()
                    }
                </div>
                <div className="text-[#3790c7]">
                    <div className="cursor-pointer flex items-center text-[15px]">
                        <Icon name="more"/>
                        <span className="ml-[10px]">Xem thêm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
