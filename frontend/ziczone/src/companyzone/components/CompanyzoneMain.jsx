import React, { useState } from "react";
import CompanyHeader from "./CompanyHeader";
import CompanyCard from "./CompanyCard";
import Modal from "./Modal";
import "../styles/CompanyMain.css";

const CompanyzoneMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main_container">
      <CompanyHeader />
      <div className="company_container">
        <CompanyCard onCardClick={handleCardClick} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
      </div>
    </div>
  );
};

export default CompanyzoneMain;
