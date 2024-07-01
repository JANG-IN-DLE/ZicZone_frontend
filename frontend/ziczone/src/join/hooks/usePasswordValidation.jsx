import { useEffect, useState } from 'react';

const usePasswordValidation = (label, password, setPassword, confirmPassword) => {
    const [isValid, setIsValid] = useState(false); //비밀번호 유효성 검사

    //입력될때마다 비밀번호 검증
    useEffect(() => {
        const validatePassword = () => {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
            if (label === "비밀번호 확인") { //비밀번호 확인일 경우, 비밀번호가 일치하고 정규식을 통과하는지 확인
                setIsValid(password === confirmPassword && regex.test(confirmPassword));
            } else {
                setIsValid(regex.test(password));
            }
        };

        validatePassword(); // 비밀번호 검증
    }, [password, confirmPassword, label]); //password, confirmpassword, label이 변경될때마다 실행

    //입력값이 변경될 때 호출 : setPassword함수를 호출해서 입력값을 업데이트
    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    return [isValid, handleChange];
};

export default usePasswordValidation;