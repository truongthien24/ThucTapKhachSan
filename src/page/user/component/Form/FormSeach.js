import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from '../../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export const FormSearch = (props) => {

    // Props
    const {formField, initialValue, validationSchema, methodSubmit} = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form
    const {setValue, watch, formState: { errors }, handleSubmit, register, getValues} = useForm({
        mode: 'onChange',
        defaultValues: initialValue,
        resolver: yupResolver(validationSchema),
    });

    const renderInputType = (item, index) => {
        if(item.type==='string') {
            return (
                <div className='mt-[20px]'>
                    <h5 className='mb-[7px] text-[17px]'>* {item.name}:</h5>
                    <div className={`border-[1px] border-solid border-[#b4b4b4] rounded-[5px] px-[15px] py-[7px] relative ${errors?.[item.name]?.message ? 'border-orange-400' : ""}`}>
                        <input 
                            key={index} 
                            type={item.type} 
                            name={item.name}
                            placeholder={`Điền vào ${item.name}...`} 
                            className={`w-[95%] outline-none bg-transparent`}
                            {...register(`${item.name}`)}
                        />
                        {
                            errors?.[item.name] && <div className='absolute right-2 md:right-4 top-[50%] translate-y-[-50%]'>
                                <span className="hover-span">
                                    <Icon color="#c80000" name="warning"/>
                                </span>
                                <span className='absolute right-[110%] top-0 bg-[white] w-[max-content] rounded-[20px] border-[1.5px] border-solid border-orange-400 text-orange-400 px-[10px] z-[2] hidden'>{errors?.[item.name].message}</span>
                            </div>
                        }
                                    {/* <span className='absolute right-[110%] top-0 bg-[white] w-[max-content] rounded-[20px] border-[1.5px] border-solid border-[#c80000] text-[#c80000] px-[10px] z-[2] hidden'>{errors?.[item.name]?.message}</span> */}
                    </div>
                </div>
            )
        } 
        else if (item.type === "select") {
            return (
                <div className='mt-[20px]'>
                    <h5 className='mb-[7px] text-[17px]'>* {item.name}:</h5>
                    {/* <div className={`border-[1px] border-solid border-[#b4b4b4] rounded-[5px] px-[15px] py-[7px] relative ${errors?.[item.name]?.message ? 'border-orange-400' : ""}`}>
                        <input 
                            key={index} 
                            type={item.type} 
                            name={item.name}
                            placeholder={`Điền vào ${item.name}...`} 
                            className={`w-[95%] outline-none bg-transparent`}
                            {...register(`${item.name}`)}
                        />
                        {
                            errors?.[item.name] && <div className='absolute right-2 md:right-4 top-[50%] translate-y-[-50%]'>
                                <span className="hover-span">
                                    <Icon color="#c80000" name="warning"/>
                                </span>
                                <span className='absolute right-[110%] top-0 bg-[white] w-[max-content] rounded-[20px] border-[1.5px] border-solid border-orange-400 text-orange-400 px-[10px] z-[2] hidden'>{errors?.[item.name].message}</span>
                            </div>
                        }
                    </div> */}
                    {/* <select>
                        {
                            renderSelect(item)
                        }
                    </select> */}
                    <div className=''>

                    </div>
                </div>
            )
        }
    }

    // const renderSelect = (item) => {
    //     return item.dataSelect.map((option,index) => {
    //         return <option value={option?.[item.nameSelect]} name={item.name} {...register(`${item.name}`)}>{option?.[item.nameShow]}</option>
    //     })
    // }

    const renderInput = () => {
        return formField.map((item, index)=> {
            return renderInputType(item, index)
        })
    }

    const handleLogin = () => {
        dispatch(methodSubmit({data: watch()}));
    }

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <>
            <form className='w-full grid grid-cols-2 gap-[20px]' onSubmit={handleSubmit(handleLogin)}>
                <div className=''>
                    {renderInput()}
                </div>
                {/* <div className='w-[80%] mt-[10px] flex justify-between items-center'>
                    <span className='text-orange-400 cursor-pointer hover:underline'
                        onClick={
                            ()=> {
                                Swal.fire({
                                    icon: 'info',
                                    iconColor: '#3790c7',
                                    title: 'Chức năng đang phát triển!',
                                    timer: 2000,
                                    timerProgressBar: true,
                                    confirmButtonColor: '#3790c7',
                                    // didOpen: () => {
                                    //     Swal.showLoading()
                                    //     const b = Swal.getHtmlContainer().querySelector('b')
                                    //     timerInterval = setInterval(() => {
                                    //     b.textContent = Swal.getTimerLeft()
                                    //     }, 100)
                                    // },
                                    // willClose: () => {
                                    //     clearInterval(timerInterval)
                                    // }
                                })
                            }
                        }
                    >Quên mật khẩu? </span>
                    <span className='text-[#3790c7] font-[500] cursor-pointer hover:underline'
                        onClick={
                            ()=> {
                                Swal.fire({
                                    icon: 'info',
                                    iconColor: '#3790c7',
                                    title: 'Chức năng đang phát triển!',
                                    timer: 2000,
                                    timerProgressBar: true,
                                    confirmButtonColor: '#3790c7',
                                    // didOpen: () => {
                                    //     Swal.showLoading()
                                    //     const b = Swal.getHtmlContainer().querySelector('b')
                                    //     timerInterval = setInterval(() => {
                                    //     b.textContent = Swal.getTimerLeft()
                                    //     }, 100)
                                    // },
                                    // willClose: () => {
                                    //     clearInterval(timerInterval)
                                    // }
                                })
                            }
                        }
                    >Chưa có tài khoản </span>
                </div> */}
                <div className='flex items-end'>
                    {/* <button className='flex items-center justify-center bg-[white] py-[12px] rounded-[7px]' type="button" onClick={handleCancel}>Hủy bỏ</button> */}
                    <button className='flex items-center justify-center bg-[#3790c7] text-white py-[12px] px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]' type="submit">
                        <Icon name="search"/>
                        <span className='ml-[10px]'>Tìm khách sạn</span>
                    </button>
                </div>
            </form>
        </>
    )
}
