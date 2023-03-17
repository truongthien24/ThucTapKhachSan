import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { layDuLieuPhongInfo } from '../../../../redux/action/phongAction';
import { Icon } from '../../../../assets/icon/index';
import { ModalBooking } from '../../component/modal/ModalBooking';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { setLoading } from '../../../../redux/action/homeAction';
import FsLightbox from "fslightbox-react";

export const InfoRoom = () => {

    const {id} = useParams();

    const [isBooking, setIsBooking] = useState(false);
    const [toggler, setToggler] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {t} = useTranslation();

    // let data = [];
    const [data, setData]= useState([]);

    useEffect(async()=> {
        // dispatch(layDuLieuPhongInfo(id));
        dispatch(setLoading({
            status: 'isLoading'
        }))
        const dataInfo = await layDuLieuPhongInfo(id);
        setData(dataInfo);
        dispatch(setLoading({
            status: 'done'
        }))
    }, [])

    // const {roomInfo} = useSelector((state)=>state.phong);

    const renderMoreImage = () => {
        return <div className="h-full rounded-[10px] overflow-hidden bg-cover cursor-pointer" style={{backgroundImage: `url(${data.image})`}}>
            <div className="flex items-center justify-center h-full" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} onClick={()=> {
                setToggler(!toggler);
                console.log('image', data.image);
            }}>
                <span className="text-white">{t('seeAll')}</span>
            </div>
        </div>
    }

    const renderDanhGia = () => {
        let arr = [];
        for(let i = 0; i < data?.danhGia; i++) {
            arr.push({}); 
        }
        return arr.map((item, index)=> {
            return <Icon name="star" fill="#ffd902"/>
        })
    }

    const handleBooking = () => {
        const jwt = localStorage.getItem('jwt');
        if(jwt) {
            setIsBooking(true);
        } else {
            Swal.fire({
                title: 'Cần đăng nhập trước khi đặt phòng !',
                icon: 'info',
                iconColor: '#3790c7',
                confirmButtonText: 'Đăng nhập',
                confirmButtonColor: '#3790c7'
            }).then((result) =>{
                if(result.isConfirmed) {
                    navigate('/user/login')
                }
            })
        }
    }

    return (
        <>
            <div className="flex justify-center pb-[60px] pt-[40px] flex-col items-center">
                <div className="flex justify-center items-center">
                    <Icon name="building" color="3790c7"/>
                    <h5 className="text-[#3790c7] text-[25px] ml-[20px] font-[500]">{data?.tenPhong}</h5>
                </div>
                <div className="w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] flex flex-col justify-between shadow-lg shadow-gray-300 rounded-[20px] p-[20px]">
                    <div className="flex items-end justify-between py-[10px]">
                        <div>
                            <p className="font-bold text-[20px] mb-[10px]">{data?.tenPhong}</p>
                            <p className="flex translate-x-[-5px] mb-[5px]">{renderDanhGia()}</p>
                            <div className="flex items-center text-[gray] text-[14px] translate-x-[-5px]">
                                <Icon name="location"/>
                                <span className="ml-[5px]">{data?.diaChi}</span>
                            </div>
                            <div className="flex items-center translate-x-[-5px] mt-[5px] text-[18px]">
                                <Icon name="bank"/>
                                <span className="text-[#3790c7] font-500 mr-[20px] ml-[7px]">{(data?.giaThueNgay - (data?.giaThueNgay * data?.sale / 100))?.toLocaleString()}</span>
                                <span className={`${data?.sale > 0 && 'line-through'}`}>{data?.giaThueNgay?.toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mb-[10px]">{data?.tinhTrang ? `${t('outOfRoom')}` : `${t('thereStillRoom')}`}</p>
                            <button className="flex items-center justify-center bg-[#3790c7] text-white py-[12px] px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]" onClick={handleBooking}>{t('booking')}</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-4 w-full gap-[10px]">
                        <div class="col-span-3 row-span-4 rounded-[10px] overflow-hidden">
                            <img className="h-[300px] lg:h-[450px] w-full rounded-[10px] duration-500 hover:scale-105" src={data?.image}/>
                        </div>
                        {
                            renderMoreImage()
                        }
                    </div>
                </div>
            </div> 
            <FsLightbox
				toggler={toggler}
				sources={[
                    <img src={data?.image}/>,
				]}
			/>
            {
                isBooking
                &&
                <ModalBooking data={data} setIsBooking={setIsBooking} idRoom={id}/>
            }
        </>

        
    )
}
