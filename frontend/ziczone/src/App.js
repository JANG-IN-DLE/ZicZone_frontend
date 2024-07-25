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
import MypageCompany from './mypage/components/MypageCompany';
import CheckPassword from './mypage/components/MypageModal/CheckPassword';
import ResumeEdit from "./resume/components/ResumeEdit"
import CheckoutPage from './mypage/components/Toss/CheckoutPage';
import { SuccessPage } from './mypage/components/Toss/SuccessPage';
import { FailPage } from './mypage/components/Toss/FailPage';
import ResumeRedirect from './resume/components/ResumeRedirect';

import { useDispatch, useSelector } from 'react-redux';
import { subscribeToSSE, initAlarm } from './store/actions/alarmActions';



function App() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    setUserType(localStorage.getItem("userRole"));
  }, []);

  //알림
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (userId && token) {
      dispatch(initAlarm(userId, token));
      dispatch(subscribeToSSE(userId, token));
    }
  }, [dispatch, userId, token]);

  return (
    <div>

      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/companypick' element={<CompanyPickzone />} />
          <Route path='/personalpick' element={<UserPickzone />} />
          <Route path='/pickzone/:loggedInUserId/:personalId' element={userType === 'COMPANY' ? <PickzoneCompanyDetail /> : <PickZoneUserDetail />} />
          <Route path="/helpzone" element={<ListBoard />} />
          <Route path="/cuboard" element={<CUBoard />} />
          <Route path="/rdboard/:corrId" element={<RDBoard />} />
          <Route path='/companyZone' element={<CompanyzoneMain />} />
          <Route path='/ziczoneIntro' element={<IntroMain />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/signup' element={<JoinSelect />} />
          <Route path='/signup-com' element={<JoinCom />} />
          <Route path='/signup-per' element={<JoinPer />} />
          <Route path="/pickzone/:companyId/:personalId" element={<PickZoneUserDetail />} />
          <Route path="/personal/:userId" element={<Mypage />} />
          <Route path="/company/:userId" element={<MypageCompany />} />
          {/* <Route path="/personal/resumes/:userId" element={<ResumeEdit />} /> */}
          <Route path="/personal/resumes/:userId" element={<ResumeRedirect />} /> {/* 중간 페이지 라우트 */}
          <Route path="/personal/resumes/create/:userId" element={<Resume />} /> {/* 생성 페이지 */}
          <Route path="/personal/resumes/view/:userId" element={<ResumeView />} /> {/* 조회 페이지 */}
          <Route path="/personal/resumes/edit/:userId" element={<ResumeEdit />} /> {/* 수정 페이지 */}
          <Route path="/charge" element={<ChargeMain />} />
          <Route path='/toss' element={<CheckoutPage />} />
          <Route path='/success' element={<SuccessPage />} />
          <Route path='/fail' element={<FailPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;