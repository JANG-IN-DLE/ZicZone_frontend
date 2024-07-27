import React, { useState, useEffect } from "react";
import MypageRight from "./MypageRight";
import axios from "axios";
import config from '../../../config';

const MypageRightContent = () => {
    const userId = localStorage.getItem("userId");
    const [berryPoint, setBerryPoint] = useState(0);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        const fetchBerryPoints = async () => {
            try {
                const response = await api.get(`/api/payments/personal/totalBerryPoints/${userId}`);
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
