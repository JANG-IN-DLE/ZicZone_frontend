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
import ConfirmModal from "./ConfirmModal";
import Layout from "../../common/layout/layout";
import config from "../../config";

const ListBoard = () => {
  const [boards, setBoards] = useState([]);
  const [filterType, setFilterType] = useState("latest");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [totalPages, setTotalPages] = useState(1);
  const [showSelect, setShowSelect] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userPoint, setUserPoint] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const api = axios.create({
    baseURL: config.baseURL
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/user/board/filter", {
          params: {
            filterType,
            page,
            size,
            showSelect
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

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const role = localStorage.getItem("userRole");
    setUserId(id);
    setUserRole(role);
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchUserPoint = async () => {
        try {
          const response = await api.get(`/api/personal/board/myProfile/${userId}`);
          setUserPoint(response.data.berryPoint);
        } catch (error) {
          console.error("포인트 정보를 가져오는 중 오류 발생: ", error);
        }
      };
      fetchUserPoint();
    }
  }, [userId]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'paymentComplete') {
        window.location.reload();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleWriteButton = () => {
    if (!userId) {
      navigate('/Login');
    } else if (userPoint < 100) {
      setIsModalOpen(true);
    } else {
      navigate('/cuboard', { state: { userId } });
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleCheckChange = () => {
    setShowSelect(!showSelect);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChargeRedirect = (path) => {
    setIsModalOpen(false);
    window.open(path, '_blank');
  };

  return (
    <div>
      <Layout>
        <div className='lb_section'>
          <HelpZoneIntro />
          <div className='lb_menu'>
            <div className="lb_menu_left">
              <FilterButtons setFilterType={setFilterType} />
              <BerryCheck
                label="채택 제외"
                checked={showSelect}
                onChange={handleCheckChange}
              />
            </div>
            {userRole !== 'COMPANY' &&
              <Button type="button" className="lb_write" onClick={handleWriteButton}>
                {'글쓰기'}
              </Button>
            }
          </div>
          <BoardList boards={boards} />
          <PageButton currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
        <ConfirmModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleChargeRedirect}
          userPoint={userPoint}
          mode="berryCheck"
        />
      </Layout>
    </div>
  );
};

export default ListBoard;