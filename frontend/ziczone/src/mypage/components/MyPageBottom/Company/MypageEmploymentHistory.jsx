import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../../config';

const MypageEmploymentHistory = () => {
    const userId = 7;
    const [postData, setPostData] = useState([]);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get(`/api/myboard/${userId}`)
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
