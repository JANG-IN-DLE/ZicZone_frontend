import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardItem from './MypageUserComment';
import PageButton from '../PageButton';

const MypageCommentHistory = () => {
    const userId = 7;
    const [commentData, setCommentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // 한 페이지당 컴포넌트 4개

    useEffect(() => {
        axios.get(`/api/mycomm/${userId}`)
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
            <div>
                {commentData.length > 0 && commentData.map((comment) => (
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
