import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../../../firebase/firebase.config';
import { getAllUser, registerUser } from '../../../../redux/action/accountAction';
import { FormCreate } from '../../shareComponent/form/FormCreate';
import { ModalCreate } from '../../shareComponent/modal/ModalCreate';
import { TableMain } from '../../shareComponent/table/TableMain'
import { columns, ColumnsCreate, getDataTable, validationSchemaCreateUser } from './helper';

const AccountManagement = (props) => {

    // State
    const [isModalOpen, setIsModalOpen] = useState(false);

    // SomeThing
    const dispatch = useDispatch();

    const {t} = useTranslation();

    useEffect(()=> {
        dispatch(getAllUser());
    }, []);

    useEffect(()=> {
      onSnapshot(collection(db,'Account'), (snapShot) => {
        dispatch(getAllUser())
      });
    }, [])

    // API
    const {listUser} = useSelector(state=>state.account);

    // Method
    const handleAdd = () => {
      setIsModalOpen(true);
    }

    const data = useMemo(()=> 
      getDataTable(listUser)
    , [listUser]);

    // Render 
    return (
      <>
        <div className="h-[12%] flex justify-between items-center">
          <h3 className="text-[20px] text-[#3790c7] font-bold">{t('Account Management')}</h3>
          <button className='flex items-center justify-center bg-[#3790c7] text-white py-[10px] px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]' type="submit" onClick={handleAdd}>{t('add')}</button>
        </div>
        <div className="h-[88%]">
            <TableMain data={data} columns={columns}/>
        </div>
        <ModalCreate
          methodCancel={()=>setIsModalOpen(false)}
          title={t('Create Account Management ')}
          isOpen={isModalOpen}
          childrenForm={<FormCreate
            columns={ColumnsCreate} 
            methodCancel={()=>setIsModalOpen(false)} 
            methodSubmit={registerUser}
            validationSchema={validationSchemaCreateUser}
          />}
        />
      </>
    )
}

export default AccountManagement