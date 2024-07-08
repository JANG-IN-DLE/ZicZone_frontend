import React from 'react';
import "./../../../helpzone/styles/BoardItem.css";

// 특정 날짜와 현재 시간의 차이 계산 -> 상대적인 시간 반환
export const getRelativeTime = (dateString) => {
  // 현재 시간과 과거 시간 생성 
  const now = new Date();
  const past = new Date(dateString);

  // 시간 차이 계산 : 현재 시간 - 과거 시간
  const diff = now - past;

  // 시간 단위 변환
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds}초 전`;
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else {
    return `${days}일 전`;
  }
};

// 포인트 스타일을 설정하는 함수
const getPointStyle = (point) => {
  switch (point) {
    case 100:
      return { backgroundColor: '#FFFFFF', color: '#000000' };
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

const BoardItem = ({ comment }) => {
  return (
    <div className='bi_container'>
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
          {getRelativeTime(comment.corrModify)}
        </div>
        <div className='item_view'>
          조회수 {comment.corrView}
        </div>
      </div>
    </div>
  );
};

export default BoardItem;