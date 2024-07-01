// NavBar.jsx

import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, GlobalOutlined, LineChartOutlined, DownloadOutlined, BarChartOutlined} from '@ant-design/icons';

const NavBar = ({ onMapClick, onAnalysisClick }) => {
  const navBarStyle = {
    background: '#fff',
    borderBottom: '1px solid #e8e8e8',
  };

  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home', link: '/' },
    { key: 'maps', icon: <GlobalOutlined />, label: 'Maps', onClick: onMapClick },
    { key: 'analysis', icon: <LineChartOutlined />, label: 'Analysis', onClick: onAnalysisClick },
    { key: 'downloads', icon: <DownloadOutlined />, label: 'Downloads', link: '/downloads' },
    { key: 'charts', icon: <BarChartOutlined />, label: 'Charts'}
  ];

  return (
    <Menu theme="light" mode="horizontal" style={navBarStyle} defaultSelectedKeys={['home']} selectedKeys={[]}>
      {menuItems.map(item => (
        <Menu.Item key={item.key} icon={item.icon} onClick={item.onClick}>
          <a href={item.link}>{item.label}</a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
