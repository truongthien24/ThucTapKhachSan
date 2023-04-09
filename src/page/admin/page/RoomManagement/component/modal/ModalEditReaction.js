import { Modal, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react'

export const ModalEditReaction = (props) => {

    // Props
    const {title, isOpen, childrenForm, methodCancel} = props;

    // State
    const [isSkeleton, setIsSkeleton] = useState(false);

    useEffect(()=> {
        setIsSkeleton(true);
        setTimeout(()=> {
            setIsSkeleton(false);
        }, 500) 
    }, [])

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
