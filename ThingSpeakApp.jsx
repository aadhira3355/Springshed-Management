import React, { useState, useEffect } from 'react';

const ThingSpeakApp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const readKey = 'ZB3226MPYQVK561F'; // Replace with your read key
      const url = `https://api.thingspeak.com/channels/2385009/feeds.json?results=2&api_key=${readKey}`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.feeds);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      {data && data.length > 0 && (
        <div>
          <h2>Latest Data:</h2>
          {Object.keys(data[0]).map((key) => (
            <p key={key}>
              {key}: {data[0][key]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};


export default ThingSpeakApp;
