import React from 'react';
import { Layout} from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
    
    const headerStyle = {
    background: '#1890ff', 
    padding: '0 20px',
    };
    
     const logoStyle = {
    width: '60px', // Set the width of the logo
    height: '60px', // Set the height of the logo
    borderRadius: '50%', // Create a circular shape using border-radius
    overflow: 'hidden', // Ensure the image doesn't overflow the border-radius
    marginRight: '10px', // Add margin for spacing
    backgroundColor: '#fff', // Add a background color for contrast
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for depth
};
    
    return (
    <AntHeader style={headerStyle}>
      <div className="logo" style={logoStyle}>
        {/* Ant Design doesn't have a specific Logo component, you can add your logo here */}
        <img src="logo.png" alt="Project Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </AntHeader>
  );
};

export default Header;
