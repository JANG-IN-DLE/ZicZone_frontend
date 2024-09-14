import React, { useEffect, useState } from 'react';
import BoardItem from './MypageUserComment';
import PageButton from '../PageButton';
import api from '../../../../common/config/axiosInstance';

const MypageCommentHistory = () => {
    const userId = localStorage.getItem('userId')
    const [commentData, setCommentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // 한 페이지당 컴포넌트 4개

    useEffect(() => {
        api.get(`/api/personal/mycomm/${userId}`)
            .then(response => {
                setCommentData(response.data);
            })
            .catch(error => {
                console.error('Error fetching comment data:', error);
            });
    }, [userId]);

    // 현재 페이지에 해당하는 데이터만 필터링
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = commentData.slice(indexOfFirstItem, indexOfLastItem);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(commentData.length / itemsPerPage);

    return (
        <div>
            <div className='post_comment_history'>
                {currentItems.map((comment) => (
                    <BoardItem key={comment.commId} comment={comment} />
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

export default MypageCommentHistory;
