import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardItem from './../../../helpzone/components/BoardItem';

const MypagePostHistory = () => {
    const userId = 1;
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        axios.get(`/api/myboard/${userId}`)
        .then(response => {
            setPostData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [userId]);

    return(
        <div>
            {postData.map((post) => (
                <BoardItem key={post.corrId} board={post} />
            ))}
        </div>
    );
}

export default MypagePostHistory;
