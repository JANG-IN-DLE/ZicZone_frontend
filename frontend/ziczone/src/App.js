import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './App.css';

import Pickzone from './pickzone/components/Pickzone';
import PickZoneDetail from './pickzone/components/PickzoneDetail';
// import LoginMainComponent from './main/components/LoginMainComponent';
import ChargeMain from './payment/components/ChargeMain';

function App() {
  return (
    <ChargeMain/>
  );
}

export default App;