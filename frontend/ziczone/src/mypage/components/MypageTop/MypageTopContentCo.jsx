import React, { useEffect, useState } from "react";
import MypageTopCo from "./MypageTopCo";
import axios from "axios";

const MypageTopContentCo = () => {
    const userId = 1;
    const [topData, setTopData] = useState({
        companyLogo: ""
    })

    useEffect(() => {
        axios.get(`/api/company/${userId}`)
            .then(response => {
                setTopData({
                    companyLogo: response.data.companyLogo
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