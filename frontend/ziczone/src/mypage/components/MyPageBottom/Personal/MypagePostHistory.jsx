import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardItem from '../../../../helpzone/components/BoardItem';
import PageButton from '../PageButton';

const MypagePostHistory = () => {
    const userId = localStorage.getItem('userId')
    const [postData, setPostData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // 한 페이지당 컴포넌트 4개

    useEffect(() => {
        axios.get(`/api/personal/myboard/${userId}`)
            .then(response => {
                setPostData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);

    // 현재 페이지에 해당하는 데이터만 필터링
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = postData.slice(indexOfFirstItem, indexOfLastItem);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(postData.length / itemsPerPage);

    return (
        <div>
            <div className='post_comment_history'>
                {currentItems.map((post) => (
                    <BoardItem key={post.corrId} board={post} />
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

export default MypagePostHistory;
