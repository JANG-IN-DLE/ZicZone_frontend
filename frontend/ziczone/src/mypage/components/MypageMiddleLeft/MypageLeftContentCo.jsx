import React, { useEffect, useState } from "react";
import axios from 'axios';
import MypageLeftCo from "./MypageLeftCo";

function MypageLeftContentCo() {
    const userId = 1;
    const [leftData, setLeftData] = useState({
        userName: "",
        companyCeo: "",
        companyNum: "",
        companyAddr: "",
        email: "",
    });

    useEffect(() => {
        axios.get(`/api/company/${userId}`)
            .then(response => {
                setLeftData({
                    userName: response.data.user.userName,
                    companyCeo: response.data.companyCeo,
                    companyNum: response.data.companyNum,
                    companyAddr: response.data.companyAddr,
                    email: response.data.user.email,
                });
            })
            .catch(error => {
                console.error("leftData 호출 실패", error);
            });
    }, []);

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
