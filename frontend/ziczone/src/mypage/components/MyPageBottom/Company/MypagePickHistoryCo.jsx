import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MypageCompPick from './MypageCompPick';
import PageButton from './../../../../helpzone/components/PageButton';
import "./../../../../helpzone/styles/PageButton.css"

const MypagePickHistoryCo = () => {
    const userId = 1;
    const [scrapData, setScrapData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // 한 페이지당 컴포넌트 4개

    useEffect(() => {
        axios.get(`/api/company-user-picks/${userId}`)
            .then(response => {
                setScrapData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);

    // 현재 페이지에 해당하는 데이터만 필터링
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = scrapData.slice(indexOfFirstItem, indexOfLastItem);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(scrapData.length / itemsPerPage);

    return (
        <div>
            <div className='user_nav_history'>
                {currentItems.map((user, index) => (
                    <MypageCompPick
                        key={index}
                        userName={user.user.userName}
                        personalCareer={user.personalCareer}
                        userIntro={user.user.userIntro}
                        jobPositions={user.jobPositions ? user.jobPositions.map(position => position.job.jobName).join(", ") : ''}
                        techStacks={user.techStacks ? user.techStacks.map(stack => ({
                            techName: stack.tech.techName,
                            techUrl: stack.tech.techUrl
                        })) : []}
                        gender={user.gender}
                    />
                ))}
            </div>
            <PageButton
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
        </div>
    );
}

export default MypagePickHistoryCo;
