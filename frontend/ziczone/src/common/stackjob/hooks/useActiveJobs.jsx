import { useState } from 'react';

// 최대 선택 가능한 직무의 수(기본값 0)
const useActiveJobs = (maxActiveJobs = 0) => {
    const [activeJobs, setActiveJobs] = useState([]); //현재 선택된 직업 항목들을 배열로 저장

    const handleJobClick = (job) => { //직업 항목 클릭시 호출
        if (activeJobs.includes(job)) { //배열에 클릭한 job이 포함되어 있는지 확인 : 포함시에 해당 항목을 비활성화
            setActiveJobs(activeJobs.filter(activeJob => activeJob !== job)); //배열에서 삭제
        } else if (activeJobs.length < maxActiveJobs) { // 현재 선택된 항목의 수가 최대보다 적은지 : 적으면 항목 추가
            setActiveJobs([...activeJobs, job]); //항목 추가 후에 새로운 배열 만든다
        }
    };

    return {
        activeJobs,
        handleJobClick,
    };
};

export default useActiveJobs;