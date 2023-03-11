import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { layDuLieuPhongInfo } from '../../../../redux/action/phongAction';
import { Icon } from '../../../../assets/icon/index';

export const InfoRoom = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(layDuLieuPhongInfo(id));
    }, [])

    const {roomInfo} = useSelector((state)=>state.phong);

    const renderMoreImage = () => {
        return <div className="h-full rounded-[10px] overflow-hidden bg-cover cursor-pointer" style={{backgroundImage: `url(${roomInfo.image})`}}>
            <div className="flex items-center justify-center h-full" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <span className="text-white">Xem tất cả</span>
            </div>
        </div>
    }

    const renderDanhGia = () => {
        let arr = [];
        for(let i = 0; i < roomInfo?.danhGia; i++) {
            arr.push({}); 
        }
        return arr.map((item, index)=> {
            return <Icon name="star" fill="#ffd902"/>
        })
    }


    return (
        <div className="flex justify-center pb-[60px] pt-[40px] flex-col items-center">
            <div className="flex justify-center items-center">
                <Icon name="building" color="3790c7"/>
                <h5 className="text-[#3790c7] text-[25px] ml-[20px] font-[500]">{roomInfo?.tenPhong}</h5>
            </div>
            <div className="w-full xl:w-[70%] 2xl:w-[60%] flex flex-col justify-between shadow-lg shadow-gray-300 rounded-[20px] p-[20px]">
                <div className="flex items-end justify-between py-[10px]">
                    <div>
                        <p className="font-bold text-[20px] mb-[10px]">{roomInfo?.tenPhong}</p>
                        <p className="flex translate-x-[-5px] mb-[5px]">{renderDanhGia()}</p>
                        <div className="flex items-center text-[gray] text-[14px] translate-x-[-5px]">
                            <Icon name="location"/>
                            <span className="ml-[5px]">{roomInfo?.diaChi}</span>
                        </div>
                        <div className="flex items-center translate-x-[-5px] mt-[5px] text-[18px]">
                            <Icon name="bank"/>
                            <span className="text-[#3790c7] font-500 mr-[20px] ml-[7px]">{(roomInfo?.giaThueNgay - (roomInfo?.giaThueNgay * roomInfo?.sale / 100))?.toLocaleString()}</span>
                            <span className={`${roomInfo?.sale > 0 && 'line-through'}`}>{roomInfo?.giaThueNgay?.toLocaleString()}</span>
                        </div>
                    </div>
                    <div>
                        <button className="flex items-center justify-center bg-[#3790c7] text-white py-[12px] px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]">Đặt phòng</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 grid-rows-4 w-full gap-[10px]">
                    <div class="col-span-3 row-span-4 rounded-[10px] overflow-hidden">
                        <img className="h-[300px] lg:h-[450px] w-full rounded-[10px] duration-500 hover:scale-105" src={roomInfo?.image}/>
                    </div>
                    {
                        renderMoreImage()
                    }
                </div>
            </div>
        </div>
    )
}
