import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './App.css';

import Pickzone from './pickzone/components/Pickzone';
import PickZoneDetail from './pickzone/components/PickzoneDetail';
// import LoginMainComponent from './main/components/LoginMainComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pickzone/:personalId' element={<PickZoneDetail />} />
        <Route path='/pickzone' element={<Pickzone />} />
      </Routes>
    </Router>
  );
}

export default App;