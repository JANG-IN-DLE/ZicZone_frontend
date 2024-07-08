import React from 'react';
import "../styles/BoardList.css";
import BoardItem from "./BoardItem";

const BoardList = ({ boards }) => {
  return (
    <div className='board_list'>
      { boards.map(board => (
        <BoardItem key={ board.corrId } board={ board } />
      ))}
    </div>
  );
};

export default BoardList;