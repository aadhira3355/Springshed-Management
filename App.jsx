// App.jsx

import React, { useState } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MapDisplay from './components/MapDisplay';
import SidePanel from './components/SidePanel';
import CityDropdown from './components/Weather';
import WeatherComponent from './utilities/weatherService';
import Springshed from './components/Springshed';
import ThingSpeakApp from './components/ThingSpeakApp';
import SpringshedForm from './components/SpringshedForm';
import mapPlaceholderImage from './mag1.jpeg'; // Import the image for the map placeholder
import ModelForm from './components/ModelForm';

import './App.css';

const { Content } = Layout;

const App = () => {
  const [mapVisible, setMapVisible] = useState(false);
  const [sidePanelVisible, setSidePanelVisible] = useState(false);
  const [uploadedGeoJson, setUploadedGeoJson] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleMapClick = () => {
    setMapVisible(!mapVisible);
  };

  const handleAnalysisClick = () => {
    setSidePanelVisible(!sidePanelVisible);
  };

  const handleFileUpload = (geoJsonData) => {
    setUploadedGeoJson(geoJsonData);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <NavBar onMapClick={handleMapClick} onAnalysisClick={handleAnalysisClick} onFileUpload={handleFileUpload} />

      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div className="content-container">
              <div className={`map-container ${sidePanelVisible ? 'with-panel' : ''}`}>
                {mapVisible ? (
                  <MapDisplay geoJsonData={uploadedGeoJson} onClose={() => setMapVisible(false)} />
                ) : (
                  <img src={mapPlaceholderImage} alt="Map Placeholder" style={{ width: '100%', height: '100%' }} />
                )}
              </div>
              {sidePanelVisible && <SidePanel onClose={() => setSidePanelVisible(false)} />}
            </div>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Card title="Weather App" style={{ height: '500px', overflowY: 'auto', margin: '8px' }}>
              <CityDropdown onSelectCity={handleCitySelect} />
              {selectedCity && <WeatherComponent city={selectedCity} />}
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Card title="IoT Application" style={{ height: '500px', overflowY: 'auto', margin: '8px' }}>
              <ThingSpeakApp />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Prediction Card 1"  style={{ height: '400px', margin: '8px', overflowY: 'auto' }}>
                  {/* Add content for Prediction Card 1 here */}
                  <ModelForm />
                </Card>
              </Col>
              {/* <Col span={8}>
                <Card title="Prediction Card 2" style={{ height: '400px', margin: '8px' }}>
                  {}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Prediction Card 3" style={{ height: '400px', margin: '8px' }}>
                  {}
                </Card>
                </Col> */}
            </Row>
          </Col>
        </Row>
      </Content>

      <Footer />
    </Layout>
  );
};

export default App;
