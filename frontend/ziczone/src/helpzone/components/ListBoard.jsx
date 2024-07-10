
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ListBoard.css";
import axios from 'axios';
import HelpZoneIntro from './HelpZoneIntro';
import FilterButtons from './FilterButtons';
import Button from './Button';
import BoardList from './BoardList';
import PageButton from './PageButton';

const ListBoard = () => {
  const [boards, setBoards] = useState([]);
  const [filterType, setFilterType] = useState("latest");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

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
        setTotalPages(Math.ceil(response.data.total / size));
      })
      .catch((error) => {
        console.error("오류 메시지: ", error);
      });
  }, [filterType, page, size]);

  const handleWriteButton = () => {
    navigate('/cuboard');  // CUBoard로 이동
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className='lb_section'>
        <HelpZoneIntro />
        <div className='lb_menu'>
          <FilterButtons setFilterType={ setFilterType } />
          <Button type="button" className="lb_write" onClick={ handleWriteButton }>
            { '글쓰기' }
          </Button>
        </div>
        <BoardList boards={ boards } />
        <PageButton currentPage={ page } totalPages={ totalPages } onPageChange={ handlePageChange } />
      </div>
    </div>
  );
};

export default ListBoard;
