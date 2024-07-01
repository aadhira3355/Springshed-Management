// FileUpload.jsx

import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FileUpload = ({ onFileUpload }) => {
  const [fileList, setFileList] = useState([]);

  const customRequest = ({ file, onSuccess, onError }) => {
    // Handle the file upload logic here
    // For simplicity, we'll assume the uploaded file is a GeoJSON file
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        onFileUpload(data);
        setFileList([file]);
        onSuccess();
      } catch (error) {
        onError(error);
        message.error('Invalid file format. Please upload a valid GeoJSON file.');
      }
    };
    reader.readAsText(file);
  };

  const onRemove = () => {
    setFileList([]);
    // Additional logic to handle file removal, if needed
  };

  return (
    <Upload
      customRequest={customRequest}
      fileList={fileList}
      onRemove={onRemove}
      accept=".geojson"
      maxCount={1}
      showUploadList={{ showRemoveIcon: true }}
    >
      <Button icon={<UploadOutlined />}>Upload GeoJSON File</Button>
    </Upload>
  );
};

export default FileUpload;
