import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';
import airApi from './api/airApi';

const App = () => {
  console.log('OM');
  airApi();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;
