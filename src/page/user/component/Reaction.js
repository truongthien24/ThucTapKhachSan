import React from 'react';
import { Avatar } from 'antd';
import { formateDate } from '../../../method/formatDate';

export const Reaction = (props) => {

    // Props
    const {data} = props;



    // Return
    return (
        <div className="bg-[#f4f7f8] p-[10px] rounded-[15px]">
            <div className="flex items-start">
                <Avatar  size={40} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>T</Avatar>
                <div className="ml-[8px] h-max">
                    <h5 className="text-[11px] md:text-[13px] font-bold">Trường Thiện</h5>
                    <p className="text-[10px] md:text-[12px]">{formateDate(data?.createAt?.seconds)}</p>
                </div>
            </div>
            <p className="bg-[#14557e] text-white rounded-[15px] py-[7px] px-[15px] mt-[8px] mx-[10px] text-[12px] md:text-[14px]">{data?.binhLuan}</p>
            {/* <span className="text-[10px] md:text-[12px] ml-[5px]">{formateDate(data?.createAt?.seconds)}</span> */}
        </div>
    )
}
