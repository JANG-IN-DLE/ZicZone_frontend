import React from 'react';
import "./../../../styles/BoardItem.css";
import { Link } from 'react-router-dom';

// 포인트 스타일을 설정하는 함수
const getPointStyle = (point) => {
  switch (point) {
    case 100:
      return { backgroundColor: '#FFFFFF', color: '#000000', border: '2px solid #000', lineHeight: '27px'};
    case 200:
      return { backgroundColor: 'rgba(0, 81, 186, 0.25)', color: '#FFFFFF' };
    case 500:
      return { backgroundColor: 'rgba(0, 81, 186, 0.5)', color: '#FFFFFF' };
    case 1000:
      return { backgroundColor: 'rgba(0, 81, 186, 0.75)', color: '#FFFFFF' };
    case 1500:
      return { backgroundColor: '#0051BA', color: '#FFFFFF' };
    default:
      return { backgroundColor: '#FFFFFF', color: '#000000' };
  }
};

// 날짜 포맷팅 함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const BoardItem = ({ comment }) => {
  return (
    <Link to={`/rdboard/${comment.corrId}`} style={{ textDecoration: "none", color: "#000"}}>
      <div className='bi_container' style={{marginLeft: "47px"}}>
        <div className='item_point' style={getPointStyle(comment.corrPoint)}>
          {comment.corrPoint}
        </div>
        <div className='bi_container_center'>
          <div className='item_title'>
            {comment.commContent}
          </div>
          <div className='item_userInfo'>
            {comment.userName} | {comment.personalCareer}
          </div>
        </div>
        <div className='bi_container_end'>
          <div className='item_date'>
            {formatDate(comment.commModify)}
          </div>
          {/* <div className='item_view'>
            조회수 {comment.corrView}
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default BoardItem;
