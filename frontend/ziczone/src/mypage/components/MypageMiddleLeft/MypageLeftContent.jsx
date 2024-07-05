import React, { useEffect, useState } from "react";
import axios from 'axios'
import MypageLeft from "./MypageLeft";
import python from './../../assets/Python.png';
import microsoft from './../../assets/Microsoft.png';
import mysql from './../../assets/MySQL.png';
import nativescript from './../../assets/NativeScript.png';
import spring_boot from './../../assets/Spring Boot.png';
import sql_server from './../../assets/SQL Server.png';
import microsoft_sql_server from './../../assets/Microsoft SQL Server.png';

const MypageLeftContent = () => {
    const [mypageData, setmypageData] = useState({
        user_name: "",
        career: "",
        user_intro: "",
        email: "",
        job_name: "",
        tech_name: []
    })

    useEffect(() => {
        axios.get('/api/user/{user_id}')
            .then(response => {
                setmypageData({
                    user_name: response.data.user_name,
                    career: response.data.career,
                    user_intro: response.data.user_intro,
                    email: response.data.email,
                    job_name: response.data.job_name,
                    tech_name: response.data.tech_name
                });
            })
            .catch(error => {
                console.error("mypageData 호출 실패")
            });
    }, []);

    return (
        <div>
            <MypageLeft
                user_name={mypageData.user_name}
                career={mypageData.user_name}
                user_intro={mypageData.user_name}
                email={mypageData.user_name}
                job_name={mypageData.user_name}
                tech_name={mypageData.user_name}
            />
        </div>
    );
};

export default MypageLeftContent;
