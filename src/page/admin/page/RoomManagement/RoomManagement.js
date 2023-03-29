import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Confirm } from '../../../../component/Confirm/Confirm';
import { FormCreate } from '../../shareComponent/form/FormCreate';
import { FormUpdate } from '../../shareComponent/form/FormUpdate';
import { ModalCreate } from '../../shareComponent/modal/ModalCreate';
import { TableMain } from '../../shareComponent/table/TableMain'
import { useDispatch, useSelector } from 'react-redux';
import { layDuLieuPhong } from '../../../../redux/action/phongAction';
import { columns, getDataTable } from './helper';
import { ModalEditRoom } from './component/modal/ModalEditRoom';

export const RoomManagement = () => {

    // State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    // Somethings
    const {t} = useTranslation();
    const dispatch = useDispatch();

    // Effect
    useEffect(()=> {
      dispatch(layDuLieuPhong());
    }, [])

    const {listRoom} = useSelector(state => state.phong);

    console.log('listRoom', listRoom)

    const data = useMemo(()=> 
      getDataTable(listRoom)
    , [listRoom])

    // Method
    const handleAdd = () => {

    }

    const handleEdit = (data) => {
      setIsModalEditOpen(true);
    }

    const handleDelete = (data) => {

    }

    return (
      <>
        <div className="h-[12%] flex justify-between items-center">
            <h3 className="text-[20px] text-[#3790c7] font-bold">{t('Room Management')}</h3>
            <button className='flex items-center justify-center bg-[#3790c7] text-white py-[10px] px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]' type="submit" onClick={handleAdd}>{t('add')}</button>
          </div>
          <div className="h-[88%]">
              <TableMain data={data} columns={columns} handleEdit={handleEdit} handleDelete={handleDelete}/>
          </div>
          <ModalCreate
            methodCancel={()=>setIsModalOpen(false)}
            title={t('Create Account Management ')}
            isOpen={isModalOpen}
            childrenForm={
              // <FormCreate
              //   columns={ColumnsCreate} 
              //   methodCancel={()=>setIsModalOpen(false)} 
              //   methodSubmit={()=> {}}
              //   validationSchema={validationSchemaCreateUser}
              // />
              <></>
            }
          />
          <ModalEditRoom
            methodCancel={()=>setIsModalEditOpen(false)}
            title={t('Edit Account Management ')}
            isOpen={isModalEditOpen}
            childrenForm={
              // <FormUpdate
              //   columns={ColumnsEdit} 
              //   methodCancel={()=>setIsModalEditOpen(false)} 
              //   methodSubmit={()=>{}}
              //   validationSchema={validationSchemaCreateUser}
              //   dataEdit={dataEdit}
              // />
              // <>fdaffsaf</>
                <></>
            }
          />
          <Confirm/>
        </>
    )
}
