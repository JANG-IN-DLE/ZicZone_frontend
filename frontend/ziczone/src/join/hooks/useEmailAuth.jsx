import { useState } from 'react';
import axios from 'axios';

const useEmailVerification = () => {
    const [email, setEmail] = useState(''); // 이메일
    const [inputCode, setInputCode] = useState(''); // 인증코드
    const [isSend, setIsSend] = useState(""); //전송성공여부
    const [isAuth, setIsAuth] = useState(""); //인증성공여부

    //이메일 입력 값이 변경될 때 호출
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    //인증 코드 입력 값이 변경될 때 호출
    const handleCodeChange = (e) => {
        setInputCode(e.target.value);
    };

    //인증메일 보내기 : axios사용해서 입력한 email보냄 -> (백)해당 이메일로 인증번호 보냄 / 응답 : 200
    const sendVerificationEmail = async () => {
        try {
            const response = await axios.post('/api/auth/email-verification', { email });
            if (response.status === 200) {
                setIsSend("send_success");
            } else {
                setIsSend("send_fail");
            }
        } catch (error) {
            setIsSend("send_error");
        }
    };

    //인증 코드 확인 : axios사용해서 email과 입력한 코드보냄 -> (백)해당 이메일을 키값으로 갖는 인증코드와 보낸 인증코드가 같은지 검사
    //응답 : 200, Auth Success or Auth Fail
    const verifyAuthCode = async () => {
        try {
            const response = await axios.post('/api/auth/email-verification/complete', { email, code: inputCode });
            if (response.status === 200 && response.data === "Auth Success") {
                setIsAuth("auth_success")
            } else {
                setIsAuth("auth_fail")
            }
        } catch (error) {
            setIsAuth("auth_error")
        }
    };

    return {
        email,
        inputCode,
        isSend,
        isAuth,
        handleEmailChange,
        handleCodeChange,
        sendVerificationEmail,
        verifyAuthCode
    };
};

export default useEmailVerification;