import React, { useState } from 'react';
import axios from 'axios';
// Inside your component
const labelStyle = {
  display: 'block',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  boxSizing: 'border-box',
};
function generateRandomOutput() {
  // Generate a random integer between 0 and 1 (both inclusive)
  const randomOutput = Math.round(Math.random());

  return randomOutput;
}

// Example usage
const randomResult = generateRandomOutput();
const ModelForm = () => {
  const [parameters, setParameters] = useState(Array(16).fill('')); // Changed to 15 as there are 15 water parameters
  const [predictionResult, setPredictionResult] = useState(null);

  // List of water parameters
  const waterParameters = [
    'Ground Water Level',
    'Electrical Conduction',
    'Total Dissolved Solid',
    'CO3',
    'HCO3',
    'Cl',
    'F',
    'NO3',
    'SO4',
    'Na',
    'K',
    'Ca',
    'Mg',
    'Total Hardness',
    'Sodium Absorption Ratio','pH'
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const input_data = parameters.reduce((acc, param, index) => {
      acc[`param${index + 1}`] = parseFloat(param);
      return acc;
    }, {});

    try {
      // Make API request to Flask backend
      const response = await axios.post('http://localhost:5000/predict', input_data, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      });

      // Assuming response.data.predicted_output contains the data
      var predictedOutputData = response.data.predicted_output;

      // Display the data in a single line within the HTML element
      var predictedOutputElement = document.getElementById('babu');
      predictedOutputElement.value = "" +  Math.round(predictedOutputData);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(input_data);
  };

  return (
    <div>
      
      <form onSubmit={handleFormSubmit}>
        {/* Input fields for 15 parameters */}
        {parameters.map((param, index) => (
          <div key={index}>
            <label style={labelStyle}>
              {waterParameters[index]} :
              <input style={inputStyle}
                type="text"
                value={param}
                onChange={(e) => {
                  const newParams = [...parameters];
                  newParams[index] = e.target.value;
                  setParameters(newParams);
                }}
              />
            </label>
          </div>
        ))}
        <button type="submit">Analyze</button><br />
        <label>Predicted Result : </label>
        <input type='text' id='babu' readOnly />
      </form>

      {/* Display prediction result */}
      {predictionResult !== null && (
        <div>
          <h4>Prediction Result:</h4>
          <p>Output: {predictionResult}</p>
        </div>
      )}
    </div>
  );
};

export default ModelForm;
