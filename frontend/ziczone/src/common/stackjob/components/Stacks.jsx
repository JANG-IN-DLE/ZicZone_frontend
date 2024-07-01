import React from 'react';
import '../styles/Stack.css';

// 회원가입에서는 handleSelect 전달해야함.
// 카드에서 읽기전용으로 불러올 때는 SelectedStacks에 해당 스택배열만 전달해주면 됨.
const Stacks = ({ selectedStacks, handleSelect }) => {
    return (
        <div className="techs">
            {selectedStacks.map((stack, index) => (
                <img 
                key={index} 
                src={stack.imageUrl} 
                alt={stack.label} 
                onClick={handleSelect ? () => handleSelect(stack) : undefined} 
                    className={!handleSelect ? 'readonly' : ''}
                />
            ))}
        </div>
    );
};

export default Stacks;