import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Resume from './resume/components/Resume';
import ResumeView from "./resume/components/ResumeView"

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import UserPickzone from './pickzone/components/UserPickzone';
import CompanyPickzone from './pickzone/components/CompanyPickzone';
// import PickZoneDetail from './pickzone/components/PickzoneDetail';
import PickzoneCompanyDetail from './pickzone/components/PickzoneCompanyDetail';
import PickZoneUserDetail from './pickzone/components/PickzoneUserDetail';
import Footer from './common/footer/components/Footer'
// import Pickzone from './pickzone/components/Pickzone';
import ChargeMain from './payment/components/ChargeMain';
import MainComponent from './main/components/MainComponent';
import Header from './common/header/components/Header';
import ListBoard from './helpzone/components/ListBoard';
import CUBoard from "./helpzone/components/CUBoard";
import RDBoard from "./helpzone/components/RDBoard";
import CompanyzoneMain from './companyzone/components/CompanyzoneMain';
import Loginpage from './login/components/LoginPage';
import JoinSelect from './join/components/JoinSelect';
import IntroMain from './intro/components/IntroMain';
import JoinCom from './join/components/Join_Com'
import JoinPer from './join/components/Join_Per'
import Mypage from './mypage/components/MypageUser';
import MainPickCard from './main/components/MainPickCard'



function App() {
  const [ userType, setUserType ] = useState(null);

  useEffect(() => {
    setUserType(localStorage.getItem("userRole"));
  }, []);

  // if(userType === null) {
  //   return <div>Loading...</div>
  // }

  return (

//   <div>
  //   <Router>
  //   <Routes>
  //     <Route path='/pickzone/:companyId/:personalId' element={<PickzoneCompanyDetail />} />
  //     {/* <Route path='/pickzone/:loggedInPersonalId/:personalId' element={<PickZoneUserDetail />} /> */}
  //     {/* <Route path='/pickzone/:personalId' element={userType === 'COMPANY' ? <PickzoneCompanyDetail /> : <PickzoneUserDtail />} /> */}
  //     <Route path='/pickzone' element={<CompanyPickzone />} />
  //     {/* <Route path='/pickzone' element={<UserPickzone />} /> */}
  //     {/* <Route path='/pickzone' element={userType === 'COMPANY' ? <CompanyPickzone /> : <UserPickzone />} /> */}
  //   </Routes>
  // </Router>
  //   </div>
<div>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/pickzone' element={userType === 'COMPANY' ? <CompanyPickzone /> : <UserPickzone />} />
          {/* <Route path='/pickzone/:loggedInPersonalId/:personalId' element={userType === 'PERSONAL' ? <PickZoneUserDetail /> : "권한이 없습니다"} /> */}
          <Route path='/pickzone/:loggedInUserId/:personalId' element={userType === 'COMPANY' ? <PickzoneCompanyDetail /> : <PickZoneUserDetail />} />
          <Route path="/helpzone" element={<ListBoard />} />
          <Route path="/cuboard" element={<CUBoard />} />
          <Route path="/rdboard/:corrId" element={<RDBoard />} />
          <Route path='/companyZone' element={<CompanyzoneMain/>} /> 
          <Route path='/ziczoneIntro' element={<IntroMain/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/signup' element={<JoinSelect/>}/>
          <Route path='/signup-com' element={<JoinCom/>}/>
          <Route path='/signup-per' element={<JoinPer/>}/>
          <Route path='/mypage' element={<Mypage/>}/>
        </Routes> 
         <Footer />
      </Router>
    </div>
  );
}
export default App;