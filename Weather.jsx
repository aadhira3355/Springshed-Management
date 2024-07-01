// CityDropdown.js
import React, { useState } from 'react';
import indianCities from '../data/indianCities';

const CityDropdown = ({ onSelectCity }) => {
  const [selectedState, setSelectedState] = useState('');
  const [cityList, setCityList] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCityList(indianCities[state] || []);
    onSelectCity('');
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    onSelectCity(selectedCity);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="stateDropdown">Select a state:</label>
      <select id="stateDropdown" onChange={handleStateChange}>
        <option value="">Select a state</option>
        {Object.keys(indianCities).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
<hr></hr>
      {selectedState && (
        <>
          <label htmlFor="cityDropdown">Select a city:</label>
          <select id="cityDropdown" onChange={handleCityChange}>
            <option value="">Select a city</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default CityDropdown;
