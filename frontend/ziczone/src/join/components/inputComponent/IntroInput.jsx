import React from 'react';
import '../../styles/Join_Per.css';

const IntroInput = () => {
    return (
        <div className="personal intro">
            <p>한줄 소개</p>
            <textarea placeholder="자신을 어필할 수 있는 간단한 자기소개를 작성해주세요(60자)" />
        </div>
    );
};

export default IntroInput;