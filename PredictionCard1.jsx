import React, { useState } from 'react';
import SpringshedForm from './SpringshedForm';
import { Card } from 'antd';
import { Axios } from 'axios';

const PredictionCard1 = () => {
    const [formData, setFormData] = useState({});
    const [prediction, setPrediction] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Make an API call using Axios to Flask endpoint
        console.log('Before Axios request');
        const response = await Axios.post('http://localhost:5000/run_magnesium_model', formData);
  
        // Set the prediction in the state
        setPrediction(response.data.predicted_viability);
      } catch (error) {
        console.error('Error:', error);
        console.error('Axios request failed:', error);
      }
    };
  
    // Render the form and prediction content
  
    return (
      <Card title="Prediction Card 1" style={{ height: '400px', margin: '8px' }}>
        <SpringshedForm onSubmit={handleSubmit} onChange={(data) => setFormData(data)} />
        {prediction !== null && <p>Predicted Viability: {prediction}</p>}
        {/* Add content for Prediction Card 1 here */}
      </Card>
    );
  };
  
  export default PredictionCard1;
  