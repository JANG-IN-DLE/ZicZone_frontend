import React, { useState, useEffect } from "react";
import axios from "axios";
import HelpZoneIntro from "./HelpZoneIntro";
import FilterButtons from "./FilterButtons";
import BoardList from "./BoardList";
import "../styles/ListBoard.css";
import Header from "../../common/header/components/Header";

const ListBoard = () => {
  const [boards, setBoards] = useState([]);
  const [filterType, setFilterType] = useState("latest");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);

  /*
  상태가 변경될 때마다 특정 API 엔드 포인트(/api/board/filter)에 GET 요청 보내고
  받은 응답 데이터를 상태에 저장하는 기능
  */
  useEffect(() => {
    axios
      .get("/api/board/filter", {
        params: {
          filterType,
          page,
          size,
        },
      })
      .then((response) => {
        setBoards(response.data.dtoList);
      })
      .catch((error) => {
        console.error("오류 메시지: ", error);
      });
  }, [filterType, page, size]);

  return (
    <div>
      <Header />
      <div className="lb_section">
        <HelpZoneIntro />
        <FilterButtons setFilterType={setFilterType} />
        <BoardList boards={boards} />
      </div>
    </div>
  );
};

export default ListBoard;
