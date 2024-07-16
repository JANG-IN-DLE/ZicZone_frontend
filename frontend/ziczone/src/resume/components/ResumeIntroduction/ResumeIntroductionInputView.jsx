import React from 'react';

const ResumeIntroductionInputView = ({ personalState }) => {
    return (
        <div className="resume_introduction_upload">
            <div className='introduction_file_upload'>
                <p className="introduction_file_name">
                    {personalState}
                </p>
            </div>
        </div>
    );
};

export default ResumeIntroductionInputView;
