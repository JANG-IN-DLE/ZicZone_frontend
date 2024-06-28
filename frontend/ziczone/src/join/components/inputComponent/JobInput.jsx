import React from 'react';
import '../../styles/Join_Per.css';
import Jobs from '../../../common/\bstackjob/components/Jobs';


const JobInput = () => {
    return (
        <div class="personal job">
                <p>희망 분야<span>*최대 3개</span></p>
                <Jobs/>
            </div>
    );
};

export default JobInput;