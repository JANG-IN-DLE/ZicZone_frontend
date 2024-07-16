import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Resume from './resume/components/Resume';
import ResumeView from "./resume/components/ResumeView"

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
  // const [userType, setUserType] = useState(null);

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
          <Route path='/pickzone/:companyId/:personalId' element={<PickzoneCompanyDetail />} />
          <Route path='/pickzone/:loggedInPersonalId/:personalId' element={<PickZoneUserDetail />} />
          <Route path='/' element={<MainComponent />} />
          <Route path='/pickzone/:personalId' element={<PickZoneUserDetail />} />
          <Route path='/pickzone' element={<UserPickzone />} />
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
          <Route path="/pickzone/:companyId/:personalId" component={<PickZoneUserDetail/>} />
        </Routes> 
         <Footer />
      </Router>
    </div>

  );

}
export default App;