import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './App.css';

import Pickzone from './pickzone/components/Pickzone';
import PickZoneDetail from './pickzone/components/PickzoneDetail';

import NoLoginMainComponent from './main/components/NoLoginMainComponent';
import Header from './common/header/components/Header';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<NoLoginMainComponent />} />
        <Route path="/pickzone" element={<Pickzone />} />
      </Routes>
    </Router>
    </
  );
}

export default App;