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
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];

export const Navigation = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    return (
        <div
            className='admin__navigation'
            style={{
                width: 256,
                height: '100vh'
            }}
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
