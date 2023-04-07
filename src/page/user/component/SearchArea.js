import React, { useEffect } from 'react'
import { FormSearch } from './Form/FormSeach'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { layDuLieuKhuVuc } from '../../../redux/action/areaAction'
import { useTranslation } from 'react-i18next'

export const SearchArea = () => {

    // Somethings
    const dispatch = useDispatch();

    const {t} = useTranslation();

    useEffect(()=> {
      dispatch(layDuLieuKhuVuc());
    }, [])

    // API 
    const {listArea} = useSelector(state=>state.area);

    const initialValue = {
      soGiuong: 1,
      soNguoi: 2,
      priceTo: 20000,
      priceFrom: 50000,
    }

    const formField = [
      {
        name: "soGiuong",
        type: "input",
      },
      {
        name: "soNguoi",
        type: "input",
      },
      {
        name: "priceTo",
        type: "input",
      },
      {
        name: "priceFrom",
        type: "input",
      }
    ]

    const validationSchema = yup.object().shape({
      // userName: yup.string().required("Please input...."),
      // password: yup.string().required("Please input...."),
    });

    // Method

    return (
      <div className='w-full flex justify-center items-center mt-[10px]'>
          {/* <div className='w-[100%] flex justify-center py-[20px] bg-[#f7f7f7] rounded-t-[20px]'>
              <h3 className='text-[20px]'>Đặt phòng ở đây</h3>
          </div> */}
          <div className='w-[95%] lg:w-[80%] 2xl:w-[65%] flex flex-col items-center justify-center py-[20px]'>
            {/* <div className='flex items-center mb-[20px]'>
                <Icon name="search" color="3790c7"/>
                <h3 className='text-[25px] ml-[20px] text-[#3790c7] font-[500]'>Đặt phòng ở đây</h3>
            </div> */}
            <div className='w-full lg:w-[90%] xl:w-[90%] bg-[#f3f2f2] rounded-[15px] py-[20px] px-[15px] md:px-[30px] shadow-lg shadow-gray-200'>
              <FormSearch
                initialValue={initialValue} 
                formField={formField} 
                validationSchema={validationSchema} 
                // methodSubmit={
                  // Swal.fire({
                  //   icon: 'info',
                  //   title: `${t('FuncIsDev')}`,
                  //   confirmButtonColor: '#3790c7',
                  //   confirmButtonText: `${t('ok')}`,
                  //   timer: 2000,
                  //   timerProgressBar: true
                  // })
                //   handleSearch
                // }
              />
            </div>
          </div>
      </div>
    )
}
