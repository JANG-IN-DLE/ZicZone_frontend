import { useState } from 'react';

const useCharacterLimit = (initialValue, maxLength) => {
    const [value, setValue] = useState(initialValue); 

    const handleChange = (e) => {
        //입력값읭 길이가 limit를 초과하지 않는 경우에만 상태 업데이트
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value);
        }
    };

    return [value, handleChange];
};

export default useCharacterLimit;