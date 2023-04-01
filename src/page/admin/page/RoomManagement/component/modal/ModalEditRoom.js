import { Badge, Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { Icon } from '../../../../../../assets/icon';
import { UploadOutlined } from '@ant-design/icons';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from '../../../../../../firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { setConfirm } from '../../../../../../redux/action/homeAction';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { setGridColumn } from '../../helper';

export const ModalEditRoom = (props) => {

    // Props
    const {title, isOpen, childrenForm, methodSubmit, methodCancel, dataEdit} = props;


    // State
    const [image, setImage] = useState(null);

    const [file, setFile] = useState(null);

    const dispatch = useDispatch();

    const {t} = useTranslation();


    // Effect


    // Form 
    const APIEdit = [
        {
            name: 'tenPhong',
            type: 'sring',
            required: true,
        },
        {
            name: 'loaiPhong',
            type: 'select',
            dataSelect: [
                {
                    label: 'Normal',
                    value: 'normal'
                },
                {
                    label: 'VIP',
                    value: 'vip'
                },
            ],
            required: true,
        },
        {
            name: 'diaChi',
            type: 'string',
            required: true
        },
        {
            name: 'dacDiemPhong',
            type: 'string',
        },
        {
            name: 'soLuongPhong',
            type: 'array',
            dataArray: dataEdit?.soLuongPhong,
            dataItemName: 'soPhong',
            required: true,
            size: '3'
        }
    ]

    const validationSchema = yup.object().shape({
        tenPhong: yup.string().required('Please input'),
        diaChi: yup.string().required('Please input'),
    })

    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        reset, 
        watch,
        formState: {errors}
    } = useForm({
        method: 'onChange',
        resolver: yupResolver(validationSchema),
    })

    useEffect(() => {
        if(dataEdit) {
            setImage(dataEdit.image);
            setValue('image', dataEdit?.image);
            APIEdit.forEach(data=> setValue(`${data.name}`, dataEdit?.[data.name]));
        }
    }, [dataEdit])


    // Method
    const handleChangeImage = async (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e)=>{
            setFile(file);
            setImage(e.target.result);
            setValue('image', e.target.result);
        }
        // const storageRef = getStorage(app);
        // const testRef = ref(storageRef, `${file.name}`);
        // await uploadBytes(testRef, file).then((snapshot) => {
        //   console.log('Upload hình thành công!');
        // });
    }

    const submitForm = async () => {
        const storageRef = getStorage(app);
        const testRef = ref(storageRef, `${file.name}`);
        await uploadBytes(testRef, file).then(async(snapshot) => {
            const down = await getDownloadURL(testRef);
            setValue('image', down);
        });
        // await dispatch(updateRoom);  
    }

    const handleSubmitData = async () => {
        await dispatch(setConfirm({
            status: 'open',
            method: submitForm
        }))
    }


    const handleCancel = () => {
        methodCancel();
    };

    const renderInput = (item) => {
        if(item.type === 'select') {
            return <div className={`border-[1px] border-solid border-[#b4b4b4] rounded-[5px] px-[15px] py-[7px] relative ${errors?.[item.name]?.message ? 'border-orange-400' : ""}`}>
                <select className="w-full outline-none" {...register(`${item.name}`)}>
                    {
                        item.dataSelect?.map((op, index) => {
                            return <option value={op.value}>{op.label}</option>
                        })
                    }
                </select>
            </div> 
        } else if (item.type === 'textArea') {
            return  <textarea {...register(item.name)}/>
        } else if (item.type === 'array') { 
            return <div className="grid grid-cols-5 gap-[20px]">
                {
                    item.dataArray?.map((btn, index) => {
                        return <Badge.Ribbon color={`${btn?.tinhTrang ? 'orange' : 'green'}`} key={index}>
                            <button type="button" className={`w-full p-[10px] bg-[white] shadow-md shadow-gray-300 rounded-[5px] duration-200 hover:translate-x-[-3px] ${btn?.tinhTrang ? 'hover:shadow-orange-400' : 'hover:shadow-green-400'}`}>{btn?.[item.dataItemName]}</button>
                      </Badge.Ribbon>
                    })
                }
                <button type="button" className={`w-full p-[10px] bg-[white] shadow-md shadow-gray-300 rounded-[5px] duration-200 hover:translate-x-[-3px]`}>+</button>
            </div>
        } else {
            return <div className={`border-[1px] border-solid border-[#b4b4b4] rounded-[5px] px-[15px] py-[7px] relative ${errors?.[item.name]?.message ? 'border-orange-400' : ""}`}>
                <input 
                    // key={index} 
                    type={item.type} 
                    name={item.name}
                    placeholder={`Điền vào ${item.name}...`} 
                    className={`w-[92%] outline-none`}
                    {...register(`${item.name}`)}
                />
                {
                    errors?.[item.name] && <div className='absolute right-2 md:right-1 top-[50%] translate-y-[-50%]'>
                        <span className="hover-span">
                            <Icon color="#c80000" name="warning"/>
                        </span>
                        <span className='absolute right-[110%] top-0 bg-[white] w-[max-content] rounded-[20px] border-[1.5px] border-solid border-orange-400 text-orange-400 px-[10px] z-[2] hidden'>
                            {errors?.[item.name].message}
                        </span>
                    </div>
                }
            </div>
        }
    }

    return (
        <Modal title={title} open={isOpen} onCancel={handleCancel} footer={null} width={950}>
            {childrenForm}
            <form className="grid grid-cols-5 grid-row-3 gap-[30px] pt-[40px]" onSubmit={handleSubmit(handleSubmitData)}>
                <div className="col-span-2 w-full row-span-3">
                    <h5 className="mb-[7px] ml-[3px]">
                        Photo
                        <span className="text-[red]">*</span>
                    </h5>
                    <div className="rounded-[10px] border-solid border-[1px] border-[#cdcdcd] shadow-lg shadow-gray-400">
                        <div className="p-[10px] w-full">
                            <img src={image} className="md:h-[200px] lg:h-[250px] w-full rounded-[5px]"/>
                            {/* {renderImage} */}
                        </div>
                        <label className="w-full py-[10px] px-[20px] cursor-pointer bg-[#3790c7] block rounded-b-[10px]" htmlFor="imageRoom">
                            <UploadOutlined style={{color: 'white', fontWeight: 'bold', fontSize: '20px'}}/>
                        </label>
                        <input type="file" accept='image/png, image/jpg, image/jpeg' id="imageRoom" className="hidden z-[-1] " onChange={handleChangeImage}/>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-[20px] row-span-2">
                    {
                        APIEdit?.map((item, index) => {
                            return <div className={`${setGridColumn(item.size)}`} key={index}>
                                <h5 className="mb-[7px] ml-[3px]">
                                    {t(`${item.name}`)}
                                    {
                                        item.required
                                        &&
                                        <span className="text-[red]">*</span>
                                    }
                                </h5>
                                {renderInput(item)}
                            </div>
                        })
                    }
                </div>
                <div className="col-span-5 flex justify-end items-center mt-[50px]">
                    <button className='flex items-center justify-center bg-[white] py-[10px] px-[30px] rounded-[7px]' type="button" onClick={methodCancel}>{t('back')}</button>
                    <button className='flex items-center justify-center bg-[#3790c7] text-white py-[10px] px-[30px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]' type="submit">{t('save')}</button>
                </div>
            </form>
        </Modal>
    )
}
