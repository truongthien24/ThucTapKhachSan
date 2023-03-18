import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from '../../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

export const FormSearch = (props) => {

    // Props
    const {formField, initialValue, validationSchema, methodSubmit} = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    // Form
    const {setValue, watch, formState: { errors }, handleSubmit, register, getValues} = useForm({
        mode: 'onChange',
        defaultValues: initialValue,
        // resolver: yupResolver(validationSchema),
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

    // const handleLogin = () => {
    //     dispatch(methodSubmit({data: watch()}));
    // }

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <>
            <form className='w-full flex' onSubmit={handleSubmit(methodSubmit)}>
                <div className='w-[60%]'>
                    {/* {renderInput()} */}
                </div>
                <div className='flex justify-end w-[50%] md:w-[40%]'>
                    <button className='flex items-center justify-center bg-[#3790c7] text-white py-[12px] px-[10px] md:px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]' type="submit">
                        <Icon name="search"/>
                        <span className='ml-[5px] md:ml-[10px] text-[13px] md:text-[16px]'>{t('findAHotel')}</span>
                    </button>
                </div>
            </form>
        </>
    )
}
