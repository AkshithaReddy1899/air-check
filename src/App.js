import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/details" element={<DetailsPage />} />
  </Routes>
);

export default App;
