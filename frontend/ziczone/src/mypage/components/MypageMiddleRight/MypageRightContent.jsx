import React, { useState, useEffect } from "react";
import MypageRight from "./MypageRight";
import axios from "axios";

const MypageRightContent = () => {
    const userId = localStorage.getItem("userId");
    const [berryPoint, setBerryPoint] = useState(0);

    useEffect(() => {
        const fetchBerryPoints = async () => {
            try {
                const response = await axios.get(`http://localhost:12000/api/payments/personal/totalBerryPoints/${userId}`);
                setBerryPoint(response.data.totalBerryPoints);
            } catch (error) {
                console.error("Error fetching berry points:", error);
            }
        };

        fetchBerryPoints();
    }, [userId]);

    return (
        <MypageRight
            berry_point={berryPoint}
        />
    );
}

export default MypageRightContent;
