import { Modal, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { layDuLieuDanhGiaPhong } from '../../../../../../redux/action/danhGiaAction';

export const ModalEditReaction = (props) => {

    // Props
    const {title, isOpen, childrenForm, methodCancel, idRoom} = props;

    // State
    const [isSkeleton, setIsSkeleton] = useState(false);

    const dispatch = useDispatch();

    useEffect(async()=> {
        setIsSkeleton(true);
        setTimeout(()=> {
            setIsSkeleton(false);
        }, 500) 
        const res = await dispatch(layDuLieuDanhGiaPhong(idRoom));

        console.log('res', res);
    }, [idRoom])

    // Return
    return (
        <Modal title={title} open={isOpen} onCancel={methodCancel} footer={null} width={950}>
            {childrenForm}

            {
                isSkeleton
                ?
                <Skeleton />
                :
                <div></div>
            }
        </Modal>
    )
}
