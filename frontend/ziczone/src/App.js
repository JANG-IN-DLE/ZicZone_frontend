import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Resume from './resume/components/Resume';
import ResumeView from "./resume/components/ResumeView"


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

    // <div>
    //   <Router>
    //     <Header />
    //     <Routes>
    //       <Route path='/' element={<NoLoginMainComponent />} />
    //       <Route path='/pickzone/:personalId' element={<PickZoneUserDetail />} />
    //       <Route path='/pickzone' element={<UserPickzone />} />
    //       <Route path="/helpzone" element={<ListBoard />} />
    //       <Route path="/cuboard" element={<CUBoard />} />
    //       <Route path="/rdboard/:corrId" element={<RDBoard />} />
    //     </Routes>
    //     {/* <Footer /> */}
    //   </Router>
    // </div>

    <div>
      {/* <Resume /> */}
      <ResumeView />
    </div>

  );

}
export default App;