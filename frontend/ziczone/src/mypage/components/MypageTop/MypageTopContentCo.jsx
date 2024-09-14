import React, { useEffect, useState } from "react";
import MypageTopCo from "./MypageTopCo";
import api from "../../../common/config/axiosInstance";

const MypageTopContentCo = () => {
    const userId = localStorage.getItem('userId')
    const [topData, setTopData] = useState({
        companyLogo: ""
    })

    useEffect(() => {
        api.get(`/api/company/${userId}`)
            .then(response => {
                setTopData({
                    companyLogo: response.data.companyLogoUrl
                });
            })
            .catch(error => {
                console.log("topData 데이터 호출 실패", error);
            });
    }, []);

    return (
        <div>
            <MypageTopCo
                companyLogo={topData.companyLogo}
            />
        </div>
    )
}

export default MypageTopContentCo