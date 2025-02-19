import React, { useEffect, useState } from "react";
import MypageLeftCo from "./MypageLeftCo";
import api from '../../../common/config/axiosInstance';

function MypageLeftContentCo() {
    const userId = localStorage.getItem('userId')
    const [leftData, setLeftData] = useState({
        userName: "",
        companyCeo: "",
        companyNum: "",
        companyAddr: "",
        email: "",
    });

    useEffect(() => {
        api.get(`/api/company/${userId}`)
            .then(response => {
                setLeftData({
                    userName: response.data.user.userName,
                    companyCeo: response.data.companyCeo,
                    companyNum: formatCompanyNum(response.data.companyNum),
                    companyAddr: response.data.companyAddr,
                    email: response.data.user.email,
                });
            })
            .catch(error => {
                console.error("leftData 호출 실패", error);
            });
    }, [userId]);

    const formatCompanyNum = (num) => {
        if (num.length !== 10) return num; // 길이가 10이 아닐 경우 그대로 반환
        return `${num.substring(0, 3)}-${num.substring(3, 5)}-${num.substring(5)}`;
    };

    return (
        <div>
            <MypageLeftCo
                userName={leftData.userName}
                companyCeo={leftData.companyCeo}
                companyNum={leftData.companyNum}
                companyAddr={leftData.companyAddr}
                email={leftData.email}
            />
        </div>
    );
};

export default MypageLeftContentCo;
