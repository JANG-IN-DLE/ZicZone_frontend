import React from "react";

const MypageLeftCo = ({ userName, companyCeo, companyNum, companyAddr, email }) => {
    const [mainAddress, detailAddress] = companyAddr.split('||');

    return (
        <div>
            <div className="mypage_company_title">
                <p>{userName} | {companyCeo}</p>
            </div>
            <div className="mypage_company_left">
                <div className="mypage_company_info">
                    <div className="mypage_company_content">
                        <div>사업자등록번호</div>
                        <div style={{ height: '50px' }}>기업주소</div>
                        <div>이메일</div>
                    </div>
                    <div className="mypage_company_detail">
                        <div className="company_num">{companyNum}</div>
                        <div className="company_addr" style={{ height: '50px' }}>
                            <p>{mainAddress},</p>
                            {/* {detailAddress && `, ${detailAddress}`} */}
                            <p>{detailAddress}</p>
                        </div>
                        <div className="company_email">{email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MypageLeftCo;
