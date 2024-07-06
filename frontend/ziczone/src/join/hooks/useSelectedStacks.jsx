import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

const useSelectedStacks = (maxSelectedStacks = 0, initialStacks = [], updateFormData) => { //최대 스택
    const [selectedStacks, setSelectedStacks] = useState(initialStacks.map(tech => ({ value: tech, label: tech }))); //선택된 스택 관리
    const [techs, setTechs] = useState([]);

    const handleSelect = useCallback((selectedOption) => {
        setSelectedStacks(prevStacks => {
            let newStacks;
            if (prevStacks.some(stack => stack.value === selectedOption.value)) {
                newStacks = prevStacks.filter(stack => stack.value !== selectedOption.value);
            } else if (prevStacks.length < maxSelectedStacks) {
                newStacks = [...prevStacks, selectedOption];
            } else {
                return prevStacks; // 최대 선택 개수를 초과하면 변경하지 않음
            }
            
            // FormContext 업데이트
            updateFormData('techIds', newStacks.map(stack => stack.value));
            
            return newStacks;
        });
    }, [maxSelectedStacks, updateFormData]);

    useEffect(() => {
        axios.get('/api/signup/techs')
            .then(response => {
                setTechs(response.data);
            })
            .catch(error => {
                console.error('Error fetching techs: ', error)
            });
    }, []);

    return {
        selectedStacks,
        handleSelect,
        techs
    };
};

export default useSelectedStacks;