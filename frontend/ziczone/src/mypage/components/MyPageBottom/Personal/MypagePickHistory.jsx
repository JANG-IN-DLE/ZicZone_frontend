import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MypageUserPick from './MypageUserPick'
import PageButton from '../PageButton'
import Modal from '../../../../companyzone/components/CompanyzoneModal'
import "./../../../../helpzone/styles/PageButton.css"
import config from '../../../../config';

const MypagePickHistory = () => {
        const userId = localStorage.getItem('userId')
        const [pickData, setPickData] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [selectedItem, setSelectedItem] = useState(null);
        const itemsPerPage = 4; // 한 페이지당 컴포넌트 4개

        const api = axios.create({
                baseURL: config.baseURL
              });
  
        useEffect(() => {
                api.get(`/api/personal/picks/${userId}`)
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

        // 항목 클릭 시 모달 열기
        const handleItemClick = (item) => {
                setSelectedItem(item);
        };

        // 모달 닫기
        const handleCloseModal = () => {
                setSelectedItem(null);
        };

        return (
                <div>
                        <div className='user_nav_history'>
                                {currentItems.map((item, index) => (
                                        <div className='mypage_user_pick' key={index} onClick={() => handleItemClick(item)}>
                                        <MypageUserPick
                                                key={index}
                                                userName={item.user.userName}
                                                companyLogo={item.companyLogoUrl}
                                                userIntro={item.user.userIntro}
                                        />
                                        </div>
                                ))}
                        </div>
                        <PageButton
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                        />
                        {selectedItem && (
                                <Modal
                                        isOpen={!!selectedItem}
                                        onClose={handleCloseModal}
                                        companyLogo={selectedItem.companyLogoUrl}
                                        userName={selectedItem.user.userName}
                                        userIntro={selectedItem.user.userIntro}
                                        companyCeo={selectedItem.companyCeo} // 추가: 필요한 데이터 필드
                                        companyNum={selectedItem.companyNum} // 추가: 필요한 데이터 필드
                                        companyAddr={selectedItem.companyAddr} // 추가: 필요한 데이터 필드
                                        email={selectedItem.user.email} // 추가: 필요한 데이터 필드
                                        companyYear={selectedItem.companyYear} // 추가: 필요한 데이터 필드
                                />
                        )}

                </div>
        )

}

export default MypagePickHistory