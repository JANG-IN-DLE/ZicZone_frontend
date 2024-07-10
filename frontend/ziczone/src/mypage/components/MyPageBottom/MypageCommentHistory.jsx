import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardItem from './MypageUserComment';

const MypageCommentHistory = () => {
    const userId = 7;
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        axios.get(`/api/mycomm/${userId}`)
        .then(response => {
            setCommentData(response.data);
        })
        .catch(error => {
            console.error('Error fetching comment data:', error);
        });
    }, [userId]);

    return (
        <div>
        {commentData.length > 0 && commentData.map((comment) => (
            <BoardItem key={comment.commId} comment={comment} />
        ))}
    </div>
    );
}

export default MypageCommentHistory;
