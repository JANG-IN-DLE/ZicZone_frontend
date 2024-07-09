import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MypageUserPurchase from './MypageUserPurchase';

const MypagePurchaseHistory = () => {
    const userId = 7;
    const [purchaseData, setPurchaseData] = useState([]);

    useEffect(() => {
        axios.get(`/api/purchased/${userId}`)
            .then(response => {
                setPurchaseData(response.data.personalUsers);
            })
            .catch(error => {
                console.log("purchaseData 호출 실패: ", error);
            });
    }, [userId]);

    return (
        <div className='pick_purchase_history'>
            {purchaseData.map((user, index) => (
                <MypageUserPurchase
                    key={index}
                    userName={user.user.userName}
                    personalCareer={user.personalCareer}
                    userIntro={user.user.userIntro}
                    jobPositions={user.jobPositions ? user.jobPositions.map(position => position.job.jobName).join(", ") : ''}
                    techStacks={user.techStacks ? user.techStacks.map(stack => ({
                        techName: stack.tech.techName,
                        techUrl: stack.tech.techUrl
                    })) : []}
                    gender={user.gender}
                />
            ))}
        </div>
    );
}

export default MypagePurchaseHistory;
