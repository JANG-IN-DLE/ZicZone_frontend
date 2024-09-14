import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../common/config/axiosInstance';

const ResumeRedirect = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    const checkResume = async () => {
      try {
        const response = await api.get(`http://localhost:12000/api/personal/resumes/check/${userId}`);
        const hasResume = response.data; // assuming the API returns a boolean

        if (hasResume) {
          navigate(`/personal/resumes/view/${userId}`);
        } else {
          navigate(`/personal/resumes/create/${userId}`);
        }
      } catch (error) {
        console.error('Failed to check resume status', error);
      }
    };

    checkResume();
  }, [navigate, userId]);

  return <div>Loading...</div>; // Show a loading indicator while checking
};

export default ResumeRedirect;
