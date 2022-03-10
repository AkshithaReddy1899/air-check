import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './components/Pages/HomePage';
import DetailsPage from './components/Pages/DetailsPage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/details" element={<DetailsPage />} />
  </Routes>
);

export default App;
