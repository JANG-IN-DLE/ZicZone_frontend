import React from 'react';
import '../../styles/JoinCom/ComNumInput.css'
import "../../styles/form_base.css"


const ComNumInput = () => {
    return (
        <div class="inputform num">
            <p>사업자등록번호</p>
            <div class="num_input">
                <input type="text" />
                <button>인증하기</button>
            </div>
        </div>
    );
};

export default ComNumInput;