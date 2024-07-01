// WeatherComponent.js
import React, { useState, useEffect } from 'react';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data for the selected city from OpenWeatherMap or your preferred data source
    // Update the API endpoint with your actual API key and endpoint
    const apiKey = '074e2862567dc18046ca849e5713ca23';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      });
  }, [city]);

  if (!weatherData) {
    return <div className="weather-container">Loading...</div>;
  }

  const temperature = weatherData.main.temp;
  const description = weatherData.weather[0].description;

  return (
    <div className="weather-container">
      <h2>{`Weather in ${city}`}</h2>
      <p>{`Temperature: ${temperature}°C`}</p>
      <p>{`Description: ${description}`}</p>
    </div>
  );
};

export default WeatherComponent;
