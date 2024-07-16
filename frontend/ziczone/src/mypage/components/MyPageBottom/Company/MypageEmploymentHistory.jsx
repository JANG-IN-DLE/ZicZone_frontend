import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MypageEmploymentHistory = () => {
    const userId = 7;
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

    return (
        <div>
        </div>
    );
}

export default MypageEmploymentHistory;
