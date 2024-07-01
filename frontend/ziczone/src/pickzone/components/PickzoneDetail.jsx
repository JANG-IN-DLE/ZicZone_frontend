import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProfileCard from "../../common/card/components/ProfileCard";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from '../../common/card/assets/personal_f_image.png';

export default function PickZoneDetail() {
    const { personalId} = useParams();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        axios.get(`/api/pickcards/${personalId}`)
            .then(response => {
                setUserDetails(response.data);
            })
            .catch(error => {
                console.log('Error fetching user detauls: ', error);
            });
    }, [personalId]);
    if(!userDetails) {
        return <div>Loading...</div>
    }
    const userImage = userDetails.gender === 'MALE' ? personalMImage : personalFImage;
    const jobNames = userDetails.jobName ? userDetails.jobName.split(',') : [];
    const techNames = userDetails.techName ? userDetails.techName.split(',') : [];
    return(
        <ProfileCard
            key={userDetails.personalId}
            personalId={userDetails.personalId}
            userImage={userImage}
            jobNames={jobNames}
            userName={userDetails.userName}
            userCareer={userDetails.personalCareer}
            userIntro={userDetails.userIntro}
            techNames={techNames}
        />

    )
}