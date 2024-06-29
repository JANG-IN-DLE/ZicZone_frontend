import { useState } from 'react';

const useSelectedStacks = (maxSelectedStacks = 0) => { //최대 스택
    const [selectedStacks, setSelectedStacks] = useState([]); //선택된 스택 관리

    const handleSelect = (selectedOption) => {
        if (selectedStacks.some(stack => stack.value === selectedOption.value)) { //선택된 스택이 배열에 이미 있는지 검사
            setSelectedStacks(selectedStacks.filter(stack => stack.value !== selectedOption.value));//있다면 해당 스택 제거 후 배열 새로 정의
        } else if (selectedStacks.length < maxSelectedStacks) { //스택 선택수 검사
            setSelectedStacks([...selectedStacks, selectedOption]);
        }
    };

    return {
        selectedStacks,
        handleSelect,
    };
};

export default useSelectedStacks;