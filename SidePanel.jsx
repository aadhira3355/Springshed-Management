// AnalysisPanel.jsx

import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import FileUpload from './FileUpload'; // Import the FileUpload component

const AnalysisPanel = ({ onClose }) => {
  const [uploadedData, setUploadedData] = useState(null);

  const handleFileUpload = (data) => {
    // Perform any necessary data processing or validation
    setUploadedData(data);
    message.success('File uploaded successfully!');
  };

  return (
    <div className="side-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Analysis Panel</h2>
        <Button icon={<CloseOutlined />} onClick={onClose}>
        </Button>
      </div>

      {/* Use the FileUpload component to handle file input */}
      <FileUpload onFileUpload={handleFileUpload} />

      {/* Display the uploaded data on the map or perform analysis */}
      {uploadedData && (
        <div>
          <h3>Uploaded Data</h3>
          {/* You can display information about the uploaded data here */}
        </div>
      )}

      {/* Add any other content or components you need */}
    </div>
  );
};

export default AnalysisPanel;
