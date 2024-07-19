import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ListBoard.css";
import axios from "axios";
import HelpZoneIntro from "./HelpZoneIntro";
import FilterButtons from "./FilterButtons";
import Button from "./Button";
import BoardList from "./BoardList";
import PageButton from "./PageButton";
import BerryCheck from "./BerryCheck";
import Layout from "../../common/layout/layout";

const ListBoard = () => {
  const [boards, setBoards] = useState([]);
  const [filterType, setFilterType] = useState("latest");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [totalPages, setTotalPages] = useState(1);
  const [showSelect, setShowSelect] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/board/filter", {
          params: {
            filterType,
            page,
            size,
            showSelect,
          },
        });
        setBoards(response.data.dtoList);
        setTotalPages(Math.ceil(response.data.total / size));
      } catch (error) {
        console.error("오류 메시지: ", error);
      }
    };

    fetchData();
  }, [filterType, page, size, showSelect]);

  const handleWriteButton = () => {
    navigate("/cuboard", { state: { userId } });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleCheckChange = () => {
    setShowSelect(!showSelect);
  };

  return (
    <div>
      <Layout>
        <div className="lb_section">
          <HelpZoneIntro />
          <div className="lb_menu">
            <div className="lb_menu_left">
              <FilterButtons setFilterType={setFilterType} />
              <BerryCheck
                label="채택 제외"
                checked={showSelect}
                onChange={handleCheckChange}
              />
            </div>
            {userRole !== "COMPANY" && (
              <Button
                type="button"
                className="lb_write"
                onClick={handleWriteButton}
              >
                {"글쓰기"}
              </Button>
            )}
          </div>
          <BoardList boards={boards} />
          <PageButton
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Layout>
    </div>
  );
};

export default ListBoard;
