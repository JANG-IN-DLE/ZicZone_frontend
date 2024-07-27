import { useState, useRef } from 'react';
import { useFormContext } from '../components/FormContext';

const useProfileImage = () => {
    const { formData, updateFormData } = useFormContext(); 
    const [ profile, setProfile ] = useState(null); //선택된 이미지의 url을 저장
    const fileInputRef = useRef(null); //파일 입력 요소에 접근

    const handleCameraClick = () => {
        fileInputRef.current.click(); //클릭하면, 파일선택창 열기
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; //선택된 파일에 접근
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfile(imageUrl);
            updateFormData('companyLogo', file); // 파일 자체를 저장
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