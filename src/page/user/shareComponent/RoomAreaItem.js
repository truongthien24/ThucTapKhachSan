import React from 'react'
import { Icon } from '../../../assets/icon';

export const RoomAreaItem = (props) => {

    //Props
    const {data, flag} = props;

    const renderDanhGia = () => {
        let arr = [];
        for(let i = 0; i < data.danhGia; i++) {
            arr.push({}); 
        }
        return arr.map((item, index)=> {
            return <Icon name="star" fill="#ffd902"/>
        })
    }

    return (
        <div className={`flex w-full shadow-lg shadow-gray-300 py-[20px] rounded-[20px] cursor-pointer mb-[35px]`}>
            <div className="w-[40%] flex justify-end">
                <div className={`w-[200px] lg:w-[300px] overflow-hidden ${flag % 2 != 0 ? 'rounded-tr-[60px] rounded-bl-[100px]' : 'rounded-tl-[60px] rounded-br-[100px]'}`}>
                    <img className="duration-500 hover:scale-105" src={data.image}/>
                </div>
            </div>
            <div className="px-[40px] w-[60%] flex flex-col justify-start h-full">
                <h5 className="font-bold text-[20px] mb-[7px]">{data.tenPhong}</h5>
                <div className="flex items-center justify-start mb-[15px] translate-x-[-2px]">
                    {renderDanhGia()}
                </div>
                <p>{data.dacDiemPhong}</p>
            </div>
        </div>
    )
}
