import React from "react";
import MypageLeft from "./MypageLeft";
import python from './../../assets/Python.png';
import microsoft from './../../assets/Microsoft.png';
import mysql from './../../assets/MySQL.png';
import nativescript from './../../assets/NativeScript.png';
import spring_boot from './../../assets/Spring Boot.png';
import sql_server from './../../assets/SQL Server.png';
import microsoft_sql_server from './../../assets/Microsoft SQL Server.png';

const MypageLeftContent = () => {
    const left_detail = {
        name: '강승규',
        career: '신입',
        intro:'토스페이먼츠 팀은 고객의 성장은 곧 우리의 성장이라고 믿고 있어요. 하다 보면 상품을 소싱하고 판매하는 일',
        email: '@naver.com',
        jobs: ['#프론트엔드', '#풀스택 개발자'],
        tech: [python, microsoft, mysql, nativescript, spring_boot, sql_server, microsoft_sql_server]
    };

    return (
        <div>
            <MypageLeft
                name={left_detail.name}
                career={left_detail.career}
                intro={left_detail.intro}
                email={left_detail.email}
                jobs={left_detail.jobs}
                tech={left_detail.tech}
            />
        </div>
    );
};

export default MypageLeftContent;
