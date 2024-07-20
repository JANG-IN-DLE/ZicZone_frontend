import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MypageUserPick from './MypageUserPick'
import PageButton from '../PageButton'
import "./../../../../helpzone/styles/PageButton.css"

const MypagePickHistory = () => {
        const userId = localStorage.getItem('userId')
        const [pickData, setPickData] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 4; // 한 페이지당 컴포넌트 4개

        useEffect(() => {
                axios.get(`/api/personal/picks/${userId}`)
                        .then(response => {
                                setPickData(response.data);
                        })
                        .catch(error => {
                                console.log("pickData 호출 실패: " + error);
                        });
        }, [userId]);

        // 현재 페이지에 해당하는 데이터만 필터링
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = pickData.slice(indexOfFirstItem, indexOfLastItem);

        // 총 페이지 수 계산
        const totalPages = Math.ceil(pickData.length / itemsPerPage);

        return (
                <div>
                        <div className='user_nav_history'>
                                {currentItems.map((item, index) => (
                                        <MypageUserPick
                                                key={index}
                                                userName={item.user.userName}
                                                companyLogo={item.companyLogo}
                                                userIntro={item.user.userIntro}
                                        />
                                ))}
                        </div>
                        <PageButton
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                        />
                </div>
        )

}

export default MypagePickHistory