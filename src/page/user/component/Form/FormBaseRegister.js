import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from '../../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

export const FormBaseRegister = (props) => {

    // Props
    const {formField, initialValue, validationSchema, methodSubmit} = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    // Form
    // React hook form
    const {setValue, watch, formState: { errors }, handleSubmit, register, getValues, reset} = useForm({
        mode: 'onChange',  //Cách thức kiểm tra
        defaultValues: initialValue, //Giá trị khởi tạo
        resolver: yupResolver(validationSchema),  //Kiểm tra tính hợp lệ
    });

    const renderInput = () => {
        // ES6 javascript để render từ một mảng sang mảng khác
        return formField.map((item, index)=> {
            return (
                <div className='w-[90%] lg:w-[80%] mt-[20px]'>
                    <h5 className='mb-[7px] text-[17px]'>* {item.name}:</h5>
                    <div className={`border-[1px] border-solid border-[#b4b4b4] rounded-[5px] px-[15px] py-[7px] relative ${errors?.[item.name]?.message ? 'border-orange-400' : ""}`}>
                        <input 
                            key={index} 
                            type={item.type} 
                            name={item.name}
                            placeholder={`Điền vào ${item.name}...`} 
                            className={`w-[95%] outline-none`}
                            {...register(`${item.name}`)}  //Đăng ký field vào form
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
        })
    }

    const handleLogin = async () => {
        // Watch() => Xuất ra tất cả các field và value của form
        const res = await dispatch(methodSubmit({data: watch()}));
        if(res) {
            setTimeout(()=> {
                reset()
            }, 1500)
        }
    }

    const handleCancel = () => {
        // Trả về trang trước đó 
        navigate(-1)
    }

    return (
        <>
            <form className='w-full flex flex-col justify-between items-center' onSubmit={handleSubmit(handleLogin)}>
                {renderInput()}
                <div className='w-[90%] lg:w-[80%] mt-[40px] xl:mt-[70px] grid grid-cols-2 gap-3'>
                    <button className='flex items-center justify-center bg-[white] py-[12px] rounded-[7px]' type="button" onClick={handleCancel}>{t('back')}</button>
                    <button className='flex items-center justify-center bg-[#3790c7] text-white py-[12px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]' type="submit">{t('register')}</button>
                </div>
            </form>
        </>
    )
}
