import React from 'react';
import "../styles/BoardList.css";
import BoardItem from "./BoardItem";

const BoardList = ({ boards, userId }) => {
  if (!boards || boards.length === 0) {
    return <p className='bl_none'>등록된 게시물이 없습니다.</p>;
  }

  return (
    <div className='board_list'>
      {boards.map(board => (
        <BoardItem key={board.corrId} board={board} userId={userId}/>
      ))}
    </div>
  );
};

export default BoardList;