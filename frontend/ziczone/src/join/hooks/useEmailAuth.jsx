import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useFormContext } from '../components/FormContext';
import config from '../../config';

const useEmailVerification = ( type ) => {
    const formContext = useFormContext();
    const [email, setEmail] = useState(''); // 이메일
    const [inputCode, setInputCode] = useState(''); // 인증코드
    const [isSend, setIsSend] = useState(""); //전송성공여부
    const [isAuth, setIsAuth] = useState(""); //인증성공여부
    const [timeLeft, setTimeLeft] = useState(60); // 3분 타이머 (180초)
    const timerRef = useRef(null); // 타이머 ID 저장

    const api = axios.create({
        baseURL: config.baseURL
      });


    //이메일 입력 값이 변경될 때 호출
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    //인증 코드 입력 값이 변경될 때 호출
    const handleCodeChange = (e) => {
        setInputCode(e.target.value);
    };


    //이메일 형식 검사
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    //유효시간 형식 변경
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };


    //타이머
    useEffect(() => {
        if (isSend === "send_success" && timeLeft > 0) { //타이머 진행
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) { //시간만료
            setIsAuth("auth_expired");
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [isSend, timeLeft]);


    //인증메일 보내기 : axios사용해서 입력한 email보냄 -> (백)해당 이메일로 인증번호 보냄 / 응답 : 200
    const sendVerificationEmail = async () => {
        if (!isValidEmail(email)) {
            setIsSend("invalid_email");
            return;
        }
        try {
            const api_send = type === "login" ? '/api/login/emailAuth' : '/api/auth/email-verification'
            const response = await api.post(api_send, { email });
            if (response.status === 200 && response.data === "Email Duplication") {
                setIsSend("duplication_email");
            } else if (response.status === 200 && response.data === "email empty") {
                setIsSend("empty_email");
            } else if (response.status === 200 && response.data === "email sent") {
                setIsSend("send_success");
                setIsAuth(""); //다시 인증번호 보낼때 인증상태 초기화
                setTimeLeft(60); //타이머 초기화
            } 
            else {
                setIsSend("send_fail");
            }
        } catch (error) {
            setIsSend("send_error");
        }
    };


    //인증 코드 확인 : axios사용해서 email과 입력한 코드보냄 -> (백)해당 이메일을 키값으로 갖는 인증코드와 보낸 인증코드가 같은지 검사
    //응답 : 200, Auth Success or Auth Fail
    const verifyAuthCode = async () => {
    if(isAuth==="auth_expired")
        return;

        const api_code = type==="login" ? 'api/login/emailAuth/verify-email' : '/api/auth/email-verification/complete';
        try {
            const response = await api.post(api_code, { email, code: inputCode });
            // 인증성공
            if (response.status === 200 && response.data === "Auth Success") {
                setIsAuth("auth_success");
                clearInterval(timerRef.current); // 인증 성공 시 타이머 정지
                if (type !== 'login' && formContext?.updateFormData) {
                    formContext.updateFormData('email', email);
                }
            }else if (response.status === 200 && response.data === "Auth Fail") {
                setIsAuth("auth_wrong");
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
        timeLeft,
        handleEmailChange,
        handleCodeChange,
        sendVerificationEmail,
        verifyAuthCode,
        formatTime
    };
};

export default useEmailVerification;