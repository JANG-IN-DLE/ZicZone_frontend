import React, { useEffect, useState } from "react";
import axios from "axios";
import Job from "./Job";
import PickCard from "../../common/card/components/PickCard";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";

function Pickzone() {
  const [pickCards, setPickCards] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/pickcards")
      .then((response) => {
        setPickCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pick cards: ", error);
      });

    axios
      .get("/api/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs: ", error);
      });
  }, []);

  return (
    <div>
      <h2>Jobs</h2>
      <div>
        {jobs.map((job) => (
          <Job key={job.jobId} job={job} />
        ))}
      </div>
      <h2>Pick Cards</h2>
      <div className="user_card_container">
        {pickCards.map((card) => {
          const userImage =
            card.gender === "MALE" ? personalMImage : personalFImage;

          return (
            <PickCard
              key={card.personalId}
              userImage={userImage}
              jobNames={card.jobNames ? card.jobNames.split("#") : []}
              userName={card.userName}
              userCareer={card.personalCareer}
              userIntro={card.userIntro}
              techNames={card.techNames ? card.techNames.split("#") : []}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Pickzone;
