// SpringshedForm.js
import React, { useState } from 'react';

const SpringshedForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    elevation: '',
    precipitation: '',
    land_use: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    

    <form onSubmit={handleSubmit}>
      <label>
        Elevation:
        <input type="number" name="elevation" value={formData.elevation} onChange={handleChange} />
      </label>
      <br />
      <label>
        Precipitation:
        <input type="number" name="precipitation" value={formData.precipitation} onChange={handleChange} />
      </label>
      <br />
      <label>
        Land Use:
        <input type="number" name="land_use" value={formData.land_use} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Predict</button>
    </form>
  );
};

export default SpringshedForm;