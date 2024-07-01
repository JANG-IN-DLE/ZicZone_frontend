import { useState } from 'react';
import axios from 'axios';

// 커스텀 훅을 정의합니다.
const useCompanyAuth = () => {
    const [comNum, setComNum] = useState(''); // comNum : 사용자가 입력한 사업자등록번호를 저장
    const [isValid, setIsValid] = useState(null); // isValid : 사업자등록번호 유효성 저장
    const [isVerified, setIsVerified] = useState(false); // isCerified : 인증완료상태를 저장

    const handleInputChange = (event) => {
        setComNum(event.target.value); // 입력 값 변경마다 업데이트
        setIsVerified(false); // 인증상태 초기화
    };

    const handleVerification = async () => {
        // API URL
        const apiUrl = `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=vLjfNFfH33xankJ5adNBW4h2vWrOCj%2FmA6VFOs1UruTG33JdUfDjGX648njaxEcVzl9JYLYyiVQDt4bNXgHFpg%3D%3D`;
        
        const data = {
            b_no: [comNum]
        };

        try {
            // axios : POST
            const response = await axios.post(apiUrl, data, {
                headers: {//전달할 값과 받는 값의 형태
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const result = response.data;

            // 응답상태OK, (match_cnt : 조회 매칭 수)매칭된 사업자등록번호 유무, 사업자등록상태코드01(유효)
            if (result.status_code === "OK" && result.match_cnt > 0 && result.data[0].b_stt_cd === '01') {
                setIsValid(true);
                setIsVerified(true);
            } else {
                setIsValid(false);
                setIsVerified(false);
            }
        } catch (error) {
            console.error('사업자등록번호 검증 오류:', error);
            setIsValid(false);
            setIsVerified(false);
        }
    };

    // 커스텀 훅이 반환할 값을 정의합니다.
    return {
        comNum,
        isValid,
        isVerified,
        handleInputChange,
        handleVerification
    };
};

export default useCompanyAuth;

