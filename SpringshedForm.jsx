import React, { useState } from 'react';
import axios from 'axios';

const SpringshedForm = () => {
  const [elevation, setElevation] = useState('');
  const [precipitation, setPrecipitation] = useState('');
  const [landUse, setLandUse] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newSpringshedData = {
      elevation: parseFloat(elevation),
      precipitation: parseFloat(precipitation),
      landUse: parseInt(landUse),
    };

    try {
      // Make API request to Flask backend
      const response = await axios.post('http://localhost:5000/predict', newSpringshedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response
      setPredictionResult(response.data.predicted_viability);
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received. Request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* Input fields for elevation, precipitation, land use, etc. */}
        {/* ... (your existing input fields) */}
        <button type="submit">Submit</button>
      </form>

      {/* Display prediction result */}
      {predictionResult !== null && (
        <div>
          <h2>Prediction Result:</h2>
          <p>Viability: {predictionResult}</p>
        </div>
      )}
    </div>
  );
};

export default SpringshedForm;
