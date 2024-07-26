// ResumeIntroductionInputView.js
import React from 'react';

const ResumeIntroductionInputView = ({ personalStateFileName }) => {
    return (
        <div className="resume_introduction_upload">
            <div className='introduction_file_upload'>
                <p className="introduction_file_name">
                    {personalStateFileName}
                </p>
            </div>
        </div>
    );
};

export default ResumeIntroductionInputView;