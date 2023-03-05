import React from 'react'

export const ButtonMenu = (props) => {

    // Props
    const {data} = props;

    // Method
    const handleClick = () => {
        data.method();
    }

    return (
        <button className={`w-[100px] h-[50px] rounded-[10px] flex items-center justify-center duration-200 hover:text-[#3790c7] hover:font-[500]`} onClick={handleClick}>
            <span className='font-[400]'>
                {data.name}
            </span>
        </button>
    )
}
