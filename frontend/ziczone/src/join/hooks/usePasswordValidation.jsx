import { useState } from 'react';
import { useFormContext } from '../components/FormContext';
import api from '../../common/config/axiosInstance';

const usePasswordValidation = (type, email) => {
    const [password, setPassword] = useState(''); //비밀번호
    const [confirmPassword, setConfirmPassword] = useState(''); //비밀번호 확인
    const [isPasswordValid, setIsPasswordValid] = useState(false); //비밀번호 검증
    const [isConfirmValid, setIsConfirmValid] = useState(false); //비밀번호 확인 검증
    const [isChangePassword, setIsChangePassword] = useState(""); //비밀번호 변경 검증
    const formContext = useFormContext();

    //비밀번호 유효성 검증
    const validatePassword = (pwd) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        return regex.test(pwd);
    };

    //비밀번호 입력시에
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        //비밀번호 유효성
        const pwdValid = validatePassword(newPassword);
        setIsPasswordValid(pwdValid);

        // 비밀번호가 변경되면 확인 유효성도 다시 체크
        setIsConfirmValid(pwdValid && newPassword === confirmPassword);
    };

    //비밀번호 확인 입력시에
    const handleConfirmChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        // 비밀번호 확인 로직
        if (isPasswordValid && password === newConfirmPassword) {
            setIsConfirmValid(true);
            if(type!=="login"){
                formContext.updateFormData('password', password); // 모든 조건이 충족되면 폼 데이터 업데이트
            }
        } else {
            setIsConfirmValid(false);
        }
    };

    //비밀번호 변경
    const changePassword = async() => {
        const response = await api.post("/api/login/emailAuth/change-password", { email, password });
            if (response.status === 200 && response.data === "change Password Success") {
                console.log(response.data);
                setIsChangePassword("changeSuccess");
                alert("비밀번호 변경이 완료되었습니다.");
                window.location.reload();
            }else{
                console.log(response.data);
                setIsChangePassword("changeFail");
            }
    }

    return {
        password,
        confirmPassword,
        isPasswordValid,
        isConfirmValid,
        isChangePassword,
        handlePasswordChange,
        handleConfirmChange,
        changePassword
    };
};

export default usePasswordValidation;