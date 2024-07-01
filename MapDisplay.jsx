// MapDisplay.jsx

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapDisplay = ({ onClose, geoJsonData }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map && geoJsonData) {
      // Clear existing GeoJSON layers (optional, depends on your use case)
      map.eachLayer((layer) => {
        if (layer instanceof GeoJSON) {
          map.removeLayer(layer);
        }
      });

      // Add new GeoJSON layer
      const geoJsonLayer = new GeoJSON(geoJsonData);
      geoJsonLayer.addTo(map);
    }
  }, [map, geoJsonData]);

  const handleMapClick = (event) => {
    // You can handle the map click event here
    console.log('Map clicked at:', event.latlng);
  };

  return (
    <div>
      <MapContainer
        center={[20.5937, 78.9629]} // Set a default center for India
        zoom={5} // Set a default zoom level
        style={{ height: '400px', width: '100%' }}
        onClick={() => onClose && onClose()}
        whenCreated={setMap}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
