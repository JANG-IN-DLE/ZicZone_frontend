import React from 'react';
import BoardItem from "./BoardItem";
import "../styles/BoardList.css";

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