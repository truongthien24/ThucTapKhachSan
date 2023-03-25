import React from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    MenuUnfoldOutlined,
    DesktopOutlined,
    MailOutlined
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }


export const Navigation = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    const navigate = useNavigate();

    const items = [
      getItem(<div onClick={()=> {
        navigate('/admin/dashboard')
      }}>Dashboard</div>, '1', <PieChartOutlined />),
      getItem(<div onClick={()=> {
        navigate('/admin/accountManagement')
      }}>Account Management</div>, '2', <DesktopOutlined />),
      getItem('Customer Management', '3', <ContainerOutlined />),
      getItem('Account Management', 'sub1', <MailOutlined />, [
        getItem('User Account', '5'),
        getItem('Employee Accout', '6'),
        // getItem('Option 7', '7'),
        // getItem('Option 8', '8'),
      ]),
      getItem('Booking', 'sub2', <MailOutlined />, [
        getItem('Check-ing request', '7'),
        getItem('Check-out request', '8'),
        // getItem('Option 7', '7'),
        // getItem('Option 8', '8'),
      ]),
      getItem('Room Management', '9', <ContainerOutlined />),
      getItem('Service Management', '10', <ContainerOutlined />),
      getItem('Revenue', 'sub3', <AppstoreOutlined />, [
        getItem('Invoices Management', '11'),
        getItem('Statistical Management', '12'),
        // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
      ]),
    ];

    return (
        <div
            className='admin__navigation bg-[#000B16] w-[256px] h-[calc(100vh-100px)]'
        >
            {/* <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
                marginBottom: 16,
            }}
            >
            { <MenuFoldOutlined />}
            </Button> */}
            <div className="flex items-center justify-center py-[20px]">
              <img src='/images/fly.png' className="w-[55%]"/>
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
        </div>
    )
}
