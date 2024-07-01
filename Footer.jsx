// Footer.jsx

import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1890ff', // Customize the background color
    color: '#fff', // Customize the text color
    padding: '20px', // Add padding for better spacing
    textAlign: 'center', // Center align content
  };

  const linkStyle = {
    color: '#fff', // Customize link color
    marginRight: '10px', // Add margin between links
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
      <div>
        <a href="/documentation" style={linkStyle}>
          Documentation
        </a>
        <a href="/resources" style={linkStyle}>
          Resources
        </a>
        <a href="/contact" style={linkStyle}>
          Contact Us
        </a>
      </div>
      <div>
        <p>Email: scouts@gmail.com</p>
        <p>Phone: 9876543210 </p>
      </div>
    </footer>
  );
};

export default Footer;
