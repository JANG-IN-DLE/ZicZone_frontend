import React from 'react';
import "../../styles/JoinCom/JobInput.css"
import Jobs from '../../../common/stackjob/components/Jobs';


const JobInput = () => {
    return (
        <div class="inputform job">
                <p>희망 분야<span>*최대 3개</span></p>
                <Jobs/>
            </div>
    );
};

export default JobInput;