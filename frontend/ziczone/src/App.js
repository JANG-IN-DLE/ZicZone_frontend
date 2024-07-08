import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import UserPickzone from './pickzone/components/UserPickzone';
import CompanyPickzone from './pickzone/components/CompanyPickzone';
// import PickZoneDetail from './pickzone/components/PickzoneDetail';
import PickzoneCompanyDetail from './pickzone/components/PickzoneCompanyDetail';
import PickZoneUserDetail from './pickzone/components/PickzoneUserDetail';
import Footer from './common/footer/components/Footer'
// import Pickzone from './pickzone/components/Pickzone';
// import LoginMainComponent from './main/components/LoginMainComponent';
import ChargeMain from './payment/components/ChargeMain';
import NoLoginMainComponent from './main/components/NoLoginMainComponent';
import Header from './common/header/components/Header';

import LoginMainComponent from './main/components/LoginMainComponent'

import ListBoard from './helpzone/components/ListBoard';
import MypageUser from "./mypage/components/MypageUser"
import CUBoard from "./helpzone/components/CUBoard";
import RDBoard from "./helpzone/components/RDBoard";


function App() {
  const [userType, setUserType] = useState(null);

  // 나중에 로그인 할때 session에서 회원 정보 비교하기 위해서
  // useEffect(() => {
  //   axios.get('/api/session-user-type')
  //     .then(response => {
  //       setUserType(response.data.userType);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching user type from session: ", error);
  //     });
  // }, []);

  // if(userType === null){
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
          <Route path='/' element={<NoLoginMainComponent />} />
          <Route path='/pickzone/:personalId' element={<PickZoneUserDetail />} />
          <Route path='/pickzone' element={<UserPickzone />} />
          <Route path="/helpzone" element={<ListBoard />} />
          <Route path="/cuboard" element={<CUBoard />} />
          <Route path="/rdboard/:corrId" element={<RDBoard />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>

  );

}
export default App;