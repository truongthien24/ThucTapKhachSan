import React from 'react';
import { Avatar } from 'antd';
import { formateDate } from '../../../method/formatDate';
import { Icon } from '../../../assets/icon';

export const Reaction = (props) => {

    // Props
    const {data} = props;

    // Method
    const renderSoSao = () => {
        let arr = [];
        for(let i = 0; i < data?.soSao; i++) {
            arr.push({}); 
        }
        return arr.map((item, index)=> {
            return <Icon name="star" fill="#ffd902" font="small" key={index}/>
        })
    }

    // Return
    return (
        <div className="bg-[#f4f7f8] p-[10px] rounded-[15px]">
            <div className="flex items-start">
                <Avatar  size={40} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{data?.infoKhachHang?.userName?.toString().toUpperCase().charAt(0)}</Avatar>
                <div className="ml-[8px] h-max">
                    <h5 className="text-[11px] md:text-[13px] font-bold">{data?.infoKhachHang?.userName}</h5>
                    <p className="text-[10px] md:text-[12px]">{formateDate(data?.createAt?.seconds)}</p>
                </div>
                <div className="flex">
                    {renderSoSao()}
                </div>
            </div>
            <p className="bg-[#14557e] text-white rounded-[15px] py-[7px] px-[15px] mt-[8px] mx-[10px] text-[12px] md:text-[14px]">{data?.binhLuan}</p>
            {/* <span className="text-[10px] md:text-[12px] ml-[5px]">{formateDate(data?.createAt?.seconds)}</span> */}
        </div>
    )
}
