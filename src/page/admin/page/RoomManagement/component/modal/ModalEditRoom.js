import { Modal } from 'antd'
import React from 'react'

export const ModalEditRoom = (props) => {

    const {title, isOpen, childrenForm, methodSubmit, methodCancel} = props;

    const handleOk = () => {
        methodSubmit();
    };

    const handleCancel = () => {
        methodCancel()
    };


    return (
        <Modal title={title} open={isOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={700}>
            {childrenForm}
        </Modal>
    )
}
