import React from "react";
import "./../../styles/PageButton.css";

const PageButton = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={ handlePrevPage } disabled={ currentPage === 1 || totalPages === 0 }>
        {'<'}
      </button>
      {pages.map(page => (
        <button
          key={ page }
          onClick={() => onPageChange(page)}
          className={ page === currentPage ? "active" : "" }
        >
          { page }
        </button>
      ))}
      <button onClick={ handleNextPage } disabled={ currentPage === totalPages || totalPages === 0 }>
        {'>'}
      </button>
    </div>
  );
}

export default PageButton;