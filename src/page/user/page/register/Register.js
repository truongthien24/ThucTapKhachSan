import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormBaseRegister } from '../../component/Form/FormBaseRegister';
import * as yup from 'yup';
import { Loading } from '../../../../component/Loading/Loading';
import { loginUser, registerUser } from '../../../../redux/action/accountAction';
import { useTranslation } from 'react-i18next';

export const Register = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    const initialValue = {
      userName: "",
      password: "",
    }

    const formField = [
      {
        name: "userName",
        type: "string"
      },
      {
        name: "password",
        type: "password"
      },
      {
        name: "confirmPassword",
        type: "password"
      },
      {
        name: "email",
        type: "email"
      },
    ]

    const validationSchema = yup.object().shape({
      userName: yup.string().required("Please input...."),
      password: yup.string().required("Please input...."),
      confirmPassword: yup.string().required("Please input....").oneOf([yup.ref('password')], "Password does not match"),
      email: yup.string().email('Please input abc@gmail...').required("Please input...")
  });

    // useEffect(()=> {
    //   if(window.location.pathname === "/user/login") {
    //     window.onclick = () => navigate("/user");
    //   }
    // })
    

    return (
      <>
        <div className='fixed top-0 left-0 w-screen h-screen bg-[white] z-10 flex flex-col lg:flex-row items-center lg:justify-center'>
            <div className='mr-[10px] my-[20px] flex justify-center lg:flex-1'>
              <img src="/images/fly.png" className='w-[200px] md:w-[250px] max-h-max'/>
            </div>
            <div className="lg:flex-1 w-full flex justify-center">
              <div 
                className='bg-[white] w-[85%] md:w-[70%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] rounded-[10px] px-[15px] lg:px-[30px] py-[20px]'
                style={{boxShadow: 'rgba(0, 0, 0, 0.26) 0px 5px 40px'}}
              >
                <div className='flex items-center justify-between mb-[20px] md:mb-[30px]'>
                  <h3 className='text-[20px] md:text-[25px] font-[500] text-[#3790c7]'>{t('register')}</h3>
                  <span className='text-[25px] md:text-[30px] font-[500] translate-y-[-5px] text-[#3790c7] cursor-pointer' onClick={()=> {
                    navigate('/user/login')
                  }}>&times;</span>
                </div>
                <div className='flex items-center justify-center'>
                  <FormBaseRegister 
                    initialValue={initialValue} 
                    formField={formField} 
                    validationSchema={validationSchema} 
                    methodSubmit={registerUser}
                  />
                </div>
              </div>
            </div>
        </div>
      </>
    )
}
