import { useState, useRef } from 'react';
import { useFormContext } from '../components/FormContext';

const useProfileImage = () => {
    const { updateFormData } = useFormContext(); 
    const [profile, setProfile] = useState(null); //선택된 이미지의 url을 저장
    const fileInputRef = useRef(null); //파일 입력 요소에 접근

    const handleCameraClick = () => {
        fileInputRef.current.click(); //클릭하면, 파일선택창 열기
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; //선택된 파일에 접근
        if (file) {
            const reader = new FileReader(); //파일이 존재하면 FileReader객체 생성
            reader.onloadend = () => {
                const imageUrl = reader.result; //이미지 url저장
                setProfile(reader.result);
                updateFormData('companyLogo', imageUrl); //저장된 url profile 필드에 저장
            };
            reader.readAsDataURL(file);
        }
    };

    return {
        profile,
        fileInputRef,
        handleCameraClick,
        handleFileChange,
    };
};

export default useProfileImage;